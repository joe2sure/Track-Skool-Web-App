"use client";

import type React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { StudentSidebar } from "./StudentSidebar";
import { StudentHeader } from "./StudentHeader";
import useLargeScreen from "@/hooks/useLargeScreen";
import { useState, useEffect } from "react";

interface StudentDashboardLayoutProps {
  children: React.ReactNode;
}

export function StudentDashboardLayout({
  children,
}: StudentDashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLargeScreen = useLargeScreen();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gray-50">
        {/* <StudentSidebar /> */}
        {(isLargeScreen || isSidebarOpen) && (
          <StudentSidebar
            isOpen={isLargeScreen || isSidebarOpen}
            onToggleSidebar={toggleSidebar}
          />
        )}

        {/*opaque div On smaller screens */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 top-0 bg-black/70 z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        <div className="flex-1 flex flex-col">
          <StudentHeader onMenuToggle={toggleSidebar} />
          <main className="flex-1 p-4 lg:p-6 w-screen lg:w-full">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
