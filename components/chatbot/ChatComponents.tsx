import { CheckCircle2, Calendar } from "lucide-react";
import { Message } from "@/lib/types";

// typing indicator
export function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5 h-[44px]">
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}

// quick replies
export function QuickReplies({ replies, onSelect }: { replies: string[], onSelect: (text: string) => void }) {
  if (!replies || replies.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-2 mb-4 justify-start ml-10">
      {replies.map((reply, i) => (
        <button
          key={i}
          onClick={() => onSelect(reply)}
          className="text-sm px-4 py-2 bg-white border border-primary-200 text-primary-700 rounded-full hover:bg-primary-50 transition-colors shadow-sm whitespace-nowrap"
        >
          {reply}
        </button>
      ))}
    </div>
  );
}

// lead confirmation
export function LeadConfirmation({ onScheduleClick }: { onScheduleClick?: () => void }) {
  return (
    <div className="flex justify-start mb-4 animate-fade-in w-full">
      <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl rounded-bl-sm max-w-[90%]">
        <div className="flex items-center gap-2 text-emerald-700 font-medium mb-2">
          <CheckCircle2 className="w-5 h-5" />
          <span>Lead capturing successful!</span>
        </div>
        <p className="text-emerald-800 text-sm mb-3">
          Our team has received your information and will be in touch shortly.
        </p>
        <button 
          onClick={onScheduleClick}
          className="flex items-center gap-1.5 text-xs font-semibold bg-white text-emerald-700 px-3 py-1.5 rounded border border-emerald-200 hover:bg-emerald-100 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          Schedule a Call
        </button>
      </div>
    </div>
  );
}
