// import { Sidebar } from "@/components/sidebar"
// import { Header } from "@/components/header"
// import { StatCard } from "@/components/stat-card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookCheck, BookOpen, Clock, AlertTriangle, Search, Calendar } from "lucide-react"
import { Sidebar } from "@/components/ui/librarian/sidebar"
import { Header } from "@/components/ui/librarian/header"
import { StatCard } from "@/components/ui/librarian/stat-card"
import { Input } from "@/components/ui/parent/input"
import { Textarea } from "@/components/ui/teacher/textarea"

export default function IssueReturnPage() {
  const [issueDate, setIssueDate] = useState("10/08/2025")
  const [dueDate, setDueDate] = useState("24/08/2025")
  const [notes, setNotes] = useState("")

  const issuedBooks = [
    {
      book: "Advanced Mathematics for Engineers",
      student: "Emily Johnson (STU2024001)",
      dueDate: "2/15/2024",
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      book: "World History: A Comprehensive Guide",
      student: "Sarah Davis (STU2024003)",
      dueDate: "2/5/2024",
      status: "Overdue",
      statusColor: "bg-red-500",
      fine: "$2.00",
      overdueDays: "2 days overdue",
    },
  ]

  const recentTransactions = [
    {
      type: "Issued",
      book: "Data Science Fundamentals",
      student: "Alice Cooper",
      time: "10 minutes ago",
      icon: BookCheck,
      color: "text-green-400",
    },
    {
      type: "Returned",
      book: "Modern Physics",
      student: "Bob Wilson",
      time: "25 minutes ago",
      fine: "$2.50",
      icon: BookOpen,
      color: "text-blue-400",
    },
    {
      type: "Issued",
      book: "World Literature",
      student: "Carol Brown",
      time: "1 hour ago",
      icon: BookCheck,
      color: "text-green-400",
    },
    {
      type: "Returned",
      book: "Calculus Made Easy",
      student: "David Lee",
      time: "2 hours ago",
      icon: BookOpen,
      color: "text-blue-400",
    },
    {
      type: "Issued",
      book: "History of Art",
      student: "Eva Martinez",
      time: "3 hours ago",
      icon: BookCheck,
      color: "text-green-400",
    },
  ]

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <Header
          title="Issue & Return Management"
          subtitle="Streamlined book circulation and tracking system"
          backgroundImage="/placeholder.svg?height=200&width=1200"
        />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Books Issued Today"
              value={143}
              change="+18% from yesterday"
              changeType="positive"
              icon={BookCheck}
              color="green"
            />
            <StatCard
              title="Books Returned Today"
              value={127}
              change="+12% from yesterday"
              changeType="positive"
              icon={BookOpen}
              color="blue"
            />
            <StatCard
              title="Pending Returns"
              value={1324}
              change="Same as yesterday"
              changeType="neutral"
              icon={Clock}
              color="orange"
            />
            <StatCard
              title="Overdue Books"
              value={12}
              change="+3 from yesterday"
              changeType="negative"
              icon={AlertTriangle}
              color="red"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800 rounded-lg border border-slate-700">
                <Tabs defaultValue="return" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-700 m-4">
                    <TabsTrigger value="issue" className="data-[state=active]:bg-green-600">
                      Issue Book
                    </TabsTrigger>
                    <TabsTrigger value="return" className="data-[state=active]:bg-blue-600">
                      Return Book
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="return" className="p-6 pt-0">
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-white">Return Book</h2>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Search Issued Books</label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input
                            placeholder="Search by student name, book title, or ID"
                            className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        {issuedBooks.map((book, index) => (
                          <div key={index} className="p-4 bg-slate-700 rounded-lg border border-slate-600">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h3 className="text-white font-medium">{book.book}</h3>
                                <p className="text-slate-400 text-sm">Student: {book.student}</p>
                                <p className="text-slate-400 text-sm">
                                  Due: {book.dueDate} {book.overdueDays && `(${book.overdueDays})`}
                                </p>
                                {book.fine && <p className="text-red-400 text-sm font-medium">Fine: {book.fine}</p>}
                              </div>
                              <div className="flex items-center space-x-3">
                                <span
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${book.statusColor}`}
                                >
                                  {book.status}
                                </span>
                                <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
                                  Select for Return
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="issue" className="p-6 pt-0">
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-white">Issue New Book</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Student ID or Name</label>
                          <Input
                            placeholder="Enter student ID or search by name"
                            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Book ID or Title</label>
                          <Input
                            placeholder="Enter book ID or search by title"
                            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Issue Date</label>
                          <div className="relative">
                            <Input
                              type="date"
                              value={issueDate}
                              onChange={(e) => setIssueDate(e.target.value)}
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Due Date</label>
                          <div className="relative">
                            <Input
                              type="date"
                              value={dueDate}
                              onChange={(e) => setDueDate(e.target.value)}
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Notes (Optional)</label>
                        <Textarea
                          placeholder="Any additional notes or special instructions"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 resize-none"
                          rows={4}
                        />
                        <p className="text-slate-400 text-sm mt-1">{notes.length}/500 characters</p>
                      </div>

                      <div className="flex justify-end space-x-4">
                        <Button
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                        >
                          Clear Form
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700">Issue Book</Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Recent Transactions */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div className={`p-2 rounded-lg bg-slate-700 ${transaction.color}`}>
                        <transaction.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-medium ${transaction.color}`}>{transaction.type}</span>
                          {transaction.fine && (
                            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                              Fine: {transaction.fine}
                            </span>
                          )}
                        </div>
                        <p className="text-white text-sm font-medium">{transaction.book}</p>
                        <p className="text-slate-400 text-sm">{transaction.student}</p>
                        <p className="text-slate-400 text-xs mt-1">{transaction.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Summary */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h2 className="text-xl font-semibold text-white mb-4">Daily Summary</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-green-400 text-sm">
                        Today: 143 books issued, 127 returned, $45.50 in fines collected
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">Designed by</span>
                    <span className="text-xs text-blue-400 ml-1">Roaddy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}