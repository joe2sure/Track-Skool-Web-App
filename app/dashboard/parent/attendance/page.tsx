"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Clock, CalendarIcon, TrendingUp, Target, Award } from "lucide-react"
import { useState } from "react"

const attendanceStats = [
  { label: "Present", value: 143, color: "bg-green-500", icon: CheckCircle },
  { label: "Absent", value: 7, color: "bg-red-500", icon: XCircle },
  { label: "Late", value: 3, color: "bg-orange-500", icon: Clock },
  { label: "Total Days", value: 153, color: "bg-blue-500", icon: CalendarIcon },
]

const monthlyTrends = [
  { month: "Sep", rate: 96.5 },
  { month: "Oct", rate: 94.2 },
  { month: "Nov", rate: 95.8 },
  { month: "Dec", rate: 95.2 },
]

const calendarData = {
  1: "present",
  2: "present",
  3: "present",
  4: "present",
  5: "present",
  8: "present",
  9: "late",
  10: "present",
  11: "present",
  12: "present",
  15: "present",
  16: "present",
  17: "absent",
  18: "present",
  19: "present",
  22: "present",
  23: "present",
  24: "present",
  25: "holiday",
  26: "holiday",
  29: "present",
  30: "present",
  31: "present",
}

const statistics = [
  { label: "Perfect Months", value: 2, icon: Award, color: "text-green-400" },
  { label: "Best Month", value: "September", icon: TrendingUp, color: "text-blue-400" },
  { label: "Total Absences", value: 7, icon: XCircle, color: "text-red-400" },
  { label: "Consecutive Days", value: 23, icon: Target, color: "text-purple-400" },
]

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text:xl lg:text-3xl font-bold text-white">Attendance</h1>
        <p className="text-slate-400 mt-1">Monitor your children's attendance records and patterns</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Attendance Overview */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-xl lg:text-3xl">Attendance Overview</CardTitle>
              <div className="grid lg:flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma Johnson
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Sarah Johnson
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {attendanceStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-700 rounded-lg">
                    <div
                      className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="grid lg:flex justify-between items-center mb-2">
                    <span className="text-slate-300">Current Attendance Rate</span>
                    <span className="text-white font-semibold">95.2%</span>
                  </div>
                </div>
                <div>
                  <div className="grid lg:flex justify-between items-center mb-2">
                    <span className="text-slate-300">This Month</span>
                    <span className="text-white font-semibold">98.5%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Attendance Calendar */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl lg:text-3xl text-white">Attendance Calendar</CardTitle>
              <div className="grid lg:flex gap-2">
                <select className="bg-slate-700 border border-slate-600 rounded-md px-3 py-1 text-white text-sm">
                  <option>Emma Johnson</option>
                  <option>Sarah Johnson</option>
                </select>
                <select className="bg-slate-700 border border-slate-600 rounded-md px-3 py-1 text-white text-sm">
                  <option>December</option>
                  <option>November</option>
                  <option>October</option>
                </select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-slate-400 font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => {
                  const day = i + 1
                  const status = calendarData[day as keyof typeof calendarData]
                  const isEmpty = day > 31 || (day < 6 && i < 6) // Adjust for month start

                  if (isEmpty) {
                    return <div key={i} className="h-12"></div>
                  }

                  return (
                    <div
                      key={day}
                      className={`h-12 rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer ${
                        status === "present"
                          ? "bg-green-600 text-white"
                          : status === "absent"
                            ? "bg-red-600 text-white"
                            : status === "late"
                              ? "bg-orange-600 text-white"
                              : status === "holiday"
                                ? "bg-purple-600 text-white"
                                : "bg-slate-700 text-slate-300"
                      }`}
                    >
                      {day}
                      {status === "present" && <CheckCircle className="w-3 h-3 ml-1" />}
                      {status === "absent" && <XCircle className="w-3 h-3 ml-1" />}
                      {status === "late" && <Clock className="w-3 h-3 ml-1" />}
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-600 rounded"></div>
                  <span className="text-slate-300 text-sm">Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded"></div>
                  <span className="text-slate-300 text-sm">Absent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-600 rounded"></div>
                  <span className="text-slate-300 text-sm">Late</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-600 rounded"></div>
                  <span className="text-slate-300 text-sm">Holiday</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Monthly Trends */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-xl lg:text-3xl">Monthly Trends</CardTitle>
              <select className="bg-slate-700 border border-slate-600 rounded-md px-3 py-1 text-white text-sm">
                <option>Emma Johnson</option>
                <option>Sarah Johnson</option>
              </select>
            </CardHeader>
            <CardContent className="space-y-4">
              {monthlyTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-slate-300">{trend.month}</span>
                  <div className="flex items-center gap-2">
                    <Progress value={trend.rate} className="w-20 h-2" />
                    <span className="text-white font-medium w-12">{trend.rate}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl lg:text-3xl">Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {statistics.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-slate-300">{stat.label}</span>
                  </div>
                  <span className="text-white font-semibold">{stat.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Attendance Goal */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Attendance Goal</h3>
                <p className="text-slate-400 text-sm mb-4">Maintain 95% attendance</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Current: 95.2%</span>
                    <span className="text-slate-300">Target: 95%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-green-400">Goal achieved! 🎉</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
