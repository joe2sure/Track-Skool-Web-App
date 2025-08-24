"use client"
import { Home, User, Calendar, FileText, MessageSquare, Settings, LogOut, X } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard/parent",
    icon: Home,
  },
  {
    title: "Child Progress",
    href: "/dashboard/parent/child-progress",
    icon: User,
  },
  {
    title: "Attendance",
    href: "/dashboard/parent/attendance",
    icon: Calendar,
  },
  {
    title: "Assignments",
    href: "/dashboard/parent/assignments",
    icon: FileText,
  },
  {
    title: "Communication",
    href: "/dashboard/parent/communication",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/dashboard/parent/settings",
    icon: Settings,
  },
]

export function ParentSidebar({
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
    router.push("/auth/dashboard-login")
  }

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-[60] w-72 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:z-auto lg:block",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <div className="h-full bg-slate-900 border-r border-slate-700 shadow-xl lg:shadow-none overflow-y-auto">
        <div className="h-full w-full flex flex-col">
          {/* Header */}
          <div className="border-b border-slate-700 bg-slate-800 h-16 flex items-center justify-between px-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-graduation-cap-line text-white text-lg"></i>
              </div>
              <span className="font-bold text-white text-lg">EduHub</span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-slate-700"
              onClick={onToggleSidebar}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 bg-slate-900 py-4 overflow-y-auto">
            <nav className="space-y-2 px-3">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg px-3 py-3 transition-colors duration-200 w-full",
                        isActive && "bg-blue-600 text-white hover:bg-blue-700",
                      )}
                      onClick={() => {
                        if (window.innerWidth < 1024) {
                          onToggleSidebar()
                        }
                      }}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </div>
                )
              })}

              <div className="mt-6 pt-4 border-t border-slate-700">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-red-600 cursor-pointer rounded-lg px-3 py-3 transition-colors duration-200 w-full"
                >
                  <LogOut className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}






// "use client";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar";
// import {
//   Home,
//   User,
//   Calendar,
//   FileText,
//   MessageSquare,
//   Settings,
//   LogOut,
//   X,
// } from "lucide-react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/Button";

// const menuItems = [
//   {
//     title: "Dashboard",
//     href: "/dashboard/parent",
//     icon: Home,
//   },
//   {
//     title: "Child Progress",
//     href: "/dashboard/parent/child-progress",
//     icon: User,
//   },
//   {
//     title: "Attendance",
//     href: "/dashboard/parent/attendance",
//     icon: Calendar,
//   },
//   {
//     title: "Assignments",
//     href: "/dashboard/parent/assignments",
//     icon: FileText,
//   },
//   {
//     title: "Communication",
//     href: "/dashboard/parent/communication",
//     icon: MessageSquare,
//   },
//   {
//     title: "Settings",
//     href: "/dashboard/parent/settings",
//     icon: Settings,
//   },
// ];

// export function ParentSidebar({
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
//     router.push("/auth/dashboard-login");
//   };

//   return (
//     // <div
//     //   className={`absolute lg:relative w-3/4 lg:w-80 left-0 h-full bg-white border-r border-gray-200 flex flex-col shadow-lg transition-transform duration-300 z-50
//     //     ${isOpen ? "translate-x-0" : "-translate-x-full"}
//     //   `}
//     // ></div>
//     <Sidebar className="bg-slate-900 border-slate-700">
//       <SidebarHeader className="border-b border-slate-700 bg-slate-300 h-18 flex justify-center">
//         <div className="flex items-center gap-2 px-4 py-2">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//             <i className="ri-graduation-cap-line text-white text-lg"></i>
//           </div>
//           <span className="font-bold text-blue-600">EduHub</span>

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
//       <SidebarContent className="bg-slate-900 pt-6">
//         <SidebarMenu>
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = pathname === item.href;

//             return (
//               <SidebarMenuItem key={item.href}>
//                 <SidebarMenuButton
//                   asChild
//                   className={cn(
//                     "text-slate-300  hover:text-white hover:bg-slate-800",
//                     isActive && "bg-blue-600 text-white hover:bg-blue-700"
//                   )}
//                 >
//                   <Link href={item.href}>
//                     <Icon className="w-4 h-4" />
//                     <span>{item.title}</span>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             );
//           })}
//           <SidebarMenuItem>
//             <SidebarMenuButton
//               onClick={handleLogout}
//               className="text-slate-300 hover:text-white hover:bg-red-600 cursor-pointer"
//             >
//               <LogOut className="w-4 h-4" />
//               <span>Logout</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarContent>
//     </Sidebar>
//   );
// }