"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Bell,
  Building2,
  CalendarDays,
  Home,
  ListChecks,
  MessageSquare,
  Settings,
  SquareGantt,
  Wrench,
  FileText
} from "lucide-react";

const items = [
  { href: "/dashboard/hostel", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
  { href: "#", label: "Hostels", icon: <Building2 className="w-4 h-4" /> },
  { href: "#", label: "Rooms", icon: <SquareGantt className="w-4 h-4" /> },
  { href: "#", label: "Allocations", icon: <ListChecks className="w-4 h-4" /> },
  { href: "#", label: "Requests", icon: <MessageSquare className="w-4 h-4" /> },
  { href: "#", label: "Maintenance", icon: <Wrench className="w-4 h-4" /> },
  { href: "#", label: "Events", icon: <CalendarDays className="w-4 h-4" /> },
  { href: "#", label: "Communication", icon: <Bell className="w-4 h-4" /> },
  { href: "#", label: "Reports", icon: <FileText className="w-4 h-4" /> },
  { href: "#", label: "Settings", icon: <Settings className="w-4 h-4" /> },
];

export default function HostelSidebar({ active }: { active?: string }) {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex flex-col w-60 min-h-screen bg-gray-950 border-r border-gray-800 sticky top-0">
      <div className="h-14 flex items-center gap-2 px-4 border-b border-gray-800">
        <div className="w-8 h-8 rounded-lg grid place-items-center bg-indigo-600">🏠</div>
        <div className="font-semibold">Hostel Manager</div>
      </div>

      <nav className="flex-1 py-3">
        {items.map((it) => {
          const isActive =
            active === it.label.toLowerCase() || pathname === it.href;
          return (
            <Link key={it.label} href={it.href} className="block">
              <div
                className={`mx-2 my-0.5 flex items-center gap-3 px-3 py-2 rounded-lg border ${
                  isActive
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "bg-transparent border-transparent text-gray-300 hover:bg-gray-900 hover:border-gray-800"
                }`}
              >
                {it.icon}
                <span className="text-sm">{it.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-gray-800">
        <div className="rounded-lg bg-gray-900 border border-gray-800 p-3 text-xs text-gray-300">
          <div className="flex items-center gap-2 mb-1"><Activity className="w-3.5 h-3.5 text-emerald-400" /> System health</div>
          <div className="text-gray-400">All services operational</div>
        </div>
      </div>
    </aside>
  );
}
