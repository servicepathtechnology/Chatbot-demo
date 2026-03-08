import Link from 'next/link';
import { Zap, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t-2 border-indigo-500 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Logo & Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                <Zap className="w-5 h-5" fill="currentColor" />
              </div>
              <span className="text-xl tracking-tight text-white">
                Service<span className="font-bold text-indigo-500">Path</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We're on a mission to make AI and automation accessible to every business. Supercharge your workflow today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">AI Chatbots</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">CRM Implementation</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Workflow Automation</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Custom Websites</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Data Analytics</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>123 Innovation Drive,<br />Tech Park, HYD 500081</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                <a href="tel:+917702001391" className="hover:text-indigo-400 transition-colors">+91 7702001391</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <a href="mailto:servicepathtechnology@gmail.com" className="hover:text-indigo-400 transition-colors break-all">servicepathtechnology@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Service Path Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
