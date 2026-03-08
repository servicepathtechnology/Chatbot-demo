import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChatWindow } from "@/components/chatbot/ChatWindow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Path Technology | AI & Automation Services",
  description: "We help businesses modernize operations through AI, chatbots, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <ChatWindow />
      </body>
    </html>
  );
}
