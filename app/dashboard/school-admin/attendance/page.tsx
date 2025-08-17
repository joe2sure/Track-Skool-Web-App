"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  UserCheck,
  UserX,
  Clock,
  Search,
  Download,
  Edit,
  FileText,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import { Input } from "@/components/ui/parent/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

const attendanceRecords = [
  {
    id: "STU001",
    student: {
      name: "John Smith",
      id: "STU001",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    class: "Grade 10A",
    date: "2024-01-15",
    period: "Period 1",
    subject: "Mathematics",
    status: "Present",
    time: "08:00 AM",
  },
  {
    id: "STU002",
    student: {
      name: "Emma Johnson",
      id: "STU002",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    class: "Grade 10A",
    date: "2024-01-15",
    period: "Period 1",
    subject: "Mathematics",
    status: "Late",
    time: "08:15 AM",
  },
  {
    id: "STU003",
    student: {
      name: "Michael Brown",
      id: "STU003",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    class: "Grade 10A",
    date: "2024-01-15",
    period: "Period 1",
    subject: "Mathematics",
    status: "Absent",
    time: "-",
  },
  {
    id: "STU004",
    student: {
      name: "Sarah Davis",
      id: "STU004",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    class: "Grade 10B",
    date: "2024-01-15",
    period: "Period 2",
    subject: "English",
    status: "Present",
    time: "09:00 AM",
  },
  {
    id: "STU005",
    student: {
      name: "David Wilson",
      id: "STU005",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    class: "Grade 10B",
    date: "2024-01-15",
    period: "Period 2",
    subject: "English",
    status: "Excused",
    time: "-",
  },
]

export default function AttendancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedPeriod, setSelectedPeriod] = useState("this-week")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="grid lg:flex gap-3 lg:gap-0 items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Attendance</h1>
          <p className="text-gray-600 dark:text-gray-400">Track and manage student attendance records</p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <UserCheck className="w-4 h-4 mr-2" />
            Mark Attendance
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Import
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Attendance</p>
                <p className="text-3xl font-bold">92.5%</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+2.3% from yesterday</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Present Today</p>
                <p className="text-3xl font-bold">2,634</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+45 from yesterday</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Absent Today</p>
                <p className="text-3xl font-bold">213</p>
                <div className="flex items-center mt-2">
                  <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">-18 from yesterday</span>
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
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Late Arrivals</p>
                <p className="text-3xl font-bold">28</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-sm text-red-500">+5 from yesterday</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
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
                placeholder="Search students by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Classes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="grade-10a">Grade 10A</SelectItem>
                <SelectItem value="grade-10b">Grade 10B</SelectItem>
                <SelectItem value="grade-11a">Grade 11A</SelectItem>
                <SelectItem value="grade-11b">Grade 11B</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="present">Present</SelectItem>
                <SelectItem value="absent">Absent</SelectItem>
                <SelectItem value="late">Late</SelectItem>
                <SelectItem value="excused">Excused</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="This Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Records */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">STUDENT</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">CLASS</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">DATE & PERIOD</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">SUBJECT</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">STATUS</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">TIME</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record) => (
                  <tr
                    key={record.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={record.student.avatar || "/placeholder.svg"} alt={record.student.name} />
                          <AvatarFallback>
                            {record.student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{record.student.name}</p>
                          <p className="text-sm text-gray-500">{record.student.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{record.class}</td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white">{record.date}</p>
                        <p className="text-sm text-gray-500">{record.period}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{record.subject}</td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          record.status === "Present"
                            ? "default"
                            : record.status === "Late"
                              ? "secondary"
                              : record.status === "Excused"
                                ? "outline"
                                : "destructive"
                        }
                      >
                        {record.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{record.time}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4 text-blue-600" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <FileText className="w-4 h-4 text-green-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">Showing 1 to 5 of 5 records</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}