"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import {
  FadeInUp,
  StaggerContainer,
  staggerItem,
} from "@/components/animations";
import {
  Brain,
  Cpu,
  Cloud,
  Database,
  BarChart3,
  Code2,
} from "lucide-react";

const categories = [
  {
    id: "llm",
    label: "LLM Systems",
    icon: Brain,
    color: "indigo",
    skills: [
      "RAG",
      "Hybrid RAG",
      "LangGraph",
      "LangChain",
      "DSPy",
      "MCP",
      "LlamaIndex",
      "AI Agents",
      "A2A Protocol",
    ],
  },
  {
    id: "ml",
    label: "Core ML",
    icon: Cpu,
    color: "violet",
    skills: [
      "PyTorch",
      "TensorFlow",
      "NLP",
      "Deep Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    icon: Cloud,
    color: "cyan",
    skills: [
      "Azure Databricks",
      "Kubernetes",
      "Docker",
      "Kubeflow",
      "Ray",
      "FastAPI",
      "Flask",
    ],
  },
  {
    id: "data",
    label: "Vector & Data",
    icon: Database,
    color: "emerald",
    skills: ["FAISS", "Milvus", "SQL", "Azure AI Search"],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    icon: BarChart3,
    color: "amber",
    skills: ["Langfuse", "MLflow", "Uptrain"],
  },
  {
    id: "lang",
    label: "Languages",
    icon: Code2,
    color: "rose",
    skills: ["Python", "Java", "PySpark"],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  indigo: {
    bg: "bg-indigo-500/8",
    border: "border-indigo-500/20",
    text: "text-indigo-300",
    glow: "group-hover:shadow-indigo-500/10",
  },
  violet: {
    bg: "bg-violet-500/8",
    border: "border-violet-500/20",
    text: "text-violet-300",
    glow: "group-hover:shadow-violet-500/10",
  },
  cyan: {
    bg: "bg-cyan-500/8",
    border: "border-cyan-500/20",
    text: "text-cyan-300",
    glow: "group-hover:shadow-cyan-500/10",
  },
  emerald: {
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/20",
    text: "text-emerald-300",
    glow: "group-hover:shadow-emerald-500/10",
  },
  amber: {
    bg: "bg-amber-500/8",
    border: "border-amber-500/20",
    text: "text-amber-300",
    glow: "group-hover:shadow-amber-500/10",
  },
  rose: {
    bg: "bg-rose-500/8",
    border: "border-rose-500/20",
    text: "text-rose-300",
    glow: "group-hover:shadow-rose-500/10",
  },
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("llm");
  const activeData = categories.find((c) => c.id === activeCategory)!;
  const colors = colorMap[activeData.color];

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/[0.02] blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <FadeInUp>
          <SectionHeading
            label="Tech Stack"
            title="Skills & Technologies"
            description="A comprehensive toolkit for building production-scale AI systems — from LLM orchestration to infrastructure deployment."
          />
        </FadeInUp>

        {/* Category Tabs */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white/[0.08] text-white border border-white/[0.12] shadow-lg"
                      : "text-zinc-500 hover:text-zinc-300 border border-transparent hover:border-white/[0.06]"
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </FadeInUp>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              {(() => {
                const Icon = activeData.icon;
                return (
                  <div
                    className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon size={18} className={colors.text} />
                  </div>
                );
              })()}
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {activeData.label}
                </h3>
                <p className="text-zinc-500 text-xs">
                  {activeData.skills.length} technologies
                </p>
              </div>
            </div>

            <StaggerContainer className="flex flex-wrap gap-3">
              {activeData.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`group px-4 py-2.5 rounded-xl ${colors.bg} border ${colors.border} ${colors.text} text-sm font-medium cursor-default transition-all hover:shadow-lg ${colors.glow}`}
                >
                  {skill}
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </motion.div>

        {/* All Skills Mini Grid */}
        <FadeInUp delay={0.3}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const catColors = colorMap[cat.color];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="glass rounded-xl p-4 text-center card-hover group"
                >
                  <div
                    className={`w-8 h-8 mx-auto mb-2 rounded-lg ${catColors.bg} flex items-center justify-center`}
                  >
                    <Icon size={14} className={catColors.text} />
                  </div>
                  <p className="text-[11px] text-zinc-400 font-medium">
                    {cat.label}
                  </p>
                  <p className="text-[10px] text-zinc-600 mt-0.5">
                    {cat.skills.length} skills
                  </p>
                </button>
              );
            })}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
