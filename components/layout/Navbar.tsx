'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useChatbot } from '@/components/chatbot/useChatbot';

const LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { toggleChat } = useChatbot();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5" fill="currentColor" />
            </div>
            <span className={cn("text-xl tracking-tight", scrolled ? "text-slate-900" : "text-slate-900 md:text-white")}>
              Service<span className="font-bold text-indigo-600">Path</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm transition-colors',
                    isActive 
                      ? 'text-indigo-600 font-semibold' 
                      : scrolled ? 'text-slate-600 hover:text-indigo-600 font-medium' : 'text-slate-300 hover:text-white font-medium'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleChat}
              className="relative bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95 group"
            >
              <div className="absolute inset-0 rounded-lg animate-pulse-ring group-hover:hidden" />
              Chat With Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn("md:hidden p-2 rounded-lg transition-colors border", scrolled ? "text-slate-600 hover:bg-slate-100 border-transparent" : "text-white hover:bg-white/10 border-white/20")}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-slide-down">
          <div className="px-4 py-6 flex flex-col space-y-4">
            {LINKS.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-xl text-base font-medium transition-colors',
                  pathname === link.href ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-slate-100 my-2" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                toggleChat();
              }}
              className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all active:scale-95"
            >
              Chat With Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
