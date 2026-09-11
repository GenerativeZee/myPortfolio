import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://md-zaid-portfolio.vercel.app"),
  title: "MD Zaid — Agentic AI Engineer | Agent Harness & Orchestration",
  description:
    "Portfolio of MD Zaid — Agentic AI Engineer specializing in agent harness & orchestration, tool calling, planning & memory, RAG / vector retrieval, and agent evals.",
  keywords: [
    "Agentic AI Engineer",
    "Agent Orchestration",
    "LangGraph",
    "GenAI",
    "Multi-Agent AI",
    "RAG Systems",
    "Machine Learning",
    "Portfolio",
    "MD Zaid",
  ],
  authors: [{ name: "MD Zaid" }],
  openGraph: {
    title: "MD Zaid — Agentic AI Engineer",
    description:
      "Building production-scale AI systems that reason, retrieve, and act autonomously.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Zaid — Agentic AI Engineer",
    description:
      "Building production-scale AI systems that reason, retrieve, and act autonomously.",
  },
  robots: "index, follow",
};

import Chatbot from "@/components/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
