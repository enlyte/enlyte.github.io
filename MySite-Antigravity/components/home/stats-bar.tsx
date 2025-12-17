"use client"

import { motion } from "framer-motion"
import { Calendar, Rocket, Zap } from "lucide-react"

export function StatsBar() {
    const stats = [
        {
            label: 'Years building products',
            value: '10+',
            icon: Calendar
        },
        {
            label: 'Current focus',
            value: 'VidCutAI / Nulite',
            icon: Rocket
        },
        {
            label: 'Stack depth',
            value: 'Full-stack + Infra',
            icon: Zap
        },
    ]

    return (
        <section className="w-full border-y border-white/5 bg-neutral-900/30 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center justify-center p-4"
                        >
                            <div className="mb-4 rounded-full bg-white/5 p-3 text-indigo-400 ring-1 ring-white/10">
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
