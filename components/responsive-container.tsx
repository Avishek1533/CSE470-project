import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function ResponsiveContainer({ children, className, as: Component = "div" }: ResponsiveContainerProps) {
  return <Component className={cn("container mx-auto px-4 md:px-6 max-w-7xl", className)}>{children}</Component>
}

