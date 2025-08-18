"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  RefreshCw,
  AlertTriangle,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"

const navigationItems = [
  { name: "Dashboard", href: "/dashboard/librarian", icon: Home },
  { name: "Book Inventory", href: "/dashboard/librarian/book-inventory", icon: BookOpen },
  { name: "Issue/Return", href: "/dashboard/librarian/issue-return", icon: RefreshCw },
  { name: "Overdue List", href: "/dashboard/librarian/overdue-list", icon: AlertTriangle, badge: "12" },
  { name: "Library Events", href: "/dashboard/librarian/library-events", icon: Calendar },
  { name: "Communication", href: "/dashboard/librarian/communication", icon: MessageSquare },
  { name: "Reports", href: "/dashboard/librarian/reports", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/librarian/settings", icon: Settings },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-40 h-full w-64 bg-slate-800 border-r border-slate-700 transform transition-transform duration-200 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-slate-700">
            <h1 className="text-xl font-bold text-white">TrackSkool</h1>
            <p className="text-sm text-slate-400">Librarian Portal</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <Badge variant="destructive" className="bg-red-600">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-slate-700">
            <Button
              variant="ghost"
              className="w-full justify-start text-slate-300 hover:bg-slate-700 hover:text-white"
              onClick={() => {
                localStorage.removeItem("userType")
                localStorage.removeItem("schoolId")
                localStorage.removeItem("userId")
                window.location.href = "/auth/dashboard-login"
              }}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}






// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"
// import {
//   LayoutDashboard,
//   BookOpen,
//   RefreshCw,
//   Clock,
//   Calendar,
//   MessageSquare,
//   FileText,
//   Settings,
//   LogOut,
//   Menu,
//   X,
// } from "lucide-react"

// const navigation = [
//   { name: "Dashboard", href: "/", icon: LayoutDashboard },
//   { name: "Book Inventory", href: "/book-inventory", icon: BookOpen },
//   { name: "Issue/Return", href: "/issue-return", icon: RefreshCw },
//   { name: "Overdue List", href: "/overdue-list", icon: Clock, badge: "12" },
//   { name: "Library Events", href: "/library-events", icon: Calendar },
//   { name: "Communication", href: "/communication", icon: MessageSquare },
//   { name: "Reports", href: "/reports", icon: FileText },
//   { name: "Settings", href: "/settings", icon: Settings },
// ]

// export function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()

//   return (
//     <>
//       {/* Mobile menu button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-slate-800 text-white"
//       >
//         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={cn(
//           "fixed inset-y-0 left-0 z-40 w-64 sidebar-gradient border-r border-slate-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
//           isOpen ? "translate-x-0" : "-translate-x-full",
//         )}
//       >
//         <div className="flex flex-col h-full">
//           {/* Logo */}
//           <div className="flex items-center px-6 py-4 border-b border-slate-700">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//                 <BookOpen className="h-5 w-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-blue-400">EduLibrary</span>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="flex-1 px-4 py-6 space-y-2">
//             {navigation.map((item) => {
//               const isActive = pathname === item.href
//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={cn(
//                     "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
//                     isActive ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white",
//                   )}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <item.icon className="mr-3 h-5 w-5" />
//                   {item.name}
//                   {item.badge && (
//                     <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>
//                   )}
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* Logout */}
//           <div className="px-4 py-4 border-t border-slate-700">
//             <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-400 hover:bg-slate-700 rounded-lg transition-colors">
//               <LogOut className="mr-3 h-5 w-5" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)} />
//       )}
//     </>
//   )
// }
