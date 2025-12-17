"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineItemProps {
    year: string
    title: string
    role: string
    description: string
    align?: "left" | "right"
}

function TimelineItem({ year, title, role, description, align = "left" }: TimelineItemProps) {
    return (
        <div className={cn("relative flex w-full pb-12 last:pb-0", align === "right" ? "justify-end" : "justify-start")}>
            {/* Center Line Marker */}
            <div className="absolute left-0 md:left-1/2 ml-[21px] md:-ml-[1px] h-full w-[2px] bg-neutral-800"></div>
            <div className="absolute left-0 md:left-1/2 ml-[16px] md:-ml-[6px] top-0 h-3 w-3 rounded-full border border-neutral-600 bg-neutral-950"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "ml-12 md:ml-0 md:w-[45%] rounded-xl border border-white/5 bg-neutral-900/30 p-6 backdrop-blur-sm",
                    align === "right" ? "md:text-right" : "md:text-left"
                )}
            >
                <span className="text-xs font-mono text-indigo-400 mb-2 block">{year}</span>
                <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                <p className="text-sm font-medium text-neutral-400 mb-3">{role}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
            </motion.div>
        </div>
    )
}

export function Timeline() {
    const events = [

        {
            year: "2021 - Present",
            title: "Nulite / VidCutAI",
            role: "Founder & Lead Developer",
            description: "Founded Nulite to build practical AI-powered media tools. Architected and shipped VidCutAI, a desktop application for automated podcast and multicam editing. Led product direction and built the full stack spanning Python/Qt desktop systems, AI processing pipelines, cloud infrastructure (Docker, Nginx), and customer-facing sales and support."
        },
        {
            year: "2017 - 2020",
            title: "Experian Data Quality",
            role: "Sales Engineer",
            description: "Worked at the intersection of engineering and enterprise clients, designing and presenting data quality solutions for complex integration environments. Developed strong communication, system-level thinking, and the ability to translate technical constraints into real business outcomes."
        },
        {
            year: "2013 - 2017",
            title: "Behavior Data Tracker",
            role: "Founder & iOS Developer",
            description: "Designed, built, and launched a native iOS application used by special education professionals to track behavioral data in real time. Owned the product end-to-end, from concept and UX to implementation, deployment, and App Store release."
        },
        {
            year: "2008 - 2013",
            title: "Guild for Human Services",
            role: "Technology Curriculum Manager",
            description: "Developed and delivered assistive technology and digital independence curricula for individuals with disabilities. Focused on making technology accessible, practical, and empowering in a human services setting."
        }
    ]

    return (
        <div className="relative mx-auto max-w-4xl py-12">
            {events.map((event, index) => (
                <TimelineItem
                    key={index}
                    {...event}
                />
            ))}
        </div>
    )
}
