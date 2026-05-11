"use client";

import SectionHeading from "@/components/SectionHeading";
import { FadeInUp } from "@/components/animations";
import { BookOpen } from "lucide-react";

export default function PublicationsSection() {
  return (
    <section id="publications" className="relative py-24 md:py-32">
      <div className="section-container">
        <FadeInUp>
          <SectionHeading
            label="Research"
            title="Publications"
            description="Contributing to academic research at the intersection of engineering and emerging technologies."
          />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-10 card-hover group relative overflow-hidden">
              {/* Ambient */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-violet-500/5 rounded-full blur-[80px] group-hover:bg-violet-500/8 transition-all" />

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-shadow">
                    <BookOpen size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        IEEE ANTS 2023
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.04] text-zinc-500 border border-white/[0.06]">
                        Published
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-base md:text-lg leading-snug mb-3 group-hover:text-violet-300 transition-colors">
                      On Maximizing the Channel Gain for an IRS-aided Indoor VLC
                      System with Blockages
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      Research on optimizing channel gain in Intelligent
                      Reflecting Surface-aided Indoor Visible Light Communication
                      systems, addressing blockage challenges through novel
                      surface configuration algorithms. Published at IEEE ANTS
                      2023 — a premier conference for networking and
                      telecommunications research.
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500">
                        IEEE ANTS 2023
                      </span>
                      <span className="text-zinc-700">·</span>
                      <span className="text-xs text-zinc-500">
                        Conference Paper
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
