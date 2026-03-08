import Link from 'next/link';
import { Bot, Users, Workflow, Globe, BarChart3, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

const SERVICES = [
  {
    id: 'ai-chatbots',
    title: 'Intelligent AI Chatbots',
    description: 'Deploy conversational agents that understand your brand voice, handle customer inquiries 24/7, and passively qualify leads into your CRM while you sleep.',
    icon: Bot,
    bullets: ['Natural Language Processing (NLP)', 'Lead Qualification Flows', 'Multi-Language Support', 'Human Handoff Capabilities'],
  },
  {
    id: 'crm-setup',
    title: 'Custom CRM Architecture',
    description: 'Stop letting leads slip through the cracks. We architect and implement robust CRM systems (HubSpot, Salesforce, GoHighLevel) customized exactly to your sales pipeline.',
    icon: Users,
    bullets: ['Pipeline Automation', 'Data Migration & Cleanup', 'Team Training & Onboarding', 'Custom Reporting Dashboards'],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow & API Automation',
    description: 'Connect your favorite tools and remove manual data entry forever. We build bulletproof Zaps, Make scenarios, and custom scripts to synchronize your entire operation.',
    icon: Workflow,
    bullets: ['Cross-Platform Syncing', 'Trigger-Based Actions', 'Error Handling & Logging', 'Legacy System Bridging'],
  },
  {
    id: 'web-development',
    title: 'High-Performance Websites',
    description: 'Lightning-fast, SEO-optimized web applications built on modern frameworks (Next.js, React). Designed to convert exactly the kind of traffic your business needs.',
    icon: Globe,
    bullets: ['Next.js App Router Architecture', 'Conversion-Optimized UX', 'Technical SEO Excellence', 'Headless CMS Integration'],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Insights',
    description: 'Transform raw data from multiple sources into actionable insights. We build beautiful, real-time dashboards so leadership can make split-second strategic decisions.',
    icon: BarChart3,
    bullets: ['Real-Time KPI Tracking', 'Custom Database Modeling', 'Predictive Analytics Arrays', 'Automated Email Reporting'],
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-indigo-950 pt-40 pb-32 text-center text-white px-4 overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-[120px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn direction="up">
            <div className="text-sm font-medium text-indigo-300 mb-8 flex justify-center items-center gap-2 uppercase tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-500">&gt;</span>
              <span className="text-white">Services</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Capabilities</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              End-to-end technological solutions built to automate your operations, delight your customers, and scale your revenue.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Services Detail Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;
            
            return (
              <div key={service.id} className="py-24 border-b border-slate-100 last:border-0 flex flex-col md:flex-row gap-16 items-center">
                {/* Image/Graphic Block */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <FadeIn direction={isEven ? 'right' : 'left'}>
                    <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-3xl h-96 flex items-center justify-center p-8 shadow-sm group relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
                      <div className="bg-white p-8 rounded-3xl shadow-xl shadow-indigo-100/50 group-hover:scale-110 transition-transform duration-700 relative z-10">
                        <Icon className="w-28 h-28 text-indigo-600" strokeWidth={1} />
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Text Block */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <FadeIn direction="up" delay={0.1}>
                    <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{service.title}</h3>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                      {service.description}
                    </p>
                    <ul className="space-y-5 mb-12">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-800 font-medium text-lg">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-3 bg-indigo-50 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all group ring-2 ring-indigo-100 hover:ring-indigo-600 shadow-sm"
                    >
                      Discuss {service.title.split(' ')[service.title.split(' ').length - 1]} 
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Comparison Table */}
      <section className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">The Advantage</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Why choose Service Path?</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">See how our comprehensive, engineering-first approach scales beyond the alternatives.</p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="overflow-x-auto rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/50">
                    <th className="p-8 font-semibold text-slate-900 border-b border-slate-200 text-lg">Feature</th>
                    <th className="p-8 font-black text-indigo-700 border-b border-slate-200 bg-indigo-50 text-lg shadow-[inset_0_-2px_0_theme(colors.indigo.500)]">Service Path</th>
                    <th className="p-8 font-semibold text-slate-500 border-b border-slate-200 text-lg">Freelancers</th>
                    <th className="p-8 font-semibold text-slate-500 border-b border-slate-200 text-lg">DIY Builders</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-lg">
                  {[
                    ['Custom AI Model Training', true, false, false],
                    ['Dedicated Support Team', true, false, false],
                    ['Cross-Platform Integrations', true, true, false],
                    ['SEO & Conversion Optimized', true, false, true],
                    ['Enterprise-Grade Security', true, false, false],
                    ['Scalable Infrastructure', true, true, false]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-8 text-slate-800 font-medium">{row[0]}</td>
                      <td className="p-8 bg-indigo-50/30">
                        {row[1] ? <CheckCircle2 className="w-7 h-7 text-emerald-500" /> : <XCircle className="w-7 h-7 text-slate-300" />}
                      </td>
                      <td className="p-8">
                        {row[2] ? <CheckCircle2 className="w-7 h-7 text-emerald-500" /> : <XCircle className="w-7 h-7 text-slate-300" />}
                      </td>
                      <td className="p-8">
                        {row[3] ? <CheckCircle2 className="w-7 h-7 text-emerald-500" /> : <XCircle className="w-7 h-7 text-slate-300" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Pricing Teaser */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-24">
              <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4 block">Plans</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Simple, transparent pricing</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">Invest in automation that pays for itself in weeks, not years.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {/* Starter */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-3xl border border-slate-200 hover:border-indigo-200 p-10 shadow-sm transition-all hover:shadow-xl h-full flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Starter</h3>
                <p className="text-slate-500 text-base mb-8 flex-1">Perfect for small teams needing standard chatbot support.</p>
                <div className="text-5xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-8">$99<span className="text-xl text-slate-400 font-medium">/mo</span></div>
                <ul className="space-y-4 mb-10 text-base text-slate-700">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Standard AI Chatbot</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Lead Email Capture</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> 1,000 Messages/mo</li>
                </ul>
                <Link href="/contact" className="block text-center border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 font-bold px-6 py-4 rounded-2xl transition-all">
                  Get Started
                </Link>
              </div>
            </FadeIn>

            {/* Growth (Most Popular) */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-3xl border-2 border-indigo-600 p-10 shadow-2xl shadow-indigo-200 relative transform lg:-translate-y-6 flex flex-col h-full bg-gradient-to-b from-white to-indigo-50/30">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Growth Partner</h3>
                <p className="text-slate-600 text-base mb-8 flex-1">Full tech stack setup including custom CRM and workflows.</p>
                <div className="text-5xl font-black text-indigo-600 mb-8 border-b border-slate-200 pb-8">Custom</div>
                <ul className="space-y-4 mb-10 text-base text-slate-700 font-medium">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600" /> Advanced AI logic & APIs</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600" /> Full CRM Implementation</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600" /> Automated Zaps/Workflows</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-600" /> Priority SLAs</li>
                </ul>
                <Link href="/contact" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/30 ring-4 ring-indigo-50 hover:ring-indigo-100">
                  Book Discovery Call
                </Link>
              </div>
            </FadeIn>

            {/* Enterprise */}
            <FadeIn direction="up" delay={0.5}>
              <div className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 p-10 shadow-sm transition-all hover:shadow-xl h-full flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Enterprise</h3>
                <p className="text-slate-500 text-base mb-8 flex-1">For large organizations requiring massive scale and security.</p>
                <div className="text-5xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-8">POA</div>
                <ul className="space-y-4 mb-10 text-base text-slate-700">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400" /> Dedicated Cloud Infra</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400" /> White-glove Onboarding</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-slate-400" /> Custom Analytics Portals</li>
                </ul>
                <Link href="/contact" className="block text-center border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 font-bold px-6 py-4 rounded-2xl transition-all">
                  Contact Sales
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
