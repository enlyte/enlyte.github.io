import type { PipelineStage, ProjectSummary } from "@/types/content";

export const projects: ProjectSummary[] = [
  {
    slug: "vidcutai",
    name: "VidCutAI",
    role: "Founder / Lead Developer",
    summary:
      "AI-assisted multicam podcast editor that turns diarization data into camera switching logic and tidy FCPXML exports.",
    stack: ["Python", "PySide6", "Flask", "MongoDB", "FFmpeg", "Docker", "Nginx"],
    tags: ["Desktop app", "AI/ML", "Media automation"],
    tone: "ai",
    highlights: [
      "Local-first processing for privacy + speed",
      "Speaker-aware angle configuration and mapping",
      "Automated export directories + FCPXML packaging",
    ],
  },
  {
    slug: "pro-transcribe",
    name: "Pro Transcribe",
    role: "Product Engineer",
    summary:
      "Upload-to-export transcription workflow with diarization, queue management, and export presets for teams.",
    stack: ["Flask", "React", "Remix", "Tailwind", "MongoDB"],
    tags: ["Web app", "Workflow", "Audio"],
    tone: "ai",
    highlights: [
      "Multi-step upload with validation + graceful error messaging",
      "Processing queue with observer + notifications",
      "Exports in SRT, JSON, and plain text for downstream editing",
    ],
  },
  {
    slug: "behavior-data-tracker",
    name: "Behavior Data Tracker",
    role: "Founder / iOS Developer",
    summary:
      "Legacy iOS app created for special-needs educators to simplify capturing, charting, and sharing behavior data.",
    stack: ["Swift", "Objective-C", "Core Data"],
    tags: ["iOS", "Accessibility", "Education"],
    tone: "lab",
    highlights: [
      "Offline-friendly sync for classroom Wi-Fi realities",
      "Touch-friendly logging interactions for staff wearing gloves",
      "Reporting exports tailored to IEP documentation",
    ],
  },
  {
    slug: "homelab",
    name: "Homelab Infrastructure",
    role: "Systems Engineer",
    summary:
      "GPU-first private cloud with pfSense, VLAN segmentation, NAS storage, and automation layers supporting experimentation.",
    stack: ["pfSense", "Protectli", "Ubuntu", "Docker", "Prometheus", "Grafana", "QNAP"],
    tags: ["Infra", "Networking", "Automation"],
    tone: "infra",
    highlights: [
      "Separate VLANs for lab, production, guest, and IoT networks",
      "Dedicated GPU inference nodes for Whisper + diarization",
      "Observability with Grafana dashboards + alerting hooks",
    ],
  },
];

export const vidCutPipeline: PipelineStage[] = [
  {
    name: "Ingest & Normalize",
    description: "Multi-track audio + video files run through FFmpeg for consistent codecs and sample rates.",
    insight: "Every ingest action logs to a structured timeline for debugging long-form sessions.",
  },
  {
    name: "Transcribe & Diarize",
    description: "Local Whisper inference plus diarization yields labeled speaker segments.",
    insight: "Mapping table keeps diarization IDs human readable inside the UI and exports.",
  },
  {
    name: "Angle Mapping",
    description: "PySide6 interface pairs speakers to camera angles, filler shots, and fallback logic.",
    insight: "Heuristics catch long dead-space segments and swap to safe shots automatically.",
  },
  {
    name: "Export & Deliver",
    description: "FCPXML and organized asset folders drop into a predictable directory structure.",
    insight: "Export step includes integrity checks and optional log bundle for postmortems.",
  },
];
