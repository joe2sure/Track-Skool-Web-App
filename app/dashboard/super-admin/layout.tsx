import { SuperAdminLayout } from "@/components/dashboard/super-admin/super-admin-layout"
import type React from "react"

export default function SuperAdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SuperAdminLayout>{children}</SuperAdminLayout>
}
