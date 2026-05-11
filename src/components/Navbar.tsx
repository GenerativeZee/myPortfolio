"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Layers,
  Briefcase,
  FolderKanban,
  Award,
  BookOpen,
  GraduationCap,
  Mail,
  Command,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Layers },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Awards", href: "#awards", icon: Award },
  { label: "Publications", href: "#publications", icon: BookOpen },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowCommandPalette((prev) => !prev);
      }
      if (e.key === "Escape") {
        setShowCommandPalette(false);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
      setShowCommandPalette(false);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2"
            : "py-4"
        }`}
      >
        <div className="section-container">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
              isScrolled
                ? "glass shadow-lg shadow-black/20"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#hero")}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-shadow">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
                MD ZAID
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-xs font-medium tracking-wide transition-colors rounded-lg ${
                    activeSection === item.href.slice(1)
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/[0.06] rounded-lg border border-white/[0.08]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Command palette trigger */}
              <button
                onClick={() => setShowCommandPalette(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-500 border border-white/[0.06] rounded-lg hover:border-white/[0.12] hover:text-zinc-300 transition-all"
              >
                <Command size={12} />
                <span>⌘K</span>
              </button>

              {/* CTA */}
              <button
                onClick={() => scrollToSection("#contact")}
                className="hidden sm:flex magnetic-btn px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20"
              >
                Let&apos;s Talk
              </button>

              {/* Mobile menu */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#0a0a0f] border-l border-white/[0.06] p-6 pt-20"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                        activeSection === item.href.slice(1)
                          ? "text-white bg-white/[0.06]"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <AnimatePresence>
        {showCommandPalette && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh]"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowCommandPalette(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg mx-4 bg-[#0a0a0f] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
            >
              <div className="p-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3 text-zinc-400">
                  <Command size={16} />
                  <span className="text-sm">Navigate to section...</span>
                </div>
              </div>
              <div className="p-2 max-h-80 overflow-auto">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 w-full px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
                    >
                      <Icon size={16} className="text-zinc-500" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
              <div className="p-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-600">
                <span>Navigate</span>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
