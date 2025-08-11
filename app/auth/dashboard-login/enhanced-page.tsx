"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Input from "../../../components/ui/Input"
import Button2 from "../../../components/ui/button2"
import Card2 from "../../../components/ui/card2"

export default function EnhancedDashboardLogin() {
  const [userType, setUserType] = useState("student")
  const [formData, setFormData] = useState({
    schoolId: "",
    studentId: "",
    parentId: "",
    teacherId: "",
    adminId: "",
    superAdminId: "",
    password: "",
    confirmPassword: "",
  })
  const [isRegistering, setIsRegistering] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  // Dummy credentials for testing
  const dummyCredentials = {
    student: { schoolId: "SCH001", studentId: "STU001", password: "student123" },
    parent: { schoolId: "SCH001", studentId: "STU001", parentId: "PAR001", password: "parent123" },
    teacher: { schoolId: "SCH001", teacherId: "TEA001", password: "teacher123" },
    "school-admin": { schoolId: "SCH001", adminId: "ADM001", password: "admin123" },
    "super-admin": { superAdminId: "SUPER001", password: "super123" },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple authentication logic with dummy credentials
    const credentials = dummyCredentials[userType as keyof typeof dummyCredentials]
    let isValid = false

    switch (userType) {
      case "student": {
        const cred = credentials as { schoolId: string; studentId: string; password: string }
        isValid =
          formData.schoolId === cred.schoolId &&
          formData.studentId === cred.studentId &&
          formData.password === cred.password
        break
      }
      case "parent": {
        const cred = credentials as { schoolId: string; studentId: string; parentId: string; password: string }
        isValid =
          formData.schoolId === cred.schoolId &&
          formData.studentId === cred.studentId &&
          formData.parentId === cred.parentId &&
          formData.password === cred.password
        break
      }
      case "teacher": {
        const cred = credentials as { schoolId: string; teacherId: string; password: string }
        isValid =
          formData.schoolId === cred.schoolId &&
          formData.teacherId === cred.teacherId &&
          formData.password === cred.password
        break
      }
      case "school-admin": {
        const cred = credentials as { schoolId: string; adminId: string; password: string }
        isValid =
          formData.schoolId === cred.schoolId &&
          formData.adminId === cred.adminId &&
          formData.password === cred.password
        break
      }
      case "super-admin": {
        const cred = credentials as { superAdminId: string; password: string }
        isValid = formData.superAdminId === cred.superAdminId && formData.password === cred.password
        break
      }
    }

    if (isValid) {
      // Store user info in localStorage for demo purposes
      localStorage.setItem("userType", userType)
      localStorage.setItem("userData", JSON.stringify(formData))

      // Navigate to appropriate dashboard
      router.push(`/dashboard/${userType}`)
    } else {
      alert("Invalid credentials. Please check the dummy credentials in the code.")
    }
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    // After registration, redirect to login
    setIsRegistering(false)
    alert("Registration successful! Please login with your credentials.")
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Teacher ID</label>
              <Input
                name="teacherId"
                value={formData.teacherId}
                onChange={handleChange}
                placeholder="Enter teacher ID (TEA001)"
                required
              />
            </div>
          </>
        )
      case "school-admin":
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Admin ID</label>
              <Input
                name="adminId"
                value={formData.adminId}
                onChange={handleChange}
                placeholder="Enter admin ID (ADM001)"
                required
              />
            </div>
          </>
        )
      case "super-admin":
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Super Admin ID</label>
            <Input
              name="superAdminId"
              value={formData.superAdminId}
              onChange={handleChange}
              placeholder="Enter super admin ID (SUPER001)"
              required
            />
          </div>
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
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
              <i className="ri-dashboard-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {isRegistering ? "Create Account" : "Dashboard Login"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {isRegistering ? "Register for dashboard access" : "Access your personalized dashboard"}
          </p>
        </div>

        {/* User Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">I am a</label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {["student", "parent", "teacher", "school-admin", "super-admin"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setUserType(type)}
                className={`px-2 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  userType === type
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-6">
          {!isRegistering && (
            <Card2 className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Demo Credentials:</h4>
              <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                {userType === "student" && <p>School ID: SCH001, Student ID: STU001, Password: student123</p>}
                {userType === "parent" && (
                  <p>School ID: SCH001, Student ID: STU001, Parent ID: PAR001, Password: parent123</p>
                )}
                {userType === "teacher" && <p>School ID: SCH001, Teacher ID: TEA001, Password: teacher123</p>}
                {userType === "school-admin" && <p>School ID: SCH001, Admin ID: ADM001, Password: admin123</p>}
                {userType === "super-admin" && <p>Super Admin ID: SUPER001, Password: super123</p>}
              </div>
            </Card2>
          )}

          {isRegistering && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <Input placeholder="First name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <Input placeholder="Last name" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <Input type="email" placeholder="Email address" required />
              </div>
            </>
          )}

          {renderLoginFields()}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="pr-10"
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

          {isRegistering && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirm Password
              </label>
              <Input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
              />
            </div>
          )}

          <Button2 type="submit" className="w-full" size="lg">
            {isRegistering ? "Create Account" : "Sign In"}
          </Button2>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
            >
              {isRegistering ? "Sign in here" : "Register here"}
            </button>
          </p>
        </div>

        <div className="mt-4 text-center">
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
// import Input from "../../../components/ui/Input"
// import Button2 from "../../../components/ui/button2"
// import Card2 from "../../../components/ui/card2"

// export default function EnhancedDashboardLogin() {
//   const [userType, setUserType] = useState("student")
//   const [formData, setFormData] = useState({
//     schoolId: "",
//     studentId: "",
//     parentId: "",
//     teacherId: "",
//     adminId: "",
//     superAdminId: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [isRegistering, setIsRegistering] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const router = useRouter()

//   // Dummy credentials for testing
//   const dummyCredentials = {
//     student: { schoolId: "SCH001", studentId: "STU001", password: "student123" },
//     parent: { schoolId: "SCH001", studentId: "STU001", parentId: "PAR001", password: "parent123" },
//     teacher: { schoolId: "SCH001", teacherId: "TEA001", password: "teacher123" },
//     school_admin: { schoolId: "SCH001", adminId: "ADM001", password: "admin123" },
//     super_admin: { superAdminId: "SUPER001", password: "super123" },
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault()

//     // Simple authentication logic with dummy credentials
//     const credentials = dummyCredentials[userType as keyof typeof dummyCredentials]
//     let isValid = false

//     switch (userType) {
//       case "student": {
//         const cred = credentials as { schoolId: string; studentId: string; password: string }
//         isValid =
//           formData.schoolId === cred.schoolId &&
//           formData.studentId === cred.studentId &&
//           formData.password === cred.password
//         break
//       }
//       case "parent": {
//         const cred = credentials as { schoolId: string; studentId: string; parentId: string; password: string }
//         isValid =
//           formData.schoolId === cred.schoolId &&
//           formData.studentId === cred.studentId &&
//           formData.parentId === cred.parentId &&
//           formData.password === cred.password
//         break
//       }
//       case "teacher": {
//         const cred = credentials as { schoolId: string; teacherId: string; password: string }
//         isValid =
//           formData.schoolId === cred.schoolId &&
//           formData.teacherId === cred.teacherId &&
//           formData.password === cred.password
//         break
//       }
//       case "school_admin": {
//         const cred = credentials as { schoolId: string; adminId: string; password: string }
//         isValid =
//           formData.schoolId === cred.schoolId &&
//           formData.adminId === cred.adminId &&
//           formData.password === cred.password
//         break
//       }
//       case "super_admin": {
//         const cred = credentials as { superAdminId: string; password: string }
//         isValid = formData.superAdminId === cred.superAdminId && formData.password === cred.password
//         break
//       }
//     }

//     if (isValid) {
//       // Store user info in localStorage for demo purposes
//       localStorage.setItem("userType", userType)
//       localStorage.setItem("userData", JSON.stringify(formData))

//       // Navigate to appropriate dashboard
//       router.push(`/dashboard/${userType}`)
//     } else {
//       alert("Invalid credentials. Please check the dummy credentials in the code.")
//     }
//   }

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match")
//       return
//     }
//     // After registration, redirect to login
//     setIsRegistering(false)
//     alert("Registration successful! Please login with your credentials.")
//   }

//   const renderLoginFields = () => {
//     switch (userType) {
//       case "student":
//         return (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
//               <Input
//                 name="schoolId"
//                 value={formData.schoolId}
//                 onChange={handleChange}
//                 placeholder="Enter school ID (SCH001)"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Student ID</label>
//               <Input
//                 name="studentId"
//                 value={formData.studentId}
//                 onChange={handleChange}
//                 placeholder="Enter student ID (STU001)"
//                 required
//               />
//             </div>
//           </>
//         )
//       case "parent":
//         return (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
//               <Input
//                 name="schoolId"
//                 value={formData.schoolId}
//                 onChange={handleChange}
//                 placeholder="Enter school ID (SCH001)"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Student ID</label>
//               <Input
//                 name="studentId"
//                 value={formData.studentId}
//                 onChange={handleChange}
//                 placeholder="Enter student ID (STU001)"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Parent ID</label>
//               <Input
//                 name="parentId"
//                 value={formData.parentId}
//                 onChange={handleChange}
//                 placeholder="Enter parent ID (PAR001)"
//                 required
//               />
//             </div>
//           </>
//         )
//       case "teacher":
//         return (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
//               <Input
//                 name="schoolId"
//                 value={formData.schoolId}
//                 onChange={handleChange}
//                 placeholder="Enter school ID (SCH001)"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Teacher ID</label>
//               <Input
//                 name="teacherId"
//                 value={formData.teacherId}
//                 onChange={handleChange}
//                 placeholder="Enter teacher ID (TEA001)"
//                 required
//               />
//             </div>
//           </>
//         )
//       case "school-admin":
//         return (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
//               <Input
//                 name="schoolId"
//                 value={formData.schoolId}
//                 onChange={handleChange}
//                 placeholder="Enter school ID (SCH001)"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Admin ID</label>
//               <Input
//                 name="adminId"
//                 value={formData.adminId}
//                 onChange={handleChange}
//                 placeholder="Enter admin ID (ADM001)"
//                 required
//               />
//             </div>
//           </>
//         )
//       case "super_admin":
//         return (
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Super Admin ID</label>
//             <Input
//               name="superAdminId"
//               value={formData.superAdminId}
//               onChange={handleChange}
//               placeholder="Enter super admin ID (SUPER001)"
//               required
//             />
//           </div>
//         )
//       default:
//         return null
//     }
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
//             <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
//               <i className="ri-dashboard-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//             {isRegistering ? "Create Account" : "Dashboard Login"}
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 mt-2">
//             {isRegistering ? "Register for dashboard access" : "Access your personalized dashboard"}
//           </p>
//         </div>

//         {/* User Type Selection */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">I am a</label>
//           <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
//             {["student", "parent", "teacher", "school_admin", "super_admin"].map((type) => (
//               <button
//                 key={type}
//                 type="button"
//                 onClick={() => setUserType(type)}
//                 className={`px-2 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
//                   userType === type
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
//                 }`}
//               >
//                 {type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
//               </button>
//             ))}
//           </div>
//         </div>

//         <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-6">
//           {!isRegistering && (
//             <Card2 className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
//               <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Demo Credentials:</h4>
//               <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
//                 {userType === "student" && <p>School ID: SCH001, Student ID: STU001, Password: student123</p>}
//                 {userType === "parent" && (
//                   <p>School ID: SCH001, Student ID: STU001, Parent ID: PAR001, Password: parent123</p>
//                 )}
//                 {userType === "teacher" && <p>School ID: SCH001, Teacher ID: TEA001, Password: teacher123</p>}
//                 {userType === "school_admin" && <p>School ID: SCH001, Admin ID: ADM001, Password: admin123</p>}
//                 {userType === "super_admin" && <p>Super Admin ID: SUPER001, Password: super123</p>}
//               </div>
//             </Card2>
//           )}

//           {isRegistering && (
//             <>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
//                   <Input placeholder="First name" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
//                   <Input placeholder="Last name" required />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
//                 <Input type="email" placeholder="Email address" required />
//               </div>
//             </>
//           )}

//           {renderLoginFields()}

//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
//             <div className="relative">
//               <Input
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter password"
//                 className="pr-10"
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

//           {isRegistering && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Confirm Password
//               </label>
//               <Input
//                 name="confirmPassword"
//                 type="password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Confirm password"
//                 required
//               />
//             </div>
//           )}

//           <Button2 type="submit" className="w-full" size="lg">
//             {isRegistering ? "Create Account" : "Sign In"}
//           </Button2>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600 dark:text-gray-300">
//             {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
//             <button
//               onClick={() => setIsRegistering(!isRegistering)}
//               className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
//             >
//               {isRegistering ? "Sign in here" : "Register here"}
//             </button>
//           </p>
//         </div>

//         <div className="mt-4 text-center">
//           <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }
