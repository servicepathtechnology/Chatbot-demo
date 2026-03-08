export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  quickReplies?: string[];
  isLeadConfirmation?: boolean;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
  leadCaptured: boolean;
  leadStep: 'none' | 'ask_name' | 'ask_email' | 'complete';
  capturedLead: Partial<Lead>;
  sessionId: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  service_interest?: string;
  source: string;
  timestamp: string;
  conversation_snippet?: string;
}
