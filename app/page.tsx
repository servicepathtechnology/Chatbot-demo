import Link from "next/link";
import { ArrowRight, ChevronDown, Play, Bot, Users, Workflow, Globe, BarChart3, Star } from "lucide-react";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px] animate-float opacity-70" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-cyan-600/10 rounded-full blur-[150px] animate-float opacity-60" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 text-indigo-200 text-xs md:text-sm font-medium px-5 py-2 rounded-full backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors cursor-default">
              <span className="text-emerald-400 font-bold">●</span> Enterprise-grade AI infrastructure
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
              Scale Your Operations <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                On Autopilot
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              We design and deploy intelligent chatbots, custom CRM systems, and bulletproof workflow automations that drive revenue while you sleep.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-white text-slate-900 hover:bg-indigo-50 px-8 py-4 rounded-2xl text-base font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group ring-4 ring-white/10"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-base font-semibold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                See How It Works
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} className="mt-28 md:mt-32 w-full">
            <div className="border-t border-white/10 pt-10 w-full">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders globally</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-2xl font-black tracking-tighter">ACME Corp</span>
                <span className="text-2xl font-black tracking-tighter">TECHFLOW</span>
                <span className="text-2xl font-black tracking-tighter">NEXUS AI</span>
                <span className="text-2xl font-black tracking-tighter">ORBIS.</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="bg-white py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Everything you need to scale</h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                End-to-end technical solutions designed to automate the boring stuff so you can focus on explosive growth.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500 group h-full">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500 mb-8">
                  <Bot className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">AI Chatbots</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Intelligent conversational agents that handle customer support 24/7 and qualify leads automatically.
                </p>
                <div className="border-t border-slate-200 pt-6 mt-auto">
                  <Link href="/services" className="text-indigo-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                    Explore Capabilities <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Service 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500 group h-full">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500 mb-8">
                  <Users className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">CRM Architecture</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Custom customer relationship management setups tailored exactly to your sales pipeline and operations.
                </p>
                <div className="border-t border-slate-200 pt-6 mt-auto">
                  <Link href="/services" className="text-indigo-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                    Explore Capabilities <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Service 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500 group h-full">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500 mb-8">
                  <Workflow className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Workflow Automation</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Connect your apps and automate repetitive tasks using enterprise-grade custom scripts and Zaps.
                </p>
                <div className="border-t border-slate-200 pt-6 mt-auto">
                  <Link href="/services" className="text-indigo-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                    Explore Capabilities <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">Process</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">From idea to execution</h2>
            </div>
          </FadeIn>

          <div className="relative flex flex-col md:flex-row gap-8 justify-between max-w-5xl mx-auto">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[35px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 z-0" />

            <FadeIn direction="up" delay={0.1} className="relative z-10 flex flex-col items-center text-center flex-1">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-indigo-600 text-indigo-600 font-black text-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-100 backdrop-blur-sm">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Discovery</h3>
              <p className="text-slate-600 leading-relaxed">We analyze your bottlenecks and identify absolute high-leverage automation opportunities.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="relative z-10 flex flex-col items-center text-center flex-1">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white font-black text-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-200 ring-4 ring-indigo-50">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Architecture</h3>
              <p className="text-slate-600 leading-relaxed">Our senior engineering team architects and develops your custom AI and automation stack.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="relative z-10 flex flex-col items-center text-center flex-1">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-indigo-600 text-indigo-600 font-black text-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-100 backdrop-blur-sm">
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Deployment</h3>
              <p className="text-slate-600 leading-relaxed">We deploy your systems, train your team, and provide ongoing analytics and support.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 py-32 overflow-hidden mx-4 md:mx-8 my-16 rounded-[3rem]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500 rounded-full blur-[100px] opacity-50 mix-blend-screen transform translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to scale faster?</h2>
            <p className="text-xl md:text-2xl text-indigo-100 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Join the businesses saving hundreds of hours each week. Get a custom technical roadmap tailored to your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link 
                href="/contact" 
                className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
              >
                Book a Strategy Call
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="bg-white py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-500 font-light">Everything you need to know about our capabilities.</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <FaqAccordion />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
