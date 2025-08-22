"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Switch } from "@/components/ui/switch"
import {
  Settings,
  User,
  Bell,
  Shield,
  Database,
  Mail,
  Clock,
  BookOpen,
  Save,
  RefreshCw,
  Eye,
  EyeOff,
  Trash2,
} from "lucide-react"
import { Sidebar } from "@/components/ui/librarian/sidebar"
import { Header } from "@/components/ui/librarian/header"
import { StatCard } from "@/components/ui/librarian/stat-card"
import { Input } from "@/components/ui/parent/input"
import { Textarea } from "@/components/ui/teacher/textarea"
import { Switch } from "@/components/ui/parent/switch"

// Define the settings type structure
type SettingsType = {
  profile: {
    name: string;
    email: string;
    phone: string;
    position: string;
    department: string;
    bio: string;
  };
  notifications: {
    emailNotifications: boolean;
    overdueReminders: boolean;
    newBookAlerts: boolean;
    eventReminders: boolean;
    systemUpdates: boolean;
    weeklyReports: boolean;
  };
  library: {
    maxBooksPerUser: number;
    loanPeriodDays: number;
    renewalLimit: number;
    finePerDay: number;
    maxFineAmount: number;
    reservationPeriodDays: number;
    autoRenewal: boolean;
    sendReminders: boolean;
    reminderDaysBefore: number;
  };
  system: {
    backupFrequency: string;
    maintenanceMode: boolean;
    debugMode: boolean;
    apiAccess: boolean;
    dataRetentionMonths: number;
  };
}

