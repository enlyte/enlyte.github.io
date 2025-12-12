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
            description: "Founded a company to solve media automation problems. Architected and shipped VidCutAI, a desktop app using local AI for multicam editing. Managing the full stack: Product, Desktop (Python/Qt), Cloud (Docker/Nginx), and Sales."
        },
        {
            year: "2017 - 2020",
            title: "Experian Data Quality",
            role: "Sales Engineer",
            description: "Bridged the gap between technical teams and enterprise clients. Designed solutions for complex data quality integrations, demonstrating strong communication and systems thinking."
        },
        {
            year: "2013 - 2017",
            title: "Behavior Data Tracker",
            role: "Founder & iOS Developer",
            description: "Built and launched an iOS app used by special education professionals to track behavior data. My first experience shipping a product from idea to App Store."
        },
        {
            year: "2008 - 2013",
            title: "Guild for Human Services",
            role: "Technology Curriculum Manager",
            description: "Introduced assistive technology and digital independence curriculums. Translating complex tech concepts for human services contexts."
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
