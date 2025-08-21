"use client"

import { useRouter, usePathname } from "next/navigation"
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Calendar,
  BookOpen,
  MessageSquare,
  CreditCard,
  Trophy,
  HelpCircle,
  Settings,
  LogOut,
  X,
} from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard/student",
  },
  {
    title: "Assignments",
    icon: FileText,
    href: "/dashboard/student/assignments",
  },
  {
    title: "Results",
    icon: BarChart3,
    href: "/dashboard/student/results",
  },
  {
    title: "Attendance",
    icon: Calendar,
    href: "/dashboard/student/attendance",
  },
  {
    title: "Library",
    icon: BookOpen,
    href: "/dashboard/student/library",
  },
  {
    title: "Communication",
    icon: MessageSquare,
    href: "/dashboard/student/communication",
  },
  {
    title: "Payments",
    icon: CreditCard,
    href: "/dashboard/student/payments",
  },
  {
    title: "Rankings",
    icon: Trophy,
    href: "/dashboard/student/rankings",
  },
  {
    title: "Quizzes",
    icon: HelpCircle,
    href: "/dashboard/student/quizzes",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/student/settings",
  },
]

export function StudentSidebar({
  isOpen,
  onToggleSidebar,
}: {
  isOpen: boolean
  onToggleSidebar: () => void
}) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("userType")
    localStorage.removeItem("userData")
    router.push("/")
  }

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} lg:block fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 lg:z-auto`}
    >
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-bold text-xl text-blue-600">EduPortal</span>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onToggleSidebar}>
            <X className="w-5 h-5" />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4 flex-1 overflow-y-auto">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} className="w-full justify-start">
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    // Close mobile sidebar when navigating
                    if (window.innerWidth < 1024) {
                      onToggleSidebar()
                    }
                  }}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-3" />
          Logout
        </Button>
      </SidebarFooter>
    </div>
  )
}






// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import { Button } from "@/components/ui/Button";
// import {
//   LayoutDashboard,
//   FileText,
//   BarChart3,
//   Calendar,
//   BookOpen,
//   MessageSquare,
//   CreditCard,
//   Trophy,
//   HelpCircle,
//   Settings,
//   LogOut,
//   X,
// } from "lucide-react";
// import Link from "next/link";

// const menuItems = [
//   {
//     title: "Dashboard",
//     icon: LayoutDashboard,
//     href: "/dashboard/student",
//   },
//   {
//     title: "Assignments",
//     icon: FileText,
//     href: "/dashboard/student/assignments",
//   },
//   {
//     title: "Results",
//     icon: BarChart3,
//     href: "/dashboard/student/results",
//   },
//   {
//     title: "Attendance",
//     icon: Calendar,
//     href: "/dashboard/student/attendance",
//   },
//   {
//     title: "Library",
//     icon: BookOpen,
//     href: "/dashboard/student/library",
//   },
//   {
//     title: "Communication",
//     icon: MessageSquare,
//     href: "/dashboard/student/communication",
//   },
//   {
//     title: "Payments",
//     icon: CreditCard,
//     href: "/dashboard/student/payments",
//   },
//   {
//     title: "Rankings",
//     icon: Trophy,
//     href: "/dashboard/student/rankings",
//   },
//   {
//     title: "Quizzes",
//     icon: HelpCircle,
//     href: "/dashboard/student/quizzes",
//   },
//   {
//     title: "Settings",
//     icon: Settings,
//     href: "/dashboard/student/settings",
//   },
// ];

// export function StudentSidebar({
//   isOpen,
//   onToggleSidebar,
// }: {
//   isOpen: boolean;
//   onToggleSidebar: () => void;
// }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleLogout = () => {
//     localStorage.removeItem("userType");
//     localStorage.removeItem("userData");
//     router.push("/");
//   };

//   return (
//     <Sidebar className="border-r z-50">
//       <SidebarHeader className="p-4">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold text-sm">E</span>
//           </div>
//           <span className="font-bold text-xl text-blue-600">EduPortal</span>

//           <Button
//             variant="ghost"
//             size="icon"
//             className="lg:hidden"
//             onClick={onToggleSidebar}
//           >
//             <X className="w-5 h-5 flex lg:hidden" />
//           </Button>
//         </div>
//       </SidebarHeader>

//       <SidebarContent className="px-2">
//         <SidebarMenu>
//           {menuItems.map((item) => (
//             <SidebarMenuItem key={item.href}>
//               <SidebarMenuButton
//                 asChild
//                 isActive={pathname === item.href}
//                 className="w-full justify-start"
//               >
//                 <Link
//                   href={item.href}
//                   className="flex items-center gap-3 px-3 py-2"
//                 >
//                   <item.icon className="h-4 w-4" />
//                   <span>{item.title}</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarContent>

//       <SidebarFooter className="p-4">
//         <Button
//           variant="ghost"
//           onClick={handleLogout}
//           className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
//         >
//           <LogOut className="h-4 w-4 mr-3" />
//           Logout
//         </Button>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }