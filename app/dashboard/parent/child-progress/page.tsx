"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, TrendingDown, ArrowUp, ArrowDown, Lightbulb, Plus } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

const performanceData = [
  { month: "Jan", gpa: 3.2, attendance: 85 },
  { month: "Feb", gpa: 3.4, attendance: 88 },
  { month: "Mar", gpa: 3.6, attendance: 92 },
  { month: "Apr", gpa: 3.8, attendance: 95 },
  { month: "May", gpa: 3.7, attendance: 96 },
]

export default function ChildProgress() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="lg:text-3xl text-xl font-bold text-white">Child Progress</h1>
        <p className="text-slate-400 mt-1">Track your children's academic development and achievements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Child Progress Overview */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-xl lg:text-3xl">Child Progress Overview</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Sarah
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback>EJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">Emma Johnson</h3>
                  <p className="text-slate-400">Grade 8A</p>
                  <Badge className="mt-1 bg-green-600 text-white">A</Badge>
                  <span className="text-green-400 text-sm ml-2">+6%</span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">3.7</div>
                  <div className="text-slate-400 text-sm">GPA</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">5/32</div>
                  <div className="text-slate-400 text-sm">Class Rank</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Strengths
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Mathematics</span>
                      <ArrowUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Science</span>
                      <ArrowUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">English</span>
                      <ArrowUp className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-orange-400" />
                    Areas for Improvement
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">History</span>
                      <ArrowDown className="w-4 h-4 text-orange-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Art</span>
                      <ArrowDown className="w-4 h-4 text-orange-400" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Performance Chart */}
          <Card className="bg-slate-800 border-slate-700 mt-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-xl lg:text-3xl">Academic Performance</CardTitle>
              <div className="lg:flex gap-2 grid grid-cols-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Trends
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Subjects
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Sarah
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-slate-400" />
                    <YAxis axisLine={false} tickLine={false} className="text-slate-400" />
                    <Line
                      type="monotone"
                      dataKey="gpa"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="attendance"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ fill: "#3b82f6", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-8 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3.7</div>
                  <div className="text-slate-400 text-sm">Current GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">96%</div>
                  <div className="text-slate-400 text-sm">Attendance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Analysis & Goals */}
        <div className="space-y-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Subject Analysis</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Sarah
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">Mathematics</span>
                  <span className="text-white font-semibold">
                    92% <span className="text-green-400 text-sm">+6%</span>
                  </span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">Science</span>
                  <span className="text-white font-semibold">
                    89% <span className="text-green-400 text-sm">+4%</span>
                  </span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">English</span>
                  <span className="text-white font-semibold">
                    87% <span className="text-red-400 text-sm">-2%</span>
                  </span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">History</span>
                  <span className="text-white font-semibold">
                    78% <span className="text-green-400 text-sm">+3%</span>
                  </span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">Art</span>
                  <span className="text-white font-semibold">
                    74% <span className="text-green-400 text-sm">+2%</span>
                  </span>
                </div>
                <Progress value={74} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recommendation */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-2">Recommendation</h4>
                  <p className="text-slate-300 text-sm">
                    Emma shows excellent progress in STEM subjects. Consider advanced math programs and science
                    competitions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Goals */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Academic Goals</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Sarah
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Improve Math Grade to A+</h4>
                    <p className="text-slate-400 text-sm">Focus on advanced algebra and geometry</p>
                  </div>
                  <Badge className="bg-green-600 text-white">On Track</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Mathematics</span>
                    <span className="text-white">92% / 95%</span>
                  </div>
                  <Progress value={97} className="h-2" />
                  <div className="text-xs text-slate-400">Deadline: 6/15/2024</div>
                  <div className="text-xs text-green-400">97% Complete</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Perfect Attendance</h4>
                    <p className="text-slate-400 text-sm">Maintain 100% attendance for the semester</p>
                  </div>
                  <Badge className="bg-orange-600 text-white">At Risk</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">General</span>
                    <span className="text-white">96% / 100%</span>
                  </div>
                  <Progress value={96} className="h-2" />
                  <div className="text-xs text-slate-400">Deadline: 5/30/2024</div>
                  <div className="text-xs text-orange-400">96% Complete</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Science Fair Project</h4>
                    <p className="text-slate-400 text-sm">Complete robotics project presentation</p>
                  </div>
                  <Badge className="bg-green-600 text-white">On Track</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Science</span>
                    <span className="text-white">75% / 100%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <div className="text-xs text-slate-400">Deadline: 4/20/2024</div>
                  <div className="text-xs text-green-400">75% Complete</div>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Set New Goal
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
