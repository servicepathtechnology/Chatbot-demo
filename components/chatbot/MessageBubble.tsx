import { Message } from "@/lib/types";
import { Bot, User } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isBot = message.role === 'assistant';

  // Helper to format timestamp
  const formatTime = (date: Date | string) => {
    const d = new Date(date);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex w-full ${isBot ? 'justify-start' : 'justify-end'} animate-fade-in mb-4`}>
      <div className={`flex max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'} items-end gap-2`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          ${isBot ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-500'}
        `}>
          {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
        </div>
        
        {/* Text Container */}
        <div className="flex flex-col gap-1">
          <div className={`
            px-4 py-3 text-[15px] leading-relaxed relative
            ${isBot 
              ? 'bg-gray-100 text-gray-800 rounded-2xl rounded-bl-sm' 
              : 'bg-primary-600 text-white rounded-2xl rounded-br-sm shadow-md'
            }
          `}>
            <div className="whitespace-pre-wrap">{message.content}</div>
          </div>
          <span className={`text-xs text-gray-400 ${isBot ? 'text-left ml-1' : 'text-right mr-1'}`}>
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}
