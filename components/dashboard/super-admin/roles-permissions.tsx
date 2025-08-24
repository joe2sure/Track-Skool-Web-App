"use client"

import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/badge"
import {
  Edit,
  Trash2,
  Shield,
  Users,
  School,
  BookOpen,
  DollarSign,
  Lock,
  MessageSquare,
  GraduationCap,
  FileText,
  Settings,
} from "lucide-react"

const systemRoles = [
  {
    id: 1,
    name: "Super Administrator",
    description: "Full system access with all permissions",
    usersAssigned: 3,
    permissionsCount: 6,
    permissions: ["System Settings", "User Management", "School Management", "Reports", "+2 more"],
    color: "bg-red-600",
    icon: Shield,
  },
  {
    id: 2,
    name: "District Administrator",
    description: "Manage schools within assigned district",
    usersAssigned: 12,
    permissionsCount: 4,
    permissions: ["School Management", "User Management", "Reports", "Communication"],
    color: "bg-blue-600",
    icon: School,
  },
  {
    id: 3,
    name: "Principal",
    description: "Manage individual school operations",
    usersAssigned: 24,
    permissionsCount: 4,
    permissions: ["School Dashboard", "Teacher Management", "Student Records", "Reports"],
    color: "bg-green-600",
    icon: GraduationCap,
  },
  {
    id: 4,
    name: "Teacher",
    description: "Access to classroom and student management",
    usersAssigned: 892,
    permissionsCount: 4,
    permissions: ["Class Management", "Grade Recording", "Student Communication", "Resources"],
    color: "bg-purple-600",
    icon: BookOpen,
  },
  {
    id: 5,
    name: "Support Staff",
    description: "Limited access to support functions",
    usersAssigned: 156,
    permissionsCount: 3,
    permissions: ["Basic Dashboard", "Communication", "Resources"],
    color: "bg-orange-600",
    icon: Users,
  },
]

const availablePermissions = [
  {
    name: "System Settings",
    description: "Configure system-wide settings",
    icon: Settings,
  },
  {
    name: "User Management",
    description: "Create, edit, and manage user accounts",
    icon: Users,
  },
  {
    name: "School Management",
    description: "Manage school information and settings",
    icon: School,
  },
  {
    name: "Reports",
    description: "Generate and view system reports",
    icon: FileText,
  },
  {
    name: "Finance",
    description: "Access financial data and reports",
    icon: DollarSign,
  },
  {
    name: "Security",
    description: "Manage security settings and logs",
    icon: Lock,
  },
  {
    name: "Communication",
    description: "Send messages and announcements",
    icon: MessageSquare,
  },
  {
    name: "Class Management",
    description: "Manage classroom activities",
    icon: BookOpen,
  },
  {
    name: "Grade Recording",
    description: "Record and manage student grades",
    icon: GraduationCap,
  },
  {
    name: "Student Records",
    description: "Access student information",
    icon: Users,
  },
  {
    name: "Resources",
    description: "Access educational resources",
    icon: BookOpen,
  },
  {
    name: "Basic Dashboard",
    description: "View basic dashboard information",
    icon: Settings,
  },
]

