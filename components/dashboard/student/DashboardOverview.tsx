"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Calendar,
  BookOpen,
  Clock,
  TrendingUp,
  FileText,
  Star,
  Bell,
  CalendarDays,
  Send,
  Library,
  UserCheck,
} from "lucide-react"

export function DashboardOverview() {
  const statsCards = [
    {
      title: "GPA",
      value: "3.85",
      icon: BarChart3,
      color: "bg-blue-500",
    },
    {
      title: "Attendance",
      value: "94%",
      icon: Calendar,
      color: "bg-green-500",
    },
    {
      title: "Pending Tasks",
      value: "7",
      icon: Clock,
      color: "bg-orange-500",
    },
    {
      title: "Books Borrowed",
      value: "3",
      icon: BookOpen,
      color: "bg-purple-500",
    },
  ]

  const todaySchedule = [
    { subject: "Mathematics", teacher: "Dr. Smith", time: "8:00 AM", color: "border-l-blue-500" },
    { subject: "Physics", teacher: "Prof. Johnson", time: "9:30 AM", color: "border-l-teal-500" },
    { subject: "Chemistry", teacher: "Ms. Davis", time: "11:00 AM", color: "border-l-orange-500" },
    { subject: "English", teacher: "Mr. Wilson", time: "1:00 PM", color: "border-l-purple-500" },
    { subject: "History", teacher: "Dr. Brown", time: "2:30 PM", color: "border-l-blue-500" },
  ]

  const recentAssignments = [
    { title: "Calculus Problem Set 5", dueDate: "Due Tomorrow", status: "pending", color: "text-red-500" },
    { title: "Physics Lab Report", dueDate: "Due in 3 days", status: "in-progress", color: "text-yellow-500" },
    { title: "English Essay Draft", dueDate: "Due Next Week", status: "completed", color: "text-green-500" },
    { title: "Chemistry Quiz Prep", dueDate: "Due in 2 days", status: "pending", color: "text-red-500" },
  ]

  const announcements = [
    {
      title: "Semester Exam Schedule Released",
      description: "Check your exam dates and prepare accordingly.",
      time: "2 hours ago",
      priority: "high",
    },
    {
      title: "Library Hours Extended",
      description: "Library will be open until 10 PM during exam week.",
      time: "1 day ago",
      priority: "medium",
    },
    {
      title: "New Course Registration Open",
      description: "Register for next semester courses before deadline.",
      time: "3 days ago",
      priority: "low",
    },
  ]

  const upcomingEvents = [
    { title: "Mathematics Final Exam", date: "Dec 15", time: "9:00 AM" },
    { title: "Science Fair Presentation", date: "Dec 18", time: "2:00 PM" },
    { title: "Winter Break Begins", date: "Dec 22", time: "All day" },
  ]

  const quickActions = [
    { title: "Schedule", icon: CalendarDays, color: "bg-blue-500" },
    { title: "Submit Work", icon: Send, color: "bg-green-500" },
    { title: "Library", icon: Library, color: "bg-orange-500" },
    { title: "Contact Teacher", icon: UserCheck, color: "bg-purple-500" },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John Smith!</h1>
        <p className="text-blue-100 text-lg">Ready to continue your learning journey today?</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todaySchedule.map((class_, index) => (
              <div key={index} className={`border-l-4 ${class_.color} pl-4 py-2`}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">{class_.subject}</p>
                    <p className="text-sm text-gray-600">{class_.teacher}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500">{class_.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-orange-600" />
              Announcements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map((announcement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                    <Badge
                      variant={
                        announcement.priority === "high"
                          ? "destructive"
                          : announcement.priority === "medium"
                            ? "default"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {announcement.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{announcement.description}</p>
                  <span className="text-xs text-gray-500">{announcement.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Assignments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-600" />
              Recent Assignments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAssignments.map((assignment, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      assignment.status === "completed"
                        ? "bg-green-500"
                        : assignment.status === "in-progress"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-gray-900">{assignment.title}</p>
                    <p className={`text-sm ${assignment.color}`}>{assignment.dueDate}</p>
                  </div>
                </div>
                <Badge
                  variant={
                    assignment.status === "completed"
                      ? "default"
                      : assignment.status === "in-progress"
                        ? "secondary"
                        : "destructive"
                  }
                  className="text-xs"
                >
                  {assignment.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-blue-600" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg text-center min-w-[60px]">
                  <p className="text-xs font-medium">Dec</p>
                  <p className="text-lg font-bold">{event.date.split(" ")[1]}</p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* AI Study Helper */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-purple-600" />
            AI Study Helper
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:flex items-center gap-4 mb-4">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-2" />
              Explain Calculus
            </Button>
            <Button variant="outline" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Study Tips
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Quiz Me
            </Button>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me anything about your studies..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex flex-col items-center gap-2 hover:bg-gray-50 bg-transparent"
              >
                <div className={`${action.color} p-2 rounded-lg`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium">{action.title}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
