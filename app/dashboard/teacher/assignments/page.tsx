"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Plus,
  Search,
  Calendar,
  Eye,
  Edit,
  MoreHorizontal,
  FileText,
  Clock,
  CheckCircle,
  TrendingUp,
  Upload,
  Download,
  Bell,
} from "lucide-react";
import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar";
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header";
import { Input } from "@/components/ui/parent/input";
import { Label } from "@/components/ui/parent/label";
import { Checkbox } from "@/components/ui/teacher/checkout";
import { Textarea } from "@/components/ui/teacher/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog";
import useLargeScreen from "@/hooks/useLargeScreen";

type Assignment = {
  id: number;
  title: string;
  description: string;
  subject: string;
  class: string;
  dueDate: string;
  dueTime: string;
  submissions: number;
  totalStudents: number;
  status: string;
  graded: number;
  avgScore: string;
};

export default function TeacherAssignments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLargeScreen = useLargeScreen();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const assignments: Assignment[] = [
    {
      id: 1,
      title: "Quadratic Equations Worksheet",
      description: "Chapter 5 exercises and practice problems",
      subject: "Mathematics",
      class: "Grade 10A",
      dueDate: "March 15, 2025",
      dueTime: "11:59 PM",
      submissions: 24,
      totalStudents: 28,
      status: "submitted",
      graded: 20,
      avgScore: "85.2/100",
    },
    {
      id: 2,
      title: "Linear Algebra Problem Set",
      description: "Matrix operations and vector spaces",
      subject: "Algebra",
      class: "Grade 11B",
      dueDate: "March 18, 2025",
      dueTime: "11:59 PM",
      submissions: 18,
      totalStudents: 25,
      status: "pending",
      graded: 0,
      avgScore: "N/A",
    },
    {
      id: 3,
      title: "Calculus Integration Test",
      description: "Definite and indefinite integrals",
      subject: "Calculus",
      class: "Grade 12A",
      dueDate: "March 12, 2025",
      dueTime: "11:59 PM",
      submissions: 20,
      totalStudents: 22,
      status: "overdue",
      graded: 15,
      avgScore: "78.5/100",
    },
    {
      id: 4,
      title: "Geometry Proof Assignment",
      description: "Triangle congruence and similarity proofs",
      subject: "Geometry",
      class: "Grade 10C",
      dueDate: "March 20, 2025",
      dueTime: "11:59 PM",
      submissions: 27,
      totalStudents: 27,
      status: "graded",
      graded: 27,
      avgScore: "92.1/100",
    },
    {
      id: 5,
      title: "Statistics Data Analysis",
      description: "Probability distributions and hypothesis testing",
      subject: "Mathematics",
      class: "Grade 11A",
      dueDate: "March 22, 2025",
      dueTime: "11:59 PM",
      submissions: 12,
      totalStudents: 23,
      status: "pending",
      graded: 0,
      avgScore: "N/A",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      case "graded":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-yellow-500";
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
          <div className=" grid gap-3 lg:gap-0 lg:flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
              <p className="text-gray-600">
                Create, manage and grade homework assignments for your classes
              </p>
            </div>

            <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Assignment
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Assignment</DialogTitle>
                </DialogHeader>
                <CreateAssignmentForm
                  onClose={() => setShowCreateModal(false)}
                />
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Assignments
                    </p>
                    <p className="text-3xl font-bold text-gray-900">24</p>
                    <p className="text-sm text-green-600">+3 this week</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Pending Submissions
                    </p>
                    <p className="text-3xl font-bold text-gray-900">142</p>
                    <p className="text-sm text-yellow-600">18 due today</p>
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
                    <p className="text-sm font-medium text-gray-600">
                      Graded Assignments
                    </p>
                    <p className="text-3xl font-bold text-gray-900">89</p>
                    <p className="text-sm text-green-600">12 this week</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Avg. Completion
                    </p>
                    <p className="text-3xl font-bold text-gray-900">87%</p>
                    <p className="text-sm text-green-600">
                      +2% from last month
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
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
                      placeholder="Search assignments..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

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
                    <SelectItem value="geometry">Geometry</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Classes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="grade-10a">Grade 10A</SelectItem>
                    <SelectItem value="grade-10c">Grade 10C</SelectItem>
                    <SelectItem value="grade-11a">Grade 11A</SelectItem>
                    <SelectItem value="grade-11b">Grade 11B</SelectItem>
                    <SelectItem value="grade-12a">Grade 12A</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="submitted">Submitted</SelectItem>
                    <SelectItem value="graded">Graded</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Assignments Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium text-gray-700">
                        <Checkbox />
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Assignment
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Subject/Class
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Due Date
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Submissions
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Status
                      </th>
                      <th className="text-left p-4 font-medium text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignments.map((assignment) => (
                      <tr
                        key={assignment.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-4">
                          <Checkbox />
                        </td>
                        <td className="p-4">
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {assignment.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {assignment.description}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="font-medium text-gray-900">
                              {assignment.subject}
                            </p>
                            <p className="text-sm text-gray-600">
                              {assignment.class}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="font-medium text-gray-900">
                              {assignment.dueDate}
                            </p>
                            <p className="text-sm text-gray-600">
                              {assignment.dueTime}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">
                                {assignment.submissions}/
                                {assignment.totalStudents}
                              </span>
                            </div>
                            <Progress
                              value={
                                (assignment.submissions /
                                  assignment.totalStudents) *
                                100
                              }
                              className="h-2"
                            />
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className={getStatusColor(assignment.status)}>
                            {assignment.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                setSelectedAssignment(assignment);
                                setShowViewModal(true);
                              }}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="grid gap-3 lg:gap-0 lg:flex items-center justify-between p-4 border-t">
                <p className="text-sm text-gray-600">
                  Showing 1 to 5 of 24 assignments
                </p>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button variant="default" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* View Assignment Modal */}
          <Dialog open={showViewModal} onOpenChange={setShowViewModal}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{selectedAssignment?.title}</DialogTitle>
                <p className="text-sm text-gray-600">
                  {selectedAssignment?.subject} • {selectedAssignment?.class} •
                  Due {selectedAssignment?.dueDate}
                </p>
              </DialogHeader>
              {selectedAssignment && (
                <ViewAssignmentContent
                  assignment={selectedAssignment}
                  onClose={() => setShowViewModal(false)}
                />
              )}
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  );
}

function CreateAssignmentForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    subject: "",
    class: "",
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
    totalPoints: "100",
    assignmentType: "homework",
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Select
            value={formData.subject}
            onValueChange={(value) =>
              setFormData({ ...formData, subject: value })
            }
          >
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
          <Label htmlFor="class">Class</Label>
          <Select
            value={formData.class}
            onValueChange={(value) =>
              setFormData({ ...formData, class: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Grade 10A" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grade-10a">Grade 10A</SelectItem>
              <SelectItem value="grade-10c">Grade 10C</SelectItem>
              <SelectItem value="grade-11a">Grade 11A</SelectItem>
              <SelectItem value="grade-11b">Grade 11B</SelectItem>
              <SelectItem value="grade-12a">Grade 12A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="title">Assignment Title</Label>
        <Input
          placeholder="Enter assignment title..."
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          placeholder="Provide detailed instructions for the assignment..."
          value={formData.description}
          onChange={(e: { target: { value: any } }) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={4}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            type="date"
            value={formData.dueDate}
            onChange={(e) =>
              setFormData({ ...formData, dueDate: e.target.value })
            }
          />
        </div>

        <div>
          <Label htmlFor="dueTime">Due Time</Label>
          <Input
            type="time"
            value={formData.dueTime}
            onChange={(e) =>
              setFormData({ ...formData, dueTime: e.target.value })
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="totalPoints">Total Points</Label>
          <Input
            placeholder="100"
            value={formData.totalPoints}
            onChange={(e) =>
              setFormData({ ...formData, totalPoints: e.target.value })
            }
          />
        </div>

        <div>
          <Label htmlFor="assignmentType">Assignment Type</Label>
          <Select
            value={formData.assignmentType}
            onValueChange={(value) =>
              setFormData({ ...formData, assignmentType: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Homework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="homework">Homework</SelectItem>
              <SelectItem value="quiz">Quiz</SelectItem>
              <SelectItem value="test">Test</SelectItem>
              <SelectItem value="project">Project</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>Attachments</Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            Drag and drop files here, or click to browse
          </p>
          <p className="text-xs text-gray-500">
            PDF, DOC, DOCX, JPG, PNG up to 10MB
          </p>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Create Assignment
        </Button>
      </div>
    </div>
  );
}

function ViewAssignmentContent({
  assignment,
  onClose,
}: {
  assignment: Assignment;
  onClose: () => void;
}) {
  const studentSubmissions = [
    {
      name: "John Davis",
      initials: "JD",
      submittedAt: "March 14, 2025 at 10:30 PM",
      grade: "92/100",
      status: "graded",
    },
    {
      name: "Sarah Miller",
      initials: "SM",
      submittedAt: "March 13, 2025 at 8:45 PM",
      grade: "88/100",
      status: "graded",
    },
    {
      name: "Michael Johnson",
      initials: "MJ",
      submittedAt: "Not submitted",
      grade: "Pending",
      status: "pending",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-4">Assignment Description</h3>
          <p className="text-gray-600 mb-4">
            Complete the quadratic equations worksheet covering factoring,
            completing the square, and using the quadratic formula. Show all
            work and provide explanations for each step.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Assignment Statistics</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Students:</span>
              <span className="font-medium">28</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Submitted:</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pending:</span>
              <span className="font-medium">4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Graded:</span>
              <span className="font-medium">20</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average Score:</span>
              <span className="font-medium">85.2/100</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Student Submissions</h3>
        <div className="space-y-3">
          {studentSubmissions.map((student, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                  {student.initials}
                </div>
                <div>
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.submittedAt}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge
                  className={
                    student.status === "graded"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }
                >
                  {student.grade}
                </Badge>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Edit className="w-4 h-4 mr-2" />
            Grade All Submissions
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Download className="w-4 h-4 mr-2" />
            Export Results
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Bell className="w-4 h-4 mr-2" />
            Send Reminders
          </Button>
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-2" />
            Edit Assignment
          </Button>
        </div>
      </div>
    </div>
  );
}




// "use client"

// import { SetStateAction, useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// import { Textarea } from "@/components/ui/textarea"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   Plus,
//   Search,
//   Calendar,
//   Eye,
//   Edit,
//   MoreHorizontal,
//   FileText,
//   Clock,
//   CheckCircle,
//   TrendingUp,
//   Upload,
//   Download,
//   Bell,
// } from "lucide-react"
// import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar"
// import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header"
// import { Input } from "@/components/ui/parent/input"
// import { Label } from "@/components/ui/parent/label"

// export default function TeacherAssignments() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [selectedSubject, setSelectedSubject] = useState("all")
//   const [selectedClass, setSelectedClass] = useState("all")
//   const [selectedStatus, setSelectedStatus] = useState("all")
//   const [showCreateModal, setShowCreateModal] = useState(false)
//   const [showViewModal, setShowViewModal] = useState(false)
//   const [selectedAssignment, setSelectedAssignment] = useState(null)

//   const assignments = [
//     {
//       id: 1,
//       title: "Quadratic Equations Worksheet",
//       description: "Chapter 5 exercises and practice problems",
//       subject: "Mathematics",
//       class: "Grade 10A",
//       dueDate: "March 15, 2025",
//       dueTime: "11:59 PM",
//       submissions: 24,
//       totalStudents: 28,
//       status: "submitted",
//       graded: 20,
//       avgScore: "85.2/100",
//     },
//     {
//       id: 2,
//       title: "Linear Algebra Problem Set",
//       description: "Matrix operations and vector spaces",
//       subject: "Algebra",
//       class: "Grade 11B",
//       dueDate: "March 18, 2025",
//       dueTime: "11:59 PM",
//       submissions: 18,
//       totalStudents: 25,
//       status: "pending",
//       graded: 0,
//       avgScore: "N/A",
//     },
//     {
//       id: 3,
//       title: "Calculus Integration Test",
//       description: "Definite and indefinite integrals",
//       subject: "Calculus",
//       class: "Grade 12A",
//       dueDate: "March 12, 2025",
//       dueTime: "11:59 PM",
//       submissions: 20,
//       totalStudents: 22,
//       status: "overdue",
//       graded: 15,
//       avgScore: "78.5/100",
//     },
//     {
//       id: 4,
//       title: "Geometry Proof Assignment",
//       description: "Triangle congruence and similarity proofs",
//       subject: "Geometry",
//       class: "Grade 10C",
//       dueDate: "March 20, 2025",
//       dueTime: "11:59 PM",
//       submissions: 27,
//       totalStudents: 27,
//       status: "graded",
//       graded: 27,
//       avgScore: "92.1/100",
//     },
//     {
//       id: 5,
//       title: "Statistics Data Analysis",
//       description: "Probability distributions and hypothesis testing",
//       subject: "Mathematics",
//       class: "Grade 11A",
//       dueDate: "March 22, 2025",
//       dueTime: "11:59 PM",
//       submissions: 12,
//       totalStudents: 23,
//       status: "pending",
//       graded: 0,
//       avgScore: "N/A",
//     },
//   ]

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "submitted":
//         return "bg-green-100 text-green-800"
//       case "pending":
//         return "bg-yellow-100 text-yellow-800"
//       case "overdue":
//         return "bg-red-100 text-red-800"
//       case "graded":
//         return "bg-blue-100 text-blue-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   const getProgressColor = (percentage: number) => {
//     if (percentage >= 80) return "bg-green-500"
//     if (percentage >= 60) return "bg-yellow-500"
//     return "bg-red-500"
//   }

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <TeacherSidebar />

//       <div className="flex-1 flex flex-col overflow-hidden">
//         <TeacherHeader />

//         <main className="flex-1 overflow-y-auto p-6">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
//               <p className="text-gray-600">Create, manage and grade homework assignments for your classes</p>
//             </div>

//             <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
//               <DialogTrigger asChild>
//                 <Button className="bg-blue-600 hover:bg-blue-700">
//                   <Plus className="w-4 h-4 mr-2" />
//                   Create Assignment
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-2xl">
//                 <DialogHeader>
//                   <DialogTitle>Create New Assignment</DialogTitle>
//                 </DialogHeader>
//                 <CreateAssignmentForm onClose={() => setShowCreateModal(false)} />
//               </DialogContent>
//             </Dialog>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Total Assignments</p>
//                     <p className="text-3xl font-bold text-gray-900">24</p>
//                     <p className="text-sm text-green-600">+3 this week</p>
//                   </div>
//                   <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                     <FileText className="w-6 h-6 text-blue-600" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Pending Submissions</p>
//                     <p className="text-3xl font-bold text-gray-900">142</p>
//                     <p className="text-sm text-yellow-600">18 due today</p>
//                   </div>
//                   <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
//                     <Clock className="w-6 h-6 text-yellow-600" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Graded Assignments</p>
//                     <p className="text-3xl font-bold text-gray-900">89</p>
//                     <p className="text-sm text-green-600">12 this week</p>
//                   </div>
//                   <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                     <CheckCircle className="w-6 h-6 text-green-600" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Avg. Completion</p>
//                     <p className="text-3xl font-bold text-gray-900">87%</p>
//                     <p className="text-sm text-green-600">+2% from last month</p>
//                   </div>
//                   <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                     <TrendingUp className="w-6 h-6 text-purple-600" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Filters */}
//           <Card className="mb-6">
//             <CardContent className="p-6">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1">
//                   <div className="relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                     <Input
//                       placeholder="Search assignments..."
//                       value={searchQuery}
//                       onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchQuery(e.target.value)}
//                       className="pl-10"
//                     />
//                   </div>
//                 </div>

//                 <Select value={selectedSubject} onValueChange={setSelectedSubject}>
//                   <SelectTrigger className="w-full md:w-48">
//                     <SelectValue placeholder="All Subjects" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Subjects</SelectItem>
//                     <SelectItem value="mathematics">Mathematics</SelectItem>
//                     <SelectItem value="algebra">Algebra</SelectItem>
//                     <SelectItem value="calculus">Calculus</SelectItem>
//                     <SelectItem value="geometry">Geometry</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <Select value={selectedClass} onValueChange={setSelectedClass}>
//                   <SelectTrigger className="w-full md:w-48">
//                     <SelectValue placeholder="All Classes" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Classes</SelectItem>
//                     <SelectItem value="grade-10a">Grade 10A</SelectItem>
//                     <SelectItem value="grade-10c">Grade 10C</SelectItem>
//                     <SelectItem value="grade-11a">Grade 11A</SelectItem>
//                     <SelectItem value="grade-11b">Grade 11B</SelectItem>
//                     <SelectItem value="grade-12a">Grade 12A</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <Select value={selectedStatus} onValueChange={setSelectedStatus}>
//                   <SelectTrigger className="w-full md:w-48">
//                     <SelectValue placeholder="All Status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Status</SelectItem>
//                     <SelectItem value="pending">Pending</SelectItem>
//                     <SelectItem value="submitted">Submitted</SelectItem>
//                     <SelectItem value="graded">Graded</SelectItem>
//                     <SelectItem value="overdue">Overdue</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <Button variant="outline">
//                   <Calendar className="w-4 h-4 mr-2" />
//                   Date Range
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Assignments Table */}
//           <Card>
//             <CardContent className="p-0">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50 border-b">
//                     <tr>
//                       <th className="text-left p-4 font-medium text-gray-700">
//                         <Checkbox />
//                       </th>
//                       <th className="text-left p-4 font-medium text-gray-700">Assignment</th>
//                       <th className="text-left p-4 font-medium text-gray-700">Subject/Class</th>
//                       <th className="text-left p-4 font-medium text-gray-700">Due Date</th>
//                       <th className="text-left p-4 font-medium text-gray-700">Submissions</th>
//                       <th className="text-left p-4 font-medium text-gray-700">Status</th>
//                       <th className="text-left p-4 font-medium text-gray-700">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {assignments.map((assignment) => (
//                       <tr key={assignment.id} className="border-b hover:bg-gray-50">
//                         <td className="p-4">
//                           <Checkbox />
//                         </td>
//                         <td className="p-4">
//                           <div>
//                             <h4 className="font-medium text-gray-900">{assignment.title}</h4>
//                             <p className="text-sm text-gray-600">{assignment.description}</p>
//                           </div>
//                         </td>
//                         <td className="p-4">
//                           <div>
//                             <p className="font-medium text-gray-900">{assignment.subject}</p>
//                             <p className="text-sm text-gray-600">{assignment.class}</p>
//                           </div>
//                         </td>
//                         <td className="p-4">
//                           <div>
//                             <p className="font-medium text-gray-900">{assignment.dueDate}</p>
//                             <p className="text-sm text-gray-600">{assignment.dueTime}</p>
//                           </div>
//                         </td>
//                         <td className="p-4">
//                           <div className="space-y-2">
//                             <div className="flex items-center justify-between">
//                               <span className="text-sm font-medium">
//                                 {assignment.submissions}/{assignment.totalStudents}
//                               </span>
//                             </div>
//                             <Progress
//                               value={(assignment.submissions / assignment.totalStudents) * 100}
//                               className="h-2"
//                             />
//                           </div>
//                         </td>
//                         <td className="p-4">
//                           <Badge className={getStatusColor(assignment.status)}>{assignment.status}</Badge>
//                         </td>
//                         <td className="p-4">
//                           <div className="flex items-center space-x-2">
//                             <Button
//                               variant="ghost"
//                               size="icon"
//                               onClick={() => {
//                                 setSelectedAssignment(assignment)
//                                 setShowViewModal(true)
//                               }}
//                             >
//                               <Eye className="w-4 h-4" />
//                             </Button>
//                             <Button variant="ghost" size="icon">
//                               <Edit className="w-4 h-4" />
//                             </Button>
//                             <Button variant="ghost" size="icon">
//                               <MoreHorizontal className="w-4 h-4" />
//                             </Button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Pagination */}
//               <div className="flex items-center justify-between p-4 border-t">
//                 <p className="text-sm text-gray-600">Showing 1 to 5 of 24 assignments</p>
//                 <div className="flex items-center space-x-2">
//                   <Button variant="outline" size="sm">
//                     Previous
//                   </Button>
//                   <Button variant="default" size="sm">
//                     1
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     2
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     3
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Next
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* View Assignment Modal */}
//           <Dialog open={showViewModal} onOpenChange={setShowViewModal}>
//             <DialogContent className="max-w-4xl">
//               <DialogHeader>
//                 <DialogTitle>{selectedAssignment?.title}</DialogTitle>
//                 <p className="text-sm text-gray-600">
//                   {selectedAssignment?.subject} • {selectedAssignment?.class} • Due {selectedAssignment?.dueDate}
//                 </p>
//               </DialogHeader>
//               {selectedAssignment && (
//                 <ViewAssignmentContent assignment={selectedAssignment} onClose={() => setShowViewModal(false)} />
//               )}
//             </DialogContent>
//           </Dialog>
//         </main>
//       </div>
//     </div>
//   )
// }

// function CreateAssignmentForm({ onClose }) {
//   const [formData, setFormData] = useState({
//     subject: "",
//     class: "",
//     title: "",
//     description: "",
//     dueDate: "",
//     dueTime: "",
//     totalPoints: "100",
//     assignmentType: "homework",
//   })

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="subject">Subject</Label>
//           <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
//             <SelectTrigger>
//               <SelectValue placeholder="Mathematics" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="mathematics">Mathematics</SelectItem>
//               <SelectItem value="algebra">Algebra</SelectItem>
//               <SelectItem value="calculus">Calculus</SelectItem>
//               <SelectItem value="geometry">Geometry</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div>
//           <Label htmlFor="class">Class</Label>
//           <Select value={formData.class} onValueChange={(value) => setFormData({ ...formData, class: value })}>
//             <SelectTrigger>
//               <SelectValue placeholder="Grade 10A" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="grade-10a">Grade 10A</SelectItem>
//               <SelectItem value="grade-10c">Grade 10C</SelectItem>
//               <SelectItem value="grade-11a">Grade 11A</SelectItem>
//               <SelectItem value="grade-11b">Grade 11B</SelectItem>
//               <SelectItem value="grade-12a">Grade 12A</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div>
//         <Label htmlFor="title">Assignment Title</Label>
//         <Input
//           placeholder="Enter assignment title..."
//           value={formData.title}
//           onChange={(e: { target: { value: any } }) => setFormData({ ...formData, title: e.target.value })}
//         />
//       </div>

//       <div>
//         <Label htmlFor="description">Description</Label>
//         <Textarea
//           placeholder="Provide detailed instructions for the assignment..."
//           value={formData.description}
//           onChange={(e: { target: { value: any } }) => setFormData({ ...formData, description: e.target.value })}
//           rows={4}
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="dueDate">Due Date</Label>
//           <Input
//             type="date"
//             value={formData.dueDate}
//             onChange={(e: { target: { value: any } }) => setFormData({ ...formData, dueDate: e.target.value })}
//           />
//         </div>

//         <div>
//           <Label htmlFor="dueTime">Due Time</Label>
//           <Input
//             type="time"
//             value={formData.dueTime}
//             onChange={(e: { target: { value: any } }) => setFormData({ ...formData, dueTime: e.target.value })}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="totalPoints">Total Points</Label>
//           <Input
//             placeholder="100"
//             value={formData.totalPoints}
//             onChange={(e: { target: { value: any } }) => setFormData({ ...formData, totalPoints: e.target.value })}
//           />
//         </div>

//         <div>
//           <Label htmlFor="assignmentType">Assignment Type</Label>
//           <Select
//             value={formData.assignmentType}
//             onValueChange={(value) => setFormData({ ...formData, assignmentType: value })}
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="Homework" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="homework">Homework</SelectItem>
//               <SelectItem value="quiz">Quiz</SelectItem>
//               <SelectItem value="test">Test</SelectItem>
//               <SelectItem value="project">Project</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div>
//         <Label>Attachments</Label>
//         <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//           <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//           <p className="text-sm text-gray-600">Drag and drop files here, or click to browse</p>
//           <p className="text-xs text-gray-500">PDF, DOC, DOCX, JPG, PNG up to 10MB</p>
//         </div>
//       </div>

//       <div className="flex justify-end space-x-3">
//         <Button variant="outline" onClick={onClose}>
//           Cancel
//         </Button>
//         <Button className="bg-blue-600 hover:bg-blue-700">Create Assignment</Button>
//       </div>
//     </div>
//   )
// }

// function ViewAssignmentContent({  }) {
//   const studentSubmissions = [
//     {
//       name: "John Davis",
//       initials: "JD",
//       submittedAt: "March 14, 2025 at 10:30 PM",
//       grade: "92/100",
//       status: "graded",
//     },
//     {
//       name: "Sarah Miller",
//       initials: "SM",
//       submittedAt: "March 13, 2025 at 8:45 PM",
//       grade: "88/100",
//       status: "graded",
//     },
//     {
//       name: "Michael Johnson",
//       initials: "MJ",
//       submittedAt: "Not submitted",
//       grade: "Pending",
//       status: "pending",
//     },
//   ]

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <h3 className="font-semibold mb-4">Assignment Description</h3>
//           <p className="text-gray-600 mb-4">
//             Complete the quadratic equations worksheet covering factoring, completing the square, and using the
//             quadratic formula. Show all work and provide explanations for each step.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-semibold mb-4">Assignment Statistics</h3>
//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Total Students:</span>
//               <span className="font-medium">28</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Submitted:</span>
//               <span className="font-medium">24</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Pending:</span>
//               <span className="font-medium">4</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Graded:</span>
//               <span className="font-medium">20</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Average Score:</span>
//               <span className="font-medium">85.2/100</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h3 className="font-semibold mb-4">Student Submissions</h3>
//         <div className="space-y-3">
//           {studentSubmissions.map((student, index) => (
//             <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
//                   {student.initials}
//                 </div>
//                 <div>
//                   <p className="font-medium">{student.name}</p>
//                   <p className="text-sm text-gray-600">{student.submittedAt}</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Badge
//                   className={
//                     student.status === "graded" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
//                   }
//                 >
//                   {student.grade}
//                 </Badge>
//                 <Button variant="outline" size="sm">
//                   View
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h3 className="font-semibold mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//           <Button className="bg-blue-600 hover:bg-blue-700">
//             <Edit className="w-4 h-4 mr-2" />
//             Grade All Submissions
//           </Button>
//           <Button className="bg-green-600 hover:bg-green-700">
//             <Download className="w-4 h-4 mr-2" />
//             Export Results
//           </Button>
//           <Button className="bg-orange-600 hover:bg-orange-700">
//             <Bell className="w-4 h-4 mr-2" />
//             Send Reminders
//           </Button>
//           <Button variant="outline">
//             <Edit className="w-4 h-4 mr-2" />
//             Edit Assignment
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }
