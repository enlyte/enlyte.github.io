export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    category: "AI & Media" | "Web" | "Mobile" | "Infrastructure" | "Legacy" | "AI & Infrastructure";
    role: string;
    year: string;
    stack: string[];
    description: string;
    challenge: string;
    solution: string;
    outcome?: string;
    status?: string;
    features?: string[];
    links?: { label: string; url: string }[];
    visuals?: {
        main?: { src: string; alt: string };
        diagram?: { src: string; alt: string };
    };
}

export const projects: Project[] = [
    {
        slug: "vidcut-ai",
        title: "VidCutAI",
        subtitle: "AI-Assisted Podcast & Multicam Video Editor",
        category: "AI & Media",
        role: "Technical Founder & Lead Developer",
        year: "2023 - Present",
        stack: [
            "Python",
            "PySide6",
            "FFmpeg",
            "MongoDB",
            "Redis",
            "Docker",
            "Transcription Models",
            "Diarization Models",
        ],
        description:
            "A desktop application that streamlines podcast and multicam editing. It combines local pre and post processing with API-based AI workflows to transcribe, diarize, and generate structured edits, exporting timelines for professional NLEs.",
        challenge:
            "Multicam and podcast editing is slow and repetitive. Syncing media, managing multiple sources, tracking speakers, and assembling a clean timeline takes hours. Many AI tools require full uploads, are expensive, or don’t fit real post-production workflows.",
        solution:
            "I built a desktop-first editor with a robust media pipeline and AI-assisted analysis. FFmpeg handles conversion and normalization, AI services handle transcription and diarization, and the app structures speakers and segments into an edit timeline that can be exported into NLE-friendly formats for finishing.",
        features: [
            "Hybrid Processing (Local pre/post + API-based AI)",
            "Automated Speaker Diarization and Transcription",
            "Multicam Source Management (multiple angles, multiple video sources)",
            "Timeline Export (Final Cut Pro XML, DaVinci Resolve workflows)",
            "Speaker-to-Angle Mapping for Structured Edits"
        ],
        status: "Core functionality complete, undergoing real-world testing and iteration toward a stable release",
        visuals: {
            main: {
                src: "/images/vidcutVisual.png",
                alt: "VidCutAI timeline export preview",
            },
            diagram: {
                src: "/images/vidcutDiagram2.png",
                alt: "VidCutAI system diagram",
            },
        },
    },

    {
        slug: "on-prem-ai",
        title: "On-Prem AI Compute Platform",
        subtitle: "GPU Inference & Product Processing",
        category: "AI & Infrastructure",
        role: "Architect & Lead Developer",
        year: "Ongoing",
        stack: [
            "Nvidia RTX 4080",
            "Nvidia RTX 3070 Ti",
            "Nvidia RTX 3060",
            "Docker",
            "Redis",
            "Transcription Models",
            "Diarization Models",
            "Local LLMs"
        ],
        description:
            "A dedicated on-prem AI compute layer built on top of the homelab infrastructure, designed to run GPU-intensive inference and batch processing workloads for AI-driven products.",
        challenge:
            "AI products like VidCutAI and Transcription Pro require consistent, high-throughput GPU compute for transcription, diarization, and language models without the cost or latency of cloud-only solutions.",
        solution:
            "I built dedicated GPU-backed machines integrated into the homelab network, separating production and testing workloads. These systems expose internal APIs for AI processing and support both local and hybrid (API-assisted) workflows.",
        features: [
            "Dedicated GPU Inference Nodes",
            "Production and Testing Environments",
            "Self-hosted Transcription, Diarization, and LLM Workloads",
            "Internal APIs for AI Processing",
            "Tight Integration with Desktop and Web Products"
        ],
        status: "In active use powering AI workloads for VidCutAI and Nulite products",
    },

    {
        slug: "transcription-pro",
        title: "Transcription Pro",
        subtitle: "Structured Multi-Speaker Transcription System",
        category: "Web",
        role: "Full Stack Developer",
        year: "2024",
        stack: ["Next.js", "React", "Flask", "Tailwind CSS", "Redis", "Transcription Models", "Diarization Models"],
        description: "A web-based transcription and diarization system designed around reliable, high-volume audio processing. The core pipeline and job orchestration are production-ready, with UI and workflow refinement in progress.",
        challenge: "Most transcription SaaS tools fall short for enterprise or internal workflows, especially when handling large files, multiple speakers, or custom output requirements. Self-hosted solutions are often brittle or difficult to scale.",
        solution: "I designed a split-stack architecture focused on correctness and scalability. A Next.js frontend handles job submission and status, while a Flask backend with workers manages long-running transcription and diarization tasks asynchronously.",
        features: [
            "Asynchronous Job Queueing with Redis",
            "Large File Audio Processing",
            "Multi-Speaker Diarization and Transcription",
            "Structured Transcript Outputs",
            "Export Formats (SRT, VTT, JSON, TXT)"
        ],
        status: "Core processing pipeline complete, UI and workflow iteration ongoing",
        visuals: {
            main: {
                src: "/images/transcriptionProVisual.png",
                alt: "Transcription Pro dashboard interface",
            },
            diagram: {
                src: "/images/transcriptionProVisual2.png",
                alt: "Transcription Pro architecture diagram",
            },
        },
    },
    {
        slug: "homelab-infrastructure",
        title: "Homelab Infrastructure",
        subtitle: "Private Cloud, Networking & Core Services",
        category: "Infrastructure",
        role: "Architect & Operator",
        year: "Ongoing",
        stack: [
            "Protectli",
            "PfSense",
            "QNAP",
            "Docker",
            "Proxmox",
            "Nginx Proxy Manager",
            "OpenVPN",
            "Portainer",
            "Beszel Monitoring"
        ],
        description:
            "A production-grade homelab that provides the foundational networking, storage, monitoring, and orchestration layer for self-hosted services and on-prem AI workloads.",
        challenge:
            "Reliable infrastructure is required to support modern development and AI workloads without relying entirely on cloud providers or exposing sensitive data.",
        solution:
            "I designed a segmented, security-first homelab with VLANs, VPN access, centralized storage, and service orchestration. This environment acts as the stable platform that all internal tools, services, and AI compute systems run on.",
        features: [
            "VLAN-based Network Segmentation (Lab, IoT, Guest)",
            "VPN Access via OpenVPN",
            "Reverse Proxying and Service Routing",
            "Centralized Storage and Automated Backups",
            "Monitoring and Health Tracking (Beszel, System Metrics)"
        ],
        status: "Actively maintained core infrastructure supporting all internal systems",
    },
    {
        slug: "behavior-data-tracker",
        title: "Nulite Behavior Data Tracker",
        subtitle: "Special Ed Data Collection",
        category: "Legacy",
        role: "Founder & iOS Developer",
        year: "2013-2017",
        stack: ["Objective-C", "Swift", "iOS SDK", "Core Data"],
        description: "An iOS application helping special education teachers track frequency and duration of student behaviors in real-time.",
        challenge: "Paper data collection in classrooms is error-prone and distracting. Teachers needed a way to tap-to-track without losing focus on the student.",
        solution: "Developed a native iOS app with teacher-friendly UI. Focused on rapid data entry and instant graphical reporting for IEP meetings and Behavior Plans.",
        features: [
            "One-tap Frequency Tracking",
            "Duration Timers",
            "CSV Export",
            "Secure Encrypted Storage"
        ],
        status: "Completed and sunsetted, successfully deployed in real classroom environments",
        visuals: {
            main: {
                src: "/images/behaviorVisual.png",
                alt: "Behavior Data Tracker iOS app screenshot",
            },
            diagram: {
                src: "/images/behaviorVisual2.png",
                alt: "Behavior Data Tracker data flow",
            },
        },
    }
]
