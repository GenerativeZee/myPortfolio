"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FadeInUp } from "@/components/animations";
import {
  Building2,
  Calendar,
  MapPin,
  ChevronDown,
  Bot,
  Database,
  MessageSquare,
  Blocks,
  ArrowRight,
} from "lucide-react";

interface ProjectDetail {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  impact: string[];
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
}

const projects: ProjectDetail[] = [
  {
    id: "email-ai",
    title: "Multi-Agent Email AI System",
    icon: Bot,
    color: "indigo",
    impact: [
      "Processes 10,000+ emails daily with autonomous AI orchestration",
      "Reduced turnaround time by 90%+ through intelligent pipeline automation",
      "Eliminated 70–80% of manual intervention with self-healing agent workflows",
      "Achieved sub-2s latency for real-time enterprise email processing",
    ],
    description:
      "Architected and deployed an enterprise-scale multi-agent system using LangGraph that autonomously processes, classifies, and responds to 10K+ daily emails. The system features 12+ specialized agents spanning intent detection, ABSA, query extraction, retrieval, drafting, summarization, and auditing — with built-in hallucination guardrails and reasoning pipelines.",
    techStack: [
      "LangGraph",
      "GPT-4",
      "FastAPI",
      "Azure",
      "FAISS",
      "Langfuse",
    ],
    metrics: [
      { label: "Daily Volume", value: "10K+" },
      { label: "Agent Count", value: "12+" },
      { label: "Latency", value: "<2s" },
      { label: "Manual Reduction", value: "80%" },
    ],
  },
  {
    id: "hybrid-rag",
    title: "Hybrid RAG System",
    icon: Database,
    color: "cyan",
    impact: [
      "Improved answer accuracy by 40%+ through dual retrieval architecture",
      "Reduced hallucination rate by 30% with structured validation layers",
      "Intelligent query routing between SQL and vector retrieval engines",
      "Optimized legal document extraction with semantic search pipelines",
    ],
    description:
      "Designed a next-generation hybrid retrieval system that intelligently routes queries between structured SQL databases and vector embeddings. The system uses dynamic query analysis to determine optimal retrieval paths, incorporating semantic search over legal documents with FAISS and Milvus for high-precision enterprise analytics.",
    techStack: [
      "LangChain",
      "FAISS",
      "Milvus",
      "SQL",
      "Azure AI Search",
      "Python",
    ],
    metrics: [
      { label: "Accuracy Gain", value: "40%+" },
      { label: "Hallucination Cut", value: "30%" },
      { label: "Retrieval Paths", value: "Dual" },
      { label: "Domain", value: "Legal" },
    ],
  },
  {
    id: "nlp-sql",
    title: "NLP-to-SQL System",
    icon: MessageSquare,
    color: "violet",
    impact: [
      "Enabled natural language querying for enterprise databases",
      "Built structured reasoning engine for complex multi-table SQL generation",
      "Unified QA pipeline reducing dependency on manual SQL expertise",
      "Democratized data access across non-technical business teams",
    ],
    description:
      "Engineered an intelligent NLP-to-SQL engine that translates natural language questions into optimized SQL queries through structured reasoning. The system handles complex multi-table joins, aggregations, and conditional logic while providing explainable query plans for enterprise analytics use cases.",
    techStack: ["LangChain", "GPT-4", "SQL", "FastAPI", "Python", "DSPy"],
    metrics: [
      { label: "Query Types", value: "Multi-table" },
      { label: "Reasoning", value: "Structured" },
      { label: "Pipeline", value: "Unified QA" },
      { label: "Users", value: "Enterprise" },
    ],
  },
  {
    id: "agent-ecosystem",
    title: "Agent Ecosystem (A2A + MCP)",
    icon: Blocks,
    color: "emerald",
    impact: [
      "Designed modular agent architecture with standardized MCP interfaces",
      "Implemented A2A protocols for seamless inter-agent coordination",
      "Created reusable tool interfaces for enterprise AI workflows",
      "Built extensible architecture supporting plug-and-play agent deployment",
    ],
    description:
      "Pioneered a modular AI agent ecosystem leveraging Agent-to-Agent (A2A) protocols and Model Context Protocol (MCP) for standardized tool interfaces. This architecture enables seamless agent coordination, reusable components, and extensible deployment patterns for enterprise AI systems.",
    techStack: [
      "MCP",
      "A2A Protocol",
      "LangGraph",
      "FastAPI",
      "Python",
      "Docker",
    ],
    metrics: [
      { label: "Architecture", value: "Modular" },
      { label: "Protocol", value: "A2A + MCP" },
      { label: "Integration", value: "Plug & Play" },
      { label: "Scale", value: "Enterprise" },
    ],
  },
];

