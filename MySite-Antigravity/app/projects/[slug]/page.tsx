import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import { Section } from "@/components/ui/section"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

// This is correct for Next.js 14/15 App Router dynamic params
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectLayout({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-24 pb-24">
            <Section className="py-0">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-sm text-neutral-500 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Link>

                {/* Header */}
                <div className="border-b border-white/10 pb-12 mb-12">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-mono text-indigo-400 px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
                                    {project.category}
                                </span>
                                <span className="text-xs font-mono text-neutral-500">
                                    {project.year}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                                {project.subtitle}
                            </p>
                        </div>

                        {/* Meta Sidebar on Mobile / Right on Desktop */}
                        <div className="w-full md:w-64 flex flex-col gap-6 p-6 rounded-xl bg-neutral-900/50 border border-white/5">
                            <div>
                                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Role</h3>
                                <p className="text-sm text-white font-medium">{project.role}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="text-xs text-neutral-300 bg-neutral-800 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                            <p className="text-neutral-400 leading-relaxed text-lg">
                                {project.challenge}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
                                {project.solution}
                            </p>

                            <div className="bg-neutral-900/30 border border-white/5 rounded-xl p-6">
                                <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Key Features</h3>
                                <ul className="space-y-3">
                                    {project.features?.map(feature => (
                                        <li key={feature} className="flex items-start gap-3 text-neutral-300">
                                            <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                            <p className="text-neutral-400 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Visuals / Info Sidebar */}
                    <div className="space-y-6">
                        <div className="aspect-video w-full rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-600">
                            {/* Placeholder for project image/screenshot */}
                            <span className="text-sm">Main Project Visual (Placement)</span>
                        </div>
                        <div className="aspect-video w-full rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-600">
                            {/* Placeholder for architecture diagram */}
                            <span className="text-sm">System Diagram (Placement)</span>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
