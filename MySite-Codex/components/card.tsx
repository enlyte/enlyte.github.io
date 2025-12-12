import type { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  glow?: boolean;
  tone?: "default" | "ai" | "infra" | "lab";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

const toneRing: Record<NonNullable<CardProps["tone"]>, string> = {
  default: "border-white/5",
  ai: "border-accent-ai/50 shadow-[0_0_25px_rgba(44,212,255,0.25)]",
  infra: "border-accent-infra/50 shadow-[0_0_25px_rgba(247,183,51,0.15)]",
  lab: "border-accent-lab/40 shadow-[0_0_30px_rgba(255,114,210,0.2)]",
};

export function Card({
  children,
  glow = false,
  tone = "default",
  as: Component = "div",
  className,
}: CardProps) {
  return (
    <Component
      className={clsx(
        "rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8 transition duration-300",
        glow && "hover:-translate-y-1",
        tone && toneRing[tone],
        className,
      )}
    >
      {children}
    </Component>
  );
}
