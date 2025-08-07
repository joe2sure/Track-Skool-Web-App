import DefaultHeader from "./DefaultHeader";

type NavLink = {
  href: string;
  label: string;
};

type RoleBasedHeaderProps = {
  navLinks?: NavLink[]; // Optional
};

export default function RoleBasedHeader({ navLinks }: RoleBasedHeaderProps) {
  const userType =
    typeof window !== "undefined" ? localStorage.getItem("userType") : null;

  const defaultLinks: Record<string, NavLink[]> = {
    student: [
      { href: "/student/dashboard", label: "Dashboard" },
      { href: "/student/courses", label: "Courses" },
      { href: "/student/assignments", label: "Assignments" },
    ],
    teacher: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/classes", label: "Classes" },
      { href: "/attendance", label: "Attendance" },
      { href: "/resources", label: "Resources" },
      { href: "/communication", label: "Communication" },
    ],
    parent: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/Ward", label: "Ward" },
      { href: "/Performance", label: "Performance" },
      { href: "/communication", label: "Communication" },
    ],
    admin: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/resources", label: "Resources" },
      { href: "/communication", label: "Communication" },
    ],
    
  };

  const linksToUse = navLinks || defaultLinks[userType || "student"] || [];

  if (!userType) return <DefaultHeader />;

  return (
    <header className="bg-background shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">SkoolBridge</h1>
      <nav className="space-x-4">
        {linksToUse.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-light hover:text-blue-500"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
