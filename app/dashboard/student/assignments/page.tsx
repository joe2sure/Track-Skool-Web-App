"use client"

// import { StudentDashboardLayout } from "../../../../components/dashboard/student/StudentDashboardLayout"
import { AssignmentsView } from "@/components/dashboard/student/AssignmentsView"
import { StudentDashboardLayout } from "@/components/dashboard/student/StudentDashboardLayout"

export default function StudentAssignments() {
  return (
    <StudentDashboardLayout>
      <AssignmentsView />
    </StudentDashboardLayout>
  )
}
