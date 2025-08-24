import type { ComponentType } from "react"
import { type LucideIcon } from "lucide-react"

type Tone = "blue" | "green" | "amber" | "violet"
const toneMap: Record<Tone, string> = {
  blue: "from-blue-500/20 to-indigo-500/20",
  green: "from-emerald-500/20 to-green-500/20",
  amber: "from-amber-500/20 to-orange-500/20",
  violet: "from-violet-500/20 to-fuchsia-500/20",
}

export default function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = "blue",
}: {
  label: string
  value: number
  delta: string
  icon: ComponentType<{ className?: string }>
  tone?: Tone
}) {
  return (
    <div className={`rounded-xl border border-white/10 bg-slate-800/60 p-4`}>
      <div className={`mb-3 inline-flex rounded-lg bg-gradient-to-r ${toneMap[tone]} px-2 py-1 text-xs`}>{label}</div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-3xl font-semibold">{value.toLocaleString()}</div>
          <div className="mt-1 text-xs text-gray-400">{delta}</div>
        </div>
        <div className="rounded-lg bg-slate-700/60 p-2">
          <Icon className="h-5 w-5 text-gray-200" />
        </div>
      </div>
    </div>
  )
}
