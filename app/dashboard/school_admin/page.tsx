"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../../../components/Header"
import Card from "../../../components/ui/Card"
import Button from "../../../components/ui/Button"
import { ThemeProvider } from "../../../components/ThemeProvider"

export default function SchoolAdminDashboard() {
  const [userData, setUserData] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userType = localStorage.getItem("userType")
    const storedUserData = localStorage.getItem("userData")

    if (userType !== "school_admin" || !storedUserData) {
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">School Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Admin ID: {userData.adminId} | School: {userData.schoolId}
            </p>
          </div>

          {/* School Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Students</p>
                  <p className="text-3xl font-bold">1,247</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-group-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Total Teachers</p>
                  <p className="text-3xl font-bold">89</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-user-star-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-sm font-medium">Monthly Revenue</p>
                  <p className="text-3xl font-bold">₦2.4M</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-money-dollar-circle-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Attendance Rate</p>
                  <p className="text-3xl font-bold">94.2%</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-calendar-check-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Activities */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent School Activities</h3>
                <Button size="sm" variant="outline">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { activity: "New Teacher Registration", user: "Ms. Sarah Wilson", time: "2 hours ago", type: "user" },
                  {
                    activity: "Fee Payment Received",
                    user: "Student ID: STU456",
                    time: "4 hours ago",
                    type: "payment",
                  },
                  {
                    activity: "Parent Complaint Filed",
                    user: "Parent ID: PAR123",
                    time: "6 hours ago",
                    type: "complaint",
                  },
                  { activity: "Assignment Created", user: "Mr. John Doe", time: "1 day ago", type: "assignment" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        activity.type === "user"
                          ? "bg-blue-100 dark:bg-blue-900/30"
                          : activity.type === "payment"
                            ? "bg-green-100 dark:bg-green-900/30"
                            : activity.type === "complaint"
                              ? "bg-red-100 dark:bg-red-900/30"
                              : "bg-purple-100 dark:bg-purple-900/30"
                      }`}
                    >
                      <i
                        className={`ri-${
                          activity.type === "user"
                            ? "user-add"
                            : activity.type === "payment"
                              ? "money-dollar-circle"
                              : activity.type === "complaint"
                                ? "error-warning"
                                : "file-text"
                        }-line text-${
                          activity.type === "user"
                            ? "blue"
                            : activity.type === "payment"
                              ? "green"
                              : activity.type === "complaint"
                                ? "red"
                                : "purple"
                        }-600 dark:text-${
                          activity.type === "user"
                            ? "blue"
                            : activity.type === "payment"
                              ? "green"
                              : activity.type === "complaint"
                                ? "red"
                                : "purple"
                        }-400`}
                      ></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{activity.activity}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Financial Overview */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Financial Overview</h3>
                <Button size="sm" variant="outline">
                  View Reports
                </Button>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-800 dark:text-green-200">
                      Tuition Fees Collected
                    </span>
                    <span className="text-lg font-bold text-green-900 dark:text-green-100">₦1.8M</span>
                  </div>
                  <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-300 mt-1">75% of expected revenue</p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Miscellaneous Fees</span>
                    <span className="text-lg font-bold text-blue-900 dark:text-blue-100">₦450K</span>
                  </div>
                  <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">60% of expected revenue</p>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-amber-800 dark:text-amber-200">Outstanding Payments</span>
                    <span className="text-lg font-bold text-amber-900 dark:text-amber-100">₦320K</span>
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-300">156 students with pending payments</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Admin Tools and Management */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">School Management</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-user-add-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Manage Users
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-settings-3-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  School Settings
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-calendar-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Academic Calendar
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <i className="ri-megaphone-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                  Send Announcements
                </Button>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portal Features</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-line text-green-600 dark:text-green-400 mr-2"></i>
                    <span className="text-sm font-medium text-green-800 dark:text-green-200">Results Portal</span>
                  </div>
                  <span className="text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-line text-blue-600 dark:text-blue-400 mr-2"></i>
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Assessment Portal</span>
                  </div>
                  <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-close-line text-gray-400 mr-2"></i>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Chat Module</span>
                  </div>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                    Premium
                  </span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Active Classes</span>
                  <span className="font-semibold text-gray-900 dark:text-white">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Pending Approvals</span>
                  <span className="font-semibold text-amber-600">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Parent Complaints</span>
                  <span className="font-semibold text-red-600">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-sm">System Health</span>
                  <span className="font-semibold text-green-600">Excellent</span>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Virtual Coins Pool</span>
                    <span className="font-semibold text-purple-600">₦125,000</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}