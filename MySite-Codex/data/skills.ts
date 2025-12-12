import type { CapabilityCategory } from "@/types/content";

export const capabilityCategories: CapabilityCategory[] = [
  {
    name: "Full-Stack & Product",
    description: "Translate ambiguous needs into usable software across desktop, web, and ops.",
    tools: ["React", "Next.js", "Remix", "TypeScript", "Python", "Flask", "PySide6", "MDX"],
    example: "Shipped VidCutAI desktop UI + Flask services, keeping UX tightly tied to infra reality.",
    tone: "ai",
  },
  {
    name: "AI & Media Processing",
    description: "Working pipelines for transcription, diarization, shot selection, cut heuristics.",
    tools: ["Whisper", "PyTorch", "FFmpeg", "FCPXML", "FCP", "XML exports", "Audio tooling"],
    example: "Automated multicam edits by blending diarization IDs with speaker labeling + heuristics.",
    tone: "ai",
  },
  {
    name: "DevOps & Infra",
    description: "Homelab + cloud hybrid with Docker, Nginx, pfSense, segmentation, monitoring.",
    tools: ["Docker", "Nginx", "pfSense", "Protectli", "Ubuntu", "GPU servers", "QNAP", "Ansible"],
    example: "Private GPU inference stack that powers VidCutAI processing with hardware level control.",
    tone: "infra",
  },
  {
    name: "UX & Interface Systems",
    description: "Desktop flows, system diagrams, and interaction patterns built from research notes.",
    tools: ["Figma", "Framer Motion", "Tailwind", "Design tokens", "PySide6 widgets", "GSAP"],
    example: "Designed speaker editor + configuration flows to keep diarization edge cases visible.",
    tone: "lab",
  },
  {
    name: "Communication & Sales Engineering",
    description: "Can explain architecture to execs and operators, thanks to pre-founder track.",
    tools: ["Solution demos", "Workshops", "Narrative decks", "Discovery guides", "Doc systems"],
    example: "Bridged Experian customers with delivery teams, now reused for VidCutAI onboarding.",
  },
];
