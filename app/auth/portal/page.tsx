"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Button from "../../../components/ui/Button"
import Input from "../../../components/ui/Input"

export default function PortalLogin() {
  const [userType, setUserType] = useState("student")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    schoolId: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Store user info and redirect to portal dashboard
    localStorage.setItem("portalUserType", userType)
    localStorage.setItem("portalUserData", JSON.stringify(formData))

    router.push(`/portal/${userType}`)
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
            {["student", "teacher", "parent", "school_admin", "super_admin"].map((type) => (
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

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <i className="ri-mail-line text-gray-400 text-sm w-4 h-4 flex items-center justify-center"></i>
              </div>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School ID</label>
            <Input
              name="schoolId"
              value={formData.schoolId}
              onChange={handleChange}
              placeholder="Enter school ID"
              required
            />
          </div>

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

          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
            Access Portal
          </Button>
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