
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  title: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({ label, title, className, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <span className="font-code text-primary text-xs tracking-widest block mb-2 uppercase">
        // {label}
      </span>
      <h2 className="text-4xl md:text-6xl font-headline font-bold">
        {title}
      </h2>
    </div>
  )
}
