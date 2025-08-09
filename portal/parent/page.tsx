"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../../components/Header"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import { ThemeProvider } from "../../components/ThemeProvider"
import NotificationPanel from "../../components/ui/NotificationPanel"

export default function ParentPortal() {
  const [userData, setUserData] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedChild, setSelectedChild] = useState("STU001")
  const [paymentAmount, setPaymentAmount] = useState("")
  const [paymentType, setPaymentType] = useState("tuition")
  const [rewardAmount, setRewardAmount] = useState("")
  const [selectedTeacher, setSelectedTeacher] = useState("")
  const [reportMessage, setReportMessage] = useState("")
  const router = useRouter()

  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "assignment" as const,
      title: "Math Assignment Due",
      message: "Your child has a math assignment due tomorrow.",
      timestamp: "2 hours ago",
      read: false,
      priority: "high" as const,
    },
    {
      id: "2",
      type: "payment" as const,
      title: "Payment Confirmed",
      message: "Tuition fee payment of ₦50,000 has been confirmed.",
      timestamp: "1 day ago",
      read: false,
      priority: "medium" as const,
    },
  ])

  useEffect(() => {
    const userType = localStorage.getItem("portalUserType")
    const storedUserData = localStorage.getItem("portalUserData")

    if (userType !== "parent" || !storedUserData) {
      router.push("/auth/portal")
      return
    }

    setUserData(JSON.parse(storedUserData))
  }, [router])

  const handlePayment = () => {
    const paymentId = `PAY${Date.now()}`
    alert(`Payment successful! Payment ID: ${paymentId}. Share this ID with your child to confirm payment.`)
    setPaymentAmount("")
  }

  const handleRewardTeacher = () => {
    alert(`Successfully rewarded ${selectedTeacher} with ${rewardAmount} virtual coins!`)
    setRewardAmount("")
    setSelectedTeacher("")
  }

  const handleSubmitReport = () => {
    alert("Report submitted successfully! The school admin and teachers will be notified.")
    setReportMessage("")
  }

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Parent Portal</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Monitoring: Student ID {userData.studentId} | Parent ID: {userData.parentId} | School: {userData.schoolId}
            </p>
          </div>

          {/* Child Selection */}
          <div className="mb-6">
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Select Child</h3>
                  <p className="text-gray-600 dark:text-gray-300">Choose which child's information to view</p>
                </div>
                <select
                  value={selectedChild}
                  onChange={(e) => setSelectedChild(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
                >
                  <option value="STU001">John Doe (STU001)</option>
                  <option value="STU002">Jane Doe (STU002)</option>
                </select>
              </div>
            </Card>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              {[
                { id: "dashboard", label: "Dashboard", icon: "ri-dashboard-line" },
                { id: "performance", label: "Performance", icon: "ri-line-chart-line" },
                { id: "payments", label: "Payments", icon: "ri-money-dollar-circle-line" },
                { id: "reports", label: "Reports", icon: "ri-feedback-line" },
                { id: "ranking", label: "Ranking", icon: "ri-trophy-line" },
                { id: "chat", label: "Chat", icon: "ri-chat-3-line" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <i className={`${tab.icon} mr-2 w-4 h-4 flex items-center justify-center`}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Child's Performance Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Notifications */}
                <NotificationPanel
                  notifications={notifications}
                  onMarkAsRead={handleMarkAsRead}
                  onMarkAllAsRead={handleMarkAllAsRead}
                />

                {/* Child's Activities */}
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Child's Activities</h3>
                  <div className="space-y-3">
                    {[
                      { activity: "Soccer Practice", date: "Today 4:00 PM", type: "sports" },
                      { activity: "Science Club", date: "Tomorrow 3:30 PM", type: "academic" },
                      { activity: "Art Competition", date: "Friday 2:00 PM", type: "cultural" },
                      { activity: "Math Tutoring", date: "Saturday 10:00 AM", type: "academic" },
                    ].map((activity, index) => (
                      <div key={index} className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-green-900 dark:text-green-100 text-sm">
                            {activity.activity}
                          </h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              activity.type === "sports"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                : activity.type === "academic"
                                  ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                            }`}
                          >
                            {activity.type}
                          </span>
                        </div>
                        <p className="text-xs text-green-700 dark:text-green-300">{activity.date}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === "performance" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Academic Performance Analysis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">First Term</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">2023/2024</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mt-2">85.5%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Rank: 5/30</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">Second Term</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">2023/2024</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mt-2">87.2%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Rank: 3/30</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">Third Term</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">2023/2024</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mt-2">In Progress</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Current: 89%</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Subject Performance</h4>
                    <div className="space-y-3">
                      {[
                        { subject: "Mathematics", score: 92, trend: "up" },
                        { subject: "English", score: 87, trend: "up" },
                        { subject: "Physics", score: 84, trend: "down" },
                        { subject: "Chemistry", score: 89, trend: "stable" },
                      ].map((subject, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white">{subject.subject}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Latest Score</p>
                          </div>
                          <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white mr-2">
                              {subject.score}%
                            </span>
                            <i
                              className={`ri-arrow-${subject.trend === "up" ? "up" : subject.trend === "down" ? "down" : "right"}-line text-${subject.trend === "up" ? "green" : subject.trend === "down" ? "red" : "gray"}-500`}
                            ></i>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Extracurricular Activities</h4>
                    <div className="space-y-3">
                      {[
                        { activity: "Soccer Team", performance: "Excellent", level: "School Team Captain" },
                        { activity: "Science Club", performance: "Good", level: "Active Member" },
                        { activity: "Art Club", performance: "Fair", level: "New Member" },
                        { activity: "Debate Society", performance: "Excellent", level: "Vice President" },
                      ].map((activity, index) => (
                        <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium text-gray-900 dark:text-white">{activity.activity}</h5>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                activity.performance === "Excellent"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                  : activity.performance === "Good"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                              }`}
                            >
                              {activity.performance}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{activity.level}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Payments Tab */}
          {activeTab === "payments" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Make Payment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Payment Type
                    </label>
                    <select
                      value={paymentType}
                      onChange={(e) => setPaymentType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
                    >
                      <option value="tuition">Tuition Fee</option>
                      <option value="library">Library Fee</option>
                      <option value="sports">Sports Fee</option>
                      <option value="excursion">Excursion Fee</option>
                      <option value="miscellaneous">Miscellaneous Fee</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Amount (₦)
                    </label>
                    <Input
                      type="number"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Button onClick={handlePayment} disabled={!paymentAmount}>
                    <i className="ri-money-dollar-circle-line mr-2"></i>
                    Make Payment
                  </Button>
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment History</h3>
                <div className="space-y-3">
                  {[
                    {
                      id: "PAY123456",
                      type: "Tuition Fee",
                      amount: "₦50,000",
                      date: "2024-03-15",
                      status: "Confirmed",
                    },
                    { id: "PAY123455", type: "Library Fee", amount: "₦2,500", date: "2024-03-10", status: "Confirmed" },
                    { id: "PAY123454", type: "Sports Fee", amount: "₦5,000", date: "2024-03-05", status: "Pending" },
                  ].map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{payment.type}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {payment.id} • {payment.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900 dark:text-white">{payment.amount}</div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            payment.status === "Confirmed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Reward Teacher</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Reward teachers with virtual coins that can be converted to Nigerian Naira bonuses.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select Teacher
                    </label>
                    <select
                      value={selectedTeacher}
                      onChange={(e) => setSelectedTeacher(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
                    >
                      <option value="">Choose a teacher</option>
                      <option value="Mr. Johnson">Mr. Johnson (Mathematics)</option>
                      <option value="Dr. Smith">Dr. Smith (Physics)</option>
                      <option value="Ms. Davis">Ms. Davis (English)</option>
                      <option value="Mrs. Wilson">Mrs. Wilson (Chemistry)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Coins Amount
                    </label>
                    <Input
                      type="number"
                      value={rewardAmount}
                      onChange={(e) => setRewardAmount(e.target.value)}
                      placeholder="Enter coin amount"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Button onClick={handleRewardTeacher} disabled={!selectedTeacher || !rewardAmount}>
                    <i className="ri-coin-line mr-2"></i>
                    Reward Teacher
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === "reports" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Submit Report/Complaint</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Send reports, comments, or complaints to school administrators or teachers regarding your child's
                  welfare and academic performance.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Report Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8">
                      <option value="academic">Academic Concern</option>
                      <option value="behavioral">Behavioral Issue</option>
                      <option value="welfare">Child Welfare</option>
                      <option value="facility">School Facility</option>
                      <option value="teacher">Teacher Performance</option>
                      <option value="general">General Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      value={reportMessage}
                      onChange={(e) => setReportMessage(e.target.value)}
                      placeholder="Describe your concern or feedback in detail..."
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm resize-none"
                      maxLength={1000}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {reportMessage.length}/1000 characters
                    </p>
                  </div>
                  <div>
                    <Button onClick={handleSubmitReport} disabled={!reportMessage.trim()}>
                      <i className="ri-send-plane-line mr-2"></i>
                      Submit Report
                    </Button>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Previous Reports</h3>
                <div className="space-y-3">
                  {[
                    {
                      id: "RPT001",
                      type: "Academic Concern",
                      subject: "Math homework difficulty",
                      date: "2024-03-10",
                      status: "Resolved",
                      response: "Teacher has provided additional support materials.",
                    },
                    {
                      id: "RPT002",
                      type: "Behavioral Issue",
                      subject: "Classroom disruption",
                      date: "2024-03-05",
                      status: "In Progress",
                      response: "Meeting scheduled with counselor.",
                    },
                  ].map((report, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">{report.subject}</h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            report.status === "Resolved"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                          }`}
                        >
                          {report.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {report.type} • {report.id} • {report.date}
                      </p>
                      {report.response && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Response:</strong> {report.response}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Ranking Tab */}
          {activeTab === "ranking" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Parent Ranking System</h3>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-medal-line text-yellow-600 dark:text-yellow-400 text-3xl"></i>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Gold Parent</h4>
                  <p className="text-gray-600 dark:text-gray-300">Rank #12 out of 150 parents</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">85%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Overall Engagement Score</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Ranking Factors</h4>
                    <div className="space-y-3">
                      {[
                        { factor: "Child's Academic Performance", score: 92, weight: "40%" },
                        { factor: "Extracurricular Participation", score: 85, weight: "25%" },
                        { factor: "Parent Engagement", score: 78, weight: "20%" },
                        { factor: "Payment Timeliness", score: 95, weight: "15%" },
                      ].map((item, index) => (
                        <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{item.factor}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{item.weight}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.score}%` }}></div>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.score}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Leaderboard</h4>
                    <div className="space-y-2">
                      {[
                        { rank: 1, name: "Mrs. Adebayo", score: 98, badge: "Platinum" },
                        { rank: 2, name: "Mr. Okafor", score: 95, badge: "Platinum" },
                        { rank: 3, name: "Mrs. Ibrahim", score: 92, badge: "Gold" },
                        { rank: 12, name: "You", score: 85, badge: "Gold", isCurrentUser: true },
                      ].map((parent, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-3 rounded-lg ${
                            parent.isCurrentUser
                              ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                              : "bg-gray-50 dark:bg-gray-800"
                          }`}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                parent.rank <= 3
                                  ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                              }`}
                            >
                              {parent.rank <= 3 ? <i className="ri-trophy-line"></i> : parent.rank}
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900 dark:text-white">{parent.name}</h5>
                              <p className="text-xs text-gray-600 dark:text-gray-300">{parent.badge} Parent</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900 dark:text-white">{parent.score}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Chat Tab */}
          {activeTab === "chat" && (
            <div className="space-y-6">
              <Card className="text-center py-8">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-vip-crown-line text-purple-600 dark:text-purple-400 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Premium Feature</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Parent-Child Chat is a premium feature that allows secure communication between you and your child.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <i className="ri-vip-crown-line mr-2"></i>
                  Upgrade to Premium
                </Button>
              </Card>
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  )
}
