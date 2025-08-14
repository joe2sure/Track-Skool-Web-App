"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Plus, MapPin, Clock, Users, Eye, Edit, CalendarDays } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Science Fair 2024",
    date: "2024-02-15",
    time: "09:00 AM - 05:00 PM",
    location: "Main Auditorium",
    attendees: 450,
    description: "Annual science fair showcasing student projects and innovations",
    organizer: "Science Department",
    status: "Upcoming",
    category: "Academic",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Basketball Championship",
    date: "2024-02-20",
    time: "02:00 PM - 06:00 PM",
    location: "Sports Complex",
    attendees: 800,
    description: "Inter-school basketball championship finals",
    organizer: "Athletics Department",
    status: "Upcoming",
    category: "Sports",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Parent-Teacher Conference",
    date: "2024-02-25",
    time: "10:00 AM - 04:00 PM",
    location: "Multiple Classrooms",
    attendees: 600,
    description: "Quarterly parent-teacher meetings to discuss student progress",
    organizer: "Academic Office",
    status: "Upcoming",
    category: "Meeting",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Cultural Festival",
    date: "2024-01-10",
    time: "11:00 AM - 08:00 PM",
    location: "School Grounds",
    attendees: 1200,
    description: "Annual cultural celebration with performances and exhibitions",
    organizer: "Student Council",
    status: "Completed",
    category: "Cultural",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Career Guidance Workshop",
    date: "2024-03-05",
    time: "01:00 PM - 04:00 PM",
    location: "Conference Hall",
    attendees: 200,
    description: "Career guidance and college preparation workshop for senior students",
    organizer: "Counseling Department",
    status: "Upcoming",
    category: "Workshop",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function EventsPage() {
  const [activeView, setActiveView] = useState("list")

  const upcomingEvents = events.filter((event) => event.status === "Upcoming")
  const completedEvents = events.filter((event) => event.status === "Completed")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Events</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage school events, activities, and calendar</p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      {/* View Toggle */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>School Events</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeView} onValueChange={setActiveView}>
            <TabsList>
              <TabsTrigger value="list">List</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="space-y-6 mt-6">
              {/* Upcoming Events */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge
                          className="absolute top-3 right-3"
                          variant={event.status === "Upcoming" ? "default" : "secondary"}
                        >
                          {event.status}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.attendees} attendees
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{event.description}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">By {event.organizer}</span>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Completed Events */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Completed Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {completedEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden opacity-75">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 right-3" variant="secondary">
                          {event.status}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.attendees} attendees
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{event.description}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">By {event.organizer}</span>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-6">
              <div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <CalendarDays className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Calendar view would be implemented here</p>
                  <p className="text-sm text-gray-400 mt-2">Integration with calendar component</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}




// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Calendar, Plus, MapPin, Clock, Users, Eye, Edit, CalendarDays } from "lucide-react"

// const events = [
//   {
//     id: 1,
//     title: "Science Fair 2024",
//     date: "2024-02-15",
//     time: "09:00 AM - 05:00 PM",
//     location: "Main Auditorium",
//     attendees: 450,
//     description: "Annual science fair showcasing student projects and innovations",
//     organizer: "Science Department",
//     status: "Upcoming",
//     category: "Academic",
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 2,
//     title: "Basketball Championship",
//     date: "2024-02-20",
//     time: "02:00 PM - 06:00 PM",
//     location: "Sports Complex",
//     attendees: 800,
//     description: "Inter-school basketball championship finals",
//     organizer: "Athletics Department",
//     status: "Upcoming",
//     category: "Sports",
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 3,
//     title: "Parent-Teacher Conference",
//     date: "2024-02-25",
//     time: "10:00 AM - 04:00 PM",
//     location: "Multiple Classrooms",
//     attendees: 600,
//     description: "Quarterly parent-teacher meetings to discuss student progress",
//     organizer: "Academic Office",
//     status: "Upcoming",
//     category: "Meeting",
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 4,
//     title: "Cultural Festival",
//     date: "2024-01-10",
//     time: "11:00 AM - 08:00 PM",
//     location: "School Grounds",
//     attendees: 1200,
//     description: "Annual cultural celebration with performances and exhibitions",
//     organizer: "Student Council",
//     status: "Completed",
//     category: "Cultural",
//     image: "/placeholder.svg?height=200&width=300",
//   },
//   {
//     id: 5,
//     title: "Career Guidance Workshop",
//     date: "2024-03-05",
//     time: "01:00 PM - 04:00 PM",
//     location: "Conference Hall",
//     attendees: 200,
//     description: "Career guidance and college preparation workshop for senior students",
//     organizer: "Counseling Department",
//     status: "Upcoming",
//     category: "Workshop",
//     image: "/placeholder.svg?height=200&width=300",
//   },
// ]

