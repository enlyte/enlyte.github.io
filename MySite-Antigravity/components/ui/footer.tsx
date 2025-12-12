import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-neutral-950 py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <span className="font-mono text-sm font-bold tracking-tight text-neutral-200">
                        STEPHEN MOY
                    </span>
                    <p className="text-xs text-neutral-500">
                        © {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 transition-colors hover:text-white"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 transition-colors hover:text-white"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                        href="mailto:hello@stephenmoy.com"
                        className="text-neutral-500 transition-colors hover:text-white"
                        aria-label="Email"
                    >
                        <Mail className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
