"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm MD Zaid's AI assistant. Ask me anything about his experience, projects, or skills!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `Error: ${data.error}` },
        ]);
      } else {
        setMessages((prev) => [...prev, data]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't connect to the server." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-105 ${
          isOpen ? "hidden" : "flex"
        }`}
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-[90vw] md:w-[400px] h-[500px] max-h-[80vh] flex flex-col glass rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/50 overflow-hidden bg-[#0a0a0f]/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Zaid&apos;s AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-zinc-400">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    msg.role === "assistant" ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center ${
                      msg.role === "assistant"
                        ? "bg-indigo-500/20 text-indigo-400"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {msg.role === "assistant" ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === "assistant"
                        ? "bg-white/[0.05] text-zinc-300 border border-white/[0.05] rounded-tl-sm"
                        : "bg-indigo-600 text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white/[0.05] border border-white/[0.05] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/[0.08] bg-white/[0.02]">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-white/[0.05] border border-white/[0.08] rounded-full pl-4 pr-12 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 rounded-full text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 disabled:opacity-50 disabled:hover:bg-transparent transition-all"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
