import type { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  background?: "default" | "surface" | "muted";
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  background = "default",
  children,
}: SectionProps) {
  const bgClass =
    background === "surface"
      ? "bg-surface/60 border border-white/5 backdrop-blur-sm"
      : background === "muted"
        ? "bg-slate-900/50 border border-white/5"
        : "";

  return (
    <section id={id} className="py-8 md:py-16">
      <div
        className={clsx(
          "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 rounded-[32px] relative overflow-hidden",
          bgClass,
        )}
      >
        <div
          className={clsx(
            "space-y-4 mt-6 mb-12",
            align === "center" ? "text-center max-w-3xl mx-auto" : "text-left",
          )}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent-ai/80 font-mono">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
          {description && (
            <p className="text-base md:text-lg text-slate-300 leading-relaxed ">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
