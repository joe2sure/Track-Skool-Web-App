"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Users,
  BarChart3,
  MessageSquare,
  CalendarDays,
  BookOpen,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const sidebarItems = [
  { title: "Dashboard", href: "/dashboard/teacher", icon: LayoutDashboard },
  {
    title: "Class Schedule",
    href: "/dashboard/teacher/class-schedule",
    icon: Calendar,
  },
  {
    title: "Assignments",
    href: "/dashboard/teacher/assignments",
    icon: FileText,
  },
  { title: "Attendance", href: "/dashboard/teacher/attendance", icon: Users },
  { title: "Results", href: "/dashboard/teacher/results", icon: BarChart3 },
  {
    title: "Communication",
    href: "/dashboard/teacher/communication",
    icon: MessageSquare,
  },
  { title: "Events", href: "/dashboard/teacher/events", icon: CalendarDays },
  { title: "Resources", href: "/dashboard/teacher/resources", icon: BookOpen },
];

export function TeacherSidebar({
  isOpen,
  onToggleSidebar,
}: {
  isOpen: boolean;
  onToggleSidebar: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`absolute lg:relative w-3/4 lg:w-80 left-0 h-full bg-white border-r border-gray-200 flex flex-col shadow-lg transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <Link href="/dashboard/teacher" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="text-xl font-bold text-blue-600">Track School</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onToggleSidebar}
        >
          <X className="w-5 h-5 flex lg:hidden" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start space-x-3 h-11",
                  isActive
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Link href="/dashboard/teacher/settings">
          <Button
            variant="ghost"
            className="w-full justify-start space-x-3 h-11 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Button>
        </Link>

        <Link href="/auth/login">
          <Button
            variant="ghost"
            className="w-full justify-start space-x-3 h-11 text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

// "use client"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   LayoutDashboard,
//   Calendar,
//   FileText,
//   Users,
//   BarChart3,
//   MessageSquare,
//   CalendarDays,
//   BookOpen,
//   Settings,
//   LogOut,
// } from "lucide-react"

// const sidebarItems = [
//   {
//     title: "Dashboard",
//     href: "/dashboard/teacher",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Class Schedule",
//     href: "/dashboard/teacher/class-schedule",
//     icon: Calendar,
//   },
//   {
//     title: "Assignments",
//     href: "/dashboard/teacher/assignments",
//     icon: FileText,
//   },
//   {
//     title: "Attendance",
//     href: "/dashboard/teacher/attendance",
//     icon: Users,
//   },
//   {
//     title: "Results",
//     href: "/dashboard/teacher/results",
//     icon: BarChart3,
//   },
//   {
//     title: "Communication",
//     href: "/dashboard/teacher/communication",
//     icon: MessageSquare,
//   },
//   {
//     title: "Events",
//     href: "/dashboard/teacher/events",
//     icon: CalendarDays,
//   },
//   {
//     title: "Resources",
//     href: "/dashboard/teacher/resources",
//     icon: BookOpen,
//   },
// ]

// export function TeacherSidebar() {
//   const pathname = usePathname()

//   return (
//     <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
//       {/* Logo */}
//       <div className="p-6 border-b border-gray-200">
//         <Link href="/dashboard/teacher" className="flex items-center space-x-2">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold text-sm">E</span>
//           </div>
//           <span className="text-xl font-bold text-blue-600">Track School</span>
//         </Link>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4 space-y-2">
//         {sidebarItems.map((item) => {
//           const Icon = item.icon
//           const isActive = pathname === item.href

//           return (
//             <Link key={item.href} href={item.href}>
//               <Button
//                 variant={isActive ? "default" : "ghost"}
//                 className={cn(
//                   "w-full justify-start space-x-3 h-11",
//                   isActive
//                     ? "bg-blue-600 text-white hover:bg-blue-700"
//                     : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
//                 )}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span>{item.title}</span>
//               </Button>
//             </Link>
//           )
//         })}
//       </nav>

//       {/* Bottom Actions */}
//       <div className="p-4 border-t border-gray-200 space-y-2">
//         <Link href="/dashboard/teacher/settings">
//           <Button
//             variant="ghost"
//             className="w-full justify-start space-x-3 h-11 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//           >
//             <Settings className="w-5 h-5" />
//             <span>Settings</span>
//           </Button>
//         </Link>

//         <Link href="/auth/login">
//           <Button
//             variant="ghost"
//             className="w-full justify-start space-x-3 h-11 text-red-600 hover:text-red-700 hover:bg-red-50"
//           >
//             <LogOut className="w-5 h-5" />
//             <span>Logout</span>
//           </Button>
//         </Link>
//       </div>
//     </div>
//   )
// }
