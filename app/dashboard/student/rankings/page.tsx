import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Trophy,
  TrendingUp,
  TrendingDown,
  Users,
  Download,
  RefreshCw,
  Eye,
  BarChart3,
  User,
  BookOpen,
} from "lucide-react"

const topPerformers = [
  {
    rank: 1,
    name: "Sarah Chen",
    gpa: 4.0,
    points: 2450,
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["Dean's List", "Research Excellence"],
    department: "Computer Science",
  },
  {
    rank: 2,
    name: "Michael Rodriguez",
    gpa: 3.98,
    points: 2420,
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["Academic Excellence", "Innovation Prize"],
    department: "Engineering",
  },
  {
    rank: 3,
    name: "Emily Johnson",
    gpa: 3.95,
    points: 2380,
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["Research Scholar", "Lab Excellence"],
    department: "Biology",
  },
]

const completeRankings = [
  {
    rank: 1,
    name: "David Kim",
    department: "Mathematics",
    gpa: 3.92,
    points: 2350,
    trend: "up",
    trendValue: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 2,
    name: "Lisa Wang",
    department: "Physics",
    gpa: 3.9,
    points: 2340,
    trend: "down",
    trendValue: 1,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 3,
    name: "James Wilson",
    department: "Chemistry",
    gpa: 3.88,
    points: 2290,
    trend: "up",
    trendValue: 3,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 4,
    name: "Maria Garcia",
    department: "Psychology",
    gpa: 3.85,
    points: 2260,
    trend: "neutral",
    trendValue: 0,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 5,
    name: "Alex Thompson",
    department: "History",
    gpa: 3.83,
    points: 2230,
    trend: "up",
    trendValue: 1,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 6,
    name: "Sophie Brown",
    department: "Literature",
    gpa: 3.8,
    points: 2200,
    trend: "down",
    trendValue: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 7,
    name: "Ryan Davis",
    department: "Economics",
    gpa: 3.78,
    points: 2170,
    trend: "up",
    trendValue: 4,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 8,
    name: "Amanda Lee",
    department: "Art",
    gpa: 3.75,
    points: 2140,
    trend: "neutral",
    trendValue: 0,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 9,
    name: "Kevin Martinez",
    department: "Music",
    gpa: 3.73,
    points: 2110,
    trend: "up",
    trendValue: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 10,
    name: "Rachel Green",
    department: "Philosophy",
    gpa: 3.7,
    points: 2080,
    trend: "down",
    trendValue: 3,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 11,
    name: "Daniel White",
    department: "Political Science",
    gpa: 3.68,
    points: 2060,
    trend: "up",
    trendValue: 1,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 12,
    name: "Jessica Taylor",
    department: "Sociology",
    gpa: 3.65,
    points: 2020,
    trend: "neutral",
    trendValue: 0,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 13,
    name: "Christopher Lee",
    department: "Anthropology",
    gpa: 3.63,
    points: 1990,
    trend: "up",
    trendValue: 5,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 14,
    name: "Ashley Clark",
    department: "Geography",
    gpa: 3.6,
    points: 1960,
    trend: "down",
    trendValue: 1,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 15,
    name: "Matthew Hall",
    department: "Geology",
    gpa: 3.58,
    points: 1930,
    trend: "up",
    trendValue: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 16,
    name: "Stephanie Young",
    department: "Environmental Science",
    gpa: 3.55,
    points: 1900,
    trend: "neutral",
    trendValue: 0,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 17,
    name: "Brandon King",
    department: "Business",
    gpa: 3.53,
    points: 1870,
    trend: "up",
    trendValue: 3,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 18,
    name: "Nicole Wright",
    department: "Marketing",
    gpa: 3.5,
    points: 1840,
    trend: "down",
    trendValue: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 19,
    name: "Tyler Scott",
    department: "Finance",
    gpa: 3.48,
    points: 1810,
    trend: "up",
    trendValue: 1,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 20,
    name: "Samantha Adams",
    department: "Accounting",
    gpa: 3.45,
    points: 1780,
    trend: "neutral",
    trendValue: 0,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 21,
    name: "Jonathan Miller",
    department: "Information Systems",
    gpa: 3.43,
    points: 1750,
    trend: "down",
    trendValue: 4,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 22,
    name: "Michelle Brown",
    department: "Communications",
    gpa: 3.4,
    points: 1720,
    trend: "up",
    trendValue: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    rank: 23,
    name: "You",
    department: "Computer Science",
    gpa: 3.45,
    points: 1780,
    trend: "up",
    trendValue: 4,
    avatar: "/placeholder.svg?height=32&width=32",
    isCurrentUser: true,
  },
]

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white p-6 md:p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Academic Rankings</h1>
              <p className="text-purple-100">Track your academic performance and competitive standings</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-3xl md:text-4xl font-bold">#23</div>
              <div className="text-purple-200">Your Current Rank</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">1,247</div>
              <div className="text-purple-200 text-sm">Total Students Ranked</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">#23</div>
              <div className="text-purple-200 text-sm">Your Overall Rank</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">#8</div>
              <div className="text-purple-200 text-sm">Your Best Rank</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">87.5%</div>
              <div className="text-purple-200 text-sm">Average Score</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">3</div>
              <div className="text-purple-200 text-sm">Pending Reviews</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Badge className="bg-white/20 text-white border-white/30">Spring 2024</Badge>
            <span className="ml-2 text-purple-200">Current Period</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Ranking Category:</span>
              <Select defaultValue="overall">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="overall">Overall Rankings</SelectItem>
                  <SelectItem value="course">Course Rankings</SelectItem>
                  <SelectItem value="department">Department Rankings</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Time Period:</span>
              <Select defaultValue="current">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current Semester</SelectItem>
                  <SelectItem value="previous">Previous Semester</SelectItem>
                  <SelectItem value="year">Academic Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Department:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Rankings
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Rankings Tabs */}
        <Tabs defaultValue="overall" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overall" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Overall Rankings
            </TabsTrigger>
            <TabsTrigger value="course" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Course Rankings
            </TabsTrigger>
            <TabsTrigger value="department" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Department Rankings
            </TabsTrigger>
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Personal Progress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overall" className="space-y-6">
            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {topPerformers.map((performer) => (
                    <Card
                      key={performer.rank}
                      className={`relative overflow-hidden ${
                        performer.rank === 1
                          ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50"
                          : performer.rank === 2
                            ? "border-gray-400 bg-gradient-to-br from-gray-50 to-slate-50"
                            : "border-orange-400 bg-gradient-to-br from-orange-50 to-red-50"
                      }`}
                    >
                      <div
                        className={`absolute top-0 right-0 w-16 h-16 ${
                          performer.rank === 1
                            ? "bg-yellow-400"
                            : performer.rank === 2
                              ? "bg-gray-400"
                              : "bg-orange-400"
                        } rounded-bl-full flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-lg">#{performer.rank}</span>
                      </div>
                      <CardContent className="p-6 text-center">
                        <Avatar className="w-16 h-16 mx-auto mb-4">
                          <AvatarImage src={performer.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {performer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-lg mb-1">{performer.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{performer.department}</p>
                        <div className="flex justify-center gap-4 mb-4">
                          <div className="text-center">
                            <div className="font-bold text-lg">{performer.gpa}</div>
                            <div className="text-xs text-gray-500">GPA</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg">{performer.points.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">Points</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {performer.badges.map((badge, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Complete Rankings */}
            <Card>
              <CardHeader>
                <CardTitle>Complete Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Rank</th>
                        <th className="text-left py-3 px-2">Student</th>
                        <th className="text-left py-3 px-2">Department</th>
                        <th className="text-left py-3 px-2">GPA</th>
                        <th className="text-left py-3 px-2">Points</th>
                        <th className="text-left py-3 px-2">Trend</th>
                        <th className="text-left py-3 px-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {completeRankings.map((student) => (
                        <tr
                          key={student.rank}
                          className={`border-b hover:bg-gray-50 ${
                            student.isCurrentUser ? "bg-blue-50 border-blue-200" : ""
                          }`}
                        >
                          <td className="py-3 px-2">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                student.rank <= 3
                                  ? student.rank === 1
                                    ? "bg-yellow-100 text-yellow-800"
                                    : student.rank === 2
                                      ? "bg-gray-100 text-gray-800"
                                      : "bg-orange-100 text-orange-800"
                                  : student.isCurrentUser
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {student.rank}
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex items-center gap-3">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={student.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {student.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className={`font-medium ${student.isCurrentUser ? "text-blue-600" : ""}`}>
                                {student.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">{student.department}</td>
                          <td className="py-3 px-2 font-medium">{student.gpa}</td>
                          <td className="py-3 px-2 font-medium">{student.points.toLocaleString()}</td>
                          <td className="py-3 px-2">
                            <div className="flex items-center gap-1">
                              {student.trend === "up" ? (
                                <TrendingUp className="w-4 h-4 text-green-500" />
                              ) : student.trend === "down" ? (
                                <TrendingDown className="w-4 h-4 text-red-500" />
                              ) : (
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <div className="w-2 h-0.5 bg-gray-400"></div>
                                </div>
                              )}
                              {student.trendValue > 0 && (
                                <span
                                  className={`text-xs ${student.trend === "up" ? "text-green-600" : "text-red-600"}`}
                                >
                                  {student.trendValue}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <BarChart3 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="course">
            <Card>
              <CardContent className="p-8 text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Course Rankings</h3>
                <p className="text-gray-600 mb-4">View your performance rankings within individual courses</p>
                <Button>View Course Rankings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="department">
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Department Rankings</h3>
                <p className="text-gray-600 mb-4">Compare your performance within your department</p>
                <Button>View Department Rankings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="personal">
            <Card>
              <CardContent className="p-8 text-center">
                <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Personal Progress</h3>
                <p className="text-gray-600 mb-4">Track your individual ranking progress over time</p>
                <Button>View Personal Progress</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 mt-8 border-t">
          <div>
            <h3 className="font-semibold mb-3">Ranking Information</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Updated daily at midnight</p>
              <p>Based on academic performance</p>
              <p>Includes all enrolled students</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Ranking Criteria</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>GPA Weight: 70%</p>
              <p>Course Performance: 20%</p>
              <p>Achievements: 10%</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Help & Support</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Ranking FAQ</p>
              <p>Academic Policies</p>
              <p>Grade Appeals</p>
              <p>Technical Support</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Academic Office</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>(555) 123-4567</p>
              <p>academic@eduportal.edu</p>
              <p>Mon-Fri 8AM-5PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}