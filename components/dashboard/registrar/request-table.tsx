import { CheckCircle2, Clock3, Loader2 } from "lucide-react"

type Row = {
  type: string
  student: string
  id: string
  to: string
  date: string
  status: "Processing" | "Pending" | "Completed"
}

export default function RequestsTable({ rows }: { rows: Row[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/60">
      <div className="flex items-center justify-between p-4">
        <h3 className="text-lg font-semibold">Transcript & Certificate Requests</h3>
        <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium">+ New Request</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-800/80">
            <tr className="text-left text-gray-300">
              <th className="px-4 py-3 font-medium">Student</th>
              <th className="px-4 py-3 font-medium">Request</th>
              <th className="px-4 py-3 font-medium">To</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-white/5">
                <td className="px-4 py-3">
                  <div className="font-medium">{r.student}</div>
                  <div className="text-xs text-gray-400">{r.id}</div>
                </td>
                <td className="px-4 py-3">{r.type}</td>
                <td className="px-4 py-3 text-gray-300">{r.to}</td>
                <td className="px-4 py-3">{r.date}</td>
                <td className="px-4 py-3"><ReqStatus status={r.status} /></td>
                <td className="px-4 py-3 text-right">
                  <button className="rounded-md border border-white/10 px-3 py-1 text-xs hover:bg-white/10">More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-white/10 p-3 text-right">
        <button className="text-sm text-blue-400 hover:underline">View All Requests</button>
      </div>
    </div>
  )
}

function ReqStatus({ status }: { status: Row["status"] }) {
  const map = {
    Processing: { cls: "bg-sky-500/10 text-sky-300", Icon: Loader2 },
    Pending: { cls: "bg-amber-500/10 text-amber-300", Icon: Clock3 },
    Completed: { cls: "bg-emerald-500/10 text-emerald-300", Icon: CheckCircle2 },
  }
  const { cls, Icon } = map[status]
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs ${cls}`}>
      <Icon className="h-4 w-4" /> {status}
    </span>
  )
}
