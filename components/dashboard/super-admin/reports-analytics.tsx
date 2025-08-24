"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Calendar,
  BarChart3,
  Settings,
  Plus,
  Download,
  MoreHorizontal,
  Users,
  DollarSign,
  GraduationCap,
  Shield,
  TrendingUp,
  Activity,
} from "lucide-react"

const statsData = [
  {
    title: "Total Reports",
    value: "24",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    title: "Generated This Month",
    value: "18",
    icon: BarChart3,
    color: "bg-green-500",
  },
  {
    title: "Scheduled Reports",
    value: "12",
    icon: Calendar,
    color: "bg-purple-500",
  },
  {
    title: "Custom Reports",
    value: "6",
    icon: Settings,
    color: "bg-orange-500",
  },
]

const categories = [
  { name: "All Reports", count: 24, active: true },
  { name: "Academic", count: 0, active: false },
  { name: "Financial", count: 0, active: false },
  { name: "Operational", count: 0, active: false },
  { name: "Compliance", count: 0, active: false },
  { name: "Custom", count: 0, active: false },
]

const availableReports = [
  {
    id: 1,
    title: "Student Enrollment Report",
    description: "Comprehensive enrollment statistics across all schools",
    type: "Standard",
    frequency: "Monthly",
    lastGenerated: "2024-01-15",
    format: "PDF, Excel",
    status: "ready",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Financial Performance Dashboard",
    description: "Revenue, expenses, and budget analysis by school",
    type: "Interactive",
    frequency: "Weekly",
    lastGenerated: "2024-01-14",
    format: "Dashboard",
    status: "generating",
    icon: DollarSign,
    color: "bg-green-600",
  },
  {
    id: 3,
    title: "Teacher Performance Review",
    description: "Staff evaluation metrics and development tracking",
    type: "Detailed",
    frequency: "Quarterly",
    lastGenerated: "2024-01-01",
    format: "PDF",
    status: "ready",
    icon: GraduationCap,
    color: "bg-purple-600",
  },
  {
    id: 4,
    title: "Compliance Audit Report",
    description: "Regulatory compliance status and requirements",
    type: "Standard",
    frequency: "Annually",
    lastGenerated: "2023-12-31",
    format: "PDF, Word",
    status: "pending",
    icon: Shield,
    color: "bg-orange-600",
  },
  {
    id: 5,
    title: "Student Academic Progress",
    description: "Grade performance and learning outcomes analysis",
    type: "Detailed",
    frequency: "Monthly",
    lastGenerated: "2024-01-12",
    format: "Excel, PDF",
    status: "ready",
    icon: TrendingUp,
    color: "bg-blue-600",
  },
  {
    id: 6,
    title: "System Usage Analytics",
    description: "Platform usage statistics and user engagement",
    type: "Interactive",
    frequency: "Daily",
    lastGenerated: "2024-01-15",
    format: "Dashboard",
    status: "ready",
    icon: Activity,
    color: "bg-green-600",
  },
]

const recentDownloads = [
  {
    name: "Monthly Enrollment Summary",
    date: "2024-01-15",
    downloads: 45,
    size: "2.4 MB",
  },
  {
    name: "Budget Variance Analysis",
    date: "2024-01-14",
    downloads: 23,
    size: "1.8 MB",
  },
  {
    name: "Staff Directory Update",
    date: "2024-01-13",
    downloads: 67,
    size: "890 KB",
  },
  {
    name: "Safety Incident Report",
    date: "2024-01-12",
    downloads: 15,
    size: "650 KB",
  },
]

