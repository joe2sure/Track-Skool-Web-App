"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { StudentDashboardLayout } from "@/components/dashboard/student/StudentDashboardLayout"
import { DashboardOverview } from "@/components/dashboard/student/DashboardOverview"

export default function StudentDashboard() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate authentication check
    setTimeout(() => {
      setUserData({ name: "John Smith", id: "student123" })
      setIsLoading(false)
    }, 100)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <StudentDashboardLayout>
      <DashboardOverview />
    </StudentDashboardLayout>
  )
}




// "use client"

// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
// import { StudentDashboardLayout } from "@/components/dashboard/student/StudentDashboardLayout"
// import { DashboardOverview } from "@/components/dashboard/student/DashboardOverview"

// export default function StudentDashboard() {
//   const router = useRouter()
//   const [userData, setUserData] = useState<any>(null)

//   useEffect(() => {
//     // Check if user is authenticated
//     const userType = localStorage.getItem("userType")
//     const storedUserData = localStorage.getItem("userData")

//     if (userType !== "student" || !storedUserData) {
//       router.push("/auth/dashboard-login")
//       return
//     }

//     setUserData(JSON.parse(storedUserData))
//   }, [router])

//   if (!userData) {
//     return <div>Loading...</div>
//   }

//   return (
//     <StudentDashboardLayout>
//       <DashboardOverview />
//     </StudentDashboardLayout>
//   )
// }