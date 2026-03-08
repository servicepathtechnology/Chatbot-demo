import Link from 'next/link';
import { Lightbulb, ShieldCheck, HeartHandshake, Linkedin } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export default function AboutPage() {
  return (
    <div className="pt-20 overflow-hidden bg-slate-50">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 py-32 md:py-40 text-center text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn direction="up">
            <div className="text-sm font-bold text-indigo-300 mb-8 flex justify-center items-center gap-2 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-500">&gt;</span>
              <span className="text-white">About Us</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              We're on a mission to make <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI accessible</span> to every business
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* 2. Mission & Story */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Story Left */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Story</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Built by operators, for operators.</h3>
                <div className="space-y-6 text-slate-600 text-xl leading-relaxed font-light">
                  <p>
                    Service Path Technology was founded when we realized that enterprise-grade automation tools were locked behind massive paywalls and complex implementations that small-to-medium businesses simply could not afford.
                  </p>
                  <p>
                    We saw talented teams drowning in manual data entry, missing out on qualified leads, and scaling their headcount just to manage the chaos. We knew there had to be a better way to leverage modern AI without needing an in-house engineering team.
                  </p>
                  <p>
                    Today, we bridge that gap. We build custom, intelligent systems that <strong className="text-slate-900 font-semibold">feel like magic</strong>, giving businesses the leverage they need to compete on a global scale.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Stats Card Right */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-indigo-600 text-white rounded-3xl p-10 md:p-14 shadow-2xl shadow-indigo-500/30 transform hover:-translate-y-2 transition-transform duration-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
                  <h4 className="text-3xl font-bold mb-10 relative z-10 tracking-tight">Our Impact in Numbers</h4>
                  <div className="grid grid-cols-2 gap-10 relative z-10">
                    <div>
                      <div className="text-5xl font-black mb-2 tracking-tighter">200+</div>
                      <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Active Partners</div>
                    </div>
                    <div>
                      <div className="text-5xl font-black mb-2 tracking-tighter">10M+</div>
                      <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Tasks Automated</div>
                    </div>
                    <div>
                      <div className="text-5xl font-black mb-2 tracking-tighter">15+</div>
                      <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Countries</div>
                    </div>
                    <div>
                      <div className="text-5xl font-black mb-2 tracking-tighter">98%</div>
                      <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Client Retention</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values Section */}
      <section className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">Principles</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Core Values</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">The uncompromisable standards that guide every line of code we write and every system we deploy.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-3xl p-10 border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors shadow-sm">
                  <Lightbulb className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Relentless Innovation</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                  We continuously explore the absolute cutting-edge of AI models to ensure our clients always have an unfair technological advantage.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-3xl p-10 border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors shadow-sm">
                  <ShieldCheck className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Unbreakable Reliability</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                  Automation only works if you can trust it. We build robust error-handling and extensive logging into every system so data is never lost.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-3xl p-10 border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors shadow-sm">
                  <HeartHandshake className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">True Partnership</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                  We aren't just an agency; we act as an extension of your own operations team, aligning our incentives directly with your business growth.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="bg-white py-32 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Meet the Leadership</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">The engineers and operators behind the automation.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Michael Vance", role: "CEO & Founder", initials: "MV", bg: "bg-indigo-100", text: "text-indigo-600" },
              { name: "Sarah Chen", role: "Head of AI Engineering", initials: "SC", bg: "bg-emerald-100", text: "text-emerald-600" },
              { name: "David Peterson", role: "Lead Systems Architect", initials: "DP", bg: "bg-blue-100", text: "text-blue-600" },
              { name: "Elena Rodriguez", role: "VP of Operations", initials: "ER", bg: "bg-purple-100", text: "text-purple-600" }
            ].map((member, i) => (
              <FadeIn direction="up" delay={0.1 * i} key={i}>
                <div className="group relative">
                  <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 transform group-hover:-translate-y-2 h-full">
                    <div className={`w-28 h-28 mx-auto rounded-full ${member.bg} ${member.text} flex items-center justify-center text-3xl font-black mb-6 shadow-inner`}>
                      {member.initials}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{member.name}</h4>
                    <p className="text-sm text-indigo-600 font-bold uppercase tracking-widest mb-6">{member.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                      Passionate about building scalable systems and empowering businesses with cutting-edge technology.
                    </p>
                    <a href="#" className="inline-block p-3 text-slate-400 hover:text-white hover:bg-slate-900 rounded-full transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Timeline / Milestones */}
      <section className="bg-white py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-24">
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">History</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Our Journey</h2>
            </div>
          </FadeIn>

          <div className="relative border-l-2 border-indigo-200 md:border-l-0 md:border-transparent md:w-full md:flex md:flex-col md:items-center">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-indigo-100 via-indigo-300 to-indigo-100 transform -translate-x-1/2 rounded-full" />

            {[
              { year: "2020", title: "The Foundation", desc: "Started as a boutique consulting firm in Hyderabad, focusing heavily on custom ERP solutions." },
              { year: "2021", title: "First AI Product Launch", desc: "Developed our first proprietary natural language processing chatbot deployed to ecommerce clients." },
              { year: "2023", title: "100+ Clients Milestone", desc: "Expanded our operations globally, crossing the milestone of automating 1 million API calls daily." },
              { year: "2024", title: "Service Path Launch", desc: "Rebranded and refocused exclusively on making enterprise-grade AI accessible to all." }
            ].map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <FadeIn key={i} direction={isEven ? 'right' : 'left'} delay={i * 0.1}>
                  <div className="mb-16 md:mb-24 relative pl-8 md:pl-0 md:w-full flex md:justify-center w-[90vw] md:w-full mx-auto">
                    {/* Icon Node */}
                    <div className="absolute left-[-11px] md:left-1/2 md:-ml-[11px] w-6 h-6 rounded-full bg-indigo-600 border-4 border-white z-10 shadow-md" />

                    {/* Desktop Layout Alternation */}
                    <div className={`md:w-[45%] ${isEven ? 'md:mr-auto md:text-right md:pr-16' : 'md:ml-auto md:text-left md:pl-16'}`}>
                      <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all">
                        <span className="text-indigo-600 font-bold text-sm mb-3 block tracking-widest">{event.year}</span>
                        <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{event.title}</h4>
                        <p className="text-slate-600 text-base leading-relaxed">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
