"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  GraduationCap,
  UserPlus,
  UserCheck,
  UserX,
  Search,
  Download,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
} from "lucide-react"
import { Input } from "@/components/ui/parent/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

const teachers = [
  {
    id: "1",
    name: "Sarah Johnson",
    teacherId: "ID: 1",
    email: "sarah.johnson@school.edu",
    phone: "+1 (555) 123-4567",
    subject: "Mathematics",
    department: "Mathematics",
    status: "Active",
    experience: "8 years",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Michael Chen",
    teacherId: "ID: 2",
    email: "michael.chen@school.edu",
    phone: "+1 (555) 234-5678",
    subject: "Physics",
    department: "Science",
    status: "Active",
    experience: "12 years",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Emily Davis",
    teacherId: "ID: 3",
    email: "emily.davis@school.edu",
    phone: "+1 (555) 345-6789",
    subject: "English Literature",
    department: "English",
    status: "Active",
    experience: "6 years",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Robert Wilson",
    teacherId: "ID: 4",
    email: "robert.wilson@school.edu",
    phone: "+1 (555) 456-7890",
    subject: "History",
    department: "History",
    status: "On Leave",
    experience: "15 years",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    teacherId: "ID: 5",
    email: "lisa.anderson@school.edu",
    phone: "+1 (555) 567-8901",
    subject: "Chemistry",
    department: "Science",
    status: "Active",
    experience: "10 years",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="grid lg:flex gap-3 lg:gap-0 items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Teachers</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage faculty and staff members</p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add New Teacher
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Teachers</p>
                <p className="text-3xl font-bold">147</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+5 this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Teachers</p>
                <p className="text-3xl font-bold">142</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+2 this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">On Leave</p>
                <p className="text-3xl font-bold">5</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-sm text-red-500">+3 this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <UserX className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">New Hires</p>
                <p className="text-3xl font-bold">8</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+2 this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-purple-600" />
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
                placeholder="Search teachers by name, email, or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                <SelectItem value="arts">Arts</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="on-leave">On Leave</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Teachers List */}
      <Card>
        <CardHeader>
          <CardTitle>Teachers List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">TEACHER</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">CONTACT</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                    SUBJECT & DEPARTMENT
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">STATUS</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">EXPERIENCE</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr
                    key={teacher.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                          <AvatarFallback>
                            {teacher.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{teacher.name}</p>
                          <p className="text-sm text-gray-500">{teacher.teacherId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white">{teacher.email}</p>
                        <p className="text-sm text-gray-500">{teacher.phone}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{teacher.subject}</p>
                        <p className="text-sm text-gray-500">{teacher.department}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          teacher.status === "Active"
                            ? "default"
                            : teacher.status === "On Leave"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {teacher.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{teacher.experience}</td>
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
            <p className="text-sm text-gray-600 dark:text-gray-400">Showing 1 to 5 of 5 teachers</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
