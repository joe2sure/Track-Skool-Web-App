"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import Link from "next/link";

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
];

export function StudentSidebar({
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
    router.push("/");
  };

  return (
    <Sidebar  isOpen={isOpen} className="border-r z-50 sm:absolute lg:sticky">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="font-bold text-xl text-blue-600">Track School</span>

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

      <SidebarContent className="px-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className="w-full justify-start"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-3" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
