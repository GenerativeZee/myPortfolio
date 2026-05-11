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
  { label: "Years Experience", value: "2.5+", icon: Zap },
  { label: "Emails/Day Automated", value: "10K+", icon: Target },
  { label: "Specialized Agents", value: "12+", icon: Cpu },
  { label: "Turnaround Reduction", value: "90%", icon: TrendingUp },
];

const highlights = [
  {
    title: "Multi-Agent Orchestration",
    description:
      "Architecting autonomous AI ecosystems with LangGraph, coordinating 12+ specialized agents for enterprise-scale email intelligence systems.",
  },
  {
    title: "Hybrid RAG Engineering",
    description:
      "Pioneering dual-retrieval systems combining vector search with structured SQL execution, achieving 40%+ accuracy improvements across legal and enterprise domains.",
  },
  {
    title: "Production AI Infrastructure",
    description:
      "Deploying and scaling GenAI pipelines on Azure Databricks with Kubeflow orchestration, delivering sub-2s latency on production workloads.",
  },
  {
    title: "Intelligent System Design",
    description:
      "Building NLP-to-SQL engines, MCP-powered tool interfaces, and A2A protocol integrations that transform how enterprises interact with data.",
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
                I&apos;m an AI Engineer focused on building production-grade
                intelligent systems that operate at enterprise scale. My work
                spans the full spectrum of modern AI engineering — from
                designing multi-agent orchestration frameworks that process
                10,000+ daily interactions, to pioneering hybrid retrieval
                architectures that bridge structured and unstructured data
                worlds.
              </p>
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg mt-4">
                At{" "}
                <span className="text-indigo-400 font-medium">
                  Jio Platforms
                </span>
                , I engineer GenAI systems that have fundamentally transformed
                enterprise workflows — reducing manual intervention by 70–80%
                and achieving 90%+ turnaround improvements through autonomous
                reasoning pipelines. I specialize in{" "}
                <span className="text-white/80">LangGraph</span>,{" "}
                <span className="text-white/80">MCP architectures</span>,{" "}
                <span className="text-white/80">A2A protocols</span>, and{" "}
                <span className="text-white/80">scalable AI infrastructure</span>{" "}
                on Databricks and Kubernetes.
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
