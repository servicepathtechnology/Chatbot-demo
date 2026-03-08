'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    question: "How long does it take to implement an AI chatbot?",
    answer: "Most of our standard chatbot implementations go live within 2-4 weeks. Complex enterprise solutions with deeper CRM integrations may take up to 8 weeks depending on your requirements."
  },
  {
    question: "Do I need technical knowledge to use your services?",
    answer: "Not at all. We handle the entire technical setup, configuration, and integration. We also provide a complete training session for your team to understand how to monitor and manage the systems."
  },
  {
    question: "Will the AI chatbot sound like a robot?",
    answer: "No, we train our AI models on your specific brand voice and guidelines. The responses are designed to be conversational, empathetic, and indistinguishable from a helpful human agent."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing scales based on your needs. Standard AI chatbot setups start with a one-time implementation fee plus a small monthly retainer for hosting, API costs, and maintenance. Contact us for a custom quote."
  },
  {
    question: "Can your solutions integrate with my existing tools?",
    answer: "Yes! We specialize in connecting our AI and automation tools with your existing ecosystem, including Salesforce, HubSpot, Zendesk, Shopify, and custom backend APIs."
  },
  {
    question: "What kind of support do you provide after launch?",
    answer: "We offer ongoing technical support, continuous AI model refinement, and performance analytics to ensure your system continues delivering ROI long after the initial launch."
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-slate-200">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-5 cursor-pointer text-left focus:outline-none group"
            >
              <span className="text-slate-900 font-medium group-hover:text-indigo-600 transition-colors pr-8">
                {faq.question}
              </span>
              <ChevronDown 
                className={cn(
                  "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300",
                  isOpen ? "rotate-180 text-indigo-600" : ""
                )} 
              />
            </button>
            <div 
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-96 opacity-100 mb-5" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-slate-600 text-sm leading-relaxed pr-8">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
