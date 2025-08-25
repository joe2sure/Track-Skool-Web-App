"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import Input from "@/components/ui/Input"

export default function EnhancedDashboardLogin() {
  const [userType, setUserType] = useState("student")
  const [formData, setFormData] = useState({
    schoolId: "",
    studentId: "",
    parentId: "",
    teacherId: "",
    adminId: "",
    superAdminId: "",
    librarianId: "",
    hostelId: "",
    registrarId: "",
    password: "",
    confirmPassword: "",
  })
  const [isRegistering, setIsRegistering] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
    const savedUserType = localStorage.getItem("userType")
    if (savedUserType) {
      setUserType(savedUserType)
    }
  }, [])

  const dummyCredentials = {
    student: { schoolId: "SCH001", studentId: "STU001", password: "student123" },
    parent: { schoolId: "SCH001", studentId: "STU001", parentId: "PAR001", password: "parent123" },
    teacher: { schoolId: "SCH001", teacherId: "TEA001", password: "teacher123" },
    "school-admin": { schoolId: "SCH001", adminId: "ADM001", password: "admin123" },
    "super-admin": { superAdminId: "SUPER001", password: "super123" },
    librarian: { schoolId: "SCH001", librarianId: "LIB001", password: "librarian123" },
    hostel: { schoolId: "SCH001", hostelId: "HOS001", password: "hostel123" },
    registrar: { schoolId: "SCH001", registrarId: "REG001", password: "registrar123" },
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (isRegistering) {
      if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters"
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }
    } else {
      if (!formData.password) {
        newErrors.password = "Password is required"
      }

      // Validate required fields based on user type
      switch (userType) {
        case "student":
          if (!formData.schoolId) newErrors.schoolId = "School ID is required"
          if (!formData.studentId) newErrors.studentId = "Student ID is required"
          break
        case "parent":
          if (!formData.schoolId) newErrors.schoolId = "School ID is required"
          if (!formData.studentId) newErrors.studentId = "Student ID is required"
          if (!formData.parentId) newErrors.parentId = "Parent ID is required"
          break
        case "teacher":
          if (!formData.schoolId) newErrors.schoolId = "School ID is required"
          if (!formData.teacherId) newErrors.teacherId = "Teacher ID is required"
          break
        case "school-admin":
          if (!formData.schoolId) newErrors.schoolId = "School ID is required"
          if (!formData.adminId) newErrors.adminId = "Admin ID is required"
          break
        case "super-admin":
          if (!formData.superAdminId) newErrors.superAdminId = "Super Admin ID is required"
          break
        case "librarian":
          if (!formData.schoolId) newErrors.schoolId = "School ID is required"
          if (!formData.librarianId) newErrors.librarianId = "Librarian ID is required"
          break
        case "hostel":
          if (!formData.schoolId) newErrors.schoolId = "School ID is required"
          if (!formData.hostelId) newErrors.hostelId = "Hostel ID is required"
          break
        case "registrar":
          if (!formData.schoolId) newErrors.schoolId = "School ID is required"
          if (!formData.registrarId) newErrors.registrarId = "Registrar ID is required"
          break
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

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
      case "librarian": {
        const cred = credentials as { schoolId: string; librarianId: string; password: string }
        isValid =
          formData.schoolId === cred.schoolId &&
          formData.librarianId === cred.librarianId &&
          formData.password === cred.password
        break
      }
      case "hostel": {
        const cred = credentials as typeof dummyCredentials.hostel
        isValid =
          formData.schoolId === cred.schoolId &&
          formData.hostelId === cred.hostelId &&
          formData.password === cred.password
        break
      }
      case "registrar": {
        const cred = credentials as { schoolId: string; registrarId: string; password: string }
        isValid =
          formData.schoolId === cred.schoolId &&
          formData.registrarId === cred.registrarId &&
          formData.password === cred.password
        break
      }
    }

    setIsLoading(false)

    if (isValid) {
      if (isClient) {
        localStorage.setItem("userType", userType)
        localStorage.setItem("userData", JSON.stringify(formData))
      }
      router.push(`/dashboard/${userType}`)
    } else {
      setErrors({ general: "Invalid credentials. Please check your login details." })
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsRegistering(false)
    alert("Registration successful! Please login with your credentials.")
  }

  const FloatingLabelInput = ({
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
    showPasswordToggle = false,
    showPassword = false,
    onTogglePassword,
  }: {
    name: string
    type?: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    showPasswordToggle?: boolean
    showPassword?: boolean
    onTogglePassword?: () => void
  }) => (
    <div className="floating-label-input relative">
      <Input
        name={name}
        type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
        className={`peer pt-6 pb-2 px-3 border-2 transition-all duration-200 focus:border-blue-500 ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } ${showPasswordToggle ? "pr-12" : ""}`}
      />
      <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
        {placeholder}
      </label>
      {showPasswordToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <i className={`${showPassword ? "ri-eye-off-line" : "ri-eye-line"} text-lg`}></i>
        </button>
      )}
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
    </div>
  )

  const renderLoginFields = () => {
    switch (userType) {
      case "student":
        return (
          <>
            <FloatingLabelInput
              name="schoolId"
              placeholder="School ID (SCH001)"
              value={formData.schoolId}
              onChange={handleChange}
              required
            />
            <FloatingLabelInput
              name="studentId"
              placeholder="Student ID (STU001)"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
          </>
        )
      case "parent":
        return (
          <>
            <FloatingLabelInput
              name="schoolId"
              placeholder="School ID (SCH001)"
              value={formData.schoolId}
              onChange={handleChange}
              required
            />
            <FloatingLabelInput
              name="studentId"
              placeholder="Student ID (STU001)"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
            <FloatingLabelInput
              name="parentId"
              placeholder="Parent ID (PAR001)"
              value={formData.parentId}
              onChange={handleChange}
              required
            />
          </>
        )
      case "teacher":
        return (
          <>
            <FloatingLabelInput
              name="schoolId"
              placeholder="School ID (SCH001)"
              value={formData.schoolId}
              onChange={handleChange}
              required
            />
            <FloatingLabelInput
              name="teacherId"
              placeholder="Teacher ID (TEA001)"
              value={formData.teacherId}
              onChange={handleChange}
              required
            />
          </>
        )
      case "school-admin":
        return (
          <>
            <FloatingLabelInput
              name="schoolId"
              placeholder="School ID (SCH001)"
              value={formData.schoolId}
              onChange={handleChange}
              required
            />
            <FloatingLabelInput
              name="adminId"
              placeholder="Admin ID (ADM001)"
              value={formData.adminId}
              onChange={handleChange}
              required
            />
          </>
        )
      case "super-admin":
        return (
          <FloatingLabelInput
            name="superAdminId"
            placeholder="Super Admin ID (SUPER001)"
            value={formData.superAdminId}
            onChange={handleChange}
            required
          />
        )
      case "librarian":
        return (
          <>
            <FloatingLabelInput
              name="schoolId"
              placeholder="School ID (SCH001)"
              value={formData.schoolId}
              onChange={handleChange}
              required
            />
            <FloatingLabelInput
              name="librarianId"
              placeholder="Librarian ID (LIB001)"
              value={formData.librarianId}
              onChange={handleChange}
              required
            />
          </>
        )
      case "hostel":
        return (
          <>
            <FloatingLabelInput
              name="schoolId"
              placeholder="School ID (SCH001)"
              value={formData.schoolId}
              onChange={handleChange}
              required
            />
            <FloatingLabelInput
              name="hostelId"
              placeholder="Hostel ID (HOS001)"
              value={formData.hostelId}
              onChange={handleChange}
              required
            />
          </>
        )
      case "registrar":
        return (
          <>
            <FloatingLabelInput
              name="schoolId"
              placeholder="School ID (SCH001)"
              value={formData.schoolId}
              onChange={handleChange}
              required
            />
            <FloatingLabelInput
              name="registrarId"
              placeholder="Registrar ID (REG001)"
              value={formData.registrarId}
              onChange={handleChange}
              required
            />
          </>
        )
      default:
        return null
    }
  }

  const renderDemoCredentials = () => {
    if (!isClient) return null

    return (
      <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2 flex items-center">
          <i className="ri-information-line mr-2"></i>
          Demo Credentials:
        </h4>
        <div className="text-sm text-blue-800 dark:text-blue-200">
          {userType === "student" && <p>School ID: SCH001, Student ID: STU001, Password: student123</p>}
          {userType === "parent" && (
            <p>School ID: SCH001, Student ID: STU001, Parent ID: PAR001, Password: parent123</p>
          )}
          {userType === "teacher" && <p>School ID: SCH001, Teacher ID: TEA001, Password: teacher123</p>}
          {userType === "school-admin" && <p>School ID: SCH001, Admin ID: ADM001, Password: admin123</p>}
          {userType === "super-admin" && <p>Super Admin ID: SUPER001, Password: super123</p>}
          {userType === "librarian" && <p>School ID: SCH001, Librarian ID: LIB001, Password: librarian123</p>}
          {userType === "hostel" && <p>School ID: SCH001, Hostel ID: HOS001, Password: hostel123</p>}
          {userType === "registrar" && <p>School ID: SCH001, Registrar ID: REG001, Password: registrar123</p>}
        </div>
      </Card>
    )
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url('/modern-university-campus-students.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-float [animation-delay:0s]"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-float [animation-delay:2s]"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-indigo-400/10 rounded-full animate-float [animation-delay:1s]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                <i className="ri-dashboard-line text-white text-3xl"></i>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {isRegistering ? "Create Account" : "Dashboard Login"}
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              {isRegistering ? "Register for dashboard access" : "Access your personalized dashboard"}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">I am a</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-xl">
                {[
                  "student",
                  "parent",
                  "teacher",
                  "school-admin",
                  "super-admin",
                  "librarian",
                  "hostel",
                  "registrar",
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setUserType(type)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                      userType === type
                        ? "bg-blue-600 text-white shadow-md transform scale-105"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </button>
                ))}
              </div>
            </div>

            {!isRegistering && renderDemoCredentials()}

            <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-6">
              {isRegistering && (
                <div className="grid grid-cols-2 gap-4">
                  <FloatingLabelInput name="firstName" placeholder="First Name" value="" onChange={() => {}} required />
                  <FloatingLabelInput name="lastName" placeholder="Last Name" value="" onChange={() => {}} required />
                </div>
              )}

              {renderLoginFields()}

              <FloatingLabelInput
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                showPasswordToggle
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
              />

              {isRegistering && (
                <FloatingLabelInput
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  showPasswordToggle
                  showPassword={showConfirmPassword}
                  onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}

              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm flex items-center">
                    <i className="ri-error-warning-line mr-2"></i>
                    {errors.general}
                  </p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {isRegistering ? "Creating Account..." : "Signing In..."}
                  </div>
                ) : (
                  <>
                    <i className={`${isRegistering ? "ri-user-add-line" : "ri-login-box-line"} mr-2`}></i>
                    {isRegistering ? "Create Account" : "Sign In"}
                  </>
                )}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                >
                  {isRegistering ? "Sign in here" : "Register here"}
                </button>
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center"
              >
                <i className="ri-arrow-left-line mr-1"></i>
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}





