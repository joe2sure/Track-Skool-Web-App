// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  Search,
  Moon,
  Sun,
  Bell,
  User,
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  BarChart3,
  DollarSign,
  MessageSquare,
  CalendarDays,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { Suspense } from "react";
import { Input } from "@/components/ui/parent/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/parent/avatar";

const navigation = [
  { name: "Dashboard", href: "/dashboard/school-admin", icon: LayoutDashboard },
  { name: "Students", href: "/dashboard/school-admin/students", icon: Users },
  {
    name: "Teachers",
    href: "/dashboard/school-admin/teachers",
    icon: GraduationCap,
  },
  { name: "Courses", href: "/dashboard/school-admin/courses", icon: BookOpen },
  {
    name: "Attendance",
    href: "/dashboard/school-admin/attendance",
    icon: Calendar,
  },
  { name: "Results", href: "/dashboard/school-admin/results", icon: BarChart3 },
  {
    name: "Finance",
    href: "/dashboard/school-admin/finance",
    icon: DollarSign,
  },
  {
    name: "Communication",
    href: "/dashboard/school-admin/communication",
    icon: MessageSquare,
  },
  {
    name: "Events",
    href: "/dashboard/school-admin/events",
    icon: CalendarDays,
  },
  { name: "Reports", href: "/dashboard/school-admin/reports", icon: BarChart3 },
  {
    name: "Settings",
    href: "/dashboard/school-admin/settings",
    icon: Settings,
  },
];

export default function SchoolAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Suspense fallback={null}>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          {/* Sidebar */}
          <div
            className={`${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
          >
            <div className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-blue-600">
                  Track School Admin
                </span>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-5 h-5 flex lg:hidden" />
              </Button>
            </div>

            <nav className="mt-8 px-4">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="absolute bottom-4 left-4 right-4">
              <Link
                href="/auth/dashboard-login"
                className="flex items-center px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Logout
              </Link>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  >
                    <Menu className="w-5 h-5" />
                  </Button>

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search students, teachers, courses..."
                      className="pl-10 w-80"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    {darkMode ? (
                      <Sun className="w-5 h-5" />
                    ) : (
                      <Moon className="w-5 h-5" />
                    )}
                  </Button>

                  <div className="relative">
                    <Button variant="ghost" size="sm">
                      <Bell className="w-5 h-5" />
                    </Button>
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                      3
                    </Badge>
                  </div>

                  <div className="relative">
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="w-5 h-5" />
                    </Button>
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-green-500 text-white text-xs">
                      2
                    </Badge>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="relative h-8 w-8 rounded-full"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src="/placeholder.svg?height=32&width=32"
                            alt="Admin"
                          />
                          <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      align="end"
                      forceMount
                    >
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </header>

            {/* Page content */}
            <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              {children}
            </main>
          </div>
        </div>
      </Suspense>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
