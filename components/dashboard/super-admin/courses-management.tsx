"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Eye, Edit, MoreHorizontal, Users, Clock, Calendar } from "lucide-react"

const statsData = [
  {
    title: "Total Courses",
    value: "342",
    icon: "📚",
    color: "bg-blue-500",
  },
  {
    title: "Active Courses",
    value: "267",
    icon: "✅",
    color: "bg-green-500",
  },
  {
    title: "Enrolled Students",
    value: "8,234",
    icon: "👥",
    color: "bg-purple-500",
  },
  {
    title: "Course Categories",
    value: "12",
    icon: "📂",
    color: "bg-orange-500",
  },
]

const categories = [
  "All Categories",
  "Mathematics",
  "Science",
  "English",
  "Social Studies",
  "Arts",
  "Physical Education",
]

const coursesData = [
  {
    id: 1,
    title: "Advanced Mathematics",
    code: "MATH401",
    subject: "Mathematics",
    description: "Advanced calculus and analytical geometry for senior students",
    instructor: "Dr. Sarah Johnson",
    school: "Oak Valley High School",
    studentsEnrolled: 28,
    duration: "36 weeks",
    startDate: "9/1/2024",
    status: "active",
    credits: 4,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Introduction to Biology",
    code: "BIO101",
    subject: "Science",
    description: "Fundamental concepts of biology and life sciences",
    instructor: "Prof. Michael Chen",
    school: "Riverside Elementary",
    studentsEnrolled: 35,
    duration: "32 weeks",
    startDate: "9/1/2024",
    status: "active",
    credits: 3,
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "World History",
    code: "HIST201",
    subject: "Social Studies",
    description: "Comprehensive study of world civilizations and cultures",
    instructor: "Ms. Emily Davis",
    school: "Mountain View Middle",
    studentsEnrolled: 42,
    duration: "36 weeks",
    startDate: "9/15/2024",
    status: "pending",
    credits: 3,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Creative Writing",
    code: "ENG305",
    subject: "English",
    description: "Develop writing skills through creative expression",
    instructor: "Mr. John Wilson",
    school: "Sunset Academy",
    studentsEnrolled: 24,
    duration: "18 weeks",
    startDate: "1/15/2024",
    status: "completed",
    credits: 2,
    gradient: "from-orange-500 to-red-600",
  },
]

export function CoursesManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || course.subject === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-600"
      case "pending":
        return "bg-orange-600"
      case "completed":
        return "bg-gray-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Courses Management</h1>
        <p className="text-gray-400 mt-2">Manage all courses across your educational system</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div
                  className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-white text-xl`}
                >
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create Course
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="bg-gray-800 border-gray-700 overflow-hidden">
            <div className={`h-32 bg-gradient-to-r ${course.gradient} relative`}>
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute top-4 left-4">
                <Badge className={getStatusColor(course.status)}>{course.status}</Badge>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-bold text-lg">{course.title}</h3>
                <p className="text-white text-sm opacity-90">{course.code}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300 mb-2">
                    {course.subject}
                  </Badge>
                  <p className="text-gray-400 text-sm">{course.description}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>Dr. {course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{course.school}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{course.studentsEnrolled} students enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>Start: {course.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}