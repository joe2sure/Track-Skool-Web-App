"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Megaphone,
  Mail,
  AlertTriangle,
  Plus,
  Archive,
  Edit,
  Trash2,
  Bell,
  Smartphone,
  Monitor,
} from "lucide-react"

const statsData = [
  {
    title: "Total Messages",
    value: "2,847",
    icon: MessageSquare,
    color: "bg-blue-500",
  },
  {
    title: "Announcements",
    value: "45",
    icon: Megaphone,
    color: "bg-green-500",
  },
  {
    title: "Unread Messages",
    value: "23",
    icon: Mail,
    color: "bg-orange-500",
  },
  {
    title: "Emergency Alerts",
    value: "3",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
]

const communicationChannels = [
  {
    id: 1,
    name: "Email Notifications",
    description: "System-wide email communications",
    icon: Mail,
    status: "active",
    lastActivity: "2 hours ago",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "SMS Alerts",
    description: "Emergency and urgent notifications",
    icon: Smartphone,
    status: "active",
    lastActivity: "1 day ago",
    color: "bg-green-600",
  },
  {
    id: 3,
    name: "Push Notifications",
    description: "Mobile app notifications",
    icon: Bell,
    status: "active",
    lastActivity: "30 minutes ago",
    color: "bg-purple-600",
  },
  {
    id: 4,
    name: "Dashboard Alerts",
    description: "In-system notifications",
    icon: Monitor,
    status: "active",
    lastActivity: "5 minutes ago",
    color: "bg-orange-600",
  },
]

const messages = [
  {
    id: 1,
    title: "Budget Approval Request",
    description: "Requesting approval for additional funding for educational materials...",
    sender: "Sarah Johnson",
    recipient: "Finance Department",
    date: "2024-01-15",
    priority: "high",
    type: "message",
  },
  {
    id: 2,
    title: "System Maintenance Window",
    description: "Scheduled maintenance window for this weekend from 2 AM to 6 AM...",
    sender: "IT Support",
    recipient: "All Administrators",
    date: "2024-01-14",
    priority: "medium",
    type: "announcement",
  },
  {
    id: 3,
    title: "Parent-Teacher Conference Schedule",
    description: "Please review the updated parent-teacher conference schedule...",
    sender: "Emily Davis",
    recipient: "District Coordinators",
    date: "2024-01-13",
    priority: "low",
    type: "message",
  },
]

export function CommunicationCenter() {
  const [activeTab, setActiveTab] = useState("messages")

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-600"
      case "medium":
        return "bg-orange-600"
      case "low":
        return "bg-blue-600"
      default:
        return "bg-gray-600"
    }
  }

  const filteredMessages = messages.filter((message) => {
    if (activeTab === "announcements") return message.type === "announcement"
    if (activeTab === "messages") return message.type === "message"
    return true
  })

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-0">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Communication Center</h1>
        <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
          Manage system-wide communications and messaging
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0">
                  <div className="text-center sm:text-left">
                    <p className="text-gray-400 text-xs sm:text-sm">{stat.title}</p>
                    <p className="text-lg sm:text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg ${stat.color} flex items-center justify-center text-white`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Communication Channels */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white text-base sm:text-lg">Communication Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
            {communicationChannels.map((channel) => {
              const IconComponent = channel.icon
              return (
                <div key={channel.id} className="p-3 sm:p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${channel.color} flex items-center justify-center text-white flex-shrink-0`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                        <h4 className="text-white font-medium text-sm sm:text-base">{channel.name}</h4>
                        <Badge className="bg-green-600 text-xs w-fit">{channel.status}</Badge>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm mb-2">{channel.description}</p>
                      <p className="text-gray-500 text-xs">{channel.lastActivity}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Messages Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-2">
              <Button
                variant={activeTab === "announcements" ? "default" : "ghost"}
                onClick={() => setActiveTab("announcements")}
                className={`${activeTab === "announcements" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"} text-sm whitespace-nowrap`}
                size="sm"
              >
                Announcements
              </Button>
              <Button
                variant={activeTab === "messages" ? "default" : "ghost"}
                onClick={() => setActiveTab("messages")}
                className={`${activeTab === "messages" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"} text-sm whitespace-nowrap`}
                size="sm"
              >
                Messages
              </Button>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              New Message
            </Button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {filteredMessages.map((message) => (
              <Card key={message.id} className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-base sm:text-lg font-semibold text-white">{message.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge className={`${getPriorityColor(message.priority)} text-xs`}>{message.priority}</Badge>
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3">{message.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                        <div>
                          <span className="text-gray-500">From:</span> {message.sender}
                        </div>
                        <div>
                          <span className="text-gray-500">To:</span> {message.recipient}
                        </div>
                        <div>
                          <span className="text-gray-500">Date:</span> {message.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 justify-end sm:justify-start">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                        <Archive className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                        <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 p-2">
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}





// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/Button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
// import { Badge } from "@/components/ui/badge"
// import {
//   MessageSquare,
//   Megaphone,
//   Mail,
//   AlertTriangle,
//   Plus,
//   Archive,
//   Edit,
//   Trash2,
//   Bell,
//   Smartphone,
//   Monitor,
// } from "lucide-react"

// const statsData = [
//   {
//     title: "Total Messages",
//     value: "2,847",
//     icon: MessageSquare,
//     color: "bg-blue-500",
//   },
//   {
//     title: "Announcements",
//     value: "45",
//     icon: Megaphone,
//     color: "bg-green-500",
//   },
//   {
//     title: "Unread Messages",
//     value: "23",
//     icon: Mail,
//     color: "bg-orange-500",
//   },
//   {
//     title: "Emergency Alerts",
//     value: "3",
//     icon: AlertTriangle,
//     color: "bg-red-500",
//   },
// ]

// const communicationChannels = [
//   {
//     id: 1,
//     name: "Email Notifications",
//     description: "System-wide email communications",
//     icon: Mail,
//     status: "active",
//     lastActivity: "2 hours ago",
//     color: "bg-blue-600",
//   },
//   {
//     id: 2,
//     name: "SMS Alerts",
//     description: "Emergency and urgent notifications",
//     icon: Smartphone,
//     status: "active",
//     lastActivity: "1 day ago",
//     color: "bg-green-600",
//   },
//   {
//     id: 3,
//     name: "Push Notifications",
//     description: "Mobile app notifications",
//     icon: Bell,
//     status: "active",
//     lastActivity: "30 minutes ago",
//     color: "bg-purple-600",
//   },
//   {
//     id: 4,
//     name: "Dashboard Alerts",
//     description: "In-system notifications",
//     icon: Monitor,
//     status: "active",
//     lastActivity: "5 minutes ago",
//     color: "bg-orange-600",
//   },
// ]

// const messages = [
//   {
//     id: 1,
//     title: "Budget Approval Request",
//     description: "Requesting approval for additional funding for educational materials...",
//     sender: "Sarah Johnson",
//     recipient: "Finance Department",
//     date: "2024-01-15",
//     priority: "high",
//     type: "message",
//   },
//   {
//     id: 2,
//     title: "System Maintenance Window",
//     description: "Scheduled maintenance window for this weekend from 2 AM to 6 AM...",
//     sender: "IT Support",
//     recipient: "All Administrators",
//     date: "2024-01-14",
//     priority: "medium",
//     type: "announcement",
//   },
//   {
//     id: 3,
//     title: "Parent-Teacher Conference Schedule",
//     description: "Please review the updated parent-teacher conference schedule...",
//     sender: "Emily Davis",
//     recipient: "District Coordinators",
//     date: "2024-01-13",
//     priority: "low",
//     type: "message",
//   },
// ]

// export function CommunicationCenter() {
//   const [activeTab, setActiveTab] = useState("messages")

//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case "high":
//         return "bg-red-600"
//       case "medium":
//         return "bg-orange-600"
//       case "low":
//         return "bg-blue-600"
//       default:
//         return "bg-gray-600"
//     }
//   }

//   const filteredMessages = messages.filter((message) => {
//     if (activeTab === "announcements") return message.type === "announcement"
//     if (activeTab === "messages") return message.type === "message"
//     return true
//   })

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-white">Communication Center</h1>
//         <p className="text-gray-400 mt-2">Manage system-wide communications and messaging</p>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {statsData.map((stat, index) => {
//           const IconComponent = stat.icon
//           return (
//             <Card key={index} className="bg-gray-800 border-gray-700">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-400 text-sm">{stat.title}</p>
//                     <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
//                   </div>
//                   <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-white`}>
//                     <IconComponent className="w-6 h-6" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           )
//         })}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Communication Channels */}
//         <Card className="bg-gray-800 border-gray-700">
//           <CardHeader>
//             <CardTitle className="text-white">Communication Channels</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             {communicationChannels.map((channel) => {
//               const IconComponent = channel.icon
//               return (
//                 <div key={channel.id} className="p-4 bg-gray-700 rounded-lg">
//                   <div className="flex items-start gap-3">
//                     <div
//                       className={`w-10 h-10 rounded-lg ${channel.color} flex items-center justify-center text-white`}
//                     >
//                       <IconComponent className="w-5 h-5" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-1">
//                         <h4 className="text-white font-medium">{channel.name}</h4>
//                         <Badge className="bg-green-600 text-xs">{channel.status}</Badge>
//                       </div>
//                       <p className="text-gray-400 text-sm mb-2">{channel.description}</p>
//                       <p className="text-gray-500 text-xs">{channel.lastActivity}</p>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </CardContent>
//         </Card>

//         {/* Messages Section */}
//         <div className="lg:col-span-2 space-y-6">
//           <div className="flex items-center justify-between">
//             <div className="flex gap-2">
//               <Button
//                 variant={activeTab === "announcements" ? "default" : "ghost"}
//                 onClick={() => setActiveTab("announcements")}
//                 className={activeTab === "announcements" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}
//               >
//                 Announcements
//               </Button>
//               <Button
//                 variant={activeTab === "messages" ? "default" : "ghost"}
//                 onClick={() => setActiveTab("messages")}
//                 className={activeTab === "messages" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}
//               >
//                 Messages
//               </Button>
//             </div>
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//               <Plus className="w-4 h-4 mr-2" />
//               New Message
//             </Button>
//           </div>

//           <div className="space-y-4">
//             {filteredMessages.map((message) => (
//               <Card key={message.id} className="bg-gray-800 border-gray-700">
//                 <CardContent className="p-6">
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <h3 className="text-lg font-semibold text-white">{message.title}</h3>
//                         <Badge className={getPriorityColor(message.priority)}>{message.priority}</Badge>
//                         <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                       </div>
//                       <p className="text-gray-400 text-sm mb-3">{message.description}</p>
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
//                         <div>
//                           <span className="text-gray-500">From:</span> {message.sender}
//                         </div>
//                         <div>
//                           <span className="text-gray-500">To:</span> {message.recipient}
//                         </div>
//                         <div>
//                           <span className="text-gray-500">Date:</span> {message.date}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2 ml-4">
//                       <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//                         <Archive className="w-4 h-4" />
//                       </Button>
//                       <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//                         <Edit className="w-4 h-4" />
//                       </Button>
//                       <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
//                         <Trash2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
