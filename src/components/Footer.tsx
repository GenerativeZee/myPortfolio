"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.04] py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">Z</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">MD Zaid</p>
              <p className="text-zinc-600 text-xs">AI Engineer</p>
            </div>
          </div>

          {/* Center */}
          <p className="text-zinc-600 text-xs text-center">
            © {new Date().getFullYear()} MD Zaid. Crafted with precision.
          </p>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Ali-18sep"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-600 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com/in/mdzaid433"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:mdzaid19433@gmail.com"
              className="p-2 text-zinc-600 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-zinc-600 hover:text-white border border-white/[0.06] rounded-lg hover:border-white/[0.12] transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
