"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  Send,
  Mail,
  Bell,
  Users,
  Search,
  Plus,
  Eye,
  Reply,
  Archive,
  Clock,
  CheckCircle,
} from "lucide-react"
import { Sidebar } from "@/components/ui/librarian/sidebar"
import { Header } from "@/components/ui/librarian/header"
import { StatCard } from "@/components/ui/librarian/stat-card"
import { Input } from "@/components/ui/parent/input"
import { Textarea } from "@/components/ui/teacher/textarea"

export default function CommunicationPage() {
  const [selectedTab, setSelectedTab] = useState("messages")
  const [selectedMessage, setSelectedMessage] = useState(null)

  const messages = [
    {
      id: 1,
      from: "Emily Johnson",
      email: "emily.johnson@school.edu",
      subject: "Book Request - Advanced Mathematics",
      preview: "Hi, I would like to request the book 'Advanced Mathematics for Engineers' for my research project...",
      time: "2 hours ago",
      status: "unread",
      priority: "normal",
      category: "Book Request",
    },
    {
      id: 2,
      from: "Michael Chen",
      email: "michael.chen@school.edu",
      subject: "Overdue Book Inquiry",
      preview: "I received a notice about an overdue book, but I believe I returned it last week...",
      time: "5 hours ago",
      status: "read",
      priority: "high",
      category: "Inquiry",
    },
    {
      id: 3,
      from: "Dr. Sarah Williams",
      email: "sarah.williams@school.edu",
      subject: "Library Event Collaboration",
      preview: "I would like to discuss organizing a workshop on digital research methods...",
      time: "1 day ago",
      status: "replied",
      priority: "normal",
      category: "Collaboration",
    },
  ]

  const announcements = [
    {
      id: 1,
      title: "Library Hours Extended",
      content:
        "Starting next week, the library will be open until 10 PM on weekdays to accommodate student study needs.",
      date: "2025-08-20",
      status: "published",
      audience: "All Students",
      views: 245,
    },
    {
      id: 2,
      title: "New Digital Resources Available",
      content:
        "We've added 500+ new e-books and research databases to our digital collection. Access them through the library portal.",
      date: "2025-08-18",
      status: "published",
      audience: "Faculty & Students",
      views: 189,
    },
    {
      id: 3,
      title: "Upcoming Author Visit",
      content: "Join us for an exclusive meet and greet with bestselling author John Smith on August 28th.",
      date: "2025-08-15",
      status: "draft",
      audience: "All Students",
      views: 0,
    },
  ]

  const notifications = [
    {
      id: 1,
      type: "overdue_reminder",
      title: "Overdue Reminder Sent",
      description: "Sent to 12 students with overdue books",
      time: "30 minutes ago",
      status: "sent",
    },
    {
      id: 2,
      type: "event_reminder",
      title: "Event Reminder",
      description: "Digital Literacy Workshop reminder sent to 45 attendees",
      time: "2 hours ago",
      status: "sent",
    },
    {
      id: 3,
      type: "new_arrival",
      title: "New Books Notification",
      description: "Notification about 25 new science books sent to interested students",
      time: "1 day ago",
      status: "sent",
    },
  ]

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <Header
          title="Communication Center"
          subtitle="Manage messages, announcements, and notifications for library users"
          backgroundImage="/modern-communication-center.png"
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <StatCard
              title="Unread Messages"
              value={8}
              change="+3 today"
              changeType="positive"
              icon={MessageSquare}
              color="blue"
            />
            <StatCard
              title="Sent Notifications"
              value={156}
              change="+12 today"
              changeType="positive"
              icon={Bell}
              color="green"
            />
            <StatCard
              title="Active Announcements"
              value={5}
              change="+1 this week"
              changeType="positive"
              icon={Mail}
              color="purple"
            />
            <StatCard
              title="Response Rate"
              value="94%"
              change="+2% this month"
              changeType="positive"
              icon={CheckCircle}
              color="orange"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="xl:col-span-3 space-y-6 lg:space-y-8">
              {/* Communication Management */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-xl font-semibold text-white">Communication Management</h2>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1 sm:flex-none sm:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search messages..."
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Compose
                    </Button>
                  </div>
                </div>

                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-slate-700">
                    <TabsTrigger value="messages" className="data-[state=active]:bg-slate-600">
                      Messages
                    </TabsTrigger>
                    <TabsTrigger value="announcements" className="data-[state=active]:bg-slate-600">
                      Announcements
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="data-[state=active]:bg-slate-600">
                      Notifications
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="messages" className="mt-6">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`bg-slate-700 rounded-lg p-4 lg:p-6 border border-slate-600 cursor-pointer hover:bg-slate-600 transition-colors ${
                            message.status === "unread" ? "border-l-4 border-l-blue-500" : ""
                          }`}
                          onClick={() => setSelectedMessage(message)}
                        >
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-white">{message.from}</h3>
                                <div className="flex gap-2">
                                  <Badge
                                    variant={message.priority === "high" ? "destructive" : "secondary"}
                                    className={message.priority === "high" ? "bg-red-600" : "bg-slate-600"}
                                  >
                                    {message.priority}
                                  </Badge>
                                  <Badge variant="outline" className="border-slate-500 text-slate-300">
                                    {message.category}
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-slate-300 font-medium mb-2">{message.subject}</p>
                              <p className="text-slate-400 text-sm mb-3 line-clamp-2">{message.preview}</p>
                              <div className="flex items-center text-sm text-slate-400">
                                <Clock className="h-4 w-4 mr-1" />
                                {message.time}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-blue-400 border-blue-400 bg-transparent"
                              >
                                <Reply className="h-4 w-4 mr-1" />
                                Reply
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-400 border-green-400 bg-transparent"
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="announcements" className="mt-6">
                    <div className="space-y-4">
                      {announcements.map((announcement) => (
                        <div
                          key={announcement.id}
                          className="bg-slate-700 rounded-lg p-4 lg:p-6 border border-slate-600"
                        >
                          <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                                <h3 className="text-lg font-semibold text-white">{announcement.title}</h3>
                                <Badge
                                  variant={announcement.status === "published" ? "default" : "secondary"}
                                  className={announcement.status === "published" ? "bg-green-600" : "bg-orange-600"}
                                >
                                  {announcement.status}
                                </Badge>
                              </div>
                              <p className="text-slate-300 text-sm mb-3">{announcement.content}</p>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-400">
                                <div>
                                  Audience: <span className="text-white">{announcement.audience}</span>
                                </div>
                                <div>
                                  Views: <span className="text-white">{announcement.views}</span>
                                </div>
                                <div>
                                  Date: <span className="text-white">{announcement.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-blue-400 border-blue-400 bg-transparent"
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-400 border-green-400 bg-transparent"
                              >
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications" className="mt-6">
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="bg-slate-700 rounded-lg p-4 lg:p-6 border border-slate-600"
                        >
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <h3 className="text-lg font-semibold text-white">{notification.title}</h3>
                              </div>
                              <p className="text-slate-300 text-sm mb-3">{notification.description}</p>
                              <div className="flex items-center text-sm text-slate-400">
                                <Clock className="h-4 w-4 mr-1" />
                                {notification.time}
                              </div>
                            </div>
                            <Badge variant="default" className="bg-green-600">
                              {notification.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Compose */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Compose</h3>
                <div className="space-y-3">
                  <Input
                    placeholder="To: student@school.edu"
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  />
                  <Input
                    placeholder="Subject"
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  />
                  <Textarea
                    placeholder="Message..."
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 min-h-[100px]"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Send Overdue Reminders
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Create Announcement
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Bulk Message
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Archive className="h-4 w-4 mr-2" />
                    View Archive
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}