"use client"

import Link from "next/link"
import { ThemeProvider } from "../components/ThemeProvider"
import Button2 from "../components/ui/button2"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 high-contrast:bg-black">
        <div
          className="relative min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="relative z-10 text-center px-6 py-12">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center">
                  <i className="ri-graduation-cap-line text-white text-3xl w-10 h-10 flex items-center justify-center"></i>
                </div>
              </div>
              {/* Fixed branding from EduManage to TrackSkool */}
              <h1 className="text-5xl font-['Pacifico'] text-white mb-4">TrackSkool</h1>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">Best School Management Software</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                AI-powered school management system with comprehensive dashboards for administrators, teachers, parents, students, librarians, and hostel managers. Transform your educational institution with intelligent automation and seamless communication.
              </p>
              
              {/* Added SEO-friendly feature highlights */}
              <div className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                <span className="inline-block bg-blue-600/20 px-3 py-1 rounded-full mr-2 mb-2">AI Study Features</span>
                <span className="inline-block bg-green-600/20 px-3 py-1 rounded-full mr-2 mb-2">Parent Tracking</span>
                <span className="inline-block bg-purple-600/20 px-3 py-1 rounded-full mr-2 mb-2">Multi-Role Dashboards</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link href="/auth/dashboard-login">
                <Button2 size="lg" className="w-48">
                  <i className="ri-dashboard-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                  Access Dashboard
                </Button2>
              </Link>
              <Link href="/auth/register">
                <Button2
                  size="lg"
                  variant="outline"
                  className="w-48 bg-white/10 border-white text-white hover:bg-white/20"
                >
                  <i className="ri-user-add-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                  Get Started Free
                </Button2>
              </Link>
            </div>

            {/* Enhanced feature grid with better SEO structure */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" aria-label="TrackSkool Key Features">
              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <i className="ri-calendar-check-line text-3xl text-blue-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Smart Attendance Tracking</h3>
                <p className="text-gray-200 text-sm">AI-powered attendance system with visual grid interface and automated reporting for parents and administrators.</p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <i className="ri-file-text-line text-3xl text-emerald-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Assignment Management</h3>
                <p className="text-gray-200 text-sm">Create, distribute, and grade assignments with AI-assisted tools and comprehensive progress tracking.</p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <i className="ri-book-open-line text-3xl text-amber-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Digital Library System</h3>
                <p className="text-gray-200 text-sm">Complete library management with digital catalog, book tracking, and automated overdue notifications.</p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <i className="ri-chat-3-line text-3xl text-purple-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Communication Hub</h3>
                <p className="text-gray-200 text-sm">Seamless communication between teachers, parents, and students with announcements and event management.</p>
              </article>
            </section>

            {/* Added additional features section for SEO */}
            <section className="mt-16 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Comprehensive School Management Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">For Administrators</h3>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• Complete school oversight and reporting</li>
                    <li>• Staff and student management</li>
                    <li>• Financial tracking and fee management</li>
                    <li>• Academic performance analytics</li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">For Parents</h3>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• Real-time ward progress tracking</li>
                    <li>• Attendance and grade monitoring</li>
                    <li>• Direct teacher communication</li>
                    <li>• Event and announcement updates</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Added structured data script for homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "TrackSkool - Best School Management Software",
              "description": "AI-powered school management system with comprehensive dashboards for administrators, teachers, parents, students, librarians, and hostel managers.",
              "url": "https://trackskool.co.uk",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "TrackSkool",
                "applicationCategory": "EducationalApplication",
                "description": "Comprehensive school management software with AI study features and parent tracking.",
                "featureList": [
                  "AI Study Features",
                  "Smart Attendance Tracking", 
                  "Assignment Management",
                  "Digital Library System",
                  "Communication Hub",
                  "Parent Progress Tracking"
                ]
              }
            })
          }}
        />
      </div>
    </ThemeProvider>
  )
}




// "use client"

// import Link from "next/link"
// import { ThemeProvider } from "../components/ThemeProvider"
// import Button2 from "../components/ui/Button2"


// export default function Home() {
//   return (
//     <ThemeProvider>
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 high-contrast:bg-black">
//         <div
//           className="relative min-h-screen flex items-center justify-center"
//           style={{
//             backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//           <div className="relative z-10 text-center px-6 py-12">
//             <div className="mb-8">
//               <div className="flex justify-center mb-6">
//                 <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center">
//                   <i className="ri-graduation-cap-line text-white text-3xl w-10 h-10 flex items-center justify-center"></i>
//                 </div>
//               </div>
//               <h1 className="text-5xl font-['Pacifico'] text-white mb-4">EduManage</h1>
//               <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
//                 Complete school management system with modern UI, role-based dashboards, and comprehensive features for
//                 students, teachers, parents, and administrators.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
//               <Link href="/auth/portal">
//                 <Button2 size="lg" className="w-48">
//                   <i className="ri-portal-line mr-2 w-5 h-5 flex items-center justify-center"></i>
//                   Portal
//                 </Button2>
//               </Link>
//               <Link href="/auth/dashboard-login">
//                 <Button2
//                   size="lg"
//                   variant="outline"
//                   className="w-48 bg-white/10 border-white text-white hover:bg-white/20"
//                 >
//                   <i className="ri-dashboard-line mr-2 w-5 h-5 flex items-center justify-center"></i>
//                   View Dashboard
//                 </Button2>
//               </Link>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
//                 <i className="ri-calendar-check-line text-3xl text-blue-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
//                 <h3 className="text-lg font-semibold text-white mb-2">Attendance</h3>
//                 <p className="text-gray-200 text-sm">Track student attendance with visual grid interface</p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
//                 <i className="ri-file-text-line text-3xl text-emerald-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
//                 <h3 className="text-lg font-semibold text-white mb-2">Assignments</h3>
//                 <p className="text-gray-200 text-sm">Create and manage assignments with grading tools</p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
//                 <i className="ri-book-open-line text-3xl text-amber-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
//                 <h3 className="text-lg font-semibold text-white mb-2">Library</h3>
//                 <p className="text-gray-200 text-sm">Browse and check out books from digital catalog</p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
//                 <i className="ri-chat-3-line text-3xl text-purple-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
//                 <h3 className="text-lg font-semibold text-white mb-2">Communication</h3>
//                 <p className="text-gray-200 text-sm">Announcements and event management system</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   )
// }