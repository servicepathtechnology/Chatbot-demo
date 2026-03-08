import { NextResponse } from 'next/server';
import { gemini } from '@/lib/gemini';
import { SYSTEM_PROMPT } from '@/lib/systemPrompt';

// In-memory rate limiting map for demo purposes
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();

export async function POST(req: Request) {
  try {
    // Basic IP rate limiting mapping (for demo/Vercel)
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    let limiter = rateLimitMap.get(ip);
    
    if (!limiter || now > limiter.resetTime) {
      limiter = { count: 0, resetTime: now + 60000 }; // reset every minute
    }
    
    limiter.count++;
    rateLimitMap.set(ip, limiter);

    if (limiter.count > 10) {
      return NextResponse.json(
        { message: "You're moving fast! Give me a minute to catch my breath.", quickReplies: [] }, 
        { status: 429 }
      );
    }

    const body = await req.json();
    let { messages, leadContext = 'none', capturedLead = {}, sessionId } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages array' }, { status: 400 });
    }

    // Lead Capture Logical override
    // Simple state machine handling for the conversational UI based on PRD
    const lastUserMessage = messages[messages.length - 1]?.content || '';
    
    // Check if we are currently mid-lead capture
    if (leadContext === 'ask_name') {
      const name = lastUserMessage;
      return NextResponse.json({
        message: `Great to meet you, ${name}! And what's the best email address to reach you at?`,
        quickReplies: [],
        leadState: { step: 'ask_email', capturedLead: { ...capturedLead, name } }
      });
    }

    if (leadContext === 'ask_email') {
      const email = lastUserMessage.toLowerCase();
      // Wait, we should actually trigger the lead submission here!
      if (email.includes('@')) {
        const finalLead = { ...capturedLead, email, source: 'chatbot', timestamp: new Date().toISOString() };
        
        // Asynchronously call our own API to save the lead
        const protocol = req.headers.get('x-forwarded-proto') || 'http';
        const host = req.headers.get('host');
        fetch(`${protocol}://${host}/api/leads`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalLead)
        }).catch(err => console.error("Lead save background error:", err));

        return NextResponse.json({
          message: `Perfect, ${finalLead.name}! ✅ Our team will be in touch at ${email} shortly. Is there anything else I can help you with today?`,
          quickReplies: ["Tell me about your services", "No, I'm good"],
          leadState: { step: 'complete', leadCaptured: true, capturedLead: finalLead }
        });
      } else {
        return NextResponse.json({
          message: "Hmm, that doesn't look like a valid email. Could you try again?",
          quickReplies: [],
          leadState: { step: 'ask_email', capturedLead }
        });
      }
    }

    // Is the user expressing interest into being contacted or asked? Look for intents
    const contactIntents = ['get in touch', 'contact sales', 'speak with someone', 'schedule a call', 'book a call', 'talk to human'];
    if (contactIntents.some(intent => lastUserMessage.toLowerCase().includes(intent)) && leadContext !== 'complete') {
      return NextResponse.json({
        message: "I'd love to connect you with our team! To get started, what's your name?",
        quickReplies: [],
        leadState: { step: 'ask_name', capturedLead: {} }
      });
    }

    // Call Gemini API
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
      // Mock response if no real API key is ready yet
      console.warn("Using mock Gemini response because no valid API key is set.");
      return NextResponse.json({
        message: "I am a mock response because the Gemini API key isn't configured in .env.local yet! But normally I would answer your question naturally.",
        quickReplies: ["Get in touch", "Tell me more about services"]
      });
    }

    // Format messages for gemini - combine system prompt with first message or provide it properly 
    // The @google/genai SDK often prefers system instructions inside the config block
    // History needs to map role "assistant" -> "model" for Gemini
    const chatContents = messages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const response = await gemini.models.generateContent({
      model: process.env.GEMINI_MODEL || 'gemini-2.5-pro',
      contents: chatContents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: parseInt(process.env.MAX_TOKENS || '500'),
      }
    });

    const botResponse = response.text || "I'm sorry, I couldn't generate a response.";

    // Generate quick replies based on context
    let quickReplies: string[] = [];
    const lowerResp = botResponse.toLowerCase();
    
    if (lowerResp.includes('service') || lowerResp.includes('help')) {
      quickReplies = ["AI Chatbot Development", "CRM Systems", "Workflow Automation", "Get in touch"];
    } else if (lowerResp.includes('reach out') || lowerResp.includes('connect') || lowerResp.includes('team')) {
      quickReplies = ["Get in touch", "Other services"];
    } else {
      quickReplies = ["Tell me about services", "Contact sales"];
    }

    // Limit quick replies to 3 items
    quickReplies = quickReplies.slice(0, 3);

    return NextResponse.json({
      message: botResponse,
      quickReplies
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { message: "Sorry, I'm having trouble right now. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
