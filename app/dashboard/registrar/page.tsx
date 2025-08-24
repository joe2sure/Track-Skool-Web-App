// import StatCard from "@/components/dashboard/registrar/StatCard"
// import TrendChart from "@/components/dashboard/registrar/TrendChart"
// import RecentApplications from "@/components/dashboard/registrar/RecentApplications"
// import RequestsTable from "@/components/dashboard/registrar/RequestsTable"
// import Announcements from "@/components/dashboard/registrar/Announcements"
// import Deadlines from "@/components/dashboard/registrar/Deadlines"
// import QuickActions from "@/components/dashboard/registrar/QuickActions"
"use client"

import Announcements from "@/components/dashboard/registrar/announcements"
import Deadlines from "@/components/dashboard/registrar/deadlines"
import QuickActions from "@/components/dashboard/registrar/quick-actions"
import RecentApplications from "@/components/dashboard/registrar/recent-applications"
import RequestsTable from "@/components/dashboard/registrar/request-table"
import StatCard from "@/components/dashboard/registrar/stat-card"
import TrendChart from "@/components/dashboard/registrar/trend-chart"
// import { StatCard } from "@/components/ui/librarian/stat-card"
import { Bell, CalendarDays, CheckCircle2, ClipboardList, FileText, FolderOpenDot, Gauge, Inbox, LifeBuoy, Megaphone, ShieldCheck, UploadCloud, Users } from "lucide-react"

export default function RegistrarDashboardPage() {
  // --- Dummy data for the registrar dashboard ---
  const stats = [
    { label: "Total Students", value: 2847, delta: "+12% vs last month", icon: Users, tone: "blue" as const },
    { label: "New Applications", value: 184, delta: "+8% vs last month", icon: Inbox, tone: "green" as const },
    { label: "Pending Approvals", value: 47, delta: "-15% vs last month", icon: ClipboardList, tone: "amber" as const },
    { label: "Documents Processed", value: 1293, delta: "+24% vs last month", icon: FileText, tone: "violet" as const },
  ]

  const applications = [
    { name: "Sarah Johnson", program: "Computer Science", gpa: 3.8, status: "Pending" as const },
    { name: "Michael Chen", program: "Business Administration", gpa: 3.9, status: "Review" as const },
    { name: "Emily Rodriguez", program: "Psychology", gpa: 3.7, status: "Approved" as const },
    { name: "David Thompson", program: "Engineering", gpa: 3.6, status: "Pending" as const },
    { name: "Lisa Wang", program: "Medicine", gpa: 4.0, status: "Review" as const },
  ]

  const requests = [
    { type: "Official Transcript", student: "John Davis", id: "STU2021001", to: "Harvard University", date: "1/14/2024", status: "Processing" as const },
    { type: "Certificate of Enrollment", student: "Maria Garcia", id: "STU2020045", to: "To: Employment Verification", date: "1/13/2024", status: "Pending" as const },
    { type: "Grade Report", student: "Alex Kumar", id: "STU2019078", to: "To: Scholarship Committee", date: "1/12/2024", status: "Completed" as const },
    { type: "Official Transcript", student: "Sophie Turner", id: "STU2021156", to: "To: Stanford University", date: "1/10/2024", status: "Pending" as const },
  ]

  const announcements = [
    { title: "Registration Deadline Extension", desc: "Fall 2024 registration deadline has been extended to March 15th.", tag: "Academic Affairs", date: "1/15/2024", tone: "rose" as const },
    { title: "New Grading System Update", desc: "Updated grading system will be implemented starting next term.", tag: "IT Department", date: "1/14/2024", tone: "sky" as const },
    { title: "Commencement Planning", desc: "Committee meeting scheduled for January 20th at 2pm.", tag: "Events Committee", date: "1/13/2024", tone: "violet" as const },
    { title: "Student Record System Maintenance", desc: "Maintenance on Jan 18th from 2AM to 6AM.", tag: "IT Support", date: "1/12/2024", tone: "amber" as const },
  ]

  const deadlines = [
    { title: "Fall 2024 Registration", meta: "Last day for student registration", left: "2 months", date: "3/15/2024" },
    { title: "Grade Submission", meta: "Final grade due: Spring 2024", left: "5 weeks", date: "2/28/2024" },
    { title: "Transcript Processing", meta: "Process pending transcript requests", left: "3 weeks", date: "2/07/2024" },
    { title: "Alumni Records Update", meta: "Update alumni contact information", left: "2 weeks", date: "2/10/2024" },
    { title: "Scholarship Applications", meta: "Review scholarship applications", left: "3 months", date: "4/10/2024" },
  ]

  const quickActions = [
    { icon: ShieldCheck, label: "Approve Admission", meta: "Review and approve pending applications", cta: "Process 12 items" },
    { icon: FileText, label: "Process Transcript", meta: "Handle transcript requests", cta: "Process 8 items" },
    { icon: FolderOpenDot, label: "Verify Records", meta: "Verify student academic records", cta: "Process 5 items" },
    { icon: Gauge, label: "Generate Report", meta: "Create enrollment & academic reports", cta: "Start" },
  ]

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left – main content */}
      <div className="col-span-12 xl:col-span-9 space-y-6">
        {/* Greeting banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/placeholder.svg?height=320&width=1200')" }} />
          <div className="relative p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold">Welcome back, Dr. Maria Rodriguez</h1>
                <p className="mt-2 text-sm md:text-base text-indigo-100">
                  Manage student records, process applications, and oversee academic administration with ease
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-indigo-100/90">
                  <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1"><CalendarDays className="h-4 w-4" /> Sunday, August 24, 2025</span>
                  <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1"><Megaphone className="h-4 w-4" /> Academic Year 2024-2025</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="h-28 w-40 rounded-xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Enrollment Trends */}
        <div className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Enrollment Trends</h3>
            <div className="rounded-md bg-slate-700/60 px-2 py-1 text-xs">Monthly</div>
          </div>
          <div className="mt-4">
            <TrendChart />
          </div>
        </div>

        {/* Recent Applications */}
        <RecentApplications applications={applications} />

        {/* Transcript & Certificate Requests */}
        <RequestsTable rows={requests} />
      </div>

      {/* Right – side rail */}
      <div className="col-span-12 xl:col-span-3 space-y-6">
        <Announcements items={announcements} />
        <Deadlines items={deadlines} />
        <QuickActions items={quickActions} />
      </div>
    </div>
  )
}
