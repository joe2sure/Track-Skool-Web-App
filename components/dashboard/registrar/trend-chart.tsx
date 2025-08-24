"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: 2650 },
  { name: "Feb", total: 2720 },
  { name: "Mar", total: 2680 },
  { name: "Apr", total: 2750 },
  { name: "May", total: 2900 },
  { name: "Jun", total: 2847 },
]

export default function TrendChart() {
  return (
    <div className="h-60 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip contentStyle={{ background: "#0b1220", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff" }} />
          <Bar dataKey="total" radius={[8, 8, 8, 8]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-2 text-right text-xs text-gray-400">Current: <span className="text-gray-200">2,847 students</span></div>
    </div>
  )
}
