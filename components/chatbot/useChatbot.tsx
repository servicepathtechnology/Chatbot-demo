'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type LeadStep = 'none' | 'ask_name' | 'ask_email' | 'complete';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
  leadStep: LeadStep;
  capturedName: string;
  capturedEmail: string;
  serviceInterest: string;
  sessionId: string;
  hasOpened: boolean;
}

export const QUICK_REPLIES = {
  welcome: [
    "Tell me about your services",
    "AI Chatbot Development",
    "Pricing & Plans",
    "Get in touch",
  ],
  services: [
    "CRM Systems",
    "Workflow Automation",
    "Business Websites",
    "Lead Management",
    "Book a call",
  ],
  interested: [
    "Yes, tell me more",
    "What's the process?",
    "I'd like a demo",
  ],
};

const INITIAL_MSG: Message = {
  id: '0',
  role: 'assistant',
  content: "Hi there! I'm the AI Assistant for Service Path. How can I help you scale your business today?",
  timestamp: new Date().toISOString()
};

export interface ChatbotContextType extends ChatState {
  activeQuickReplies: string[];
  toggleChat: () => void;
  closeChat: () => void;
  sendMessage: (content: string) => Promise<void>;
  clearHistory: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ChatState>({
    isOpen: false,
    messages: [INITIAL_MSG],
    isTyping: false,
    leadStep: 'none',
    capturedName: '',
    capturedEmail: '',
    serviceInterest: '',
    sessionId: '',
    hasOpened: false,
  });

  const [activeQuickReplies, setActiveQuickReplies] = useState<string[]>(QUICK_REPLIES.welcome);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem('servicepath_chat_state');
      if (stored) {
        const parsed = JSON.parse(stored);
        setState((prev) => ({
          ...prev,
          messages: parsed.messages || [INITIAL_MSG],
          leadStep: parsed.leadStep || 'none',
          capturedName: parsed.capturedName || '',
          capturedEmail: parsed.capturedEmail || '',
          sessionId: parsed.sessionId || crypto.randomUUID(),
          hasOpened: parsed.hasOpened || false,
        }));
      } else {
        setState((prev) => ({ ...prev, sessionId: crypto.randomUUID() }));
      }
    } catch (err) {
      setState((prev) => ({ ...prev, sessionId: crypto.randomUUID() }));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (state.sessionId && isMounted) {
      localStorage.setItem('servicepath_chat_state', JSON.stringify({
        messages: state.messages,
        leadStep: state.leadStep,
        capturedName: state.capturedName,
        capturedEmail: state.capturedEmail,
        sessionId: state.sessionId,
        hasOpened: state.hasOpened
      }));
    }
  }, [state.messages, state.leadStep, state.capturedName, state.capturedEmail, state.sessionId, state.hasOpened, isMounted]);

  const toggleChat = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen, hasOpened: true }));
  }, []);

  const closeChat = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const clearHistory = useCallback(() => {
    setState((prev) => ({
      ...prev,
      messages: [INITIAL_MSG],
      leadStep: 'none',
      capturedName: '',
      capturedEmail: '',
      serviceInterest: ''
    }));
    setActiveQuickReplies(QUICK_REPLIES.welcome);
    localStorage.removeItem('servicepath_chat_state');
  }, []);

  const sendMessage = async (content: string) => {
    if (!content.trim() || state.isTyping) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: new Date().toISOString()
    };

    let newMessages = [...state.messages, userMsg];
    let newLeadStep = state.leadStep;
    let newCapturedName = state.capturedName;
    let newCapturedEmail = state.capturedEmail;
    
    setState((prev) => ({
      ...prev,
      messages: newMessages,
      isTyping: true
    }));
    setActiveQuickReplies([]);

    if (state.leadStep === 'ask_name') {
      newCapturedName = content.trim();
      newLeadStep = 'ask_email';
      const botMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: `Nice to meet you, ${newCapturedName}! And what's the best email address to reach you at?`,
        timestamp: new Date().toISOString()
      };
      setTimeout(() => {
        setState(prev => ({ ...prev, messages: [...prev.messages, botMsg], isTyping: false, leadStep: newLeadStep, capturedName: newCapturedName }));
      }, 600);
      return;
    }

    if (state.leadStep === 'ask_email') {
      const email = content.trim().toLowerCase();
      if (email.includes('@') && email.includes('.')) {
        newCapturedEmail = email;
        newLeadStep = 'complete';
        
        // Log lead via API
        fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: newCapturedName,
            email: newCapturedEmail,
            source: 'chatbot',
            timestamp: new Date().toISOString()
          })
        }).catch(err => console.error("Lead save err:", err));

        const botMsg: Message = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: '__LEAD_CAPTURED__',
          timestamp: new Date().toISOString()
        };
        setTimeout(() => {
          setState(prev => ({ ...prev, messages: [...prev.messages, botMsg], isTyping: false, leadStep: newLeadStep, capturedEmail: newCapturedEmail }));
          setActiveQuickReplies(["Tell me about your services", "Pricing & Plans"]);
        }, 800);
        return;
      } else {
        const botMsg: Message = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: "Hmm, that doesn't look like a valid email. Could you double-check it for me?",
          timestamp: new Date().toISOString()
        };
        setTimeout(() => {
          setState(prev => ({ ...prev, messages: [...prev.messages, botMsg], isTyping: false }));
        }, 500);
        return;
      }
    }

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          sessionId: state.sessionId,
          leadContext: {
            step: state.leadStep,
            name: state.capturedName
          }
        }),
      });

      if (!res.ok) throw new Error("API Error");
      
      const data = await res.json();
      
      const botMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date().toISOString()
      };

      if (data.askingForLead && newLeadStep === 'none') {
        newLeadStep = 'ask_name';
      }

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMsg],
        isTyping: false,
        leadStep: newLeadStep
      }));

      if (data.quickReplies?.length > 0) {
        setActiveQuickReplies(data.quickReplies);
      } else {
        setActiveQuickReplies(QUICK_REPLIES.welcome);
      }

    } catch (error) {
      const botMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: "Sorry, I'm having a little trouble connecting right now. Can you try again or email us directly?",
        timestamp: new Date().toISOString()
      };
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMsg],
        isTyping: false
      }));
      setActiveQuickReplies(['Try again', 'Contact Support']);
    }
  };

  return (
    <ChatbotContext.Provider value={{
      ...state,
      activeQuickReplies,
      toggleChat,
      closeChat,
      sendMessage,
      clearHistory
    }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}
