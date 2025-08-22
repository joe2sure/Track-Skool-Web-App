"use client"

import { useState } from "react"
import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar"
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header"
import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Camera,
  Save,
  Eye,
  EyeOff,
  Smartphone,
  Mail,
  Phone,
  BookOpen,
} from "lucide-react"
import useLargeScreen from "@/hooks/useLargeScreen"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Switch } from "@/components/ui/swtich"
import { Input } from "@/components/ui/parent/input"
import { Textarea } from "@/components/ui/teacher/textarea"

export default function TeacherSettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    assignments: true,
    attendance: true,
    events: true,
    messages: true,
  })
  const [theme, setTheme] = useState("light")
  const [language, setLanguage] = useState("en")
  const isLargeScreen = useLargeScreen()

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <TeacherSidebar isOpen={isSidebarOpen} onToggleSidebar={handleToggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TeacherHeader onMenuToggle={handleToggleSidebar} />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-1">Manage your account preferences and settings</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {isLargeScreen && "Profile"}
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  {isLargeScreen && "Notifications"}
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  {isLargeScreen && "Security"}
                </TabsTrigger>
                <TabsTrigger value="appearance" className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  {isLargeScreen && "Appearance"}
                </TabsTrigger>
                <TabsTrigger value="preferences" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {isLargeScreen && "Preferences"}
                </TabsTrigger>
              </TabsList>

              {/* Profile Settings */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Profile Information
                    </CardTitle>
                    <CardDescription>Update your personal information and profile details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src="/teacher-profile.png" />
                        <AvatarFallback className="text-lg">JD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm">
                          <Camera className="w-4 h-4 mr-2" />
                          Change Photo
                        </Button>
                        <p className="text-sm text-gray-500">JPG, PNG or GIF. Max size 2MB.</p>
                      </div>
                    </div>

                    <Separator />

                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="john.doe@school.edu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>

                    {/* Professional Information */}
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Professional Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="employeeId">Employee ID</Label>
                          <Input id="employeeId" defaultValue="TCH001" disabled />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select defaultValue="mathematics">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="science">Science</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="history">History</SelectItem>
                              <SelectItem value="arts">Arts</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="qualification">Highest Qualification</Label>
                          <Input id="qualification" defaultValue="Master's in Mathematics" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Years of Experience</Label>
                          <Input id="experience" defaultValue="8" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          placeholder="Tell us about yourself..."
                          defaultValue="Passionate mathematics teacher with 8 years of experience in secondary education."
                          rows={3}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notification Settings */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>Choose how you want to be notified about important updates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Notification Channels */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Notification Channels</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="font-medium">Email Notifications</p>
                              <p className="text-sm text-gray-500">Receive notifications via email</p>
                            </div>
                          </div>
                          <Switch
                            checked={notifications.email}
                            onCheckedChange={(value) => handleNotificationChange("email", value)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Smartphone className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="font-medium">Push Notifications</p>
                              <p className="text-sm text-gray-500">Receive push notifications on your device</p>
                            </div>
                          </div>
                          <Switch
                            checked={notifications.push}
                            onCheckedChange={(value) => handleNotificationChange("push", value)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="font-medium">SMS Notifications</p>
                              <p className="text-sm text-gray-500">Receive notifications via text message</p>
                            </div>
                          </div>
                          <Switch
                            checked={notifications.sms}
                            onCheckedChange={(value) => handleNotificationChange("sms", value)}
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Notification Types */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Notification Types</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Assignment Updates</p>
                            <p className="text-sm text-gray-500">New assignments and submissions</p>
                          </div>
                          <Switch
                            checked={notifications.assignments}
                            onCheckedChange={(value) => handleNotificationChange("assignments", value)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Attendance Alerts</p>
                            <p className="text-sm text-gray-500">Student attendance notifications</p>
                          </div>
                          <Switch
                            checked={notifications.attendance}
                            onCheckedChange={(value) => handleNotificationChange("attendance", value)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Event Reminders</p>
                            <p className="text-sm text-gray-500">Upcoming events and deadlines</p>
                          </div>
                          <Switch
                            checked={notifications.events}
                            onCheckedChange={(value) => handleNotificationChange("events", value)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Messages</p>
                            <p className="text-sm text-gray-500">New messages from students and parents</p>
                          </div>
                          <Switch
                            checked={notifications.messages}
                            onCheckedChange={(value) => handleNotificationChange("messages", value)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Security Settings
                    </CardTitle>
                    <CardDescription>Manage your account security and privacy settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Password Change */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <div className="relative">
                            <Input
                              id="currentPassword"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter current password"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-1/2 -translate-y-1/2"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input id="newPassword" type="password" placeholder="Enter new password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                          </div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">Update Password</Button>
                      </div>
                    </div>

                    <Separator />

                    {/* Two-Factor Authentication */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Enable 2FA</p>
                          <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                        <Badge variant="outline" className="text-orange-600 border-orange-200">
                          Not Enabled
                        </Badge>
                      </div>
                      <Button variant="outline">Set Up Two-Factor Authentication</Button>
                    </div>

                    <Separator />

                    {/* Login Sessions */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Active Sessions</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <Smartphone className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">Current Session</p>
                              <p className="text-sm text-gray-500">Chrome on Windows • New York, NY</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700">Active</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Appearance Settings */}
              <TabsContent value="appearance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      Appearance Settings
                    </CardTitle>
                    <CardDescription>Customize the look and feel of your dashboard</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Theme Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Theme</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            theme === "light" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                          }`}
                          onClick={() => setTheme("light")}
                        >
                          <div className="w-full h-20 bg-white border rounded mb-3"></div>
                          <p className="font-medium text-center">Light</p>
                        </div>
                        <div
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            theme === "dark" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                          }`}
                          onClick={() => setTheme("dark")}
                        >
                          <div className="w-full h-20 bg-gray-900 border rounded mb-3"></div>
                          <p className="font-medium text-center">Dark</p>
                        </div>
                        <div
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            theme === "system" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                          }`}
                          onClick={() => setTheme("system")}
                        >
                          <div className="w-full h-20 bg-gradient-to-r from-white to-gray-900 border rounded mb-3"></div>
                          <p className="font-medium text-center">System</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Display Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Display Options</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Compact Mode</p>
                            <p className="text-sm text-gray-500">Reduce spacing and padding for more content</p>
                          </div>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Show Animations</p>
                            <p className="text-sm text-gray-500">Enable smooth transitions and animations</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences */}
              <TabsContent value="preferences" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      General Preferences
                    </CardTitle>
                    <CardDescription>Configure your general application preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Language & Region */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Language & Region</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select value={language} onValueChange={setLanguage}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="de">German</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select defaultValue="est">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="est">Eastern Time (EST)</SelectItem>
                              <SelectItem value="cst">Central Time (CST)</SelectItem>
                              <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                              <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Dashboard Preferences */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Dashboard Preferences</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="defaultView">Default Dashboard View</Label>
                          <Select defaultValue="overview">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="overview">Overview</SelectItem>
                              <SelectItem value="schedule">Class Schedule</SelectItem>
                              <SelectItem value="assignments">Assignments</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Auto-refresh Data</p>
                            <p className="text-sm text-gray-500">
                              Automatically refresh dashboard data every 5 minutes
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Show Quick Actions</p>
                            <p className="text-sm text-gray-500">Display quick action buttons on dashboard</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Data & Privacy */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Data & Privacy</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Analytics</p>
                            <p className="text-sm text-gray-500">Help improve the platform by sharing usage data</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Marketing Communications</p>
                            <p className="text-sm text-gray-500">Receive updates about new features and improvements</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}