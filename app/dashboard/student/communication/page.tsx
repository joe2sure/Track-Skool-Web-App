import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Video, Phone, MoreHorizontal, Paperclip, Send, MessageCircle, Users, Bell } from "lucide-react"

const contacts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Mathematics Professor",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Your assignment submission looks great! I have a few...",
    time: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "Classmate - Computer Science",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey, do you want to work on the group project this...",
    time: "9:45 AM",
    unread: 1,
    online: true,
  },
  {
    id: 3,
    name: "Prof. Michael Davis",
    role: "Physics Department",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "The lab results have been posted. Please review th...",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Study Group Leader",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Study session tomorrow at 3 PM in the library. Don...",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: 5,
    name: "Dr. Lisa Wang",
    role: "Chemistry Professor",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "",
    time: "2 days ago",
    unread: 0,
    online: false,
  },
]

const messages = [
  {
    id: 1,
    sender: "Prof. Michael Davis",
    content: "Hi! I've reviewed your latest assignment submission.",
    time: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Thank you for the quick review, Professor!",
    time: "10:32 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Prof. Michael Davis",
    content: "Your approach to the integration problems is very good. However, I noticed a small error in problem 3.",
    time: "10:33 AM",
    isOwn: false,
  },
  {
    id: 4,
    sender: "Prof. Michael Davis",
    content: "Could you double-check your work on the substitution method?",
    time: "10:33 AM",
    isOwn: false,
  },
  {
    id: 5,
    sender: "You",
    content: "I'll review that section and resubmit. Should I email you the corrected version?",
    time: "10:35 AM",
    isOwn: true,
  },
  {
    id: 6,
    sender: "Prof. Michael Davis",
    content: "Yes, that would be perfect. Also, feel free to stop by my office hours if you need clarification.",
    time: "10:36 AM",
    isOwn: false,
  },
]

export default function CommunicationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Communication Hub</h1>
              <p className="text-blue-100">Connect with classmates, instructors, and stay updated with announcements</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-3xl md:text-4xl font-bold">12</div>
              <div className="text-blue-200">Active Conversations</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">8</div>
              <div className="text-blue-200 text-sm">Unread Messages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">12</div>
              <div className="text-blue-200 text-sm">Active Chats</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">5</div>
              <div className="text-blue-200 text-sm">Notifications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">24</div>
              <div className="text-blue-200 text-sm">Discussions</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Communication Tabs */}
        <Tabs defaultValue="messages" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <TabsList className="grid w-full sm:w-auto grid-cols-3">
              <TabsTrigger value="messages" className="relative">
                <MessageCircle className="w-4 h-4 mr-2" />
                Direct Messages
                <Badge className="ml-2 bg-red-500 text-white text-xs">8</Badge>
              </TabsTrigger>
              <TabsTrigger value="discussions">
                <Users className="w-4 h-4 mr-2" />
                Class Discussions
              </TabsTrigger>
              <TabsTrigger value="announcements" className="relative">
                <Bell className="w-4 h-4 mr-2" />
                Announcements
                <Badge className="ml-2 bg-orange-500 text-white text-xs">5</Badge>
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Subject:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="messages">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
              {/* Messages Sidebar */}
              <Card className="lg:col-span-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Messages</CardTitle>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      New Chat
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Search contacts..." className="pl-10" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className={`flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-l-4 ${
                          contact.id === 3 ? "border-blue-500 bg-blue-50" : "border-transparent"
                        }`}
                      >
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {contact.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {contact.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-sm truncate">{contact.name}</h3>
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-gray-500">{contact.time}</span>
                              {contact.unread > 0 && (
                                <Badge className="bg-blue-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                                  {contact.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">{contact.role}</p>
                          {contact.lastMessage && (
                            <p className="text-xs text-gray-500 truncate mt-1">{contact.lastMessage}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Chat Interface */}
              <Card className="lg:col-span-2 flex flex-col">
                {/* Chat Header */}
                <CardHeader className="pb-3 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>MD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Prof. Michael Davis</h3>
                        <p className="text-sm text-gray-600">Physics Department</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.isOwn ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.isOwn ? "text-blue-100" : "text-gray-500"}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>

                {/* Message Input */}
                <div className="p-4 border-t">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Input placeholder="Type your message..." className="flex-1" />
                    <Button size="sm">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="discussions">
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Class Discussions</h3>
                <p className="text-gray-600 mb-4">Join ongoing discussions with your classmates and instructors</p>
                <Button>Browse Discussions</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements">
            <Card>
              <CardContent className="p-8 text-center">
                <Bell className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Announcements</h3>
                <p className="text-gray-600 mb-4">Stay updated with important announcements from your instructors</p>
                <Button>View All Announcements</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 mt-8 border-t">
          <div>
            <h3 className="font-semibold mb-3">Communication Guidelines</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Respectful communication expected</p>
              <p>Response time: 24-48 hours</p>
              <p>Use appropriate channels</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Message Templates</p>
              <p>Group Creation</p>
              <p>Notification Settings</p>
              <p>Communication Policy</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Help & Support</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>How to Message</p>
              <p>Discussion Guidelines</p>
              <p>Technical Support</p>
              <p>FAQ</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact Support</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>(555) 123-4567</p>
              <p>support@eduportal.edu</p>
              <p>24/7 Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
