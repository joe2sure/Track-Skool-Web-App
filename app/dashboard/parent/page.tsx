"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../../../components/Header"
import Card from "../../../components/ui/Card"
import Button from "../../../components/ui/Button"
import { ThemeProvider } from "../../../components/ThemeProvider"

export default function ParentDashboard() {
  const [userData, setUserData] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userType = localStorage.getItem("userType")
    const storedUserData = localStorage.getItem("userData")

    if (userType !== "parent" || !storedUserData) {
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Parent Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Monitoring: Student ID {userData.studentId} | Parent ID: {userData.parentId} | School: {userData.schoolId}
            </p>
          </div>

          {/* Child's Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Child's GPA</p>
                  <p className="text-3xl font-bold">3.85</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-trophy-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Attendance Rate</p>
                  <p className="text-3xl font-bold">94%</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-calendar-check-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Pending Fees</p>
                  <p className="text-3xl font-bold">₦15,000</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-money-dollar-circle-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Virtual Coins</p>
                  <p className="text-3xl font-bold">250</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-coin-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Child's Recent Performance */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Academic Performance</h3>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { subject: "Mathematics", grade: "A", score: "92%", trend: "up" },
                  { subject: "Physics", grade: "B+", score: "87%", trend: "up" },
                  { subject: "English", grade: "A-", score: "89%", trend: "down" },
                  { subject: "Chemistry", grade: "B", score: "84%", trend: "stable" },
                ].map((performance, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                        <i className="ri-book-line text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{performance.subject}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Grade: {performance.grade}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white mr-2">
                        {performance.score}
                      </span>
                      <i
                        className={`ri-arrow-${performance.trend === "up" ? "up" : performance.trend === "down" ? "down" : "right"}-line text-${performance.trend === "up" ? "green" : performance.trend === "down" ? "red" : "gray"}-500`}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Communication & Notifications */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Notifications</h3>
                <Button size="sm" variant="outline">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { type: "assignment", title: "New Math Assignment", time: "2 hours ago", priority: "high" },
                  { type: "announcement", title: "Parent-Teacher Meeting", time: "1 day ago", priority: "medium" },
                  { type: "payment", title: "Fee Payment Reminder", time: "2 days ago", priority: "high" },
                  { type: "achievement", title: "Science Fair Winner", time: "3 days ago", priority: "low" },
                ].map((notification, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div
                      className={`w-3 h-3 rounded-full mr-3 ${notification.priority === "high" ? "bg-red-500" : notification.priority === "medium" ? "bg-yellow-500" : "bg-green-500"}`}
                    ></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{notification.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{notification.time}</p>
                    </div>
                    <i
                      className={`ri-${notification.type === "assignment" ? "file-text" : notification.type === "announcement" ? "megaphone" : notification.type === "payment" ? "money-dollar-circle" : "trophy"}-line text-gray-400`}
                    ></i>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Parent Actions and Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Parent Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-money-dollar-circle-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Make Payment
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-chat-3-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Message Teacher
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-calendar-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Schedule Meeting
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-coin-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Reward Teacher
                </Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Child's Activities</h3>
              <div className="space-y-3">
                {[
                  { activity: "Soccer Practice", date: "Today 4:00 PM" },
                  { activity: "Science Club", date: "Tomorrow 3:30 PM" },
                  { activity: "Art Competition", date: "Friday 2:00 PM" },
                ].map((activity, index) => (
                  <div key={index} className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-medium text-green-900 dark:text-green-100 text-sm">{activity.activity}</h4>
                    <p className="text-xs text-green-700 dark:text-green-300">{activity.date}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Parent Ranking</h3>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="ri-medal-line text-yellow-600 dark:text-yellow-400 text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Gold Parent</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Rank #12 out of 150</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Engagement Score</span>
                  <span className="font-medium text-gray-900 dark:text-white">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}