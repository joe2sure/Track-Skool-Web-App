"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/parent/avatar";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  Calendar,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  MessageSquare,
  Users,
  BookOpen,
  Phone,
  FileText,
  Video,
  Download,
  HelpCircle,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const gpaData = [
  { month: "Jan", gpa: 3.2 },
  { month: "Feb", gpa: 3.4 },
  { month: "Mar", gpa: 3.6 },
  { month: "Apr", gpa: 3.8 },
  { month: "May", gpa: 3.85 },
]

const attendanceCalendar = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31],
]

const getAttendanceStatus = (day: number) => {
  if ([7, 14, 15, 21, 22].includes(day)) return "absent"
  if ([10, 17, 24].includes(day)) return "late"
  if ([28, 29, 30, 31].includes(day)) return "holiday"
  return "present"
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "present":
      return "bg-green-500"
    case "absent":
      return "bg-red-500"
    case "late":
      return "bg-orange-500"
    case "holiday":
      return "bg-blue-500"
    default:
      return "bg-gray-500"
  }
}

export default function ParentDashboard() {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
        {/* Main Content */}
        <div className="flex-1 space-y-4 lg:space-y-6 min-w-0">
          {/* Welcome Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl lg:rounded-2xl p-4 lg:p-8 relative overflow-hidden w-full">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-3xl font-bold text-white">Good Afternoon, Jennifer!</h1>
                  <p className="text-sm lg:text-base text-purple-100">Welcome back to your family's education hub</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-white font-medium mb-2 text-sm lg:text-base">Today's Highlights</h3>
                  <div className="space-y-2 text-xs lg:text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-purple-100">Emma's Math test: 92%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-purple-100">Parent meeting tomorrow 2PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-purple-100">2 new announcements</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-white font-medium mb-2 text-sm lg:text-base">Quick Stats</h3>
                  <div className="space-y-2 text-xs lg:text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-100">Overall GPA</span>
                      <span className="text-white font-semibold">3.85</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-100">Attendance</span>
                      <span className="text-white font-semibold">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-100">Assignments</span>
                      <span className="text-white font-semibold">5 pending</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:col-span-2 lg:col-span-1">
                  <h3 className="text-white font-medium mb-2 text-sm lg:text-base">This Week</h3>
                  <div className="space-y-2 text-xs lg:text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      <span className="text-purple-100">3 assignments due</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-purple-100">2 teacher messages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                      <span className="text-purple-100">1 upcoming event</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 w-full">
            {/* Children Overview */}
            <Card className="bg-slate-800 border-slate-700 lg:col-span-2 xl:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg lg:text-xl flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Children Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="w-10 h-10 lg:w-12 lg:h-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>EM</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-medium text-sm lg:text-base">Emma Johnson</h3>
                        <p className="text-slate-400 text-xs lg:text-sm">Grade 8 • Class 8A</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs lg:text-sm">
                      <div>
                        <p className="text-slate-400">GPA</p>
                        <p className="text-white font-semibold">3.85</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Attendance</p>
                        <p className="text-white font-semibold">96%</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs flex-1">
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="w-10 h-10 lg:w-12 lg:h-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-medium text-sm lg:text-base">Sarah Johnson</h3>
                        <p className="text-slate-400 text-xs lg:text-sm">Grade 5 • Class 5B</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs lg:text-sm">
                      <div>
                        <p className="text-slate-400">GPA</p>
                        <p className="text-white font-semibold">3.92</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Attendance</p>
                        <p className="text-white font-semibold">98%</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs flex-1">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-slate-700 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium">Assignment Submitted</p>
                      <p className="text-slate-400 text-xs">Emma submitted Math homework</p>
                      <p className="text-slate-500 text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-700 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium">Test Score Updated</p>
                      <p className="text-slate-400 text-xs">Sarah scored 95% in Science</p>
                      <p className="text-slate-500 text-xs">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-700 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium">Parent Meeting</p>
                      <p className="text-slate-400 text-xs">Scheduled for tomorrow</p>
                      <p className="text-slate-500 text-xs">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 w-full">
            {/* GPA Trend */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  GPA Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 lg:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={gpaData}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        domain={[3.0, 4.0]}
                      />
                      <Line
                        type="monotone"
                        dataKey="gpa"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Attendance Calendar */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Attendance Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-400 mb-2">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                      <div key={day} className="p-1 font-medium">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {attendanceCalendar.map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-cols-7 gap-1">
                        {week.map((day) => {
                          const status = getAttendanceStatus(day)
                          return (
                            <div
                              key={day}
                              className={`w-6 h-6 lg:w-8 lg:h-8 rounded text-xs lg:text-sm flex items-center justify-center text-white ${getStatusColor(status)}`}
                            >
                              {day}
                            </div>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span className="text-slate-300">Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span className="text-slate-300">Absent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded"></div>
                      <span className="text-slate-300">Late</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span className="text-slate-300">Holiday</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-80 xl:w-96 lg:flex-shrink-0 space-y-4 lg:space-y-6">
          {/* Messages */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">Messages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-slate-700 rounded-lg">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback>RC</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm font-medium truncate">Ms. Rebecca Clark</span>
                    <span className="text-slate-400 text-xs flex-shrink-0 ml-2">1h ago</span>
                  </div>
                  <p className="text-slate-300 text-xs font-medium">Emma's Progress Update</p>
                  <p className="text-slate-400 text-xs truncate">Emma has shown excellent improv...</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-700 rounded-lg">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback>DW</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm font-medium truncate">Mr. David Wilson</span>
                    <span className="text-slate-400 text-xs flex-shrink-0 ml-2">3h ago</span>
                  </div>
                  <p className="text-slate-300 text-xs font-medium">Mathematics Assignment</p>
                  <p className="text-slate-400 text-xs truncate">Sarah's math homework was outsta...</p>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">View all messages</Button>
            </CardContent>
          </Card>

          {/* Latest Announcements */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Latest Announcements
              </CardTitle>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="flex items-center justify-between flex-1">
                    <span className="text-white text-sm font-medium">Parent-Teacher Conference</span>
                    <span className="text-slate-400 text-xs">2h ago</span>
                  </div>
                </div>
                <p className="text-slate-300 text-xs mb-3">
                  Individual meetings scheduled for next week. Please check your assigned time slots and confirm
                  attendance.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-xs flex-1">
                    Confirm Attendance
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-500 text-slate-300 bg-transparent text-xs flex-1"
                  >
                    View Schedule
                  </Button>
                </div>
              </div>
              <div className="p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <div className="flex items-center justify-between flex-1">
                    <span className="text-white text-sm font-medium">Science Fair Winners</span>
                    <span className="text-slate-400 text-xs">1 day ago</span>
                  </div>
                </div>
                <p className="text-slate-300 text-xs">Congratulations to all participants!</p>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Events
              </CardTitle>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                View Calendar
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-white text-sm font-medium">Monthly Achievement Ceremony</span>
                </div>
                <p className="text-slate-400 text-xs mb-2">Thu, May 30 • 11:00 AM • School Auditorium</p>
                <p className="text-slate-300 text-xs mb-3">
                  Recognizing outstanding student achievements and contributions.
                </p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs w-full sm:w-auto">
                  Sync Calendar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Quick Actions
              </CardTitle>
              <p className="text-slate-400 text-sm">Access frequently used features</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                <Button className="bg-red-600 hover:bg-red-700 text-xs p-3 h-auto min-h-[4rem] flex flex-col items-center justify-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-medium">Pay Fees</span>
                  <span className="text-xs opacity-75">$1,250 Due</span>
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-xs p-3 h-auto min-h-[4rem] flex flex-col items-center justify-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Contact Teacher</span>
                  <span className="text-xs opacity-75">Send message</span>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-xs p-3 h-auto min-h-[4rem] flex flex-col items-center justify-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">View Timetable</span>
                  <span className="text-xs opacity-75">Check schedules</span>
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-xs p-3 h-auto min-h-[4rem] flex flex-col items-center justify-center gap-1">
                  <FileText className="w-4 h-4" />
                  <span className="font-medium">Assignments</span>
                  <span className="text-xs opacity-75">5 Pending</span>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-xs p-3 h-auto min-h-[4rem] flex flex-col items-center justify-center gap-1">
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Download Reports</span>
                  <span className="text-xs opacity-75">Progress reports</span>
                </Button>
                <Button className="bg-teal-600 hover:bg-teal-700 text-xs p-3 h-auto min-h-[4rem] flex flex-col items-center justify-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span className="font-medium">Book Meeting</span>
                  <span className="text-xs opacity-75">Schedule</span>
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-xs p-3 h-auto min-h-[4rem] flex flex-col items-center justify-center gap-1">
                  <Video className="w-4 h-4" />
                  <span className="font-medium">View Gallery</span>
                  <span className="text-xs opacity-75">Photos & videos</span>
                </Button>
                <Button className="bg-pink-600 hover:bg-pink-700 text-xs p-3 h-auto min-h-[4rem] flex flex-col items-center justify-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Emergency</span>
                  <span className="text-xs opacity-75">Urgent matters</span>
                </Button>
              </div>

              <div className="text-center pt-2">
                <p className="text-slate-400 text-xs mb-3">Need help with something else?</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="bg-slate-600 hover:bg-slate-500 text-xs flex-1">
                    <HelpCircle className="w-3 h-3 mr-1" />
                    Help Center
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs flex-1">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}





// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
// import { Button } from "@/components/ui/Button";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/parent/avatar";
// import {
//   Bell,
//   Calendar,
//   DollarSign,
//   AlertTriangle,
//   TrendingUp,
//   MessageSquare,
//   Users,
//   BookOpen,
//   CheckCircle,
//   Phone,
//   FileText,
//   Video,
//   Download,
//   HelpCircle,
// } from "lucide-react";
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

// const gpaData = [
//   { month: "Jan", gpa: 3.2 },
//   { month: "Feb", gpa: 3.4 },
//   { month: "Mar", gpa: 3.6 },
//   { month: "Apr", gpa: 3.8 },
//   { month: "May", gpa: 3.85 },
// ];

// const attendanceCalendar = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
//   [26, 27, 28, 29, 30, 31],
// ];

// const getAttendanceStatus = (day: number) => {
//   if ([7, 14, 15, 21, 22].includes(day)) return "absent";
//   if ([10, 17, 24].includes(day)) return "late";
//   if ([28, 29, 30, 31].includes(day)) return "holiday";
//   return "present";
// };

// const getStatusColor = (status: string) => {
//   switch (status) {
//     case "present":
//       return "bg-green-500";
//     case "absent":
//       return "bg-red-500";
//     case "late":
//       return "bg-orange-500";
//     case "holiday":
//       return "bg-blue-500";
//     default:
//       return "bg-gray-500";
//   }
// };

// export default function ParentDashboard() {
//   return (
//     <div className="min-h-screen bg-slate-900 text-white ">
//       <div className="grid grid-cols-1 lg:flex">
//         {/* Main Content */}
//         <div className="flex-1 px-0 py-6 lg:p-6 space-y-6">
//           {/* Welcome Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 lg:p-8 relative overflow-hidden">
//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="lg:w-12 lg:h-12 w-10 bg-white/20 rounded-xl flex items-center justify-center">
//                   <Users className="lg:w-6 w-4 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h1 className="text-xl lg:text-3xl font-bold text-white">
//                     Good Afternoon, Jennifer!
//                   </h1>
//                   <p className="text-purple-100">
//                     Welcome back to your family's education hub
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//                   <h3 className="text-white font-medium mb-2">
//                     Today's Highlights
//                   </h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                       <span className="text-purple-100">
//                         Emma's Math test: 92%
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                       <span className="text-purple-100">
//                         Parent meeting tomorrow 2PM
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                       <span className="text-purple-100">
//                         2 new announcements
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//                   <h3 className="text-white font-medium mb-2">Quick Stats</h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="text-purple-100">Overall GPA</div>
//                     <div className="text-purple-100">Attendance</div>
//                     <div className="text-purple-100">Active Children</div>
//                   </div>
//                 </div>

//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//                   <h3 className="text-white font-medium mb-2">Quick Actions</h3>
//                   <div className="space-y-2">
//                     <Button
//                       size="sm"
//                       className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
//                     >
//                       View Messages
//                     </Button>
//                     <Button
//                       size="sm"
//                       className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
//                     >
//                       Pay Fees
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <Card className="bg-slate-800 border-slate-700">
//               <CardContent className="py-6 px-3">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-400 text-sm">Overall GPA</p>
//                     <p className="text-3xl font-bold text-white">3.85</p>
//                     <p className="text-green-400 text-sm">
//                       +6.2 from last semester
//                     </p>
//                   </div>
//                   <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
//                     <TrendingUp className="w-6 h-6 text-green-400" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-slate-800 border-slate-700">
//               <CardContent className="py-6 px-3">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-400 text-sm">Attendance Rate</p>
//                     <p className="text-3xl font-bold text-white">96.2%</p>
//                     <p className="text-blue-400 text-sm">
//                       Excellent attendance this month
//                     </p>
//                   </div>
//                   <div className="w-10 h-10 bg-blue-500/20 p-2 rounded-xl flex items-center justify-center">
//                     <Calendar className="w-6 h-6 text-blue-400" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-slate-800 border-slate-700">
//               <CardContent className="py-6 px-3">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-400 text-sm">Pending Fees</p>
//                     <p className="text-3xl font-bold text-white">$1,250</p>
//                     <p className="text-orange-400 text-sm">Due in 5 days</p>
//                   </div>
//                   <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
//                     <DollarSign className="w-6 h-6 text-orange-400" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-slate-800 border-slate-700">
//               <CardContent className="py-6 px-3">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-slate-400 text-sm">Active Alerts</p>
//                     <p className="text-3xl font-bold text-white">3</p>
//                     <p className="text-purple-400 text-sm">
//                       2 new announcements
//                     </p>
//                   </div>
//                   <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
//                     <Bell className="w-6 h-6 text-purple-400" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Children's Profiles */}
//             <Card className="bg-slate-800 border-slate-700">
//               <CardHeader className="flex flex-row items-center justify-between">
//                 <CardTitle className="text-white flex items-center gap-2">
//                   <Users className="w-5 h-5" />
//                   Children's Profiles
//                 </CardTitle>
//                 <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
//                   View All
//                 </Button>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="flex gap-2">
//                   <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
//                     Emma
//                   </Button>
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     className="border-slate-600 text-slate-300 bg-transparent"
//                   >
//                     Sarah
//                   </Button>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Avatar className="w-16 h-16">
//                     <AvatarImage src="/placeholder.svg?height=64&width=64" />
//                     <AvatarFallback>EJ</AvatarFallback>
//                   </Avatar>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-white">
//                       Emma Johnson
//                     </h3>
//                     <p className="text-slate-400">Grade 8-A • Age 13</p>
//                     <div className="flex items-center gap-4 mt-2">
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                         <span className="text-sm text-slate-300">GPA: 3.9</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                         <span className="text-sm text-slate-300">
//                           Attendance: 98%
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-white font-medium mb-3">
//                     Subject Performance
//                   </h4>
//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-300">Mathematics</span>
//                       <div className="flex items-center gap-2">
//                         <div className="w-20 bg-slate-700 rounded-full h-2">
//                           <div
//                             className="bg-green-500 h-2 rounded-full"
//                             style={{ width: "92%" }}
//                           ></div>
//                         </div>
//                         <span className="text-white text-sm font-medium">
//                           A
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-300">Science</span>
//                       <div className="flex items-center gap-2">
//                         <div className="w-20 bg-slate-700 rounded-full h-2">
//                           <div
//                             className="bg-green-500 h-2 rounded-full"
//                             style={{ width: "89%" }}
//                           ></div>
//                         </div>
//                         <span className="text-white text-sm font-medium">
//                           A
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-300">English</span>
//                       <div className="flex items-center gap-2">
//                         <div className="w-20 bg-slate-700 rounded-full h-2">
//                           <div
//                             className="bg-blue-500 h-2 rounded-full"
//                             style={{ width: "85%" }}
//                           ></div>
//                         </div>
//                         <span className="text-white text-sm font-medium">
//                           B+
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-300">History</span>
//                       <div className="flex items-center gap-2">
//                         <div className="w-20 bg-slate-700 rounded-full h-2">
//                           <div
//                             className="bg-green-500 h-2 rounded-full"
//                             style={{ width: "90%" }}
//                           ></div>
//                         </div>
//                         <span className="text-white text-sm font-medium">
//                           A
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-white font-medium mb-3">
//                     Recent Activity
//                   </h4>
//                   <div className="space-y-2">
//                     <div className="flex items-center gap-3 p-2 bg-slate-700/50 rounded-lg">
//                       <CheckCircle className="w-4 h-4 text-green-400" />
//                       <span className="text-slate-300 text-sm">
//                         Math Homework Submitted
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3 p-2 bg-slate-700/50 rounded-lg">
//                       <BookOpen className="w-4 h-4 text-blue-400" />
//                       <span className="text-slate-300 text-sm">
//                         Science Quiz: 88/100
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3 p-2 bg-slate-700/50 rounded-lg">
//                       <CheckCircle className="w-4 h-4 text-green-400" />
//                       <span className="text-slate-300 text-sm">
//                         Present in all classes
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Academic Performance Chart */}
//             <Card className="bg-slate-800 border-slate-700">
//               <CardHeader className="flex flex-row items-center justify-between">
//                 <CardTitle className="text-white flex items-center gap-2">
//                   <TrendingUp className="w-5 h-5" />
//                   Academic Performance
//                 </CardTitle>
//                 <div className="grid grid-cols-2 gap-2">
//                   <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
//                     Trends
//                   </Button>
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     className="border-slate-600 text-slate-300 bg-transparent"
//                   >
//                     Subjects
//                   </Button>
//                   <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
//                     Emma
//                   </Button>
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     className="border-slate-600 text-slate-300 bg-transparent"
//                   >
//                     Sarah
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="mb-4">
//                   <h4 className="text-white font-medium">
//                     GPA Trend - Emma Johnson
//                   </h4>
//                   <p className="text-slate-400 text-sm">
//                     Monthly academic performance overview
//                   </p>
//                 </div>
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={gpaData}>
//                       <XAxis
//                         dataKey="month"
//                         axisLine={false}
//                         tickLine={false}
//                         className="text-slate-400"
//                       />
//                       <YAxis
//                         axisLine={false}
//                         tickLine={false}
//                         className="text-slate-400"
//                         domain={[3.0, 4.0]}
//                       />
//                       <Line
//                         type="monotone"
//                         dataKey="gpa"
//                         stroke="#10b981"
//                         strokeWidth={3}
//                         dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
//                       />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Attendance Record */}
//           <Card className="bg-slate-800 border-slate-700">
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle className="text-white flex items-center gap-2">
//                 <Calendar className="w-5 h-5" />
//                 Attendance Record
//               </CardTitle>
//               <div className="flex gap-2">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="border-slate-600 text-slate-300 bg-transparent"
//                 >
//                   May 2024
//                 </Button>
//                 <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
//                   Emma
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="border-slate-600 text-slate-300 bg-transparent"
//                 >
//                   Sarah
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-4 gap-4 mb-6">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-400">22</div>
//                   <div className="text-slate-400 text-sm">Present</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-red-400">2</div>
//                   <div className="text-slate-400 text-sm">Absent</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-orange-400">4</div>
//                   <div className="text-slate-400 text-sm">Late</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-blue-400">92.9%</div>
//                   <div className="text-slate-400 text-sm">Rate</div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <h4 className="text-white font-medium mb-2">
//                   Emma Johnson - May 2024
//                 </h4>
//                 <div className="grid grid-cols-7 gap-1 text-center text-sm text-slate-400 mb-2">
//                   <div>Sun</div>
//                   <div>Mon</div>
//                   <div>Tue</div>
//                   <div>Wed</div>
//                   <div>Thu</div>
//                   <div>Fri</div>
//                   <div>Sat</div>
//                 </div>
//                 <div className="grid grid-cols-7 gap-1">
//                   {attendanceCalendar.flat().map((day, index) => {
//                     const status = getAttendanceStatus(day);
//                     return (
//                       <div
//                         key={index}
//                         className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium text-white ${getStatusColor(
//                           status
//                         )}`}
//                       >
//                         {day}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="flex items-center gap-6 text-sm">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-green-500 rounded"></div>
//                   <span className="text-slate-300">Present</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-red-500 rounded"></div>
//                   <span className="text-slate-300">Absent</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-orange-500 rounded"></div>
//                   <span className="text-slate-300">Late</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-blue-500 rounded"></div>
//                   <span className="text-slate-300">Holiday</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Right Sidebar */}
//         <div className="lg:w-80 w-full px-0 py-4 lg:p-4 space-y-6 lg:bg-slate-800 lg:border-l border-slate-700">
//           {/* Messages */}
//           <Card className="bg-slate-700 border-slate-600">
//             <CardHeader>
//               <CardTitle className="text-white text-lg">Messages</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <div className="flex items-start gap-3 p-3 bg-slate-600 rounded-lg">
//                 <Avatar className="w-8 h-8">
//                   <AvatarFallback>RC</AvatarFallback>
//                 </Avatar>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <span className="text-white text-sm font-medium">
//                       Ms. Rebecca Clark
//                     </span>
//                     <span className="text-slate-400 text-xs">1 hour ago</span>
//                   </div>
//                   <p className="text-slate-300 text-xs">
//                     Emma's Progress Update
//                   </p>
//                   <p className="text-slate-400 text-xs">
//                     Emma has shown excellent improv...
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3 p-3 bg-slate-600 rounded-lg">
//                 <Avatar className="w-8 h-8">
//                   <AvatarFallback>DW</AvatarFallback>
//                 </Avatar>
//                 <div className="flex-1">
//                   <div className="flex items-center justify-between">
//                     <span className="text-white text-sm font-medium">
//                       Mr. David Wilson
//                     </span>
//                     <span className="text-slate-400 text-xs">3 hours ago</span>
//                   </div>
//                   <p className="text-slate-300 text-xs">
//                     Mathematics Assignment
//                   </p>
//                   <p className="text-slate-400 text-xs">
//                     Sarah's math homework was outsta...
//                   </p>
//                 </div>
//               </div>
//               <Button className="w-full bg-blue-600 hover:bg-blue-700">
//                 View all messages
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Latest Announcements */}
//           <Card className="bg-slate-700 border-slate-600">
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle className="text-white text-lg flex items-center gap-2">
//                 <Bell className="w-5 h-5" />
//                 Latest Announcements
//               </CardTitle>
//               <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
//                 View All
//               </Button>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <div className="p-3 bg-slate-600 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Calendar className="w-4 h-4 text-blue-400" />
//                   <span className="text-white text-sm font-medium">
//                     Parent-Teacher Conference Scheduled
//                   </span>
//                   <span className="text-slate-400 text-xs">2 hours ago</span>
//                 </div>
//                 <p className="text-slate-300 text-xs mb-2">
//                   Individual meetings scheduled for next week. Please check your
//                   assigned time slots and confirm attendance.
//                 </p>
//                 <div className="grid gap-2">
//                   <Button
//                     size="sm"
//                     className="bg-purple-600 hover:bg-purple-700 text-xs"
//                   >
//                     Confirm Attendance
//                   </Button>
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     className="border-slate-500 text-slate-300 bg-transparent text-xs"
//                   >
//                     View Schedule
//                   </Button>
//                 </div>
//               </div>
//               <div className="p-3 bg-slate-600 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <TrendingUp className="w-4 h-4 text-green-400" />
//                   <span className="text-white text-sm font-medium">
//                     Science Fair Winners
//                   </span>
//                   <span className="text-slate-400 text-xs">1 day ago</span>
//                 </div>
//                 <p className="text-slate-300 text-xs">
//                   Congratulations to all participants!
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Upcoming Events */}
//           <Card className="bg-slate-700 border-slate-600">
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle className="text-white text-lg flex items-center gap-2">
//                 <Calendar className="w-5 h-5" />
//                 Upcoming Events
//               </CardTitle>
//               <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
//                 View Calendar
//               </Button>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <div className="p-3 bg-slate-600 rounded-lg">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
//                   <span className="text-white text-sm font-medium">
//                     Monthly Achievement Ceremony
//                   </span>
//                 </div>
//                 <p className="text-slate-400 text-xs">
//                   Thu, May 30 • 11:00 AM • School Auditorium
//                 </p>
//                 <p className="text-slate-300 text-xs">
//                   Recognizing outstanding student achievements and
//                   contributions.
//                 </p>
//                 <div className="flex gap-2 mt-2">
//                   <Button
//                     size="sm"
//                     className="bg-blue-600 hover:bg-blue-700 text-xs"
//                   >
//                     Sync Calendar
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Quick Actions */}
//           <Card className="bg-slate-700 border-slate-600">
//             <CardHeader>
//               <CardTitle className="text-white text-lg flex items-center gap-2">
//                 <AlertTriangle className="w-5 h-5" />
//                 Quick Actions
//               </CardTitle>
//               <p className="text-slate-400 text-sm">
//                 Access frequently used features
//               </p>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <div className="grid grid-cols-2 gap-2">
//                 <Button className="bg-red-600 hover:bg-red-700 text-xs p-3 h-22 min-w-0 text-center flex flex-col items-center gap-1">
//                   <DollarSign className="w-4 h-4" />
//                   <span>Pay Fees</span>
//                   <span className="text-xs opacity-75">$1,250 Due</span>
//                 </Button>
//                 <Button className="bg-blue-600 hover:bg-blue-700 text-xs p-3 h-22 min-w-0 text-center flex flex-col items-center gap-1">
//                   <Phone className="w-4 h-4" />
//                   <span>Contact Teacher</span>
//                   <span className="text-xs opacity-75">Send message</span>
//                 </Button>
//                 <Button className="bg-purple-600 hover:bg-purple-700 text-xs p-3 h-22 min-w-0 text-center flex flex-col items-center gap-1">
//                   <Calendar className="w-4 h-4" />
//                   <span>View Timetable</span>
//                   <span className="text-xs opacity-75">Check schedules</span>
//                 </Button>
//                 <Button className="bg-orange-600 hover:bg-orange-700 text-xs p-3 h-22 min-w-0 text-center flex flex-col items-center gap-1">
//                   <FileText className="w-4 h-4" />
//                   <span>View Assignments</span>
//                   <span className="text-xs opacity-75">5 Pending</span>
//                 </Button>
//                 <Button className="bg-green-600 hover:bg-green-700 text-xs p-3 h-22 min-w-0 text-center flex flex-col items-center gap-1">
//                   <Download className="w-4 h-4" />
//                   <span>Download Reports</span>
//                   <span className="text-xs opacity-75">
//                     Get progress reports
//                   </span>
//                 </Button>
//                 <Button className="bg-teal-600 hover:bg-teal-700 text-xs p-3 h-22 min-w-0 text-center flex flex-col items-center gap-1">
//                   <BookOpen className="w-4 h-4" />
//                   <span>Book Appointment</span>
//                   <span className="text-xs opacity-75">Schedule meeting</span>
//                 </Button>
//                 <Button className="bg-indigo-600 hover:bg-indigo-700 text-xs h-22 min-w-0 text-center p-3 flex flex-col items-center gap-1">
//                   <Video className="w-4 h-4" />
//                   <span className="w-full whitespace-normal break-words">
//                     View Gallery
//                   </span>
//                   <span className="w-full text-xs opacity-75 whitespace-normal break-words">
//                     School photos & videos
//                   </span>
//                 </Button>
//                 <Button className="bg-pink-600 hover:bg-pink-700 text-xs p-3 h-22 min-w-0 text-center flex flex-col items-center gap-1">
//                   <Phone className="w-4 h-4" />
//                   <span>Emergency Contact</span>
//                   <span className="text-xs opacity-75">Urgent matters</span>
//                 </Button>
//               </div>

//               <div className="text-center pt-2">
//                 <p className="text-slate-400 text-xs">
//                   Need help with something else?
//                 </p>
//                 <div className="flex gap-2 mt-2">
//                   <Button
//                     size="sm"
//                     className="bg-slate-600 hover:bg-slate-500 text-xs flex-1"
//                   >
//                     <HelpCircle className="w-3 h-3 mr-1" />
//                     Help Center
//                   </Button>
//                   <Button
//                     size="sm"
//                     className="bg-blue-600 hover:bg-blue-700 text-xs flex-1"
//                   >
//                     <MessageSquare className="w-3 h-3 mr-1" />
//                     Contact Support
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }