"use client"

import { Bell, Moon, Sun, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

interface StudentHeaderProps {
  onMenuToggle?: () => void
}

export function StudentHeader({ onMenuToggle }: StudentHeaderProps) {
  const [theme, setTheme] = useState("light")
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    }
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header className="border-b bg-white px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuToggle}>
          <Menu className="w-6 h-6" />
        </Button>

        <div className="flex-1 lg:flex-none"></div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium hidden sm:block">John Smith</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}






// "use client";

// import { Bell, Moon, Sun, User, Menu } from "lucide-react";
// import { Button } from "@/components/ui/Button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Badge } from "@/components/ui/badge";
// import { SidebarTrigger } from "@/components/ui/sidebar";
// import { useState, useEffect } from "react";

// interface StudentHeaderProps {
//   onMenuToggle?: () => void;
// }

// export function StudentHeader({ onMenuToggle }: StudentHeaderProps) {
//   const [theme, setTheme] = useState("light");
//   const [userData, setUserData] = useState<any>(null);

//   useEffect(() => {
//     const storedUserData = localStorage.getItem("userData");
//     if (storedUserData) {
//       setUserData(JSON.parse(storedUserData));
//     }
//   }, []);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <header className="border-b bg-white px-6 py-4">
//       <div className="flex items-center justify-between">
//         {/* Menu icon (only visible on small screens) */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className=""
//           onClick={onMenuToggle}
//         >
//           <Menu className="w-6 h-6 lg:hidden" />
//         </Button>

//         <div className="flex items-center gap-4">
//           <SidebarTrigger />
//         </div>

//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon" onClick={toggleTheme}>
//             {theme === "light" ? (
//               <Moon className="h-4 w-4" />
//             ) : (
//               <Sun className="h-4 w-4" />
//             )}
//           </Button>

//           <Button variant="ghost" size="icon" className="relative">
//             <Bell className="h-4 w-4" />
//             <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
//               3
//             </Badge>
//           </Button>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//                   <User className="h-4 w-4 text-white" />
//                 </div>
//                 <span className="font-medium">John Smith</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Help</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </header>
//   );
// }
