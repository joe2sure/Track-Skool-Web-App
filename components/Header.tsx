"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("userType")
    localStorage.removeItem("userData")
    router.push("/auth/dashboard-login")
  }

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-graduation-cap-line text-white text-lg w-5 h-5 flex items-center justify-center"></i>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">EduHub</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <i className="ri-notification-line text-xl w-5 h-5 flex items-center justify-center"></i>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Messages */}
            <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <i className="ri-message-line text-xl w-5 h-5 flex items-center justify-center"></i>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">SM</span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Sarah Mitchell</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Mathematics Teacher</p>
                </div>
                <i className="ri-arrow-down-s-line text-gray-400 w-4 h-4 flex items-center justify-center"></i>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <i className="ri-user-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <i className="ri-settings-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                    Settings
                  </Link>
                  <hr className="my-1 border-gray-200 dark:border-gray-600" />
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <i className="ri-logout-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}





// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { useTheme } from './ThemeProvider';
// import Button from './ui/button';

// export default function Header() {
//   const { theme, setTheme } = useTheme();
//   const [showThemeMenu, setShowThemeMenu] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   return (
//     <header className="bg-white dark:bg-gray-900 high-contrast:bg-black shadow-sm border-b border-gray-200 dark:border-gray-700 high-contrast:border-white">
//       <div className="px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-8">
//             <Link href="/dashboard" className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
//                 <i className="ri-graduation-cap-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
//               </div>
//               <span className="text-xl font-['Pacifico'] text-gray-900 dark:text-white high-contrast:text-white">EduManage</span>
//             </Link>
            
//             <nav className="hidden md:flex items-center space-x-6">
//               <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 high-contrast:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">Dashboard</Link>
//               <Link href="/attendance" className="text-gray-700 dark:text-gray-300 high-contrast:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">Attendance</Link>
//               <Link href="/assignments" className="text-gray-700 dark:text-gray-300 high-contrast:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">Assignments</Link>
//               <Link href="/library" className="text-gray-700 dark:text-gray-300 high-contrast:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">Library</Link>
//               <Link href="/communication" className="text-gray-700 dark:text-gray-300 high-contrast:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium">Communication</Link>
//             </nav>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <button
//                 onClick={() => setShowThemeMenu(!showThemeMenu)}
//                 className="w-9 h-9 flex items-center justify-center text-gray-500 dark:text-gray-400 high-contrast:text-white hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer"
//               >
//                 <i className="ri-palette-line text-lg w-5 h-5 flex items-center justify-center"></i>
//               </button>
              
//               {showThemeMenu && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 high-contrast:bg-black rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 high-contrast:border-white z-50">
//                   <div className="py-1">
//                     <button onClick={() => { setTheme('light'); setShowThemeMenu(false); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 high-contrast:text-white hover:bg-gray-100 dark:hover:bg-gray-700 high-contrast:hover:bg-gray-800 cursor-pointer">
//                       <i className="ri-sun-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>Light
//                     </button>
//                     <button onClick={() => { setTheme('dark'); setShowThemeMenu(false); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 high-contrast:text-white hover:bg-gray-100 dark:hover:bg-gray-700 high-contrast:hover:bg-gray-800 cursor-pointer">
//                       <i className="ri-moon-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>Dark
//                     </button>
//                     <button onClick={() => { setTheme('high-contrast'); setShowThemeMenu(false); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 high-contrast:text-white hover:bg-gray-100 dark:hover:bg-gray-700 high-contrast:hover:bg-gray-800 cursor-pointer">
//                       <i className="ri-contrast-2-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>High Contrast
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <button className="w-9 h-9 flex items-center justify-center text-gray-500 dark:text-gray-400 high-contrast:text-white hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer">
//               <i className="ri-notification-3-line text-lg w-5 h-5 flex items-center justify-center"></i>
//             </button>
            
//             <div className="relative">
//               <button
//                 onClick={() => setShowUserMenu(!showUserMenu)}
//                 className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 high-contrast:text-white hover:text-gray-900 dark:hover:text-white cursor-pointer"
//               >
//                 <img
//                   src="https://readdy.ai/api/search-image?query=Professional%20teacher%20portrait%20photo%2C%20friendly%20smile%2C%20educational%20background%2C%20modern%20classroom%20setting%2C%20natural%20lighting%2C%20high%20quality%20headshot&width=32&height=32&seq=header-avatar&orientation=squarish"
//                   alt="User"
//                   className="w-8 h-8 rounded-full object-top"
//                 />
//                 <span>Sarah Johnson</span>
//                 <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
//               </button>
              
//               {showUserMenu && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 high-contrast:bg-black rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 high-contrast:border-white z-50">
//                   <div className="py-1">
//                     <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 high-contrast:text-white hover:bg-gray-100 dark:hover:bg-gray-700 high-contrast:hover:bg-gray-800">Profile</Link>
//                     <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 high-contrast:text-white hover:bg-gray-100 dark:hover:bg-gray-700 high-contrast:hover:bg-gray-800">Settings</Link>
//                     <Link href="/auth/login" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 high-contrast:text-white hover:bg-gray-100 dark:hover:bg-gray-700 high-contrast:hover:bg-gray-800">Sign Out</Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }