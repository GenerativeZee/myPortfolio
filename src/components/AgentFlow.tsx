"use client";

import { motion } from "framer-motion";

export type FlowStep =
  | { label: string; parallel?: undefined }
  | { label?: undefined; parallel: string[] };

type FlowColor = "indigo" | "cyan" | "violet";

const colorMap: Record<
  FlowColor,
  { border: string; bg: string; text: string; dot: string }
> = {
  indigo: {
    border: "border-indigo-500/25",
    bg: "bg-indigo-500/8",
    text: "text-indigo-300",
    dot: "bg-indigo-400",
  },
  cyan: {
    border: "border-cyan-500/25",
    bg: "bg-cyan-500/8",
    text: "text-cyan-300",
    dot: "bg-cyan-400",
  },
  violet: {
    border: "border-violet-500/25",
    bg: "bg-violet-500/8",
    text: "text-violet-300",
    dot: "bg-violet-400",
  },
};

export default function AgentFlow({
  steps,
  color = "indigo",
}: {
  steps: FlowStep[];
  color?: FlowColor;
}) {
  const colors = colorMap[color];

  return (
    <div className="w-full md:overflow-x-auto md:[scrollbar-width:thin] md:[&::-webkit-scrollbar]:h-1.5">
      <div className="flex flex-col md:flex-row md:items-center md:w-max md:min-w-full md:justify-center">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-center shrink-0"
          >
            {/* Node */}
            <div className="flex justify-center">
              {step.parallel ? (
                <div
                  className={`flex flex-col gap-1.5 rounded-xl border border-dashed ${colors.border} ${colors.bg} p-2`}
                >
                  {step.parallel.map((p, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-zinc-300 bg-white/[0.03] border border-white/[0.06] text-center leading-tight"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              ) : (
                <div
                  className={`px-4 py-2.5 rounded-xl border ${colors.border} ${colors.bg} ${colors.text} text-xs font-semibold text-center leading-tight max-w-[140px]`}
                >
                  {step.label}
                </div>
              )}
            </div>

            {/* Connector */}
            {i < steps.length - 1 && (
              <div className="flex items-center justify-center shrink-0 my-1.5 md:my-0 md:mx-1.5 md:w-8">
                <div className="relative w-px h-6 md:w-full md:h-px bg-gradient-to-b md:bg-gradient-to-r from-white/[0.08] via-white/[0.18] to-white/[0.08]">
                  <motion.span
                    className={`md:hidden absolute left-1/2 -translate-x-1/2 rounded-full w-1.5 h-1.5 ${colors.dot}`}
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.15,
                    }}
                  />
                  <motion.span
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 rounded-full w-1.5 h-1.5 ${colors.dot}`}
                    animate={{ left: ["0%", "100%"] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.15,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
