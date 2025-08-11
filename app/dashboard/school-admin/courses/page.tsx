"use client"

import { SetStateAction, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Plus, CheckCircle, Users, Search, Download, Eye, Edit, Trash2, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/parent/input"

const courses = [
  {
    id: "MATH101",
    name: "Advanced Mathematics",
    code: "MATH101 • 4 Credits",
    instructor: "Sarah Johnson",
    department: "Mathematics",
    status: "Active",
    enrollment: { current: 28, max: 30 },
    schedule: "Mon, Wed, Fri 9:00 AM",
  },
  {
    id: "PHYS201",
    name: "Quantum Physics",
    code: "PHYS201 • 3 Credits",
    instructor: "Michael Chen",
    department: "Science",
    status: "Active",
    enrollment: { current: 22, max: 25 },
    schedule: "Tue, Thu 2:00 PM",
  },
  {
    id: "ENG301",
    name: "Modern Literature",
    code: "ENG301 • 3 Credits",
    instructor: "Emily Davis",
    department: "English",
    status: "Active",
    enrollment: { current: 35, max: 40 },
    schedule: "Mon, Wed 11:00 AM",
  },
  {
    id: "HIST202",
    name: "World History",
    code: "HIST202 • 3 Credits",
    instructor: "Robert Wilson",
    department: "History",
    status: "Suspended",
    enrollment: { current: 0, max: 35 },
    schedule: "Tue, Thu 10:00 AM",
  },
  {
    id: "CHEM301",
    name: "Organic Chemistry",
    code: "CHEM301 • 4 Credits",
    instructor: "Lisa Anderson",
    department: "Science",
    status: "Active",
    enrollment: { current: 18, max: 20 },
    schedule: "Mon, Wed, Fri 1:00 PM",
  },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Courses</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage academic courses and curriculum</p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Course
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Courses</p>
                <p className="text-3xl font-bold">68</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+4 this semester</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Courses</p>
                <p className="text-3xl font-bold">62</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+2 this semester</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</p>
                <p className="text-3xl font-bold">6</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+2 this semester</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Enrollments</p>
                <p className="text-3xl font-bold">1,847</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+125 this semester</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search courses by name, code, or instructor..."
                value={searchTerm}
                onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Courses List */}
      <Card>
        <CardHeader>
          <CardTitle>Courses List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">COURSE</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">INSTRUCTOR</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">DEPARTMENT</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">STATUS</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">ENROLLMENT</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">SCHEDULE</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr
                    key={course.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{course.name}</p>
                        <p className="text-sm text-gray-500">{course.code}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{course.instructor}</td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{course.department}</td>
                    <td className="py-4 px-4">
                      <Badge variant={course.status === "Active" ? "default" : "destructive"}>{course.status}</Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>
                            {course.enrollment.current}/{course.enrollment.max}
                          </span>
                        </div>
                        <Progress value={(course.enrollment.current / course.enrollment.max) * 100} className="h-2" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{course.schedule}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4 text-blue-600" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4 text-green-600" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">Showing 1 to 5 of 5 courses</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}