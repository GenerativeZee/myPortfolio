"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import {
  FadeInUp,
  StaggerContainer,
  staggerItem,
} from "@/components/animations";
import AgentFlow, { type FlowStep } from "@/components/AgentFlow";
import {
  Bot,
  Database,
  FileText,
  ExternalLink,
  X,
  Star,
  ArrowRight,
  Sparkles,
  Workflow,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  featured?: boolean;
  tags: string[];
  flow: FlowStep[];
  details: {
    problem: string;
    solution: string;
    highlights: string[];
  };
  links?: {
    github?: string;
    demo?: string;
  };
}

const projects: Project[] = [
  {
    id: "email-ai",
    title: "Email Copilot & Auditor Agent",
    subtitle: "Jio KM Portal — Multi-Agent LangGraph System",
    description:
      "Multi-node LangGraph agent harness resolving 10,000+ emails/day across 11 business portals, with an independent Auditor Agent gating every draft against 9 guardrails.",
    icon: Bot,
    color: "indigo",
    featured: true,
    tags: [
      "LangGraph",
      "MCP",
      "DSPy",
      "Claude Sonnet",
      "RAG",
      "Databricks",
    ],
    flow: [
      { label: "Classify Queue" },
      { label: "Route (MCP Tools)" },
      { label: "Draft (RAG + DSPy)" },
      { label: "Audit (9 Guardrails)" },
      { parallel: ["Autonomous Send", "Human Escalation"] },
    ],
    details: {
      problem:
        "10,000+ customer emails a day across 11 business portals were triaged and drafted manually, with no automated check on accuracy, tone, or PII exposure.",
      solution:
        "Architected the agent harness as a multi-node LangGraph conditional state graph — typed graph state, conditional planning and routing, MCP tool calls into enterprise systems, retry/fallback branches, and a 0-10 confidence score gating autonomous send vs. human escalation. Built the drafting pipeline with RAG-grounded drafting via DSPy ChainOfThought and PII masking enforced as a hard policy guardrail, plus an Auditor Agent running a max-3-attempt HITL revision loop.",
      highlights: [
        "10,000+ emails/day resolved autonomously across all 11 portals",
        "95% reduction in manual handling effort",
        "Zero non-compliant drafts released to production",
        "Auditor Agent scores every draft against 9 guardrails (≥80% to pass)",
        "T2R fast path cuts latency and token cost",
        "7.8M requests/day across the platform",
      ],
    },
  },
  {
    id: "reims",
    title: "REIMS — Enterprise Plant SOP Agent",
    subtitle: "Azure Databricks · Multi-Site RAG Deployment",
    description:
      "Citable RAG agent over thousands of pages of structured and unstructured plant SOPs, with a full procedural/semantic/episodic memory system and a closed feedback loop that keeps improving the agent after deployment.",
    icon: Database,
    color: "cyan",
    tags: [
      "Azure Databricks",
      "Databricks Vector Search",
      "Lakebase",
      "MLflow",
      "DSPy",
      "Claude Sonnet",
    ],
    flow: [
      { label: "Query" },
      { label: "Site-Isolated Retrieval" },
      { parallel: ["Semantic Memory", "Episodic Memory", "Procedural Memory"] },
      { label: "Grounded Answer" },
      { label: "Feedback Loop → Memory Update" },
    ],
    details: {
      problem:
        "Plant teams needed citable answers from thousands of pages of structured and unstructured SOPs across multiple sites, where any cross-site data exposure is a compliance failure.",
      solution:
        "Drove the build from solution design through UAT sign-off and production deployment. Designed an end-to-end agent memory system — procedural memory (how to plan and act), semantic memory (SOP facts and domain knowledge), and episodic memory (past interactions) — persisted in Lakebase and enforced site isolation inside the retrieval layer, filtering every query by the authenticated user's authorized sites. Closed the feedback loop so the agent keeps improving after deployment: thumbs up/down → MLflow traces → 500-example SME-reviewed eval set → automated DSPy prompt optimization → winning prompt promoted via MLflow versioning, no redeploy.",
      highlights: [
        "Full procedural + semantic + episodic memory architecture via Lakebase",
        "Closed feedback loop continuously improves the agent post-deployment",
        "p95 latency under 4s",
        "Groundedness ≥0.85, citation completeness ≥0.95",
        "Zero cross-site data leaks in production",
      ],
    },
  },
  {
    id: "vendor-agreement",
    title: "Vendor Agreement Agent",
    subtitle: "Reliance Life Sciences — Hybrid Retrieval",
    description:
      "Hybrid-retrieval agent for internal legal teams that routes queries between SQL over structured contract data and dense retrieval over agreement text.",
    icon: FileText,
    color: "violet",
    tags: ["LangChain", "LangGraph", "SQL", "Dense Retrieval", "Claude"],
    flow: [
      { label: "Query" },
      { label: "Runtime Classify" },
      { parallel: ["SQL Retrieval", "Dense Retrieval"] },
      { label: "Fuse & Answer" },
    ],
    details: {
      problem:
        "Vendor-agreement queries required cross-referencing structured contract metadata in databases against clause text inside the agreements; neither SQL nor dense retrieval alone covered both.",
      solution:
        "Built a hybrid-retrieval agent that classifies each query at runtime and routes it between SQL over structured contract data and dense document retrieval. Led extraction and modelling of contract key-value data, letting the agent fuse structured lookups with unstructured clause retrieval into one grounded answer.",
      highlights: [
        "40%+ improvement in answer accuracy",
        "Reduced query latency for legal teams",
        "Replaced the manual cross-referencing workflow",
        "Runtime query classification between SQL and dense retrieval",
        "Structured contract key-value extraction and modelling",
      ],
    },
  },
];

