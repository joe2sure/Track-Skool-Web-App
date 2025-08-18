"use client"
import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/parent/input"
import { Bell, Search, User, Menu, X } from "lucide-react"

interface ParentHeaderProps {
  onMenuToggle?: () => void
}

export function ParentHeader({ onMenuToggle }: ParentHeaderProps) {

  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="bg-slate-800 border-b border-slate-700 px-4 py-3 md:px-6 md:py-4">
      <div className="flex items-center justify-between">
        {/* Left - Title */}
        <div className="flex items-center gap-3">

          {/* Menu icon (only visible on small screens) */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuToggle}
          >
            <Menu className="w-6 h-6 text-white" />
          </Button>
          <h1 className="text-lg md:text-xl font-semibold text-white">Parent Dashboard</h1>
        </div>

        {/* Center - Search */}
        <div
          className={`absolute top-0 left-0 w-full px-4 py-2 bg-slate-800 md:static md:w-auto md:px-0 md:py-0 md:bg-transparent md:block transition-all duration-200 ${
            showSearch ? "block" : "hidden md:block"
          }`}
        >
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-full bg-slate-700 border-slate-600 text-white placeholder-gray-400"
            />
            {showSearch && (
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 md:hidden"
                onClick={() => setShowSearch(false)}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile Search Toggle */}
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-slate-700 md:hidden"
            onClick={() => setShowSearch(true)}
          >
            <Search className="w-4 h-4" />
          </Button>

          <Button size="sm" variant="ghost" className="text-white hover:bg-slate-700">
            <Bell className="w-4 h-4" />
          </Button>

          <Button size="sm" variant="ghost" className="text-white hover:bg-slate-700">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
