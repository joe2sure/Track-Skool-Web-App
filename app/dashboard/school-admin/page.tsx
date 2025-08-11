"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  GraduationCap,
  BookOpen,
  UserCheck,
  TrendingUp,
  TrendingDown,
  Plus,
  Calendar,
  Clock,
  UserPlus,
  FileText,
  Bell,
  CalendarDays,
  Download,
  Upload,
  BarChart3,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

export default function SchoolAdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Sarah Johnson</h1>
            <p className="text-blue-100 mb-4">Manage your school efficiently with our comprehensive admin dashboard</p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Sunday, August 10, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                06:59 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Students</p>
                <p className="text-3xl font-bold">2,847</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+12.5%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Teachers</p>
                <p className="text-3xl font-bold">184</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+3.2%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Courses</p>
                <p className="text-3xl font-bold">96</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+8.1%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Approvals</p>
                <p className="text-3xl font-bold">23</p>
                <div className="flex items-center mt-2">
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-sm text-red-500">-15.3%</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrollment Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Enrollment Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  Total Students
                </span>
                <span className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  New Enrollments
                </span>
              </div>
              <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Chart visualization would go here</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">2,847</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Students</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">615</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">This Year</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">130</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Announcements Manager */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Announcements Manager</CardTitle>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Badge variant="destructive" className="mt-1">
                  High
                </Badge>
                <div className="flex-1">
                  <h4 className="font-medium">Winter Break Schedule Announced</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    School will be closed from December 23rd to January 8th. Regular classes resume on January...
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">All Students & Staff • Principal Smith</span>
                    <span className="text-xs text-gray-500">2024-01-15</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">
                  Normal
                </Badge>
                <div className="flex-1">
                  <h4 className="font-medium">Parent-Teacher Conference Registration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Registration for spring parent-teacher conferences is now open. Please book your...
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">Library Staff</span>
                    <span className="text-xs text-gray-500">2024-01-14</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Staff Overview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Staff Overview</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Senior Teachers</p>
                  <p className="text-2xl font-bold">45</p>
                  <p className="text-xs text-gray-500">24% of total staff</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Junior Teachers</p>
                  <p className="text-2xl font-bold">68</p>
                  <p className="text-xs text-gray-500">37% of total staff</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Recent Staff Updates</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Dr. Emily Rodriguez</p>
                      <p className="text-xs text-gray-500">Mathematics Teacher • Science Department</p>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mr. James Wilson</p>
                      <p className="text-xs text-gray-500">English Literature • Arts Department</p>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity Log */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Activity Log</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">Sarah Johnson</span> approved student enrollment
                    <span className="font-medium"> Michael Brown</span>
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <Badge variant="secondary">Approved</Badge>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">David Wilson</span> updated course schedule
                    <span className="font-medium">Mathematics Advanced</span>
                  </p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
                <Badge variant="outline">Updated</Badge>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">Emily Rodriguez</span> submitted attendance report
                    <span className="font-medium">Grade 10A</span>
                  </p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
                <Badge variant="outline">Submitted</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Events</CardTitle>
            <Button variant="outline" size="sm">
              View Calendar
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Science Fair 2024</h4>
                    <Badge>Academic</Badge>
                  </div>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span>Feb 15</span>
                    <span>09:00 AM</span>
                    <span>Main Auditorium</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">450 expected</p>
                </div>
                <Button size="sm" variant="outline">
                  Manage
                </Button>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Parent-Teacher Conference</h4>
                    <Badge variant="secondary">Meeting</Badge>
                  </div>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span>Feb 20</span>
                    <span>02:00 PM</span>
                    <span>Classrooms</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">240 expected</p>
                </div>
                <Button size="sm" variant="outline">
                  Manage
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <UserPlus className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-medium">Add Student</span>
                <span className="text-xs text-gray-500">Enroll new student</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <GraduationCap className="w-6 h-6 text-green-600" />
                <span className="text-sm font-medium">Add Staff</span>
                <span className="text-xs text-gray-500">Register new teacher</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <FileText className="w-6 h-6 text-orange-600" />
                <span className="text-sm font-medium">Approve Requests</span>
                <span className="text-xs text-gray-500">Review pending items</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <BarChart3 className="w-6 h-6 text-purple-600" />
                <span className="text-sm font-medium">Generate Reports</span>
                <span className="text-xs text-gray-500">Create system reports</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Bell className="w-6 h-6 text-red-600" />
                <span className="text-sm font-medium">Send Notification</span>
                <span className="text-xs text-gray-500">Broadcast message</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <CalendarDays className="w-6 h-6 text-indigo-600" />
                <span className="text-sm font-medium">Schedule Meeting</span>
                <span className="text-xs text-gray-500">Book appointment</span>
              </Button>
            </div>

            <div className="flex space-x-4 mt-6">
              <Button className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Upload className="w-4 h-4 mr-2" />
                Import Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}






// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import Header from "../../../components/Header"
// import Card from "../../../components/ui/card"
// import Button from "../../../components/ui/button"
// import { ThemeProvider } from "../../../components/ThemeProvider"

// export default function SchoolAdminDashboard() {
//   const [userData, setUserData] = useState<any>(null)
//   const router = useRouter()

//   useEffect(() => {
//     const userType = localStorage.getItem("userType")
//     const storedUserData = localStorage.getItem("userData")

//     if (userType !== "school_admin" || !storedUserData) {
//       router.push("/auth/dashboard-login")
//       return
//     }

//     setUserData(JSON.parse(storedUserData))
//   }, [router])

//   if (!userData) {
//     return <div>Loading...</div>
//   }

//   return (
//     <ThemeProvider>
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//         <Header />
//         <main className="px-6 py-8">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">School Admin Dashboard</h1>
//             <p className="text-gray-600 dark:text-gray-300">
//               Admin ID: {userData.adminId} | School: {userData.schoolId}
//             </p>
//           </div>

//           {/* School Overview Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-blue-100 text-sm font-medium">Total Students</p>
//                   <p className="text-3xl font-bold">1,247</p>
//                 </div>
//                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                   <i className="ri-group-line text-2xl w-6 h-6 flex items-center justify-center"></i>
//                 </div>
//               </div>
//             </Card>

//             <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-emerald-100 text-sm font-medium">Total Teachers</p>
//                   <p className="text-3xl font-bold">89</p>
//                 </div>
//                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                   <i className="ri-user-star-line text-2xl w-6 h-6 flex items-center justify-center"></i>
//                 </div>
//               </div>
//             </Card>

//             <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-amber-100 text-sm font-medium">Monthly Revenue</p>
//                   <p className="text-3xl font-bold">₦2.4M</p>
//                 </div>
//                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                   <i className="ri-money-dollar-circle-line text-2xl w-6 h-6 flex items-center justify-center"></i>
//                 </div>
//               </div>
//             </Card>

//             <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-purple-100 text-sm font-medium">Attendance Rate</p>
//                   <p className="text-3xl font-bold">94.2%</p>
//                 </div>
//                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                   <i className="ri-calendar-check-line text-2xl w-6 h-6 flex items-center justify-center"></i>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//             {/* Recent Activities */}
//             <Card>
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent School Activities</h3>
//                 <Button size="sm" variant="outline">
//                   View All
//                 </Button>
//               </div>
//               <div className="space-y-4">
//                 {[
//                   { activity: "New Teacher Registration", user: "Ms. Sarah Wilson", time: "2 hours ago", type: "user" },
//                   {
//                     activity: "Fee Payment Received",
//                     user: "Student ID: STU456",
//                     time: "4 hours ago",
//                     type: "payment",
//                   },
//                   {
//                     activity: "Parent Complaint Filed",
//                     user: "Parent ID: PAR123",
//                     time: "6 hours ago",
//                     type: "complaint",
//                   },
//                   { activity: "Assignment Created", user: "Mr. John Doe", time: "1 day ago", type: "assignment" },
//                 ].map((activity, index) => (
//                   <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
//                     <div
//                       className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
//                         activity.type === "user"
//                           ? "bg-blue-100 dark:bg-blue-900/30"
//                           : activity.type === "payment"
//                             ? "bg-green-100 dark:bg-green-900/30"
//                             : activity.type === "complaint"
//                               ? "bg-red-100 dark:bg-red-900/30"
//                               : "bg-purple-100 dark:bg-purple-900/30"
//                       }`}
//                     >
//                       <i
//                         className={`ri-${
//                           activity.type === "user"
//                             ? "user-add"
//                             : activity.type === "payment"
//                               ? "money-dollar-circle"
//                               : activity.type === "complaint"
//                                 ? "error-warning"
//                                 : "file-text"
//                         }-line text-${
//                           activity.type === "user"
//                             ? "blue"
//                             : activity.type === "payment"
//                               ? "green"
//                               : activity.type === "complaint"
//                                 ? "red"
//                                 : "purple"
//                         }-600 dark:text-${
//                           activity.type === "user"
//                             ? "blue"
//                             : activity.type === "payment"
//                               ? "green"
//                               : activity.type === "complaint"
//                                 ? "red"
//                                 : "purple"
//                         }-400`}
//                       ></i>
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-medium text-gray-900 dark:text-white text-sm">{activity.activity}</h4>
//                       <p className="text-xs text-gray-600 dark:text-gray-300">
//                         {activity.user} • {activity.time}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Card>

