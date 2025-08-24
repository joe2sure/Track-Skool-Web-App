import RegistrarHeader from "@/components/dashboard/registrar/registrar-header"
import RegistrarSidebar from "@/components/dashboard/registrar/registrar-sidebar"
import type { ReactNode } from "react"
// import RegistrarSidebar from "@/components/dashboard/registrar/RegistrarSidebar"
// import RegistrarHeader from "@/components/dashboard/registrar/RegistrarHeader"

export default function RegistrarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100">
      <div className="flex">
        <RegistrarSidebar />
        <main className="flex-1">
          <RegistrarHeader />
          <div className="mx-auto max-w-[1400px] px-4 pb-12">{children}</div>
        </main>
      </div>
    </div>
  )
}
