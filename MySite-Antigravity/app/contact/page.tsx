"use client"

import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Send, Mail, Linkedin, Github } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="pt-20">
            <Section className="max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
                        <p className="text-neutral-400 mb-8 leading-relaxed">
                            I'm always open to discussing new projects, consulting opportunities, or potential roles.
                            Whether you're a founder looking for a technical partner or an engineering leader looking for a senior builder.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:hello@stephenmoy.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Email</p>
                                    <p className="text-sm text-neutral-500">hello@stephenmoy.com</p>
                                </div>
                            </a>

                            <a href="https://linkedin.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center">
                                    <Linkedin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">LinkedIn</p>
                                    <p className="text-sm text-neutral-500">Connect professionally</p>
                                </div>
                            </a>

                            <a href="https://github.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center">
                                    <Github className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">GitHub</p>
                                    <p className="text-sm text-neutral-500">Check my code</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <Card className="p-8">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-neutral-500 uppercase">Name</label>
                                    <input type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Jane Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-neutral-500 uppercase">Email</label>
                                    <input type="email" className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="jane@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neutral-500 uppercase">Subject</label>
                                <select className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors">
                                    <option>Partnership / Collaboration</option>
                                    <option>Hiring / Full-time Role</option>
                                    <option>Consulting</option>
                                    <option>Just saying hi</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-neutral-500 uppercase">Message</label>
                                <textarea rows={5} className="w-full bg-neutral-950 border border-neutral-800 rounded-md px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button className="w-full bg-white text-neutral-950 font-bold rounded-md py-3 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </Card>
                </div>
            </Section>
        </div>
    )
}
