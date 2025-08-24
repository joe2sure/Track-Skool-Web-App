"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  AlertCircle,
  FileText,
  Plus,
  Calendar,
  Download,
} from "lucide-react"

const financialOverview = [
  {
    title: "Total Revenue",
    value: "$2.4M",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Total Expenses",
    value: "$1.8M",
    change: "+5.2%",
    trend: "up",
    icon: CreditCard,
    color: "bg-red-500",
  },
  {
    title: "Net Profit",
    value: "$600K",
    change: "+18.3%",
    trend: "up",
    icon: TrendingUp,
    color: "bg-blue-500",
  },
  {
    title: "Pending Payments",
    value: "$145K",
    change: "-8.1%",
    trend: "down",
    icon: AlertCircle,
    color: "bg-orange-500",
  },
]

const recentTransactions = [
  {
    id: 1,
    description: "Tuition Payment - Oak Valley High",
    school: "Oak Valley High",
    amount: "+$25,000",
    date: "2024-01-15",
    status: "completed",
    type: "income",
  },
  {
    id: 2,
    description: "Teaching Supplies Purchase",
    school: "Riverside Elementary",
    amount: "-$3,200",
    date: "2024-01-14",
    status: "completed",
    type: "expense",
  },
  {
    id: 3,
    description: "Government Grant Received",
    school: "District Office",
    amount: "+$50,000",
    date: "2024-01-13",
    status: "completed",
    type: "income",
  },
  {
    id: 4,
    description: "Facility Maintenance",
    school: "Mountain View Middle",
    amount: "-$8,500",
    date: "2024-01-12",
    status: "pending",
    type: "expense",
  },
  {
    id: 5,
    description: "Event Fundraising Revenue",
    school: "Sunset Academy",
    amount: "+$12,000",
    date: "2024-01-11",
    status: "completed",
    type: "income",
  },
]

const budgetCategories = [
  {
    category: "Salaries & Benefits",
    spent: 900000,
    budget: 1200000,
    percentage: 75,
    color: "bg-blue-500",
  },
  {
    category: "Educational Materials",
    spent: 250000,
    budget: 300000,
    percentage: 83,
    color: "bg-green-500",
  },
  {
    category: "Facility Operations",
    spent: 180000,
    budget: 250000,
    percentage: 72,
    color: "bg-purple-500",
  },
  {
    category: "Technology",
    spent: 135000,
    budget: 150000,
    percentage: 90,
    color: "bg-orange-500",
  },
  {
    category: "Extracurricular",
    spent: 67000,
    budget: 100000,
    percentage: 67,
    color: "bg-red-500",
  },
]

const schoolPerformance = [
  {
    name: "Oak Valley High School",
    revenue: "$850K",
    expenses: "$720K",
    profit: "$130K",
    students: 1234,
  },
  {
    name: "Riverside Elementary",
    revenue: "$520K",
    expenses: "$480K",
    profit: "$40K",
    students: 456,
  },
  {
    name: "Mountain View Middle",
    revenue: "$680K",
    expenses: "$650K",
    profit: "$30K",
    students: 678,
  },
  {
    name: "Sunset Academy",
    revenue: "$750K",
    expenses: "$650K",
    profit: "$60K",
    students: 890,
  },
]

