"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../../../components/Header"
import Card from "../../../components/ui/Card"
import Button from "../../../components/ui/Button"
import { ThemeProvider } from "../../../components/ThemeProvider"

export default function SuperAdminDashboard() {
  const [userData, setUserData] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userType = localStorage.getItem("userType")
    const storedUserData = localStorage.getItem("userData")

    if (userType !== "super_admin" || !storedUserData) {
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Super Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Super Admin ID: {userData.superAdminId} | System-wide Management
            </p>
          </div>

          {/* System Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100 text-sm font-medium">Total Schools</p>
                  <p className="text-3xl font-bold">47</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-building-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Users</p>
                  <p className="text-3xl font-bold">12,847</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-group-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Active Subscriptions</p>
                  <p className="text-3xl font-bold">42</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-vip-crown-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Monthly Revenue</p>
                  <p className="text-3xl font-bold">₦24.7M</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-money-dollar-circle-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* School Management */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">School Management</h3>
                <Button size="sm" variant="outline">
                  View All Schools
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Greenwood High School",
                    id: "SCH001",
                    status: "active",
                    students: 1247,
                    subscription: "premium",
                  },
                  { name: "Riverside Academy", id: "SCH002", status: "active", students: 892, subscription: "basic" },
                  {
                    name: "Mountain View School",
                    id: "SCH003",
                    status: "pending",
                    students: 654,
                    subscription: "trial",
                  },
                  { name: "Sunset Elementary", id: "SCH004", status: "active", students: 423, subscription: "premium" },
                ].map((school, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{school.name}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {school.id} • {school.students} students
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          school.subscription === "premium"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                            : school.subscription === "basic"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {school.subscription}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          school.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            : school.status === "pending"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                      >
                        {school.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* System Analytics */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Analytics</h3>
                <Button size="sm" variant="outline">
                  View Reports
                </Button>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Daily Active Users</span>
                    <span className="text-lg font-bold text-blue-900 dark:text-blue-100">8,247</span>
                  </div>
                  <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">+12% from last week</p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-800 dark:text-green-200">System Uptime</span>
                    <span className="text-lg font-bold text-green-900 dark:text-green-100">99.9%</span>
                  </div>
                  <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "99.9%" }}></div>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-300 mt-1">Excellent performance</p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-800 dark:text-purple-200">API Usage</span>
                    <span className="text-lg font-bold text-purple-900 dark:text-purple-100">2.4M</span>
                  </div>
                  <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">70% of monthly limit</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Super Admin Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Management</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-building-add-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Add New School
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-settings-4-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  System Settings
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-database-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Database Management
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-shield-check-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Security Audit
                </Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Feature Management</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">Portal Module</span>
                  <Button size="sm" variant="ghost">
                    <i className="ri-settings-line text-green-600 dark:text-green-400"></i>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">AI Module</span>
                  <Button size="sm" variant="ghost">
                    <i className="ri-settings-line text-blue-600 dark:text-blue-400"></i>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <span className="text-sm font-medium text-purple-800 dark:text-purple-200">Chat Module</span>
                  <Button size="sm" variant="ghost">
                    <i className="ri-settings-line text-purple-600 dark:text-purple-400"></i>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <span className="text-sm font-medium text-amber-800 dark:text-amber-200">Quiz Module</span>
                  <Button size="sm" variant="ghost">
                    <i className="ri-settings-line text-amber-600 dark:text-amber-400"></i>
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent System Events</h3>
              <div className="space-y-3">
                {[
                  {
                    event: "New School Registration",
                    school: "Oak Valley School",
                    time: "2 hours ago",
                    type: "success",
                  },
                  { event: "System Backup Completed", school: "System-wide", time: "6 hours ago", type: "info" },
                  { event: "Payment Gateway Error", school: "Multiple Schools", time: "1 day ago", type: "error" },
                  { event: "Feature Update Deployed", school: "System-wide", time: "2 days ago", type: "success" },
                ].map((event, index) => (
                  <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{event.event}</h4>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          event.type === "success"
                            ? "bg-green-500"
                            : event.type === "error"
                              ? "bg-red-500"
                              : "bg-blue-500"
                        }`}
                      ></span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {event.school} • {event.time}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