// "use client"

// import type React from "react"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import Button2 from "@/components/ui/Button2"
// import Card2 from "@/components/ui/Card2"

// // Modern animated input component
// const ModernInput = ({ 
//   label, 
//   name, 
//   type = "text", 
//   value, 
//   onChange, 
//   placeholder, 
//   required = false,
//   error = "",
//   className = "",
//   showPasswordToggle = false,
//   showPassword = false,
//   onTogglePassword = () => {}
// }: {
//   label: string
//   name: string
//   type?: string
//   value: string
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
//   placeholder: string
//   required?: boolean
//   error?: string
//   className?: string
//   showPasswordToggle?: boolean
//   showPassword?: boolean
//   onTogglePassword?: () => void
// }) => {
//   const [isFocused, setIsFocused] = useState(false)
//   const hasValue = value.length > 0

//   return (
//     <div className={`relative ${className}`}>
//       <div className="relative">
//         <input
//           name={name}
//           type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
//           value={value}
//           onChange={onChange}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           required={required}
//           className={`
//             w-full h-14 px-4 pt-6 pb-2 bg-gray-50 dark:bg-gray-800 border-2 rounded-xl
//             transition-all duration-300 ease-in-out outline-none text-gray-900 dark:text-white
//             ${isFocused ? 'border-blue-500 bg-white dark:bg-gray-700 shadow-lg transform scale-[1.02]' : 'border-gray-200 dark:border-gray-600'}
//             ${error ? 'border-red-500' : ''}
//             ${hasValue || isFocused ? 'pt-6' : 'pt-4'}
//           `}
//           placeholder={isFocused ? placeholder : ''}
//         />
//         <label className={`
//           absolute left-4 transition-all duration-300 ease-in-out pointer-events-none
//           ${hasValue || isFocused 
//             ? 'top-2 text-xs text-blue-600 dark:text-blue-400 transform scale-90' 
//             : 'top-4 text-base text-gray-500 dark:text-gray-400'
//           }
//         `}>
//           {label}
//         </label>
        
