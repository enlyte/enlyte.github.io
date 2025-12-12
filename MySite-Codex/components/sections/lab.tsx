import { experiments } from "@/data/experiments";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Chip } from "@/components/chip";

const statusTone: Record<string, "ai" | "infra" | "lab"> = {
  Shipped: "infra",
  "In Progress": "ai",
  Archived: "lab",
};

export function LabSection() {
  return (
    <Section
      id="lab"
      eyebrow="Lab / Experiments"
      title="Living roadmap of prototypes, infra tweaks, and thought experiments."
      description="Updated as projects evolve. Shows what is in motion, finished, or parked."
      background="surface"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {experiments.map((experiment) => (
          <Card key={experiment.title} tone={statusTone[experiment.status]}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{experiment.title}</h3>
              <Chip tone={statusTone[experiment.status]}>{experiment.status}</Chip>
            </div>
            <p className="mt-3 text-sm text-slate-200">{experiment.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
              {experiment.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/5 px-3 py-1 tracking-[0.2em] uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
