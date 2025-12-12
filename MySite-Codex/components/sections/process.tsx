"use client";

import { useState } from "react";
import { processSteps } from "@/data/process";
import { Section } from "@/components/section";
import { Chip } from "@/components/chip";

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = processSteps[activeIndex];

  return (
    <Section
      id="process"
      eyebrow="Process & Psychology"
      title="How Stephen approaches gnarly problems."
      description="Evidence, instrumentation, and safe-to-fail experiments are the through-line. Click through the steps to explore artifacts."
      background="muted"
    >
      <div className="grid gap-10 md:grid-cols-[0.8fr,1.2fr]">
        <div className="space-y-4">
          {processSteps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={step.title}
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                  isActive ? "border-accent-ai text-white" : "border-white/10 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{step.title}</span>
                  {isActive && <Chip tone="ai">Active</Chip>}
                </div>
                <p className="mt-2 text-sm">{step.description}</p>
              </button>
            );
          })}
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Focus</p>
          <h3 className="mt-2 text-2xl font-semibold">{activeStep.title}</h3>
          <p className="mt-4 text-sm text-slate-200">{activeStep.description}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">Artifacts</p>
          <ul className="mt-2 space-y-3 text-sm text-slate-100">
            {activeStep.artifacts.map((artifact) => (
              <li key={artifact} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                {artifact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