export function ReportsAnalytics() {
  const [selectedCategory, setSelectedCategory] = useState("All Reports")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready":
        return "bg-green-600"
      case "generating":
        return "bg-orange-600"
      case "pending":
        return "bg-gray-600"
      default:
        return "bg-gray-600"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "ready":
        return "ready"
      case "generating":
        return "generating"
      case "pending":
        return "pending"
      default:
        return "unknown"
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-0">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Reports & Analytics</h1>
        <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
          Generate and manage comprehensive system reports
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0">
                  <div className="text-center sm:text-left">
                    <p className="text-gray-400 text-xs sm:text-sm">{stat.title}</p>
                    <p className="text-lg sm:text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg ${stat.color} flex items-center justify-center text-white`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Categories */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white text-base sm:text-lg">Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 sm:space-y-2 p-4 sm:p-6 pt-0">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category.name ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full justify-between text-xs sm:text-sm ${
                  selectedCategory === category.name
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
                size="sm"
              >
                <span>{category.name}</span>
                <span>{category.count}</span>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Available Reports */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-lg sm:text-xl font-semibold text-white">Available Reports</h2>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Create Custom Report
            </Button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {availableReports.map((report) => {
              const IconComponent = report.icon
              return (
                <Card key={report.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start gap-3 sm:gap-4 flex-1">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${report.color} flex items-center justify-center text-white flex-shrink-0`}
                        >
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                            <h3 className="text-base sm:text-lg font-semibold text-white">{report.title}</h3>
                            <Badge className={`${getStatusColor(report.status)} text-xs w-fit`}>
                              {getStatusText(report.status)}
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm mb-3">{report.description}</p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                            <div>
                              <span className="text-gray-500">Type:</span> {report.type}
                            </div>
                            <div>
                              <span className="text-gray-500">Frequency:</span> {report.frequency}
                            </div>
                            <div>
                              <span className="text-gray-500">Last Generated:</span> {report.lastGenerated}
                            </div>
                            <div>
                              <span className="text-gray-500">Format:</span> {report.format}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 justify-end sm:justify-start">
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm"
                          size="sm"
                          disabled={report.status === "generating"}
                        >
                          <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          Generate
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                          <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                          <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Recent Downloads */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-white text-base sm:text-lg">Recent Downloads</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {recentDownloads.map((download, index) => (
              <div key={index} className="p-3 sm:p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                  <h4 className="text-white font-medium text-xs sm:text-sm truncate">{download.name}</h4>
                </div>
                <div className="space-y-1 text-xs text-gray-400">
                  <div>{download.date}</div>
                  <div>{download.downloads} downloads</div>
                  <div>{download.size}</div>
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-2 text-blue-400 hover:text-blue-300 text-xs">
                  <Download className="w-3 h-3 mr-1" />
                  Download
                </Button>
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
// import { Badge } from "@/components/ui/badge"
// import {
//   FileText,
//   Calendar,
//   BarChart3,
//   Settings,
//   Plus,
//   Download,
//   MoreHorizontal,
//   Users,
//   DollarSign,
//   GraduationCap,
//   Shield,
//   TrendingUp,
//   Activity,
// } from "lucide-react"

// const statsData = [
//   {
//     title: "Total Reports",
//     value: "24",
//     icon: FileText,
//     color: "bg-blue-500",
//   },
//   {
//     title: "Generated This Month",
//     value: "18",
//     icon: BarChart3,
//     color: "bg-green-500",
//   },
//   {
//     title: "Scheduled Reports",
//     value: "12",
//     icon: Calendar,
//     color: "bg-purple-500",
//   },
//   {
//     title: "Custom Reports",
//     value: "6",
//     icon: Settings,
//     color: "bg-orange-500",
//   },
// ]

// const categories = [
//   { name: "All Reports", count: 24, active: true },
//   { name: "Academic", count: 0, active: false },
//   { name: "Financial", count: 0, active: false },
//   { name: "Operational", count: 0, active: false },
//   { name: "Compliance", count: 0, active: false },
//   { name: "Custom", count: 0, active: false },
// ]

// const availableReports = [
//   {
//     id: 1,
//     title: "Student Enrollment Report",
//     description: "Comprehensive enrollment statistics across all schools",
//     type: "Standard",
//     frequency: "Monthly",
//     lastGenerated: "2024-01-15",
//     format: "PDF, Excel",
//     status: "ready",
//     icon: Users,
//     color: "bg-blue-600",
//   },
//   {
//     id: 2,
//     title: "Financial Performance Dashboard",
//     description: "Revenue, expenses, and budget analysis by school",
//     type: "Interactive",
//     frequency: "Weekly",
//     lastGenerated: "2024-01-14",
//     format: "Dashboard",
//     status: "generating",
//     icon: DollarSign,
//     color: "bg-green-600",
//   },
//   {
//     id: 3,
//     title: "Teacher Performance Review",
//     description: "Staff evaluation metrics and development tracking",
//     type: "Detailed",
//     frequency: "Quarterly",
//     lastGenerated: "2024-01-01",
//     format: "PDF",
//     status: "ready",
//     icon: GraduationCap,
//     color: "bg-purple-600",
//   },
//   {
//     id: 4,
//     title: "Compliance Audit Report",
//     description: "Regulatory compliance status and requirements",
//     type: "Standard",
//     frequency: "Annually",
//     lastGenerated: "2023-12-31",
//     format: "PDF, Word",
//     status: "pending",
//     icon: Shield,
//     color: "bg-orange-600",
//   },
//   {
//     id: 5,
//     title: "Student Academic Progress",
//     description: "Grade performance and learning outcomes analysis",
//     type: "Detailed",
//     frequency: "Monthly",
//     lastGenerated: "2024-01-12",
//     format: "Excel, PDF",
//     status: "ready",
//     icon: TrendingUp,
//     color: "bg-blue-600",
//   },
//   {
//     id: 6,
//     title: "System Usage Analytics",
//     description: "Platform usage statistics and user engagement",
//     type: "Interactive",
//     frequency: "Daily",
//     lastGenerated: "2024-01-15",
//     format: "Dashboard",
//     status: "ready",
//     icon: Activity,
//     color: "bg-green-600",
//   },
// ]

// const recentDownloads = [
//   {
//     name: "Monthly Enrollment Summary",
//     date: "2024-01-15",
//     downloads: 45,
//     size: "2.4 MB",
//   },
//   {
//     name: "Budget Variance Analysis",
//     date: "2024-01-14",
//     downloads: 23,
//     size: "1.8 MB",
//   },
//   {
//     name: "Staff Directory Update",
//     date: "2024-01-13",
//     downloads: 67,
//     size: "890 KB",
//   },
//   {
//     name: "Safety Incident Report",
//     date: "2024-01-12",
//     downloads: 15,
//     size: "650 KB",
//   },
// ]

// export function ReportsAnalytics() {
//   const [selectedCategory, setSelectedCategory] = useState("All Reports")

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "ready":
//         return "bg-green-600"
//       case "generating":
//         return "bg-orange-600"
//       case "pending":
//         return "bg-gray-600"
//       default:
//         return "bg-gray-600"
//     }
//   }

//   const getStatusText = (status: string) => {
//     switch (status) {
//       case "ready":
//         return "ready"
//       case "generating":
//         return "generating"
//       case "pending":
//         return "pending"
//       default:
//         return "unknown"
//     }
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-white">Reports & Analytics</h1>
//         <p className="text-gray-400 mt-2">Generate and manage comprehensive system reports</p>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {statsData.map((stat, index) => {
//           const IconComponent = stat.icon
//           return (
//             <Card key={index} className="bg-gray-800 border-gray-700">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-400 text-sm">{stat.title}</p>
//                     <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
//                   </div>
//                   <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-white`}>
//                     <IconComponent className="w-6 h-6" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           )
//         })}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* Categories */}
//         <Card className="bg-gray-800 border-gray-700">
//           <CardHeader>
//             <CardTitle className="text-white">Categories</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             {categories.map((category, index) => (
//               <Button
//                 key={index}
//                 variant={selectedCategory === category.name ? "default" : "ghost"}
//                 onClick={() => setSelectedCategory(category.name)}
//                 className={`w-full justify-between ${
//                   selectedCategory === category.name
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-400 hover:text-white hover:bg-gray-700"
//                 }`}
//               >
//                 <span>{category.name}</span>
//                 <span className="text-sm">{category.count}</span>
//               </Button>
//             ))}
//           </CardContent>
//         </Card>

//         {/* Available Reports */}
//         <div className="lg:col-span-3 space-y-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-semibold text-white">Available Reports</h2>
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//               <Plus className="w-4 h-4 mr-2" />
//               Create Custom Report
//             </Button>
//           </div>

//           <div className="space-y-4">
//             {availableReports.map((report) => {
//               const IconComponent = report.icon
//               return (
//                 <Card key={report.id} className="bg-gray-800 border-gray-700">
//                   <CardContent className="p-6">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-start gap-4 flex-1">
//                         <div
//                           className={`w-12 h-12 rounded-lg ${report.color} flex items-center justify-center text-white`}
//                         >
//                           <IconComponent className="w-6 h-6" />
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex items-center gap-3 mb-2">
//                             <h3 className="text-lg font-semibold text-white">{report.title}</h3>
//                             <Badge className={getStatusColor(report.status)}>{getStatusText(report.status)}</Badge>
//                           </div>
//                           <p className="text-gray-400 text-sm mb-3">{report.description}</p>
//                           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
//                             <div>
//                               <span className="text-gray-500">Type:</span> {report.type}
//                             </div>
//                             <div>
//                               <span className="text-gray-500">Frequency:</span> {report.frequency}
//                             </div>
//                             <div>
//                               <span className="text-gray-500">Last Generated:</span> {report.lastGenerated}
//                             </div>
//                             <div>
//                               <span className="text-gray-500">Format:</span> {report.format}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-2 ml-4">
//                         <Button
//                           className="bg-blue-600 hover:bg-blue-700 text-white"
//                           size="sm"
//                           disabled={report.status === "generating"}
//                         >
//                           <Download className="w-4 h-4 mr-1" />
//                           Generate
//                         </Button>
//                         <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//                           <Settings className="w-4 h-4" />
//                         </Button>
//                         <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//                           <MoreHorizontal className="w-4 h-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Recent Downloads */}
//       <Card className="bg-gray-800 border-gray-700">
//         <CardHeader>
//           <CardTitle className="text-white">Recent Downloads</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {recentDownloads.map((download, index) => (
//               <div key={index} className="p-4 bg-gray-700 rounded-lg">
//                 <div className="flex items-center gap-3 mb-2">
//                   <FileText className="w-5 h-5 text-blue-400" />
//                   <h4 className="text-white font-medium text-sm">{download.name}</h4>
//                 </div>
//                 <div className="space-y-1 text-xs text-gray-400">
//                   <div>{download.date}</div>
//                   <div>{download.downloads} downloads</div>
//                   <div>{download.size}</div>
//                 </div>
//                 <Button variant="ghost" size="sm" className="w-full mt-2 text-blue-400 hover:text-blue-300">
//                   <Download className="w-3 h-3 mr-1" />
//                   Download
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }