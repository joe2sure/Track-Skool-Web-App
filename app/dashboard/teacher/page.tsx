"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  FileText,
  AlertTriangle,
  AlertCircle,
  Edit,
  CheckCheck,
  Bell,
  Send,
} from "lucide-react";
import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar";
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header";
import useLargeScreen from "@/hooks/useLargeScreen";

export default function TeacherDashboard() {
  const [selectedDate] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLargeScreen = useLargeScreen();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const todaySchedule = [
    {
      subject: "Mathematics - Grade 10A",
      time: "8:00 AM - 9:30 AM",
      room: "Room 204",
      status: "current",
    },
    {
      subject: "Algebra - Grade 11B",
      time: "10:00 AM - 11:30 AM",
      room: "Room 204",
      status: "upcoming",
    },
    {
      subject: "Calculus - Grade 12A",
      time: "1:00 PM - 2:30 PM",
      room: "Room 204",
      status: "upcoming",
    },
  ];

  const recentSubmissions = [
    {
      title: "Quadratic Equations Worksheet",
      grade: "Grade 10A",
      dueDate: "Today",
      submitted: 28,
      total: 30,
      status: "submitted",
    },
    {
      title: "Trigonometry Practice",
      grade: "Grade 11B",
      dueDate: "Tomorrow",
      submitted: 15,
      total: 25,
      status: "pending",
    },
    {
      title: "Calculus Problem Set",
      grade: "Grade 12A",
      dueDate: "Yesterday",
      submitted: 18,
      total: 22,
      status: "overdue",
    },
  ];

  const announcements = [
    {
      title: "Fire Drill Schedule",
      message:
        "Emergency drill scheduled for tomorrow at 10:30 AM. Please prepare your classes.",
      time: "2 hours ago",
      type: "alert",
    },
    {
      title: "Parent-Teacher Conference",
      message:
        "Reminder: Conference meetings start next week. Check your schedule.",
      time: "1 day ago",
      type: "info",
    },
  ];

  const upcomingEvents = [
    {
      title: "Science Fair",
      date: "15",
      month: "Mar",
      location: "Main Hall",
    },
    {
      title: "Math Competition",
      date: "22",
      month: "Mar",
      location: "Auditorium",
    },
    {
      title: "Spring Break",
      date: "28",
      month: "Mar",
      location: "March 28 - April 4, 2025",
    },
  ];

  const attendanceData = [
    { day: "Mon", grade10A: 95, grade11B: 88, grade12A: 92 },
    { day: "Tue", grade10A: 92, grade11B: 90, grade12A: 89 },
    { day: "Wed", grade10A: 94, grade11B: 85, grade12A: 91 },
    { day: "Thu", grade10A: 96, grade11B: 92, grade12A: 88 },
    { day: "Fri", grade10A: 89, grade11B: 87, grade12A: 90 },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {(isLargeScreen || isSidebarOpen) && (
        <TeacherSidebar
          isOpen={isLargeScreen || isSidebarOpen}
          onToggleSidebar={toggleSidebar}
        />
      )}

      {/*opaque div On smaller screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 top-0 bg-black/70 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <TeacherHeader onMenuToggle={toggleSidebar} />

        <main className="flex-1 overflow-y-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Welcome back, Sarah!
                </h1>
                <p className="text-blue-100">
                  Ready to inspire young minds today? You have 5 classes
                  scheduled.
                </p>
              </div>
              <div className="hidden md:block">
                <img
                  src="/teacher-illustration.png"
                  alt="Teacher illustration"
                  className="opacity-80"
                />
              </div>
            </div>
          </div>

          <div className="lg:p-6 p-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Total Students
                      </p>
                      <p className="text-3xl font-bold text-gray-900">156</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Classes Today
                      </p>
                      <p className="text-3xl font-bold text-gray-900">5</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Pending Reviews
                      </p>
                      <p className="text-3xl font-bold text-gray-900">23</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Attendance Alerts
                      </p>
                      <p className="text-3xl font-bold text-gray-900">8</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Schedule */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Today's Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todaySchedule.map((schedule, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-1 h-16 rounded-full ${
                          schedule.status === "current"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        }`}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {schedule.subject}
                        </h4>
                        <p className="text-sm text-gray-600">{schedule.time}</p>
                        <p className="text-sm text-gray-500">{schedule.room}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Announcements */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Announcements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-l-4 ${
                        announcement.type === "alert"
                          ? "bg-red-50 border-red-400"
                          : "bg-blue-50 border-blue-400"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {announcement.type === "alert" ? (
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {announcement.title}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">
                            {announcement.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {announcement.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="text-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">
                            {event.date}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {event.month}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {event.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Submissions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Recent Submissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentSubmissions.map((submission, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          submission.status === "submitted"
                            ? "bg-green-500"
                            : submission.status === "pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {submission.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {submission.grade} • Due {submission.dueDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {submission.submitted}/{submission.total}
                        </p>
                        <Badge
                          variant={
                            submission.status === "submitted"
                              ? "default"
                              : submission.status === "pending"
                              ? "secondary"
                              : "destructive"
                          }
                          className="text-xs"
                        >
                          {submission.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Attendance Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Attendance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                    </div>

                    {/* Grade 10A */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          Grade 10A
                        </span>
                        <span className="text-sm text-gray-500">Avg: 93%</span>
                      </div>
                      <div className="flex space-x-1">
                        {attendanceData.map((day, index) => (
                          <div
                            key={index}
                            className="flex-1 h-2 bg-gray-200 rounded"
                          >
                            <div
                              className="h-full bg-blue-500 rounded"
                              style={{ width: `${day.grade10A}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Grade 11B */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          Grade 11B
                        </span>
                        <span className="text-sm text-gray-500">Avg: 88%</span>
                      </div>
                      <div className="flex space-x-1">
                        {attendanceData.map((day, index) => (
                          <div
                            key={index}
                            className="flex-1 h-2 bg-gray-200 rounded"
                          >
                            <div
                              className="h-full bg-green-500 rounded"
                              style={{ width: `${day.grade11B}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Grade 12A */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          Grade 12A
                        </span>
                        <span className="text-sm text-gray-500">Avg: 90%</span>
                      </div>
                      <div className="flex space-x-1">
                        {attendanceData.map((day, index) => (
                          <div
                            key={index}
                            className="flex-1 h-2 bg-gray-200 rounded"
                          >
                            <div
                              className="h-full bg-purple-500 rounded"
                              style={{ width: `${day.grade12A}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="h-16 flex flex-col items-center justify-center space-y-2 bg-blue-600 hover:bg-blue-700">
                    <Edit className="w-5 h-5" />
                    <span className="text-sm">Grade Assignments</span>
                  </Button>

                  <Button className="h-16 flex flex-col items-center justify-center space-y-2 bg-green-600 hover:bg-green-700">
                    <CheckCheck className="w-5 h-5" />
                    <span className="text-sm">Take Attendance</span>
                  </Button>

                  <Button className="h-16 flex flex-col items-center justify-center space-y-2 bg-orange-600 hover:bg-orange-700">
                    <Bell className="w-5 h-5" />
                    <span className="text-sm">Post Announcement</span>
                  </Button>

                  <Button className="h-16 flex flex-col items-center justify-center space-y-2 bg-purple-600 hover:bg-purple-700">
                    <Send className="w-5 h-5" />
                    <span className="text-sm">Send Message</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}



// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import Header from "../../../components/Header"
// import Card2 from "../../../components/ui/Card2"
// import Button2 from "../../../components/ui/Button2"
// import { ThemeProvider } from "../../../components/ThemeProvider"

// export default function TeacherDashboard() {
//   const [userData, setUserData] = useState<any>(null)
//   const router = useRouter()

//   useEffect(() => {
//     const userType = localStorage.getItem("userType")
//     const storedUserData = localStorage.getItem("userData")

//     if (userType !== "teacher" || !storedUserData) {
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
//             <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Teacher Dashboard</h1>
//             <p className="text-gray-600 dark:text-gray-300">
//               Teacher ID: {userData.teacherId} | School: {userData.schoolId}
//             </p>
//           </div>

//           {/* Teacher Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             <Card2 className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-indigo-100 text-sm font-medium">Total Students</p>
//                   <p className="text-3xl font-bold">156</p>
//                 </div>
//                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                   <i className="ri-group-line text-2xl w-6 h-6 flex items-center justify-center"></i>
//                 </div>
//               </div>
//             </Card2>

//             <Card2 className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-emerald-100 text-sm font-medium">Classes Today</p>
//                   <p className="text-3xl font-bold">6</p>
//                 </div>
//                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                   <i className="ri-calendar-check-line text-2xl w-6 h-6 flex items-center justify-center"></i>
//                 </div>
//               </div>
//             </Card2>

//             <Card2 className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-amber-100 text-sm font-medium">Pending Grades</p>
//                   <p className="text-3xl font-bold">23</p>
//                 </div>
//                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                   <i className="ri-file-edit-line text-2xl w-6 h-6 flex items-center justify-center"></i>
//                 </div>
//               </div>
//             </Card2>

//             <Card2 className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-purple-100 text-sm font-medium">Virtual Coins</p>
//                   <p className="text-3xl font-bold">1,250</p>
//                 </div>
//                 <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                   <i className="ri-coin-line text-2xl w-6 h-6 flex items-center justify-center"></i>
//                 </div>
//               </div>
//             </Card2>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//             {/* Today's Classes */}
//             <Card2>
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Classes</h3>
//                 <Button2 size="sm" variant="outline">
//                   View Schedule
//                 </Button2>
//               </div>
//               <div className="space-y-4">
//                 {[
//                   { time: "8:00 AM", subject: "Mathematics", class: "Grade 10A", room: "Room 201", students: 28 },
//                   { time: "9:30 AM", subject: "Mathematics", class: "Grade 10B", room: "Room 201", students: 25 },
//                   { time: "11:00 AM", subject: "Advanced Math", class: "Grade 12", room: "Room 201", students: 22 },
//                   { time: "2:00 PM", subject: "Math Club", class: "Extra-curricular", room: "Room 201", students: 15 },
//                 ].map((classItem, index) => (
//                   <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
//                     <div className="w-2 h-12 bg-indigo-500 rounded-full mr-4"></div>
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between">
//                         <h4 className="font-medium text-gray-900 dark:text-white">{classItem.subject}</h4>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">{classItem.time}</span>
//                       </div>
//                       <p className="text-sm text-gray-600 dark:text-gray-300">
//                         {classItem.class} • {classItem.room} • {classItem.students} students
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Card2>

//             {/* Recent Assignments */}
//             <Card2>
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Assignments</h3>
//                 <Button2 size="sm" variant="outline">
//                   Create New
//                 </Button2>
//               </div>
//               <div className="space-y-4">
//                 {[
//                   {
//                     title: "Algebra Problem Set 5",
//                     class: "Grade 10A",
//                     submissions: "24/28",
//                     dueDate: "Mar 18",
//                     status: "active",
//                   },
//                   {
//                     title: "Calculus Quiz",
//                     class: "Grade 12",
//                     submissions: "22/22",
//                     dueDate: "Mar 15",
//                     status: "completed",
//                   },
//                   {
//                     title: "Geometry Project",
//                     class: "Grade 10B",
//                     submissions: "18/25",
//                     dueDate: "Mar 20",
//                     status: "active",
//                   },
//                   {
//                     title: "Statistics Assignment",
//                     class: "Grade 11",
//                     submissions: "15/30",
//                     dueDate: "Mar 22",
//                     status: "active",
//                   },
//                 ].map((assignment, index) => (
//                   <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between">
//                         <h4 className="font-medium text-gray-900 dark:text-white">{assignment.title}</h4>
//                         <span
//                           className={`text-xs px-2 py-1 rounded-full ${assignment.status === "completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
//                         >
//                           {assignment.status}
//                         </span>
//                       </div>
//                       <p className="text-sm text-gray-600 dark:text-gray-300">
//                         {assignment.class} • Due: {assignment.dueDate} • {assignment.submissions} submitted
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Card2>
//           </div>

//           {/* Teacher Tools and Actions */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <Card2>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
//               <div className="space-y-3">
//                 <Button2 className="w-full justify-start" variant="ghost">
//                   <i className="ri-file-add-line mr-3 w-4 h-4 flex items-center justify-center"></i>
//                   Create Assignment
//                 </Button2>
//                 <Button2 className="w-full justify-start" variant="ghost">
//                   <i className="ri-calendar-check-line mr-3 w-4 h-4 flex items-center justify-center"></i>
//                   Take Attendance
//                 </Button2>
//                 <Button2 className="w-full justify-start" variant="ghost">
//                   <i className="ri-edit-line mr-3 w-4 h-4 flex items-center justify-center"></i>
//                   Grade Assignments
//                 </Button2>
//                 <Button2 className="w-full justify-start" variant="ghost">
//                   <i className="ri-megaphone-line mr-3 w-4 h-4 flex items-center justify-center"></i>
//                   Send Announcement
//                 </Button2>
//               </div>
//             </Card2>

//             <Card2>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Class Performance</h3>
//               <div className="space-y-4">
//                 {[
//                   { class: "Grade 10A", average: "87%", trend: "up" },
//                   { class: "Grade 10B", average: "82%", trend: "stable" },
//                   { class: "Grade 11", average: "89%", trend: "up" },
//                   { class: "Grade 12", average: "91%", trend: "down" },
//                 ].map((performance, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
//                   >
//                     <div>
//                       <h4 className="font-medium text-gray-900 dark:text-white text-sm">{performance.class}</h4>
//                       <p className="text-xs text-gray-600 dark:text-gray-300">Class Average</p>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="text-lg font-semibold text-gray-900 dark:text-white mr-2">
//                         {performance.average}
//                       </span>
//                       <i
//                         className={`ri-arrow-${performance.trend === "up" ? "up" : performance.trend === "down" ? "down" : "right"}-line text-${performance.trend === "up" ? "green" : performance.trend === "down" ? "red" : "gray"}-500`}
//                       ></i>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Card2>

//             <Card2>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Messages</h3>
//               <div className="space-y-3">
//                 {[
//                   { from: "Parent - Alice Johnson", message: "Question about homework", time: "2 hours ago" },
//                   { from: "School Admin", message: "Staff meeting reminder", time: "1 day ago" },
//                   { from: "Parent - Bob Smith", message: "Thank you for extra help", time: "2 days ago" },
//                 ].map((message, index) => (
//                   <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                     <h4 className="font-medium text-blue-900 dark:text-blue-100 text-sm">{message.from}</h4>
//                     <p className="text-xs text-blue-700 dark:text-blue-300 mb-1">{message.message}</p>
//                     <p className="text-xs text-blue-600 dark:text-blue-400">{message.time}</p>
//                   </div>
//                 ))}
//               </div>
//             </Card2>
//           </div>
//         </main>
//       </div>
//     </ThemeProvider>
//   )
// }
