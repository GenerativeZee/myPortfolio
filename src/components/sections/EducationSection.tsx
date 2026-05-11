"use client";

import SectionHeading from "@/components/SectionHeading";
import { FadeInUp } from "@/components/animations";
import { GraduationCap, MapPin, Calendar, Code2, Brain, Dna } from "lucide-react";

const coursework = [
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Data Structures & Algorithms",
  "Computer Networks",
  "Database Systems",
  "Artificial Intelligence",
  "Bioinformatics",
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="section-container">
        <FadeInUp>
          <SectionHeading
            label="Education"
            title="Academic Foundation"
            description="An interdisciplinary foundation bridging computer science and biosciences at one of India's premier research institutions."
          />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-10 card-hover group relative overflow-hidden">
              {/* Ambient */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/8 transition-all" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-shadow">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      B.Tech — Computer Science & Biosciences
                    </h3>
                    <p className="text-indigo-300 font-medium text-sm mb-3">
                      IIIT Delhi (Indraprastha Institute of Information
                      Technology)
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-zinc-400 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        Class of 2023
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        New Delhi, India
                      </span>
                    </div>

                    {/* Focus Areas */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-white/[0.03] rounded-xl p-3 text-center border border-white/[0.04]">
                        <Code2
                          size={16}
                          className="text-indigo-400 mx-auto mb-1.5"
                        />
                        <p className="text-[10px] text-zinc-400">
                          Computer Science
                        </p>
                      </div>
                      <div className="bg-white/[0.03] rounded-xl p-3 text-center border border-white/[0.04]">
                        <Brain
                          size={16}
                          className="text-violet-400 mx-auto mb-1.5"
                        />
                        <p className="text-[10px] text-zinc-400">
                          AI & ML Focus
                        </p>
                      </div>
                      <div className="bg-white/[0.03] rounded-xl p-3 text-center border border-white/[0.04]">
                        <Dna
                          size={16}
                          className="text-cyan-400 mx-auto mb-1.5"
                        />
                        <p className="text-[10px] text-zinc-400">
                          Biosciences
                        </p>
                      </div>
                    </div>

                    {/* Coursework */}
                    <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                        >
                          {course}
                        </span>
                      ))}
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
