'use client';

import { MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ChatbotLauncherProps {
  onClick: () => void;
  isOpen: boolean;
}

export function ChatbotLauncher({ onClick, isOpen }: ChatbotLauncherProps) {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Only pulse on first load for a short duration
    const timer = setTimeout(() => setPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {pulse && (
        <span className="absolute -inset-1 rounded-full bg-primary-500 opacity-30 animate-ping"></span>
      )}
      <button
        id="chat-launcher-btn"
        onClick={() => {
          setPulse(false);
          onClick();
        }}
        className={`
          relative flex items-center justify-center w-14 h-14 
          bg-primary-600 text-white rounded-full 
          shadow-xl hover:bg-primary-700 hover:scale-105 
          transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200
        `}
        aria-label="Chat with us"
        title="Chat with us"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
