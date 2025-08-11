"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Home, User, Calendar, FileText, MessageSquare, Settings, LogOut } from "lucide-react"

export function ParentSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="ri-graduation-cap-line text-white text-lg"></i>
          </div>
          <span className="font-bold text-white">EduHub</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <User className="w-4 h-4" />
              <span>Child Progress</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Calendar className="w-4 h-4" />
              <span>Attendance</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <FileText className="w-4 h-4" />
              <span>Assignments</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <MessageSquare className="w-4 h-4" />
              <span>Communication</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}





// "use client"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarFooter,
// } from "@/components/ui/sidebar"
// import {
//   LayoutDashboard,
//   TrendingUp,
//   Calendar,
//   ClipboardList,
//   BarChart3,
//   CreditCard,
//   MessageSquare,
//   CalendarDays,
//   Settings,
//   LogOut,
//   GraduationCap,
// } from "lucide-react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"

// const menuItems = [
//   {
//     title: "Dashboard",
//     url: "/dashboard/parent",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Child Progress",
//     url: "/dashboard/parent/child-progress",
//     icon: TrendingUp,
//   },
//   {
//     title: "Attendance",
//     url: "/dashboard/parent/attendance",
//     icon: Calendar,
//   },
//   {
//     title: "Assignments",
//     url: "/dashboard/parent/assignments",
//     icon: ClipboardList,
//   },
//   {
//     title: "Results",
//     url: "/dashboard/parent/results",
//     icon: BarChart3,
//   },
//   {
//     title: "Fees & Payments",
//     url: "/dashboard/parent/fees-payments",
//     icon: CreditCard,
//   },
//   {
//     title: "Communication",
//     url: "/dashboard/parent/communication",
//     icon: MessageSquare,
//   },
//   {
//     title: "Events",
//     url: "/dashboard/parent/events",
//     icon: CalendarDays,
//   },
//   {
//     title: "Settings",
//     url: "/dashboard/parent/settings",
//     icon: Settings,
//   },
// ]

// export function ParentSidebar() {
//   const pathname = usePathname()

//   return (
//     <Sidebar className="border-r border-slate-800">
//       <SidebarHeader className="p-4">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//             <GraduationCap className="w-5 h-5 text-white" />
//           </div>
//           <span className="text-xl font-bold text-white">EduManage</span>
//         </div>
//       </SidebarHeader>
//       <SidebarContent className="px-2">
//         <SidebarMenu>
//           {menuItems.map((item) => (
//             <SidebarMenuItem key={item.title}>
//               <SidebarMenuButton
//                 asChild
//                 isActive={pathname === item.url}
//                 className={cn(
//                   "w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800",
//                   pathname === item.url && "bg-blue-600 text-white hover:bg-blue-700",
//                 )}
//               >
//                 <Link href={item.url}>
//                   <item.icon className="w-5 h-5" />
//                   <span>{item.title}</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarContent>
//       <SidebarFooter className="p-4">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton className="text-slate-300 hover:text-white hover:bg-slate-800">
//               <LogOut className="w-5 h-5" />
//               <span>Logout</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//         <div className="mt-4 text-xs text-slate-500">
//           <p>EduManage v2.0</p>
//           <p>© 2024 School Management</p>
//         </div>
//       </SidebarFooter>
//     </Sidebar>
//   )
// }
