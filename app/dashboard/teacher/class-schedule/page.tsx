"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar"
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header"

export default function TeacherClassSchedule() {
  const [viewMode, setViewMode] = useState("calendar") // calendar or list
  const [showAddClassModal, setShowAddClassModal] = useState(false)
  const [selectedGrade, setSelectedGrade] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [currentWeek, setCurrentWeek] = useState("March 10 - 16, 2025")

  const classes = [
    {
      id: 1,
      subject: "Mathematics",
      grade: "Grade 10A",
      room: "Room 204",
      time: "8:00 AM - 9:30 AM",
      day: "Monday",
      students: 28,
      color: "bg-blue-100 border-blue-300 text-blue-800",
    },
    {
      id: 2,
      subject: "Algebra",
      grade: "Grade 11B",
      room: "Room 204",
      time: "10:00 AM - 11:30 AM",
      day: "Tuesday",
      students: 25,
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    },
    {
      id: 3,
      subject: "Algebra",
      grade: "Grade 11C",
      room: "Room 205",
      time: "8:00 AM - 9:30 AM",
      day: "Wednesday",
      students: 24,
      color: "bg-green-100 border-green-300 text-green-800",
    },
    {
      id: 4,
      subject: "Mathematics",
      grade: "Grade 10B",
      room: "Room 204",
      time: "10:00 AM - 11:30 AM",
      day: "Thursday",
      students: 26,
      color: "bg-blue-100 border-blue-300 text-blue-800",
    },
    {
      id: 5,
      subject: "Calculus",
      grade: "Grade 12A",
      room: "Room 204",
      time: "1:00 PM - 2:30 PM",
      day: "Monday",
      students: 22,
      color: "bg-purple-100 border-purple-300 text-purple-800",
    },
    {
      id: 6,
      subject: "Geometry",
      grade: "Grade 10C",
      room: "Room 205",
      time: "1:00 PM - 2:30 PM",
      day: "Wednesday",
      students: 27,
      color: "bg-green-100 border-green-300 text-green-800",
    },
    {
      id: 7,
      subject: "Algebra",
      grade: "Grade 11A",
      room: "Room 206",
      time: "1:00 PM - 2:30 PM",
      day: "Friday",
      students: 23,
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    },
    {
      id: 8,
      subject: "Math Club",
      grade: "Extra Activity",
      room: "Room 204",
      time: "3:00 PM",
      day: "Tuesday",
      students: 15,
      color: "bg-purple-100 border-purple-300 text-purple-800",
    },
  ]

  const timeSlots = ["8:00 AM", "9:30 AM", "10:00 AM", "11:30 AM", "12:00 PM", "1:00 PM", "2:30 PM", "3:00 PM"]

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const getClassesForTimeAndDay = (time, day) => {
    return classes.filter((cls) => cls.time.startsWith(time.slice(0, -3)) && cls.day === day)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <TeacherSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TeacherHeader />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
              <p className="text-gray-600">Manage your weekly class schedule and assignments</p>
            </div>

            <Dialog open={showAddClassModal} onOpenChange={setShowAddClassModal}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Class
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Class</DialogTitle>
                </DialogHeader>
                <AddClassForm onClose={() => setShowAddClassModal(false)} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h2 className="text-lg font-semibold">{currentWeek}</h2>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                Today
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="All Grades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Grades</SelectItem>
                  <SelectItem value="grade-10">Grade 10</SelectItem>
                  <SelectItem value="grade-11">Grade 11</SelectItem>
                  <SelectItem value="grade-12">Grade 12</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Subjects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="algebra">Algebra</SelectItem>
                  <SelectItem value="calculus">Calculus</SelectItem>
                  <SelectItem value="geometry">Geometry</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "calendar" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("calendar")}
                  className="px-3"
                >
                  Calendar
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="px-3"
                >
                  List
                </Button>
              </div>
            </div>
          </div>

          {/* Calendar View */}
          {viewMode === "calendar" && (
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-700 w-24">Time</th>
                        {days.slice(0, 6).map((day, index) => (
                          <th key={day} className="text-left p-4 font-medium text-gray-700">
                            <div>
                              <div className="font-semibold">{day}</div>
                              <div className="text-sm text-gray-500 font-normal">Mar {10 + index}</div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map((time) => (
                        <tr key={time} className="border-b">
                          <td className="p-4 text-sm font-medium text-gray-600 bg-gray-50">{time}</td>
                          {days.slice(0, 6).map((day) => {
                            const dayClasses = getClassesForTimeAndDay(time, day)
                            return (
                              <td key={`${time}-${day}`} className="p-2 align-top">
                                {dayClasses.map((cls) => (
                                  <div key={cls.id} className={`p-3 rounded-lg border-2 mb-2 ${cls.color}`}>
                                    <div className="font-medium text-sm">{cls.subject}</div>
                                    <div className="text-xs opacity-80">
                                      {cls.grade} • {cls.room}
                                    </div>
                                    <div className="text-xs opacity-80">{cls.students} students</div>
                                  </div>
                                ))}
                                {time === "12:00 PM" && (
                                  <div className="text-center text-sm text-gray-500 py-2">Lunch Break</div>
                                )}
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="space-y-4">
              {classes.map((cls) => (
                <Card key={cls.id} className={`border-l-4 ${cls.color.split(" ")[1]}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {cls.subject} - {cls.grade}
                            </h3>
                            <p className="text-gray-600">
                              {cls.day}, {cls.time} • {cls.room}
                            </p>
                            <p className="text-sm text-gray-500">{cls.students} students enrolled</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

function AddClassForm({ onClose }) {
  const [formData, setFormData] = useState({
    subject: "",
    grade: "",
    startTime: "",
    endTime: "",
    room: "",
    dayOfWeek: "",
  })

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Mathematics" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="algebra">Algebra</SelectItem>
              <SelectItem value="calculus">Calculus</SelectItem>
              <SelectItem value="geometry">Geometry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="grade">Grade/Class</Label>
          <Select value={formData.grade} onValueChange={(value) => setFormData({ ...formData, grade: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Grade 10A" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grade-10a">Grade 10A</SelectItem>
              <SelectItem value="grade-10b">Grade 10B</SelectItem>
              <SelectItem value="grade-10c">Grade 10C</SelectItem>
              <SelectItem value="grade-11a">Grade 11A</SelectItem>
              <SelectItem value="grade-11b">Grade 11B</SelectItem>
              <SelectItem value="grade-11c">Grade 11C</SelectItem>
              <SelectItem value="grade-12a">Grade 12A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="startTime">Start Time</Label>
          <Input
            type="time"
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="endTime">End Time</Label>
          <Input
            type="time"
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="room">Room</Label>
        <Input
          placeholder="e.g., Room 204"
          value={formData.room}
          onChange={(e) => setFormData({ ...formData, room: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="dayOfWeek">Day of Week</Label>
        <Select value={formData.dayOfWeek} onValueChange={(value) => setFormData({ ...formData, dayOfWeek: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Monday" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monday">Monday</SelectItem>
            <SelectItem value="tuesday">Tuesday</SelectItem>
            <SelectItem value="wednesday">Wednesday</SelectItem>
            <SelectItem value="thursday">Thursday</SelectItem>
            <SelectItem value="friday">Friday</SelectItem>
            <SelectItem value="saturday">Saturday</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end space-x-3">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Add Class</Button>
      </div>
    </div>
  )
}