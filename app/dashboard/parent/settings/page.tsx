"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Shield, Bell, Camera, Eye, EyeOff, Monitor, Smartphone, Chrome, SettingsIcon } from "lucide-react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/parent/avatar"
import { Label } from "@/components/ui/parent/label"
import { Input } from "@/components/ui/parent/input"
import { Switch } from "@/components/ui/parent/switch"

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-slate-400 mt-1">Manage your account preferences and system settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center gap-3">
            <User className="w-6 h-6 text-blue-400" />
            <div>
              <CardTitle className="text-white">Profile Settings</CardTitle>
              <p className="text-slate-400 text-sm">Update your personal information</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-blue-600 text-white text-xl">MJ</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                <Camera className="w-4 h-4 mr-2" />
                Change Photo
              </Button>
              <p className="text-slate-400 text-sm">JPG, PNG or GIF (max. 5MB)</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-slate-300">
                  First Name
                </Label>
                <Input id="firstName" defaultValue="Michael" className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-slate-300">
                  Last Name
                </Label>
                <Input id="lastName" defaultValue="Johnson" className="bg-slate-700 border-slate-600 text-white" />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-slate-300">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="michael.johnson@email.com"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-slate-300">
                Phone Number
              </Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" className="bg-slate-700 border-slate-600 text-white" />
            </div>

            <div>
              <Label htmlFor="address" className="text-slate-300">
                Home Address
              </Label>
              <Input
                id="address"
                defaultValue="123 Oak Street, Springfield, IL 62701"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="emergency" className="text-slate-300">
                Emergency Contact
              </Label>
              <Input
                id="emergency"
                defaultValue="Sarah Johnson - +1 (555) 987-6543"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center gap-3">
            <Shield className="w-6 h-6 text-orange-400" />
            <div>
              <CardTitle className="text-white">Security Settings</CardTitle>
              <p className="text-slate-400 text-sm">Manage your account security</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-4">Change Password</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword" className="text-slate-300">
                    Current Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showPassword ? "text" : "password"}
                      className="bg-slate-700 border-slate-600 text-white pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-white"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="newPassword" className="text-slate-300">
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      className="bg-slate-700 border-slate-600 text-white pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-white"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-slate-300">
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className="bg-slate-700 border-slate-600 text-white pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-white"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <Button className="bg-orange-600 hover:bg-orange-700">Update Password</Button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Two-Factor Authentication</h4>
              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                <div>
                  <p className="text-white font-medium">Enable 2FA</p>
                  <p className="text-slate-400 text-sm">Add an extra layer of security to your account</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Active Sessions</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-white font-medium">Chrome on Windows</p>
                      <p className="text-slate-400 text-sm">Springfield, IL • 2 minutes ago</p>
                    </div>
                  </div>
                  <Badge className="bg-green-600 text-white">Current</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Safari on iPhone</p>
                      <p className="text-slate-400 text-sm">Springfield, IL • 1 hour ago</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
                  >
                    Terminate
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Chrome className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Chrome on Android</p>
                      <p className="text-slate-400 text-sm">Chicago, IL • 2 days ago</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
                  >
                    Terminate
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center gap-3">
            <Bell className="w-6 h-6 text-green-400" />
            <div>
              <CardTitle className="text-white">Notification Settings</CardTitle>
              <p className="text-slate-400 text-sm">Choose how you want to be notified</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-4">Communication Preferences</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-slate-400 text-sm">Receive updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Push Notifications</p>
                    <p className="text-slate-400 text-sm">Browser push notifications</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">SMS Notifications</p>
                    <p className="text-slate-400 text-sm">Text message alerts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Academic Alerts</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Attendance Alerts</p>
                    <p className="text-slate-400 text-sm">Absence and tardiness notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Grade Updates</p>
                    <p className="text-slate-400 text-sm">New grades and assessment results</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Assignment Reminders</p>
                    <p className="text-slate-400 text-sm">Upcoming homework and project deadlines</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">School Activities</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Event Reminders</p>
                    <p className="text-slate-400 text-sm">School events and activities</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Fee Reminders</p>
                    <p className="text-slate-400 text-sm">Payment due dates and overdue notices</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Emergency Alerts</p>
                    <p className="text-slate-400 text-sm">Important school announcements</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                Reset to Default
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">Save Preferences</Button>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center gap-3">
            <SettingsIcon className="w-6 h-6 text-purple-400" />
            <div>
              <CardTitle className="text-white">Preferences</CardTitle>
              <p className="text-slate-400 text-sm">Customize your experience</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-4">Appearance</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="theme" className="text-slate-300">
                    Theme
                  </Label>
                  <select
                    id="theme"
                    className="w-full mt-1 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white"
                  >
                    <option>Light Mode</option>
                    <option selected>Dark Mode</option>
                    <option>System</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="layout" className="text-slate-300">
                    Dashboard Layout
                  </Label>
                  <select
                    id="layout"
                    className="w-full mt-1 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white"
                  >
                    <option selected>Grid View</option>
                    <option>List View</option>
                    <option>Compact View</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Localization</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="language" className="text-slate-300">
                    Language
                  </Label>
                  <select
                    id="language"
                    className="w-full mt-1 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white"
                  >
                    <option selected>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="timezone" className="text-slate-300">
                    Timezone
                  </Label>
                  <select
                    id="timezone"
                    className="w-full mt-1 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white"
                  >
                    <option selected>Central Time (CT)</option>
                    <option>Eastern Time (ET)</option>
                    <option>Pacific Time (PT)</option>
                    <option>Mountain Time (MT)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Date & Time Format</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="dateFormat" className="text-slate-300">
                    Date Format
                  </Label>
                  <select
                    id="dateFormat"
                    className="w-full mt-1 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white"
                  >
                    <option selected>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="timeFormat" className="text-slate-300">
                    Time Format
                  </Label>
                  <select
                    id="timeFormat"
                    className="w-full mt-1 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white"
                  >
                    <option selected>12 Hour (AM/PM)</option>
                    <option>24 Hour</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="weekStart" className="text-slate-300">
                    Week Starts On
                  </Label>
                  <select
                    id="weekStart"
                    className="w-full mt-1 bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white"
                  >
                    <option selected>Sunday</option>
                    <option>Monday</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">System Behavior</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Auto-refresh Data</p>
                  <p className="text-slate-400 text-sm">Automatically update dashboard information</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                Reset to Default
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
