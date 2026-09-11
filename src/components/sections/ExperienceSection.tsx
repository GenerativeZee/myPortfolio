"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FadeInUp } from "@/components/animations";
import AgentFlow, { type FlowStep } from "@/components/AgentFlow";
import {
  Building2,
  Calendar,
  MapPin,
  ChevronDown,
  Bot,
  Database,
  FileText,
  ArrowRight,
  Workflow,
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
  flow: FlowStep[];
}

const projects: ProjectDetail[] = [
  {
    id: "email-ai",
    title: "Email Copilot & Auditor Agent | Jio KM Portal",
    icon: Bot,
    color: "indigo",
    impact: [
      "10,000+ emails/day resolved autonomously across all 11 business portals",
      "95% reduction in manual handling effort",
      "Zero non-compliant drafts released to production",
      "T2R fast path cuts latency and token cost by drafting from pre-fetched tool responses",
    ],
    description:
      "Architected the agent harness as a multi-node LangGraph conditional state graph: typed graph state, conditional planning and routing, MCP tool calls into enterprise systems, retry/fallback branches, and a 0-10 confidence score gating autonomous send vs. human escalation. Built the drafting pipeline (queue classification, intent detection, ABSA sentiment, RAG-grounded drafting via DSPy ChainOfThought) with PII masking enforced as a hard policy guardrail, plus an independent Auditor Agent scoring every draft against 9 guardrails with a max-3-attempt HITL revision loop.",
    techStack: [
      "LangGraph",
      "MCP",
      "DSPy",
      "Claude Sonnet",
      "RAG",
      "Databricks",
      "FastAPI",
    ],
    metrics: [
      { label: "Daily Volume", value: "10K+" },
      { label: "Business Portals", value: "11" },
      { label: "Manual Reduction", value: "95%" },
      { label: "Requests/Day", value: "7.8M" },
    ],
    flow: [
      { label: "Classify Queue" },
      { label: "Route (MCP Tools)" },
      { label: "Draft (RAG + DSPy)" },
      { label: "Audit (9 Guardrails)" },
      { parallel: ["Autonomous Send", "Human Escalation"] },
    ],
  },
  {
    id: "reims",
    title: "REIMS | Enterprise Plant SOP Agent",
    icon: Database,
    color: "cyan",
    impact: [
      "p95 latency under 4s with citable, groundedness ≥0.85 answers",
      "Citation completeness ≥0.95 across structured and unstructured SOPs",
      "Zero cross-site data leaks in production",
      "Self-improving eval harness promotes winning prompts with no redeploy",
    ],
    description:
      "Drove the build from solution design through UAT sign-off and production deployment across multi-site plant operations. Implemented dual memory — short-term per-thread state plus long-term user memory persisted in Lakebase — exposed as read/write/delete tools the agent invokes autonomously. Enforced site isolation inside the retrieval layer, filtering every query by the authenticated user's authorized sites. Built a self-improving eval harness: thumbs up/down → MLflow traces → 500-example SME-reviewed eval set → automated DSPy prompt optimization scored by SME-aligned LLM judges → winning prompt promoted via MLflow versioning.",
    techStack: [
      "Azure Databricks",
      "Databricks Vector Search",
      "Lakebase",
      "MLflow",
      "DSPy",
      "Claude Sonnet",
    ],
    metrics: [
      { label: "p95 Latency", value: "<4s" },
      { label: "Groundedness", value: "≥0.85" },
      { label: "Citation Complete", value: "≥0.95" },
      { label: "Cross-site Leaks", value: "Zero" },
    ],
    flow: [
      { label: "Query" },
      { label: "Site-Isolated Retrieval" },
      { label: "Vector Search + Memory" },
      { label: "Grounded Answer" },
    ],
  },
  {
    id: "vendor-agreement",
    title: "Vendor Agreement Agent | Reliance Life Sciences",
    icon: FileText,
    color: "violet",
    impact: [
      "40%+ improvement in answer accuracy over manual cross-referencing",
      "Reduced query latency for internal legal teams",
      "Replaced manual cross-referencing workflow for vendor contracts",
      "Fused structured lookups with unstructured clause retrieval",
    ],
    description:
      "Built a hybrid-retrieval agent that classifies each query at runtime and routes it between SQL over structured contract data and dense document retrieval, since neither approach alone covered both structured contract metadata and clause text inside agreements. Led extraction and modelling of contract key-value data, letting the agent fuse structured lookups with unstructured clause retrieval into one grounded answer for internal legal teams.",
    techStack: ["LangChain", "LangGraph", "SQL", "Dense Retrieval", "Claude"],
    metrics: [
      { label: "Accuracy Gain", value: "40%+" },
      { label: "Retrieval Paths", value: "Dual" },
      { label: "Domain", value: "Legal" },
      { label: "Users", value: "Internal Teams" },
    ],
    flow: [
      { label: "Query" },
      { label: "Runtime Classify" },
      { parallel: ["SQL Retrieval", "Dense Retrieval"] },
      { label: "Fuse & Answer" },
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
                    AI / Agentic AI Engineer
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
                  Mumbai / Gurgaon, India
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

                          {/* Agent Flow */}
                          <div className="mb-6">
                            <h5 className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">
                              <Workflow size={12} />
                              Agent Flow
                            </h5>
                            <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-4 md:p-5">
                              <AgentFlow
                                steps={project.flow}
                                color={project.color as "indigo" | "cyan" | "violet"}
                              />
                            </div>
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
