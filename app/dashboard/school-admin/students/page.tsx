// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
"use client"

import { SetStateAction, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  UserPlus,
  UserCheck,
  UserX,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
} from "lucide-react"
import { Input } from "@/components/ui/parent/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

const students = [
  {
    id: "STU-2024-001",
    name: "Emma Johnson",
    email: "emma.johnson@email.com",
    grade: "Grade 10",
    status: "Active",
    gpa: 3.85,
    guardian: "Michael Johnson",
    guardianPhone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU-2024-002",
    name: "James Wilson",
    email: "james.wilson@email.com",
    grade: "Grade 11",
    status: "Active",
    gpa: 3.92,
    guardian: "Sarah Wilson",
    guardianPhone: "+1 (555) 234-5678",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU-2024-003",
    name: "Sophia Davis",
    email: "sophia.davis@email.com",
    grade: "Grade 9",
    status: "Active",
    gpa: 3.67,
    guardian: "Robert Davis",
    guardianPhone: "+1 (555) 345-6789",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU-2024-004",
    name: "Alexander Chen",
    email: "alex.chen@email.com",
    grade: "Grade 12",
    status: "Active",
    gpa: 4.0,
    guardian: "Lisa Chen",
    guardianPhone: "+1 (555) 456-7890",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU-2024-005",
    name: "Mia Rodriguez",
    email: "mia.rodriguez@email.com",
    grade: "Grade 8",
    status: "Inactive",
    gpa: 3.45,
    guardian: "Carlos Rodriguez",
    guardianPhone: "+1 (555) 567-8901",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="grid lg:flex gap-3 lg:gap-0 items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Students</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage student enrollment, records, and information</p>
        </div>
        <div className="grid lg:flex gap-3 lg:gap-0 space-x-3">
          <Button variant="outline" className="w-full">
            <Upload className="w-4 h-4 mr-2" />
            Import Students
          </Button>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Students</p>
                <p className="text-3xl font-bold">2,847</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+125</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">New Enrollments</p>
                <p className="text-3xl font-bold">43</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+12</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Students</p>
                <p className="text-3xl font-bold">2,724</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+98</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Applications</p>
                <p className="text-3xl font-bold">23</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-sm text-red-500">-5</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <UserX className="w-6 h-6 text-purple-600" />
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
                placeholder="Search students by name, ID, or email..."
                value={searchTerm}
                onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Grades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="grade-8">Grade 8</SelectItem>
                <SelectItem value="grade-9">Grade 9</SelectItem>
                <SelectItem value="grade-10">Grade 10</SelectItem>
                <SelectItem value="grade-11">Grade 11</SelectItem>
                <SelectItem value="grade-12">Grade 12</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students List */}
      <Card>
        <CardHeader>
          <CardTitle>Students List (10 total)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">STUDENT</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">STUDENT ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">GRADE</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">STATUS</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">GPA</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">GUARDIAN</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{student.name}</p>
                          <p className="text-sm text-gray-500">{student.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{student.id}</td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{student.grade}</td>
                    <td className="py-4 px-4">
                      <Badge variant={student.status === "Active" ? "default" : "secondary"}>{student.status}</Badge>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{student.gpa}</td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{student.guardian}</p>
                        <p className="text-sm text-gray-500">{student.guardianPhone}</p>
                      </div>
                    </td>
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
            <p className="text-sm text-gray-600 dark:text-gray-400">Showing 1 to 10 of 10 students</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
