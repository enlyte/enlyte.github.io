import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-xl border border-white/5 bg-neutral-900/50 backdrop-blur-sm transition-colors hover:border-white/10",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
