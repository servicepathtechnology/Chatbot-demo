'use client';

import { X, Send, Bot, RotateCcw } from 'lucide-react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useChatbot } from './useChatbot';
import { ChatbotLauncher } from './ChatbotLauncher';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator, QuickReplies, LeadConfirmation } from './ChatComponents';

export function ChatWindow() {
  const { state, open, close, toggle, sendMessage, clearHistory } = useChatbot();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { isOpen, messages, isTyping } = state;

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText('');
    }
  };

  const handleQuickReply = (text: string) => {
    sendMessage(text);
  };

  return (
    <>
      <ChatbotLauncher isOpen={isOpen} onClick={toggle} />
      
      {isOpen && (
        <div 
          className="fixed bottom-0 md:bottom-24 md:right-6 w-full md:w-[380px] h-[85vh] md:h-[520px] bg-white md:rounded-2xl shadow-2xl flex flex-col z-50 animate-slide-up border border-gray-100 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 flex justify-between items-center rounded-t-2xl shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-primary-600 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-semibold leading-tight">AI Assistant</h3>
                <p className="text-primary-100 text-xs">Service Path Technology</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={clearHistory} 
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                title="Clear Chat History"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button 
                onClick={close} 
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                title="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col">
            {messages.map((msg) => {
              if (msg.isLeadConfirmation) {
                return <LeadConfirmation key={msg.id} />;
              }
              return (
                <div key={msg.id} className="w-full flex flex-col">
                  <MessageBubble message={msg} />
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <QuickReplies replies={msg.quickReplies} onSelect={handleQuickReply} />
                  )}
                </div>
              );
            })}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 shrink-0">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="bg-primary-600 text-white p-3 rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:hover:bg-primary-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