export function FinanceManagement() {
  const [selectedPeriod, setSelectedPeriod] = useState("this-month")

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Finance Management</h1>
          <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
            Monitor financial performance across all schools
          </p>
        </div>
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-full sm:w-48 bg-gray-800 border-gray-700 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="this-quarter">This Quarter</SelectItem>
            <SelectItem value="this-year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {financialOverview.map((item, index) => {
          const IconComponent = item.icon
          const TrendIcon = item.trend === "up" ? TrendingUp : TrendingDown
          return (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0">
                  <div className="text-center sm:text-left">
                    <p className="text-gray-400 text-xs sm:text-sm">{item.title}</p>
                    <p className="text-lg sm:text-2xl font-bold text-white mt-1">{item.value}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
                      <TrendIcon
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${item.trend === "up" ? "text-green-500" : "text-red-500"}`}
                      />
                      <span className={`text-xs sm:text-sm ${item.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg ${item.color} flex items-center justify-center text-white`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2 bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-6">
            <CardTitle className="text-white text-base sm:text-lg">Recent Transactions</CardTitle>
            <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm">
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 bg-gray-700 rounded-lg"
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-sm sm:text-base font-bold ${
                      transaction.type === "income" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base truncate">{transaction.description}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {transaction.school} • {transaction.date}
                    </p>
                  </div>
                </div>
                <div className="text-right sm:text-left">
                  <p
                    className={`font-semibold text-sm sm:text-base ${transaction.type === "income" ? "text-green-400" : "text-red-400"}`}
                  >
                    {transaction.amount}
                  </p>
                  <Badge
                    variant={transaction.status === "completed" ? "default" : "secondary"}
                    className={`${transaction.status === "completed" ? "bg-green-600" : "bg-orange-600"} text-xs`}
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white text-base sm:text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3 p-4 sm:p-6 pt-0">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start text-sm">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start text-sm">
              <Plus className="w-4 h-4 mr-2" />
              Record Payment
            </Button>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white justify-start text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Budget Planning
            </Button>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white justify-start text-sm">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Budget Overview */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white text-base sm:text-lg">Budget Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
          {budgetCategories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium text-sm sm:text-base">{category.category}</span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  {formatCurrency(category.spent)} / {formatCurrency(category.budget)}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Progress value={category.percentage} className="flex-1" />
                <span className="text-white text-xs sm:text-sm font-medium w-8 sm:w-12">{category.percentage}%</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* School Financial Performance */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white text-base sm:text-lg">School Financial Performance</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {schoolPerformance.map((school, index) => (
              <div key={index} className="p-3 sm:p-4 bg-gray-700 rounded-lg">
                <h4 className="text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base truncate">{school.name}</h4>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Revenue:</span>
                    <span className="text-green-400">{school.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expenses:</span>
                    <span className="text-red-400">{school.expenses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Profit:</span>
                    <span className="text-white font-medium">{school.profit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Students:</span>
                    <span className="text-gray-300">{school.students}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}





// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/Button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Progress } from "@/components/ui/progress"
// import { Badge } from "@/components/ui/badge"
// import {
//   TrendingUp,
//   TrendingDown,
//   DollarSign,
//   CreditCard,
//   AlertCircle,
//   FileText,
//   Plus,
//   Calendar,
//   Download,
// } from "lucide-react"

// const financialOverview = [
//   {
//     title: "Total Revenue",
//     value: "$2.4M",
//     change: "+12.5%",
//     trend: "up",
//     icon: DollarSign,
//     color: "bg-green-500",
//   },
//   {
//     title: "Total Expenses",
//     value: "$1.8M",
//     change: "+5.2%",
//     trend: "up",
//     icon: CreditCard,
//     color: "bg-red-500",
//   },
//   {
//     title: "Net Profit",
//     value: "$600K",
//     change: "+18.3%",
//     trend: "up",
//     icon: TrendingUp,
//     color: "bg-blue-500",
//   },
//   {
//     title: "Pending Payments",
//     value: "$145K",
//     change: "-8.1%",
//     trend: "down",
//     icon: AlertCircle,
//     color: "bg-orange-500",
//   },
// ]

// const recentTransactions = [
//   {
//     id: 1,
//     description: "Tuition Payment - Oak Valley High",
//     school: "Oak Valley High",
//     amount: "+$25,000",
//     date: "2024-01-15",
//     status: "completed",
//     type: "income",
//   },
//   {
//     id: 2,
//     description: "Teaching Supplies Purchase",
//     school: "Riverside Elementary",
//     amount: "-$3,200",
//     date: "2024-01-14",
//     status: "completed",
//     type: "expense",
//   },
//   {
//     id: 3,
//     description: "Government Grant Received",
//     school: "District Office",
//     amount: "+$50,000",
//     date: "2024-01-13",
//     status: "completed",
//     type: "income",
//   },
//   {
//     id: 4,
//     description: "Facility Maintenance",
//     school: "Mountain View Middle",
//     amount: "-$8,500",
//     date: "2024-01-12",
//     status: "pending",
//     type: "expense",
//   },
//   {
//     id: 5,
//     description: "Event Fundraising Revenue",
//     school: "Sunset Academy",
//     amount: "+$12,000",
//     date: "2024-01-11",
//     status: "completed",
//     type: "income",
//   },
// ]

// const budgetCategories = [
//   {
//     category: "Salaries & Benefits",
//     spent: 900000,
//     budget: 1200000,
//     percentage: 75,
//     color: "bg-blue-500",
//   },
//   {
//     category: "Educational Materials",
//     spent: 250000,
//     budget: 300000,
//     percentage: 83,
//     color: "bg-green-500",
//   },
//   {
//     category: "Facility Operations",
//     spent: 180000,
//     budget: 250000,
//     percentage: 72,
//     color: "bg-purple-500",
//   },
//   {
//     category: "Technology",
//     spent: 135000,
//     budget: 150000,
//     percentage: 90,
//     color: "bg-orange-500",
//   },
//   {
//     category: "Extracurricular",
//     spent: 67000,
//     budget: 100000,
//     percentage: 67,
//     color: "bg-red-500",
//   },
// ]

// const schoolPerformance = [
//   {
//     name: "Oak Valley High School",
//     revenue: "$850K",
//     expenses: "$720K",
//     profit: "$130K",
//     students: 1234,
//   },
//   {
//     name: "Riverside Elementary",
//     revenue: "$520K",
//     expenses: "$480K",
//     profit: "$40K",
//     students: 456,
//   },
//   {
//     name: "Mountain View Middle",
//     revenue: "$680K",
//     expenses: "$650K",
//     profit: "$30K",
//     students: 678,
//   },
//   {
//     name: "Sunset Academy",
//     revenue: "$750K",
//     expenses: "$650K",
//     profit: "$60K",
//     students: 890,
//   },
// ]

// export function FinanceManagement() {
//   const [selectedPeriod, setSelectedPeriod] = useState("this-month")

//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(amount)
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-white">Finance Management</h1>
//           <p className="text-gray-400 mt-2">Monitor financial performance across all schools</p>
//         </div>
//         <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
//           <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
//             <SelectValue />
//           </SelectTrigger>
//           <SelectContent className="bg-gray-800 border-gray-700">
//             <SelectItem value="this-month">This Month</SelectItem>
//             <SelectItem value="last-month">Last Month</SelectItem>
//             <SelectItem value="this-quarter">This Quarter</SelectItem>
//             <SelectItem value="this-year">This Year</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Financial Overview */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {financialOverview.map((item, index) => {
//           const IconComponent = item.icon
//           const TrendIcon = item.trend === "up" ? TrendingUp : TrendingDown
//           return (
//             <Card key={index} className="bg-gray-800 border-gray-700">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-400 text-sm">{item.title}</p>
//                     <p className="text-2xl font-bold text-white mt-1">{item.value}</p>
//                     <div className="flex items-center gap-1 mt-2">
//                       <TrendIcon className={`w-4 h-4 ${item.trend === "up" ? "text-green-500" : "text-red-500"}`} />
//                       <span className={`text-sm ${item.trend === "up" ? "text-green-500" : "text-red-500"}`}>
//                         {item.change}
//                       </span>
//                     </div>
//                   </div>
//                   <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-white`}>
//                     <IconComponent className="w-6 h-6" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           )
//         })}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Recent Transactions */}
//         <Card className="lg:col-span-2 bg-gray-800 border-gray-700">
//           <CardHeader className="flex flex-row items-center justify-between">
//             <CardTitle className="text-white">Recent Transactions</CardTitle>
//             <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
//               View All
//             </Button>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             {recentTransactions.map((transaction) => (
//               <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
//                 <div className="flex items-center gap-4">
//                   <div
//                     className={`w-10 h-10 rounded-lg flex items-center justify-center ${
//                       transaction.type === "income" ? "bg-green-600" : "bg-red-600"
//                     }`}
//                   >
//                     {transaction.type === "income" ? "+" : "-"}
//                   </div>
//                   <div>
//                     <p className="text-white font-medium">{transaction.description}</p>
//                     <p className="text-gray-400 text-sm">
//                       {transaction.school} • {transaction.date}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className={`font-semibold ${transaction.type === "income" ? "text-green-400" : "text-red-400"}`}>
//                     {transaction.amount}
//                   </p>
//                   <Badge
//                     variant={transaction.status === "completed" ? "default" : "secondary"}
//                     className={transaction.status === "completed" ? "bg-green-600" : "bg-orange-600"}
//                   >
//                     {transaction.status}
//                   </Badge>
//                 </div>
//               </div>
//             ))}
//           </CardContent>
//         </Card>

//         {/* Quick Actions */}
//         <Card className="bg-gray-800 border-gray-700">
//           <CardHeader>
//             <CardTitle className="text-white">Quick Actions</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-3">
//             <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start">
//               <FileText className="w-4 h-4 mr-2" />
//               Generate Report
//             </Button>
//             <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
//               <Plus className="w-4 h-4 mr-2" />
//               Record Payment
//             </Button>
//             <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white justify-start">
//               <Calendar className="w-4 h-4 mr-2" />
//               Budget Planning
//             </Button>
//             <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white justify-start">
//               <Download className="w-4 h-4 mr-2" />
//               Export Data
//             </Button>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Budget Overview */}
//       <Card className="bg-gray-800 border-gray-700">
//         <CardHeader>
//           <CardTitle className="text-white">Budget Overview</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {budgetCategories.map((category, index) => (
//             <div key={index} className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <span className="text-white font-medium">{category.category}</span>
//                 <span className="text-gray-400 text-sm">
//                   {formatCurrency(category.spent)} / {formatCurrency(category.budget)}
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Progress value={category.percentage} className="flex-1" />
//                 <span className="text-white text-sm font-medium w-12">{category.percentage}%</span>
//               </div>
//             </div>
//           ))}
//         </CardContent>
//       </Card>

//       {/* School Financial Performance */}
//       <Card className="bg-gray-800 border-gray-700">
//         <CardHeader>
//           <CardTitle className="text-white">School Financial Performance</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {schoolPerformance.map((school, index) => (
//               <div key={index} className="p-4 bg-gray-700 rounded-lg">
//                 <h4 className="text-white font-medium mb-3">{school.name}</h4>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Revenue:</span>
//                     <span className="text-green-400">{school.revenue}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Expenses:</span>
//                     <span className="text-red-400">{school.expenses}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Profit:</span>
//                     <span className="text-white font-medium">{school.profit}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Students:</span>
//                     <span className="text-gray-300">{school.students}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }