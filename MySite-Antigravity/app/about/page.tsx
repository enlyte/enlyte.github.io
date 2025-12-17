import { Section } from "@/components/ui/section"
import { Timeline } from "@/components/about/timeline"

export const metadata = {
    title: "About | Stephen Moy",
    description: "My journey from Education to Sales Engineering to Technical Founder.",
}

export default function AboutPage() {
    return (
        <div className="pt-20">
            <Section>
                <div className="max-w-3xl mb-24">
                    <h1 className="text-4xl font-bold text-white mb-6">The Journey</h1>
                    <p className="text-lg text-neutral-400 leading-relaxed space-y-4">
                        I am a <span className="text-white font-medium">Technical Founder</span> and <span className="text-white font-medium">Systems Thinker</span>.
                        <br /><br />
                        My path hasn't been linear. I started in Education, helping others understand technology.
                        I moved into Sales Engineering, learning how to listen to problems and design enterprise solutions.
                        <br /><br />
                        Now, I build the tools myself. I combine that empathy and communication with deep technical skills in
                        full-stack development, AI pipelines, and infrastructure to ship products that feel intuitive and purposeful.
                    </p>
                </div>

                <Timeline />
            </Section>
        </div>
    )
}
