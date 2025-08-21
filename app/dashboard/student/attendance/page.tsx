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
import { Download, FileText, Calendar, TrendingUp, Eye } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

const monthlyTrends = [
  { month: "Jan", attendance: 88 },
  { month: "Feb", attendance: 92 },
  { month: "Mar", attendance: 85 },
  { month: "Apr", attendance: 94 },
  { month: "May", attendance: 90 },
  { month: "Jun", attendance: 96 },
  { month: "Jul", attendance: 89 },
  { month: "Aug", attendance: 93 },
  { month: "Sep", attendance: 91 },
  { month: "Oct", attendance: 95 },
  { month: "Nov", attendance: 88 },
  { month: "Dec", attendance: 92 },
]

const subjectAttendance = [
  { subject: "Mathematics", attendance: 95 },
  { subject: "Physics", attendance: 90 },
  { subject: "Chemistry", attendance: 96 },
  { subject: "English", attendance: 88 },
  { subject: "History", attendance: 92 },
  { subject: "Biology", attendance: 94 },
]

const weeklyTrends = [
  { week: "Week 1", attendance: 90 },
  { week: "Week 2", attendance: 85 },
  { week: "Week 3", attendance: 95 },
  { week: "Week 4", attendance: 88 },
  { week: "Week 5", attendance: 92 },
]

const attendanceDistribution = [
  { name: "Present", value: 85, color: "#22c55e" },
  { name: "Absent", value: 10, color: "#ef4444" },
  { name: "Late", value: 5, color: "#f59e0b" },
]

const subjects = [
  {
    name: "Mathematics",
    percentage: 95,
    lastAttendance: "2024-12-16",
    classesAttended: 28,
    classesMissed: 2,
    trend: "up",
  },
  {
    name: "Physics",
    percentage: 90,
    lastAttendance: "2024-12-15",
    classesAttended: 25,
    classesMissed: 3,
    trend: "up",
  },
  {
    name: "Chemistry",
    percentage: 96,
    lastAttendance: "2024-12-16",
    classesAttended: 24,
    classesMissed: 1,
    trend: "stable",
  },
  {
    name: "English",
    percentage: 88,
    lastAttendance: "2024-12-14",
    classesAttended: 22,
    classesMissed: 3,
    trend: "down",
  },
  {
    name: "History",
    percentage: 92,
    lastAttendance: "2024-12-15",
    classesAttended: 23,
    classesMissed: 2,
    trend: "up",
  },
  {
    name: "Biology",
    percentage: 94,
    lastAttendance: "2024-12-16",
    classesAttended: 23,
    classesMissed: 2,
    trend: "stable",
  },
]

const recentRecords = [
  {
    date: "2024-12-16",
    time: "10:30 AM",
    subject: "Chemistry",
    status: "Present",
    duration: "2 hours",
    location: "Lab 301",
    instructor: "Dr. Brown",
    notes: "Practical session on organic compounds",
  },
  {
    date: "2024-12-16",
    time: "08:00 AM",
    subject: "Biology",
    status: "Present",
    duration: "1.5 hours",
    location: "Room 205",
    instructor: "Dr. Taylor",
    notes: "Cell biology lecture",
  },
  {
    date: "2024-12-15",
    time: "02:00 PM",
    subject: "Mathematics",
    status: "Present",
    duration: "2 hours",
    location: "Room 101",
    instructor: "Dr. Johnson",
    notes: "Calculus problem solving",
  },
  {
    date: "2024-12-15",
    time: "11:00 AM",
    subject: "History",
    status: "Late",
    duration: "1.5 hours",
    location: "Room 302",
    instructor: "Prof. Wilson",
    notes: "World War II discussion",
  },
  {
    date: "2024-12-14",
    time: "09:00 AM",
    subject: "English",
    status: "Absent",
    duration: "1.5 hours",
    location: "Room 105",
    instructor: "Ms. Davis",
    notes: "Medical appointment",
  },
  {
    date: "2024-12-13",
    time: "03:00 PM",
    subject: "Physics",
    status: "Present",
    duration: "2 hours",
    location: "Lab 201",
    instructor: "Prof. Smith",
    notes: "Mechanics lab session",
  },
]

// Generate calendar data for December 2024
const generateCalendarData = () => {
  const daysInMonth = 31
  const startDay = 0 // Sunday (December 1, 2024 was a Sunday)
  const today = 16

  const calendar = []

  // Add empty cells for days before the month starts
  for (let i = 0; i < startDay; i++) {
    calendar.push({ day: null, status: null })
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    let status
    if (day > today) {
      status = "upcoming"
    } else if (day === 3 || day === 13) {
      status = "absent"
    } else if (day === 11) {
      status = "late"
    } else if (day <= today) {
      status = "present"
    }

    calendar.push({ day, status })
  }

  return calendar
}

