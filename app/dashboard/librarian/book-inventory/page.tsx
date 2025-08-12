import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  BookCheck,
  AlertTriangle,
  Grid3X3,
  Search,
  Plus,
  Eye,
  Edit,
  Package,
  TrendingUp,
  Users,
  ArrowUpDown,
} from "lucide-react"

export default function BookInventoryPage() {
  const books = [
    {
      title: "Advanced Mathematics for Engineers",
      author: "Dr. Sarah Williams",
      isbn: "978-0-12456789",
      publisher: "Academic Press, 2023",
      category: "Mathematics",
      availability: "Low Stock",
      availableCount: "3/5 available",
      location: "A-102",
      status: "Available",
    },
    {
      title: "Modern Physics Concepts",
      author: "Prof. Robert Brown",
      isbn: "978-0-98765432",
      publisher: "Science Publications, 2022",
      category: "Science",
      availability: "Available",
      availableCount: "5/8 available",
      location: "B-205",
      status: "Available",
    },
    {
      title: "World History: A Comprehensive Guide",
      author: "Dr. Amanda Wilson",
      isbn: "978-0-45678123",
      publisher: "Historical Books Inc, 2021",
      category: "History",
      availability: "Available",
      availableCount: "8/12 available",
      location: "C-301",
      status: "Available",
    },
    {
      title: "Introduction to Computer Science",
      author: "Prof. James Lee",
      isbn: "978-0-78912456",
      publisher: "Tech Press, 2023",
      category: "Technology",
      availability: "Available",
      availableCount: "12/15 available",
      location: "D-105",
      status: "Available",
    },
    {
      title: "English Literature Anthology",
      author: "Dr. Mary Anderson",
      isbn: "978-0-32145678",
      publisher: "Literary Works, 2020",
      category: "Literature",
      availability: "Out of Stock",
      availableCount: "0/10 available",
      location: "E-203",
      status: "Out of Stock",
    },
  ]

  const recentActivities = [
    {
      type: "New shipment of Science books arrived",
      count: "25 books",
      time: "2 hours ago",
      icon: Package,
      color: "text-green-400",
    },
    {
      type: "Mathematics section reorganized",
      count: "140 books",
      time: "1 day ago",
      icon: ArrowUpDown,
      color: "text-blue-400",
    },
    {
      type: "Damaged books removed from catalog",
      count: "8 books",
      time: "2 days ago",
      icon: AlertTriangle,
      color: "text-red-400",
    },
    {
      type: "Books transferred to main branch",
      count: "32 books",
      time: "3 days ago",
      icon: TrendingUp,
      color: "text-purple-400",
    },
  ]

  const lowStockItems = [
    { title: "Organic Chemistry Basics", stock: "1/8", status: "Only 1 left" },
    { title: "Data Structures & Algorithms", stock: "2/12", status: "Only 2 left" },
    { title: "World War II History", stock: "1/6", status: "Only 1 left" },
    { title: "Shakespeare Complete Works", stock: "2/10", status: "Only 2 left" },
  ]

  const categories = [
    { name: "Science & Technology", count: 2847, color: "bg-blue-500" },
    { name: "Literature & Arts", count: 2156, color: "bg-green-500" },
    { name: "History & Social Studies", count: 1789, color: "bg-yellow-500" },
    { name: "Mathematics", count: 1634, color: "bg-purple-500" },
    { name: "Reference Books", count: 1205, color: "bg-pink-500" },
  ]

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <Header
          title="Book Inventory Management"
          subtitle="Comprehensive catalog and inventory control system"
          backgroundImage="/placeholder.svg?height=200&width=1200"
        />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Collection"
              value={12847}
              change="+156 this month"
              changeType="positive"
              icon={BookOpen}
              color="blue"
            />
            <StatCard
              title="Available Books"
              value={11523}
              change="89.7% available"
              changeType="positive"
              icon={BookCheck}
              color="green"
            />
            <StatCard
              title="Books Issued"
              value={1324}
              change="10.3% issued"
              changeType="neutral"
              icon={Users}
              color="orange"
            />
            <StatCard
              title="Categories"
              value={42}
              change="+3 new categories"
              changeType="positive"
              icon={Grid3X3}
              color="purple"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Book Catalog */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Book Catalog</h2>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Book
                  </Button>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search books, authors, ISBN..."
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48 bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="literature">Literature</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all-status">
                    <SelectTrigger className="w-48 bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="all-status">All</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="low-stock">Low Stock</SelectItem>
                      <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Book Details</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Category</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Availability</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Location</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {books.map((book, index) => (
                        <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                          <td className="py-4 px-4">
                            <div>
                              <h3 className="text-white font-medium">{book.title}</h3>
                              <p className="text-slate-400 text-sm">by {book.author}</p>
                              <p className="text-slate-500 text-xs">ISBN: {book.isbn}</p>
                              <p className="text-slate-500 text-xs">{book.publisher}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                              {book.category}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <Badge
                                variant={
                                  book.availability === "Available"
                                    ? "default"
                                    : book.availability === "Low Stock"
                                      ? "destructive"
                                      : "secondary"
                                }
                                className={
                                  book.availability === "Available"
                                    ? "bg-green-600"
                                    : book.availability === "Low Stock"
                                      ? "bg-yellow-600"
                                      : "bg-red-600"
                                }
                              >
                                {book.availability}
                              </Badge>
                              <p className="text-slate-400 text-sm mt-1">{book.availableCount}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-slate-300">{book.location}</span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
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
              {/* Recent Activities */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h2 className="text-xl font-semibold text-white mb-6">Recent Activities</h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg bg-slate-700 ${activity.color}`}>
                        <activity.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.type}</p>
                        <p className="text-slate-400 text-sm">{activity.count}</p>
                        <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Low Stock Alert */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">Low Stock Alert</h2>
                  <Badge variant="destructive" className="bg-red-600">
                    4 Items
                  </Badge>
                </div>
                <div className="space-y-3">
                  {lowStockItems.map((item, index) => (
                    <div key={index} className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                      <h3 className="text-white font-medium text-sm">{item.title}</h3>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-red-400 text-sm">{item.stock}</span>
                        <span className="text-red-400 text-xs">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Categories</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    + Add Category
                  </Button>
                </div>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        <span className="text-slate-300">{category.name}</span>
                      </div>
                      <span className="text-white font-medium">{category.count.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700 text-right">
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