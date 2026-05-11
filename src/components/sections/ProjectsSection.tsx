"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import {
  FadeInUp,
  StaggerContainer,
  staggerItem,
} from "@/components/animations";
import {
  Bot,
  Database,
  MessageSquare,
  HeartPulse,
  CalendarClock,
  ExternalLink,
  X,
  Star,
  ArrowRight,
  Sparkles,
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
    title: "Multi-Agent Email AI System",
    subtitle: "Enterprise AI Orchestration Platform",
    description:
      "Autonomous multi-agent system processing 10K+ daily emails through LangGraph orchestration with 12+ specialized AI agents, delivering 90%+ turnaround reduction.",
    icon: Bot,
    color: "indigo",
    featured: true,
    tags: [
      "LangGraph",
      "Multi-Agent",
      "GPT-4",
      "FastAPI",
      "FAISS",
      "Production",
    ],
    details: {
      problem:
        "Enterprise email operations required manual processing of 10,000+ daily emails, creating massive bottlenecks and inconsistent response quality across departments.",
      solution:
        "Designed a LangGraph-powered multi-agent orchestration system with 12+ specialized agents spanning intent detection, aspect-based sentiment analysis, query extraction, retrieval, drafting, summarization, and auditing — with built-in hallucination guardrails.",
      highlights: [
        "10K+ emails processed daily with sub-2s latency",
        "12+ specialized agents with autonomous reasoning",
        "90%+ reduction in turnaround time",
        "70-80% reduction in manual intervention",
        "Built-in hallucination detection and guardrails",
        "Self-healing agent workflows with fallback logic",
      ],
    },
  },
  {
    id: "hybrid-rag",
    title: "Hybrid RAG Platform",
    subtitle: "Dual-Retrieval Intelligence System",
    description:
      "Next-generation retrieval system combining vector search with SQL execution, achieving 40%+ accuracy improvements through intelligent query routing.",
    icon: Database,
    color: "cyan",
    tags: [
      "RAG",
      "FAISS",
      "Milvus",
      "SQL",
      "LangChain",
      "Azure AI Search",
    ],
    details: {
      problem:
        "Traditional RAG systems failed on structured data queries, while SQL-only approaches missed semantic context in unstructured documents like legal contracts.",
      solution:
        "Built a dual-retrieval architecture with intelligent query routing that analyzes incoming questions to determine optimal retrieval paths — semantic vector search for unstructured content, SQL execution for structured data, or hybrid combinations for complex queries.",
      highlights: [
        "40%+ improvement in answer accuracy",
        "30% reduction in hallucination rate",
        "Intelligent query routing between SQL and vector stores",
        "Legal document extraction with semantic search",
        "Dynamic evaluation frameworks for continuous improvement",
      ],
    },
  },
  {
    id: "nlp-sql",
    title: "NLP-to-SQL Engine",
    subtitle: "Natural Language Data Interface",
    description:
      "Intelligent system translating natural language into optimized SQL queries through structured reasoning, democratizing data access for enterprise teams.",
    icon: MessageSquare,
    color: "violet",
    tags: ["NLP", "SQL", "GPT-4", "DSPy", "FastAPI", "LangChain"],
    details: {
      problem:
        "Non-technical teams were bottlenecked by SQL expertise requirements, creating dependency on data engineers for every analytical query.",
      solution:
        "Engineered a structured reasoning pipeline that translates natural language questions into optimized SQL queries, handling complex multi-table joins, aggregations, and conditional logic with explainable query plans.",
      highlights: [
        "Natural language to complex SQL translation",
        "Multi-table join and aggregation support",
        "Explainable query plan generation",
        "Unified QA pipeline for enterprise analytics",
        "Reduced SQL dependency across business teams",
      ],
    },
  },
  {
    id: "cancer-detection",
    title: "Cancer Detection System",
    subtitle: "Healthcare AI Classification Pipeline",
    description:
      "Machine learning classification pipeline for cancer detection achieving 90%+ accuracy, demonstrating AI application in high-stakes healthcare diagnostics.",
    icon: HeartPulse,
    color: "rose",
    tags: [
      "PyTorch",
      "Scikit-learn",
      "Deep Learning",
      "Medical AI",
      "Classification",
    ],
    details: {
      problem:
        "Early cancer detection requires high-accuracy classification systems that can assist medical professionals in making faster, more reliable diagnoses.",
      solution:
        "Built a comprehensive ML classification pipeline incorporating feature engineering, model selection, hyperparameter optimization, and rigorous evaluation to achieve healthcare-grade accuracy.",
      highlights: [
        "90%+ classification accuracy",
        "Comprehensive ML pipeline architecture",
        "Feature engineering for medical data",
        "Healthcare AI compliance considerations",
        "Model interpretability for clinical use",
      ],
    },
  },
  {
    id: "event-mgmt",
    title: "Event Management Platform",
    subtitle: "Intelligent Scheduling System",
    description:
      "Scalable event management system with intelligent scheduling automation, reducing scheduling conflicts by 80% through optimized algorithms.",
    icon: CalendarClock,
    color: "emerald",
    tags: [
      "Python",
      "FastAPI",
      "Scheduling",
      "Optimization",
      "Scalable Architecture",
    ],
    details: {
      problem:
        "Manual event scheduling across multiple venues and participants created frequent conflicts, inefficiencies, and poor resource utilization.",
      solution:
        "Designed an intelligent scheduling system with conflict detection, resource optimization, and automated resolution algorithms built on a scalable architecture.",
      highlights: [
        "80% reduction in scheduling conflicts",
        "Automated conflict detection and resolution",
        "Scalable architecture for concurrent events",
        "Resource optimization across venues",
        "Real-time scheduling updates",
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
  rose: {
    gradient: "from-rose-600 to-pink-600",
    badge: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    tag: "bg-rose-500/8 border-rose-500/15 text-rose-300",
    dot: "bg-rose-500",
    glow: "shadow-rose-500/20",
  },
  emerald: {
    gradient: "from-emerald-600 to-teal-600",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    tag: "bg-emerald-500/8 border-emerald-500/15 text-emerald-300",
    dot: "bg-emerald-500",
    glow: "shadow-emerald-500/20",
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
            description="Production-grade AI systems engineered for enterprise scale — from multi-agent orchestration to healthcare diagnostics."
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
