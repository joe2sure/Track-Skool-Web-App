"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, UserX, Clock, TrendingUp, Search, Download, Send, Save, Eye } from "lucide-react"
import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar"
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header"
import { Input } from "@/components/ui/parent/input"
import { Avatar, AvatarFallback, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

export default function TeacherAttendance() {
  const [selectedClass, setSelectedClass] = useState("grade-10a")
  const [selectedDate, setSelectedDate] = useState("2025-03-14")
  const [searchQuery, setSearchQuery] = useState("")
  const [bulkAction, setBulkAction] = useState("")

  const students = [
    {
      id: 1,
      name: "Emma Wilson",
      studentId: "2024001",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      time: "08:45 AM",
      note: "",
    },
    {
      id: 2,
      name: "James Anderson",
      studentId: "2024002",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "absent",
      time: "",
      note: "Sick leave",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      studentId: "2024003",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "late",
      time: "09:10 AM",
      note: "Traffic delay",
    },
    {
      id: 4,
      name: "Michael Chen",
      studentId: "2024004",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      time: "08:30 AM",
      note: "",
    },
    {
      id: 5,
      name: "Olivia Johnson",
      studentId: "2024005",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "excused",
      time: "",
      note: "Doctor appointment",
    },
    {
      id: 6,
      name: "David Brown",
      studentId: "2024006",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      time: "08:55 AM",
      note: "",
    },
  ]

  const [attendanceData, setAttendanceData] = useState(students)

  const updateAttendance = (studentId, status) => {
    setAttendanceData((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? {
              ...student,
              status,
              time:
                status === "present" || status === "late"
                  ? new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                  : "",
            }
          : student,
      ),
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "absent":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "late":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "excused":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const presentCount = attendanceData.filter((s) => s.status === "present").length
  const absentCount = attendanceData.filter((s) => s.status === "absent").length
  const lateCount = attendanceData.filter((s) => s.status === "late").length
  const excusedCount = attendanceData.filter((s) => s.status === "excused").length
  const attendanceRate = (((presentCount + lateCount) / attendanceData.length) * 100).toFixed(1)

  return (
    <div className="flex h-screen bg-gray-50">
      <TeacherSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TeacherHeader />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
              <p className="text-gray-600">Track and manage student attendance records for your classes</p>
            </div>

            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Students Present Today</p>
                    <p className="text-3xl font-bold text-gray-900">{presentCount + lateCount}</p>
                    <p className="text-sm text-green-600">+5 from yesterday</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Absences Today</p>
                    <p className="text-3xl font-bold text-gray-900">{absentCount}</p>
                    <p className="text-sm text-red-600">-2 from yesterday</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <UserX className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Late Arrivals</p>
                    <p className="text-3xl font-bold text-gray-900">{lateCount}</p>
                    <p className="text-sm text-yellow-600">3 this morning</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{attendanceRate}%</p>
                    <p className="text-sm text-green-600">+1.2% from last week</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Attendance Panel */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Select value={selectedClass} onValueChange={setSelectedClass}>
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="grade-10a">Grade 10A - Mathematics</SelectItem>
                          <SelectItem value="grade-10b">Grade 10B - Mathematics</SelectItem>
                          <SelectItem value="grade-11a">Grade 11A - Algebra</SelectItem>
                          <SelectItem value="grade-11b">Grade 11B - Algebra</SelectItem>
                          <SelectItem value="grade-12a">Grade 12A - Calculus</SelectItem>
                        </SelectContent>
                      </Select>

                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-40"
                      />

                      <div className="text-sm text-gray-600">Current Time: 05:12 PM</div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Users className="w-4 h-4 mr-2" />
                        Mark All Present
                      </Button>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        <Send className="w-4 h-4 mr-2" />
                        Send Notifications
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Bulk Actions */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Search students..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                      <Checkbox />
                      <span className="text-sm text-gray-600">Select All</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Bulk Actions:</span>
                      <Button variant="outline" size="sm" className="text-green-600 bg-transparent">
                        Mark Present
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
                        Mark Absent
                      </Button>
                      <Button variant="outline" size="sm" className="text-yellow-600 bg-transparent">
                        Mark Late
                      </Button>
                    </div>
                  </div>

                  {/* Student Roster */}
                  <div className="space-y-3">
                    <div className="text-lg font-semibold mb-4">Student Roster</div>

                    {attendanceData.map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-sm"
                      >
                        <div className="flex items-center space-x-4">
                          <Checkbox />
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium text-gray-900">{student.name}</h4>
                            <p className="text-sm text-gray-600">Student ID: {student.studentId}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          {/* Status Buttons */}
                          <div className="flex space-x-1">
                            <Button
                              variant={student.status === "present" ? "default" : "outline"}
                              size="sm"
                              onClick={() => updateAttendance(student.id, "present")}
                              className={
                                student.status === "present" ? "bg-green-600 hover:bg-green-700" : "hover:bg-green-50"
                              }
                            >
                              Present
                            </Button>
                            <Button
                              variant={student.status === "absent" ? "default" : "outline"}
                              size="sm"
                              onClick={() => updateAttendance(student.id, "absent")}
                              className={
                                student.status === "absent" ? "bg-red-600 hover:bg-red-700" : "hover:bg-red-50"
                              }
                            >
                              Absent
                            </Button>
                            <Button
                              variant={student.status === "late" ? "default" : "outline"}
                              size="sm"
                              onClick={() => updateAttendance(student.id, "late")}
                              className={
                                student.status === "late" ? "bg-yellow-600 hover:bg-yellow-700" : "hover:bg-yellow-50"
                              }
                            >
                              Late
                            </Button>
                            <Button
                              variant={student.status === "excused" ? "default" : "outline"}
                              size="sm"
                              onClick={() => updateAttendance(student.id, "excused")}
                              className={
                                student.status === "excused" ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"
                              }
                            >
                              Excused
                            </Button>
                          </div>

                          {/* Time and Note */}
                          <div className="text-right min-w-[100px]">
                            {student.time && <p className="text-sm font-medium text-gray-900">{student.time}</p>}
                            {student.note && <p className="text-xs text-gray-500">{student.note}</p>}
                          </div>

                          <Button variant="outline" size="sm">
                            Add note
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Today's Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Today's Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Students:</span>
                    <span className="font-medium">{attendanceData.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Present:</span>
                    <span className="font-medium text-green-600">{presentCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Absent:</span>
                    <span className="font-medium text-red-600">{absentCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Late:</span>
                    <span className="font-medium text-yellow-600">{lateCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Excused:</span>
                    <span className="font-medium text-blue-600">{excusedCount}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Attendance Rate:</span>
                      <span className="font-medium text-blue-600">{attendanceRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Trends */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => {
                      const rate = [95, 96, 93, 96, 94][index]
                      return (
                        <div key={day} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{day}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 h-2 bg-gray-200 rounded-full">
                              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${rate}%` }} />
                            </div>
                            <span className="text-sm font-medium">{rate}%</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Save className="w-4 h-4 mr-2" />
                    Save Attendance
                  </Button>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Send className="w-4 h-4 mr-2" />
                    Notify Parents
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View History
                  </Button>
                </CardContent>
              </Card>

              {/* Selected Students */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Selected: 0 students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 text-center py-4">Select students to perform bulk actions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}