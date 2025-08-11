"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Eye, Bell, Send } from "lucide-react"

const messages = [
  {
    id: 1,
    sender: {
      name: "Sarah Johnson",
      role: "Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    subject: "Parent-Teacher Conference Request",
    preview: "I would like to schedule a meeting to discuss...",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    sender: {
      name: "Michael Chen",
      role: "Principal",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    subject: "School Policy Update",
    preview: "Please review the updated policies for the new semester...",
    time: "4 hours ago",
    unread: true,
  },
  {
    id: 3,
    sender: {
      name: "Emily Davis",
      role: "Parent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    subject: "Student Progress Inquiry",
    preview: "Could you provide an update on my child's progress in...",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 4,
    sender: {
      name: "Robert Wilson",
      role: "Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    subject: "Field Trip Permission",
    preview: "Please approve the field trip permission forms for...",
    time: "2 days ago",
    unread: false,
  },
]

const announcements = [
  {
    id: 1,
    title: "Winter Break Schedule",
    content:
      "Please note that classes will be suspended from December 20th to January 5th for winter break. School will resume on January 6th.",
    author: "School Administration",
    date: "2024-01-15",
    priority: "High",
    views: 1247,
    status: "Published",
  },
  {
    id: 2,
    title: "New Library Hours",
    content: "Starting next week, the library will extend its hours from 7:00 AM to 8:00 PM on weekdays.",
    author: "Library Staff",
    date: "2024-01-14",
    priority: "Normal",
    views: 856,
    status: "Published",
  },
  {
    id: 3,
    title: "Parent-Teacher Conferences",
    content:
      "Parent-teacher conferences are scheduled for February 15-17. Please contact your child's teacher to schedule an appointment.",
    author: "Academic Office",
    date: "2024-01-13",
    priority: "High",
    views: 2103,
    status: "Published",
  },
]

export default function CommunicationPage() {
  const [activeTab, setActiveTab] = useState("messages")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Communication</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage messages and announcements</p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <MessageSquare className="w-4 h-4 mr-2" />
            New Message
          </Button>
          <Button variant="outline">
            <Bell className="w-4 h-4 mr-2" />
            New Announcement
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages Section */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="inbox">Inbox</TabsTrigger>
                <TabsTrigger value="sent">Sent</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
              </TabsList>

              <TabsContent value="inbox" className="space-y-4 mt-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer ${message.unread ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800" : "border-gray-200 dark:border-gray-700"}`}
                  >
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={message.sender.avatar || "/placeholder.svg"} alt={message.sender.name} />
                        <AvatarFallback>
                          {message.sender.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-gray-900 dark:text-white">{message.sender.name}</p>
                            <Badge variant="outline" className="text-xs">
                              {message.sender.role}
                            </Badge>
                            {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                          </div>
                          <span className="text-sm text-gray-500">{message.time}</span>
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white mt-1">{message.subject}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">{message.preview}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-center pt-4">
                  <Button variant="outline">View All Messages</Button>
                </div>
              </TabsContent>

              <TabsContent value="sent" className="mt-6">
                <div className="text-center py-8">
                  <Send className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No sent messages</p>
                </div>
              </TabsContent>

              <TabsContent value="drafts" className="mt-6">
                <div className="text-center py-8">
                  <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No draft messages</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Recent Announcements */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{announcement.title}</h4>
                  <Badge variant={announcement.priority === "High" ? "destructive" : "secondary"}>
                    {announcement.priority}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">{announcement.content}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{announcement.author}</span>
                  <span>{announcement.date}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{announcement.views}</span>
                  </div>
                  <Badge variant="outline">{announcement.status}</Badge>
                </div>
              </div>
            ))}
            <div className="text-center pt-4">
              <Button variant="outline" size="sm">
                View All Announcements
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
