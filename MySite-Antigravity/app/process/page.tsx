import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Lightbulb, Workflow, RotateCw, MessagesSquare } from "lucide-react"

export const metadata = {
    title: "Process | Stephen Moy",
    description: "How I think and build systems.",
}

export default function ProcessPage() {
    const steps = [
        {
            title: "1. Systems First",
            icon: Workflow,
            desc: "I design the system’s behavior up front, mentally walking through how data moves and how components should interact. With the flow already thought through, this lets me catch issues early and build with intention.",
        },
        {
            title: "2. Research & Validate",
            icon: Lightbulb,
            desc: "I research existing tools and run quick experiments to understand the landscape. I prefer clean, focused custom code when it avoids bloat, but I’ll use a proven library when it’s clearly the faster, more reliable path.",
        },
        {
            title: "3. Build & Iterate",
            icon: RotateCw,
            desc: "I start with the core functionality, building a simple end-to-end flow first. Once the foundation works, I shape the UI around it so the experience feels natural and low-friction, then iterate and refine.",
        },
        {
            title: "4. Feedback Loops",
            icon: MessagesSquare,
            desc: "I rely on tight feedback loops, testing early and often to confirm the system behaves as intended. This helps reveal edge cases and ensures the final experience feels reliable and predictable.",
        }
    ]

    return (
        <div className="pt-20">
            <Section>
                <div className="mb-24 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-6">How I Work</h1>
                    <p className="text-neutral-400">
                        I think in systems. I design software to be reliable, scalable, and grounded in real user needs.
                        Technical polish matters, but what matters more is creating tools that actually make someone’s work easier.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[100px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent -z-10" />

                    {steps.map((step, i) => (
                        <Card key={step.title} className="p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <step.icon className="w-24 h-24 text-white" />
                            </div>

                            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 border border-white/5">
                                <step.icon className="text-indigo-400 h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-neutral-400 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    )
}