// export default function EventsPage() {
//   const [activeView, setActiveView] = useState("list")

//   const upcomingEvents = events.filter((event) => event.status === "Upcoming")
//   const completedEvents = events.filter((event) => event.status === "Completed")

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Events</h1>
//           <p className="text-gray-600 dark:text-gray-400">Manage school events, activities, and calendar</p>
//         </div>
//         <div className="flex space-x-3">
//           <Button>
//             <Plus className="w-4 h-4 mr-2" />
//             Add Event
//           </Button>
//         </div>
//       </div>

//       {/* View Toggle */}
//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <CardTitle>School Events</CardTitle>
//             <Tabs value={activeView} onValueChange={setActiveView}>
//               <TabsList>
//                 <TabsTrigger value="list">List</TabsTrigger>
//                 <TabsTrigger value="calendar">Calendar</TabsTrigger>
//               </TabsList>
//             </Tabs>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <TabsContent value="list" className="space-y-6">
//             {/* Upcoming Events */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Events</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {upcomingEvents.map((event) => (
//                   <Card key={event.id} className="overflow-hidden">
//                     <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
//                       <img
//                         src={event.image || "/placeholder.svg"}
//                         alt={event.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <Badge
//                         className="absolute top-3 right-3"
//                         variant={event.status === "Upcoming" ? "default" : "secondary"}
//                       >
//                         {event.status}
//                       </Badge>
//                     </div>
//                     <CardContent className="p-4">
//                       <div className="flex items-start justify-between mb-2">
//                         <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
//                         <Badge variant="outline">{event.category}</Badge>
//                       </div>

//                       <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
//                         <div className="flex items-center">
//                           <Calendar className="w-4 h-4 mr-2" />
//                           {event.date}
//                         </div>
//                         <div className="flex items-center">
//                           <Clock className="w-4 h-4 mr-2" />
//                           {event.time}
//                         </div>
//                         <div className="flex items-center">
//                           <MapPin className="w-4 h-4 mr-2" />
//                           {event.location}
//                         </div>
//                         <div className="flex items-center">
//                           <Users className="w-4 h-4 mr-2" />
//                           {event.attendees} attendees
//                         </div>
//                       </div>

//                       <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{event.description}</p>

//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-gray-500">By {event.organizer}</span>
//                         <div className="flex space-x-2">
//                           <Button size="sm" variant="outline">
//                             <Eye className="w-4 h-4 mr-1" />
//                             View Details
//                           </Button>
//                           <Button size="sm" variant="outline">
//                             <Edit className="w-4 h-4 mr-1" />
//                             Edit
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             {/* Completed Events */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Completed Events</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {completedEvents.map((event) => (
//                   <Card key={event.id} className="overflow-hidden opacity-75">
//                     <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
//                       <img
//                         src={event.image || "/placeholder.svg"}
//                         alt={event.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <Badge className="absolute top-3 right-3" variant="secondary">
//                         {event.status}
//                       </Badge>
//                     </div>
//                     <CardContent className="p-4">
//                       <div className="flex items-start justify-between mb-2">
//                         <h4 className="font-semibold text-gray-900 dark:text-white">{event.title}</h4>
//                         <Badge variant="outline">{event.category}</Badge>
//                       </div>

//                       <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
//                         <div className="flex items-center">
//                           <Calendar className="w-4 h-4 mr-2" />
//                           {event.date}
//                         </div>
//                         <div className="flex items-center">
//                           <Clock className="w-4 h-4 mr-2" />
//                           {event.time}
//                         </div>
//                         <div className="flex items-center">
//                           <MapPin className="w-4 h-4 mr-2" />
//                           {event.location}
//                         </div>
//                         <div className="flex items-center">
//                           <Users className="w-4 h-4 mr-2" />
//                           {event.attendees} attendees
//                         </div>
//                       </div>

//                       <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{event.description}</p>

//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-gray-500">By {event.organizer}</span>
//                         <div className="flex space-x-2">
//                           <Button size="sm" variant="outline">
//                             <Eye className="w-4 h-4 mr-1" />
//                             View Details
//                           </Button>
//                           <Button size="sm" variant="outline">
//                             <Edit className="w-4 h-4 mr-1" />
//                             Edit
//                           </Button>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent value="calendar" className="mt-6">
//             <div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
//               <div className="text-center">
//                 <CalendarDays className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                 <p className="text-gray-500">Calendar view would be implemented here</p>
//                 <p className="text-sm text-gray-400 mt-2">Integration with calendar component</p>
//               </div>
//             </div>
//           </TabsContent>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }