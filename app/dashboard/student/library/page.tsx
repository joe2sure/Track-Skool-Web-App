// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Download, Star, Heart, Grid, List, Plus } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

const readingProgress = [
  { week: "Week 1", pages: 45 },
  { week: "Week 2", pages: 62 },
  { week: "Week 3", pages: 38 },
  { week: "Week 4", pages: 71 },
]

const booksBySubject = [
  { name: "Computer Science", value: 35, color: "#3b82f6" },
  { name: "Mathematics", value: 25, color: "#22c55e" },
  { name: "Physics", value: 20, color: "#8b5cf6" },
  { name: "Chemistry", value: 15, color: "#f59e0b" },
  { name: "Literature", value: 5, color: "#ef4444" },
]

const monthlyStats = [
  { month: "Aug", books: 4 },
  { month: "Sep", books: 6 },
  { month: "Oct", books: 3 },
  { month: "Nov", books: 8 },
  { month: "Dec", books: 5 },
]

const currentlyReading = [
  {
    title: "Advanced Calculus",
    author: "Dr. Michael Johnson",
    progress: 45,
    cover: "/placeholder-a83dy.png",
  },
  {
    title: "Quantum Physics Fundamentals",
    author: "Prof. Sarah Chen",
    progress: 78,
    cover: "/quantum-physics-textbook.png",
  },
  {
    title: "Data Structures and Algorithms",
    author: "Dr. Alan Anderson",
    progress: 23,
    cover: "/placeholder-vk7ub.png",
  },
  {
    title: "World Literature Anthology",
    author: "Various Authors",
    progress: 67,
    cover: "/placeholder-dseue.png",
  },
]

const bookCatalog = [
  {
    title: "Advanced Calculus",
    author: "Dr. Michael Johnson",
    rating: 4.8,
    reviews: 124,
    status: "Available",
    cover: "/placeholder-kcbqf.png",
    category: "Mathematics",
  },
  {
    title: "Cell Biology and Genetics",
    author: "Dr. Maria Rodriguez",
    rating: 4.6,
    reviews: 89,
    status: "Available",
    cover: "/placeholder-mb4an.png",
    category: "Biology",
  },
  {
    title: "Data Structures and Algorithms",
    author: "Dr. Alan Anderson",
    rating: 4.9,
    reviews: 156,
    status: "Reserved",
    cover: "/data-structures-algorithms-programming.png",
    category: "Computer Science",
  },
  {
    title: "Organic Chemistry Principles",
    author: "Dr. Robert Williams",
    rating: 4.7,
    reviews: 203,
    status: "Available",
    cover: "/placeholder-48eos.png",
    category: "Chemistry",
  },
  {
    title: "Quantum Physics Fundamentals",
    author: "Prof. Sarah Chen",
    rating: 4.5,
    reviews: 78,
    status: "Available",
    cover: "/placeholder-gu883.png",
    category: "Physics",
  },
  {
    title: "World Literature Anthology",
    author: "Various Authors",
    rating: 4.4,
    reviews: 92,
    status: "Available",
    cover: "/world-literature-anthology.png",
    category: "Literature",
  },
]

const studyResources = [
  {
    title: "Mathematics Study Guide",
    category: "Mathematics",
    type: "Study Guide",
    downloads: 1250,
    rating: 4.8,
    icon: "📊",
  },
  {
    title: "Physics Lab Manual",
    category: "Physics",
    type: "Lab Manual",
    downloads: 890,
    rating: 4.7,
    icon: "⚗️",
  },
  {
    title: "Chemistry Reference Tables",
    category: "Chemistry",
    type: "Reference",
    downloads: 2100,
    rating: 4.9,
    icon: "🧪",
  },
  {
    title: "Programming Practice Problems",
    category: "Computer Science",
    type: "Practice",
    downloads: 1650,
    rating: 4.6,
    icon: "💻",
  },
]

const recommendations = [
  {
    title: "Linear Algebra Applications",
    author: "Dr. Jennifer Martinez",
    rating: 4.7,
    cover: "/linear-algebra-applications.png",
  },
  {
    title: "Modern Physics Concepts",
    author: "Prof. David Thompson",
    rating: 4.6,
    cover: "/placeholder-430av.png",
  },
  {
    title: "Biochemistry Fundamentals",
    author: "Dr. Lisa Brown",
    rating: 4.8,
    cover: "/biochemistry-fundamentals-textbook.png",
  },
]

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Digital Library</h1>
              <p className="text-purple-100">Access thousands of digital resources and study materials</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-3xl md:text-4xl font-bold">15,420</div>
              <div className="text-purple-200">Books Available</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">15,420</div>
              <div className="text-purple-200 text-sm">Books Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">12</div>
              <div className="text-purple-200 text-sm">Currently Borrowed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">24</div>
              <div className="text-purple-200 text-sm">Reading Progress</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">24</div>
              <div className="text-purple-200 text-sm">Favorite Books</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Category:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Format:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="ebook">E-book</SelectItem>
                  <SelectItem value="physical">Physical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Availability:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="reserved">Reserved</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort By:</span>
              <Select defaultValue="title">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="author">Author</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Grid className="w-4 h-4 mr-2" />
              Grid
            </Button>
            <Button variant="outline" size="sm">
              <List className="w-4 h-4 mr-2" />
              List
            </Button>
          </div>
        </div>

        {/* Currently Reading */}
        <Card>
          <CardHeader>
            <CardTitle>Currently Reading</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentlyReading.map((book, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm line-clamp-2 mb-1">{book.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">{book.author}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Progress</span>
                            <span>{book.progress}%</span>
                          </div>
                          <Progress value={book.progress} className="h-1.5" />
                        </div>
                        <Button size="sm" className="w-full mt-3 text-xs">
                          Resume Reading
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Book Catalog */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Book Catalog</CardTitle>
              <div className="text-sm text-gray-600">Showing 6 of 8 books</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {bookCatalog.map((book, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-3">
                    <div className="relative mb-3">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-32 object-cover rounded"
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-1 right-1 p-1 h-auto bg-white/80 hover:bg-white"
                      >
                        <Heart className="w-3 h-3" />
                      </Button>
                    </div>
                    <h3 className="font-medium text-sm line-clamp-2 mb-1">{book.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{book.author}</p>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(book.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">({book.reviews})</span>
                    </div>
                    <Badge variant={book.status === "Available" ? "default" : "secondary"} className="text-xs mb-2">
                      {book.status}
                    </Badge>
                    <Button
                      size="sm"
                      className="w-full text-xs"
                      variant={book.status === "Available" ? "default" : "outline"}
                      disabled={book.status === "Reserved"}
                    >
                      {book.status === "Available" ? "Read" : "Reserved"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Charts */}
        <Card className="bg-slate-800 text-white">
          <CardHeader>
            <CardTitle className="text-white">Reading Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Reading Progress This Month */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Reading Progress This Month</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={readingProgress}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="week" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                    <Line type="monotone" dataKey="pages" stroke="#22c55e" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Books by Subject */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Books by Subject</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={booksBySubject}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {booksBySubject.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Monthly Reading Statistics */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Monthly Reading Statistics</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={monthlyStats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="books" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Study Resources by Subject */}
        <Card>
          <CardHeader>
            <CardTitle>Study Resources by Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {studyResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-3">{resource.icon}</div>
                    <h3 className="font-medium mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{resource.category}</p>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(resource.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">{resource.rating}</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">{resource.downloads} downloads</p>
                    <Button size="sm" className="w-full">
                      <Download className="w-3 h-3 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended for You */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {recommendations.map((book, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm line-clamp-2 mb-1">{book.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">{book.author}</p>
                        <div className="flex items-center gap-1 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(book.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">{book.rating}</span>
                        </div>
                        <Button size="sm" className="w-full text-xs">
                          <Plus className="w-3 h-3 mr-1" />
                          Add to Library
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t">
          <div>
            <h3 className="font-semibold mb-3">Library Hours</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
              <p>Saturday: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 12:00 PM - 6:00 PM</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>New Arrivals</p>
              <p>Popular Collections</p>
              <p>Digital Collections</p>
              <p>Research Databases</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Help & Support</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>How to Borrow</p>
              <p>Research Guide</p>
              <p>Technical Support</p>
              <p>FAQ</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact Info</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>(555) 123-4567</p>
              <p>library@eduportal.edu</p>
              <p>Main Library, 2nd Floor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}