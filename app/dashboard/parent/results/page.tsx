"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Download, BarChart3, Award, Target } from "lucide-react"

const recentExams = [
  {
    subject: "Mathematics",
    type: "Mid-Term Exam",
    date: "1/15/2024",
    score: 92,
    percentage: 92,
    grade: "A",
    status: "published",
  },
  {
    subject: "Science",
    type: "Mid-Term Exam",
    date: "1/14/2024",
    score: 88,
    percentage: 88,
    grade: "A-",
    status: "published",
  },
  {
    subject: "English",
    type: "Mid-Term Exam",
    date: "1/17/2024",
    score: 85,
    percentage: 85,
    grade: "B+",
    status: "published",
  },
  {
    subject: "History",
    type: "Unit Test 3",
    date: "1/20/2024",
    score: 78,
    percentage: 78,
    grade: "B",
    status: "pending",
  },
]

const subjectPerformance = [
  { subject: "Mathematics", score: 92, trend: "up", grade: "A" },
  { subject: "Science", score: 88, trend: "down", grade: "A-" },
  { subject: "English", score: 85, trend: "up", grade: "B+" },
  { subject: "History", score: 78, trend: "down", grade: "B" },
  { subject: "Art", score: 90, trend: "up", grade: "A" },
]

const resultsHistory = [
  { subject: "Mathematics", score: 92, percentage: 92 },
  { subject: "Science", score: 88, percentage: 88 },
  { subject: "English", score: 85, percentage: 85 },
  { subject: "History", score: 78, percentage: 78 },
  { subject: "Art", score: 90, percentage: 90 },
]

const strengths = ["Problem Solving", "Analytical Thinking", "Creative Expression"]
const improvements = ["Reading Comprehension", "Essay Writing"]

export default function Results() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Results</h1>
        <p className="text-slate-400 mt-1">View exam results, grades, and academic performance reports</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Exam Results */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">Recent Exam Results</CardTitle>
                <p className="text-slate-400 text-sm">Latest exam scores and grades</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma Johnson
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Sarah Johnson
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentExams.map((exam, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        exam.grade === "A"
                          ? "bg-green-600"
                          : exam.grade === "A-"
                            ? "bg-green-500"
                            : exam.grade === "B+"
                              ? "bg-blue-500"
                              : "bg-orange-500"
                      }`}
                    >
                      <span className="text-white font-bold">{exam.grade}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{exam.subject}</h4>
                      <p className="text-slate-400 text-sm">{exam.type}</p>
                      <p className="text-slate-500 text-xs">{exam.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{exam.score}/100</div>
                    <div className="text-slate-400 text-sm">{exam.percentage}%</div>
                    <Badge className={`${exam.status === "published" ? "bg-green-600" : "bg-orange-600"} text-white`}>
                      {exam.status}
                    </Badge>
                  </div>
                </div>
              ))}

              <div className="flex justify-center">
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  View All Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results History */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Results History</CardTitle>
              <div className="flex gap-2">
                <select className="bg-slate-700 border border-slate-600 rounded-md px-3 py-1 text-white text-sm">
                  <option>Emma Johnson</option>
                  <option>Sarah Johnson</option>
                </select>
                <select className="bg-slate-700 border border-slate-600 rounded-md px-3 py-1 text-white text-sm">
                  <option>Spring 2024</option>
                  <option>Fall 2023</option>
                </select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-blue-400">3.7</div>
                  <div className="text-slate-400">Academic Term GPA</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-medium">Subject Breakdown</h4>
                {resultsHistory.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          result.percentage >= 90
                            ? "bg-green-600"
                            : result.percentage >= 80
                              ? "bg-blue-500"
                              : result.percentage >= 70
                                ? "bg-orange-500"
                                : "bg-red-500"
                        }`}
                      >
                        <span className="text-white font-bold">
                          {result.percentage >= 90
                            ? "A"
                            : result.percentage >= 80
                              ? "B+"
                              : result.percentage >= 70
                                ? "B"
                                : "C"}
                        </span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">{result.subject}</h5>
                        <p className="text-slate-400 text-sm">Score: {result.score}/100</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={result.percentage} className="w-24 h-2" />
                      <span className="text-white font-medium w-8">{result.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Export Results
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Grade Analysis */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Grade Analysis</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Sarah
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-400">3.7</div>
                <div className="text-slate-400">Current GPA</div>
                <div className="text-green-400 text-sm">+0.2 from last term</div>
              </div>
            </CardContent>
          </Card>

          {/* Subject Performance */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Subject Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjectPerformance.map((subject, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded flex items-center justify-center ${
                        subject.grade === "A"
                          ? "bg-green-600"
                          : subject.grade === "A-"
                            ? "bg-green-500"
                            : subject.grade === "B+"
                              ? "bg-blue-500"
                              : "bg-orange-500"
                      }`}
                    >
                      <span className="text-white text-sm font-bold">{subject.grade}</span>
                    </div>
                    <span className="text-slate-300">{subject.subject}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{subject.score}</span>
                    {subject.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Strengths */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Strengths</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">{strength}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Areas for Improvement */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Areas for Improvement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {improvements.map((improvement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-300">{improvement}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Download Report Card */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="pt-6 text-center">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download Report Card
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
