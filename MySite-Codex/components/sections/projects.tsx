import { projects, vidCutPipeline } from "@/data/projects";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Chip } from "@/components/chip";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Products shipped across desktop AI, workflow web apps, legacy iOS, and homelab infrastructure."
      description="Each case study links architecture with UX decisions so you can see how Stephen operates end to end."
      background="surface"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} tone={project.tone} className="flex flex-col gap-4">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">{project.role}</p>
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-300">{project.summary}</p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-200">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full bg-white/5 px-2.5 py-1 font-mono uppercase tracking-widest text-[10px]">
                  {item}
                </span>
              ))}
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="text-accent-ai">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <a href={`#${project.slug}`} className="text-sm font-semibold text-accent-ai underline-offset-4 hover:underline">
              View case notes
            </a>
          </Card>
        ))}
      </div>

      <div id="vidcutai" className="mt-16 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-accent-ai/30 bg-accent-ai/10 p-8">
            <Chip tone="ai">VidCutAI Deep Dive</Chip>
            <h3 className="mt-4 text-3xl font-semibold text-white">Multicam pipeline, explained.</h3>
            <p className="mt-4 text-sm text-slate-100">
              Pipeline runs locally for privacy, translating diarization IDs into camera angle logic, heuristics, and
              export-ready metadata.
            </p>
          </div>
          <ol className="space-y-4">
            {vidCutPipeline.map((stage, index) => (
              <li key={stage.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-slate-400">Stage 0{index + 1}</span>
                  <Chip tone="ai">{stage.name}</Chip>
                </div>
                <p className="mt-3 text-base text-slate-200">{stage.description}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">Insight</p>
                <p className="text-sm text-slate-100">{stage.insight}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-6" id="pro-transcribe">
          <Card tone="ai" className="space-y-4" as="article">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Pro Transcribe Flow</p>
            <h3 className="text-2xl font-semibold text-white">Reliable upload → process → export</h3>
            <p className="text-sm text-slate-200">
              Web app pairs Flask backend with React/Remix frontend to offer staged uploads, queue monitoring, and export
              presets (SRT, JSON, text).
            </p>
            <div className="grid gap-4 text-sm text-slate-200">
              {["Uploads validated and chunked", "Job queue visualized with state badges", "Results view with diarization + waveform context"].map(
                (item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    {item}
                  </div>
                ),
              )}
            </div>
          </Card>
          <Card tone="lab" className="space-y-4" id="behavior-data-tracker">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Behavior Data Tracker</p>
            <h3 className="text-2xl font-semibold text-white">Legacy iOS app crafted with educators.</h3>
            <p className="text-sm text-slate-200">
              Swift/Objective-C application for special-needs programs. Offline-first logging, charting, and secure
              exports shaped by hands-on classroom research.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Data capture flows tuned for gloved hands + short attention windows.</li>
              <li>• Reporting exports tailored to IEP documentation formats.</li>
              <li>• Marathon field testing built empathy that still informs VidCutAI decisions.</li>
            </ul>
          </Card>
          <Card tone="infra" className="space-y-4" id="homelab">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Homelab Infrastructure</p>
            <h3 className="text-2xl font-semibold text-white">GPU-first private cloud for experimentation.</h3>
            <p className="text-sm text-slate-200">
              pfSense on Protectli, VLAN segmentation, QNAP NAS, Ubuntu GPU nodes, Raspberry Pis for telemetry, and
              automation bridging everything.
            </p>
            <div className="space-y-3 text-sm text-slate-200">
              <p>Nodes:</p>
              <ul className="space-y-1 text-slate-300">
                <li>• Protectli vault + pfSense for routing + VPN.</li>
                <li>• RTX GPU servers for Whisper/diarization inference.</li>
                <li>• QNAP + Backblaze backup pipeline.</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
