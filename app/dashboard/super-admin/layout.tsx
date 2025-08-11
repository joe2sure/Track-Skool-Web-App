import { SuperAdminLayout } from "@/components/dashboard/super-admin/super-admin-layout"
import type React from "react"
// import { SuperAdminLayout } from "@/components/dashboard/super-admin/super-admin-layout"

export default function SuperAdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SuperAdminLayout>{children}</SuperAdminLayout>
}
