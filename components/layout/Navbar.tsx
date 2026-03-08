'use client';

import Link from 'next/link';
import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary-600 text-white p-1.5 rounded-lg group-hover:bg-primary-700 transition-colors">
                <Bot className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Service<span className="text-primary-600">Path</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center">
            {/* The Chat button just opens the window, but here we can just link to contact or define action. 
                For now we keep it as a button that will trigger a global event or context, but PRD uses floating launcher for chat. */}
            <button 
              onClick={() => document.getElementById('chat-launcher-btn')?.click()}
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-xl font-medium transition-colors shadow-sm tracking-wide"
            >
              Chat With Us
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg animate-slide-down">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">Services</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">Contact</Link>
            <button 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('chat-launcher-btn')?.click();
              }}
              className="mt-2 w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-xl font-medium transition-colors"
            >
              Chat With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
