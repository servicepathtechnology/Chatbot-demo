'use client';

import { MessageCircle, X } from 'lucide-react';
import { useChatbot } from './useChatbot';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function ChatbotLauncher() {
  const { isOpen, toggleChat, hasOpened } = useChatbot();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      {isHovered && !isOpen && (
        <div className="absolute right-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap animate-fade-in pointer-events-none">
          Chat with AI
          {/* Tooltip triangle indicator */}
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-slate-900 rotate-45 -translate-y-1/2" />
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={toggleChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isOpen ? "Close chat" : "Chat with us"}
        className={cn(
          "relative w-14 h-14 rounded-full bg-indigo-600 outline-none hover:bg-indigo-700 shadow-lg shadow-indigo-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95",
          isOpen ? "rotate-90" : "rotate-0"
        )}
      >
        {/* Notification Badge */}
        {!hasOpened && !isOpen && (
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse" />
        )}

        {/* Icons */}
        <div className="relative w-6 h-6">
          <MessageCircle 
            className={cn(
              "absolute inset-0 text-white transition-all duration-300 transform",
              isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            )}
          />
          <X 
            className={cn(
              "absolute inset-0 text-white transition-all duration-300 transform",
              isOpen ? "-rotate-90 scale-100 opacity-100" : "rotate-0 scale-0 opacity-0"
            )}
          />
        </div>
      </button>
    </div>
  );
}
