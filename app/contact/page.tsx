'use client';

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Section background="gray" className="pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Let's discuss how we can transform your business.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! (Demo)"); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
              </div>
              <Button type="submit" fullWidth>Submit Message</Button>
            </form>
          </Card>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">hello@servicepath.tech</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">100 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              <span className="flex items-center gap-2"><MapPin /> Map Placeholder</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
