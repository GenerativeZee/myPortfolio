"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
  FadeInUp,
  StaggerContainer,
  staggerItem,
} from "@/components/animations";
import {
  Trophy,
  Award,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const awards = [
  {
    title: "R-Samman Award",
    description:
      "Recognized for exceptional contributions to AI engineering and innovation in enterprise GenAI systems deployment.",
    icon: Trophy,
    color: "amber",
  },
  {
    title: "Business Excellence Award",
    description:
      "Honored for delivering transformative AI solutions that significantly impacted business operations and efficiency metrics.",
    icon: Award,
    color: "indigo",
  },
];

const certifications = [
  {
    title: "Databricks GenAI Certification",
    issuer: "Databricks",
    icon: BadgeCheck,
    color: "rose",
  },
  {
    title: "Hugging Face AI Agents",
    issuer: "Hugging Face",
    icon: Sparkles,
    color: "yellow",
  },
  {
    title: "MCP Certification",
    issuer: "Model Context Protocol",
    icon: BadgeCheck,
    color: "cyan",
  },
];

const certColorMap: Record<string, string> = {
  rose: "from-rose-600 to-pink-600",
  yellow: "from-yellow-600 to-amber-600",
  cyan: "from-cyan-600 to-blue-600",
};

export default function AwardsSection() {
  return (
    <section id="awards" className="relative py-24 md:py-32">
      <div className="section-container">
        <FadeInUp>
          <SectionHeading
            label="Recognition"
            title="Awards & Certifications"
            description="Recognized for engineering excellence and validated expertise across leading AI platforms."
          />
        </FadeInUp>

        {/* Awards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
          {awards.map((award) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                variants={staggerItem}
                className="glass rounded-2xl p-6 md:p-8 card-hover group relative overflow-hidden"
              >
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[60px] group-hover:bg-amber-500/10 transition-all" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-shadow">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {award.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Certifications */}
        <FadeInUp delay={0.2}>
          <h3 className="text-center text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">
            Professional Certifications
          </h3>
        </FadeInUp>

        <StaggerContainer className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            const gradient = certColorMap[cert.color] || "from-indigo-600 to-violet-600";
            return (
              <motion.div
                key={cert.title}
                variants={staggerItem}
                className="glass rounded-xl p-5 text-center card-hover group"
              >
                <div
                  className={`w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:shadow-lg transition-shadow`}
                >
                  <Icon size={16} className="text-white" />
                </div>
                <h4 className="text-white font-medium text-sm mb-1">
                  {cert.title}
                </h4>
                <p className="text-zinc-500 text-xs">{cert.issuer}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
