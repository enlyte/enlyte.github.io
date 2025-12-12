import type { ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  {
    title: "Frame the system",
    description:
      "Zoom out to understand constraints, stakeholders, security needs, and what success looks like before opening an editor.",
    artifacts: ["Context map", "User + operator interviews", "Definition-of-done grid"],
  },
  {
    title: "Instrument discovery",
    description:
      "Collect real signals early—logs, recordings, workflow captures—so decisions rest on evidence rather than guesses.",
    artifacts: ["Logging plan", "Observation notes", "Edge-case backlog"],
  },
  {
    title: "Prototype with safeguards",
    description:
      "Ship functional prototypes fast, but wrap them with logging, feature flags, and fallback paths to avoid heroics.",
    artifacts: ["Feature flag matrix", "Testing harness", "Operational checklist"],
  },
  {
    title: "Measure + iterate",
    description:
      "Review telemetry, talk to users, and rerun experiments so improvements stay grounded in data and psychology.",
    artifacts: ["Metrics snapshot", "Interview clips", "Iteration priorities"],
  },
];
