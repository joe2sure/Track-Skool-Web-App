"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Button2 from "../../../components/ui/Button2"
import Input from "../../../components/ui/Input"
import Card2 from "../../../components/ui/Card2"

// Define specific types for each credential type
type StudentCredentials = { schoolId: string; studentId: string; password: string }
type ParentCredentials = { schoolId: string; studentId: string; parentId: string; password: string }
type TeacherCredentials = { schoolId: string; teacherId: string; password: string }
type SchoolAdminCredentials = { schoolId: string; adminId: string; password: string }
type SuperAdminCredentials = { superAdminId: string; password: string }
type LibrarianCredentials = { schoolId: string; librarianId: string; password: string }

export default function PortalLogin() {
  const [userType, setUserType] = useState("student")
  const [formData, setFormData] = useState({
    schoolId: "",
    studentId: "",
    parentId: "",
    teacherId: "",
    adminId: "",
    superAdminId: "",
    librarianId: "",
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  // Dummy credentials for testing with proper typing
  const dummyCredentials = {
    student: { schoolId: "SCH001", studentId: "STU001", password: "student123" } as StudentCredentials,
    parent: { schoolId: "SCH001", studentId: "STU001", parentId: "PAR001", password: "parent123" } as ParentCredentials,
    teacher: { schoolId: "SCH001", teacherId: "TCH001", password: "teacher123" } as TeacherCredentials,
    school_admin: { schoolId: "SCH001", adminId: "ADM001", password: "admin123" } as SchoolAdminCredentials,
    super_admin: { superAdminId: "SUP001", password: "super123" } as SuperAdminCredentials,
    librarian: { schoolId: "SCH001", librarianId: "LIB001", password: "librarian123" } as LibrarianCredentials,
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple authentication logic with dummy credentials
    let isValid = false

    switch (userType) {
      case "student": {
        const credentials = dummyCredentials.student
        isValid =
          formData.schoolId === credentials.schoolId &&
          formData.studentId === credentials.studentId &&
          formData.password === credentials.password
        break
      }
      case "parent": {
        const credentials = dummyCredentials.parent
        isValid =
          formData.schoolId === credentials.schoolId &&
          formData.studentId === credentials.studentId &&
          formData.parentId === credentials.parentId &&
          formData.password === credentials.password
        break
      }
      case "teacher": {
        const credentials = dummyCredentials.teacher
        isValid =
          formData.schoolId === credentials.schoolId &&
          formData.teacherId === credentials.teacherId &&
          formData.password === credentials.password
        break
      }
      case "school_admin": {
        const credentials = dummyCredentials.school_admin
        isValid =
          formData.schoolId === credentials.schoolId &&
          formData.adminId === credentials.adminId &&
          formData.password === credentials.password
        break
      }
      case "super_admin": {
        const credentials = dummyCredentials.super_admin
        isValid = formData.superAdminId === credentials.superAdminId && formData.password === credentials.password
        break
      }
      case "librarian": {
        const credentials = dummyCredentials.librarian
        isValid =
          formData.schoolId === credentials.schoolId &&
          formData.librarianId === credentials.librarianId &&
          formData.password === credentials.password
        break
      }
    }

    if (isValid) {
      // Store user info in localStorage for demo purposes
      localStorage.setItem("portalUserType", userType)
      localStorage.setItem("portalUserData", JSON.stringify(formData))

      // Navigate to appropriate portal dashboard
      router.push(`/portal/${userType}`)
    } else {
      alert("Invalid credentials. Please check the dummy credentials.")
    }
  }

  const renderLoginFields = () => {
    switch (userType) {
      case "student":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
              <Input
                name="schoolId"
                value={formData.schoolId}
                onChange={handleChange}
                placeholder="Enter school ID (SCH001)"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Student ID</label>
              <Input
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Enter student ID (STU001)"
                required
              />
            </div>
          </>
        )
      case "parent":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
              <Input
                name="schoolId"
                value={formData.schoolId}
                onChange={handleChange}
                placeholder="Enter school ID (SCH001)"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Student ID</label>
              <Input
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Enter student ID (STU001)"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Parent ID</label>
              <Input
                name="parentId"
                value={formData.parentId}
                onChange={handleChange}
                placeholder="Enter parent ID (PAR001)"
                required
              />
            </div>
          </>
        )
      case "teacher":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Teacher ID</label>
              <Input
                name="teacherId"
                value={formData.teacherId}
                onChange={handleChange}
                placeholder="Enter teacher ID (TCH001)"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
              <Input
                name="schoolId"
                value={formData.schoolId}
                onChange={handleChange}
                placeholder="Enter school ID (SCH001)"
                required
              />
            </div>
          </>
        )
      case "school_admin":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Admin ID</label>
              <Input
                name="adminId"
                value={formData.adminId}
                onChange={handleChange}
                placeholder="Enter admin ID (ADM001)"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
              <Input
                name="schoolId"
                value={formData.schoolId}
                onChange={handleChange}
                placeholder="Enter school ID (SCH001)"
                required
              />
            </div>
          </>
        )
      case "super_admin":
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Super Admin ID</label>
            <Input
              name="superAdminId"
              value={formData.superAdminId}
              onChange={handleChange}
              placeholder="Enter super admin ID (SUP001)"
              required
            />
          </div>
        )
      case "librarian":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Librarian ID</label>
              <Input
                name="librarianId"
                value={formData.librarianId}
                onChange={handleChange}
                placeholder="Enter librarian ID (LIB001)"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
              <Input
                name="schoolId"
                value={formData.schoolId}
                onChange={handleChange}
                placeholder="Enter school ID (SCH001)"
                required
              />
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
              <i className="ri-portal-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">School Portal</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Access your school's premium portal features</p>
        </div>

        {/* User Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Portal Access</label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {["student", "parent", "teacher", "school_admin", "super_admin", "librarian"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setUserType(type)}
                className={`px-2 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  userType === type
                    ? "bg-purple-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Credentials Card */}
        <Card2 className="p-4 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 mb-6">
          <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Demo Credentials:</h4>
          <div className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
            {userType === "student" && <p>School ID: SCH001, Student ID: STU001, Password: student123</p>}
            {userType === "parent" && (
              <p>School ID: SCH001, Student ID: STU001, Parent ID: PAR001, Password: parent123</p>
            )}
            {userType === "teacher" && <p>Teacher ID: TCH001, School ID: SCH001, Password: teacher123</p>}
            {userType === "school_admin" && <p>Admin ID: ADM001, School ID: SCH001, Password: admin123</p>}
            {userType === "super_admin" && <p>Super Admin ID: SUP001, Password: super123</p>}
            {userType === "librarian" && <p>Librarian ID: LIB001, School ID: SCH001, Password: librarian123</p>}
          </div>
        </Card2>

        <form onSubmit={handleLogin} className="space-y-6">
          {renderLoginFields()}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <i className="ri-lock-line text-gray-400 text-sm w-4 h-4 flex items-center justify-center"></i>
              </div>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              >
                <i
                  className={`${showPassword ? "ri-eye-off-line" : "ri-eye-line"} text-gray-400 text-sm w-4 h-4 flex items-center justify-center`}
                ></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-portal"
                name="remember-portal"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="remember-portal"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-500"
            >
              Forgot password?
            </Link>
          </div>

          <Button2 type="submit" className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
            Access Portal
          </Button2>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}




