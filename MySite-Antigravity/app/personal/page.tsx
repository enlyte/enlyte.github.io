import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Music, Heart, Mic2, Hammer, MountainSnow, Layers, DraftingCompass, Video } from "lucide-react"
import Image from "next/image"



export const metadata = {
    title: "Personal | Stephen Moy",
    description: "Offline mode. Music, Sugar Gliders, and interests.",
}

export default function PersonalPage() {
    return (
        <div className="pt-20 mb-12">
            <Section>
                <div className="mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Offline Mode</h1>
                    <p className="text-neutral-400">When I’m away from the keyboard.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="col-span-1 md:col-span-2 bg-neutral-900 border-neutral-800 p-8 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Heart className="text-rose-500 h-5 w-5" />
                                <h2 className="text-xl font-bold text-white">Sugar Gliders</h2>
                            </div>
                            <p className="text-neutral-400 max-w-md">
                                I care for four sugar gliders, Lego, Cella, Ruby, and Crouton. They are nocturnal marsupials that require specialized care, diet, and enrichment.
                                <br /><br />
                                It's a study in patience, routine, and observing subtle behaviors.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-950 border border-white/5">
                                <Image
                                    src="/images/personal/glider-1.JPG"
                                    alt="Sugar Glider 1"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-950 border border-white/5">
                                <Image
                                    src="/images/personal/glider-2.JPG"
                                    alt="Sugar Glider 2"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-neutral-900 border-neutral-800 p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Music className="text-amber-500 h-5 w-5" />
                            <h2 className="text-xl font-bold text-white">Music & Audio</h2>
                        </div>
                        <p className="text-sm text-neutral-400 mb-6">
                            From DJing to production. I love the technical side of audio signal flow.  With a preference for Native Instruments. Side hobby of Podcast Production.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-neutral-950 text-neutral-500 px-2 py-1 rounded">Maschine</span>
                            <span className="text-xs bg-neutral-950 text-neutral-500 px-2 py-1 rounded">Traktor</span>
                            <span className="text-xs bg-neutral-950 text-neutral-500 px-2 py-1 rounded">Shure SM7B</span>
                        </div>
                        <div className="flex-1 mt-10">
                            <div className="relative h-64 md:h-full min-h-[250px] rounded-lg overflow-hidden bg-neutral-950 border border-white/5">
                                <Image
                                    src="/images/personal/audioEquipment.JPG"
                                    alt="Audio Equipment"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-neutral-900 border-neutral-800 p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Video className="text-indigo-500 h-5 w-5" />
                            <h2 className="text-xl font-bold text-white">Video Production</h2>
                        </div>
                        <p className="text-sm text-neutral-400">
                            Video and podcast production. Building setups for studio sessions and on-the-go recording.
                        </p>
                        <div className="flex-1 mt-10">
                            <div className="relative h-64 md:h-full min-h-[250px] rounded-lg overflow-hidden bg-neutral-950 border border-white/5">
                                <Image
                                    src="/images/personal/podcast.PNG"
                                    alt="Podcast Production"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="col-span-1 md:col-span-2 bg-neutral-900 border-neutral-800 p-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <Hammer className="text-orange-500 h-5 w-5" />
                                    <h2 className="text-xl font-bold text-white">Firepit & Patio Build</h2>
                                </div>
                                <p className="text-neutral-400 mb-6 leading-relaxed">
                                    I designed and built a backyard patio and firepit from scratch. It involved excavating tons of dirt, laying an open grade gravel base,
                                    installing pavers, adding polymeric sand to lock them in place, and cutting custom masonry for the firepit circle.
                                    <br /><br />
                                    A test of physical endurance and precision outside the code editor.
                                </p>
                            </div>
                            <div className="flex-1">
                                <div className="relative h-64 md:h-full min-h-[250px] rounded-lg overflow-hidden bg-neutral-950 border border-white/5">
                                    <Image
                                        src="/images/personal/firepit.JPG"
                                        alt="DIY Firepit and Patio Project"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>


                    <Card className="col-span-1 lg:col-span-2 bg-neutral-900 border-neutral-800 p-8 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <Layers className="text-emerald-400 h-5 w-5" />
                            <h2 className="text-xl font-bold text-white">Fusion 360 + 3D Printing</h2>
                        </div>

                        <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            I design and print functional parts for my home and homelab using Fusion 360.
                            Mounts, brackets, cable guides, and enclosures that don’t exist off-the-shelf.
                            <br /><br />
                            Measure, model, print, test, iterate.
                        </p>

                        <div className="mt-auto">
                            <div className="relative h-64 rounded-lg overflow-hidden bg-neutral-950 border border-white/5">
                                <Image
                                    src="/images/personal/3dprint.png"
                                    alt="Fusion 360 design and 3D printed parts"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </Card>


                    <Card className="bg-neutral-900 border-neutral-800 p-8 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <MountainSnow className="text-sky-400 h-5 w-5" />
                            <h2 className="text-xl font-bold text-white">Snowboarding Progress</h2>
                        </div>

                        <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Snowboarding is my reset button and my long-game hobby. I’m focused on cleaner turns,
                            better edge control, and staying relaxed at speed.
                            <br /><br />
                            Small adjustments, immediate feedback, constant refinement.
                        </p>

                        <div className="mt-auto">
                            <div className="relative h-64 rounded-lg overflow-hidden bg-neutral-950 border border-white/5">
                                <Image
                                    src="/images/personal/snowboard1.png"
                                    alt="Snowboarding on the slopes"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </Card>

                </div>
            </Section>
        </div>
    )
}
