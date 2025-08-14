"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Trophy,
  Music,
  Users2,
  MapIcon,
  Wrench,
  ChevronDown,
} from "lucide-react"

const eventCategories = [
  { name: "Academic Events", count: 3, total: 8, color: "bg-green-600", icon: BookOpen },
  { name: "Sports & Athletics", count: 4, total: 12, color: "bg-orange-600", icon: Trophy },
  { name: "Cultural Programs", count: 2, total: 6, color: "bg-purple-600", icon: Music },
  { name: "Meetings & Conferences", count: 1, total: 4, color: "bg-blue-600", icon: Users2 },
  { name: "Field Trips", count: 1, total: 3, color: "bg-indigo-600", icon: MapIcon },
  { name: "Workshops", count: 2, total: 5, color: "bg-teal-600", icon: Wrench },
]

const eventList = [
  {
    id: 1,
    title: "Parent-Teacher Conference",
    date: "1/15/2024",
    time: "2:00 PM - 4:00 PM",
    location: "Main Auditorium",
    category: "Meeting",
    status: "Response Required",
    priority: "high",
    icon: Users2,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Science Fair Exhibition",
    date: "1/18/2024",
    time: "10:00 AM - 3:00 PM",
    location: "Science Laboratory",
    category: "Academic",
    status: "Upcoming",
    priority: "medium",
    icon: BookOpen,
    color: "bg-green-600",
  },
  {
    id: 3,
    title: "Annual Sports Day",
    date: "1/22/2024",
    time: "8:00 AM - 5:00 PM",
    location: "School Playground",
    category: "Sports",
    status: "Response Required",
    priority: "high",
    icon: Trophy,
    color: "bg-orange-600",
  },
  {
    id: 4,
    title: "Winter Musical Concert",
    date: "1/25/2024",
    time: "6:00 PM - 8:00 PM",
    location: "School Theater",
    category: "Cultural",
    status: "Upcoming",
    priority: "medium",
    icon: Music,
    color: "bg-purple-600",
  },
  {
    id: 5,
    title: "Educational Field Trip",
    date: "1/28/2024",
    time: "9:00 AM - 4:00 PM",
    location: "Natural History Museum",
    category: "Field Trip",
    status: "Response Required",
    priority: "medium",
    icon: MapIcon,
    color: "bg-indigo-600",
  },
  {
    id: 6,
    title: "Halloween Costume Party",
    date: "10/31/2023",
    time: "1:00 PM - 3:00 PM",
    location: "School Gymnasium",
    category: "Cultural",
    status: "Completed",
    priority: "low",
    icon: Music,
    color: "bg-purple-600",
  },
]

const upcomingHighlights = [
  {
    title: "Science Fair Registration",
    date: "1/18/2024",
    category: "Academic",
    priority: "high",
  },
  {
    title: "Sports Day Participation",
    date: "1/22/2024",
    category: "Sports",
    priority: "medium",
  },
  {
    title: "Parent-Teacher Meeting",
    date: "1/15/2024",
    category: "Meeting",
    priority: "high",
  },
]

const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1)
const eventDates = {
  10: { color: "bg-blue-600", count: 1 },
  15: { color: "bg-orange-600", count: 1 },
  18: { color: "bg-green-600", count: 1 },
  22: { color: "bg-purple-600", count: 1 },
  25: { color: "bg-indigo-600", count: 1 },
  28: { color: "bg-teal-600", count: 1 },
}

export default function Events() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Events</h1>
        <p className="text-slate-400 mt-1">Stay updated with school events, activities, and programs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Event Calendar */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Event Calendar</CardTitle>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-white font-medium">August 2025</span>
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-slate-400 font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day) => {
                  const hasEvent = eventDates[day as keyof typeof eventDates]
                  return (
                    <div
                      key={day}
                      className={`h-12 rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer ${
                        day === 10
                          ? "bg-blue-600 text-white"
                          : hasEvent
                            ? `${hasEvent.color} text-white`
                            : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      }`}
                    >
                      {day}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Event List */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Event List</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  All
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Upcoming
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Meeting
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Academic
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Sports
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Cultural
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {eventList.map((event) => (
                <div key={event.id} className="p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 ${event.color} rounded-lg flex items-center justify-center`}>
                        <event.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-medium">{event.title}</h4>
                          <Badge
                            className={`${
                              event.status === "Response Required"
                                ? "bg-red-600"
                                : event.status === "Upcoming"
                                  ? "bg-blue-600"
                                  : "bg-green-600"
                            } text-white`}
                          >
                            {event.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Event Categories */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Event Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {eventCategories.map((category, index) => (
                <div key={index} className="p-3 bg-slate-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{category.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{category.count}</div>
                      <div className="text-slate-400 text-xs">upcoming</div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-sm">
                    {category.total} total events
                    <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto ml-2">
                      View All Events →
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Highlights */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Upcoming Highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingHighlights.map((highlight, index) => (
                <div key={index} className="p-3 bg-slate-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{highlight.title}</h4>
                    <Badge
                      className={`${
                        highlight.priority === "high"
                          ? "bg-red-600"
                          : highlight.priority === "medium"
                            ? "bg-orange-600"
                            : "bg-yellow-600"
                      } text-white`}
                    >
                      {highlight.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>{highlight.date}</span>
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      {highlight.category}
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto mt-2">
                    View Details →
                  </Button>
                </div>
              ))}

              <div className="text-center pt-4">
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  View All Upcoming Events
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Event Statistics */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Event Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">11</div>
                  <div className="text-slate-400 text-sm">This Month</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">3</div>
                  <div className="text-slate-400 text-sm">Need Response</div>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Event Information</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
