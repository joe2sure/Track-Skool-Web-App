"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Clock,
  CheckCircle,
  AlertTriangle,
  Calendar,
  FileText,
  Eye,
  Upload,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const assignmentStats = [
  { label: "Total", value: 15, color: "bg-blue-500", icon: BookOpen },
  { label: "Completed", value: 12, color: "bg-green-500", icon: CheckCircle },
  { label: "Pending", value: 2, color: "bg-orange-500", icon: Clock },
  { label: "Overdue", value: 1, color: "bg-red-500", icon: AlertTriangle },
];

const subjectBreakdown = [
  {
    subject: "Physics",
    completed: 4,
    total: 4,
    grade: "A+",
    color: "bg-blue-600",
  },
  {
    subject: "Chemistry",
    completed: 3,
    total: 4,
    grade: "A",
    color: "bg-green-600",
  },
  {
    subject: "Literature",
    completed: 3,
    total: 4,
    grade: "A-",
    color: "bg-purple-600",
  },
  {
    subject: "Mathematics",
    completed: 2,
    total: 3,
    grade: "A",
    color: "bg-orange-600",
  },
];

const assignments = [
  {
    id: 1,
    title: "Math Worksheet - Fractions",
    subject: "Mathematics",
    teacher: "Ms. Rebecca Clark",
    dueDate: "1/25/2024",
    status: "pending",
    priority: "high",
    type: "written",
    description: "Complete exercises 1-15 on fraction operations",
  },
  {
    id: 2,
    title: "Science Project - Solar System",
    subject: "Science",
    teacher: "Mr. David Wilson",
    dueDate: "1/28/2024",
    status: "in progress",
    priority: "medium",
    type: "project",
    description: "Create a model of the solar system with planet facts",
  },
  {
    id: 3,
    title: "English Essay - My Summer Vacation",
    subject: "English",
    teacher: "Mrs. Sarah Johnson",
    dueDate: "1/22/2024",
    status: "completed",
    priority: "low",
    type: "digital",
    description: "Write a 500-word essay about summer vacation experiences",
  },
  {
    id: 4,
    title: "History Timeline - Ancient Civilizations",
    subject: "History",
    teacher: "Mr. Michael Brown",
    dueDate: "1/30/2024",
    status: "pending",
    priority: "medium",
    type: "written",
    description: "Create a timeline of major ancient civilizations",
  },
];

const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
const assignmentDates = {
  22: { color: "bg-red-500", count: 1 },
  25: { color: "bg-orange-500", count: 1 },
  28: { color: "bg-blue-500", count: 1 },
  30: { color: "bg-purple-500", count: 1 },
};

export default function Assignments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl lg:text-3xl font-bold text-white">
          Assignments
        </h1>
        <p className="text-slate-400 mt-1">
          View homework, projects, and submission status for your children
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Assignment Statistics */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white text-xl lg:text-3xl">
                  Assignment Statistics
                </CardTitle>
              </div>
              <div className="grid lg:flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma (Grade 5)
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-300 bg-transparent"
                >
                  Sarah (Grade 9)
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {assignmentStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-slate-700 rounded-lg"
                  >
                    <div
                      className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">
                    Completion Rate
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Overall Progress</span>
                      <span className="text-white">93%</span>
                    </div>
                    <Progress value={93} className="h-2" />
                    <p className="text-xs text-slate-400">
                      12 of 15 assignments completed
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">Average Grade</h4>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-1">
                      A
                    </div>
                    <p className="text-slate-400 text-xs lg:text-sm">
                      Excellent performance across all subjects
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subject Breakdown */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl lg:text-3xl text-white">
                Subject Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjectBreakdown.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-slate-700 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${subject.color} rounded-lg flex items-center justify-center`}
                    >
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        {subject.subject}
                      </h4>
                      <p className="text-slate-400 text-sm">
                        {subject.completed}/{subject.total} completed
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`${subject.color} text-white mb-1`}>
                      {subject.grade}
                    </Badge>
                    <div className="text-slate-400 text-sm">Average</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Assignment List */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl lg:text-3xl text-white">
                Assignment List
              </CardTitle>
              <div className="grid grid-cols-2 lg:flex gap-2">
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-[11px] lg:text-sm"
                >
                  Emma (Grade 5)
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-300 bg-transparent text-[11px] lg:text-sm"
                >
                  Sarah (Grade 9)
                </Button>
                <select className="bg-slate-700 border border-slate-600 rounded-md px-3 py-1.5 text-white text-sm">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="p-4 bg-slate-700 rounded-lg"
                >
                  <div className="grid lg:flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-medium">
                          {assignment.title}
                        </h4>
                        <Badge
                          className={`${
                            assignment.status === "completed"
                              ? "bg-green-600"
                              : assignment.status === "in progress"
                              ? "bg-blue-600 w-[20vh] lg:w-fit"
                              : assignment.status === "pending"
                              ? "bg-orange-600"
                              : "bg-red-600"
                          } text-white`}
                        >
                          {assignment.status}
                        </Badge>
                        <Badge
                          className={`${
                            assignment.priority === "high"
                              ? "bg-red-600"
                              : assignment.priority === "medium"
                              ? "bg-orange-600"
                              : "bg-yellow-600"
                          } text-white`}
                        >
                          {assignment.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {assignment.subject}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {assignment.teacher}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Due: {assignment.dueDate}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm">
                        {assignment.description}
                      </p>
                      <div className="mt-2 mb-4 lg:mb-0">
                        <span className="text-xs text-slate-400">
                          Submission Type:
                        </span>
                        <Badge
                          variant="outline"
                          className="ml-2 border-slate-600 text-slate-300"
                        >
                          {assignment.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid lg:flex gap-2">
                      {assignment.status === "pending" && (
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Submit Work
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-slate-300 bg-transparent"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Assignment Calendar */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Assignment Calendar</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-300 bg-transparent"
                >
                  Sarah
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-slate-400 hover:text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <h3 className="text-white font-medium">January 2024</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-slate-400 text-xs font-medium py-1"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day) => {
                  const hasAssignment =
                    assignmentDates[day as keyof typeof assignmentDates];
                  return (
                    <div
                      key={day}
                      className={`h-8 flex items-center justify-center text-sm rounded cursor-pointer ${
                        hasAssignment
                          ? `${hasAssignment.color} text-white font-medium`
                          : "text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 space-y-2">
                <h4 className="text-white font-medium text-sm">
                  Assignment Status
                </h4>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-slate-300">Pending</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-slate-300">In Progress</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-slate-300">Completed</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-slate-700 rounded-lg">
                <h4 className="text-white font-medium text-sm mb-1">
                  Upcoming This Week
                </h4>
                <p className="text-slate-400 text-xs">
                  No assignments due this week
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
