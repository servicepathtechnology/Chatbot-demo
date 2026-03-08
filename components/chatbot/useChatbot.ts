import { useState, useEffect, useCallback } from 'react';
import { ChatState, Message, Lead } from '@/lib/types';

const SESSION_KEY = 'servicepath_chatbot_session';
const HISTORY_KEY = 'servicepath_chatbot_history';

const initialState: ChatState = {
  isOpen: false,
  messages: [],
  isTyping: false,
  leadCaptured: false,
  leadStep: 'none',
  capturedLead: {},
  sessionId: ''
};

export function useChatbot() {
  const [state, setState] = useState<ChatState>(initialState);

  // Load history on mount
  useEffect(() => {
    try {
      let currentSessionId = localStorage.getItem(SESSION_KEY);
      if (!currentSessionId) {
        // Fallback to simpler random id generation if crypto.randomUUID is not available (e.g. older browsers without secure context)
        currentSessionId = typeof crypto !== 'undefined' && crypto.randomUUID 
          ? crypto.randomUUID() 
          : Math.random().toString(36).substring(2, 15);
        localStorage.setItem(SESSION_KEY, currentSessionId);
      }

      const history = localStorage.getItem(HISTORY_KEY);
      let loadedMessages: Message[] = [];
      
      if (history) {
        loadedMessages = JSON.parse(history);
      } else {
        loadedMessages = [{
          id: 'welcome_msg',
          role: 'assistant',
          content: "👋 Hi there! I'm the Service Path Technology AI assistant.\nI can answer questions about our services and help connect you with our team.\nWhat can I help you with today?",
          timestamp: new Date(),
          quickReplies: [
            "Tell me about your services",
            "Get in touch"
          ]
        }];
      }

      setState(prev => ({ 
        ...prev, 
        messages: loadedMessages,
        sessionId: currentSessionId as string
      }));
    } catch (e) {
      console.error("Could not load chat history", e);
    }
  }, []);

  // Save history on messages change
  useEffect(() => {
    if (state.messages.length > 0) {
      // Keep last 50 messages
      const recentMessages = state.messages.slice(-50);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(recentMessages));
    }
  }, [state.messages]);

  const open = useCallback(() => setState(prev => ({ ...prev, isOpen: true })), []);
  const close = useCallback(() => setState(prev => ({ ...prev, isOpen: false })), []);
  const toggle = useCallback(() => setState(prev => ({ ...prev, isOpen: !prev.isOpen })), []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(HISTORY_KEY);
    setState(prev => ({
      ...prev,
      messages: [{
        id: 'welcome_msg',
        role: 'assistant',
        content: "👋 Hi there! I'm the Service Path Technology AI assistant.\nI can answer questions about our services and help connect you with our team.\nWhat can I help you with today?",
        timestamp: new Date(),
        quickReplies: [
          "Tell me about your services",
          "Get in touch"
        ]
      }],
      leadStep: 'none',
      leadCaptured: false,
      capturedLead: {}
    }));
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    // Add user message immediately
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages.map(m => ({...m, quickReplies: []})), userMessage], // Remove old quick replies
      isTyping: true
    }));

    // Minimum delay for realism (600ms as per PRD)
    const minDelayPromise = new Promise(resolve => setTimeout(resolve, 600));

    try {
      // Setup payload including lead context if any
      const payload = {
        messages: state.messages.concat(userMessage).map(m => ({ role: m.role, content: m.content })),
        sessionId: state.sessionId,
        leadContext: state.leadStep,
        capturedLead: state.capturedLead
      };

      const [apiResponse] = await Promise.all([
        fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }),
        minDelayPromise
      ]);

      if (!apiResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await apiResponse.json();
      
      // Update state with bot response
      setState(prev => {
        let newMessages = [...prev.messages];
        
        const botMessage: Message = {
          id: Date.now().toString() + '_bot',
          role: 'assistant',
          content: data.message,
          timestamp: new Date(),
          quickReplies: data.quickReplies
        };
        newMessages.push(botMessage);

        let newState = { ...prev, messages: newMessages, isTyping: false };
        
        // Handle lead capture state updates returning from API
        if (data.leadState) {
          newState.leadStep = data.leadState.step;
          if (data.leadState.capturedLead) {
            newState.capturedLead = data.leadState.capturedLead;
          }
          if (data.leadState.leadCaptured) {
            newState.leadCaptured = true;
            // Add confirmation message
            newMessages.push({
              id: Date.now().toString() + '_conf',
              role: 'assistant',
              content: '',
              timestamp: new Date(),
              isLeadConfirmation: true
            });
          }
        }

        return newState;
      });
      
    } catch (error) {
      console.error("Chat error:", error);
      setState(prev => ({
        ...prev,
        isTyping: false,
        messages: [...prev.messages, {
          id: Date.now().toString() + '_error',
          role: 'assistant',
          content: "Sorry, I'm having trouble right now. Please try again or contact us directly.",
          timestamp: new Date()
        }]
      }));
    }
  }, [state.messages, state.sessionId, state.leadStep, state.capturedLead]);

  return {
    state,
    open,
    close,
    toggle,
    sendMessage,
    clearHistory
  };
}