const colorStyles: Record<
  string,
  { badge: string; icon: string; border: string; tag: string }
> = {
  indigo: {
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    icon: "text-indigo-400",
    border: "border-indigo-500/20",
    tag: "bg-indigo-500/8 border-indigo-500/15 text-indigo-300",
  },
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    icon: "text-cyan-400",
    border: "border-cyan-500/20",
    tag: "bg-cyan-500/8 border-cyan-500/15 text-cyan-300",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    icon: "text-violet-400",
    border: "border-violet-500/20",
    tag: "bg-violet-500/8 border-violet-500/15 text-violet-300",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    icon: "text-emerald-400",
    border: "border-emerald-500/20",
    tag: "bg-emerald-500/8 border-emerald-500/15 text-emerald-300",
  },
};

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<string | null>("email-ai");

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-container">
        <FadeInUp>
          <SectionHeading
            label="Experience"
            title="Engineering Impact at Scale"
            description="Building production AI systems that transform enterprise operations at one of India's largest technology companies."
          />
        </FadeInUp>

        {/* Company Header */}
        <FadeInUp delay={0.1}>
          <div className="glass rounded-2xl p-6 md:p-8 mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                  <Building2 size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Jio Platforms Ltd.
                  </h3>
                  <p className="text-indigo-300 font-medium text-sm">
                    AI Engineer — GenAI Systems
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  Aug 2023 – Present
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  India
                </span>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Project Expansions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorStyles[project.color];
            const isExpanded = expanded === project.id;

            return (
              <FadeInUp key={project.id} delay={0.15 + index * 0.05}>
                <div className="glass rounded-2xl overflow-hidden card-hover">
                  {/* Header */}
                  <button
                    onClick={() =>
                      setExpanded(isExpanded ? null : project.id)
                    }
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl ${colors.badge} border flex items-center justify-center shrink-0`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm md:text-base group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-zinc-500 text-xs mt-0.5">
                          {project.metrics.length} key metrics
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown
                        size={18}
                        className="text-zinc-500 group-hover:text-zinc-300 transition-colors"
                      />
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-white/[0.04] pt-6">
                          {/* Metrics */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                            {project.metrics.map((metric) => (
                              <div
                                key={metric.label}
                                className="bg-white/[0.02] rounded-xl p-3 text-center border border-white/[0.04]"
                              >
                                <div className="text-lg font-bold text-white">
                                  {metric.value}
                                </div>
                                <div className="text-[10px] text-zinc-500 mt-0.5">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Description */}
                          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                            {project.description}
                          </p>

                          {/* Impact */}
                          <div className="mb-5">
                            <h5 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                              Key Impact
                            </h5>
                            <div className="space-y-2">
                              {project.impact.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2"
                                >
                                  <ArrowRight
                                    size={12}
                                    className={`${colors.icon} mt-0.5 shrink-0`}
                                  />
                                  <span className="text-zinc-300 text-sm">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack */}
                          <div>
                            <h5 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                              Technology
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className={`px-3 py-1 rounded-lg text-xs font-medium ${colors.tag} border`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
