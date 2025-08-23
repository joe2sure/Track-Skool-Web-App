"use client";

import { Bell, Download, Search, Settings } from "lucide-react";

export default function HostelTopbar() {
  return (
    <header className="sticky top-0 z-30 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="h-14 px-4 md:px-6 flex items-center gap-3">
        <div className="relative flex-1 max-w-xl">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            placeholder="Search students, rooms, or hostels…"
            className="w-full pl-9 pr-3 py-2 rounded-md bg-gray-900 border border-gray-800 text-sm outline-none focus:border-gray-700"
          />
        </div>

        <button className="p-2 rounded-lg bg-gray-900 border border-gray-800"><Download className="w-4 h-4" /></button>
        <button className="p-2 rounded-lg bg-gray-900 border border-gray-800"><Settings className="w-4 h-4" /></button>
        <button className="relative p-2 rounded-lg bg-gray-900 border border-gray-800">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500" />
        </button>

        <div className="ml-1 w-8 h-8 rounded-full bg-indigo-600 grid place-items-center text-sm">AM</div>
      </div>
    </header>
  );
}
