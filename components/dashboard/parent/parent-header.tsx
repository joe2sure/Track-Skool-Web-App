"use client"

import { Search, Bell, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/parent/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"

export function ParentHeader() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            placeholder="Search students, classes, events..."
            className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-slate-300 hover:text-white">
          <Bell className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
            3
          </Badge>
        </Button>

        <Button variant="ghost" size="icon" className="relative text-slate-300 hover:text-white">
          <MessageSquare className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-green-500 text-white text-xs">
            2
          </Badge>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-slate-800">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <span className="font-medium">Jennifer Smith</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
            <DropdownMenuItem className="text-white hover:bg-slate-700">Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-slate-700">Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-slate-700">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
