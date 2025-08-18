// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
"use client";

import { SetStateAction, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  Users,
  AlertTriangle,
  Search,
  Download,
  MessageSquare,
  Eye,
} from "lucide-react";
import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar";
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header";
import { Input } from "@/components/ui/parent/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/parent/avatar";
import useLargeScreen from "@/hooks/useLargeScreen";

export default function TeacherResults() {
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedTerm, setSelectedTerm] = useState("current");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLargeScreen = useLargeScreen();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const students = [
    {
      id: 1,
      name: "Emma Wilson",
      studentId: "2024001",
      avatar: "/placeholder.svg?height=40&width=40",
      currentGrade: "A",
      gradePercentage: 92.5,
      recentTest: "95/100",
      testSubject: "Algebra Test",
      assignmentStatus: "8/8 Complete",
      trend: "up",
      trendValue: "+3.2%",
    },
    {
      id: 2,
      name: "James Anderson",
      studentId: "2024002",
      avatar: "/placeholder.svg?height=40&width=40",
      currentGrade: "B+",
      gradePercentage: 88.7,
      recentTest: "87/100",
      testSubject: "Algebra Test",
      assignmentStatus: "6/8 Complete",
      trend: "up",
      trendValue: "+1.5%",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      studentId: "2024003",
      avatar: "/placeholder.svg?height=40&width=40",
      currentGrade: "A-",
      gradePercentage: 91.2,
      recentTest: "92/100",
      testSubject: "Algebra Test",
      assignmentStatus: "8/8 Complete",
      trend: "down",
      trendValue: "-0.8%",
    },
    {
      id: 4,
      name: "Michael Chen",
      studentId: "2024004",
      avatar: "/placeholder.svg?height=40&width=40",
      currentGrade: "B",
      gradePercentage: 84.9,
      recentTest: "82/100",
      testSubject: "Algebra Test",
      assignmentStatus: "7/8 Complete",
      trend: "up",
      trendValue: "+2.1%",
    },
    {
      id: 5,
      name: "Olivia Johnson",
      studentId: "2024005",
      avatar: "/placeholder.svg?height=40&width=40",
      currentGrade: "C+",
      gradePercentage: 78.3,
      recentTest: "75/100",
      testSubject: "Algebra Test",
      assignmentStatus: "5/8 Complete",
      trend: "down",
      trendValue: "-1.7%",
    },
    {
      id: 6,
      name: "David Brown",
      studentId: "2024006",
      avatar: "/placeholder.svg?height=40&width=40",
      currentGrade: "D+",
      gradePercentage: 68.9,
      recentTest: "65/100",
      testSubject: "Algebra Test",
      assignmentStatus: "4/8 Complete",
      trend: "down",
      trendValue: "-3.2%",
    },
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A":
      case "A-":
        return "bg-green-100 text-green-800";
      case "B+":
      case "B":
      case "B-":
        return "bg-blue-100 text-blue-800";
      case "C+":
      case "C":
      case "C-":
        return "bg-yellow-100 text-yellow-800";
      case "D+":
      case "D":
      case "D-":
        return "bg-orange-100 text-orange-800";
      case "F":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 80) return "bg-blue-500";
    if (percentage >= 70) return "bg-yellow-500";
    if (percentage >= 60) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {(isLargeScreen || isSidebarOpen) && (
        <TeacherSidebar
          isOpen={isLargeScreen || isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />
      )}
      {/*opaque div On smaller screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 top-0 bg-black/70 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TeacherHeader onMenuToggle={toggleSidebar} />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Header */}
          <div className="grid lg:flex gap-3 lg:gap-0 items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Academic Results
              </h1>
              <p className="text-gray-600">
                Monitor student performance and academic progress across all
                subjects
              </p>
            </div>

            <div className="grid lg:flex gap-3 lg:gap-0 items-center space-x-3">
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                <BarChart3 className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <MessageSquare className="w-4 h-4 mr-2" />
                Parent Communication
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Class Average
                    </p>
                    <p className="text-3xl font-bold text-gray-900">87.3%</p>
                    <p className="text-sm text-green-600">
                      +2.4% from last term
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Top Performers
                    </p>
                    <p className="text-3xl font-bold text-gray-900">18</p>
                    <p className="text-sm text-green-600">
                      Above 85% grade threshold
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      At Risk Students
                    </p>
                    <p className="text-3xl font-bold text-gray-900">4</p>
                    <p className="text-sm text-red-600">
                      Below 70% need attention
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Recent Submissions
                    </p>
                    <p className="text-3xl font-bold text-gray-900">24</p>
                    <p className="text-sm text-blue-600">
                      This week assignments graded
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Grade Distribution Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { grade: "A (90-100)", count: 15, color: "bg-green-500" },
                    { grade: "B (80-89)", count: 12, color: "bg-blue-500" },
                    { grade: "C (70-79)", count: 8, color: "bg-yellow-500" },
                    { grade: "D (60-69)", count: 4, color: "bg-orange-500" },
                    { grade: "F (0-59)", count: 2, color: "bg-red-500" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-600">
                        {item.grade}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-3 bg-gray-200 rounded-full">
                          <div
                            className={`h-full ${item.color} rounded-full`}
                            style={{ width: `${(item.count / 41) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-6">
                          {item.count}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Subject Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Subject Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      subject: "Mathematics",
                      score: 85,
                      color: "text-blue-600",
                    },
                    { subject: "Science", score: 82, color: "text-green-600" },
                    { subject: "English", score: 88, color: "text-purple-600" },
                    { subject: "Physics", score: 79, color: "text-orange-600" },
                    { subject: "Chemistry", score: 86, color: "text-red-600" },
                    { subject: "History", score: 84, color: "text-yellow-600" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-700">
                        {item.subject}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                        <span className={`text-sm font-medium ${item.color}`}>
                          {item.score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assignment Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Assignment Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: "Mathematics", completion: 80, total: 100 },
                    { subject: "Science", completion: 85, total: 100 },
                    { subject: "English", completion: 75, total: 100 },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">
                          {item.subject}
                        </span>
                        <span className="text-sm text-gray-600">
                          {item.completion}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getProgressColor(
                            item.completion
                          )}`}
                          style={{ width: `${item.completion}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search students..."
                      value={searchQuery}
                      onChange={(e: {
                        target: { value: SetStateAction<string> };
                      }) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Classes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="grade-10a">Grade 10A</SelectItem>
                    <SelectItem value="grade-11b">Grade 11B</SelectItem>
                    <SelectItem value="grade-12a">Grade 12A</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={selectedSubject}
                  onValueChange={setSelectedSubject}
                >
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Subjects" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="algebra">Algebra</SelectItem>
                    <SelectItem value="calculus">Calculus</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Current Term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current">Current Term</SelectItem>
                    <SelectItem value="previous">Previous Term</SelectItem>
                    <SelectItem value="year">Full Year</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Student Performance Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Student Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Student
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Current Grade
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Recent Test
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Assignment Status
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Trend
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr
                        key={student.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage
                                src={student.avatar || "/placeholder.svg"}
                              />
                              <AvatarFallback>
                                {student.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {student.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                ID: {student.studentId}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Badge
                              className={getGradeColor(student.currentGrade)}
                            >
                              {student.currentGrade}
                            </Badge>
                            <span className="text-sm text-gray-600">
                              {student.gradePercentage}%
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="font-medium text-gray-900">
                              {student.recentTest}
                            </p>
                            <p className="text-sm text-gray-600">
                              {student.testSubject}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">
                              {student.assignmentStatus}
                            </Badge>
                          </div>
                        </td>
                        <td className="p-4">
                          <div
                            className={`flex items-center space-x-1 ${
                              student.trend === "up"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            <TrendingUp
                              className={`w-4 h-4 ${
                                student.trend === "down" ? "rotate-180" : ""
                              }`}
                            />
                            <span className="text-sm font-medium">
                              {student.trendValue}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
