"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
  FadeInUp,
  StaggerContainer,
  staggerItem,
} from "@/components/animations";
import { Cpu, Zap, Target, TrendingUp } from "lucide-react";

const metrics = [
  { label: "Years Experience", value: "3+", icon: Zap },
  { label: "Emails/Day Automated", value: "10K+", icon: Target },
  { label: "Business Portals", value: "11", icon: Cpu },
  { label: "Manual Effort Reduction", value: "95%", icon: TrendingUp },
];

const highlights = [
  {
    title: "Multi-Agent Orchestration",
    description:
      "Architecting multi-node LangGraph state graphs with conditional routing, MCP tool calls, and an independent Auditor Agent that gates every output against 9 guardrails.",
  },
  {
    title: "Agent Harness & Evals",
    description:
      "Building self-improving eval harnesses on MLflow and DSPy — SME-reviewed eval sets, LLM-as-Judge scoring, and automated prompt optimization with zero-redeploy promotion.",
  },
  {
    title: "Agent Memory & Continuous Learning",
    description:
      "Designing full agent memory systems — procedural, semantic, and episodic — with closed feedback loops that keep agents improving after deployment, no redeploy needed.",
  },
  {
    title: "Production AI Infrastructure",
    description:
      "Owning AI systems end-to-end on Azure Databricks — from tool design and retrieval to guardrails, memory, and production monitoring at enterprise scale.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <FadeInUp>
          <SectionHeading
            label="About"
            title="Engineering Intelligence at Scale"
            description="Designing autonomous AI systems that combine reasoning, retrieval, orchestration, and scalable deployment to solve real-world problems."
          />
        </FadeInUp>

        {/* Bio */}
        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="glass rounded-2xl p-8 md:p-10">
              <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                I&apos;m an Agentic AI Engineer with 3+ years of experience at
                Jio Platforms (Reliance Industries), specializing in
                production-grade AI agents, multi-agent systems, and RAG
                architectures. My work spans agent orchestration, LLM
                evaluation, guardrails, memory, and observability — owning AI
                systems end-to-end from design through production deployment.
              </p>
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg mt-4">
                At{" "}
                <span className="text-indigo-400 font-medium">
                  Jio Platforms
                </span>
                , I&apos;ve architected multi-agent LangGraph systems that
                resolve 10,000+ emails a day across 11 business portals with a
                95% reduction in manual handling effort, and built
                enterprise RAG agents with citable, site-isolated retrieval.
                I work hands-on across{" "}
                <span className="text-white/80">LangGraph</span>,{" "}
                <span className="text-white/80">Claude</span>,{" "}
                <span className="text-white/80">Azure Databricks</span>,{" "}
                <span className="text-white/80">MLflow</span>,{" "}
                <span className="text-white/80">DSPy</span>, and{" "}
                <span className="text-white/80">Databricks Vector Search</span>.
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* Metrics */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                variants={staggerItem}
                className="glass rounded-2xl p-6 text-center card-hover group"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Icon size={18} className="text-indigo-400" />
                </div>
                <div className="metric-value mb-1">{metric.value}</div>
                <p className="text-xs text-zinc-500 tracking-wide">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Highlight Cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="glass rounded-2xl p-6 md:p-8 card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0 group-hover:shadow-lg group-hover:shadow-indigo-500/40 transition-shadow" />
                <div>
                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
