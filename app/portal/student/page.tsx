"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../../../components/Header"
import Card from "../../../components/ui/Card"
import Button from "../../../components/ui/Button"
import Input from "../../../components/ui/Input"
import { ThemeProvider } from "../../../components/ThemeProvider"
import NotificationPanel from "../../../components/ui/NotificationPanel"
import QuizModule from "../../../components/ui/QuizModule"
import AIAssistant from "../../../components/ui/AIAssistant"

export default function StudentPortal() {
  const [userData, setUserData] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "assignment" as const,
      title: "New Math Assignment",
      message: "Algebra Problem Set 5 has been assigned. Due tomorrow.",
      timestamp: "2 hours ago",
      read: false,
      priority: "high" as const,
      attachments: [{ type: "document" as const, url: "#", name: "problem_set_5.pdf" }],
    },
    {
      id: "2",
      type: "announcement" as const,
      title: "Science Fair Registration",
      message: "Registration is now open for the annual science fair.",
      timestamp: "1 day ago",
      read: false,
      priority: "medium" as const,
    },
  ])
  const [paymentId, setPaymentId] = useState("")
  const [showQuiz, setShowQuiz] = useState(false)
  const [showAI, setShowAI] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const userType = localStorage.getItem("portalUserType")
    const storedUserData = localStorage.getItem("portalUserData")

    if (userType !== "student" || !storedUserData) {
      router.push("/auth/portal")
      return
    }

    setUserData(JSON.parse(storedUserData))
  }, [router])

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const handleAIMessage = async (message: string): Promise<string> => {
    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return `I understand you're asking about "${message}". Here's a helpful explanation: This is a simulated AI response that would normally come from an integrated AI model like those from Hugging Face or DeepSeek. The AI would provide detailed academic assistance based on your question.`
  }

  const sampleQuizQuestions = [
    {
      id: "1",
      question: "What is the value of x in the equation 2x + 5 = 15?",
      options: ["5", "10", "7.5", "12"],
      correctAnswer: 0,
      explanation: "2x + 5 = 15, so 2x = 10, therefore x = 5",
    },
    {
      id: "2",
      question: "Which of the following is a prime number?",
      options: ["15", "21", "17", "25"],
      correctAnswer: 2,
      explanation: "17 is only divisible by 1 and itself, making it a prime number",
    },
  ]

  if (!userData) {
    return <div>Loading...</div>
  }

  if (showQuiz) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          <main className="px-6 py-8">
            <div className="mb-6">
              <Button variant="outline" onClick={() => setShowQuiz(false)}>
                <i className="ri-arrow-left-line mr-2"></i>
                Back to Dashboard
              </Button>
            </div>
            <QuizModule
              subject="Mathematics"
              questions={sampleQuizQuestions}
              onComplete={(score, answers) => {
                console.log("Quiz completed:", { score, answers })
                setShowQuiz(false)
              }}
            />
          </main>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Student Portal</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Student ID: {userData.studentId} | School: {userData.schoolId}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              {[
                { id: "dashboard", label: "Dashboard", icon: "ri-dashboard-line" },
                { id: "results", label: "Results", icon: "ri-file-chart-line" },
                { id: "assignments", label: "Assignments", icon: "ri-file-text-line" },
                { id: "quiz", label: "Quiz", icon: "ri-question-line" },
                { id: "payments", label: "Payments", icon: "ri-money-dollar-circle-line" },
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
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">Current GPA</p>
                      <p className="text-3xl font-bold">3.85</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="ri-trophy-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-100 text-sm font-medium">Attendance</p>
                      <p className="text-3xl font-bold">94%</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="ri-calendar-check-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-amber-100 text-sm font-medium">Pending Tasks</p>
                      <p className="text-3xl font-bold">7</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="ri-task-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">Books Borrowed</p>
                      <p className="text-3xl font-bold">3</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="ri-book-open-line text-2xl w-6 h-6 flex items-center justify-center"></i>
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

                {/* Quick Actions */}
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="justify-start" variant="ghost" onClick={() => setShowQuiz(true)}>
                      <i className="ri-question-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      Take Quiz
                    </Button>
                    <Button className="justify-start" variant="ghost" onClick={() => setShowAI(true)}>
                      <i className="ri-robot-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      AI Assistant
                    </Button>
                    <Button className="justify-start" variant="ghost">
                      <i className="ri-calendar-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      View Schedule
                    </Button>
                    <Button className="justify-start" variant="ghost">
                      <i className="ri-book-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      Library
                    </Button>
                  </div>
                </Card>
              </div>

              {/* AI Assistant Modal */}
              {showAI && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl mx-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Study Assistant</h3>
                      <Button variant="ghost" onClick={() => setShowAI(false)}>
                        <i className="ri-close-line"></i>
                      </Button>
                    </div>
                    <AIAssistant onSendMessage={handleAIMessage} />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Results Tab */}
          {activeTab === "results" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Academic Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">First Term</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">2023/2024</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mt-2">85.5%</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">Second Term</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">2023/2024</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mt-2">87.2%</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">Third Term</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">2023/2024</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mt-2">In Progress</div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Subject</th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">
                          1st Assessment
                        </th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">
                          2nd Assessment
                        </th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">
                          3rd Assessment
                        </th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Exam</th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Total</th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { subject: "Mathematics", ass1: 15, ass2: 14, ass3: 16, exam: 52, total: 97, grade: "A" },
                        { subject: "English", ass1: 13, ass2: 15, ass3: 14, exam: 48, total: 90, grade: "A" },
                        { subject: "Physics", ass1: 12, ass2: 13, ass3: 15, exam: 45, total: 85, grade: "B+" },
                        { subject: "Chemistry", ass1: 14, ass2: 12, ass3: 13, exam: 44, total: 83, grade: "B+" },
                      ].map((result, index) => (
                        <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">{result.subject}</td>
                          <td className="py-3 px-4 text-center text-gray-900 dark:text-white">{result.ass1}/15</td>
                          <td className="py-3 px-4 text-center text-gray-900 dark:text-white">{result.ass2}/15</td>
                          <td className="py-3 px-4 text-center text-gray-900 dark:text-white">{result.ass3}/15</td>
                          <td className="py-3 px-4 text-center text-gray-900 dark:text-white">{result.exam}/60</td>
                          <td className="py-3 px-4 text-center text-gray-900 dark:text-white font-semibold">
                            {result.total}/100
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                result.grade === "A"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              }`}
                            >
                              {result.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Payments Tab */}
          {activeTab === "payments" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Confirmation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Enter the Payment ID received after your parent made a payment to confirm it on your dashboard.
                </p>
                <div className="flex space-x-4">
                  <Input
                    value={paymentId}
                    onChange={(e) => setPaymentId(e.target.value)}
                    placeholder="Enter Payment ID (e.g., PAY123456)"
                    className="flex-1"
                  />
                  <Button>Confirm Payment</Button>
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
                  Parent-Child Chat is a premium feature that allows secure communication between you and your parents.
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