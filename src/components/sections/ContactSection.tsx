"use client";


import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FadeInUp } from "@/components/animations";
import {
  Mail,
  Download,
  Send,
  MapPin,
  ArrowUpRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contactLinks = [
  {
    label: "GitHub",
    value: "Ali-18sep",
    href: "https://github.com/Ali-18sep",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "mdzaid433",
    href: "https://linkedin.com/in/mdzaid433",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    value: "mdzaid19433@gmail.com",
    href: "mailto:mdzaid19433@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 9321987363",
    href: "tel:+919321987363",
    icon: Phone,
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.open(
      `mailto:mdzaid19433@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <FadeInUp>
          <SectionHeading
            label="Contact"
            title="Let's Build Together"
            description="Open to discussing AI engineering roles, consulting opportunities, and collaboration on cutting-edge GenAI projects."
          />
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <FadeInUp delay={0.1}>
            <div className="space-y-4">
              {/* Links */}
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-xl p-5 flex items-center gap-4 card-hover group block"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <Icon size={18} className="text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-zinc-500">{link.label}</p>
                      <p className="text-white text-sm font-medium truncate">
                        {link.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-zinc-600 group-hover:text-indigo-400 transition-colors"
                    />
                  </a>
                );
              })}

              {/* Resume Download */}
              <a
                href="/MD_ZAID_Resume.pdf"
                download
                className="glass rounded-xl p-5 flex items-center gap-4 card-hover group block"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <Download size={18} className="text-violet-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-zinc-500">Resume</p>
                  <p className="text-white text-sm font-medium">
                    Download CV
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-zinc-600 group-hover:text-violet-400 transition-colors"
                />
              </a>

              {/* Location */}
              <div className="glass rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Location</p>
                  <p className="text-white text-sm font-medium">India</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Contact Form */}
          <FadeInUp delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-white font-semibold text-lg mb-6">
                Send a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-zinc-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-zinc-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full magnetic-btn flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={16} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
