"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BarChart3, Bell, BookOpen, CalendarClock, FileBadge2, FileText, Home, LogOut, Mail, Settings, UsersRound } from "lucide-react"
import { useEffect } from "react"

const nav = [
  { href: "/dashboard/registrar", label: "Dashboard", icon: Home },
  { href: "/dashboard/registrar/admissions", label: "Admissions", icon: UsersRound },
  { href: "/dashboard/registrar/enrollment", label: "Enrollment", icon: BookOpen },
  { href: "/dashboard/registrar/records", label: "Records", icon: FileText },
  { href: "/dashboard/registrar/certificates", label: "Certificates", icon: FileBadge2 },
  { href: "/dashboard/registrar/communication", label: "Communication", icon: Mail },
  { href: "/dashboard/registrar/deadlines", label: "Deadlines", icon: CalendarClock },
  { href: "/dashboard/registrar/reports", label: "Reports", icon: BarChart3 },
  { href: "/dashboard/registrar/settings", label: "Settings", icon: Settings },
]

export default function RegistrarSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  // Guard: if wrong role tries to access, kick back to router /dashboard
  useEffect(() => {
    if (typeof window === "undefined") return
    const userType = localStorage.getItem("userType")
    if (!userType) router.push("/auth/dashboard-login")
    if (userType && userType !== "registrar") router.push(`/dashboard/${userType}`)
  }, [router])

  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="h-16 flex items-center gap-3 px-4 border-b border-white/10">
        <div className="h-9 w-9 rounded-xl bg-blue-600 grid place-items-center text-white font-bold">ER</div>
        <div>
          <div className="text-sm font-semibold">EduRegistry</div>
          <div className="text-[11px] text-gray-400">Registrar Panel</div>
        </div>
      </div>

      <nav className="px-2 py-3 space-y-1">
        {nav.map((item) => {
          const active = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                active ? "bg-slate-800 text-white" : "text-gray-300 hover:bg-slate-800/60 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto p-3">
        <button
          onClick={() => {
            localStorage.removeItem("userType")
            localStorage.removeItem("userData")
            router.push("/auth/dashboard-login")
          }}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-red-600/80 px-3 py-2 text-sm font-medium hover:bg-red-600"
        >
          <LogOut className="h-4 w-4" /> Logout
        </button>
        <div className="mt-3 text-[11px] text-center text-gray-400">© {new Date().getFullYear()} TrackSkool</div>
      </div>
    </aside>
  )
}