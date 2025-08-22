"use client"


import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar"
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header"
import { Card, CardContent, CardHeader } from "@/components/ui/Card"
import { Skeleton } from "@/components/ui/skeleton"

export default function TeacherSettingsLoading() {
  const handleToggleSidebar = () => {
    // Empty function for loading state
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <TeacherSidebar isOpen={false} onToggleSidebar={handleToggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TeacherHeader onMenuToggle={handleToggleSidebar} />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-4 w-64" />
              </div>
              <Skeleton className="h-10 w-32" />
            </div>

            {/* Tabs Skeleton */}
            <div className="space-y-6">
              <Skeleton className="h-10 w-full" />

              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-96" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-20 h-20 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-8 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}





// import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar"
// import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header"
// import { Card, CardContent, CardHeader } from "@/components/ui/Card"
// // import { Card, CardContent, CardHeader } from "@/components/ui/card"
// // import { Skeleton } from "@/components/ui/skeleton"

// export default function TeacherSettingsLoading() {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       <TeacherSidebar isOpen={false} onToggleSidebar={() => {}} />

//       <div className="flex-1 flex flex-col overflow-hidden">
//         <TeacherHeader onToggleSidebar={() => {}} />

//         <main className="flex-1 overflow-y-auto p-4 lg:p-6">
//           <div className="max-w-4xl mx-auto space-y-6">
//             {/* Header Skeleton */}
//             <div className="flex items-center justify-between">
//               <div className="space-y-2">
//                 <Skeleton className="h-8 w-32" />
//                 <Skeleton className="h-4 w-64" />
//               </div>
//               <Skeleton className="h-10 w-32" />
//             </div>

//             {/* Tabs Skeleton */}
//             <div className="space-y-6">
//               <Skeleton className="h-10 w-full" />

//               <Card>
//                 <CardHeader>
//                   <Skeleton className="h-6 w-48" />
//                   <Skeleton className="h-4 w-96" />
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-center gap-4">
//                     <Skeleton className="w-20 h-20 rounded-full" />
//                     <div className="space-y-2">
//                       <Skeleton className="h-8 w-32" />
//                       <Skeleton className="h-4 w-48" />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {Array.from({ length: 4 }).map((_, i) => (
//                       <div key={i} className="space-y-2">
//                         <Skeleton className="h-4 w-24" />
//                         <Skeleton className="h-10 w-full" />
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }