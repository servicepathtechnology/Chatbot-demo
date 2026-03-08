import { NextResponse } from 'next/server';
import { gemini } from '@/lib/gemini';
import { SYSTEM_PROMPT } from '@/lib/systemPrompt';

// Basic in-memory rate limiting map (IP -> timestamp)
const rateLimits = new Map<string, number[]>();

const MAX_REQUESTS_PER_MINUTE = 20;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 60000; // 1 minute window

  let requests = rateLimits.get(ip) || [];
  requests = requests.filter(time => time > windowStart);

  if (requests.length >= MAX_REQUESTS_PER_MINUTE) {
    return false;
  }

  requests.push(now);
  rateLimits.set(ip, requests);
  return true;
}

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please slow down.' },
        { status: 429 }
      );
    }

    // 2. Parse Request
    const body = await req.json();
    const { messages, leadContext } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // 3. Format messages for Gemini
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // 4. Build context instructions
    let contextPrompt = "";
    if (leadContext) {
      if (leadContext.step === 'ask_name') {
        contextPrompt = "\\n\\n[SYSTEM: User is currently being asked for their name. Acknowledge this.]";
      } else if (leadContext.step === 'ask_email') {
        contextPrompt = "\\n\\n[SYSTEM: User is currently being asked for their email. Acknowledge this.]";
      } else if (leadContext.step === 'complete') {
        contextPrompt = "\\n\\n[SYSTEM: We have successfully captured the user's name: " + leadContext.name + ". Address them by name and be extremely helpful.]";
      }
    }

    const finalSystemInstruction = SYSTEM_PROMPT + contextPrompt + 
      "\\n\\nCRITICAL: You must output ONLY a raw JSON object with exactly the following keys: 'message' (string), 'askingForLead' (boolean), and 'quickReplies' (array of 1-4 short strings). No markdown syntax (like ```json).";

    // 5. Call Gemini API
    const response = await gemini.models.generateContent({
      model: process.env.GEMINI_MODEL || 'gemini-2.5-pro',
      contents: formattedMessages,
      config: {
        systemInstruction: finalSystemInstruction,
        responseMimeType: "application/json",
        temperature: 0.7,
      }
    });

    const responseText = response.text || "{}";
    
    // 6. Parse and validate JSON response
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(responseText);
    } catch (e) {
      console.error("Gemini failed to return valid JSON", responseText);
      // Fallback response if Gemini fails to output JSON
      parsedResponse = {
        message: "I seem to be having a little trouble parsing my response right now, but I'm here to help! Would you like to speak with our human team?",
        askingForLead: false,
        quickReplies: ["Contact Human", "Try Again"]
      };
    }

    // Ensure strict structure
    const finalData = {
      message: parsedResponse.message || "I am here to help.",
      askingForLead: !!parsedResponse.askingForLead,
      quickReplies: Array.isArray(parsedResponse.quickReplies) ? parsedResponse.quickReplies.slice(0, 4) : ["Tell me more", "Pricing", "Book a call"]
    };

    return NextResponse.json(finalData);

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
