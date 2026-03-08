'use client';

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Bot, LineChart, Globe, Zap, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const triggerChat = () => {
    document.getElementById('chat-launcher-btn')?.click();
  };

  const services = [
    {
      title: "AI Chatbot Development",
      description: "Custom AI chatbots trained on your business data for support, lead gen, and automation.",
      icon: <Bot className="w-8 h-8 text-primary-500" />
    },
    {
      title: "CRM Systems",
      description: "Tailored customer relationship management platforms to manage interactions effectively.",
      icon: <Users className="w-8 h-8 text-primary-500" />
    },
    {
      title: "Workflow Automation",
      description: "End-to-end automation of your repetitive business processes to save time and money.",
      icon: <Zap className="w-8 h-8 text-primary-500" />
    },
    {
      title: "Business Websites",
      description: "Professional, modern, and conversion-optimized web presence for your brand.",
      icon: <Globe className="w-8 h-8 text-primary-500" />
    },
    {
      title: "Lead Management",
      description: "Advanced tools to intelligently capture, score, and nurture your sales leads.",
      icon: <LineChart className="w-8 h-8 text-primary-500" />
    }
  ];

  const features = [
    "AI-Powered Solutions",
    "Fast Delivery Timelines",
    "Custom Built for You",
    "24/7 Dedicated Support"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100 via-white to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-8 animate-fade-in shadow-sm border border-primary-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
            </span>
            Meet your new AI Assistant
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Transforming Business <br className="hidden md:block"/>
            Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-400">AI & Automation</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Service Path Technology helps modern businesses scale faster by automating workflows, managing relationships, and deploying intelligent chatbots.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Button size="lg" onClick={triggerChat} className="shadow-lg shadow-primary-500/30">
              Talk to Our AI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" href="/services">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section background="gray" id="services">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600">Comprehensive technology solutions designed to streamline your operations and drive unprecedented growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} hoverable className="h-full flex flex-col">
              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow mb-6">{service.description}</p>
              <Button variant="ghost" className="self-start px-0 hover:bg-transparent hover:text-primary-700 group -ml-2">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
          <Card className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary-600 to-primary-800 text-white border-0">
            <h3 className="text-2xl font-bold mb-4">Not sure what you need?</h3>
            <p className="text-primary-100 mb-6">Chat with our AI assistant to get personalized recommendations.</p>
            <Button variant="secondary" onClick={triggerChat}>
              Start Chatting
            </Button>
          </Card>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Service Path Technology?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We do not just deliver software—we deliver strategic advantages. Our team ensures that every deployment directly contributes to your bottom line.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                  <span className="text-lg text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-100 to-indigo-50 rounded-[2rem] transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Team at work" 
              className="relative rounded-[2rem] shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section background="primary" className="text-center rounded-t-[3rem] mt-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your business?</h2>
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          Get in touch with our team today or chat with our AI to learn exactly how we can help you scale.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" onClick={triggerChat}>
            Chat with AI Assistant
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-700" href="/contact">
            Contact Sales
          </Button>
        </div>
      </Section>
    </>
  );
}
