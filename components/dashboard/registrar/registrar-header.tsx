"use client"

import { Bell, Search } from "lucide-react"

export default function RegistrarHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-3 px-4">
        <div className="relative hidden md:block flex-1">
          <input
            className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-sm placeholder-gray-400 outline-none"
            placeholder="Search students, applications, records..."
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
        <button className="relative rounded-lg border border-white/10 bg-slate-800/60 p-2">
          <Bell className="h-5 w-5 text-gray-300" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-amber-500 text-[10px] font-bold text-black grid place-items-center">3</span>
        </button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500" />
      </div>
    </header>
  )
}
