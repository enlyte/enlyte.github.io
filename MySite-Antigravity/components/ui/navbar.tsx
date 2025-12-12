"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
    const pathname = usePathname()

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
                    className="font-mono text-lg font-bold tracking-tighter text-neutral-100 hover:text-white transition-colors"
                >
                    STEPHEN MOY
                </Link>

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

                {/* Mobile Toggle Placeholder - can be added later */}
                <div className="md:hidden text-neutral-500 text-xs font-mono">
                    MENU
                </div>
            </div>
        </nav>
    )
}
