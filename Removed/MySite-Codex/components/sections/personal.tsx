import { personalTiles } from "@/data/personal";
import { Section } from "@/components/section";
import { Card } from "@/components/card";

export function PersonalSection() {
  return (
    <Section
      id="personal"
      eyebrow="Beyond Work"
      title="Sugar gliders, audio craft, and experience design keep curiosity sharp."
      description="Human context that informs how Stephen leads teams and products."
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {personalTiles.map((tile) => (
          <Card key={tile.title}>
            <h3 className="text-xl font-semibold">{tile.title}</h3>
            <p className="mt-3 text-sm text-slate-200">{tile.description}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">Current angle</p>
            <p className="text-sm text-slate-100">{tile.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
