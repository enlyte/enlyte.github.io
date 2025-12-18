import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Lightbulb, Workflow, RotateCw, MessagesSquare, ShieldCheck, BrainCircuit } from "lucide-react"

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

                {/* AI Section (Top Priority) */}
                <div className="pb-24 border-b border-white/5 mb-24">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium w-fit mb-6">
                                <BrainCircuit className="h-4 w-4" /> AI Paradigm
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Leverage & Control</h2>
                            <p className="text-neutral-400 leading-relaxed">
                                AI is a powerful force multiplier, but without rigid architectural oversight, it becomes a generator of technical debt.
                                <br /><br />
                                My philosophy is to use AI to <em>accelerate execution</em>, not to replace understanding.
                            </p>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 gap-6">
                            <Card className="p-6 bg-neutral-900/50 border-neutral-800">
                                <h3 className="text-lg font-bold text-white mb-3">Architecture First, Generation Second</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Code generation without a clear spec leads to endless &quot;micro-refactoring&quot; loops.
                                    I invest heavily in the planning phase, defining schemas, interfaces, and data flows before a single line of code is generated.
                                    This ensures AI outputs are integrated components, not isolated snippets.
                                </p>
                            </Card>

                            <Card className="p-6 bg-neutral-900/50 border-neutral-800">
                                <div className="flex items-center gap-3 mb-3">
                                    <ShieldCheck className="text-emerald-500 h-5 w-5" />
                                    <h3 className="text-lg font-bold text-white">Security & Boundaries</h3>
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Maintaining strict data boundaries is non-negotiable. I utilize local LLMs for sensitive logic
                                    and sanitized contexts for cloud inference, ensuring that leveraging modern intelligence never compromises system security.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Core Methodology Grid */}
                <div>
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Core Methodology</h2>
                        <p className="text-neutral-400">The cyclical process I apply to every project.</p>
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
                </div>
            </Section>
        </div >
    )
}
