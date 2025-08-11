"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Eye, Edit, Trash2, MapPin, User } from "lucide-react"

const statsData = [
  {
    title: "Total Schools",
    value: "24",
    icon: "🏫",
    color: "bg-blue-500",
  },
  {
    title: "Total Students",
    value: "12,847",
    icon: "👥",
    color: "bg-green-500",
  },
  {
    title: "Total Teachers",
    value: "892",
    icon: "👨‍🏫",
    color: "bg-purple-500",
  },
  {
    title: "Districts",
    value: "3",
    icon: "🏛️",
    color: "bg-orange-500",
  },
]

const schoolsData = [
  {
    id: 1,
    name: "Riverside Elementary School",
    type: "Elementary",
    district: "District 1",
    students: 456,
    teachers: 24,
    address: "123 Main St, Springfield",
    principal: "Sarah Johnson",
    status: "active",
  },
  {
    id: 2,
    name: "Oak Valley High School",
    type: "High School",
    district: "District 2",
    students: 1234,
    teachers: 78,
    address: "456 Oak Ave, Springfield",
    principal: "Michael Chen",
    status: "active",
  },
  {
    id: 3,
    name: "Mountain View Middle School",
    type: "Middle School",
    district: "District 1",
    students: 678,
    teachers: 45,
    address: "789 Hill Rd, Springfield",
    principal: "Emily Davis",
    status: "maintenance",
  },
  {
    id: 4,
    name: "Sunset Academy",
    type: "Academy",
    district: "District 3",
    students: 890,
    teachers: 56,
    address: "321 Sunset Blvd, Springfield",
    principal: "John Wilson",
    status: "active",
  },
]

export function SchoolsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("all")

  const filteredSchools = schoolsData.filter((school) => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDistrict = selectedDistrict === "all" || school.district === selectedDistrict
    return matchesSearch && matchesDistrict
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Schools Management</h1>
        <p className="text-gray-400 mt-2">Manage all educational institutions in your system</p>
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
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search schools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
            <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="All Districts" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all">All Districts</SelectItem>
              <SelectItem value="District 1">District 1</SelectItem>
              <SelectItem value="District 2">District 2</SelectItem>
              <SelectItem value="District 3">District 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add School
        </Button>
      </div>

      {/* Schools List */}
      <div className="space-y-4">
        {filteredSchools.map((school) => (
          <Card key={school.id} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    🏫
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{school.name}</h3>
                      <Badge
                        variant={school.status === "active" ? "default" : "secondary"}
                        className={school.status === "active" ? "bg-green-600" : "bg-orange-600"}
                      >
                        {school.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-400">
                      <div>
                        <span className="text-gray-500">Type:</span> {school.type}
                      </div>
                      <div>
                        <span className="text-gray-500">District:</span> {school.district}
                      </div>
                      <div>
                        <span className="text-gray-500">Students:</span> {school.students}
                      </div>
                      <div>
                        <span className="text-gray-500">Teachers:</span> {school.teachers}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {school.address}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Principal: {school.principal}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}