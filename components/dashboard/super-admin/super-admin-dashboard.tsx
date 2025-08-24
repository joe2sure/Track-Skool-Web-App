"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/Button"
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  AlertTriangle,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  FileText,
} from "lucide-react"

export function SuperAdminDashboard() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-lg p-4 md:p-6 text-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Users className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold">Welcome back, Alex Johnson</h1>
            <p className="text-blue-100 text-sm md:text-base">Super Administrator</p>
            <p className="text-xs md:text-sm text-blue-100 mt-1">
              Manage your educational ecosystem with comprehensive oversight across all schools, users, and system
              operations.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-4 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
            <span>All Systems Operational</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 md:w-4 md:h-4" />
            <span>Last login: Today at 8:30 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-3 h-3 md:w-4 md:h-4" />
            <span>24 Active Schools</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-slate-200">Total Schools</CardTitle>
            <LayoutDashboard className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-lg md:text-2xl font-bold text-white">24</div>
            <p className="text-xs text-green-500">+3 this month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-slate-200">Active Users</CardTitle>
            <Users className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-lg md:text-2xl font-bold text-white">1,847</div>
            <p className="text-xs text-green-500">+127 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-slate-200">Pending Requests</CardTitle>
            <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-lg md:text-2xl font-bold text-white">23</div>
            <p className="text-xs text-orange-500">Since yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-slate-200">System Logs</CardTitle>
            <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-lg md:text-2xl font-bold text-white">156</div>
            <p className="text-xs text-purple-500">12 critical</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
        {/* Multi-School Overview */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white text-sm md:text-base">Multi-School Overview</CardTitle>
              <CardDescription className="text-slate-400 text-xs md:text-sm">All Schools</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-700 rounded-lg p-4 text-center">
              <LayoutDashboard className="w-8 h-8 md:w-12 md:h-12 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Interactive School Location Map</p>
              <p className="text-xs text-slate-500">Integrates with Google Maps API</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm md:text-base truncate">Riverside Elementary</p>
                    <p className="text-xs text-slate-400">District 1</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-white text-sm">234 users</p>
                  <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                    active
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm md:text-base truncate">Oak Valley High</p>
                    <p className="text-xs text-slate-400">District 2</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-white text-sm">567 users</p>
                  <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                    active
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm md:text-base truncate">Mountain View Middle</p>
                    <p className="text-xs text-slate-400">District 1</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-white text-sm">345 users</p>
                  <Badge variant="secondary" className="bg-orange-600 text-white text-xs">
                    maintenance
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Announcements */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-sm md:text-base">System Announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-900/20 border border-red-800 rounded-lg">
                <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-red-400 font-medium text-sm">System Maintenance Scheduled</p>
                  <p className="text-xs md:text-sm text-slate-300">Planned maintenance on Sunday 2-4 AM EST</p>
                  <p className="text-xs text-slate-500">2024-01-15</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-900/20 border border-blue-800 rounded-lg">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-blue-400 font-medium text-sm">New Feature Release</p>
                  <p className="text-xs md:text-sm text-slate-300">Enhanced reporting dashboard now available</p>
                  <p className="text-xs text-slate-500">2024-01-14</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-900/20 border border-orange-800 rounded-lg">
                <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-orange-400 font-medium text-sm">Security Update</p>
                  <p className="text-xs md:text-sm text-slate-300">All users must update passwords by month end</p>
                  <p className="text-xs text-slate-500">2024-01-13</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-sm md:text-base">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Button className="h-16 md:h-20 flex flex-col gap-1 md:gap-2 bg-blue-600 hover:bg-blue-700 text-xs md:text-sm">
              <GraduationCap className="w-4 h-4 md:w-6 md:h-6" />
              <span>Add School</span>
            </Button>
            <Button className="h-16 md:h-20 flex flex-col gap-1 md:gap-2 bg-green-600 hover:bg-green-700 text-xs md:text-sm">
              <Users className="w-4 h-4 md:w-6 md:h-6" />
              <span>Manage Roles</span>
            </Button>
            <Button className="h-16 md:h-20 flex flex-col gap-1 md:gap-2 bg-purple-600 hover:bg-purple-700 text-xs md:text-sm">
              <BarChart3 className="w-4 h-4 md:w-6 md:h-6" />
              <span>Generate Reports</span>
            </Button>
            <Button className="h-16 md:h-20 flex flex-col gap-1 md:gap-2 bg-orange-600 hover:bg-orange-700 text-xs md:text-sm">
              <FileText className="w-4 h-4 md:w-6 md:h-6" />
              <span>Review Logs</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}






// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/Button"
// import {
//   LayoutDashboard,
//   GraduationCap,
//   Users,
//   AlertTriangle,
//   TrendingUp,
//   Clock,
//   CheckCircle,
//   AlertCircle,
//   BarChart3,
//   FileText,
// } from "lucide-react"

// export function SuperAdminDashboard() {
//   return (
//     <div className="space-y-6">
//       {/* Welcome Banner */}
//       <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-lg p-6 text-white">
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
//             <Users className="w-6 h-6" />
//           </div>
//           <div>
//             <h1 className="text-2xl font-bold">Welcome back, Alex Johnson</h1>
//             <p className="text-blue-100">Super Administrator</p>
//             <p className="text-sm text-blue-100 mt-1">
//               Manage your educational ecosystem with comprehensive oversight across all schools, users, and system
//               operations.
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-6 mt-4 text-sm">
//           <div className="flex items-center gap-2">
//             <CheckCircle className="w-4 h-4" />
//             <span>All Systems Operational</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock className="w-4 h-4" />
//             <span>Last login: Today at 8:30 AM</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <GraduationCap className="w-4 h-4" />
//             <span>24 Active Schools</span>
//           </div>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <Card className="bg-slate-800 border-slate-700">
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium text-slate-200">Total Schools</CardTitle>
//             <LayoutDashboard className="h-4 w-4 text-blue-500" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold text-white">24</div>
//             <p className="text-xs text-green-500">+3 this month</p>
//           </CardContent>
//         </Card>

//         <Card className="bg-slate-800 border-slate-700">
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium text-slate-200">Active Users</CardTitle>
//             <Users className="h-4 w-4 text-green-500" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold text-white">1,847</div>
//             <p className="text-xs text-green-500">+127 this week</p>
//           </CardContent>
//         </Card>

//         <Card className="bg-slate-800 border-slate-700">
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium text-slate-200">Pending Requests</CardTitle>
//             <AlertTriangle className="h-4 w-4 text-orange-500" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold text-white">23</div>
//             <p className="text-xs text-orange-500">Since yesterday</p>
//           </CardContent>
//         </Card>

//         <Card className="bg-slate-800 border-slate-700">
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium text-slate-200">System Logs</CardTitle>
//             <TrendingUp className="h-4 w-4 text-purple-500" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold text-white">156</div>
//             <p className="text-xs text-purple-500">12 critical</p>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Multi-School Overview */}
//         <Card className="bg-slate-800 border-slate-700">
//           <CardHeader className="flex flex-row items-center justify-between">
//             <div>
//               <CardTitle className="text-white">Multi-School Overview</CardTitle>
//               <CardDescription className="text-slate-400">All Schools</CardDescription>
//             </div>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="bg-slate-700 rounded-lg p-4 text-center">
//               <LayoutDashboard className="w-12 h-12 text-slate-400 mx-auto mb-2" />
//               <p className="text-slate-400">Interactive School Location Map</p>
//               <p className="text-xs text-slate-500">Integrates with Google Maps API</p>
//             </div>

//             <div className="space-y-3">
//               <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
//                     <GraduationCap className="w-4 h-4 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-white font-medium">Riverside Elementary</p>
//                     <p className="text-xs text-slate-400">District 1</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-white">234 users</p>
//                   <Badge variant="secondary" className="bg-green-600 text-white">
//                     active
//                   </Badge>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
//                     <GraduationCap className="w-4 h-4 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-white font-medium">Oak Valley High</p>
//                     <p className="text-xs text-slate-400">District 2</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-white">567 users</p>
//                   <Badge variant="secondary" className="bg-green-600 text-white">
//                     active
//                   </Badge>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
//                     <GraduationCap className="w-4 h-4 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-white font-medium">Mountain View Middle</p>
//                     <p className="text-xs text-slate-400">District 1</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-white">345 users</p>
//                   <Badge variant="secondary" className="bg-orange-600 text-white">
//                     maintenance
//                   </Badge>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* System Announcements */}
//         <Card className="bg-slate-800 border-slate-700">
//           <CardHeader>
//             <CardTitle className="text-white">System Announcements</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="space-y-3">
//               <div className="flex items-start gap-3 p-3 bg-red-900/20 border border-red-800 rounded-lg">
//                 <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
//                 <div>
//                   <p className="text-red-400 font-medium">System Maintenance Scheduled</p>
//                   <p className="text-sm text-slate-300">Planned maintenance on Sunday 2-4 AM EST</p>
//                   <p className="text-xs text-slate-500">2024-01-15</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-3 bg-blue-900/20 border border-blue-800 rounded-lg">
//                 <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
//                 <div>
//                   <p className="text-blue-400 font-medium">New Feature Release</p>
//                   <p className="text-sm text-slate-300">Enhanced reporting dashboard now available</p>
//                   <p className="text-xs text-slate-500">2024-01-14</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-3 bg-orange-900/20 border border-orange-800 rounded-lg">
//                 <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5" />
//                 <div>
//                   <p className="text-orange-400 font-medium">Security Update</p>
//                   <p className="text-sm text-slate-300">All users must update passwords by month end</p>
//                   <p className="text-xs text-slate-500">2024-01-13</p>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Quick Actions */}
//       <Card className="bg-slate-800 border-slate-700">
//         <CardHeader>
//           <CardTitle className="text-white">Quick Actions</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <Button className="h-20 flex flex-col gap-2 bg-blue-600 hover:bg-blue-700">
//               <GraduationCap className="w-6 h-6" />
//               <span>Add School</span>
//             </Button>
//             <Button className="h-20 flex flex-col gap-2 bg-green-600 hover:bg-green-700">
//               <Users className="w-6 h-6" />
//               <span>Manage Roles</span>
//             </Button>
//             <Button className="h-20 flex flex-col gap-2 bg-purple-600 hover:bg-purple-700">
//               <BarChart3 className="w-6 h-6" />
//               <span>Generate Reports</span>
//             </Button>
//             <Button className="h-20 flex flex-col gap-2 bg-orange-600 hover:bg-orange-700">
//               <FileText className="w-6 h-6" />
//               <span>Review Logs</span>
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
