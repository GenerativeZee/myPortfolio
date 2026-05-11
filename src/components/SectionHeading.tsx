"use client";

import { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/8 border border-indigo-500/15 mb-6">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        <span className="text-xs font-medium tracking-wider uppercase text-indigo-300">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div className="line-decoration mt-8 max-w-xs mx-auto" />
    </div>
  );
}
