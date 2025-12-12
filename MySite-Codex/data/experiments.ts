import type { Experiment } from "@/types/content";

export const experiments: Experiment[] = [
  {
    title: "Auto B-Roll Generator",
    description: "Testing a workflow that matches diarized segments to relevant B-roll libraries using embeddings.",
    status: "In Progress",
    tags: ["AI", "Media", "Embeddings"],
  },
  {
    title: "GPU Cooling Optimization",
    description: "Rebuilt airflow paths and automation that modulate fan curves from Prometheus metrics.",
    status: "Shipped",
    tags: ["Infra", "Hardware"],
  },
  {
    title: "Desktop Automation Scripts",
    description: "PySide6 helpers that mirror VidCutAI shortcuts into OS-level macros for power users.",
    status: "In Progress",
    tags: ["UX", "Automation"],
  },
  {
    title: "Signal Visualization Toolkit",
    description: "Exploring a Remix-based dashboard for diarization confidence and error tracing.",
    status: "Archived",
    tags: ["Visualization", "Remix"],
  },
];