export function RolesPermissions() {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-0">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Roles & Permissions</h1>
        <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">Manage user roles and access permissions</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* System Roles */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-lg sm:text-xl font-semibold text-white">System Roles</h2>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">Create Role</Button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {systemRoles.map((role) => {
              const IconComponent = role.icon
              return (
                <Card key={role.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${role.color} flex items-center justify-center text-white flex-shrink-0`}
                        >
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{role.name}</h3>
                          <p className="text-gray-400 text-xs sm:text-sm mb-3">{role.description}</p>

                          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
                            <div>
                              <span className="text-gray-500">{role.usersAssigned} users assigned</span>
                            </div>
                            <div>
                              <span className="text-gray-500">{role.permissionsCount} permissions</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {role.permissions.map((permission, index) => (
                              <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                {permission}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 justify-end sm:justify-start">
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                          <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 p-2">
                          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Available Permissions */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Available Permissions</h2>

          <div className="space-y-2 sm:space-y-3">
            {availablePermissions.map((permission, index) => {
              const IconComponent = permission.icon
              return (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 flex-shrink-0">
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-medium text-white mb-1">{permission.name}</h4>
                        <p className="text-xs text-gray-400">{permission.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  ) 
}





// "use client"

// import { Button } from "@/components/ui/Button"
// import { Card, CardContent } from "@/components/ui/Card"
// import { Badge } from "@/components/ui/badge"
// import {
//   Edit,
//   Trash2,
//   Shield,
//   Users,
//   School,
//   BookOpen,
//   DollarSign,
//   Lock,
//   MessageSquare,
//   GraduationCap,
//   FileText,
//   Settings,
// } from "lucide-react"

// const systemRoles = [
//   {
//     id: 1,
//     name: "Super Administrator",
//     description: "Full system access with all permissions",
//     usersAssigned: 3,
//     permissionsCount: 6,
//     permissions: ["System Settings", "User Management", "School Management", "Reports", "+2 more"],
//     color: "bg-red-600",
//     icon: Shield,
//   },
//   {
//     id: 2,
//     name: "District Administrator",
//     description: "Manage schools within assigned district",
//     usersAssigned: 12,
//     permissionsCount: 4,
//     permissions: ["School Management", "User Management", "Reports", "Communication"],
//     color: "bg-blue-600",
//     icon: School,
//   },
//   {
//     id: 3,
//     name: "Principal",
//     description: "Manage individual school operations",
//     usersAssigned: 24,
//     permissionsCount: 4,
//     permissions: ["School Dashboard", "Teacher Management", "Student Records", "Reports"],
//     color: "bg-green-600",
//     icon: GraduationCap,
//   },
//   {
//     id: 4,
//     name: "Teacher",
//     description: "Access to classroom and student management",
//     usersAssigned: 892,
//     permissionsCount: 4,
//     permissions: ["Class Management", "Grade Recording", "Student Communication", "Resources"],
//     color: "bg-purple-600",
//     icon: BookOpen,
//   },
//   {
//     id: 5,
//     name: "Support Staff",
//     description: "Limited access to support functions",
//     usersAssigned: 156,
//     permissionsCount: 3,
//     permissions: ["Basic Dashboard", "Communication", "Resources"],
//     color: "bg-orange-600",
//     icon: Users,
//   },
// ]

// const availablePermissions = [
//   {
//     name: "System Settings",
//     description: "Configure system-wide settings",
//     icon: Settings,
//   },
//   {
//     name: "User Management",
//     description: "Create, edit, and manage user accounts",
//     icon: Users,
//   },
//   {
//     name: "School Management",
//     description: "Manage school information and settings",
//     icon: School,
//   },
//   {
//     name: "Reports",
//     description: "Generate and view system reports",
//     icon: FileText,
//   },
//   {
//     name: "Finance",
//     description: "Access financial data and reports",
//     icon: DollarSign,
//   },
//   {
//     name: "Security",
//     description: "Manage security settings and logs",
//     icon: Lock,
//   },
//   {
//     name: "Communication",
//     description: "Send messages and announcements",
//     icon: MessageSquare,
//   },
//   {
//     name: "Class Management",
//     description: "Manage classroom activities",
//     icon: BookOpen,
//   },
//   {
//     name: "Grade Recording",
//     description: "Record and manage student grades",
//     icon: GraduationCap,
//   },
//   {
//     name: "Student Records",
//     description: "Access student information",
//     icon: Users,
//   },
//   {
//     name: "Resources",
//     description: "Access educational resources",
//     icon: BookOpen,
//   },
//   {
//     name: "Basic Dashboard",
//     description: "View basic dashboard information",
//     icon: Settings,
//   },
// ]

// export function RolesPermissions() {
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-white">Roles & Permissions</h1>
//         <p className="text-gray-400 mt-2">Manage user roles and access permissions</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* System Roles */}
//         <div className="lg:col-span-2 space-y-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-semibold text-white">System Roles</h2>
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create Role</Button>
//           </div>

//           <div className="space-y-4">
//             {systemRoles.map((role) => {
//               const IconComponent = role.icon
//               return (
//                 <Card key={role.id} className="bg-gray-800 border-gray-700">
//                   <CardContent className="p-6">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-start space-x-4 flex-1">
//                         <div
//                           className={`w-12 h-12 rounded-lg ${role.color} flex items-center justify-center text-white`}
//                         >
//                           <IconComponent className="w-6 h-6" />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-lg font-semibold text-white mb-1">{role.name}</h3>
//                           <p className="text-gray-400 text-sm mb-3">{role.description}</p>

//                           <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
//                             <div>
//                               <span className="text-gray-500">{role.usersAssigned} users assigned</span>
//                             </div>
//                             <div>
//                               <span className="text-gray-500">{role.permissionsCount} permissions</span>
//                             </div>
//                           </div>

//                           <div className="flex flex-wrap gap-2">
//                             {role.permissions.map((permission, index) => (
//                               <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
//                                 {permission}
//                               </Badge>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-2 ml-4">
//                         <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//                           <Edit className="w-4 h-4" />
//                         </Button>
//                         <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
//                           <Trash2 className="w-4 h-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>
//         </div>

//         {/* Available Permissions */}
//         <div className="space-y-6">
//           <h2 className="text-xl font-semibold text-white">Available Permissions</h2>

//           <div className="space-y-3">
//             {availablePermissions.map((permission, index) => {
//               const IconComponent = permission.icon
//               return (
//                 <Card key={index} className="bg-gray-800 border-gray-700">
//                   <CardContent className="p-4">
//                     <div className="flex items-start space-x-3">
//                       <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
//                         <IconComponent className="w-4 h-4" />
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="text-sm font-medium text-white mb-1">{permission.name}</h4>
//                         <p className="text-xs text-gray-400">{permission.description}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
