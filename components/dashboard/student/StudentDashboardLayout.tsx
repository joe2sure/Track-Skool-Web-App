"use client"

import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { StudentSidebar } from "./StudentSidebar"
import { StudentHeader } from "./StudentHeader"

interface StudentDashboardLayoutProps {
  children: React.ReactNode
}

export function StudentDashboardLayout({ children }: StudentDashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gray-50">
        <StudentSidebar />
        <div className="flex-1 flex flex-col">
          <StudentHeader />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
