"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, Eye, Download, Clock, CheckCircle, AlertCircle } from "lucide-react"

export function AssignmentsView() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [subjectFilter, setSubjectFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")

  const assignmentStats = [
    { label: "Total Assignments", value: "6", color: "bg-blue-500" },
    { label: "Pending", value: "2", color: "bg-red-500" },
    { label: "In Progress", value: "1", color: "bg-yellow-500" },
    { label: "Completed", value: "2", color: "bg-green-500" },
    { label: "Overdue", value: "1", color: "bg-red-600" },
  ]

  const assignments = [
    {
      id: 1,
      title: "Calculus Problem Set 5",
      subject: "Mathematics",
      points: 100,
      description: "Complete problems 1-25 from Chapter 8: Integration by Parts",
      dueDate: "236 days overdue",
      time: "11:59 PM",
      status: "pending",
      progress: 0,
      type: "Homework",
      color: "border-l-red-500",
    },
    {
      id: 2,
      title: "Physics Lab Report - Pendulum Motion",
      subject: "Physics",
      points: 150,
      description: "Analyze pendulum motion data and write comprehensive lab report",
      dueDate: "233 days overdue",
      time: "2:00 PM",
      status: "in-progress",
      progress: 65,
      type: "Lab Report",
      color: "border-l-yellow-500",
    },
    {
      id: 3,
      title: "English Essay - Shakespeare Analysis",
      subject: "English",
      points: 200,
      description: "Analyze themes in Hamlet with focus on revenge and madness",
      dueDate: "230 days overdue",
      time: "11:59 PM",
      status: "completed",
      progress: 100,
      type: "Essay",
      color: "border-l-green-500",
    },
    {
      id: 4,
      title: "Chemistry Quiz Preparation",
      subject: "Chemistry",
      points: 50,
      description: "Study guide and practice problems for organic chemistry quiz",
      dueDate: "235 days overdue",
      time: "9:00 AM",
      status: "pending",
      progress: 25,
      type: "Quiz Prep",
      color: "border-l-red-500",
    },
    {
      id: 5,
      title: "History Research Project",
      subject: "History",
      points: 250,
      description: "Research paper on World War II impact on society",
      dueDate: "232 days overdue",
      time: "5:00 PM",
      status: "overdue",
      progress: 40,
      type: "Research",
      color: "border-l-red-600",
    },
    {
      id: 6,
      title: "Biology Lab Practical",
      subject: "Biology",
      points: 75,
      description: "Microscopy and cell identification practical exam",
      dueDate: "234 days overdue",
      time: "1:00 PM",
      status: "submitted",
      progress: 100,
      type: "Practical",
      color: "border-l-blue-500",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
      case "submitted":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "destructive",
      "in-progress": "secondary",
      completed: "default",
      overdue: "destructive",
      submitted: "default",
    } as const

    return <Badge variant={variants[status as keyof typeof variants] || "secondary"}>{status.replace("-", " ")}</Badge>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">My Assignments</h1>
        <p className="text-blue-100 text-lg">Track and manage all your academic assignments</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {assignmentStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters and View Toggle */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Subject:</span>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="History">History</SelectItem>
                <SelectItem value="Biology">Biology</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status:</span>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid className="h-4 w-4" />
            Grid
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
            List
          </Button>
        </div>
      </div>

      {/* Assignments Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <Card key={assignment.id} className={`border-l-4 ${assignment.color}`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{assignment.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {assignment.subject}
                      </Badge>
                      <span className="text-sm text-gray-600">{assignment.points} points</span>
                    </div>
                  </div>
                  {getStatusBadge(assignment.status)}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{assignment.description}</p>

                <div className="flex items-center gap-2 text-sm">
                  {getStatusIcon(assignment.status)}
                  <span className={assignment.status === "overdue" ? "text-red-600 font-medium" : "text-gray-600"}>
                    {assignment.dueDate}
                  </span>
                  <span className="text-gray-500">{assignment.time}</span>
                </div>

                {assignment.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{assignment.progress}%</span>
                    </div>
                    <Progress value={assignment.progress} className="h-2" />
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {assignment.status === "pending" || assignment.status === "in-progress" ? (
                    <Button size="sm" className="flex-1">
                      Submit
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {getStatusIcon(assignment.status)}
                      <div className="flex-1">
                        <h3 className="font-semibold">{assignment.title}</h3>
                        <p className="text-sm text-gray-600">{assignment.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {assignment.subject}
                          </Badge>
                          <span className="text-sm text-gray-500">{assignment.points} points</span>
                          <span className="text-sm text-gray-500">{assignment.dueDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(assignment.status)}
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
