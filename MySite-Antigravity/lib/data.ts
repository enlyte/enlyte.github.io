export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    category: "AI & Media" | "Web" | "Mobile" | "Infrastructure" | "Legacy";
    role: string;
    year: string;
    stack: string[];
    description: string;
    challenge: string;
    solution: string;
    outcome?: string;
    features?: string[];
    links?: { label: string; url: string }[];
}

export const projects: Project[] = [
    {
        slug: "vidcut-ai",
        title: "VidCutAI",
        subtitle: "Automated AI Multicam Editor",
        category: "AI & Media",
        role: "Technical Founder & Lead Developer",
        year: "2023 - Present",
        stack: ["Python", "PySide6", "OpenAI Whisper", "FFmpeg", "MongoDB", "Docker"],
        description: "An intelligent desktop application that automates the tedious parts of multicam video editing. It uses local AI models to transcribe, diarize, and intelligently switch camera angles based on who is speaking, exporting directly to Final Cut Pro XML.",
        challenge: "Multicam editing is time-consuming. syncing footage, cutting silence, and switching angles based on speakers takes hours of manual work. Existing cloud tools are expensive and require uploading huge files.",
        solution: "I architected a local-first desktop app that wraps a powerful Python backend. It pipelines ffmpeg for media handling, Whisper for transcription, and pyannote for speaker diarization. A heuristic engine then maps speakers to camera angles and generates an FCPXML timeline.",
        features: [
            "Local-first processing (Privacy & Speed)",
            "Automated Speaker Diarization",
            "Heuristic Angle Switching",
            "FCPXML Export for Final Cut Pro",
            "Jump Cut Logic for Silence Removal"
        ]
    },
    {
        slug: "pro-transcribe",
        title: "Pro Transcribe",
        subtitle: "Enterprise Transcription Workflow",
        category: "Web",
        role: "Full Stack Developer",
        year: "2024",
        stack: ["Next.js", "Flask", "Tailwind CSS", "Celery", "Redis"],
        description: "A secure, web-based transcription and diarization platform designed for high-volume workflows.",
        challenge: "Need for a reliable, self-hosted transcription service that handles large files and specific formatting requirements not met by generic SaaS.",
        solution: "Built a split-stack architecture: Next.js frontend for job management and file upload, communicating with a scalable Flask/Celery worker cluster for heavy audio processing.",
        features: [
            "Async Job Queueing",
            "Drag-and-Drop Upload",
            "Interactive Transcript Editor",
            "Speaker Labelling",
            "Multiple Export Formats (SRT, VTT, JSON, TXT)"
        ]
    },
    {
        slug: "homelab",
        title: "Homelab Infrastructure",
        subtitle: "Private Cloud & AI Inference Cluster",
        category: "Infrastructure",
        role: "Architect & Operator",
        year: "Ongoing",
        stack: ["Proxmox", "TrueNAS", "Docker", "Nginx Proxy Manager", "PfSense", "Ubiquiti"],
        description: "A production-grade home infrastructure running dedicated GPU inference nodes, media storage, and network security services.",
        challenge: "Supporting development of heavy AI tools like VidCutAI requires significant compute and storage that cloud providers charge a premium for.",
        solution: "Designed a segmented network with VLANs for IoT/Guest/Lab. Built a rack-mounted setup with 40TB TrueNAS storage and RTX 3090/4090 inference nodes accessible via internal APIs.",
        features: [
            "10GbE Internal Networking",
            "Automated Offsite Backups",
            "Self-hosted LLMs & Stable Diffusion",
            "Network Segmentation via PfSense",
            "Reverse Proxying via Nginx"
        ]
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
        ]
    }
]
