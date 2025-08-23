"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import HostelSidebar from "@/components/dashboard/hostel/hostel-sidebar";
import HostelTopbar from "@/components/dashboard/hostel/hostel-topbar";
import {
  Bell,
  CheckCircle2,
  ChevronRight,
  Download,
  Edit,
  ExternalLink,
  FileText,
  Info,
  ListChecks,
  MoreHorizontal,
  Search,
  Settings,
  Trash2,
  Users,
  Wrench
} from "lucide-react";

type OccupancyRow = { block: string; current: number; capacity: number; color?: string };
type Announcement = { id: string; title: string; body: string; dept: string; ts: string; tone: "info"|"warning"|"success"|"alert" };
type AllocationRow = {
  id: string; student: string; initials: string; room: string; block: string; checkIn: string; status: "Active"|"Pending"|"Inactive";
};
type MaintenanceRow = {
  id: string; title: string; priority: "Low"|"Medium"|"High"; status: "Open"|"In Progress"|"Completed"; room: string; block: string; date: string; note?: string; reporter: string; assignee?: string;
};
type EventRow = { id: string; title: string; daysLeft: number; time: string; venue: string; attendees: number };

function StatCard({
  icon,
  label,
  value,
  delta,
  tone = "neutral",
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  delta?: string;
  tone?: "neutral" | "up" | "down";
}) {
  return (
    <div className="rounded-xl bg-gray-800/50 border border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-gray-800 border border-gray-700">{icon}</div>
        {delta && (
          <span
            className={`text-xs px-2 py-1 rounded-md ${
              tone === "up"
                ? "bg-emerald-500/10 text-emerald-400"
                : tone === "down"
                ? "bg-rose-500/10 text-rose-400"
                : "bg-gray-600/20 text-gray-300"
            }`}
          >
            {delta}
          </span>
        )}
      </div>
      <div className="mt-4">
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-xs text-gray-400 mt-1">{label}</div>
      </div>
    </div>
  );
}

function ProgressBar({ value, color = "bg-violet-500" }: { value: number; color?: string }) {
  return (
    <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
      <div className={`h-2 ${color}`} style={{ width: `${value}%` }} />
    </div>
  );
}

