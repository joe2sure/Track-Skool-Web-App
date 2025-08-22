"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/parent/input"
import { Label } from "@/components/ui/parent/label"
import { Textarea } from "@/components/ui/teacher/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog/dialog"
import {
  CalendarDays,
  Plus,
  Search,
  MapPin,
  Clock,
  Users,
  Calendar,
  Edit,
  Eye,
  Bell,
  Share,
  Download,
} from "lucide-react"
import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar"
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header"
import useLargeScreen from "@/hooks/useLargeScreen"

type Event = {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  type: "academic" | "sports" | "cultural" | "meeting" | "exam"
  attendees: number
  maxAttendees?: number
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  organizer: string
  isRequired: boolean
}

export default function TeacherEvents() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedView, setSelectedView] = useState("list")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const isLargeScreen = useLargeScreen()

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const events: Event[] = [
    {
      id: 1,
      title: "Science Fair 2025",
      description: "Annual science fair showcasing student projects and innovations",
      date: "March 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Main Hall",
      type: "academic",
      attendees: 150,
      maxAttendees: 200,
      status: "upcoming",
      organizer: "Science Department",
      isRequired: false,
    },
    {
      id: 2,
      title: "Parent-Teacher Conference",
      description: "Individual meetings with parents to discuss student progress",
      date: "March 18, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Classrooms",
      type: "meeting",
      attendees: 45,
      maxAttendees: 60,
      status: "upcoming",
      organizer: "Administration",
      isRequired: true,
    },
    {
      id: 3,
      title: "Math Competition",
      description: "Inter-school mathematics competition for grades 9-12",
      date: "March 22, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Auditorium",
      type: "academic",
      attendees: 80,
      maxAttendees: 100,
      status: "upcoming",
      organizer: "Math Department",
      isRequired: false,
    },
    {
      id: 4,
      title: "Staff Development Workshop",
      description: "Professional development session on modern teaching methods",
      date: "March 25, 2025",
      time: "3:30 PM - 5:30 PM",
      location: "Conference Room A",
      type: "meeting",
      attendees: 25,
      maxAttendees: 30,
      status: "upcoming",
      organizer: "HR Department",
      isRequired: true,
    },
    {
      id: 5,
      title: "Spring Concert",
      description: "Annual spring music concert featuring student performances",
      date: "March 28, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Theater",
      type: "cultural",
      attendees: 200,
      maxAttendees: 250,
      status: "upcoming",
      organizer: "Music Department",
      isRequired: false,
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "academic":
        return "bg-blue-100 text-blue-800"
      case "sports":
        return "bg-green-100 text-green-800"
      case "cultural":
        return "bg-purple-100 text-purple-800"
      case "meeting":
        return "bg-orange-100 text-orange-800"
      case "exam":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "ongoing":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = selectedFilter === "all" || event.type === selectedFilter
    return matchesSearch && matchesFilter
  })

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
                <h1 className="text-3xl font-bold mb-2">Events & Calendar</h1>
                <p className="text-blue-100">Manage school events, meetings, and important dates</p>
              </div>
              <div className="hidden md:block">
                <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create New Event</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title">Event Title</Label>
                          <Input placeholder="Enter event title" />
                        </div>
                        <div>
                          <Label htmlFor="type">Event Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="academic">Academic</SelectItem>
                              <SelectItem value="sports">Sports</SelectItem>
                              <SelectItem value="cultural">Cultural</SelectItem>
                              <SelectItem value="meeting">Meeting</SelectItem>
                              <SelectItem value="exam">Exam</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea placeholder="Event description..." rows={3} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Date</Label>
                          <Input type="date" />
                        </div>
                        <div>
                          <Label htmlFor="time">Time</Label>
                          <Input type="time" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input placeholder="Event location" />
                        </div>
                        <div>
                          <Label htmlFor="capacity">Max Attendees</Label>
                          <Input type="number" placeholder="Optional" />
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                          Cancel
                        </Button>
                        <Button>
                          <CalendarDays className="w-4 h-4 mr-2" />
                          Create Event
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
                      <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Week</p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Attendees</p>
                      <p className="text-2xl font-bold text-gray-900">500</p>
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
                      <p className="text-sm font-medium text-gray-600">Required Events</p>
                      <p className="text-2xl font-bold text-gray-900">2</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Bell className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="meeting">Meetings</SelectItem>
                  <SelectItem value="exam">Exams</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex space-x-2">
                <Button
                  variant={selectedView === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedView("list")}
                >
                  List
                </Button>
                <Button
                  variant={selectedView === "calendar" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedView("calendar")}
                >
                  Calendar
                </Button>
              </div>
            </div>

            {/* Events List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                          {event.isRequired && (
                            <Badge variant="destructive" className="text-xs">
                              Required
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>{event.type}</Badge>
                          <Badge className={`text-xs ${getStatusColor(event.status)}`}>{event.status}</Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">{event.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} attendees
                        {event.maxAttendees && ` / ${event.maxAttendees} max`}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-gray-500">Organized by {event.organizer}</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="w-4 h-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="justify-start" onClick={() => setShowCreateModal(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Export Calendar
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    <Bell className="w-4 h-4 mr-2" />
                    Set Reminders
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
