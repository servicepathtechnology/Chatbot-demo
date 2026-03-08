'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Minus, Send, CheckCircle2 } from 'lucide-react';
import { useChatbot } from './useChatbot';
import { cn } from '@/lib/utils';

export function ChatWindow() {
  const { isOpen, closeChat, messages, isTyping, sendMessage, activeQuickReplies } = useChatbot();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, activeQuickReplies]);

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 md:right-6 w-[calc(100vw-32px)] md:w-[400px] h-[75vh] md:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-slate-200 animate-slide-up origin-bottom-right">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center relative backdrop-blur-sm">
            <Bot className="w-6 h-6 text-white" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-indigo-700 rounded-full" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide">AI Assistant</h3>
            <p className="text-indigo-200 text-xs">Service Path Technology</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={closeChat} className="p-2 text-indigo-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <Minus className="w-5 h-5" />
          </button>
          <button onClick={closeChat} className="p-2 text-indigo-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 scrollbar-thin scrollbar-thumb-slate-200">
        <div className="space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            
            // Special Lead Capture Card
            if (msg.content === '__LEAD_CAPTURED__') {
              return (
                <div key={msg.id} className="flex justify-start animate-fade-in">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-[85%]">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="font-bold text-emerald-900 text-sm">Got it!</span>
                    </div>
                    <p className="text-emerald-700 text-sm leading-relaxed">
                      Thanks for sharing your details. Our automation experts will be in touch shortly to map out your perfect tech stack.
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div key={msg.id} className={cn("flex", isUser ? "justify-end" : "justify-start animate-fade-in")}>
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mr-2 mt-1">
                    <Bot className="w-5 h-5 text-indigo-600" />
                  </div>
                )}
                <div 
                  className={cn(
                    "px-4 py-3 text-sm leading-relaxed max-w-[80%] shadow-sm",
                    isUser 
                      ? "bg-indigo-600 text-white rounded-2xl rounded-tr-sm" 
                      : "bg-white text-slate-700 rounded-2xl rounded-tl-sm border border-slate-100"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mr-2">
                <Bot className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-4 flex items-center gap-1.5 shadow-sm">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} className="h-4" />
        </div>
      </div>

      {/* Quick Replies */}
      {!isTyping && activeQuickReplies.length > 0 && (
        <div className="px-4 py-3 bg-white border-t border-slate-100 shrink-0">
          <div className="flex flex-wrap gap-2">
            {activeQuickReplies.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(reply)}
                className="bg-indigo-50 border border-indigo-100 hover:border-indigo-300 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-2 rounded-full transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100 shrink-0">
        <div className="flex items-end gap-2 relative">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none overflow-hidden"
            rows={1}
            style={{ minHeight: '44px', maxHeight: '120px' }}
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className="absolute right-2 bottom-2 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:bg-slate-300"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
        <div className="text-center mt-3">
          <span className="text-[10px] text-slate-400 font-medium">Powered by Service Path AI</span>
        </div>
      </div>

    </div>
  );
}
