import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Music, Heart, Mic2 } from "lucide-react"

export const metadata = {
    title: "Personal | Stephen Moy",
    description: "Offline mode. Music, Sugar Gliders, and interests.",
}

export default function PersonalPage() {
    return (
        <div className="pt-20">
            <Section>
                <div className="mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Offline Mode</h1>
                    <p className="text-neutral-400">When I'm not compiled.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="col-span-1 md:col-span-2 bg-neutral-900 border-neutral-800 p-8 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Heart className="text-rose-500 h-5 w-5" />
                                <h2 className="text-xl font-bold text-white">Sugar Gliders</h2>
                            </div>
                            <p className="text-neutral-400 max-w-md">
                                I care for two sugar gliders, Lego and Cella. They are nocturnal marsupials that require specialized care, diet, and enrichment.
                                <br /><br />
                                It's a study in patience, routine, and observing subtle behaviors.
                            </p>
                        </div>
                        <div className="mt-8 p-4 bg-neutral-950/50 rounded-lg border border-white/5 text-center text-xs text-neutral-600">
                            [Visual Placeholder: High-res photo of sugar gliders]
                        </div>
                    </Card>

                    <Card className="bg-neutral-900 border-neutral-800 p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Music className="text-amber-500 h-5 w-5" />
                            <h2 className="text-xl font-bold text-white">Music & Audio</h2>
                        </div>
                        <p className="text-sm text-neutral-400 mb-6">
                            From DJing to production. I love the technical side of audio—signal flow, gain staging, and synthesis.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-neutral-950 text-neutral-500 px-2 py-1 rounded">Maschine</span>
                            <span className="text-xs bg-neutral-950 text-neutral-500 px-2 py-1 rounded">Traktor</span>
                            <span className="text-xs bg-neutral-950 text-neutral-500 px-2 py-1 rounded">Shure SM7B</span>
                        </div>
                    </Card>

                    <Card className="bg-neutral-900 border-neutral-800 p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Mic2 className="text-indigo-500 h-5 w-5" />
                            <h2 className="text-xl font-bold text-white">Events</h2>
                        </div>
                        <p className="text-sm text-neutral-400">
                            Experience design and event production. Creating spaces where people can connect authentically.
                            Projects like <em>Rune Soirée</em>.
                        </p>
                    </Card>
                </div>
            </Section>
        </div>
    )
}
