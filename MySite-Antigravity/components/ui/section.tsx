import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

export function Section({ children, className, ...props }: SectionProps) {
    return (
        <section
            className={cn("mx-auto w-full max-w-7xl px-6 py-", className)}
            {...props}
        >
            {children}
        </section>
    )
}