export default function SettingsPage() {
  const [selectedTab, setSelectedTab] = useState("profile")
  const [showPassword, setShowPassword] = useState(false)
  const [settings, setSettings] = useState<SettingsType>({
    profile: {
      name: "Maria Smith",
      email: "maria.smith@school.edu",
      phone: "+1 (555) 123-4567",
      position: "Head Librarian",
      department: "Central Campus Library",
      bio: "Experienced librarian with over 10 years in academic library management.",
    },
    notifications: {
      emailNotifications: true,
      overdueReminders: true,
      newBookAlerts: true,
      eventReminders: true,
      systemUpdates: false,
      weeklyReports: true,
    },
    library: {
      maxBooksPerUser: 5,
      loanPeriodDays: 14,
      renewalLimit: 2,
      finePerDay: 1.0,
      maxFineAmount: 50.0,
      reservationPeriodDays: 3,
      autoRenewal: true,
      sendReminders: true,
      reminderDaysBefore: 3,
    },
    system: {
      backupFrequency: "daily",
      maintenanceMode: false,
      debugMode: false,
      apiAccess: true,
      dataRetentionMonths: 24,
    },
  })

  // Fixed handleSettingChange with proper typing
  const handleSettingChange = <T extends keyof SettingsType, K extends keyof SettingsType[T]>(
    category: T,
    key: K,
    value: SettingsType[T][K]
  ) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }))
  }

  const recentActivities = [
    {
      action: "Profile updated",
      timestamp: "2 hours ago",
      details: "Changed contact information",
    },
    {
      action: "Notification settings modified",
      timestamp: "1 day ago",
      details: "Enabled weekly reports",
    },
    {
      action: "Library rules updated",
      timestamp: "3 days ago",
      details: "Changed maximum books per user to 5",
    },
    {
      action: "System backup completed",
      timestamp: "1 week ago",
      details: "Automatic daily backup",
    },
  ]

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <Header
          title="Settings & Configuration"
          subtitle="Manage your profile, library settings, and system preferences"
          backgroundImage="/settings-dashboard.png"
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <StatCard
              title="Active Settings"
              value={12}
              change="All configured"
              changeType="positive"
              icon={Settings}
              color="blue"
            />
            <StatCard
              title="Notifications"
              value={6}
              change="5 enabled"
              changeType="positive"
              icon={Bell}
              color="green"
            />
            <StatCard
              title="System Status"
              value="Online"
              change="99.9% uptime"
              changeType="positive"
              icon={Database}
              color="purple"
            />
            <StatCard
              title="Last Backup"
              value="2h ago"
              change="Successful"
              changeType="positive"
              icon={Shield}
              color="orange"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="xl:col-span-3 space-y-6 lg:space-y-8">
              {/* Settings Management */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-xl font-semibold text-white">Settings Management</h2>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save All Changes
                  </Button>
                </div>

                <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-700">
                    <TabsTrigger value="profile" className="data-[state=active]:bg-slate-600">
                      Profile
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="data-[state=active]:bg-slate-600">
                      Notifications
                    </TabsTrigger>
                    <TabsTrigger value="library" className="data-[state=active]:bg-slate-600">
                      Library Rules
                    </TabsTrigger>
                    <TabsTrigger value="system" className="data-[state=active]:bg-slate-600">
                      System
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="profile" className="mt-6">
                    <div className="space-y-6">
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <User className="h-5 w-5 mr-2" />
                          Personal Information
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                              <Input
                                value={settings.profile.name}
                                onChange={(e) => handleSettingChange("profile", "name", e.target.value)}
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                              <Input
                                type="email"
                                value={settings.profile.email}
                                onChange={(e) => handleSettingChange("profile", "email", e.target.value)}
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                              <Input
                                value={settings.profile.phone}
                                onChange={(e) => handleSettingChange("profile", "phone", e.target.value)}
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">Position</label>
                              <Input
                                value={settings.profile.position}
                                onChange={(e) => handleSettingChange("profile", "position", e.target.value)}
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">Department</label>
                              <Input
                                value={settings.profile.department}
                                onChange={(e) => handleSettingChange("profile", "department", e.target.value)}
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">Bio</label>
                              <Textarea
                                value={settings.profile.bio}
                                onChange={(e) => handleSettingChange("profile", "bio", e.target.value)}
                                className="bg-slate-600 border-slate-500 text-white min-h-[80px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          Security Settings
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Current Password</label>
                            <div className="relative">
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter current password"
                                className="bg-slate-600 border-slate-500 text-white pr-10"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">New Password</label>
                              <Input
                                type="password"
                                placeholder="Enter new password"
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
                              <Input
                                type="password"
                                placeholder="Confirm new password"
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                          </div>
                          <Button variant="outline" className="text-blue-400 border-blue-400 bg-transparent">
                            Update Password
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications" className="mt-6">
                    <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Bell className="h-5 w-5 mr-2" />
                        Notification Preferences
                      </h3>
                      <div className="space-y-6">
                        {Object.entries(settings.notifications).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
                            <div>
                              <h4 className="text-white font-medium">
                                {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                              </h4>
                              <p className="text-slate-400 text-sm">
                                {key === "emailNotifications" && "Receive notifications via email"}
                                {key === "overdueReminders" && "Get notified about overdue books"}
                                {key === "newBookAlerts" && "Alerts for new book arrivals"}
                                {key === "eventReminders" && "Reminders for upcoming library events"}
                                {key === "systemUpdates" && "System maintenance and update notifications"}
                                {key === "weeklyReports" && "Weekly summary reports"}
                              </p>
                            </div>
                            <Switch
                              checked={value}
                              onCheckedChange={(checked: boolean) => handleSettingChange("notifications", key as keyof SettingsType['notifications'], checked)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="library" className="mt-6">
                    <div className="space-y-6">
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2" />
                          Circulation Rules
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">
                                Max Books Per User
                              </label>
                              <Input
                                type="number"
                                value={settings.library.maxBooksPerUser}
                                onChange={(e) =>
                                  handleSettingChange("library", "maxBooksPerUser", Number.parseInt(e.target.value))
                                }
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">
                                Loan Period (Days)
                              </label>
                              <Input
                                type="number"
                                value={settings.library.loanPeriodDays}
                                onChange={(e) =>
                                  handleSettingChange("library", "loanPeriodDays", Number.parseInt(e.target.value))
                                }
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">Renewal Limit</label>
                              <Input
                                type="number"
                                value={settings.library.renewalLimit}
                                onChange={(e) =>
                                  handleSettingChange("library", "renewalLimit", Number.parseInt(e.target.value))
                                }
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">Fine Per Day ($)</label>
                              <Input
                                type="number"
                                step="0.01"
                                value={settings.library.finePerDay}
                                onChange={(e) =>
                                  handleSettingChange("library", "finePerDay", Number.parseFloat(e.target.value))
                                }
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">
                                Max Fine Amount ($)
                              </label>
                              <Input
                                type="number"
                                step="0.01"
                                value={settings.library.maxFineAmount}
                                onChange={(e) =>
                                  handleSettingChange("library", "maxFineAmount", Number.parseFloat(e.target.value))
                                }
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">
                                Reservation Period (Days)
                              </label>
                              <Input
                                type="number"
                                value={settings.library.reservationPeriodDays}
                                onChange={(e) =>
                                  handleSettingChange(
                                    "library",
                                    "reservationPeriodDays",
                                    Number.parseInt(e.target.value),
                                  )
                                }
                                className="bg-slate-600 border-slate-500 text-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          Automation Settings
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
                            <div>
                              <h4 className="text-white font-medium">Auto Renewal</h4>
                              <p className="text-slate-400 text-sm">Automatically renew books if no holds exist</p>
                            </div>
                            <Switch
                              checked={settings.library.autoRenewal}
                              onCheckedChange={(checked: boolean) => handleSettingChange("library", "autoRenewal", checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
                            <div>
                              <h4 className="text-white font-medium">Send Reminders</h4>
                              <p className="text-slate-400 text-sm">Send automatic overdue reminders</p>
                            </div>
                            <Switch
                              checked={settings.library.sendReminders}
                              onCheckedChange={(checked: boolean) => handleSettingChange("library", "sendReminders", checked)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Reminder Days Before Due
                            </label>
                            <Input
                              type="number"
                              value={settings.library.reminderDaysBefore}
                              onChange={(e) =>
                                handleSettingChange("library", "reminderDaysBefore", Number.parseInt(e.target.value))
                              }
                              className="bg-slate-600 border-slate-500 text-white w-32"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="system" className="mt-6">
                    <div className="space-y-6">
                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Database className="h-5 w-5 mr-2" />
                          System Configuration
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
                            <div>
                              <h4 className="text-white font-medium">Maintenance Mode</h4>
                              <p className="text-slate-400 text-sm">Enable maintenance mode for system updates</p>
                            </div>
                            <Switch
                              checked={settings.system.maintenanceMode}
                              onCheckedChange={(checked: boolean) => handleSettingChange("system", "maintenanceMode", checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
                            <div>
                              <h4 className="text-white font-medium">Debug Mode</h4>
                              <p className="text-slate-400 text-sm">Enable detailed logging for troubleshooting</p>
                            </div>
                            <Switch
                              checked={settings.system.debugMode}
                              onCheckedChange={(checked: boolean) => handleSettingChange("system", "debugMode", checked)}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
                            <div>
                              <h4 className="text-white font-medium">API Access</h4>
                              <p className="text-slate-400 text-sm">Allow external API access to library data</p>
                            </div>
                            <Switch
                              checked={settings.system.apiAccess}
                              onCheckedChange={(checked: boolean) => handleSettingChange("system", "apiAccess", checked)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                              Data Retention (Months)
                            </label>
                            <Input
                              type="number"
                              value={settings.system.dataRetentionMonths}
                              onChange={(e) =>
                                handleSettingChange("system", "dataRetentionMonths", Number.parseInt(e.target.value))
                              }
                              className="bg-slate-600 border-slate-500 text-white w-32"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                        <h3 className="text-lg font-semibold text-white mb-4">System Actions</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Button variant="outline" className="text-blue-400 border-blue-400 bg-transparent">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Backup Database
                          </Button>
                          <Button variant="outline" className="text-green-400 border-green-400 bg-transparent">
                            <Database className="h-4 w-4 mr-2" />
                            Export Data
                          </Button>
                          <Button variant="outline" className="text-orange-400 border-orange-400 bg-transparent">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Clear Cache
                          </Button>
                          <Button variant="outline" className="text-red-400 border-red-400 bg-transparent">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Reset Settings
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activities */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activities</h3>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="p-3 bg-slate-700 rounded-lg border border-slate-600">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-medium text-white">{activity.action}</h4>
                        <span className="text-xs text-slate-400">{activity.timestamp}</span>
                      </div>
                      <p className="text-xs text-slate-400">{activity.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset to Default
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Database className="h-4 w-4 mr-2" />
                    Export Config
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Test Notifications
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}






// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/Button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import { Switch } from "@/components/ui/switch"
// import {
//   Settings,
//   User,
//   Bell,
//   Shield,
//   Database,
//   Mail,
//   Clock,
//   BookOpen,
//   Save,
//   RefreshCw,
//   Eye,
//   EyeOff,
//   Trash2,
// } from "lucide-react"
// import { Sidebar } from "@/components/ui/librarian/sidebar"
// import { Header } from "@/components/ui/librarian/header"
// import { StatCard } from "@/components/ui/librarian/stat-card"
// import { Input } from "@/components/ui/parent/input"
// import { Textarea } from "@/components/ui/teacher/textarea"
// import { Switch } from "@/components/ui/parent/switch"

// export default function SettingsPage() {
//   const [selectedTab, setSelectedTab] = useState("profile")
//   const [showPassword, setShowPassword] = useState(false)
//   const [settings, setSettings] = useState({
//     profile: {
//       name: "Maria Smith",
//       email: "maria.smith@school.edu",
//       phone: "+1 (555) 123-4567",
//       position: "Head Librarian",
//       department: "Central Campus Library",
//       bio: "Experienced librarian with over 10 years in academic library management.",
//     },
//     notifications: {
//       emailNotifications: true,
//       overdueReminders: true,
//       newBookAlerts: true,
//       eventReminders: true,
//       systemUpdates: false,
//       weeklyReports: true,
//     },
//     library: {
//       maxBooksPerUser: 5,
//       loanPeriodDays: 14,
//       renewalLimit: 2,
//       finePerDay: 1.0,
//       maxFineAmount: 50.0,
//       reservationPeriodDays: 3,
//       autoRenewal: true,
//       sendReminders: true,
//       reminderDaysBefore: 3,
//     },
//     system: {
//       backupFrequency: "daily",
//       maintenanceMode: false,
//       debugMode: false,
//       apiAccess: true,
//       dataRetentionMonths: 24,
//     },
//   })

//   const handleSettingChange = (category: string, key: string, value: any) => {
//     setSettings((prev) => ({
//       ...prev,
//       [category]: {
//         ...prev[category],
//         [key]: value,
//       },
//     }))
//   }

//   const recentActivities = [
//     {
//       action: "Profile updated",
//       timestamp: "2 hours ago",
//       details: "Changed contact information",
//     },
//     {
//       action: "Notification settings modified",
//       timestamp: "1 day ago",
//       details: "Enabled weekly reports",
//     },
//     {
//       action: "Library rules updated",
//       timestamp: "3 days ago",
//       details: "Changed maximum books per user to 5",
//     },
//     {
//       action: "System backup completed",
//       timestamp: "1 week ago",
//       details: "Automatic daily backup",
//     },
//   ]

//   return (
//     <div className="flex h-screen bg-slate-900">
//       <Sidebar />

//       <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
//         <Header
//           title="Settings & Configuration"
//           subtitle="Manage your profile, library settings, and system preferences"
//           backgroundImage="/settings-dashboard.png"
//         />

//         <main className="flex-1 overflow-y-auto p-4 lg:p-6">
//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
//             <StatCard
//               title="Active Settings"
//               value={12}
//               change="All configured"
//               changeType="positive"
//               icon={Settings}
//               color="blue"
//             />
//             <StatCard
//               title="Notifications"
//               value={6}
//               change="5 enabled"
//               changeType="positive"
//               icon={Bell}
//               color="green"
//             />
//             <StatCard
//               title="System Status"
//               value="Online"
//               change="99.9% uptime"
//               changeType="positive"
//               icon={Database}
//               color="purple"
//             />
//             <StatCard
//               title="Last Backup"
//               value="2h ago"
//               change="Successful"
//               changeType="positive"
//               icon={Shield}
//               color="orange"
//             />
//           </div>

//           <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
//             {/* Main Content */}
//             <div className="xl:col-span-3 space-y-6 lg:space-y-8">
//               {/* Settings Management */}
//               <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
//                   <h2 className="text-xl font-semibold text-white">Settings Management</h2>
//                   <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//                     <Save className="h-4 w-4 mr-2" />
//                     Save All Changes
//                   </Button>
//                 </div>

//                 <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
//                   <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-700">
//                     <TabsTrigger value="profile" className="data-[state=active]:bg-slate-600">
//                       Profile
//                     </TabsTrigger>
//                     <TabsTrigger value="notifications" className="data-[state=active]:bg-slate-600">
//                       Notifications
//                     </TabsTrigger>
//                     <TabsTrigger value="library" className="data-[state=active]:bg-slate-600">
//                       Library Rules
//                     </TabsTrigger>
//                     <TabsTrigger value="system" className="data-[state=active]:bg-slate-600">
//                       System
//                     </TabsTrigger>
//                   </TabsList>

//                   <TabsContent value="profile" className="mt-6">
//                     <div className="space-y-6">
//                       <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
//                         <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                           <User className="h-5 w-5 mr-2" />
//                           Personal Information
//                         </h3>
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                           <div className="space-y-4">
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
//                               <Input
//                                 value={settings.profile.name}
//                                 onChange={(e) => handleSettingChange("profile", "name", e.target.value)}
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
//                               <Input
//                                 type="email"
//                                 value={settings.profile.email}
//                                 onChange={(e) => handleSettingChange("profile", "email", e.target.value)}
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
//                               <Input
//                                 value={settings.profile.phone}
//                                 onChange={(e) => handleSettingChange("profile", "phone", e.target.value)}
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                           </div>
//                           <div className="space-y-4">
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">Position</label>
//                               <Input
//                                 value={settings.profile.position}
//                                 onChange={(e) => handleSettingChange("profile", "position", e.target.value)}
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">Department</label>
//                               <Input
//                                 value={settings.profile.department}
//                                 onChange={(e) => handleSettingChange("profile", "department", e.target.value)}
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">Bio</label>
//                               <Textarea
//                                 value={settings.profile.bio}
//                                 onChange={(e) => handleSettingChange("profile", "bio", e.target.value)}
//                                 className="bg-slate-600 border-slate-500 text-white min-h-[80px]"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
//                         <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                           <Shield className="h-5 w-5 mr-2" />
//                           Security Settings
//                         </h3>
//                         <div className="space-y-4">
//                           <div>
//                             <label className="block text-sm font-medium text-slate-300 mb-2">Current Password</label>
//                             <div className="relative">
//                               <Input
//                                 type={showPassword ? "text" : "password"}
//                                 placeholder="Enter current password"
//                                 className="bg-slate-600 border-slate-500 text-white pr-10"
//                               />
//                               <Button
//                                 type="button"
//                                 variant="ghost"
//                                 size="sm"
//                                 className="absolute right-2 top-1/2 transform -translate-y-1/2"
//                                 onClick={() => setShowPassword(!showPassword)}
//                               >
//                                 {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                               </Button>
//                             </div>
//                           </div>
//                           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">New Password</label>
//                               <Input
//                                 type="password"
//                                 placeholder="Enter new password"
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
//                               <Input
//                                 type="password"
//                                 placeholder="Confirm new password"
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                           </div>
//                           <Button variant="outline" className="text-blue-400 border-blue-400 bg-transparent">
//                             Update Password
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="notifications" className="mt-6">
//                     <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
//                       <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                         <Bell className="h-5 w-5 mr-2" />
//                         Notification Preferences
//                       </h3>
//                       <div className="space-y-6">
//                         {Object.entries(settings.notifications).map(([key, value]) => (
//                           <div key={key} className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
//                             <div>
//                               <h4 className="text-white font-medium">
//                                 {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
//                               </h4>
//                               <p className="text-slate-400 text-sm">
//                                 {key === "emailNotifications" && "Receive notifications via email"}
//                                 {key === "overdueReminders" && "Get notified about overdue books"}
//                                 {key === "newBookAlerts" && "Alerts for new book arrivals"}
//                                 {key === "eventReminders" && "Reminders for upcoming library events"}
//                                 {key === "systemUpdates" && "System maintenance and update notifications"}
//                                 {key === "weeklyReports" && "Weekly summary reports"}
//                               </p>
//                             </div>
//                             <Switch
//                               checked={value}
//                               onCheckedChange={(checked: any) => handleSettingChange("notifications", key, checked)}
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="library" className="mt-6">
//                     <div className="space-y-6">
//                       <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
//                         <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                           <BookOpen className="h-5 w-5 mr-2" />
//                           Circulation Rules
//                         </h3>
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                           <div className="space-y-4">
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">
//                                 Max Books Per User
//                               </label>
//                               <Input
//                                 type="number"
//                                 value={settings.library.maxBooksPerUser}
//                                 onChange={(e) =>
//                                   handleSettingChange("library", "maxBooksPerUser", Number.parseInt(e.target.value))
//                                 }
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">
//                                 Loan Period (Days)
//                               </label>
//                               <Input
//                                 type="number"
//                                 value={settings.library.loanPeriodDays}
//                                 onChange={(e) =>
//                                   handleSettingChange("library", "loanPeriodDays", Number.parseInt(e.target.value))
//                                 }
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">Renewal Limit</label>
//                               <Input
//                                 type="number"
//                                 value={settings.library.renewalLimit}
//                                 onChange={(e) =>
//                                   handleSettingChange("library", "renewalLimit", Number.parseInt(e.target.value))
//                                 }
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                           </div>
//                           <div className="space-y-4">
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">Fine Per Day ($)</label>
//                               <Input
//                                 type="number"
//                                 step="0.01"
//                                 value={settings.library.finePerDay}
//                                 onChange={(e) =>
//                                   handleSettingChange("library", "finePerDay", Number.parseFloat(e.target.value))
//                                 }
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">
//                                 Max Fine Amount ($)
//                               </label>
//                               <Input
//                                 type="number"
//                                 step="0.01"
//                                 value={settings.library.maxFineAmount}
//                                 onChange={(e) =>
//                                   handleSettingChange("library", "maxFineAmount", Number.parseFloat(e.target.value))
//                                 }
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-slate-300 mb-2">
//                                 Reservation Period (Days)
//                               </label>
//                               <Input
//                                 type="number"
//                                 value={settings.library.reservationPeriodDays}
//                                 onChange={(e) =>
//                                   handleSettingChange(
//                                     "library",
//                                     "reservationPeriodDays",
//                                     Number.parseInt(e.target.value),
//                                   )
//                                 }
//                                 className="bg-slate-600 border-slate-500 text-white"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
//                         <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                           <Clock className="h-5 w-5 mr-2" />
//                           Automation Settings
//                         </h3>
//                         <div className="space-y-4">
//                           <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
//                             <div>
//                               <h4 className="text-white font-medium">Auto Renewal</h4>
//                               <p className="text-slate-400 text-sm">Automatically renew books if no holds exist</p>
//                             </div>
//                             <Switch
//                               checked={settings.library.autoRenewal}
//                               onCheckedChange={(checked: any) => handleSettingChange("library", "autoRenewal", checked)}
//                             />
//                           </div>
//                           <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
//                             <div>
//                               <h4 className="text-white font-medium">Send Reminders</h4>
//                               <p className="text-slate-400 text-sm">Send automatic overdue reminders</p>
//                             </div>
//                             <Switch
//                               checked={settings.library.sendReminders}
//                               onCheckedChange={(checked: any) => handleSettingChange("library", "sendReminders", checked)}
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium text-slate-300 mb-2">
//                               Reminder Days Before Due
//                             </label>
//                             <Input
//                               type="number"
//                               value={settings.library.reminderDaysBefore}
//                               onChange={(e) =>
//                                 handleSettingChange("library", "reminderDaysBefore", Number.parseInt(e.target.value))
//                               }
//                               className="bg-slate-600 border-slate-500 text-white w-32"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="system" className="mt-6">
//                     <div className="space-y-6">
//                       <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
//                         <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                           <Database className="h-5 w-5 mr-2" />
//                           System Configuration
//                         </h3>
//                         <div className="space-y-4">
//                           <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
//                             <div>
//                               <h4 className="text-white font-medium">Maintenance Mode</h4>
//                               <p className="text-slate-400 text-sm">Enable maintenance mode for system updates</p>
//                             </div>
//                             <Switch
//                               checked={settings.system.maintenanceMode}
//                               onCheckedChange={(checked: any) => handleSettingChange("system", "maintenanceMode", checked)}
//                             />
//                           </div>
//                           <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
//                             <div>
//                               <h4 className="text-white font-medium">Debug Mode</h4>
//                               <p className="text-slate-400 text-sm">Enable detailed logging for troubleshooting</p>
//                             </div>
//                             <Switch
//                               checked={settings.system.debugMode}
//                               onCheckedChange={(checked: any) => handleSettingChange("system", "debugMode", checked)}
//                             />
//                           </div>
//                           <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg">
//                             <div>
//                               <h4 className="text-white font-medium">API Access</h4>
//                               <p className="text-slate-400 text-sm">Allow external API access to library data</p>
//                             </div>
//                             <Switch
//                               checked={settings.system.apiAccess}
//                               onCheckedChange={(checked: any) => handleSettingChange("system", "apiAccess", checked)}
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium text-slate-300 mb-2">
//                               Data Retention (Months)
//                             </label>
//                             <Input
//                               type="number"
//                               value={settings.system.dataRetentionMonths}
//                               onChange={(e) =>
//                                 handleSettingChange("system", "dataRetentionMonths", Number.parseInt(e.target.value))
//                               }
//                               className="bg-slate-600 border-slate-500 text-white w-32"
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
//                         <h3 className="text-lg font-semibold text-white mb-4">System Actions</h3>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           <Button variant="outline" className="text-blue-400 border-blue-400 bg-transparent">
//                             <RefreshCw className="h-4 w-4 mr-2" />
//                             Backup Database
//                           </Button>
//                           <Button variant="outline" className="text-green-400 border-green-400 bg-transparent">
//                             <Database className="h-4 w-4 mr-2" />
//                             Export Data
//                           </Button>
//                           <Button variant="outline" className="text-orange-400 border-orange-400 bg-transparent">
//                             <RefreshCw className="h-4 w-4 mr-2" />
//                             Clear Cache
//                           </Button>
//                           <Button variant="outline" className="text-red-400 border-red-400 bg-transparent">
//                             <Trash2 className="h-4 w-4 mr-2" />
//                             Reset Settings
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </TabsContent>
//                 </Tabs>
//               </div>
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
//               {/* Recent Activities */}
//               <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
//                 <h3 className="text-lg font-semibold text-white mb-4">Recent Activities</h3>
//                 <div className="space-y-3">
//                   {recentActivities.map((activity, index) => (
//                     <div key={index} className="p-3 bg-slate-700 rounded-lg border border-slate-600">
//                       <div className="flex items-start justify-between mb-2">
//                         <h4 className="text-sm font-medium text-white">{activity.action}</h4>
//                         <span className="text-xs text-slate-400">{activity.timestamp}</span>
//                       </div>
//                       <p className="text-xs text-slate-400">{activity.details}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Actions */}
//               <div className="bg-slate-800 rounded-lg p-4 lg:p-6 border border-slate-700">
//                 <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
//                 <div className="space-y-3">
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
//                   >
//                     <Save className="h-4 w-4 mr-2" />
//                     Save Settings
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
//                   >
//                     <RefreshCw className="h-4 w-4 mr-2" />
//                     Reset to Default
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
//                   >
//                     <Database className="h-4 w-4 mr-2" />
//                     Export Config
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start text-slate-300 border-slate-600 bg-transparent"
//                   >
//                     <Mail className="h-4 w-4 mr-2" />
//                     Test Notifications
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }
