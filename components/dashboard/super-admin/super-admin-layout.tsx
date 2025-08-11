"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  Search,
  Bell,
  MessageSquare,
  Settings,
  ChevronLeft,
  LayoutDashboard,
  GraduationCap,
  Users,
  Shield,
  BookOpen,
  DollarSign,
  MessageCircle,
  BarChart3,
  LogOut,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"
import { Input } from "@/components/ui/parent/input"
// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/super-admin", badge: null },
  { icon: GraduationCap, label: "Schools", href: "/dashboard/super-admin/schools", badge: "24" },
  { icon: Users, label: "Users", href: "/dashboard/super-admin/users", badge: "1847" },
  { icon: Shield, label: "Roles", href: "/dashboard/super-admin/roles", badge: "12" },
  { icon: BookOpen, label: "Courses", href: "/dashboard/super-admin/courses", badge: "342" },
  { icon: DollarSign, label: "Finance", href: "/dashboard/super-admin/finance", badge: null },
  { icon: MessageCircle, label: "Communication", href: "/dashboard/super-admin/communication", badge: "5" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/super-admin/reports", badge: null },
  { icon: Settings, label: "System Settings", href: "/dashboard/super-admin/settings", badge: null },
]

interface SuperAdminLayoutProps {
  children: React.ReactNode
}

export function SuperAdminLayout({ children }: SuperAdminLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  return (
    <div className="flex h-screen bg-slate-900">
      {/* Sidebar */}
      <div
        className={`${sidebarCollapsed ? "w-16" : "w-64"} bg-slate-800 border-r border-slate-700 flex flex-col transition-all duration-300`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            {!sidebarCollapsed && <span className="text-xl font-bold text-white">EduAdmin</span>}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => handleNavigation(item.href)}
                className={`w-full justify-start transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                } ${sidebarCollapsed ? "px-2" : "px-3"}`}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && (
                  <>
                    <span className="ml-3">{item.label}</span>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className={`ml-auto ${isActive ? "bg-blue-500 text-white" : "bg-slate-600 text-slate-200"}`}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </Button>
            )
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-blue-600 text-white">AJ</AvatarFallback>
            </Avatar>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Alex Johnson</p>
                <p className="text-xs text-slate-400 truncate">Super Administrator</p>
              </div>
            )}
          </div>
          {!sidebarCollapsed && (
            <Button
              variant="ghost"
              className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-slate-700 mt-2"
            >
              <LogOut className="w-4 h-4" />
              <span className="ml-3">Logout</span>
            </Button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="text-slate-400 hover:text-white"
              >
                <ChevronLeft className={`w-4 h-4 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`} />
              </Button>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search schools, users, courses..."
                  className="pl-10 w-80 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative text-slate-400 hover:text-white">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-600 text-white text-xs flex items-center justify-center">
                  3
                </Badge>
              </Button>

              {/* Messages */}
              <Button variant="ghost" size="sm" className="relative text-slate-400 hover:text-white">
                <MessageSquare className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-green-600 text-white text-xs flex items-center justify-center">
                  2
                </Badge>
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-slate-700">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback className="bg-blue-600 text-white">AJ</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:block">Alex Johnson</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700">
                  <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-700" />
                  <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-700" />
                  <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-slate-700">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Toggle */}
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-slate-900">{children}</main>
      </div>
    </div>
  )
}




// "use client"

// import type React from "react"
// import { useState } from "react"
// import {
//   Search,
//   Bell,
//   MessageSquare,
//   Settings,
//   ChevronLeft,
//   LayoutDashboard,
//   GraduationCap,
//   Users,
//   Shield,
//   BookOpen,
//   DollarSign,
//   MessageCircle,
//   BarChart3,
//   LogOut,
//   User,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"
// import { Input } from "@/components/ui/parent/input"
// // import { Input } from "@/components/ui/input"
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// const navigationItems = [
//   { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/super-admin", badge: null },
//   { icon: GraduationCap, label: "Schools", href: "/dashboard/super-admin/schools", badge: "24" },
//   { icon: Users, label: "Users", href: "/dashboard/super-admin/users", badge: "1847" },
//   { icon: Shield, label: "Roles", href: "/dashboard/super-admin/roles", badge: "12" },
//   { icon: BookOpen, label: "Courses", href: "/dashboard/super-admin/courses", badge: "342" },
//   { icon: DollarSign, label: "Finance", href: "/dashboard/super-admin/finance", badge: null },
//   { icon: MessageCircle, label: "Communication", href: "/dashboard/super-admin/communication", badge: "5" },
//   { icon: BarChart3, label: "Reports", href: "/dashboard/super-admin/reports", badge: null },
//   { icon: Settings, label: "System Settings", href: "/dashboard/super-admin/settings", badge: null },
// ]

// interface SuperAdminLayoutProps {
//   children: React.ReactNode
// }

// export function SuperAdminLayout({ children }: SuperAdminLayoutProps) {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

//   return (
//     <div className="flex h-screen bg-slate-900">
//       {/* Sidebar */}
//       <div
//         className={`${sidebarCollapsed ? "w-16" : "w-64"} bg-slate-800 border-r border-slate-700 flex flex-col transition-all duration-300`}
//       >
//         {/* Logo */}
//         <div className="p-4 border-b border-slate-700">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//               <GraduationCap className="w-5 h-5 text-white" />
//             </div>
//             {!sidebarCollapsed && <span className="text-xl font-bold text-white">EduAdmin</span>}
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-4 space-y-2">
//           {navigationItems.map((item) => (
//             <Button
//               key={item.href}
//               variant="ghost"
//               className={`w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 ${sidebarCollapsed ? "px-2" : "px-3"}`}
//             >
//               <item.icon className="w-5 h-5" />
//               {!sidebarCollapsed && (
//                 <>
//                   <span className="ml-3">{item.label}</span>
//                   {item.badge && (
//                     <Badge variant="secondary" className="ml-auto bg-slate-600 text-slate-200">
//                       {item.badge}
//                     </Badge>
//                   )}
//                 </>
//               )}
//             </Button>
//           ))}
//         </nav>

//         {/* User Profile */}
//         <div className="p-4 border-t border-slate-700">
//           <div className="flex items-center gap-3">
//             <Avatar className="w-8 h-8">
//               <AvatarImage src="/placeholder.svg?height=32&width=32" />
//               <AvatarFallback className="bg-blue-600 text-white">AJ</AvatarFallback>
//             </Avatar>
//             {!sidebarCollapsed && (
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-medium text-white truncate">Alex Johnson</p>
//                 <p className="text-xs text-slate-400 truncate">Super Administrator</p>
//               </div>
//             )}
//           </div>
//           {!sidebarCollapsed && (
//             <Button
//               variant="ghost"
//               className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-slate-700 mt-2"
//             >
//               <LogOut className="w-4 h-4" />
//               <span className="ml-3">Logout</span>
//             </Button>
//           )}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-slate-800 border-b border-slate-700 p-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//                 className="text-slate-400 hover:text-white"
//               >
//                 <ChevronLeft className={`w-4 h-4 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`} />
//               </Button>

//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//                 <Input
//                   placeholder="Search schools, users, courses..."
//                   className="pl-10 w-80 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               {/* Notifications */}
//               <Button variant="ghost" size="sm" className="relative text-slate-400 hover:text-white">
//                 <Bell className="w-5 h-5" />
//                 <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-600 text-white text-xs flex items-center justify-center">
//                   3
//                 </Badge>
//               </Button>

//               {/* Messages */}
//               <Button variant="ghost" size="sm" className="relative text-slate-400 hover:text-white">
//                 <MessageSquare className="w-5 h-5" />
//                 <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-green-600 text-white text-xs flex items-center justify-center">
//                   2
//                 </Badge>
//               </Button>

//               {/* User Menu */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-slate-700">
//                     <Avatar className="w-8 h-8">
//                       <AvatarImage src="/placeholder.svg?height=32&width=32" />
//                       <AvatarFallback className="bg-blue-600 text-white">AJ</AvatarFallback>
//                     </Avatar>
//                     <span className="hidden md:block">Alex Johnson</span>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700">
//                   <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
//                   <DropdownMenuSeparator className="bg-slate-700" />
//                   <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700">
//                     <User className="mr-2 h-4 w-4" />
//                     Profile
//                   </DropdownMenuItem>
//                   <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700">
//                     <Settings className="mr-2 h-4 w-4" />
//                     Settings
//                   </DropdownMenuItem>
//                   <DropdownMenuSeparator className="bg-slate-700" />
//                   <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-slate-700">
//                     <LogOut className="mr-2 h-4 w-4" />
//                     Logout
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>

//               {/* Theme Toggle */}
//               <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
//                 <Settings className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 overflow-auto p-6 bg-slate-900">{children}</main>
//       </div>
//     </div>
//   )
// }