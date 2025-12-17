import { timeline } from "@/data/timeline";
import { Section } from "@/components/section";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="Story"
      title="Systems thinker with roots in accessibility, sales engineering, and AI media tooling."
      description={
        <>
          From technology curriculum manager to Technical Founder, Stephen has paired empathy with infrastructure.
          Each chapter sharpened his ability to translate messy requirements into shippable products.
        </>
      }
      background="surface"
    >
      <div className="grid gap-10 md:grid-cols-[0.9fr,1.1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold">Then vs Now</h3>
            <p className="mt-3 text-sm text-slate-300">
              From helping teachers adopt assistive tech to designing diarization-driven edit systems. The through-line:
              focus on context, human behavior, and operational reliability.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>• Translate needs between educators, execs, and engineers.</li>
              <li>• Build tooling that hides complexity without hiding control.</li>
              <li>• Treat infrastructure, UX, and psychology as one system.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-accent-ai/5 p-6">
            <h4 className="text-sm uppercase tracking-[0.3em] text-accent-ai">Operating Beliefs</h4>
            <p className="mt-3 text-slate-200">
              Logs before intuition. Documentation is a UI. Experiments should be safe-to-fail. Build tools that
              unmuddle human workflows.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          {timeline.map((entry) => (
            <article key={entry.period} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
                <span>{entry.period}</span>
                <span>{entry.company}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{entry.role}</h3>
              <p className="mt-2 text-sm text-slate-300">{entry.summary}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-500">What stuck</p>
              <p className="text-sm text-slate-100">{entry.learnings}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
