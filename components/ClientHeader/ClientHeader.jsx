"use client";

import { useEffect, useState } from "react";
import RoleBasedHeader from "../RoleBasedHeader/RoleBasedHeader";

export default function ClientHeader() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const userType = localStorage.getItem("userType");

    switch (userType) {
      case "student":
        setNavLinks([
          { label: "Dashboard", href: "/student/dashboard" },
          { label: "Assignments", href: "/student/assignments" },
          { label: "Profile", href: "/student/profile" },
        ]);
        break;
      case "teacher":
        setNavLinks([
          { label: "Dashboard", href: "/teacher/dashboard" },
          { label: "Classes", href: "/teacher/classes" },
          { label: "Profile", href: "/teacher/profile" },
        ]);
        break;
      case "admin":
        setNavLinks([
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Users", href: "/admin/users" },
          { label: "Settings", href: "/admin/settings" },
        ]);
        break;
      case "parent":
        setNavLinks([
          { label: "Dashboard", href: "/parent/dashboard" },
          { label: "Reports", href: "/parent/reports" },
          { label: "Profile", href: "/parent/profile" },
        ]);
        break;
      default:
        setNavLinks([]);
    }
  }, []);

  return <RoleBasedHeader navLinks={navLinks} />;
}
