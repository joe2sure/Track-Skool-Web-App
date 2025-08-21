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
import { Download, FileText, TrendingUp, Eye } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

const gradeData = [
  { week: "Week 1", Mathematics: 85, Physics: 78, Chemistry: 92, English: 88, History: 75, Biology: 90 },
  { week: "Week 2", Mathematics: 88, Physics: 82, Chemistry: 89, English: 85, History: 78, Biology: 87 },
  { week: "Week 3", Mathematics: 92, Physics: 85, Chemistry: 94, English: 90, History: 82, Biology: 93 },
  { week: "Week 4", Mathematics: 89, Physics: 88, Chemistry: 91, English: 87, History: 85, Biology: 89 },
  { week: "Week 5", Mathematics: 94, Physics: 90, Chemistry: 96, English: 92, History: 88, Biology: 95 },
  { week: "Week 6", Mathematics: 91, Physics: 87, Chemistry: 93, English: 89, History: 86, Biology: 92 },
  { week: "Week 7", Mathematics: 96, Physics: 92, Chemistry: 98, English: 94, History: 90, Biology: 97 },
  { week: "Week 8", Mathematics: 93, Physics: 89, Chemistry: 95, English: 91, History: 87, Biology: 94 },
]

const completionData = [
  { subject: "Mathematics", completion: 96 },
  { subject: "Physics", completion: 90 },
  { subject: "Chemistry", completion: 100 },
  { subject: "English", completion: 88 },
  { subject: "History", completion: 85 },
  { subject: "Biology", completion: 92 },
]

const gradeDistribution = [
  { name: "A", value: 35, color: "#22c55e" },
  { name: "B", value: 40, color: "#3b82f6" },
  { name: "C", value: 20, color: "#f59e0b" },
  { name: "D", value: 5, color: "#ef4444" },
]

const assignments = [
  {
    assignment: "Calculus Problem Set 5",
    subject: "Mathematics",
    type: "Homework",
    dueDate: "2024-12-16",
    score: "92/100",
    percentage: 92,
    weight: "15%",
    status: "graded",
  },
  {
    assignment: "Physics Lab Report",
    subject: "Physics",
    type: "Lab",
    dueDate: "2024-12-13",
    score: "88/100",
    percentage: 88,
    weight: "25%",
    status: "graded",
  },
  {
    assignment: "Shakespeare Essay",
    subject: "English",
    type: "Essay",
    dueDate: "2024-12-22",
    score: "85/100",
    percentage: 85,
    weight: "30%",
    status: "graded",
  },
  {
    assignment: "Organic Chemistry Quiz",
    subject: "Chemistry",
    type: "Quiz",
    dueDate: "2024-12-17",
    score: "95/100",
    percentage: 95,
    weight: "10%",
    status: "graded",
  },
  {
    assignment: "WWII Research Project",
    subject: "History",
    type: "Project",
    dueDate: "2024-12-28",
    score: "Pending",
    percentage: 0,
    weight: "35%",
    status: "pending",
  },
  {
    assignment: "Cell Biology Practical",
    subject: "Biology",
    type: "Practical",
    dueDate: "2024-12-16",
    score: "89/100",
    percentage: 89,
    weight: "20%",
    status: "graded",
  },
]

