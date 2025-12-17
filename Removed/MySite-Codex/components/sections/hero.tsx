import { StackBar } from "@/components/stack-bar";
import { Chip } from "@/components/chip";

const ctas = [
  { label: "View Projects", href: "#projects" },
  { label: "How I Work", href: "#process" },
  { label: "Get in Touch", href: "#contact" },
];

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#060810] to-[#0f1725]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-ai/40 blur-[160px]" />
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-accent-lab/30 blur-[100px]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <Chip tone="ai">Technical Founder</Chip>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Technical Founder building AI-powered media tools and systems that scale.
            </h1>
            <p className="text-lg text-slate-200">
              Stephen Moy leads Nulite / VidCutAI, blending full-stack engineering, infrastructure, and UX to
              automate creative workflows. Former Sales Engineer who can go from idea → architecture →
              shipped product.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide transition hover:border-white hover:bg-white/10"
              >
                {cta.label}
              </a>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Core Product",
                value: "VidCutAI",
                detail: "Desktop AI multicam editor with diarization-driven cuts.",
              },
              {
                label: "Infrastructure",
                value: "Homelab GPU Cloud",
                detail: "pfSense + Protectli, VLAN segmentation, GPU inference nodes.",
              },
              {
                label: "Stack Fluency",
                value: "Python ↔ React",
                detail: "PySide6 desktop, Flask APIs, Remix/Tailwind frontends.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-6">
            <div className="aspect-[3/4] w-full rounded-[28px] bg-gradient-to-br from-slate-900 to-slate-800 p-6">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Living Lab</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Systems × UX × Psychology</h3>
                  <p className="mt-3 text-sm text-slate-300">
                    A founder profile + portfolio showcasing research notes, architecture, and experiments.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Current Focus</p>
                    <p className="mt-2 text-sm text-slate-100">
                      Shipping VidCutAI updates, building homelab automation, exploring storytelling with sugar
                      gliders Lego & Cella.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-accent-ai/30 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Operating Modes</p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-200">
                      <li>• Founder / Head of Engineering</li>
                      <li>• Product-minded systems builder</li>
                      <li>• Sales Engineer translator</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 rounded-2xl border border-accent-ai/40 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 shadow-card">
              <p className="font-semibold">Live Experiments</p>
              <p className="text-xs text-slate-400">Infra tweaks, desktop automation, media research</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <StackBar />
      </div>
    </section>
  );
}
