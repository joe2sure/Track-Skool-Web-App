"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, BarChart3, PieChart, Calendar, Users, BookOpen } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
          <p className="text-gray-600 dark:text-gray-400">Generate and view comprehensive school reports</p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Quick Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Student Report</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Enrollment and demographics</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Academic Report</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Grades and performance</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Attendance Report</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Attendance statistics</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Course Report</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Course enrollment and completion</p>
          </CardContent>
        </Card>
      </div>

      {/* Reports Content */}
      <Card>
        <CardHeader>
          <CardTitle>Report Center</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Advanced reporting system will be implemented here</p>
            <p className="text-sm text-gray-400 mt-2">Custom reports, analytics, and data visualization</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}