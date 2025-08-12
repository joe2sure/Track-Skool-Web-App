import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
  color: "blue" | "green" | "orange" | "purple" | "red"
}

const colorClasses = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  orange: "bg-orange-600",
  purple: "bg-purple-600",
  red: "bg-red-600",
}

export function StatCard({ title, value, change, changeType, icon: Icon, color }: StatCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value.toLocaleString()}</p>
          {change && (
            <p
              className={cn(
                "text-sm mt-1",
                changeType === "positive"
                  ? "text-green-400"
                  : changeType === "negative"
                    ? "text-red-400"
                    : "text-slate-400",
              )}
            >
              {change}
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-lg", colorClasses[color])}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  )
}
