import { Megaphone } from "lucide-react"

type Item = { title: string; desc: string; tag: string; date: string; tone: "rose" | "sky" | "violet" | "amber" }

const toneDot: Record<Item["tone"], string> = {
  rose: "bg-rose-400",
  sky: "bg-sky-400",
  violet: "bg-violet-400",
  amber: "bg-amber-400",
}

export default function Announcements({ items }: { items: Item[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/60">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Megaphone className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Announcements</h3>
        </div>
        <button className="text-sm text-blue-400 hover:underline">View All</button>
      </div>
      <div className="divide-y divide-white/10">
        {items.map((a, i) => (
          <div key={i} className="p-4">
            <div className="flex items-start gap-3">
              <span className={`mt-1 h-2.5 w-2.5 rounded-full ${toneDot[a.tone]}`} />
              <div className="flex-1">
                <div className="font-medium">{a.title}</div>
                <p className="mt-1 text-sm text-gray-300">{a.desc}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                  <span>By {a.tag}</span>
                  <span>{a.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 p-4 text-center text-xs text-gray-400">View All Announcements</div>
    </div>
  )
}
