"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DollarSign,
  CreditCard,
  AlertCircle,
  TrendingDown,
  Plus,
  Download,
  Eye,
  Edit,
  Receipt,
  TrendingUp,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

const paymentRecords = [
  {
    id: "STU001",
    student: {
      name: "John Smith",
      id: "STU001",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    paymentType: "Tuition Fee",
    amount: "$2,500",
    method: "Bank Transfer",
    status: "Paid",
    dueDate: "2024-01-10",
    paidDate: "2024-01-15",
  },
  {
    id: "STU002",
    student: {
      name: "Emma Johnson",
      id: "STU002",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    paymentType: "Lab Fee",
    amount: "$350",
    method: "Credit Card",
    status: "Paid",
    dueDate: "2024-01-12",
    paidDate: "2024-01-14",
  },
  {
    id: "STU003",
    student: {
      name: "Michael Brown",
      id: "STU003",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    paymentType: "Library Fee",
    amount: "$150",
    method: "Cash",
    status: "Overdue",
    dueDate: "2024-01-05",
    paidDate: null,
  },
  {
    id: "STU004",
    student: {
      name: "Sarah Davis",
      id: "STU004",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    paymentType: "Activity Fee",
    amount: "$200",
    method: "Online Payment",
    status: "Pending",
    dueDate: "2024-01-20",
    paidDate: null,
  },
  {
    id: "STU005",
    student: {
      name: "David Wilson",
      id: "STU005",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    paymentType: "Tuition Fee",
    amount: "$2,500",
    method: "Bank Transfer",
    status: "Paid",
    dueDate: "2024-01-10",
    paidDate: "2024-01-13",
  },
]

export default function FinancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPaymentType, setSelectedPaymentType] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Finance</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage fees, payments, and financial records</p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Payment
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
                <p className="text-3xl font-bold">$2,847,500</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+12.5% this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Paid Fees</p>
                <p className="text-3xl font-bold">$2,456,800</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+8.3% this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Outstanding</p>
                <p className="text-3xl font-bold">$390,700</p>
                <div className="flex items-center mt-2">
                  <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">-5.2% this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Expenses</p>
                <p className="text-3xl font-bold">$1,892,300</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-sm text-red-500">+4.1% this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Records */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">STUDENT</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">PAYMENT TYPE</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">AMOUNT</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">METHOD</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">STATUS</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">DATES</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {paymentRecords.map((record) => (
                  <tr
                    key={record.id}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={record.student.avatar || "/placeholder.svg"} alt={record.student.name} />
                          <AvatarFallback>
                            {record.student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{record.student.name}</p>
                          <p className="text-sm text-gray-500">{record.student.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{record.paymentType}</td>
                    <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">{record.amount}</td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{record.method}</td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          record.status === "Paid"
                            ? "default"
                            : record.status === "Pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {record.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white">Due: {record.dueDate}</p>
                        {record.paidDate && <p className="text-sm text-gray-500">Paid: {record.paidDate}</p>}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4 text-blue-600" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4 text-green-600" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Receipt className="w-4 h-4 text-purple-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">Showing 1 to 5 of 5 payments</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
