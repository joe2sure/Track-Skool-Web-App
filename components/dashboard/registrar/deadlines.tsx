import { CalendarDays } from "lucide-react"

type Deadline = { title: string; meta: string; left: string; date: string }

export default function Deadlines({ items }: { items: Deadline[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/60">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Upcoming Deadlines</h3>
        </div>
        <button className="text-sm text-blue-400 hover:underline">View Calendar</button>
      </div>
      <ul className="divide-y divide-white/10">
        {items.map((d, i) => (
          <li key={i} className="flex items-start justify-between gap-3 p-4">
            <div>
              <div className="font-medium">{d.title}</div>
              <div className="text-xs text-gray-400">{d.meta}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">{d.left}</div>
              <div className="text-xs text-gray-400">{d.date}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="border-t border-white/10 p-4 text-center">
        <button className="rounded-md border border-white/10 px-3 py-1 text-xs hover:bg-white/10">Add New Deadline</button>
      </div>
    </div>
  )
}
