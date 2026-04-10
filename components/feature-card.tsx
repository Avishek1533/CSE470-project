import { Card, CardContent } from "@/components/ui/card"
import {
  Zap,
  Shield,
  UserCircle,
  MessageSquare,
  LineChart,
  FileIcon as FilePresentation,
  type LucideIcon,
} from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconMap: Record<string, LucideIcon> = {
    Zap,
    Shield,
    UserCircle,
    MessageSquare,
    LineChart,
    FilePresentation,
  }

  const IconComponent = IconMap[icon] || Zap

  return (
    <Card className="overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-4px]">
      <CardContent className="p-6">
        <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{description}</p>
      </CardContent>
    </Card>
  )
}