//         {showPasswordToggle && (
//           <button
//             type="button"
//             onClick={onTogglePassword}
//             className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
//           >
//             <i className={`${showPassword ? "ri-eye-off-line" : "ri-eye-line"} text-xl`}></i>
//           </button>
//         )}
//       </div>
      
//       {error && (
//         <p className="mt-2 text-sm text-red-500 flex items-center">
//           <i className="ri-error-warning-line mr-1"></i>
//           {error}
//         </p>
//       )}
//     </div>
//   )
// }

// // Loading button component
// const LoadingButton = ({ 
//   children, 
//   loading = false, 
//   onClick, 
//   type = "button",
//   className = "",
//   ...props 
// }: {
//   children: React.ReactNode
//   loading?: boolean
//   onClick?: () => void
//   type?: "button" | "submit"
//   className?: string
//   [key: string]: any
// }) => {
//   return (
//     <Button2
//       type={type}
//       onClick={onClick}
//       disabled={loading}
//       className={`${className} ${loading ? 'opacity-80 cursor-not-allowed' : ''} transition-all duration-300`}
//       {...props}
//     >
//       {loading ? (
//         <div className="flex items-center">
//           <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//           Processing...
//         </div>
//       ) : (
//         children
//       )}
//     </Button2>
//   )
// }

// export default function EnhancedDashboardLogin() {
//   const [userType, setUserType] = useState(
//     (typeof window !== "undefined" && (localStorage.getItem("userType") as string)) || "student"
//   )
//   const [formData, setFormData] = useState({
//     schoolId: "",
//     studentId: "",
//     parentId: "",
//     teacherId: "",
//     adminId: "",
//     superAdminId: "",
//     librarianId: "",
//     hostelId: "",
//     registrarId: "",
//     password: "",
//     confirmPassword: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//   })
//   const [isRegistering, setIsRegistering] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [errors, setErrors] = useState<Record<string, string>>({})
//   const router = useRouter()

//   const dummyCredentials = {
//     student: { schoolId: "SCH001", studentId: "STU001", password: "student123" },
//     parent: { schoolId: "SCH001", studentId: "STU001", parentId: "PAR001", password: "parent123" },
//     teacher: { schoolId: "SCH001", teacherId: "TEA001", password: "teacher123" },
//     "school-admin": { schoolId: "SCH001", adminId: "ADM001", password: "admin123" },
//     "super-admin": { superAdminId: "SUPER001", password: "super123" },
//     librarian: { schoolId: "SCH001", librarianId: "LIB001", password: "librarian123" },
//     hostel: { schoolId: "SCH001", hostelId: "HOS001", password: "hostel123" }, 
//     registrar: { schoolId: "SCH001", registrarId: "REG001", password: "registrar123" },
//   }

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {}

//     if (isRegistering) {
//       if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
//       if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
//       if (!formData.email.trim()) {
//         newErrors.email = "Email is required"
//       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         newErrors.email = "Email is invalid"
//       }
//       if (formData.password.length < 6) {
//         newErrors.password = "Password must be at least 6 characters"
//       }
//       if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = "Passwords do not match"
//       }
//     }

//     if (!formData.password.trim()) newErrors.password = "Password is required"

//     // Validate based on user type
//     switch (userType) {
//       case "student":
//         if (!formData.schoolId.trim()) newErrors.schoolId = "School ID is required"
//         if (!formData.studentId.trim()) newErrors.studentId = "Student ID is required"
//         break
//       case "parent":
//         if (!formData.schoolId.trim()) newErrors.schoolId = "School ID is required"
//         if (!formData.studentId.trim()) newErrors.studentId = "Student ID is required"
//         if (!formData.parentId.trim()) newErrors.parentId = "Parent ID is required"
//         break
//       case "teacher":
//         if (!formData.schoolId.trim()) newErrors.schoolId = "School ID is required"
//         if (!formData.teacherId.trim()) newErrors.teacherId = "Teacher ID is required"
//         break
//       case "school-admin":
//         if (!formData.schoolId.trim()) newErrors.schoolId = "School ID is required"
//         if (!formData.adminId.trim()) newErrors.adminId = "Admin ID is required"
//         break
//       case "super-admin":
//         if (!formData.superAdminId.trim()) newErrors.superAdminId = "Super Admin ID is required"
//         break
//       case "librarian":
//         if (!formData.schoolId.trim()) newErrors.schoolId = "School ID is required"
//         if (!formData.librarianId.trim()) newErrors.librarianId = "Librarian ID is required"
//         break
//       case "hostel":
//         if (!formData.schoolId.trim()) newErrors.schoolId = "School ID is required"
//         if (!formData.hostelId.trim()) newErrors.hostelId = "Hostel ID is required"
//         break
//       case "registrar":
//         if (!formData.schoolId.trim()) newErrors.schoolId = "School ID is required"
//         if (!formData.registrarId.trim()) newErrors.registrarId = "Registrar ID is required"
//         break
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" })
//     }
//   }

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     if (!validateForm()) return

//     setLoading(true)

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000))

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
//       case "school-admin": {
//         const cred = credentials as { schoolId: string; adminId: string; password: string }
//         isValid =
//           formData.schoolId === cred.schoolId &&
//           formData.adminId === cred.adminId &&
//           formData.password === cred.password
//         break
//       }
//       case "super-admin": {
//         const cred = credentials as { superAdminId: string; password: string }
//         isValid = formData.superAdminId === cred.superAdminId && formData.password === cred.password
//         break
//       }
//       case "librarian": {
//         const cred = credentials as { schoolId: string; librarianId: string; password: string }
//         isValid =
//           formData.schoolId === cred.schoolId &&
//           formData.librarianId === cred.librarianId &&
//           formData.password === cred.password
//         break
//       }
//       case "hostel": {
//         const cred = credentials as typeof dummyCredentials.hostel
//         isValid = formData.schoolId === cred.schoolId && formData.hostelId === cred.hostelId && formData.password === cred.password
//         break
//       }
//       case "registrar": {
//         const cred = credentials as { schoolId: string; registrarId: string; password: string }
//         isValid = formData.schoolId === cred.schoolId && formData.registrarId === cred.registrarId && formData.password === cred.password
//         break
//       }
//     }

//     setLoading(false)

//     if (isValid) {
//       localStorage.setItem("userType", userType)
//       localStorage.setItem("userData", JSON.stringify(formData))
//       router.push(`/dashboard/${userType}`)
//     } else {
//       setErrors({ general: "Invalid credentials. Please check your login details." })
//     }
//   }

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     if (!validateForm()) return

//     setLoading(true)
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2500))
    
//     setLoading(false)
//     setIsRegistering(false)
//     alert("Registration successful! Please login with your credentials.")
//   }

//   const renderLoginFields = () => {
//     switch (userType) {
//       case "student":
//         return (
//           <>
//             <ModernInput
//               label="School ID"
//               name="schoolId"
//               value={formData.schoolId}
//               onChange={handleChange}
//               placeholder="Enter your school ID"
//               required
//               error={errors.schoolId}
//             />
//             <ModernInput
//               label="Student ID"
//               name="studentId"
//               value={formData.studentId}
//               onChange={handleChange}
//               placeholder="Enter your student ID"
//               required
//               error={errors.studentId}
//             />
//           </>
//         )
//       case "parent":
//         return (
//           <>
//             <ModernInput
//               label="School ID"
//               name="schoolId"
//               value={formData.schoolId}
//               onChange={handleChange}
//               placeholder="Enter school ID"
//               required
//               error={errors.schoolId}
//             />
//             <ModernInput
//               label="Student ID"
//               name="studentId"
//               value={formData.studentId}
//               onChange={handleChange}
//               placeholder="Enter your ward's student ID"
//               required
//               error={errors.studentId}
//             />
//             <ModernInput
//               label="Parent ID"
//               name="parentId"
//               value={formData.parentId}
//               onChange={handleChange}
//               placeholder="Enter your parent ID"
//               required
//               error={errors.parentId}
//             />
//           </>
//         )
//       case "teacher":
//         return (
//           <>
//             <ModernInput
//               label="School ID"
//               name="schoolId"
//               value={formData.schoolId}
//               onChange={handleChange}
//               placeholder="Enter school ID"
//               required
//               error={errors.schoolId}
//             />
//             <ModernInput
//               label="Teacher ID"
//               name="teacherId"
//               value={formData.teacherId}
//               onChange={handleChange}
//               placeholder="Enter your teacher ID"
//               required
//               error={errors.teacherId}
//             />
//           </>
//         )
//       case "school-admin":
//         return (
//           <>
//             <ModernInput
//               label="School ID"
//               name="schoolId"
//               value={formData.schoolId}
//               onChange={handleChange}
//               placeholder="Enter school ID"
//               required
//               error={errors.schoolId}
//             />
//             <ModernInput
//               label="Admin ID"
//               name="adminId"
//               value={formData.adminId}
//               onChange={handleChange}
//               placeholder="Enter your admin ID"
//               required
//               error={errors.adminId}
//             />
//           </>
//         )
//       case "super-admin":
//         return (
//           <ModernInput
//             label="Super Admin ID"
//             name="superAdminId"
//             value={formData.superAdminId}
//             onChange={handleChange}
//             placeholder="Enter your super admin ID"
//             required
//             error={errors.superAdminId}
//           />
//         )
//       case "librarian":
//         return (
//           <>
//             <ModernInput
//               label="School ID"
//               name="schoolId"
//               value={formData.schoolId}
//               onChange={handleChange}
//               placeholder="Enter school ID"
//               required
//               error={errors.schoolId}
//             />
//             <ModernInput
//               label="Librarian ID"
//               name="librarianId"
//               value={formData.librarianId}
//               onChange={handleChange}
//               placeholder="Enter your librarian ID"
//               required
//               error={errors.librarianId}
//             />
//           </>
//         )
//       case "hostel":
//         return (
//           <>
//             <ModernInput
//               label="School ID"
//               name="schoolId"
//               value={formData.schoolId}
//               onChange={handleChange}
//               placeholder="Enter school ID"
//               required
//               error={errors.schoolId}
//             />
//             <ModernInput
//               label="Hostel ID"
//               name="hostelId"
//               value={formData.hostelId}
//               onChange={handleChange}
//               placeholder="Enter your hostel ID"
//               required
//               error={errors.hostelId}
//             />
//           </>
//         )
//       case "registrar":
//         return (
//           <>
//             <ModernInput
//               label="School ID"
//               name="schoolId"
//               value={formData.schoolId}
//               onChange={handleChange}
//               placeholder="Enter school ID"
//               required
//               error={errors.schoolId}
//             />
//             <ModernInput
//               label="Registrar ID"
//               name="registrarId"
//               value={formData.registrarId}
//               onChange={handleChange}
//               placeholder="Enter your registrar ID"
//               required
//               error={errors.registrarId}
//             />
//           </>
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-teal-900/30"></div>
      
//       {/* Floating geometric shapes */}
//       <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-float"></div>
//       <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-float delay-1000"></div>
//       <div className="absolute bottom-32 left-20 w-12 h-12 bg-teal-500/20 rounded-full animate-float delay-2000"></div>
//       <div className="absolute top-60 left-1/3 w-8 h-8 bg-green-500/20 rounded-full animate-float delay-3000"></div>
      
//       <div className="relative z-10 w-full max-w-md">
//         <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-6">
//               <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl transform hover:rotate-12 transition-transform duration-300">
//                 <i className="ri-dashboard-line text-white text-3xl"></i>
//               </div>
//             </div>
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//               {isRegistering ? "Join TrackSkool" : "Welcome Back"}
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300">
//               {isRegistering ? "Create your account to get started" : "Sign in to access your dashboard"}
//             </p>
//           </div>