const calendarData = generateCalendarData()
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function AttendancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-teal-600 text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Attendance Tracking</h1>
              <p className="text-teal-100">Monitor your attendance and academic engagement</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-3xl md:text-4xl font-bold">92%</div>
              <div className="text-teal-200">Overall Attendance</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">12</div>
              <div className="text-teal-200 text-sm">Classes Attended</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">15</div>
              <div className="text-teal-200 text-sm">Total Classes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">95%</div>
              <div className="text-teal-200 text-sm">Class Completion</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">3</div>
              <div className="text-teal-200 text-sm">Pending Reviews</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Month:</span>
              <Select defaultValue="december">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="december">December</SelectItem>
                  <SelectItem value="november">November</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Semester:</span>
              <Select defaultValue="fall">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall">Fall</SelectItem>
                  <SelectItem value="spring">Spring</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Subject:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">View:</span>
              <Select defaultValue="month">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Print
            </Button>
          </div>
        </div>

        {/* Attendance Calendar */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Attendance Calendar</CardTitle>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Absent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span>Late</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-200 rounded"></div>
                  <span>Upcoming</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">December 2024</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-600 p-2">
                  {day}
                </div>
              ))}
              {calendarData.map((item, index) => (
                <div
                  key={index}
                  className={`aspect-square flex items-center justify-center text-sm font-medium rounded-lg ${
                    item.day === null
                      ? ""
                      : item.status === "present"
                        ? "bg-green-500 text-white"
                        : item.status === "absent"
                          ? "bg-red-500 text-white"
                          : item.status === "late"
                            ? "bg-orange-500 text-white"
                            : "bg-purple-200 text-purple-800"
                  }`}
                >
                  {item.day}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject-wise Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>Subject-wise Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{subject.name}</CardTitle>
                      <div className="text-right">
                        <div
                          className={`text-2xl font-bold ${
                            subject.percentage >= 95
                              ? "text-green-600"
                              : subject.percentage >= 90
                                ? "text-blue-600"
                                : "text-orange-600"
                          }`}
                        >
                          {subject.percentage}%
                        </div>
                        <div className="text-xs text-gray-500">Attendance</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Last Attendance</span>
                        <span>{subject.lastAttendance}</span>
                      </div>
                      <Progress value={subject.percentage} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Classes Attended</div>
                        <div className="font-medium">{subject.classesAttended}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Classes Missed</div>
                        <div className="font-medium">{subject.classesMissed}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-sm">Trend</span>
                      <Badge
                        variant={
                          subject.trend === "up" ? "default" : subject.trend === "stable" ? "secondary" : "destructive"
                        }
                      >
                        {subject.trend === "up" ? "↗ Up" : subject.trend === "stable" ? "→ Stable" : "↘ Down"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Charts */}
        <Card className="bg-slate-800 text-white">
          <CardHeader>
            <CardTitle className="text-white">Attendance Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Attendance Trends */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Monthly Attendance Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis domain={[80, 100]} stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                    <Line type="monotone" dataKey="attendance" stroke="#22c55e" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Subject-wise Attendance */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Subject-wise Attendance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={subjectAttendance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="subject" stroke="#9ca3af" />
                    <YAxis domain={[80, 100]} stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="attendance" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Weekly Attendance Trends */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Weekly Attendance Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="week" stroke="#9ca3af" />
                    <YAxis domain={[80, 100]} stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="attendance" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Attendance Distribution */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Attendance Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={attendanceDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {attendanceDistribution.map((entry, index) => (
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
            </div>
          </CardContent>
        </Card>

        {/* Recent Attendance Records */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Attendance Records</CardTitle>
            <p className="text-sm text-gray-600">Attendance History</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Date & Time</th>
                    <th className="text-left py-3 px-2">Subject</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Duration</th>
                    <th className="text-left py-3 px-2">Location</th>
                    <th className="text-left py-3 px-2">Instructor</th>
                    <th className="text-left py-3 px-2">Notes</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRecords.map((record, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2">
                        <div className="font-medium">{record.date}</div>
                        <div className="text-sm text-gray-500">{record.time}</div>
                      </td>
                      <td className="py-3 px-2 font-medium">{record.subject}</td>
                      <td className="py-3 px-2">
                        <Badge
                          variant={
                            record.status === "Present"
                              ? "default"
                              : record.status === "Late"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {record.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2">{record.duration}</td>
                      <td className="py-3 px-2">{record.location}</td>
                      <td className="py-3 px-2">{record.instructor}</td>
                      <td className="py-3 px-2 text-sm text-gray-600">{record.notes}</td>
                      <td className="py-3 px-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <h3 className="font-medium mb-1">Monthly Report</h3>
                <p className="text-sm text-gray-600 mb-3">11/30/2024</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium mb-1">Detailed History</h3>
                <p className="text-sm text-gray-600 mb-3">Complete attendance log</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download Excel
                </Button>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium mb-1">Analytics Report</h3>
                <p className="text-sm text-gray-600 mb-3">Visual progress and performance trends</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Eye className="w-4 h-4 mr-2" />
                  View Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
