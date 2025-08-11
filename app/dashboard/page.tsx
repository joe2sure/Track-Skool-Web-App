'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/ui/card';
import Button from '../../components/ui/button';
import { ThemeProvider } from '../../components/ThemeProvider';

export default function Dashboard() {
  const [userRole] = useState('student');

  const StudentDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Current GPA</p>
              <p className="text-3xl font-bold">3.85</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="ri-trophy-line text-2xl w-6 h-6 flex items-center justify-center"></i>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Attendance</p>
              <p className="text-3xl font-bold">94%</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="ri-calendar-check-line text-2xl w-6 h-6 flex items-center justify-center"></i>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-100 text-sm font-medium">Pending Tasks</p>
              <p className="text-3xl font-bold">7</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="ri-task-line text-2xl w-6 h-6 flex items-center justify-center"></i>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Books Borrowed</p>
              <p className="text-3xl font-bold">3</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="ri-book-open-line text-2xl w-6 h-6 flex items-center justify-center"></i>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white">Today's Schedule</h3>
            <Button size="sm" variant="outline">View All</Button>
          </div>
          <div className="space-y-4">
            {[
              { time: '9:00 AM', subject: 'Mathematics', room: 'Room 201', teacher: 'Mr. Johnson' },
              { time: '10:30 AM', subject: 'Physics', room: 'Lab 105', teacher: 'Dr. Smith' },
              { time: '1:00 PM', subject: 'English Literature', room: 'Room 304', teacher: 'Ms. Davis' },
              { time: '2:30 PM', subject: 'Chemistry', room: 'Lab 203', teacher: 'Mrs. Wilson' }
            ].map((schedule, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 high-contrast:bg-gray-900 rounded-lg">
                <div className="w-2 h-12 bg-blue-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 dark:text-white high-contrast:text-white">{schedule.subject}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400 high-contrast:text-gray-300">{schedule.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">{schedule.room} • {schedule.teacher}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white">Recent Assignments</h3>
            <Button size="sm" variant="outline">View All</Button>
          </div>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', title: 'Algebra Problem Set 5', due: 'Due Tomorrow', status: 'pending', priority: 'high' },
              { subject: 'Physics', title: 'Lab Report - Motion', due: 'Due in 3 days', status: 'in-progress', priority: 'medium' },
              { subject: 'English', title: 'Essay on Shakespeare', due: 'Due in 5 days', status: 'not-started', priority: 'medium' },
              { subject: 'Chemistry', title: 'Periodic Table Quiz', due: 'Due next week', status: 'completed', priority: 'low' }
            ].map((assignment, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 high-contrast:bg-gray-900 rounded-lg">
                <div className={`w-3 h-3 rounded-full mr-3 ${assignment.priority === 'high' ? 'bg-red-500' : assignment.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 dark:text-white high-contrast:text-white">{assignment.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${assignment.status === 'completed' ? 'bg-green-100 text-green-800' : assignment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {assignment.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">{assignment.subject} • {assignment.due}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button className="w-full justify-start" variant="ghost">
              <i className="ri-calendar-line mr-3 w-4 h-4 flex items-center justify-center"></i>
              View Calendar
            </Button>
            <Button className="w-full justify-start" variant="ghost">
              <i className="ri-file-text-line mr-3 w-4 h-4 flex items-center justify-center"></i>
              Submit Assignment
            </Button>
            <Button className="w-full justify-start" variant="ghost">
              <i className="ri-book-line mr-3 w-4 h-4 flex items-center justify-center"></i>
              Library Catalog
            </Button>
            <Button className="w-full justify-start" variant="ghost">
              <i className="ri-chat-3-line mr-3 w-4 h-4 flex items-center justify-center"></i>
              Contact Teacher
            </Button>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-4">Announcements</h3>
          <div className="space-y-3">
            {[
              { title: 'Science Fair Registration', time: '2 hours ago' },
              { title: 'Library Hours Extended', time: '1 day ago' },
              { title: 'Parent-Teacher Conference', time: '2 days ago' }
            ].map((announcement, index) => (
              <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 high-contrast:bg-blue-900/30 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100 high-contrast:text-blue-100 text-sm">{announcement.title}</h4>
                <p className="text-xs text-blue-700 dark:text-blue-300 high-contrast:text-blue-200">{announcement.time}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {[
              { event: 'Math Competition', date: 'Mar 15' },
              { event: 'Spring Break', date: 'Mar 20-24' },
              { event: 'Science Exhibition', date: 'Apr 5' }
            ].map((event, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 high-contrast:bg-gray-900 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white high-contrast:text-white text-sm">{event.event}</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400 high-contrast:text-gray-300 bg-white dark:bg-gray-700 high-contrast:bg-gray-800 px-2 py-1 rounded">{event.date}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 high-contrast:bg-black">
        <Header />
        <main className="px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white high-contrast:text-white mb-2">Welcome back, Sarah!</h1>
            <p className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Here's what's happening with your studies today.</p>
          </div>
          <StudentDashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}