//           {/* User Type Selection */}
//           <div className="mb-8">
//             <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
//               Select Your Role
//             </label>
//             <div className="grid grid-cols-2 gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
//               {["student", "parent", "teacher", "school-admin", "super-admin", "librarian", "hostel", "registrar"].map((type) => (
//                 <button
//                   key={type}
//                   type="button"
//                   onClick={() => setUserType(type)}
//                   className={`px-3 py-3 text-xs font-medium rounded-xl transition-all duration-300 whitespace-nowrap transform ${
//                     userType === type
//                       ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
//                       : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50"
//                   }`}
//                 >
//                   {type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Demo Credentials Card */}
//           {!isRegistering && (
//             <Card2 className="p-4 mb-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200/50 dark:border-blue-800/50 rounded-2xl">
//               <div className="flex items-start">
//                 <i className="ri-information-line text-blue-600 dark:text-blue-400 text-lg mr-2 mt-0.5"></i>
//                 <div>
//                   <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Demo Credentials</h4>
//                   <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
//                     {userType === "student" && <p>School: <strong>SCH001</strong> | Student: <strong>STU001</strong> | Pass: <strong>student123</strong></p>}
//                     {userType === "parent" && <p>School: <strong>SCH001</strong> | Student: <strong>STU001</strong> | Parent: <strong>PAR001</strong> | Pass: <strong>parent123</strong></p>}
//                     {userType === "teacher" && <p>School: <strong>SCH001</strong> | Teacher: <strong>TEA001</strong> | Pass: <strong>teacher123</strong></p>}
//                     {userType === "school-admin" && <p>School: <strong>SCH001</strong> | Admin: <strong>ADM001</strong> | Pass: <strong>admin123</strong></p>}
//                     {userType === "super-admin" && <p>Super Admin: <strong>SUPER001</strong> | Pass: <strong>super123</strong></p>}
//                     {userType === "librarian" && <p>School: <strong>SCH001</strong> | Librarian: <strong>LIB001</strong> | Pass: <strong>librarian123</strong></p>}
//                     {userType === "hostel" && <p>School: <strong>SCH001</strong> | Hostel: <strong>HOS001</strong> | Pass: <strong>hostel123</strong></p>}
//                     {userType === "registrar" && <p>School: <strong>SCH001</strong> | Registrar: <strong>REG001</strong> | Pass: <strong>registrar123</strong></p>}
//                   </div>
//                 </div>
//               </div>
//             </Card2>
//           )}

//           {/* Form */}
//           <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-6">
//             {/* Registration Fields */}
//             {isRegistering && (
//               <>
//                 <div className="grid grid-cols-2 gap-4">
//                   <ModernInput
//                     label="First Name"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter first name"
//                     required
//                     error={errors.firstName}
//                   />
//                   <ModernInput
//                     label="Last Name"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter last name"
//                     required
//                     error={errors.lastName}
//                   />
//                 </div>
//                 <ModernInput
//                   label="Email Address"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                   error={errors.email}
//                 />
//               </>
//             )}

//             {/* Dynamic Login Fields */}
//             {renderLoginFields()}

//             {/* Password Field */}
//             <ModernInput
//               label="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               required
//               error={errors.password}
//               showPasswordToggle
//               showPassword={showPassword}
//               onTogglePassword={() => setShowPassword(!showPassword)}
//             />

//             {/* Confirm Password for Registration */}
//             {isRegistering && (
//               <ModernInput
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Confirm your password"
//                 required
//                 error={errors.confirmPassword}
//                 showPasswordToggle
//                 showPassword={showConfirmPassword}
//                 onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
//               />
//             )}

//             {/* General Error */}
//             {errors.general && (
//               <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
//                 <p className="text-red-600 dark:text-red-400 text-sm flex items-center">
//                   <i className="ri-error-warning-line mr-2"></i>
//                   {errors.general}
//                 </p>
//               </div>
//             )}

//             {/* Submit Button */}
//             <LoadingButton
//               type="submit"
//               loading={loading}
//               className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
//             >
//               {isRegistering ? (
//                 <>
//                   <i className="ri-user-add-line mr-2 text-xl"></i>
//                   Create Account
//                 </>
//               ) : (
//                 <>
//                   <i className="ri-login-box-line mr-2 text-xl"></i>
//                   Sign In
//                 </>
//               )}
//             </LoadingButton>
//           </form>

//           {/* Toggle between Login/Register */}
//           <div className="mt-8 text-center">
//             <p className="text-gray-600 dark:text-gray-300">
//               {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
//               <button
//                 onClick={() => {
//                   setIsRegistering(!isRegistering)
//                   setErrors({})
//                 }}
//                 className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
//               >
//                 {isRegistering ? "Sign in here" : "Register here"}
//               </button>
//             </p>
//           </div>

//           {/* Back to Home */}
//           <div className="mt-6 text-center">
//             <Link 
//               href="/" 
//               className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
//             >
//               <i className="ri-arrow-left-line mr-2"></i>
//               Back to Home
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//           }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .delay-1000 {
//           animation-delay: 1s;
//         }
        
//         .delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .delay-3000 {
//           animation-delay: 3s;
//         }
//       `}</style>
//     </div>
//   )
// }