import type { ReactNode } from "react";
import clsx from "clsx";

type ChipProps = {
  children: ReactNode;
  tone?: "neutral" | "ai" | "infra" | "lab";
};

const toneclass: Record<NonNullable<ChipProps["tone"]>, string> = {
  neutral: "bg-white/10 text-white",
  ai: "bg-accent-ai/10 text-accent-ai",
  infra: "bg-accent-infra/10 text-accent-infra",
  lab: "bg-accent-lab/10 text-accent-lab",
};

export function Chip({ children, tone = "neutral" }: ChipProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide",
        toneclass[tone],
      )}
    >
      {children}
    </span>
  );
}
