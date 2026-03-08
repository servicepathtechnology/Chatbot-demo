'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Twitter, Linkedin, Github, CheckCircle2, Loader2 } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      serviceId: formData.get('service'),
      message: formData.get('message'),
      source: "contact_form",
      timestamp: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        setIsSuccess(true);
      } else {
        const errData = await res.json();
        setErrorMsg(errData.error || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setErrorMsg("A network error occurred. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 py-32 md:py-40 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
        <FadeIn direction="up">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Get in touch</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </FadeIn>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-6 md:p-12 lg:p-16 border border-slate-100">
          
          {/* Contact Form (Left) */}
          <div className="w-full lg:w-[60%] lg:pr-12">
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tight">Let's start a conversation</h2>
              
              {isSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center animate-fade-in flex flex-col items-center justify-center min-h-[500px]">
                  <div className="w-24 h-24 bg-emerald-100/50 rounded-full flex items-center justify-center mb-8 ring-8 ring-emerald-50">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Message Sent Successfully!</h3>
                  <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md">
                    Thank you for reaching out. A highly qualified automation expert will be in touch within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-indigo-600 font-bold border-2 border-indigo-100 hover:border-indigo-600 px-8 py-4 rounded-2xl transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">First Name</label>
                      <input required type="text" id="firstName" name="firstName" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Last Name</label>
                      <input required type="text" id="lastName" name="lastName" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Email Address</label>
                    <input required type="email" id="email" name="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="john@example.com" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Phone Number <span className="text-slate-400 font-normal normal-case tracking-normal">(Optional)</span></label>
                      <input type="tel" id="phone" name="phone" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Company Name</label>
                      <input type="text" id="company" name="company" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" placeholder="Acme Inc." />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Service Interest</label>
                    <select id="service" name="service" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-slate-900 appearance-none">
                      <option value="general">General Inquiry</option>
                      <option value="ai-chatbots">Intelligent AI Chatbots</option>
                      <option value="crm-setup">Custom CRM Architecture</option>
                      <option value="workflow-automation">Workflow & API Automation</option>
                      <option value="web-development">High-Performance Websites</option>
                      <option value="data-analytics">Data Analytics & Insights</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Message</label>
                    <textarea required id="message" name="message" rows={6} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none" placeholder="Tell us about your project goals..." />
                  </div>

                  {errorMsg && (
                    <div className="p-5 bg-red-50 text-red-600 text-base font-medium rounded-2xl border border-red-200 shrink-0 animate-fade-in">
                      {errorMsg}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:pointer-events-none text-lg"
                  >
                    {isSubmitting ? <><Loader2 className="w-6 h-6 animate-spin" /> Sending...</> : 'Send Message'}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Contact Info (Right) */}
          <div className="w-full lg:w-[40%]">
            <FadeIn delay={0.2} className="h-full">
              <div className="bg-slate-50 rounded-[2rem] p-10 lg:p-12 h-full border border-slate-100 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-[40px] pointer-events-none" />
                
                <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Contact Information</h3>
                
                <div className="space-y-10 mb-12 flex-1 relative z-10">
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                      <Mail className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-widest">Email Us</h4>
                      <a href="mailto:servicepathtechnology@gmail.com" className="text-slate-600 text-base hover:text-indigo-600 transition-colors break-all font-medium">
                        servicepathtechnology@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                      <Phone className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-widest">Call Us</h4>
                      <a href="tel:+917702001391" className="text-slate-600 text-base hover:text-indigo-600 transition-colors font-medium block">
                        +91 7702001391
                      </a>
                      <p className="text-sm text-slate-500 mt-2">Mon-Fri from 9am to 6pm IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                      <MapPin className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-widest">Headquarters</h4>
                      <p className="text-slate-600 text-base leading-relaxed font-medium">
                        123 Innovation Drive,<br />
                        Tech Park,<br />
                        Hyderabad, TS 500081<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-slate-200 rounded-3xl h-48 flex flex-col items-center justify-center text-slate-500 text-base mb-10 w-full border border-slate-300/50 relative overflow-hidden group shadow-inner">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40 transition-opacity group-hover:opacity-100" />
                  <MapPin className="w-10 h-10 mb-3 opacity-50 relative z-10 group-hover:text-indigo-500 group-hover:-translate-y-1 transition-all" />
                  <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Interactive Map</span>
                </div>

                <div className="relative z-10 border-t border-slate-200 pt-8">
                  <h4 className="text-sm font-bold text-slate-900 mb-5 uppercase tracking-widest">Connect Outpost</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all hover:-translate-y-1">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all hover:-translate-y-1">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all hover:-translate-y-1">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
