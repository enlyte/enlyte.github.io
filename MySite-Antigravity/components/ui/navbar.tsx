"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: "/projects", label: "Work" },
        { href: "/process", label: "Process" },
        { href: "/about", label: "Story" },
        { href: "/personal", label: "Personal" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="font-mono text-xl font-bold tracking-tight text-neutral-100 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    Stephen Moy
                    {/* &lt;/Stephen Moy&gt; */}
                </Link>

                {/* Desktop Nav */}
                <div className="hidden gap-8 md:flex">
                    {links.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-white",
                                pathname.startsWith(link.href) && link.href !== "/"
                                    ? "text-white"
                                    : "text-neutral-400"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-neutral-400 hover:text-white transition-colors p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/5 bg-neutral-950/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {links.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium transition-colors py-2",
                                        pathname.startsWith(link.href) && link.href !== "/"
                                            ? "text-white"
                                            : "text-neutral-400 hover:text-neutral-200"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