const projectColorStyles: Record<
  string,
  {
    gradient: string;
    badge: string;
    tag: string;
    dot: string;
    glow: string;
  }
> = {
  indigo: {
    gradient: "from-indigo-600 to-violet-600",
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    tag: "bg-indigo-500/8 border-indigo-500/15 text-indigo-300",
    dot: "bg-indigo-500",
    glow: "shadow-indigo-500/20",
  },
  cyan: {
    gradient: "from-cyan-600 to-blue-600",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    tag: "bg-cyan-500/8 border-cyan-500/15 text-cyan-300",
    dot: "bg-cyan-500",
    glow: "shadow-cyan-500/20",
  },
  violet: {
    gradient: "from-violet-600 to-purple-600",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    tag: "bg-violet-500/8 border-violet-500/15 text-violet-300",
    dot: "bg-violet-500",
    glow: "shadow-violet-500/20",
  },
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === selectedProject);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <FadeInUp>
          <SectionHeading
            label="Projects"
            title="Systems That Ship"
            description="Production-grade AI agents engineered at Jio Platforms (Reliance Industries) — from multi-agent orchestration to enterprise RAG and hybrid retrieval."
          />
        </FadeInUp>

        {/* Featured Project */}
        <FadeInUp delay={0.1}>
          {(() => {
            const featured = projects[0];
            const Icon = featured.icon;
            const colors = projectColorStyles[featured.color];
            return (
              <div
                className="mb-8 glass rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(featured.id)}
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${colors.badge} border flex items-center gap-1.5`}
                    >
                      <Star size={10} />
                      Featured Project
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shrink-0 group-hover:shadow-xl ${colors.glow} transition-shadow`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                        {featured.title}
                      </h3>
                      <p className="text-sm text-zinc-500 mb-3">
                        {featured.subtitle}
                      </p>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-2xl">
                        {featured.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {featured.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-lg text-xs font-medium ${colors.tag} border`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:flex items-center text-zinc-600 group-hover:text-indigo-400 transition-colors">
                      <Sparkles size={20} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </FadeInUp>

        {/* Project Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-4">
          {projects.slice(1).map((project) => {
            const Icon = project.icon;
            const colors = projectColorStyles[project.color];
            return (
              <motion.div
                key={project.id}
                variants={staggerItem}
                onClick={() => setSelectedProject(project.id)}
                className="glass rounded-2xl p-6 cursor-pointer card-hover group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shrink-0 group-hover:shadow-lg ${colors.glow} transition-shadow`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-xs mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[10px] text-zinc-600">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-auto bg-[#0a0a0f] border border-white/[0.08] rounded-2xl shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = selected.icon;
                    const colors = projectColorStyles[selected.color];
                    return (
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}
                      >
                        <Icon size={18} className="text-white" />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="text-white font-semibold text-base">
                      {selected.title}
                    </h3>
                    <p className="text-zinc-500 text-xs">{selected.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-500 hover:text-white border border-white/[0.06] rounded-lg hover:bg-white/[0.04] transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Problem */}
                <div>
                  <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                    Problem
                  </h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {selected.details.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                    Solution
                  </h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {selected.details.solution}
                  </p>
                </div>

                {/* Agent Flow */}
                <div>
                  <h4 className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                    <Workflow size={12} />
                    Agent Flow
                  </h4>
                  <div className="bg-white/[0.02] rounded-xl border border-white/[0.04] p-4">
                    <AgentFlow
                      steps={selected.flow}
                      color={selected.color as "indigo" | "cyan" | "violet"}
                    />
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {selected.details.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight
                          size={12}
                          className="text-indigo-400 mt-0.5 shrink-0"
                        />
                        <span className="text-zinc-300 text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag) => {
                      const colors = projectColorStyles[selected.color];
                      return (
                        <span
                          key={tag}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium ${colors.tag} border`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                {selected.links && (
                  <div className="flex gap-3 pt-2">
                    {selected.links.github && (
                      <a
                        href={selected.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-zinc-300 border border-white/[0.1] rounded-xl hover:bg-white/[0.04] hover:text-white transition-all"
                      >
                        <GithubIcon size={14} />
                        View Source
                      </a>
                    )}
                    {selected.links.demo && (
                      <a
                        href={selected.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
