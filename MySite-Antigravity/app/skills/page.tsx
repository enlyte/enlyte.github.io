import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

export const metadata = {
    title: "Skills & Capabilities | Stephen Moy",
    description: "Technical stack and capabilities.",
}

export default function SkillsPage() {
    const skillCategories = [
        {
            title: "AI & Media Processing",
            description: "Building intelligent pipelines for audio/video.",
            skills: ["Python", "OpenAI Whisper", "FFmpeg", "Pyannote (Diarization)", "FCPXML", "Computer Vision"]
        },
        {
            title: "Full-Stack Web",
            description: "Modern, reactive web applications.",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flask (Backend)", "PostgreSQL/MongoDB"]
        },
        {
            title: "Desktop App Dev",
            description: "High-performance native-feeling tools.",
            skills: ["PySide6 (Qt)", "Electron", "Threading/Async", "Local File Systems"]
        },
        {
            title: "DevOps & Infrastructure",
            description: "Bare-metal to cloud scaling.",
            skills: ["Docker", "Nginx", "Linux (Ubuntu)", "PfSense", "Proxmox", "TrueNAS", "Networking (VLANs)"]
        },
        {
            title: "Product & Design",
            description: "From concept to shipped user experience.",
            skills: ["Figma", "User Research", "Systems Architecture", "Technical Sales", "Public Speaking"]
        }
    ]

    return (
        <div className="pt-20">
            <Section>
                <div className="mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Capabilities</h1>
                    <p className="text-neutral-400">The toolbox I use to build systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category) => (
                        <Card key={category.title} className="p-8 hover:border-indigo-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                            <p className="text-sm text-neutral-500 mb-6 min-h-[40px]">{category.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="text-xs font-mono text-neutral-300 bg-neutral-800 px-2 py-1 rounded border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    )
}
