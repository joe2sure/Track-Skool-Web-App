"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  Send,
  FileText,
  Plus,
  Phone,
  Mail,
  Clock,
  Download,
  Reply,
  Share,
  MoreHorizontal,
  Edit,
  Trash2,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

const messages = [
  {
    id: 1,
    sender: "Ms. Sarah Wilson",
    role: "teacher",
    subject: "Emma's Math Progress Update",
    preview: "Emma has shown excellent improvement in algebra this week...",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    sender: "Principal Johnson",
    role: "admin",
    subject: "Parent-Teacher Conference Reminder",
    preview: "This is a friendly reminder about the upcoming conference...",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 3,
    sender: "Coach Martinez",
    role: "staff",
    subject: "Soccer Practice Schedule Change",
    preview: "Due to weather conditions, tomorrow's practice will be...",
    time: "2 days ago",
    unread: false,
  },
]

const drafts = [
  {
    id: 1,
    recipient: "Ms. Sarah Wilson",
    subject: "Question about homework assignment",
    preview: "I wanted to ask about the math homework...",
    time: "Draft saved 1 hour ago",
  },
]

const communicationHistory = [
  {
    id: 1,
    type: "conference",
    title: "Parent-Teacher Conference",
    participants: "Ms. Sarah Wilson • Emma Johnson",
    date: "2024-01-15",
    time: "3:00 PM • 30 min",
    status: "completed",
    description:
      "Discussed Emma's progress in mathematics. She's excelling in algebra but needs more practice with geometry.",
    attachments: ["Progress Report.pdf"],
  },
  {
    id: 2,
    type: "call",
    title: "Phone Call - Homework Concerns",
    participants: "Mr. James Thompson • Sarah Johnson",
    date: "2024-01-12",
    time: "2:15 PM • 15 min",
    status: "completed",
    description: "Discussed Sarah's recent struggles with history assignments. Agreed on additional study materials.",
  },
  {
    id: 3,
    type: "meeting",
    title: "Science Fair Participation",
    participants: "Mr. David Chen • Emma Johnson",
    date: "2024-01-10",
    time: "11:30 AM",
    status: "replied",
    description: "Emma expressed interest in participating in the upcoming science fair. Discussed project ideas.",
    attachments: ["Science Fair Guidelines.pdf", "Project Ideas.docx"],
  },
  {
    id: 4,
    type: "review",
    title: "Art Portfolio Review",
    participants: "Ms. Lisa Park • Sarah Johnson",
    date: "2024-01-08",
    time: "1:00 PM • 45 min",
    status: "completed",
    description: "Reviewed Sarah's art portfolio for the semester. Outstanding creativity and improvement noted.",
  },
  {
    id: 5,
    type: "request",
    title: "Assignment Extension Request",
    participants: "Mrs. Emily Rodriguez • Emma Johnson",
    date: "2024-01-05",
    time: "4:20 PM",
    status: "approved",
    description: "Requested extension for English essay due to family emergency. Extension granted until next Friday.",
  },
]

const teacherContacts = [
  {
    name: "Ms. Sarah Wilson",
    subject: "Math Teacher",
    department: "Mathematics",
    email: "sarah.wilson@school.edu",
    phone: "(555) 123-4567",
    availability: "Mon-Fri 2:00-4:00 PM",
    lastContact: "2 days ago",
  },
  {
    name: "Mr. David Chen",
    subject: "Science Teacher",
    department: "Physics & Chemistry",
    email: "david.chen@school.edu",
    phone: "(555) 234-5678",
    availability: "Mon-Wed 3:00-5:00 PM",
    lastContact: "1 week ago",
  },
  {
    name: "Mrs. Emily Rodriguez",
    subject: "English Teacher",
    department: "Literature & Writing",
    email: "emily.rodriguez@school.edu",
    phone: "(555) 345-6789",
    availability: "Tue-Thu 1:00-3:00 PM",
    lastContact: "3 days ago",
  },
]

