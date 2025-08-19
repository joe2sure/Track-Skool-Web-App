"use client";
import type React from "react";
import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ParentSidebar } from "@/components/dashboard/parent/parent-sidebar";
import { ParentHeader } from "@/components/dashboard/parent/parent-header";
import useLargeScreen from "@/hooks/useLargeScreen";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Parent Dashboard - EduManage",
//   description: "Parent portal for school management system",
// }

export default function ParentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLargeScreen = useLargeScreen();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen">
          {(isLargeScreen || isSidebarOpen) && (
            <ParentSidebar
              isOpen={isLargeScreen || isSidebarOpen}
              onToggleSidebar={toggleSidebar}
            />
          )}

          {/*opaque div On smaller screens */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 top-0 bg-black/70 z-20 lg:hidden"
              onClick={toggleSidebar}
            />
          )}

          <div className="flex-1 flex flex-col">
            <ParentHeader onMenuToggle={toggleSidebar} />
            <main className="flex-1 p-4 lg:p-6">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

// import type React from "react"
// import type { Metadata } from "next"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { ParentSidebar } from "@/components/dashboard/parent/parent-sidebar"
// import { ParentHeader } from "@/components/dashboard/parent/parent-header"

// export const metadata: Metadata = {
//   title: "Parent Dashboard - EduManage",
//   description: "Parent portal for school management system",
// }

// export default function ParentDashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="min-h-screen bg-slate-900">
//       <SidebarProvider defaultOpen={true}>
//         <div className="flex min-h-screen">
//           <ParentSidebar />
//           <div className="flex-1 flex flex-col">
//             <ParentHeader />
//             <main className="flex-1 p-6">{children}</main>
//           </div>
//         </div>
//       </SidebarProvider>
//     </div>
//   )
// }

// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./parent-globals.css"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/dashboard/parent/ParentSidebar"
// import { Header } from "@/components/dashboard/parent/Parentheader"
// // import { AppSidebar } from "@/components/app-sidebar"
// // import { Header } from "@/components/header"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "EduPortal - School Management System",
//   description: "Comprehensive school management system for parents and students",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body className={inter.className}>
//         <SidebarProvider defaultOpen={true}>
//           <div className="flex min-h-screen bg-slate-900">
//             <AppSidebar />
//             <div className="flex-1 flex flex-col">
//               <Header />
//               <main className="flex-1 p-6">{children}</main>
//             </div>
//           </div>
//         </SidebarProvider>
//       </body>
//     </html>
//   )
// }
