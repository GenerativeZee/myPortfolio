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
  title: "MD Zaid — AI Engineer | GenAI Systems & Multi-Agent Architectures",
  description:
    "Portfolio of MD Zaid — AI Engineer specializing in production-scale GenAI systems, Multi-Agent AI architectures, LLM engineering, Hybrid RAG systems, and scalable AI infrastructure.",
  keywords: [
    "AI Engineer",
    "LLM Engineer",
    "GenAI",
    "Multi-Agent AI",
    "RAG Systems",
    "Machine Learning",
    "Portfolio",
    "MD Zaid",
  ],
  authors: [{ name: "MD Zaid" }],
  openGraph: {
    title: "MD Zaid — AI Engineer",
    description:
      "Building production-scale AI systems that reason, retrieve, and act autonomously.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Zaid — AI Engineer",
    description:
      "Building production-scale AI systems that reason, retrieve, and act autonomously.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
