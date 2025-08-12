// import { Sidebar } from "@/components/sidebar"
// import { Input } from "@/components/ui/input"
// import { Header } from "@/components/header"
// import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/librarian/header"
import { Sidebar } from "@/components/ui/librarian/sidebar"
import { StatCard } from "@/components/ui/librarian/stat-card"
import { Input } from "@/components/ui/parent/input"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  BookCheck,
  Clock,
  AlertTriangle,
  Search,
  Eye,
  Plus,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react"

export default function Dashboard() {
  const inventoryData = [
    { category: "Science & Technology", count: 2847, percentage: 22.2, color: "bg-blue-500" },
    { category: "Literature & Arts", count: 2156, percentage: 16.8, color: "bg-green-500" },
    { category: "History & Social Studies", count: 1789, percentage: 13.9, color: "bg-yellow-500" },
    { category: "Mathematics", count: 1634, percentage: 12.7, color: "bg-purple-500" },
    { category: "Reference Books", count: 1205, percentage: 9.4, color: "bg-pink-500" },
    { category: "Magazines & Journals", count: 987, percentage: 7.7, color: "bg-cyan-500" },
    { category: "Children's Books", count: 856, percentage: 6.7, color: "bg-indigo-500" },
    { category: "Other Categories", count: 1373, percentage: 10.7, color: "bg-gray-500" },
  ]

  const issuedBooks = [
    {
      student: "Emily Johnson",
      id: "STU2024001",
      book: "Advanced Mathematics for Engineers",
      author: "Dr. Sarah Williams",
      dueDate: "2/15/2024",
      daysLeft: "2 days left",
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      student: "Michael Chen",
      id: "STU2024003",
      book: "Modern Physics Concepts",
      author: "Prof. Robert Brown",
      dueDate: "2/10/2024",
      daysLeft: "4 days left",
      status: "Due Soon",
      statusColor: "bg-yellow-500",
    },
    {
      student: "Sarah Davis",
      id: "STU2024005",
      book: "World History: A Comprehensive Guide",
      author: "Dr. Amanda Wilson",
      dueDate: "2/5/2024",
      daysLeft: "2 days overdue",
      status: "Overdue",
      statusColor: "bg-red-500",
    },
    {
      student: "David Rodriguez",
      id: "STU2024007",
      book: "Introduction to Computer Science",
      author: "Prof. James Lee",
      dueDate: "2/20/2024",
      daysLeft: "7 days left",
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      student: "Lisa Thompson",
      id: "STU2024009",
      book: "English Literature Anthology",
      author: "Dr. Mary Anderson",
      dueDate: "2/12/2024",
      daysLeft: "1 day left",
      status: "Due Soon",
      statusColor: "bg-yellow-500",
    },
  ]

  const recentBooks = [
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell, Peter Norvig",
      category: "Computer Science",
      copies: 3,
      date: "1/5/2024",
      cover: "/placeholder.svg?height=60&width=45",
    },
    {
      title: "Climate Change and Environmental Science",
      author: "Dr. Maria Rodriguez",
      category: "Environmental Science",
      copies: 2,
      date: "1/4/2024",
      cover: "/placeholder.svg?height=60&width=45",
    },
    {
      title: "Modern European History: 1900-2020",
      author: "Prof. James Thompson",
      category: "History",
      copies: 4,
      date: "1/3/2024",
      cover: "/placeholder.svg?height=60&width=45",
    },
    {
      title: "Advanced Calculus and Analysis",
      author: "Dr. Sarah Chen",
      category: "Mathematics",
      copies: 5,
      date: "1/2/2024",
      cover: "/placeholder.svg?height=60&width=45",
    },
    {
      title: "Contemporary World Literature",
      author: "Dr. Elena Vasquez",
      category: "Literature",
      copies: 3,
      date: "1/1/2024",
      cover: "/placeholder.svg?height=60&width=45",
    },
  ]

  const announcements = [
    {
      title: "Library Renovation Update",
      content:
        "The third floor renovation will be completed by March 15th. New study areas and digital workstations will be available.",
      priority: "High Priority",
      time: "1/8/2024",
      type: "info",
    },
    {
      title: "New Database Access",
      content: "Students can now access IEEE Xplore and ACM Digital Library using their student credentials.",
      time: "1/6/2024",
      type: "success",
    },
    {
      title: "Holiday Schedule",
      content: "Library will be closed on February 20th for Presidents Day. Regular hours resume February 21st.",
      time: "1/5/2024",
      type: "warning",
    },
  ]

  const upcomingEvents = [
    {
      title: "Research Workshop: Advanced Database Search",
      location: "Workshop",
      date: "2/8/2024 at 2:00 PM - 3:00 PM",
      room: "Computer Lab A",
      attendees: "15/20 attendees",
      status: "Open",
      progress: 75,
    },
    {
      title: "Book Club: Modern Literature Discussion",
      location: "Book Club",
      date: "2/8/2024 at 6:00 PM - 7:30 PM",
      room: "Reading Room B",
      attendees: "8/12 attendees",
      status: "Open",
      progress: 67,
    },
    {
      title: "Guest Lecture: Future of Digital Libraries",
      location: "Lecture",
      date: "2/12/2024 at 3:00 PM - 4:30 PM",
      room: "Main Auditorium",
      attendees: "45/50 attendees",
      status: "Almost Full",
      progress: 90,
    },
    {
      title: "Study Skills Seminar",
      location: "Seminar",
      date: "2/15/2024 at 1:00 PM - 3:00 PM",
      room: "Conference Room",
      attendees: "12/15 attendees",
      status: "Open",
      progress: 80,
    },
  ]

  const quickActions = [
    { title: "Add New Book", subtitle: "Register a new book to the library system", icon: Plus, color: "bg-blue-600" },
    { title: "Issue Book", subtitle: "Issue a book to a student", icon: BookCheck, color: "bg-green-600" },
    { title: "Return Book", subtitle: "Process book return from student", icon: ArrowRight, color: "bg-orange-600" },
    {
      title: "Generate Reports",
      subtitle: "Create library usage and inventory reports",
      icon: TrendingUp,
      color: "bg-purple-600",
    },
    { title: "Send Reminders", subtitle: "Send overdue notifications to students", icon: Clock, color: "bg-pink-600" },
    { title: "Bulk Operations", subtitle: "Perform bulk book operations", icon: BookOpen, color: "bg-indigo-600" },
  ]

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <Header
          title="Welcome back, Maria Smith"
          subtitle="Head Librarian • Central Campus Library"
          backgroundImage="/placeholder.svg?height=200&width=1200"
        />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Books"
              value={12847}
              change="+156 this month"
              changeType="positive"
              icon={BookOpen}
              color="blue"
            />
            <StatCard
              title="Books Issued Today"
              value={143}
              change="+18% from yesterday"
              changeType="positive"
              icon={BookCheck}
              color="green"
            />
            <StatCard
              title="Pending Returns"
              value={87}
              change="+5% from yesterday"
              changeType="neutral"
              icon={Clock}
              color="orange"
            />
            <StatCard
              title="Overdue Items"
              value={12}
              change="+3 from yesterday"
              changeType="negative"
              icon={AlertTriangle}
              color="purple"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Book Inventory Overview */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Book Inventory Overview</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    View All Categories
                  </Button>
                </div>
                <div className="space-y-4">
                  {inventoryData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-slate-300">{item.category}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-white font-medium">{item.count.toLocaleString()}</span>
                        <span className="text-slate-400 text-sm w-12 text-right">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 font-medium">Total Collection</span>
                      <span className="text-white font-bold">12,847 Books</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Issued Books */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Issued Books</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    View All
                  </Button>
                </div>

                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search by student or book..."
                      className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Student</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Book</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Due Date</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {issuedBooks.map((book, index) => (
                        <tr key={index} className="border-b border-slate-700/50">
                          <td className="py-3 px-4">
                            <div>
                              <div className="text-white font-medium">{book.student}</div>
                              <div className="text-slate-400 text-sm">{book.id}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <div className="text-white font-medium">{book.book}</div>
                              <div className="text-slate-400 text-sm">{book.author}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <div className="text-white">{book.dueDate}</div>
                              <div className="text-slate-400 text-sm">{book.daysLeft}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${book.statusColor}`}
                            >
                              {book.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recently Added Books */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Recently Added Books</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    View All New Arrivals
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentBooks.map((book, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-medium">{book.title}</h3>
                        <p className="text-slate-400 text-sm">{book.author}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-blue-400 text-sm">{book.category}</span>
                          <span className="text-slate-400 text-sm">{book.copies} copies</span>
                        </div>
                      </div>
                      <div className="text-slate-400 text-sm">{book.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Announcements */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Announcements</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="p-4 rounded-lg bg-slate-700/50 border-l-4 border-blue-500">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-medium">{announcement.title}</h3>
                        {announcement.priority && (
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                            {announcement.priority}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 text-sm mb-2">{announcement.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-xs">{announcement.time}</span>
                        <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                          Read More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Library Events */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Upcoming Library Events</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    Manage Events
                  </Button>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-4 rounded-lg bg-slate-700/50">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-medium">{event.title}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            event.status === "Open" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{event.location}</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-slate-300">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-slate-300">
                          <span className="mr-2">📍</span>
                          {event.room}
                        </div>
                        <div className="flex items-center text-sm text-slate-300">
                          <Users className="h-4 w-4 mr-2" />
                          {event.attendees}
                        </div>
                      </div>
                      <div className="mt-3">
                        <Progress value={event.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h2 className="text-xl font-semibold text-white mb-2">Quick Actions</h2>
                <p className="text-slate-400 text-sm mb-6">Frequently used library operations</p>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Button key={index} variant="ghost" className="w-full justify-start p-4 h-auto hover:bg-slate-700">
                      <div className={`p-2 rounded-lg mr-3 ${action.color}`}>
                        <action.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-white font-medium">{action.title}</div>
                        <div className="text-slate-400 text-sm">{action.subtitle}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 ml-auto text-slate-400" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
