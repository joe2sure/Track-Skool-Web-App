"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ComingSoon from "@/components/ui/ComingSoon";
import HostelSidebar from "@/components/dashboard/hostel/hostel-sidebar";
import HostelTopbar from "@/components/dashboard/hostel/hostel-header";

const Hostels: React.FC = () => {
  const router = useRouter();

  // Route guard (only allow when logged in via dummy auth)
  useEffect(() => {
    const userType = typeof window !== "undefined" ? localStorage.getItem("userType") : null;
    if (!userType) router.replace("/auth/dashboard-login");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <HostelSidebar active="hostels" />

        {/* Main */}
        <div className="flex-1">
          <HostelTopbar />
          
          {/* Content Area */}
          <div className="p-6">
            <ComingSoon title="Hostels Management" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostels;


// import ComingSoon from "@/components/ui/ComingSoon";
// import React from "react";

// const Hostels: React.FC = () => {
//   return <ComingSoon title="Hostel Hostels" />;
// };

// export default Hostels;
