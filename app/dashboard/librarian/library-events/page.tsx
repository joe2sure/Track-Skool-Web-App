"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Plus, Search, Eye, Edit, BookOpen, Award } from "lucide-react"
import { Sidebar } from "@/components/ui/librarian/sidebar"
import { Header } from "@/components/ui/librarian/header"
import { StatCard } from "@/components/ui/librarian/stat-card"
import { Input } from "@/components/ui/parent/input"

export default function LibraryEventsPage() {
  const [selectedTab, setSelectedTab] = useState("upcoming")

  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Literacy Workshop",
      description: "Learn essential digital skills for academic research",
      date: "2025-08-25",
      time: "10:00 AM - 12:00 PM",
      location: "Main Library Hall",
      attendees: 45,
      maxAttendees: 60,
      status: "Open",
      category: "Workshop",
      organizer: "Dr. Sarah Johnson",
      image: "/digital-workshop.png",
    },
    {
      id: 2,
      title: "Author Meet & Greet",
      description: "Meet bestselling author John Smith and get your books signed",
      date: "2025-08-28",
      time: "2:00 PM - 4:00 PM",
      location: "Reading Room A",
      attendees: 32,
      maxAttendees: 40,
      status: "Open",
      category: "Meet & Greet",
      organizer: "Maria Smith",
      image: "/author-meeting.png",
    },
    {
      id: 3,
      title: "Research Methods Seminar",
      description: "Advanced techniques for academic research and citation",
      date: "2025-09-02",
      time: "9:00 AM - 11:00 AM",
      location: "Conference Room B",
      attendees: 28,
      maxAttendees: 30,
      status: "Almost Full",
      category: "Seminar",
      organizer: "Prof. Michael Brown",
      image: "/research-seminar.png",
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Book Club Discussion",
      description: "Monthly discussion of 'The Great Gatsby'",
      date: "2025-08-15",
      time: "6:00 PM - 8:00 PM",
      location: "Reading Room C",
      attendees: 22,
      maxAttendees: 25,
      status: "Completed",
      category: "Book Club",
      organizer: "Lisa Anderson",
      feedback: 4.8,
    },
    {
      id: 5,
      title: "Study Skills Workshop",
      description: "Effective study techniques for students",
      date: "2025-08-10",
      time: "3:00 PM - 5:00 PM",
      location: "Main Library Hall",
      attendees: 55,
      maxAttendees: 60,
      status: "Completed",
      category: "Workshop",
      organizer: "Dr. Emily Davis",
      feedback: 4.6,
    },
  ]

  const eventCategories = [
    { name: "All Events", count: 15, color: "bg-blue-600" },
    { name: "Workshops", count: 6, color: "bg-green-600" },
    { name: "Seminars", count: 4, color: "bg-purple-600" },
    { name: "Book Clubs", count: 3, color: "bg-orange-600" },
    { name: "Meet & Greets", count: 2, color: "bg-pink-600" },
  ]

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <Header
          title="Library Events Management"
          subtitle="Organize and manage library events, workshops, and community programs"
          backgroundImage="/library-events.png"
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <StatCard
              title="Upcoming Events"
              value={8}
              change="+2 this week"
              changeType="positive"
              icon={Calendar}
              color="blue"
            />
            <StatCard
              title="Total Attendees"
              value={245}
              change="+18% from last month"
              changeType="positive"
              icon={Users}
              color="green"
            />
            <StatCard
              title="Events This Month"
              value={12}
              change="+3 from last month"
              changeType="positive"
              icon={BookOpen}
              color="purple"
            />
            <StatCard
              title="Average Rating"
              value="4.7"
              change="+0.2 from last month"
              changeType="positive"
              icon={Award}
              color="orange"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="xl:col-span-3 space-y-6 lg:space-y-8">
              {/* Events Management */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-xl font-semibold text-white">Events Management</h2>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1 sm:flex-none sm:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search events..."
                        className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      New Event
                    </Button>
                  </div>
                </div>

                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                    <TabsTrigger value="upcoming" className="data-[state=active]:bg-slate-600">
                      Upcoming Events
                    </TabsTrigger>
                    <TabsTrigger value="past" className="data-[state=active]:bg-slate-600">
                      Past Events
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="upcoming" className="mt-6">
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="bg-slate-700 rounded-lg p-4 lg:p-6 border border-slate-600">
                          <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full lg:w-48 h-32 bg-slate-600 rounded-lg overflow-hidden">
                              <img
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
                                <div>
                                  <h3 className="text-lg font-semibold text-white mb-1">{event.title}</h3>
                                  <p className="text-slate-300 text-sm mb-2">{event.description}</p>
                                </div>
                                <Badge
                                  variant={event.status === "Open" ? "default" : "secondary"}
                                  className={
                                    event.status === "Open"
                                      ? "bg-green-600"
                                      : event.status === "Almost Full"
                                        ? "bg-orange-600"
                                        : "bg-slate-600"
                                  }
                                >
                                  {event.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-slate-400 mb-4">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  {new Date(event.date).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2" />
                                  {event.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  {event.location}
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-2" />
                                  {event.attendees}/{event.maxAttendees}
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="text-sm text-slate-400">
                                  Organized by: <span className="text-white">{event.organizer}</span>
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
                                    <Edit className="h-4 w-4 mr-1" />
                                    Edit
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="past" className="mt-6">
                    <div className="space-y-4">
                      {pastEvents.map((event) => (
                        <div key={event.id} className="bg-slate-700 rounded-lg p-4 lg:p-6 border border-slate-600">
                          <div className="flex flex-col lg:flex-row justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
                                <div>
                                  <h3 className="text-lg font-semibold text-white mb-1">{event.title}</h3>
                                  <p className="text-slate-300 text-sm mb-2">{event.description}</p>
                                </div>
                                <Badge variant="secondary" className="bg-slate-600">
                                  {event.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-slate-400 mb-4">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  {new Date(event.date).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2" />
                                  {event.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  {event.location}
                                </div>
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-2" />
                                  {event.attendees} attendees
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="text-sm text-slate-400">
                                  Rating: <span className="text-yellow-400">★ {event.feedback}/5.0</span>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-blue-400 border-blue-400 bg-transparent"
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  View Report
                                </Button>
                              </div>
                            </div>
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
              {/* Event Categories */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Event Categories</h3>
                <div className="space-y-3">
                  {eventCategories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        <span className="text-slate-300">{category.name}</span>
                      </div>
                      <span className="text-slate-400 text-sm">{category.count}</span>
                    </div>
                  ))}
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
                    <Plus className="h-4 w-4 mr-2" />
                    Create Event
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    View Calendar
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Manage Attendees
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Event Reports
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