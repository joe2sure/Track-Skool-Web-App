"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../../../components/Header"
import Card2 from "../../../components/ui/card2"
import Button2 from "../../../components/ui/button2"
import { ThemeProvider } from "../../../components/ThemeProvider"

export default function TeacherDashboard() {
  const [userData, setUserData] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userType = localStorage.getItem("userType")
    const storedUserData = localStorage.getItem("userData")

    if (userType !== "teacher" || !storedUserData) {
      router.push("/auth/dashboard-login")
      return
    }

    setUserData(JSON.parse(storedUserData))
  }, [router])

  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Teacher Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Teacher ID: {userData.teacherId} | School: {userData.schoolId}
            </p>
          </div>

          {/* Teacher Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card2 className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm font-medium">Total Students</p>
                  <p className="text-3xl font-bold">156</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-group-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card2>

            <Card2 className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Classes Today</p>
                  <p className="text-3xl font-bold">6</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-calendar-check-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card2>

            <Card2 className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-sm font-medium">Pending Grades</p>
                  <p className="text-3xl font-bold">23</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-file-edit-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card2>

            <Card2 className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Virtual Coins</p>
                  <p className="text-3xl font-bold">1,250</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-coin-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Today's Classes */}
            <Card2>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Classes</h3>
                <Button2 size="sm" variant="outline">
                  View Schedule
                </Button2>
              </div>
              <div className="space-y-4">
                {[
                  { time: "8:00 AM", subject: "Mathematics", class: "Grade 10A", room: "Room 201", students: 28 },
                  { time: "9:30 AM", subject: "Mathematics", class: "Grade 10B", room: "Room 201", students: 25 },
                  { time: "11:00 AM", subject: "Advanced Math", class: "Grade 12", room: "Room 201", students: 22 },
                  { time: "2:00 PM", subject: "Math Club", class: "Extra-curricular", room: "Room 201", students: 15 },
                ].map((classItem, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-2 h-12 bg-indigo-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white">{classItem.subject}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{classItem.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {classItem.class} • {classItem.room} • {classItem.students} students
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card2>

            {/* Recent Assignments */}
            <Card2>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Assignments</h3>
                <Button2 size="sm" variant="outline">
                  Create New
                </Button2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Algebra Problem Set 5",
                    class: "Grade 10A",
                    submissions: "24/28",
                    dueDate: "Mar 18",
                    status: "active",
                  },
                  {
                    title: "Calculus Quiz",
                    class: "Grade 12",
                    submissions: "22/22",
                    dueDate: "Mar 15",
                    status: "completed",
                  },
                  {
                    title: "Geometry Project",
                    class: "Grade 10B",
                    submissions: "18/25",
                    dueDate: "Mar 20",
                    status: "active",
                  },
                  {
                    title: "Statistics Assignment",
                    class: "Grade 11",
                    submissions: "15/30",
                    dueDate: "Mar 22",
                    status: "active",
                  },
                ].map((assignment, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white">{assignment.title}</h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${assignment.status === "completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
                        >
                          {assignment.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {assignment.class} • Due: {assignment.dueDate} • {assignment.submissions} submitted
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card2>
          </div>

          {/* Teacher Tools and Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card2>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button2 className="w-full justify-start" variant="ghost">
                  <i className="ri-file-add-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Create Assignment
                </Button2>
                <Button2 className="w-full justify-start" variant="ghost">
                  <i className="ri-calendar-check-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Take Attendance
                </Button2>
                <Button2 className="w-full justify-start" variant="ghost">
                  <i className="ri-edit-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Grade Assignments
                </Button2>
                <Button2 className="w-full justify-start" variant="ghost">
                  <i className="ri-megaphone-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Send Announcement
                </Button2>
              </div>
            </Card2>

            <Card2>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Class Performance</h3>
              <div className="space-y-4">
                {[
                  { class: "Grade 10A", average: "87%", trend: "up" },
                  { class: "Grade 10B", average: "82%", trend: "stable" },
                  { class: "Grade 11", average: "89%", trend: "up" },
                  { class: "Grade 12", average: "91%", trend: "down" },
                ].map((performance, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{performance.class}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">Class Average</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white mr-2">
                        {performance.average}
                      </span>
                      <i
                        className={`ri-arrow-${performance.trend === "up" ? "up" : performance.trend === "down" ? "down" : "right"}-line text-${performance.trend === "up" ? "green" : performance.trend === "down" ? "red" : "gray"}-500`}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            </Card2>

            <Card2>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Messages</h3>
              <div className="space-y-3">
                {[
                  { from: "Parent - Alice Johnson", message: "Question about homework", time: "2 hours ago" },
                  { from: "School Admin", message: "Staff meeting reminder", time: "1 day ago" },
                  { from: "Parent - Bob Smith", message: "Thank you for extra help", time: "2 days ago" },
                ].map((message, index) => (
                  <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 text-sm">{message.from}</h4>
                    <p className="text-xs text-blue-700 dark:text-blue-300 mb-1">{message.message}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{message.time}</p>
                  </div>
                ))}
              </div>
            </Card2>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}