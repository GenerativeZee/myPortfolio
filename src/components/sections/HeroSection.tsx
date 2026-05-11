"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import {
  ArrowDown,
  Mail,
  Download,
  ChevronRight,
  Sparkles,
  Cpu,
  Brain,
  Network,
  Database,
  Workflow,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const roles = [
  "AI Engineer",
  "LLM Engineer",
  "GenAI Systems Architect",
  "Multi-Agent AI Developer",
  "RAG Systems Engineer",
  "AI Infrastructure Engineer",
];

const floatingIcons = [
  { icon: Brain, x: "10%", y: "20%", delay: 0, size: 20 },
  { icon: Cpu, x: "85%", y: "15%", delay: 0.5, size: 18 },
  { icon: Network, x: "75%", y: "70%", delay: 1, size: 22 },
  { icon: Database, x: "15%", y: "75%", delay: 1.5, size: 16 },
  { icon: Workflow, x: "90%", y: "45%", delay: 2, size: 20 },
  { icon: Sparkles, x: "5%", y: "50%", delay: 0.8, size: 16 },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Main gradient orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 70%)",
            x: mousePos.x * 40,
            y: mousePos.y * 40,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        {/* Secondary orb */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)",
            x: mousePos.x * -30,
            y: mousePos.y * -30,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Accent orb */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            className="absolute hidden md:block"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.25, 0.1],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="p-3 rounded-xl glass-light">
              <Icon size={item.size} className="text-indigo-400/50" />
            </div>
          </motion.div>
        );
      })}

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-32 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/8 border border-emerald-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-emerald-300 tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="text-white">MD </span>
            <span className="animated-gradient-text">ZAID</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-10 md:h-12 flex items-center justify-center mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.4 }}
                className="text-lg md:text-2xl font-medium text-indigo-300 tracking-wide"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Building production-scale AI systems that{" "}
            <span className="text-white font-medium">reason</span>,{" "}
            <span className="text-white font-medium">retrieve</span>, and{" "}
            <span className="text-white font-medium">act autonomously</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-zinc-500 max-w-xl mx-auto mb-10"
          >
            3+ years engineering GenAI systems, multi-agent architectures,
            hybrid RAG pipelines & scalable AI infrastructure at enterprise
            scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="magnetic-btn group inline-flex items-center justify-center relative px-7 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              <span className="flex items-center gap-2">
                View Projects
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </span>
            </button>

            <a
              href="/MD_ZAID_Resume.pdf"
              download
              className="magnetic-btn flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-zinc-300 border border-white/[0.1] rounded-xl hover:bg-white/[0.04] hover:border-white/[0.15] hover:text-white transition-all"
            >
              <Download size={16} />
              Download Resume
            </a>

            <button
              onClick={scrollToContact}
              className="magnetic-btn flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-zinc-300 border border-white/[0.1] rounded-xl hover:bg-white/[0.04] hover:border-white/[0.15] hover:text-white transition-all"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <a
              href="https://github.com/Ali-18sep"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-500 hover:text-white border border-white/[0.06] rounded-xl hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mdzaid433"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-500 hover:text-white border border-white/[0.06] rounded-xl hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:mdzaid19433@gmail.com"
              className="p-2.5 text-zinc-500 hover:text-white border border-white/[0.06] rounded-xl hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-zinc-600"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