const subjects = [
  {
    name: "Mathematics",
    instructor: "Dr. Johnson",
    grade: "A-",
    classAverage: "85%",
    classAverageNum: 85,
    yourPerformance: 92,
    completionRate: 96,
    assignments: 12,
    color: "bg-green-500",
    trend: "up",
  },
  {
    name: "Physics",
    instructor: "Prof. Smith",
    grade: "B+",
    classAverage: "82%",
    classAverageNum: 82,
    yourPerformance: 88,
    completionRate: 90,
    assignments: 10,
    color: "bg-blue-500",
    trend: "up",
  },
  {
    name: "Chemistry",
    instructor: "Dr. Brown",
    grade: "A",
    classAverage: "79%",
    classAverageNum: 79,
    yourPerformance: 95,
    completionRate: 100,
    assignments: 8,
    color: "bg-green-500",
    trend: "stable",
  },
  {
    name: "English",
    instructor: "Ms. Davis",
    grade: "B",
    classAverage: "83%",
    classAverageNum: 83,
    yourPerformance: 85,
    completionRate: 88,
    assignments: 15,
    color: "bg-blue-500",
    trend: "down",
  },
  {
    name: "History",
    instructor: "Prof. Wilson",
    grade: "B-",
    classAverage: "80%",
    classAverageNum: 80,
    yourPerformance: 82,
    completionRate: 85,
    assignments: 9,
    color: "bg-orange-500",
    trend: "up",
  },
  {
    name: "Biology",
    instructor: "Dr. Taylor",
    grade: "A-",
    classAverage: "87%",
    classAverageNum: 87,
    yourPerformance: 91,
    completionRate: 92,
    assignments: 11,
    color: "bg-green-500",
    trend: "stable",
  },
]

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Academic Performance</h1>
              <p className="text-purple-100">Track your grades, progress, and academic achievements</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-3xl md:text-4xl font-bold">3.75</div>
              <div className="text-purple-200">Current GPA</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">120</div>
              <div className="text-purple-200 text-sm">Total Credits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">8</div>
              <div className="text-purple-200 text-sm">A Grades</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">6</div>
              <div className="text-purple-200 text-sm">Pending Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">92%</div>
              <div className="text-purple-200 text-sm">Overall Grade</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Term:</span>
              <Select defaultValue="fall2024">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall2024">Fall 2024</SelectItem>
                  <SelectItem value="spring2024">Spring 2024</SelectItem>
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
                  <SelectItem value="chemistry">Chemistry</SelectItem>
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

        {/* Subject Performance */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subject Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{subject.name}</CardTitle>
                      <p className="text-sm text-gray-600">{subject.instructor}</p>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold ${
                          subject.grade.startsWith("A")
                            ? "text-green-600"
                            : subject.grade.startsWith("B")
                              ? "text-blue-600"
                              : "text-orange-600"
                        }`}
                      >
                        {subject.grade}
                      </div>
                      <div className="text-xs text-gray-500">Grade</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Class Average: {subject.classAverage}</span>
                    <span
                      className={
                        subject.trend === "up"
                          ? "text-green-600"
                          : subject.trend === "down"
                            ? "text-red-600"
                            : "text-gray-600"
                      }
                    >
                      {subject.trend === "up" ? "↗ Up" : subject.trend === "down" ? "↘ Down" : "→ Stable"}
                    </span>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Your Performance</span>
                      <span>{subject.yourPerformance}%</span>
                    </div>
                    <Progress value={subject.yourPerformance} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Completion Rate</span>
                      <span>{subject.completionRate}%</span>
                    </div>
                    <Progress value={subject.completionRate} className="h-2" />
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t">
                    <span>{subject.assignments} assignments</span>
                    <Badge
                      variant={
                        subject.grade.startsWith("A")
                          ? "default"
                          : subject.grade.startsWith("B")
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {subject.grade.startsWith("A") ? "Excellent" : subject.grade.startsWith("B") ? "Good" : "Fair"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Analytics Charts */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Grade Trends Over Time */}
              <div>
                <h3 className="text-lg font-medium mb-4">Grade Trends Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={gradeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis domain={[70, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="Mathematics" stroke="#22c55e" strokeWidth={2} />
                    <Line type="monotone" dataKey="Physics" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="Chemistry" stroke="#8b5cf6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Assignment Completion Rate */}
              <div>
                <h3 className="text-lg font-medium mb-4">Assignment Completion Rate</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={completionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="completion" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Performance vs Class Average */}
              <div>
                <h3 className="text-lg font-medium mb-4">Performance vs Class Average</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={subjects}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[70, 100]} />
                    <Tooltip />
                    <Bar dataKey="yourPerformance" fill="#22c55e" name="Your Performance" />
                    <Bar dataKey="classAverageNum" fill="#94a3b8" name="Class Average" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Grade Distribution */}
              <div>
                <h3 className="text-lg font-medium mb-4">Grade Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={gradeDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {gradeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assignment Grades */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <CardTitle>Assignment Grades</CardTitle>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span className="text-sm text-gray-600">Grade Details</span>
                <input
                  type="text"
                  placeholder="Search assignments..."
                  className="px-3 py-1 border rounded-md text-sm w-48"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Assignment</th>
                    <th className="text-left py-3 px-2">Subject</th>
                    <th className="text-left py-3 px-2">Type</th>
                    <th className="text-left py-3 px-2">Due Date</th>
                    <th className="text-left py-3 px-2">Score</th>
                    <th className="text-left py-3 px-2">Weight</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2 font-medium">{assignment.assignment}</td>
                      <td className="py-3 px-2">{assignment.subject}</td>
                      <td className="py-3 px-2">{assignment.type}</td>
                      <td className="py-3 px-2">{assignment.dueDate}</td>
                      <td className="py-3 px-2">
                        <span
                          className={`font-medium ${
                            assignment.percentage >= 90
                              ? "text-green-600"
                              : assignment.percentage >= 80
                                ? "text-blue-600"
                                : assignment.percentage >= 70
                                  ? "text-orange-600"
                                  : "text-red-600"
                          }`}
                        >
                          {assignment.score}
                        </span>
                        {assignment.percentage > 0 && (
                          <span className="text-sm text-gray-500 ml-1">({assignment.percentage}%)</span>
                        )}
                      </td>
                      <td className="py-3 px-2">{assignment.weight}</td>
                      <td className="py-3 px-2">
                        <Badge variant={assignment.status === "graded" ? "default" : "secondary"}>
                          {assignment.status}
                        </Badge>
                      </td>
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

        {/* Grade Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Grade Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 text-center">
                <FileText className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <h3 className="font-medium mb-1">Transcript Report</h3>
                <p className="text-sm text-gray-600 mb-3">Complete academic transcript with all grades</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium mb-1">Grade Analysis</h3>
                <p className="text-sm text-gray-600 mb-3">Detailed grade breakdown and statistics</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download Excel
                </Button>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium mb-1">Progress Report</h3>
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
