"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Plus, Eye, Edit, MoreHorizontal } from "lucide-react"
import { Input } from "@/components/ui/parent/input"
import { Avatar, AvatarFallback } from "@/components/ui/parent/avatar"

const statsData = [
  {
    title: "Total Users",
    value: "1,847",
    icon: "👥",
    color: "bg-blue-500",
  },
  {
    title: "Active Users",
    value: "1,523",
    icon: "✅",
    color: "bg-green-500",
  },
  {
    title: "New This Month",
    value: "127",
    icon: "📈",
    color: "bg-purple-500",
  },
  {
    title: "Pending Approval",
    value: "23",
    icon: "⏳",
    color: "bg-orange-500",
  },
]

const roleDistribution = [
  { role: "Students", count: 1456, color: "bg-blue-500" },
  { role: "Teachers", count: 234, color: "bg-green-500" },
  { role: "Administrators", count: 89, color: "bg-purple-500" },
  { role: "Support Staff", count: 68, color: "bg-orange-500" },
]

const usersData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@riverside.edu",
    role: "Principal",
    school: "Riverside Elementary",
    status: "active",
    lastLogin: "2 hours ago",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@oakvalley.edu",
    role: "Teacher",
    school: "Oak Valley High",
    status: "active",
    lastLogin: "1 day ago",
    initials: "MC",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@mountainview.edu",
    role: "Administrator",
    school: "Mountain View Middle",
    status: "inactive",
    lastLogin: "1 week ago",
    initials: "ED",
  },
  {
    id: 4,
    name: "John Wilson",
    email: "john.wilson@sunset.edu",
    role: "Support Staff",
    school: "Sunset Academy",
    status: "active",
    lastLogin: "5 minutes ago",
    initials: "JW",
  },
  {
    id: 5,
    name: "Lisa Brown",
    email: "lisa.brown@district1.edu",
    role: "District Admin",
    school: "District Office",
    status: "active",
    lastLogin: "30 minutes ago",
    initials: "LB",
  },
]

export function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredUsers = usersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "active" && user.status === "active") ||
      (activeTab === "inactive" && user.status === "inactive")
    return matchesSearch && matchesTab
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Users Management</h1>
        <p className="text-gray-400 mt-2">Manage all users across your educational system</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Role Distribution */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Role Distribution</h3>
            <div className="space-y-4">
              {roleDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-gray-300">{item.role}</span>
                  </div>
                  <span className="text-white font-semibold">{item.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Search and Add User */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {[
              { key: "all", label: "All Users" },
              { key: "active", label: "Active" },
              { key: "inactive", label: "Inactive" },
            ].map((tab) => (
              <Button
                key={tab.key}
                variant={activeTab === tab.key ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.key)}
                className={activeTab === tab.key ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-blue-600 text-white font-semibold">{user.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                      <Badge
                        variant={user.status === "active" ? "default" : "secondary"}
                        className={user.status === "active" ? "bg-green-600" : "bg-gray-600"}
                      >
                        {user.status}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{user.email}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                      <div>
                        <span className="text-gray-500">Role:</span> {user.role}
                      </div>
                      <div>
                        <span className="text-gray-500">School:</span> {user.school}
                      </div>
                      <div>
                        <span className="text-gray-500">Last login:</span> {user.lastLogin}
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
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-4 h-4" />
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