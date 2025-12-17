import { capabilityCategories } from "@/data/skills";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { Chip } from "@/components/chip";

export function CapabilitiesSection() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Deep stack coverage with applied examples rather than buzzwords."
      description="Grouped into capability buckets so hiring managers can see how skills translate into real shipping work."
      background="default"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {capabilityCategories.map((category) => (
          <Card key={category.name} tone={category.tone}>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <Chip tone={category.tone ?? "neutral"}>Active</Chip>
            </div>
            <p className="mt-3 text-sm text-slate-300">{category.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
              {category.tools.map((tool) => (
                <span key={tool} className="rounded-full bg-white/5 px-3 py-1 font-mono uppercase tracking-[0.2em]">
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-200">{category.example}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