//             {/* Financial Overview */}
//             <Card>
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Financial Overview</h3>
//                 <Button size="sm" variant="outline">
//                   View Reports
//                 </Button>
//               </div>
//               <div className="space-y-4">
//                 <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm font-medium text-green-800 dark:text-green-200">
//                       Tuition Fees Collected
//                     </span>
//                     <span className="text-lg font-bold text-green-900 dark:text-green-100">₦1.8M</span>
//                   </div>
//                   <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2">
//                     <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
//                   </div>
//                   <p className="text-xs text-green-700 dark:text-green-300 mt-1">75% of expected revenue</p>
//                 </div>

//                 <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Miscellaneous Fees</span>
//                     <span className="text-lg font-bold text-blue-900 dark:text-blue-100">₦450K</span>
//                   </div>
//                   <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
//                     <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
//                   </div>
//                   <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">60% of expected revenue</p>
//                 </div>

//                 <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm font-medium text-amber-800 dark:text-amber-200">Outstanding Payments</span>
//                     <span className="text-lg font-bold text-amber-900 dark:text-amber-100">₦320K</span>
//                   </div>
//                   <p className="text-xs text-amber-700 dark:text-amber-300">156 students with pending payments</p>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Admin Tools and Management */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <Card>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">School Management</h3>
//               <div className="space-y-3">
//                 <Button className="w-full justify-start" variant="ghost">
//                   <i className="ri-user-add-line mr-3 w-4 h-4 flex items-center justify-center"></i>
//                   Manage Users
//                 </Button>
//                 <Button className="w-full justify-start" variant="ghost">
//                   <i className="ri-settings-3-line mr-3 w-4 h-4 flex items-center justify-center"></i>
//                   School Settings
//                 </Button>
//                 <Button className="w-full justify-start" variant="ghost">
//                   <i className="ri-calendar-line mr-3 w-4 h-4 flex items-center justify-center"></i>
//                   Academic Calendar
//                 </Button>
//                 <Button className="w-full justify-start" variant="ghost">
//                   <i className="ri-megaphone-line mr-3 w-4 h-4 flex items-center justify-center"></i>
//                   Send Announcements
//                 </Button>
//               </div>
//             </Card>

//             <Card>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portal Features</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
//                   <div className="flex items-center">
//                     <i className="ri-check-line text-green-600 dark:text-green-400 mr-2"></i>
//                     <span className="text-sm font-medium text-green-800 dark:text-green-200">Results Portal</span>
//                   </div>
//                   <span className="text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded">
//                     Active
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                   <div className="flex items-center">
//                     <i className="ri-check-line text-blue-600 dark:text-blue-400 mr-2"></i>
//                     <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Assessment Portal</span>
//                   </div>
//                   <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
//                     Active
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
//                   <div className="flex items-center">
//                     <i className="ri-close-line text-gray-400 mr-2"></i>
//                     <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Chat Module</span>
//                   </div>
//                   <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
//                     Premium
//                   </span>
//                 </div>
//               </div>
//             </Card>

//             <Card>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600 dark:text-gray-300 text-sm">Active Classes</span>
//                   <span className="font-semibold text-gray-900 dark:text-white">24</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600 dark:text-gray-300 text-sm">Pending Approvals</span>
//                   <span className="font-semibold text-amber-600">8</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600 dark:text-gray-300 text-sm">Parent Complaints</span>
//                   <span className="font-semibold text-red-600">3</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600 dark:text-gray-300 text-sm">System Health</span>
//                   <span className="font-semibold text-green-600">Excellent</span>
//                 </div>
//                 <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600 dark:text-gray-300 text-sm">Virtual Coins Pool</span>
//                     <span className="font-semibold text-purple-600">₦125,000</span>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </main>
//       </div>
//     </ThemeProvider>
//   )
// }