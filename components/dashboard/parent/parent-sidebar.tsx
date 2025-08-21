"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Home,
  User,
  Calendar,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

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
];

export function ParentSidebar({
  isOpen,
  onToggleSidebar,
}: {
  isOpen: boolean;
  onToggleSidebar: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("userData");
    router.push("/auth/dashboard-login");
  };

  return (
    // <div
    //   className={`absolute lg:relative w-3/4 lg:w-80 left-0 h-full bg-white border-r border-gray-200 flex flex-col shadow-lg transition-transform duration-300 z-50
    //     ${isOpen ? "translate-x-0" : "-translate-x-full"}
    //   `}
    // ></div>
    <Sidebar className="bg-slate-900 border-slate-700">
      <SidebarHeader className="border-b border-slate-700 bg-slate-300 h-18 flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="ri-graduation-cap-line text-white text-lg"></i>
          </div>
          <span className="font-bold text-blue-600">EduHub</span>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onToggleSidebar}
          >
            <X className="w-5 h-5 flex lg:hidden" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-slate-900 pt-6">
        <SidebarMenu>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "text-slate-300  hover:text-white hover:bg-slate-800",
                    isActive && "bg-blue-600 text-white hover:bg-blue-700"
                  )}
                >
                  <Link href={item.href}>
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="text-slate-300 hover:text-white hover:bg-red-600 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
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
