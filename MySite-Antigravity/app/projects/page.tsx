import Link from "next/link"
import { projects } from "@/lib/data"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
    title: "Projects | Stephen Moy",
    description: "Selected work in AI, Infrastructure, and Product Engineering.",
}

export default function ProjectsPage() {
    return (
        <div className="pt-20">
            <Section>
                <div className="mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Selected Work</h1>
                    <p className="text-neutral-400 max-w-2xl">
                        Here’s a collection of what I&apos;ve built. Some are production systems, others are experiments to test limits.
                        Ranging from desktop AI applications to bare-metal infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <Link key={project.slug} href={`/projects/${project.slug}`}>
                            <Card className="h-full p-8 group hover:bg-neutral-900/80 transition-all hover:border-neutral-700">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-mono text-indigo-400 px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
                                        {project.category}
                                    </span>
                                    <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors h-5 w-5" />
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-neutral-500 text-sm mb-4">{project.subtitle}</p>
                                <p className="text-neutral-400 mb-8 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.stack.slice(0, 4).map(tech => (
                                        <span key={tech} className="text-xs text-neutral-500 font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.stack.length > 4 && (
                                        <span className="text-xs text-neutral-500 font-mono">+{project.stack.length - 4}</span>
                                    )}
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    )
}
