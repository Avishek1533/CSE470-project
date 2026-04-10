import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatisticCardProps {
  icon: ReactNode
  value: string
  label: string
}

export default function StatisticCard({ icon, value, label }: StatisticCardProps) {
  return (
    <Card className="overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all duration-200 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-3">{icon}</div>
          <h3 className="mb-1 text-3xl font-bold text-slate-900 dark:text-white">{value}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        </div>
      </CardContent>
    </Card>
  )
}

