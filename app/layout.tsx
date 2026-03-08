import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatbotLauncher } from "@/components/chatbot/ChatbotLauncher";
import { ChatWindow } from "@/components/chatbot/ChatWindow";
import { ChatbotProvider } from "@/components/chatbot/useChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Service Path Technology | AI & Automation',
    template: '%s | Service Path Technology'
  },
  description: 'Transform your business with AI chatbots, CRM systems, and workflow automation.',
  keywords: ['AI chatbot', 'CRM', 'workflow automation', 'business technology'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chatbot-brown-iota-53.vercel.app',
    siteName: 'Service Path Technology',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased flex flex-col min-h-screen`}>
        <ChatbotProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ChatWindow />
          <ChatbotLauncher />
        </ChatbotProvider>
      </body>
    </html>
  );
}