export default function Communication() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl lg:text-3xl font-bold text-white">Communication</h1>
        <p className="text-slate-400 mt-1">Connect with teachers, staff, and school administration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Message Center */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl lg:text-3xl text-white">Message Center</CardTitle>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="inbox" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-700">
                  <TabsTrigger value="inbox" className="data-[state=active]:bg-blue-600">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Inbox (3)
                  </TabsTrigger>
                  <TabsTrigger value="sent" className="data-[state=active]:bg-blue-600">
                    <Send className="w-4 h-4 mr-2" />
                    Sent
                  </TabsTrigger>
                  <TabsTrigger value="drafts" className="data-[state=active]:bg-blue-600">
                    <FileText className="w-4 h-4 mr-2" />
                    Drafts (1)
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="inbox" className="space-y-4 mt-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 rounded-lg border flex flex-col gap-3 sm:flex-row sm:items-start justify-between ${
                        message.unread ? "bg-blue-900/20 border-blue-800" : "bg-slate-700 border-slate-600"
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>
                            {message.sender
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="text-white font-medium">{message.sender}</h4>
                            <Badge
                              className={`${
                                message.role === "teacher"
                                  ? "bg-blue-600"
                                  : message.role === "admin"
                                    ? "bg-purple-600"
                                    : "bg-green-600"
                              } text-white`}
                            >
                              {message.role}
                            </Badge>
                          </div>
                          <h5 className="text-white font-medium mb-1">{message.subject}</h5>
                          <p className="text-slate-400 text-sm">{message.preview}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-1">
                        <span className="text-slate-400 text-xs sm:text-sm">{message.time}</span>
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                            <Reply className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                {/* Drafts */}
                <TabsContent value="drafts" className="space-y-4 mt-4">
                  {drafts.map((draft) => (
                    <div key={draft.id} className="p-4 rounded-lg bg-slate-700 border border-slate-600 flex flex-col sm:flex-row justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-slate-400 text-sm">To:</span>
                          <span className="text-white font-medium">{draft.recipient}</span>
                          <Badge className="bg-orange-600 text-white">draft</Badge>
                        </div>
                        <h5 className="text-white font-medium mb-1">{draft.subject}</h5>
                        <p className="text-slate-400 text-sm">{draft.preview}</p>
                        <p className="text-slate-500 text-xs mt-2">{draft.time}</p>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Communication History */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl lg:text-3xl text-white">Communication History</CardTitle>
              <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                Export History
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-slate-300 text-sm">Filter by Type</label>
                  <select className="w-full mt-1 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white">
                    <option>All Types</option>
                    <option>Conferences</option>
                    <option>Phone Calls</option>
                    <option>Meetings</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 text-sm">Filter by Child</label>
                  <select className="w-full mt-1 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white">
                    <option>Both Children</option>
                    <option>Emma Johnson</option>
                    <option>Sarah Johnson</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
  {communicationHistory.map((item) => (
    <div
      key={item.id}
      className="p-4 bg-slate-700 rounded-lg flex flex-col gap-3"
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
              item.type === "conference"
                ? "bg-blue-600"
                : item.type === "call"
                ? "bg-green-600"
                : item.type === "meeting"
                ? "bg-purple-600"
                : item.type === "review"
                ? "bg-orange-600"
                : "bg-yellow-600"
            }`}
          >
            {item.type === "conference" && (
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            )}
            {item.type === "call" && (
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            )}
            {item.type === "meeting" && (
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            )}
            {item.type === "review" && (
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            )}
            {item.type === "request" && (
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            )}
          </div>
          <div className="min-w-0">
            <h4 className="text-white font-medium truncate">{item.title}</h4>
            <p className="text-slate-400 text-sm truncate">
              {item.participants}
            </p>
          </div>
        </div>
        <Badge
          className={`${
            item.status === "completed"
              ? "bg-green-600"
              : item.status === "replied"
              ? "bg-blue-600"
              : "bg-orange-600"
          } text-white whitespace-nowrap`}
        >
          {item.status}
        </Badge>
      </div>

      {/* Time & Date */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {item.time}
        </span>
        <span>{item.date}</span>
      </div>

      {/* Description */}
      <p className="text-slate-300 text-sm">{item.description}</p>

      {/* Attachments */}
      {item.attachments && (
        <div>
          <p className="text-slate-400 text-sm mb-2">Attachments:</p>
          <div className="flex flex-wrap gap-2">
            {item.attachments.map((attachment, index) => (
              <Button
                key={index}
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 bg-transparent flex-shrink-0"
              >
                <FileText className="w-4 h-4 mr-2" />
                {attachment}
                <Download className="w-4 h-4 ml-2" />
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant="outline"
          className="border-slate-600 text-slate-300 bg-transparent"
        >
          <Reply className="w-4 h-4 mr-2" />
          Follow Up
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-slate-600 text-slate-300 bg-transparent"
        >
          <Share className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-slate-400 hover:text-white"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
    </div>
  ))}
</div>

            </CardContent>
          </Card>
        </div>

        {/* Teacher Contacts Sidebar */}
        <div>
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl lg:text-3xl text-white">Teacher Contacts</CardTitle>
              <Tabs defaultValue="emma" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                  <TabsTrigger value="emma" className="data-[state=active]:bg-blue-600">
                    Emma's Teachers
                  </TabsTrigger>
                  <TabsTrigger value="sarah" className="data-[state=active]:bg-blue-600">
                    Sarah's Teachers
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="space-y-4">
              {teacherContacts.map((teacher, index) => (
                <div key={index} className="p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>
                        {teacher.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{teacher.name}</h4>
                      <p className="text-blue-400 text-sm">{teacher.subject}</p>
                      <p className="text-slate-400 text-sm">{teacher.department}</p>
                      <p className="text-slate-500 text-xs mt-1">{teacher.lastContact}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Mail className="w-4 h-4" />
                      <span>{teacher.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Phone className="w-4 h-4" />
                      <span>{teacher.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock className="w-4 h-4" />
                      <span>{teacher.availability}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="text-center pt-4">
                <p className="text-slate-400 text-sm mb-2">School Office: (555) 000-1234</p>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  View All Staff
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
