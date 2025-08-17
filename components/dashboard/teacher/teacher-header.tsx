"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Search, Bell, MessageSquare, Settings, User, LogOut, Menu } from "lucide-react"
import { Input } from "@/components/ui/parent/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

interface TeacherHeaderProps {
  onMenuToggle?: () => void
}

export function TeacherHeader({ onMenuToggle }: TeacherHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-white border-b border-gray-200 px-3 lg:px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left section with Menu icon + Search */}
        <div className="flex items-center gap-3 flex-1 max-w-md">
          {/* Menu icon (only visible on small screens) */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuToggle}
          >
            <Menu className="w-6 h-6" />
          </Button>

          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search classes, rooms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute top-0 right-0 w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-3 border-b">
                <h4 className="font-semibold">Notifications</h4>
              </div>
              <div className="p-2 space-y-2">
                <div className="p-2 hover:bg-gray-50 rounded">
                  <p className="text-sm font-medium">New assignment submission</p>
                  <p className="text-xs text-gray-500">John Davis submitted Quadratic Equations</p>
                </div>
                <div className="p-2 hover:bg-gray-50 rounded">
                  <p className="text-sm font-medium">Attendance alert</p>
                  <p className="text-xs text-gray-500">3 students absent in Grade 10A</p>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Messages */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="w-5 h-5" />
                <Badge className="absolute top-0 right-0 w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center p-0 bg-green-500 text-white text-xs">
                  7
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-3 border-b">
                <h4 className="font-semibold">Messages</h4>
              </div>
              <div className="p-2 space-y-2">
                <div className="p-2 hover:bg-gray-50 rounded">
                  <p className="text-sm font-medium">Parent inquiry</p>
                  <p className="text-xs text-gray-500">Mrs. Johnson asking about homework</p>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 px-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-blue-600 text-white">SM</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium">Sarah Mitchell</p>
                  <p className="text-xs text-gray-500">Mathematics Teacher</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}


// "use client"

// import { useState } from "react"
// // import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu"
// import { Search, Bell, MessageSquare, Settings, User, LogOut } from "lucide-react"
// import { Input } from "@/components/ui/parent/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

// export function TeacherHeader() {
//   const [searchQuery, setSearchQuery] = useState("")

//   return (
//     <header className="bg-white border-b border-gray-200 px-3 lg:px-6 py-4">
//       <div className="flex items-center justify-between">
//         {/* Search */}
//         <div className="flex-1 max-w-md">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <Input
//               placeholder="Search classes, rooms..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10 bg-gray-50 border-gray-200"
//             />
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4">
//           {/* Notifications */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="relative">
//                 <Bell className="w-5 h-5" />
//                 <Badge className="absolute -lg:top-1 top-0 right-0 -lg:right-1 lg:w-5 lg:h-5 w-4 h-4 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
//                   3
//                 </Badge>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-80">
//               <div className="p-3 border-b">
//                 <h4 className="font-semibold">Notifications</h4>
//               </div>
//               <div className="p-2">
//                 <div className="space-y-2">
//                   <div className="p-2 hover:bg-gray-50 rounded">
//                     <p className="text-sm font-medium">New assignment submission</p>
//                     <p className="text-xs text-gray-500">John Davis submitted Quadratic Equations</p>
//                   </div>
//                   <div className="p-2 hover:bg-gray-50 rounded">
//                     <p className="text-sm font-medium">Attendance alert</p>
//                     <p className="text-xs text-gray-500">3 students absent in Grade 10A</p>
//                   </div>
//                 </div>
//               </div>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Messages */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="relative">
//                 <MessageSquare className="w-5 h-5" />
//                 <Badge className="absolute -lg:top-1 top-0 right-0 -lg:right-1 lg:w-5 lg:h-5 w-4 h-4 flex items-center justify-center p-0 bg-green-500 text-white text-xs">
//                   7
//                 </Badge>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-80">
//               <div className="p-3 border-b">
//                 <h4 className="font-semibold">Messages</h4>
//               </div>
//               <div className="p-2">
//                 <div className="space-y-2">
//                   <div className="p-2 hover:bg-gray-50 rounded">
//                     <p className="text-sm font-medium">Parent inquiry</p>
//                     <p className="text-xs text-gray-500">Mrs. Johnson asking about homework</p>
//                   </div>
//                 </div>
//               </div>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Profile */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center space-x-2 px-3">
//                 <Avatar className="w-8 h-8">
//                   <AvatarImage src="/placeholder.svg?height=32&width=32" />
//                   <AvatarFallback className="bg-blue-600 text-white">SM</AvatarFallback>
//                 </Avatar>
//                 <div className="text-left">
//                   <p className="text-sm font-medium">Sarah Mitchell</p>
//                   <p className="text-xs text-gray-500">Mathematics Teacher</p>
//                 </div>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>
//                 <User className="w-4 h-4 mr-2" />
//                 Profile
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Settings className="w-4 h-4 mr-2" />
//                 Settings
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="text-red-600">
//                 <LogOut className="w-4 h-4 mr-2" />
//                 Logout
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </header>
//   )
// }



// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu"
// import { Search, Bell, MessageSquare, Settings, User, LogOut } from "lucide-react"
// import Input from "@/components/ui/Input"
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

// export function TeacherHeader() {
//   const [searchQuery, setSearchQuery] = useState("")

//   return (
//     <header className="bg-white border-b border-gray-200 px-6 py-4">
//       <div className="flex items-center justify-between">
//         {/* Search */}
//         <div className="flex-1 max-w-md">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <Input
//               placeholder="Search classes, rooms..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10 bg-gray-50 border-gray-200"
//             />
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4">
//           {/* Notifications */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="relative">
//                 <Bell className="w-5 h-5" />
//                 <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
//                   3
//                 </Badge>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-80">
//               <div className="p-3 border-b">
//                 <h4 className="font-semibold">Notifications</h4>
//               </div>
//               <div className="p-2">
//                 <div className="space-y-2">
//                   <div className="p-2 hover:bg-gray-50 rounded">
//                     <p className="text-sm font-medium">New assignment submission</p>
//                     <p className="text-xs text-gray-500">John Davis submitted Quadratic Equations</p>
//                   </div>
//                   <div className="p-2 hover:bg-gray-50 rounded">
//                     <p className="text-sm font-medium">Attendance alert</p>
//                     <p className="text-xs text-gray-500">3 students absent in Grade 10A</p>
//                   </div>
//                 </div>
//               </div>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Messages */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="relative">
//                 <MessageSquare className="w-5 h-5" />
//                 <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-green-500 text-white text-xs">
//                   7
//                 </Badge>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-80">
//               <div className="p-3 border-b">
//                 <h4 className="font-semibold">Messages</h4>
//               </div>
//               <div className="p-2">
//                 <div className="space-y-2">
//                   <div className="p-2 hover:bg-gray-50 rounded">
//                     <p className="text-sm font-medium">Parent inquiry</p>
//                     <p className="text-xs text-gray-500">Mrs. Johnson asking about homework</p>
//                   </div>
//                 </div>
//               </div>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Profile */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center space-x-2 px-3">
//                 <Avatar className="w-8 h-8">
//                   <AvatarImage src="/placeholder.svg?height=32&width=32" />
//                   <AvatarFallback className="bg-blue-600 text-white">SM</AvatarFallback>
//                 </Avatar>
//                 <div className="text-left">
//                   <p className="text-sm font-medium">Sarah Mitchell</p>
//                   <p className="text-xs text-gray-500">Mathematics Teacher</p>
//                 </div>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>
//                 <User className="w-4 h-4 mr-2" />
//                 Profile
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Settings className="w-4 h-4 mr-2" />
//                 Settings
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="text-red-600">
//                 <LogOut className="w-4 h-4 mr-2" />
//                 Logout
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </header>
//   )
// }
