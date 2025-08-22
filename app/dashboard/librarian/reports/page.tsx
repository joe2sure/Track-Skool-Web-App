"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  Download,
  Calendar,
  Users,
  BookOpen,
  DollarSign,
  FileText,
  PieChart,
  Activity,
} from "lucide-react"
import { Sidebar } from "@/components/ui/librarian/sidebar"
import { Header } from "@/components/ui/librarian/header"
import { StatCard } from "@/components/ui/librarian/stat-card"

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [selectedTab, setSelectedTab] = useState("overview")

  const reportData = {
    circulation: {
      totalIssued: 1247,
      totalReturned: 1189,
      currentlyIssued: 58,
      overdueBooks: 12,
      averageIssueTime: "14 days",
      popularCategories: [
        { name: "Science & Technology", count: 342, percentage: 27.4 },
        { name: "Literature", count: 298, percentage: 23.9 },
        { name: "History", count: 187, percentage: 15.0 },
        { name: "Mathematics", count: 156, percentage: 12.5 },
        { name: "Others", count: 264, percentage: 21.2 },
      ],
    },
    inventory: {
      totalBooks: 12847,
      newAdditions: 156,
      booksRemoved: 23,
      lowStockItems: 45,
      mostRequestedBooks: [
        { title: "Advanced Mathematics for Engineers", requests: 23 },
        { title: "Modern Physics Concepts", requests: 19 },
        { title: "Digital Marketing Strategies", requests: 17 },
        { title: "World History Guide", requests: 15 },
        { title: "Computer Science Fundamentals", requests: 14 },
      ],
    },
    financial: {
      totalFines: 2450.75,
      finesCollected: 2180.5,
      pendingFines: 270.25,
      averageFinePerUser: 15.3,
      monthlyRevenue: [
        { month: "Jan", amount: 1850 },
        { month: "Feb", amount: 2100 },
        { month: "Mar", amount: 1950 },
        { month: "Apr", amount: 2300 },
        { month: "May", amount: 2450 },
      ],
    },
    users: {
      totalActiveUsers: 1456,
      newRegistrations: 89,
      frequentUsers: 234,
      inactiveUsers: 67,
      usersByCategory: [
        { category: "Students", count: 1123, percentage: 77.1 },
        { category: "Faculty", count: 234, percentage: 16.1 },
        { category: "Staff", count: 99, percentage: 6.8 },
      ],
    },
  }

  const recentReports = [
    {
      id: 1,
      title: "Monthly Circulation Report",
      description: "Detailed analysis of book circulation for August 2025",
      date: "2025-08-20",
      type: "Circulation",
      status: "Generated",
      size: "2.3 MB",
    },
    {
      id: 2,
      title: "Inventory Status Report",
      description: "Current inventory status and stock analysis",
      date: "2025-08-18",
      type: "Inventory",
      status: "Generated",
      size: "1.8 MB",
    },
    {
      id: 3,
      title: "Financial Summary Q2",
      description: "Quarterly financial report including fines and revenue",
      date: "2025-08-15",
      type: "Financial",
      status: "Generated",
      size: "1.2 MB",
    },
  ]

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <Header
          title="Reports & Analytics"
          subtitle="Comprehensive insights and analytics for library operations"
          backgroundImage="/analytics-dashboard.png"
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <StatCard
              title="Books Circulated"
              value={1247}
              change="+8.2% from last month"
              changeType="positive"
              icon={BookOpen}
              color="blue"
            />
            <StatCard
              title="Active Users"
              value={1456}
              change="+12% from last month"
              changeType="positive"
              icon={Users}
              color="green"
            />
            <StatCard
              title="Total Fines"
              value="$2,451"
              change="+5.3% from last month"
              changeType="positive"
              icon={DollarSign}
              color="purple"
            />
            <StatCard
              title="Collection Growth"
              value="12,847"
              change="+156 new books"
              changeType="positive"
              icon={TrendingUp}
              color="orange"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="xl:col-span-3 space-y-6 lg:space-y-8">
              {/* Reports Dashboard */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-xl font-semibold text-white">Analytics Dashboard</h2>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger className="w-full sm:w-40 bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="quarter">This Quarter</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Export Report
                    </Button>
                  </div>
                </div>

                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-700">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-slate-600">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="circulation" className="data-[state=active]:bg-slate-600">
                      Circulation
                    </TabsTrigger>
                    <TabsTrigger value="inventory" className="data-[state=active]:bg-slate-600">
                      Inventory
                    </TabsTrigger>
                    <TabsTrigger value="financial" className="data-[state=active]:bg-slate-600">
                      Financial
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Circulation Overview */}
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <BarChart3 className="h-5 w-5 mr-2" />
                          Circulation Overview
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">Books Issued</span>
                            <span className="text-white font-semibold">{reportData.circulation.totalIssued}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">Books Returned</span>
                            <span className="text-white font-semibold">{reportData.circulation.totalReturned}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">Currently Issued</span>
                            <span className="text-white font-semibold">{reportData.circulation.currentlyIssued}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">Overdue Books</span>
                            <span className="text-red-400 font-semibold">{reportData.circulation.overdueBooks}</span>
                          </div>
                        </div>
                      </div>

                      {/* User Statistics */}
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Users className="h-5 w-5 mr-2" />
                          User Statistics
                        </h3>
                        <div className="space-y-4">
                          {reportData.users.usersByCategory.map((category) => (
                            <div key={category.category} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-slate-300">{category.category}</span>
                                <span className="text-white font-semibold">{category.count}</span>
                              </div>
                              <div className="w-full bg-slate-600 rounded-full h-2">
                                <div
                                  className="bg-blue-500 h-2 rounded-full"
                                  style={{ width: `${category.percentage}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Popular Categories */}
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <PieChart className="h-5 w-5 mr-2" />
                          Popular Categories
                        </h3>
                        <div className="space-y-3">
                          {reportData.circulation.popularCategories.map((category, index) => (
                            <div key={category.name} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-3 h-3 rounded-full bg-${["blue", "green", "yellow", "purple", "pink"][index]}-500`}
                                />
                                <span className="text-slate-300">{category.name}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-semibold">{category.count}</div>
                                <div className="text-slate-400 text-sm">{category.percentage}%</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Financial Summary */}
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <DollarSign className="h-5 w-5 mr-2" />
                          Financial Summary
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">Total Fines</span>
                            <span className="text-white font-semibold">${reportData.financial.totalFines}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">Collected</span>
                            <span className="text-green-400 font-semibold">${reportData.financial.finesCollected}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">Pending</span>
                            <span className="text-orange-400 font-semibold">${reportData.financial.pendingFines}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">Avg per User</span>
                            <span className="text-white font-semibold">${reportData.financial.averageFinePerUser}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="circulation" className="mt-6">
                    <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                      <h3 className="text-lg font-semibold text-white mb-6">Detailed Circulation Analysis</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-slate-300">Issue/Return Trends</h4>
                          <div className="h-64 bg-slate-600 rounded-lg flex items-center justify-center">
                            <span className="text-slate-400">Circulation Chart Placeholder</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-slate-300">Category Performance</h4>
                          <div className="space-y-3">
                            {reportData.circulation.popularCategories.map((category) => (
                              <div
                                key={category.name}
                                className="flex items-center justify-between p-3 bg-slate-600 rounded"
                              >
                                <span className="text-white">{category.name}</span>
                                <div className="text-right">
                                  <div className="text-white font-semibold">{category.count}</div>
                                  <div className="text-slate-400 text-sm">{category.percentage}%</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="inventory" className="mt-6">
                    <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                      <h3 className="text-lg font-semibold text-white mb-6">Inventory Analysis</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-slate-300">Most Requested Books</h4>
                          <div className="space-y-3">
                            {reportData.inventory.mostRequestedBooks.map((book, index) => (
                              <div
                                key={book.title}
                                className="flex items-center justify-between p-3 bg-slate-600 rounded"
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-slate-400 font-mono">#{index + 1}</span>
                                  <span className="text-white">{book.title}</span>
                                </div>
                                <span className="text-blue-400 font-semibold">{book.requests} requests</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-slate-300">Inventory Status</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-slate-600 rounded">
                              <span className="text-slate-300">Total Books</span>
                              <span className="text-white font-semibold">{reportData.inventory.totalBooks}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-600 rounded">
                              <span className="text-slate-300">New Additions</span>
                              <span className="text-green-400 font-semibold">+{reportData.inventory.newAdditions}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-600 rounded">
                              <span className="text-slate-300">Books Removed</span>
                              <span className="text-red-400 font-semibold">-{reportData.inventory.booksRemoved}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-600 rounded">
                              <span className="text-slate-300">Low Stock Items</span>
                              <span className="text-orange-400 font-semibold">
                                {reportData.inventory.lowStockItems}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="financial" className="mt-6">
                    <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                      <h3 className="text-lg font-semibold text-white mb-6">Financial Analysis</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-slate-300">Monthly Revenue Trend</h4>
                          <div className="h-64 bg-slate-600 rounded-lg flex items-center justify-center">
                            <span className="text-slate-400">Revenue Chart Placeholder</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-md font-medium text-slate-300">Fine Collection Status</h4>
                          <div className="space-y-4">
                            {reportData.financial.monthlyRevenue.map((month) => (
                              <div
                                key={month.month}
                                className="flex items-center justify-between p-3 bg-slate-600 rounded"
                              >
                                <span className="text-white">{month.month} 2025</span>
                                <span className="text-green-400 font-semibold">${month.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Reports */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Reports</h3>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <div key={report.id} className="p-3 bg-slate-700 rounded-lg border border-slate-600">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-medium text-white">{report.title}</h4>
                        <Badge variant="default" className="bg-green-600 text-xs">
                          {report.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{report.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>{report.date}</span>
                        <span>{report.size}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2 text-blue-400 border-blue-400 bg-transparent"
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Activity className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}