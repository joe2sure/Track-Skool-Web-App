"use client"
import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ParentSidebar } from "@/components/dashboard/parent/parent-sidebar"
import { ParentHeader } from "@/components/dashboard/parent/parent-header"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState } from "react"

export default function ParentDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const isMobile = useIsMobile()
  const isLargeScreen = !isMobile

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <SidebarProvider defaultOpen={isLargeScreen}>
        <div className="flex min-h-screen relative">
          <ParentSidebar isOpen={isLargeScreen || isSidebarOpen} onToggleSidebar={toggleSidebar} />

          {isSidebarOpen && isMobile && (
            <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={toggleSidebar} aria-hidden="true" />
          )}

          <div className="flex-1 flex flex-col min-w-0 w-full">
            <ParentHeader onMenuToggle={toggleSidebar} />
            <main className="flex-1 p-3 sm:p-4 lg:p-6 overflow-x-hidden w-full max-w-none">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}





// "use client"
// import type React from "react"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { ParentSidebar } from "@/components/dashboard/parent/parent-sidebar"
// import { ParentHeader } from "@/components/dashboard/parent/parent-header"
// import { useIsMobile } from "@/hooks/use-mobile"
// import { useState } from "react"

// export default function ParentDashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const isMobile = useIsMobile()
//   const isLargeScreen = !isMobile

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev)
//   }

//   return (
//     <div className="min-h-screen bg-slate-900">
//       <SidebarProvider defaultOpen={isLargeScreen}>
//         <div className="flex min-h-screen relative">
//           <ParentSidebar isOpen={isLargeScreen || isSidebarOpen} onToggleSidebar={toggleSidebar} />

//           {isSidebarOpen && isMobile && (
//             <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={toggleSidebar} aria-hidden="true" />
//           )}

//           <div className="flex-1 flex flex-col min-w-0">
//             <ParentHeader onMenuToggle={toggleSidebar} />
//             <main className="flex-1 p-3 sm:p-4 lg:p-6 overflow-x-hidden">{children}</main>
//           </div>
//         </div>
//       </SidebarProvider>
//     </div>
//   )
// }