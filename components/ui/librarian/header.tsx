"use client"

import { useState } from "react"
import { Search, Bell, MessageSquare, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
}

export function Header({ title, subtitle, backgroundImage }: HeaderProps) {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "5 books are overdue", time: "2 minutes ago", type: "warning" },
    { id: 2, text: "New book request from student", time: "1 hour ago", type: "info" },
    { id: 3, text: "Library event tomorrow", time: "3 hours ago", type: "info" },
  ])

  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search books, students, or transactions..."
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-slate-800 border-slate-700">
                <div className="px-4 py-2 border-b border-slate-700">
                  <h3 className="font-semibold text-white">Notifications</h3>
                </div>
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="px-4 py-3 text-slate-300 hover:bg-slate-700">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm">{notification.text}</p>
                        <p className="text-xs text-slate-400 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuItem className="px-4 py-2 text-blue-400 hover:bg-slate-700">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Messages */}
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-5 w-5" />
            </Button>

            {/* Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">MS</span>
                  </div>
                  <span className="text-sm font-medium">Maria Smith</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
                <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">Profile Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">Preferences</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuItem className="text-red-400 hover:bg-slate-700">Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Hero section for specific pages */}
      {title && (
        <div className="relative h-48 overflow-hidden">
          {backgroundImage && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
          <div className="relative px-6 py-8 h-full flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
            {subtitle && <p className="text-blue-200">{subtitle}</p>}
            <div className="flex items-center space-x-6 mt-4 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <span>📅</span>
                <span>Sunday, August 10, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏢</span>
                <span>Building A, 2nd Floor</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>Ext: 2341</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}