// "use client"

// import type React from "react"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import Button from "../../../components/ui/Button"
// import Input from "../../../components/ui/Input"

// export default function PortalLogin() {
//   const [userType, setUserType] = useState("student")
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     schoolId: "",
//   })
//   const [showPassword, setShowPassword] = useState(false)
//   const router = useRouter()

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault()

//     // Store user info and redirect to portal dashboard
//     localStorage.setItem("portalUserType", userType)
//     localStorage.setItem("portalUserData", JSON.stringify(formData))

//     router.push(`/portal/${userType}`)
//   }

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
//       style={{
//         backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
//         <div className="text-center mb-8">
//           <div className="flex justify-center mb-4">
//             <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
//               <i className="ri-portal-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">School Portal</h2>
//           <p className="text-gray-600 dark:text-gray-300 mt-2">Access your school's premium portal features</p>
//         </div>

//         {/* User Type Selection */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Portal Access</label>
//           <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
//             {["student", "teacher", "parent", "school_admin", "super_admin"].map((type) => (
//               <button
//                 key={type}
//                 type="button"
//                 onClick={() => setUserType(type)}
//                 className={`px-2 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
//                   userType === type
//                     ? "bg-purple-600 text-white"
//                     : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
//                 }`}
//               >
//                 {type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
//               </button>
//             ))}
//           </div>
//         </div>

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                 <i className="ri-mail-line text-gray-400 text-sm w-4 h-4 flex items-center justify-center"></i>
//               </div>
//               <Input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="pl-10"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
//             <Input
//               name="schoolId"
//               value={formData.schoolId}
//               onChange={handleChange}
//               placeholder="Enter school ID"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                 <i className="ri-lock-line text-gray-400 text-sm w-4 h-4 flex items-center justify-center"></i>
//               </div>
//               <Input
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter password"
//                 className="pl-10 pr-10"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//               >
//                 <i
//                   className={`${showPassword ? "ri-eye-off-line" : "ri-eye-line"} text-gray-400 text-sm w-4 h-4 flex items-center justify-center`}
//                 ></i>
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-portal"
//                 name="remember-portal"
//                 type="checkbox"
//                 className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
//               />
//               <label
//                 htmlFor="remember-portal"
//                 className="ml-2 block text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
//               >
//                 Remember me
//               </label>
//             </div>
//             <Link
//               href="/auth/forgot-password"
//               className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-500"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
//             Access Portal
//           </Button>
//         </form>

//         <div className="mt-6 text-center">
//           <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }