import type { ComponentType } from "react"

type Action = { icon: ComponentType<{ className?: string }>; label: string; meta: string; cta: string }

export default function QuickActions({ items }: { items: Action[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/60">
      <div className="p-4 text-lg font-semibold">Quick Actions</div>
      <div className="space-y-3 p-4 pt-0">
        {items.map((a, i) => {
          const Icon = a.icon
          return (
            <div key={i} className="rounded-lg border border-white/10 bg-slate-800/60 p-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-700/60 p-2">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{a.label}</div>
                  <div className="text-xs text-gray-400">{a.meta}</div>
                </div>
                <button className="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-medium">{a.cta}</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-white/10 p-3 text-[11px] text-gray-400">
        <span className="h-4 w-4 rounded bg-white/10" /> Designed by TrackSkool
      </div>
    </div>
  )
}