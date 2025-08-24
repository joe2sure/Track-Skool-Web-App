import { CheckCircle2, Clock3, FileSearch } from "lucide-react"

type AppRow = { name: string; program: string; gpa: number; status: "Pending" | "Review" | "Approved" }

export default function RecentApplications({ applications }: { applications: AppRow[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/60">
      <div className="flex items-center justify-between p-4">
        <h3 className="text-lg font-semibold">Recent Applications</h3>
        <button className="text-sm text-blue-400 hover:underline">View All</button>
      </div>
      <ul className="divide-y divide-white/10">
        {applications.map((a, i) => (
          <li key={i} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-slate-700/60" />
              <div>
                <div className="font-medium">{a.name}</div>
                <div className="text-xs text-gray-400">{a.program} · GPA: {a.gpa}</div>
              </div>
            </div>
            <StatusPill status={a.status} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function StatusPill({ status }: { status: AppRow["status"] }) {
  const map = {
    Pending: { cls: "bg-amber-500/10 text-amber-300", Icon: Clock3 },
    Review: { cls: "bg-sky-500/10 text-sky-300", Icon: FileSearch },
    Approved: { cls: "bg-emerald-500/10 text-emerald-300", Icon: CheckCircle2 },
  }
  const { cls, Icon } = map[status]
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${cls}`}>
      <Icon className="h-4 w-4" /> {status}
    </span>
  )
}
