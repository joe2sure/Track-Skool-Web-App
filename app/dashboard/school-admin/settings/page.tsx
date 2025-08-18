// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { SettingsIcon, BookOpen, Users, Bell, Shield, Database, Save, RotateCcw } from "lucide-react"
import { Label } from "@/components/ui/parent/label"
import { Input } from "@/components/ui/parent/input"

const settingsCategories = [
  { id: "general", name: "General", icon: SettingsIcon },
  { id: "academic", name: "Academic", icon: BookOpen },
  { id: "users", name: "Users & Roles", icon: Users },
  { id: "notifications", name: "Notifications", icon: Bell },
  { id: "security", name: "Security", icon: Shield },
  { id: "system", name: "System", icon: Database },
]

export default function SettingsPage() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [schoolInfo, setSchoolInfo] = useState({
    name: "Greenwood High School",
    code: "GHS001",
    address: "123 Education Street, City",
    phone: "+1 (555) 123-4567",
    currentYear: "2023-2024",
    startDate: "01/09/2023",
    endDate: "30/06/2024",
  })

  const handleInputChange = (field: string, value: string) => {
    setSchoolInfo((prev) => ({ ...prev, [field]: value }))
  }

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">School Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="schoolName">School Name</Label>
            <Input
              id="schoolName"
              value={schoolInfo.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="schoolCode">School Code</Label>
            <Input
              id="schoolCode"
              value={schoolInfo.code}
              onChange={(e) => handleInputChange("code", e.target.value)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={schoolInfo.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={schoolInfo.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="mt-2"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Academic Year</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="currentYear">Current Year</Label>
            <Input
              id="currentYear"
              value={schoolInfo.currentYear}
              onChange={(e) => handleInputChange("currentYear", e.target.value)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={schoolInfo.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              type="date"
              value={schoolInfo.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
              className="mt-2"
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-4 pt-6">
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
        <Button variant="outline">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>
    </div>
  )

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case "general":
        return renderGeneralSettings()
      case "academic":
        return (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Academic settings will be implemented here</p>
          </div>
        )
      case "users":
        return (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">User and role management settings will be implemented here</p>
          </div>
        )
      case "notifications":
        return (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Notification settings will be implemented here</p>
          </div>
        )
      case "security":
        return (
          <div className="text-center py-12">
            <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Security settings will be implemented here</p>
          </div>
        )
      case "system":
        return (
          <div className="text-center py-12">
            <Database className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">System settings will be implemented here</p>
          </div>
        )
      default:
        return renderGeneralSettings()
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage school system settings and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <Card>
          <CardContent className="p-6">
            <nav className="space-y-2">
              {settingsCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-3" />
                  {category.name}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Settings Content */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>{settingsCategories.find((cat) => cat.id === activeCategory)?.name} Settings</CardTitle>
          </CardHeader>
          <CardContent>{renderCategoryContent()}</CardContent>
        </Card>
      </div>
    </div>
  )
}