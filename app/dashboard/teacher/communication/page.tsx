"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/parent/input"
import { Label } from "@/components/ui/parent/label"
import { Textarea } from "@/components/ui/teacher/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog/dialog"
import {
  MessageSquare,
  Send,
  Search,
  Plus,
  Bell,
  Users,
  Mail,
  Phone,
  Calendar,
  Filter,
  MoreHorizontal,
  Reply,
} from "lucide-react"
import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar"
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header"
import useLargeScreen from "@/hooks/useLargeScreen"

type Message = {
  id: number
  sender: string
  senderRole: string
  subject: string
  preview: string
  timestamp: string
  isRead: boolean
  priority: "high" | "medium" | "low"
  avatar?: string
}

type Announcement = {
  id: number
  title: string
  content: string
  author: string
  timestamp: string
  recipients: string
  priority: "urgent" | "important" | "normal"
}

export default function TeacherCommunication() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("messages")
  const [searchQuery, setSearchQuery] = useState("")
  const [showComposeModal, setShowComposeModal] = useState(false)
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false)
  const isLargeScreen = useLargeScreen()

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const messages: Message[] = [
    {
      id: 1,
      sender: "Mrs. Johnson",
      senderRole: "Parent",
      subject: "Question about homework assignment",
      preview: "Hi Ms. Mitchell, I wanted to ask about the math homework...",
      timestamp: "2 hours ago",
      isRead: false,
      priority: "medium",
    },
    {
      id: 2,
      sender: "Principal Davis",
      senderRole: "Principal",
      subject: "Staff Meeting Tomorrow",
      preview: "Please remember we have our monthly staff meeting...",
      timestamp: "5 hours ago",
      isRead: true,
      priority: "high",
    },
    {
      id: 3,
      sender: "Mr. Thompson",
      senderRole: "Teacher",
      subject: "Collaboration on Science Fair",
      preview: "Would you like to collaborate on the upcoming science fair...",
      timestamp: "1 day ago",
      isRead: true,
      priority: "low",
    },
  ]

  const announcements: Announcement[] = [
    {
      id: 1,
      title: "Fire Drill Schedule Update",
      content:
        "The fire drill originally scheduled for tomorrow has been moved to Friday at 10:30 AM. Please prepare your classes accordingly and ensure all students are aware of the evacuation procedures.",
      author: "Principal Davis",
      timestamp: "3 hours ago",
      recipients: "All Staff",
      priority: "urgent",
    },
    {
      id: 2,
      title: "Parent-Teacher Conference Reminders",
      content:
        "Parent-teacher conferences begin next week. Please check your schedule and prepare progress reports for all students. Meeting rooms will be assigned by Friday.",
      author: "Vice Principal Smith",
      timestamp: "1 day ago",
      recipients: "All Teachers",
      priority: "important",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
      case "urgent":
        return "bg-red-100 text-red-800"
      case "medium":
      case "important":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-green-100 text-green-800"
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {(isLargeScreen || isSidebarOpen) && (
        <TeacherSidebar isOpen={isLargeScreen || isSidebarOpen} onToggleSidebar={toggleSidebar} />
      )}

      {isSidebarOpen && <div className="fixed inset-0 top-0 bg-black/70 z-40 lg:hidden" onClick={toggleSidebar} />}

      <div className="flex-1 flex flex-col overflow-hidden">
        <TeacherHeader onMenuToggle={toggleSidebar} />

        <main className="flex-1 overflow-y-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Communication Center</h1>
                <p className="text-blue-100">Stay connected with parents, students, and colleagues</p>
              </div>
              <div className="hidden md:flex space-x-3">
                <Dialog open={showComposeModal} onOpenChange={setShowComposeModal}>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      New Message
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Compose Message</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="recipient">To</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select recipient" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="parents">All Parents - Grade 10A</SelectItem>
                            <SelectItem value="students">All Students - Grade 10A</SelectItem>
                            <SelectItem value="staff">All Staff</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input placeholder="Enter subject" />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea placeholder="Type your message here..." rows={6} />
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setShowComposeModal(false)}>
                          Cancel
                        </Button>
                        <Button>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog open={showAnnouncementModal} onOpenChange={setShowAnnouncementModal}>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                      <Bell className="w-4 h-4 mr-2" />
                      New Announcement
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create Announcement</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input placeholder="Announcement title" />
                      </div>
                      <div>
                        <Label htmlFor="priority">Priority</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent</SelectItem>
                            <SelectItem value="important">Important</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="content">Content</Label>
                        <Textarea placeholder="Announcement content..." rows={6} />
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setShowAnnouncementModal(false)}>
                          Cancel
                        </Button>
                        <Button>
                          <Bell className="w-4 h-4 mr-2" />
                          Publish Announcement
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="lg:p-6 p-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Unread Messages</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Announcements</p>
                      <p className="text-2xl font-bold text-gray-900">5</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Bell className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Parent Contacts</p>
                      <p className="text-2xl font-bold text-gray-900">84</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Response Rate</p>
                      <p className="text-2xl font-bold text-gray-900">92%</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Reply className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
              <Button
                variant={selectedTab === "messages" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedTab("messages")}
                className={selectedTab === "messages" ? "bg-white shadow-sm" : ""}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </Button>
              <Button
                variant={selectedTab === "announcements" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedTab("announcements")}
                className={selectedTab === "announcements" ? "bg-white shadow-sm" : ""}
              >
                <Bell className="w-4 h-4 mr-2" />
                Announcements
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search messages or announcements..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Content based on selected tab */}
            {selectedTab === "messages" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Messages List */}
                <div className="lg:col-span-2 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Recent Messages</span>
                        <Badge variant="secondary">{messages.length} total</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`p-4 hover:bg-gray-50 cursor-pointer ${!message.isRead ? "bg-blue-50" : ""}`}
                          >
                            <div className="flex items-start space-x-3">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={message.avatar || "/placeholder.svg"} />
                                <AvatarFallback className="bg-blue-600 text-white">
                                  {message.sender
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <p className="text-sm font-medium text-gray-900">{message.sender}</p>
                                    <Badge variant="outline" className="text-xs">
                                      {message.senderRole}
                                    </Badge>
                                    <Badge className={`text-xs ${getPriorityColor(message.priority)}`}>
                                      {message.priority}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-gray-500">{message.timestamp}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900 mt-1">{message.subject}</p>
                                <p className="text-sm text-gray-600 truncate">{message.preview}</p>
                              </div>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start" onClick={() => setShowComposeModal(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        New Message
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Users className="w-4 h-4 mr-2" />
                        Contact Parents
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule Call
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Meeting
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Message Templates</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Assignment Reminder
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Absence Follow-up
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Progress Update
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Meeting Request
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {selectedTab === "announcements" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Recent Announcements</span>
                      <Button onClick={() => setShowAnnouncementModal(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        New Announcement
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {announcements.map((announcement) => (
                      <div key={announcement.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                            <Badge className={`text-xs ${getPriorityColor(announcement.priority)}`}>
                              {announcement.priority}
                            </Badge>
                          </div>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-gray-600 mb-3">{announcement.content}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>By {announcement.author}</span>
                            <span>To {announcement.recipients}</span>
                          </div>
                          <span>{announcement.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
