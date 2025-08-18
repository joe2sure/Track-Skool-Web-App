"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye, AlertTriangle, CheckCircle } from "lucide-react"

const feeBreakdown = [
  { name: "Tuition Fee", paid: 7000, total: 10000, amount: 3000, status: "partial", color: "bg-yellow-500" },
  { name: "Lab Fee", paid: 600, total: 600, amount: 0, status: "paid", color: "bg-green-500" },
  { name: "Library Fee", paid: 300, total: 300, amount: 0, status: "paid", color: "bg-green-500" },
  { name: "Sports Fee", paid: 500, total: 500, amount: 0, status: "paid", color: "bg-green-500" },
  { name: "Transport Fee", paid: 150, total: 900, amount: 750, status: "pending", color: "bg-red-500" },
]

const paymentHistory = [
  {
    id: 1,
    title: "February Tuition Fee - Emma Johnson",
    date: "Feb 15, 2024",
    amount: 1250,
    method: "Credit Card",
    receipt: "RCP-240215-001",
    status: "completed",
  },
  {
    id: 2,
    title: "February Tuition Fee - Sarah Johnson",
    date: "Feb 15, 2024",
    amount: 980,
    method: "Bank Transfer",
    receipt: "RCP-240215-002",
    status: "completed",
  },
  {
    id: 3,
    title: "Transport Fee - Emma Johnson",
    date: "Feb 10, 2024",
    amount: 150,
    method: "Digital Wallet",
    receipt: "RCP-240210-001",
    status: "completed",
  },
  {
    id: 4,
    title: "January Tuition Fee - Emma Johnson",
    date: "Jan 15, 2024",
    amount: 1250,
    method: "Credit Card",
    receipt: "RCP-240115-001",
    status: "completed",
  },
  {
    id: 5,
    title: "January Tuition Fee - Sarah Johnson",
    date: "Jan 15, 2024",
    amount: 980,
    method: "Bank Transfer",
    receipt: "RCP-240115-002",
    status: "completed",
  },
  {
    id: 6,
    title: "Library Fee - Both Children",
    date: "Jan 10, 2024",
    amount: 550,
    method: "Credit Card",
    receipt: "RCP-240110-001",
    status: "completed",
  },
  {
    id: 7,
    title: "Sports Fee - Both Children",
    date: "Jan 5, 2024",
    amount: 500,
    method: "Bank Transfer",
    receipt: "RCP-240105-001",
    status: "completed",
  },
  {
    id: 8,
    title: "Annual Lab Fee - Emma Johnson",
    date: "Dec 20, 2023",
    amount: 800,
    method: "Digital Wallet",
    receipt: "RCP-231220-001",
    status: "completed",
  },
]

const pendingPayments = [
  {
    title: "March Tuition Fee",
    student: "Emma Johnson",
    type: "Monthly tuition fee for Grade 10",
    amount: 1250,
    dueDate: "Mar 15, 2024",
    daysOverdue: 515,
    priority: "high",
  },
  {
    title: "March Tuition Fee",
    student: "Sarah Johnson",
    type: "Monthly tuition fee for Grade 7",
    amount: 980,
    dueDate: "Mar 15, 2024",
    daysOverdue: 515,
    priority: "high",
  },
  {
    title: "Transport Fee",
    student: "Emma Johnson",
    type: "Monthly transport charges",
    amount: 150,
    dueDate: "Mar 20, 2024",
    daysOverdue: 508,
    priority: "medium",
  },
  {
    title: "Transport Fee",
    student: "Sarah Johnson",
    type: "Monthly transport charges",
    amount: 100,
    dueDate: "Mar 20, 2024",
    daysOverdue: 508,
    priority: "medium",
  },
  {
    title: "Annual Day Event",
    student: "Both Children",
    type: "Participation fee for annual day event",
    amount: 200,
    dueDate: "Mar 25, 2024",
    daysOverdue: 503,
    priority: "low",
  },
]

export default function FeesPayments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Fees & Payments</h1>
        <p className="text-slate-400 mt-1">Manage school fees, payments, and financial records</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Fee Overview */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">Fee Overview</CardTitle>
                <p className="text-slate-400 text-sm">Annual fee structure and payment status</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Emma
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Sarah
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$12,500</div>
                  <div className="text-slate-400 text-sm">Total Annual</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$8,750</div>
                  <div className="text-slate-400 text-sm">Amount Paid</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">$3,750</div>
                  <div className="text-slate-400 text-sm">Remaining</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">$1250</div>
                  <div className="text-slate-400 text-sm">Next Due</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Payment Progress</span>
                  <span className="text-white">70% Complete</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Fee Breakdown */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Fee Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {feeBreakdown.map((fee, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${fee.color}`}></div>
                    <div>
                      <h4 className="text-white font-medium">{fee.name}</h4>
                      <p className="text-slate-400 text-sm">
                        Paid: ${fee.paid} / Total: ${fee.total}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">{fee.status === "paid" ? "$0" : `$${fee.amount}`}</div>
                    <div className="text-slate-400 text-sm">
                      {fee.status === "paid" ? "Paid" : fee.status === "partial" ? "Partial" : "Pending"}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Payment History */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">Payment History</CardTitle>
                <p className="text-slate-400 text-sm">Track all fee payments and transactions</p>
              </div>
              <div className="text-right">
                <div className="text-slate-400 text-sm">Total Paid This Year</div>
                <div className="text-2xl font-bold text-green-400">$6,860</div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-700">
                  <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">
                    All Payments (8)
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="data-[state=active]:bg-blue-600">
                    Completed (8)
                  </TabsTrigger>
                  <TabsTrigger value="pending" className="data-[state=active]:bg-blue-600">
                    Pending (0)
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4 mt-4">
                  {paymentHistory.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <div>
                          <h4 className="text-white font-medium">{payment.title}</h4>
                          <p className="text-slate-400 text-sm">
                            {payment.date} • via {payment.method} • Receipt: {payment.receipt}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-white font-semibold">${payment.amount}</div>
                          <Badge className="bg-green-600 text-white">Completed</Badge>
                        </div>
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>

              <div className="flex justify-center mt-6">
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  Load More Payments
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Payments Sidebar */}
        <div>
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  Pending Payments
                </CardTitle>
                <p className="text-slate-400 text-sm">Outstanding fees and upcoming due dates</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-3 bg-red-900/20 border border-red-800 rounded-lg">
                <div className="text-red-400 font-medium">Total Pending</div>
                <div className="text-2xl font-bold text-white">$2,680</div>
                <div className="text-red-400 text-sm">High Priority: 2 items</div>
              </div>

              <div className="space-y-4">
                {pendingPayments.map((payment, index) => (
                  <div key={index} className="p-4 border border-red-800 rounded-lg bg-red-900/10">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-white font-medium">{payment.title}</h4>
                        <p className="text-slate-400 text-sm">
                          {payment.student} • {payment.type}
                        </p>
                      </div>
                      <Badge
                        className={`${
                          payment.priority === "high"
                            ? "bg-red-600"
                            : payment.priority === "medium"
                              ? "bg-orange-600"
                              : "bg-yellow-600"
                        } text-white`}
                      >
                        {payment.priority} priority
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">${payment.amount}</div>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Pay Now
                      </Button>
                    </div>
                    <div className="mt-2 text-sm">
                      <div className="text-slate-400">Due: {payment.dueDate}</div>
                      <div className="text-red-400">{payment.daysOverdue} days overdue</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-2">Pay All Pending Fees</h4>
                <p className="text-slate-300 text-sm mb-3">Save time by paying all outstanding fees at once</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Pay $2,680</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