export default function HostelDashboardPage() {
  const router = useRouter();

  // Route guard (only allow when logged in via dummy auth)
  useEffect(() => {
    const userType = typeof window !== "undefined" ? localStorage.getItem("userType") : null;
    if (!userType) router.replace("/auth/dashboard-login");
  }, [router]);

  // ====== SAMPLE DATA (mirrors the mockup) ======
  const kpis = useMemo(
    () => [
      { icon: <Users className="w-5 h-5 text-indigo-400" />, label: "Total Hostels", value: 5, delta: "+2", tone: "up" as const },
      { icon: <ListChecks className="w-5 h-5 text-emerald-400" />, label: "Occupied Beds", value: 1189, delta: "+24", tone: "up" as const },
      { icon: <BedIcon />, label: "Vacant Beds", value: 58, delta: "", tone: "neutral" as const },
      { icon: <FileText className="w-5 h-5 text-pink-400" />, label: "Pending Requests", value: 23, delta: "-5", tone: "down" as const },
    ],
    []
  );

  const occupancy: OccupancyRow[] = [
    { block: "Aurora Block", current: 245, capacity: 280, color: "bg-indigo-500" },
    { block: "Harmony Hall", current: 188, capacity: 208, color: "bg-emerald-500" },
    { block: "Serenity Tower", current: 312, capacity: 350, color: "bg-fuchsia-500" },
    { block: "Unity Residence", current: 186, capacity: 200, color: "bg-amber-500" },
    { block: "Phoenix Wing", current: 248, capacity: 300, color: "bg-sky-500" },
  ];

  const announcements: Announcement[] = [
    {
      id: "a1",
      title: "Hostel WiFi Upgrade Scheduled",
      body: "Network infrastructure upgrade planned for this weekend. Temporary connectivity issues expected.",
      dept: "IT Department",
      ts: "2024-02-15 • 09:30 AM",
      tone: "info",
    },
    {
      id: "a2",
      title: "Fire Safety Drill – Tomorrow",
      body: "Mandatory fire safety drill at 2:00 PM. All residents must participate.",
      dept: "Safety Committee",
      ts: "2024-02-15 • 02:15 PM",
      tone: "warning",
    },
    {
      id: "a3",
      title: "New Laundry Facility Opened",
      body: "State-of-the-art laundry facility now open in Aurora Block basement. Free for all residents.",
      dept: "Facility Management",
      ts: "2024-02-14 • 11:45 AM",
      tone: "success",
    },
    {
      id: "a4",
      title: "Room Inspection Schedule",
      body: "Monthly room inspections begin next week. Please ensure rooms are clean and tidy.",
      dept: "Hostel Management",
      ts: "2024-02-13 • 04:20 PM",
      tone: "info",
    },
  ];

  const allocations: AllocationRow[] = [
    { id: "STU024001", student: "Sarah Chen", initials: "SC", room: "Room 204A", block: "Aurora Block", checkIn: "2024-01-15", status: "Active" },
    { id: "STU024002", student: "Marcus Johnson", initials: "MJ", room: "Room 156B", block: "Harmony Hall", checkIn: "2024-01-20", status: "Active" },
    { id: "STU024003", student: "Emily Rodriguez", initials: "ER", room: "Room 312C", block: "Serenity Tower", checkIn: "2024-02-01", status: "Pending" },
    { id: "STU024004", student: "David Kim", initials: "DK", room: "Room 089A", block: "Unity Residence", checkIn: "2024-01-25", status: "Active" },
    { id: "STU024005", student: "Lisa Wang", initials: "LW", room: "Room 245D", block: "Phoenix Wing", checkIn: "2024-01-18", status: "Active" },
    { id: "STU024006", student: "Ahmed Hassan", initials: "AH", room: "Room 178B", block: "Aurora Block", checkIn: "2024-01-30", status: "Active" },
  ];

  const maintenance: MaintenanceRow[] = [
    { id: "M-001", title: "Air Conditioning Repair", priority: "High", status: "In Progress", room: "204A", block: "Aurora Block", date: "2024-02-15", note: "AC unit not cooling properly, making loud noises", reporter: "Sarah Chen", assignee: "Mike Wilson" },
    { id: "M-002", title: "Plumbing Issue", priority: "Critical" as any, status: "Open", room: "156B", block: "Harmony Hall", date: "2024-02-16", note: "Water leak in bathroom; urgent attention needed", reporter: "Marcus Johnson" },
    { id: "M-003", title: "Electrical Socket Replacement", priority: "Medium", status: "Completed", room: "312C", block: "Serenity Tower", date: "2024-02-10", note: "Power outlet not working; needs replacement", reporter: "Emily Rodriguez", assignee: "John Davis" },
    { id: "M-004", title: "Window Lock Repair", priority: "Low", status: "Open", room: "089A", block: "Unity Residence", date: "2024-02-14", note: "Window lock mechanism is stuck", reporter: "David Kim" },
    { id: "M-005", title: "Internet Connectivity", priority: "Medium", status: "In Progress", room: "245D", block: "Phoenix Wing", date: "2024-02-13", note: "WiFi signal very weak in room", reporter: "Lisa Wang", assignee: "Tech Support" },
  ];

  const events: EventRow[] = [
    { id: "E-1", title: "Hostel Committee Meeting", daysLeft: 34, time: "10:00 AM", venue: "Aurora Block – Conference", attendees: 12 },
    { id: "E-2", title: "Fire Safety Training", daysLeft: 54, time: "8:00 AM", venue: "Main Auditorium", attendees: 45 },
    { id: "E-3", title: "Cultural Night – Spring Fest", daysLeft: 84, time: "7:00 PM", venue: "Hostel Common Area", attendees: 200 },
    { id: "E-4", title: "Maintenance Staff Training", daysLeft: 63, time: "9:00 AM", venue: "Maintenance Workshop", attendees: 18 },
    { id: "E-5", title: "Student Feedback Session", daysLeft: 19, time: "4:00 PM", venue: "Harmony Hall – Meeting Room", attendees: 25 },
  ];

  const occupancyTotals = useMemo(() => {
    const occupied = occupancy.reduce((s, r) => s + r.current, 0);
    const capacity = occupancy.reduce((s, r) => s + r.capacity, 0);
    const available = capacity - occupied;
    const avgOcc = (occupied / capacity) * 100;
    return { occupied, capacity, available, avgOcc };
  }, [occupancy]);

  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Top strip: hero image + greeting */}
      <div className="flex">
        {/* Sidebar */}
        <HostelSidebar active="dashboard" />

        {/* Main */}
        <div className="flex-1">
          <HostelTopbar />

          {/* HERO */}
          <div
            className="mx-6 mt-4 rounded-2xl overflow-hidden border border-gray-800"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, rgba(30,41,59,.9), rgba(2,6,23,.9)), url('/hostel/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-6 md:p-8">
              <div className="text-sm flex items-center gap-2 text-emerald-300/90">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                System Online • 05:09 PM
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold mt-3">
                Welcome Back,<span className="text-indigo-300"> Alex Manager</span>
              </h1>
              <p className="mt-2 text-gray-300">
                Manage your hostel operations efficiently. Monitor occupancy, handle requests, and ensure student comfort
                with our comprehensive dashboard.
              </p>

              {/* Sub & small stats */}
              <div className="mt-4 text-sm flex flex-wrap items-center gap-4 text-gray-300">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Friday, August 22, 2025</span>
                <span className="inline-flex items-center gap-2"><BuildingIcon /> 5 Hostels Active</span>
                <span className="inline-flex items-center gap-2"><Users className="w-4 h-4" /> 1,247 Students</span>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {kpis.map((k, i) => (
                  <StatCard key={i} icon={k.icon} label={k.label} value={k.value} delta={k.delta} tone={k.tone as any} />
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="mx-6 my-6 grid grid-cols-12 gap-6">
            {/* LEFT WIDE COLUMN */}
            <section className="col-span-12 lg:col-span-8 space-y-6">
              {/* Occupancy Overview */}
              <div className="rounded-xl bg-gray-900/60 border border-gray-800">
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                  <h3 className="font-semibold">Hostel Occupancy Overview</h3>
                  <div className="text-xs rounded-lg bg-gray-800 border border-gray-700 p-1 flex">
                    <button className="px-2 py-1 rounded-md bg-gray-700">7 Days</button>
                    <button className="px-2 py-1">30 Days</button>
                    <button className="px-2 py-1">90 Days</button>
                    <button className="px-2 py-1">Year</button>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {occupancy.map((row) => {
                    const pct = Math.round((row.current / row.capacity) * 100);
                    return (
                      <div key={row.block} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">{row.block}</span>
                          <span className="text-gray-400">{row.current}/{row.capacity} <span className="text-gray-500">•</span> <span className={pct >= 90 ? "text-amber-400" : "text-emerald-400"}>{pct}%</span></span>
                        </div>
                        <ProgressBar value={pct} color={row.color} />
                      </div>
                    );
                  })}

                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div className="text-center rounded-lg bg-gray-800/60 border border-gray-700 p-3">
                      <div className="text-xs text-gray-400">Average Occupancy</div>
                      <div className="text-lg font-semibold">{occupancyTotals.avgOcc.toFixed(1)}%</div>
                    </div>
                    <div className="text-center rounded-lg bg-gray-800/60 border border-gray-700 p-3">
                      <div className="text-xs text-gray-400">Total Occupied</div>
                      <div className="text-lg font-semibold">{occupancyTotals.occupied}</div>
                    </div>
                    <div className="text-center rounded-lg bg-gray-800/60 border border-gray-700 p-3">
                      <div className="text-xs text-gray-400">Available Beds</div>
                      <div className="text-lg font-semibold">{occupancyTotals.available}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Allocation List */}
              <div className="rounded-xl bg-gray-900/60 border border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-800 flex items-center justify-between gap-3">
                  <div className="text-sm text-gray-300">
                    <div className="font-semibold">Student Allocation List</div>
                    <div className="text-gray-400">Current room assignments and student details</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-2 top-2.5" />
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search students, ID, or room…"
                        className="pl-8 pr-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-sm outline-none"
                      />
                    </div>
                    <button className="px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm">New Allocation</button>
                  </div>
                </div>

                <div className="divide-y divide-gray-800">
                  {allocations
                    .filter((a) => (query ? (a.student + a.id + a.room + a.block).toLowerCase().includes(query.toLowerCase()) : true))
                    .map((a) => (
                      <div key={a.id} className="px-4 py-3 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 grid place-items-center text-sm">
                          {a.initials}
                        </div>
                        <div className="flex-1 grid grid-cols-5 gap-2">
                          <div>
                            <div className="font-medium">{a.student}</div>
                            <div className="text-xs text-gray-400">{a.id}</div>
                          </div>
                          <div>
                            <div className="text-sm">{a.room}</div>
                            <div className="text-xs text-gray-400">{a.block}</div>
                          </div>
                          <div className="text-sm">{a.checkIn}</div>
                          <div>
                            <span
                              className={`text-xs px-2 py-1 rounded-md ${
                                a.status === "Active"
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                  : a.status === "Pending"
                                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                  : "bg-gray-600/20 text-gray-300"
                              }`}
                            >
                              {a.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <button className="p-1 hover:text-gray-200"><Edit className="w-4 h-4" /></button>
                            <button className="p-1 hover:text-gray-200"><Trash2 className="w-4 h-4" /></button>
                            <button className="p-1 hover:text-gray-200"><MoreHorizontal className="w-4 h-4" /></button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Maintenance Requests */}
              <div className="rounded-xl bg-gray-900/60 border border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                  <h3 className="font-semibold">Maintenance Requests</h3>
                  <button className="px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm">New Request</button>
                </div>

                <div className="divide-y divide-gray-800">
                  {maintenance.map((m) => (
                    <div key={m.id} className="p-4 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gray-800 border border-gray-700">
                        <Wrench className="w-4 h-4 text-indigo-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="font-medium">{m.title}</div>
                          <span className={`text-[10px] px-2 py-0.5 rounded ${
                            m.priority === "High"
                              ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                              : m.priority === "Medium"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          }`}>{m.priority}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded ${
                            m.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : m.status === "In Progress"
                              ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                              : "bg-gray-600/20 text-gray-300"
                          }`}>{m.status}</span>
                        </div>
                        <div className="mt-1 text-sm text-gray-300">{m.note}</div>
                        <div className="mt-2 text-xs text-gray-400">
                          Room {m.room} • {m.block} • {m.date} • Reported by {m.reporter}
                          {m.assignee ? ` • Assigned to ${m.assignee}` : ""}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <button className="px-2 py-1 rounded-md border border-gray-700 hover:text-gray-200">Assign Technician</button>
                        <button className="p-1 hover:text-gray-200"><MoreHorizontal className="w-4 h-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* RIGHT NARROW COLUMN */}
            <aside className="col-span-12 lg:col-span-4 space-y-6">
              {/* Announcements */}
              <div className="rounded-xl bg-gray-900/60 border border-gray-800">
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                  <div className="font-semibold">Announcements</div>
                  <button className="p-2 rounded-lg bg-gray-800 border border-gray-700">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4 space-y-3">
                  {announcements.map((a) => (
                    <div key={a.id} className="rounded-lg border border-gray-800 bg-gray-800/60 p-3">
                      <div className="flex items-start gap-2">
                        <ToneDot tone={a.tone} />
                        <div className="flex-1">
                          <div className="font-medium">{a.title}</div>
                          <div className="text-sm text-gray-300">{a.body}</div>
                          <div className="mt-1 text-xs text-gray-400">{a.dept} • {a.ts}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-1 text-sm text-indigo-300 hover:text-indigo-200 flex items-center justify-center gap-1">
                    View All Announcements <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="rounded-xl bg-gray-900/60 border border-gray-800">
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                  <div className="font-semibold">Upcoming Events</div>
                  <button className="px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm">Add Event</button>
                </div>
                <div className="p-4 space-y-3">
                  {events.map((e) => (
                    <div key={e.id} className="rounded-lg border border-gray-800 bg-gray-800/60 p-3">
                      <div className="text-sm font-medium">{e.title}</div>
                      <div className="mt-1 text-xs text-gray-400">
                        In {e.daysLeft} day{e.daysLeft !== 1 ? "s" : ""} • {e.time} • {e.venue} • {e.attendees} attendees
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-1 text-sm text-indigo-300 hover:text-indigo-200 flex items-center justify-center gap-1">
                    View Full Calendar <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick Actions & Recent */}
              <div className="rounded-xl bg-gray-900/60 border border-gray-800">
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                  <div className="font-semibold">Quick Actions</div>
                </div>
                <div className="p-4 grid grid-cols-2 gap-3">
                  <QuickItem icon={<Users className="w-4 h-4" />} title="Assign Room" />
                  <QuickItem icon={<CheckCircle2 className="w-4 h-4" />} title="Approve Request" />
                  <QuickItem icon={<Info className="w-4 h-4" />} title="Report Issue" />
                  <QuickItem icon={<FileText className="w-4 h-4" />} title="Generate Report" />
                  <QuickItem icon={<Bell className="w-4 h-4" />} title="Send Announcement" />
                  <QuickItem icon={<AlertIcon />} title="Emergency Alert" />
                </div>

                <div className="px-4 pb-4">
                  <div className="text-sm font-semibold">Recent Actions</div>
                  <ul className="mt-2 text-xs text-gray-300 space-y-1.5">
                    <li className="flex items-center gap-2"><Dot /> Room assigned to Sarah Chen <span className="text-gray-500 ml-auto">5 mins ago</span></li>
                    <li className="flex items-center gap-2"><Dot /> Maintenance request approved <span className="text-gray-500 ml-auto">12 mins ago</span></li>
                    <li className="flex items-center gap-2"><Dot /> Monthly report generated <span className="text-gray-500 ml-auto">1 hour ago</span></li>
                  </ul>
                  <button
                    onClick={() => {
                      localStorage.removeItem("userType");
                      localStorage.removeItem("userData");
                      router.push("/auth/dashboard-login");
                    }}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-sm hover:bg-gray-700"
                  >
                    <LogoutIcon /> Logout
                  </button>
                </div>
              </div>
            </aside>
          </div>

          <div className="pb-8" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Small helper bits (icons/atoms) ---------- */

function ToneDot({ tone }: { tone: Announcement["tone"] }) {
  const map = {
    info: "bg-sky-400",
    warning: "bg-amber-400",
    success: "bg-emerald-400",
    alert: "bg-rose-400",
  } as const;
  return <span className={`mt-1 w-2.5 h-2.5 rounded-full ${map[tone]}`} />;
}

function QuickItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <button className="rounded-lg border border-gray-800 bg-gray-800/60 px-3 py-3 text-left text-sm hover:bg-gray-800 inline-flex items-center gap-2">
      <div className="p-2 rounded-md bg-gray-900 border border-gray-700">{icon}</div>
      <span>{title}</span>
    </button>
  );
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />;
}

function BedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400" fill="currentColor">
      <path d="M4 7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5h4a2 2 0 0 1 2 2v3h-2v-2H4v2H2v-9a3 3 0 0 1 2-2zm8 5V7H7a1 1 0 0 0-1 1v4h6z" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-300" fill="currentColor">
      <path d="M3 22h18v-2H3v2zm2-4h14V2H5v16zm2-2V4h10v12H7z" />
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 2 1 21h22L12 2zm1 15h-2v-2h2v2zm0-4h-2V8h2v5z" />
    </svg>
  );
}
function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M16 13v-2H7V8l-5 4 5 4v-3h9zm3-11H11a2 2 0 0 0-2 2v3h2V4h8v16h-8v-3H9v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
    </svg>
  );
}
