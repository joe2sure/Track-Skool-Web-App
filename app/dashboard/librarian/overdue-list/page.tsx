// import { Sidebar } from "@/components/sidebar"
// import { Header } from "@/components/header"
// import { StatCard } from "@/components/stat-card"
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertTriangle,
  DollarSign,
  Bell,
  Users,
  Search,
  Send,
  Mail,
  MessageSquare,
  FileText,
  CreditCard,
  Eye,
  Edit,
} from "lucide-react"
import { Sidebar } from "@/components/ui/librarian/sidebar"
import { Header } from "@/components/ui/librarian/header"
import { StatCard } from "@/components/ui/librarian/stat-card"
import { Input } from "@/components/ui/parent/input"

export default function OverdueListPage() {
  const overdueBooks = [
    {
      student: "Jennifer Lopez",
      email: "jennifer.lopez@school.edu",
      id: "STU2024015",
      book: "Organic Chemistry Fundamentals",
      dueDate: "11/20/2024",
      daysOverdue: 24,
      fineAmount: "$24.00",
      status: "Final Notice",
      statusColor: "bg-red-500",
      lastSent: "12/22/2024",
    },
    {
      student: "Michael Rodriguez",
      email: "michael.rodriguez@school.edu",
      id: "STU2024007",
      book: "Advanced Calculus",
      dueDate: "12/1/2024",
      daysOverdue: 12,
      fineAmount: "$12.00",
      status: "Second Notice",
      statusColor: "bg-orange-500",
      lastSent: "12/26/2024",
    },
    {
      student: "Sarah Davis",
      email: "sarah.davis@school.edu",
      id: "STU2024003",
      book: "World History: A Comprehensive Guide",
      dueDate: "12/5/2024",
      daysOverdue: 8,
      fineAmount: "$8.00",
      status: "First Notice",
      statusColor: "bg-yellow-500",
      lastSent: "12/10/2024",
    },
    {
      student: "Robert Thompson",
      email: "robert.thompson@school.edu",
      id: "STU2024012",
      book: "Digital Marketing Strategies",
      dueDate: "12/8/2024",
      daysOverdue: 5,
      fineAmount: "$5.00",
      status: "Overdue",
      statusColor: "bg-red-600",
      lastSent: "12/8/2024",
    },
  ]

  const reminderActions = [
    { title: "First Notice Due", subtitle: "Ready to send", count: 8, color: "text-yellow-400" },
    { title: "Second Notice Due", subtitle: "Ready to send", count: 5, color: "text-orange-400" },
    { title: "Final Notice Due", subtitle: "Ready to send", count: 3, color: "text-red-400" },
    { title: "Collection Actions", subtitle: "Ready to send", count: 2, color: "text-purple-400" },
  ]

  const recentPayments = [
    { student: "Alice Johnson", amount: "$15.50", date: "2024-02-13", method: "Cash" },
    { student: "Bob Wilson", amount: "$8.00", date: "2024-02-13", method: "Card" },
    { student: "Carol Brown", amount: "$22.75", date: "2024-02-12", method: "Online" },
    { student: "David Lee", amount: "$5.00", date: "2024-02-12", method: "Cash" },
  ]

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <Header
          title="Overdue Books Management"
          subtitle="Track and manage overdue returns with automated reminders"
          backgroundImage="/placeholder.svg?height=200&width=1200"
        />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Overdue"
              value={47}
              change="+5 from yesterday"
              changeType="negative"
              icon={AlertTriangle}
              color="red"
            />
            <StatCard
              title="Total Fines"
              value="$284.50"
              change="+$32.50 today"
              changeType="positive"
              icon={DollarSign}
              color="orange"
            />
            <StatCard title="Reminders Sent" value={23} change="Today" changeType="neutral" icon={Bell} color="blue" />
            <StatCard
              title="Collections Due"
              value={12}
              change="Urgent action needed"
              changeType="negative"
              icon={Users}
              color="purple"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overdue Books */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Overdue Books</h2>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Reminders
                  </Button>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search overdue books..."
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>
                  <Select defaultValue="days-overdue">
                    <SelectTrigger className="w-48 bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="days-overdue">Sort by Days Overdue</SelectItem>
                      <SelectItem value="fine-amount">Sort by Fine Amount</SelectItem>
                      <SelectItem value="student-name">Sort by Student Name</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">
                          <input type="checkbox" className="rounded bg-slate-700 border-slate-600" />
                        </th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Student & Book</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Days Overdue</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Fine Amount</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {overdueBooks.map((item, index) => (
                        <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                          <td className="py-4 px-4">
                            <input type="checkbox" className="rounded bg-slate-700 border-slate-600" />
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <h3 className="text-white font-medium">{item.student}</h3>
                              <p className="text-slate-400 text-sm">
                                {item.id} • {item.email}
                              </p>
                              <p className="text-slate-300 text-sm font-medium">{item.book}</p>
                              <p className="text-slate-500 text-xs">Due: {item.dueDate}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-center">
                              <span className="text-2xl font-bold text-red-400">{item.daysOverdue}</span>
                              <p className="text-slate-400 text-xs">days</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-center">
                              <span className="text-lg font-bold text-orange-400">{item.fineAmount}</span>
                              <p className="text-slate-400 text-xs">fine</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={`${item.statusColor} text-white`}>{item.status}</Badge>
                            <p className="text-slate-400 text-xs mt-1">Last: {item.lastSent}</p>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm" title="View Details">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" title="Send Email">
                                <Mail className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" title="Edit">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Reminder Actions */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h2 className="text-xl font-semibold text-white mb-2">Reminder Actions</h2>
                <p className="text-slate-400 text-sm mb-6">Automated notification system</p>
                <div className="space-y-3">
                  {reminderActions.map((action, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div>
                        <h3 className="text-white font-medium text-sm">{action.title}</h3>
                        <p className="text-slate-400 text-xs">{action.subtitle}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`font-bold ${action.color}`}>{action.count}</span>
                        <Button variant="ghost" size="sm">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Send All Email Reminders
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send SMS Notifications
                  </Button>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Collection Reports
                  </Button>
                </div>

                <div className="mt-6 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-medium">Auto-Reminder Schedule</span>
                  </div>
                  <p className="text-slate-300 text-xs mt-1">Next batch: Tomorrow at 9:00 AM (15 reminders)</p>
                </div>
              </div>

              {/* Fine Management */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h2 className="text-xl font-semibold text-white mb-2">Fine Management</h2>
                <p className="text-slate-400 text-sm mb-6">Payment tracking and collection</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <span className="text-green-400 font-bold text-lg">$1245.75</span>
                    <p className="text-green-400 text-xs">Collected</p>
                  </div>
                  <div className="text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <span className="text-red-400 font-bold text-lg">$284.50</span>
                    <p className="text-red-400 text-xs">Pending</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <span className="text-blue-400 font-bold text-lg">$523.25</span>
                    <p className="text-blue-400 text-xs">This Month</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <span className="text-yellow-400 font-bold text-lg">$89.00</span>
                    <p className="text-yellow-400 text-xs">Waived</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-white font-medium mb-3">Recent Payments</h3>
                  <div className="space-y-2">
                    {recentPayments.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded bg-slate-700/50">
                        <div>
                          <p className="text-white text-sm">{payment.student}</p>
                          <p className="text-slate-400 text-xs">
                            {payment.date} • {payment.method}
                          </p>
                        </div>
                        <span className="text-green-400 font-medium">{payment.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Process Payment
                </Button>

                <div className="mt-4 text-right">
                  <span className="text-xs text-slate-400">Designed by</span>
                  <span className="text-xs text-blue-400 ml-1">Roaddy</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}