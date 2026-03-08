'use client';

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Bot, LineChart, Globe, Zap, Users } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Chatbot Development",
      description: "Custom AI chatbots trained on your business data for support, lead generation, and automation. We build intelligent conversational agents that engage your customers 24/7.",
      icon: <Bot className="w-10 h-10 text-primary-500" />
    },
    {
      title: "CRM Systems",
      description: "Tailored customer relationship management platforms to manage interactions effectively. Streamline your sales pipeline and improve customer retention.",
      icon: <Users className="w-10 h-10 text-primary-500" />
    },
    {
      title: "Workflow Automation",
      description: "End-to-end automation of your repetitive business processes to save time and money. Connect your disparate systems to work in perfect harmony.",
      icon: <Zap className="w-10 h-10 text-primary-500" />
    },
    {
      title: "Business Websites",
      description: "Professional, modern, and conversion-optimized web presence for your brand. We build sites that load fast, look beautiful, and turn visitors into customers.",
      icon: <Globe className="w-10 h-10 text-primary-500" />
    },
    {
      title: "Lead Management Systems",
      description: "Tools to intelligently capture, score, and nurture your sales leads. Ensure no opportunity falls through the cracks with automated follow-ups.",
      icon: <LineChart className="w-10 h-10 text-primary-500" />
    }
  ];

  return (
    <>
      <Section background="gray" className="pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive technology solutions designed to modernize your operations and drive unprecedented growth.
        </p>
      </Section>

      <Section>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary-50 p-6 rounded-3xl flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={() => document.getElementById('chat-launcher-btn')?.click()}
                  className="text-primary-600 font-medium hover:text-primary-700 flex items-center transition-colors"
                >
                  Ask our AI about this service
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
