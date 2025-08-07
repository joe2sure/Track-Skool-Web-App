'use client';

import { useState } from 'react';
import Header from '../../components/StudentHeader';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ThemeProvider } from '../../components/ThemeProvider';

export default function Attendance() {
  const [selectedClass, setSelectedClass] = useState('Mathematics');
  const [selectedDate, setSelectedDate] = useState('2024-03-15');
  const [viewMode, setViewMode] = useState('grid');

  const students = [
    { id: 1, name: 'Alice Johnson', rollNo: '001', present: true, late: false },
    { id: 2, name: 'Bob Smith', rollNo: '002', present: false, late: false },
    { id: 3, name: 'Carol Davis', rollNo: '003', present: true, late: true },
    { id: 4, name: 'David Wilson', rollNo: '004', present: true, late: false },
    { id: 5, name: 'Emma Brown', rollNo: '005', present: true, late: false },
    { id: 6, name: 'Frank Miller', rollNo: '006', present: false, late: false },
    { id: 7, name: 'Grace Taylor', rollNo: '007', present: true, late: false },
    { id: 8, name: 'Henry Clark', rollNo: '008', present: true, late: true },
  ];

  const classes = ['Mathematics', 'Physics', 'Chemistry', 'English', 'History'];

  const toggleAttendance = (studentId: number) => {
    console.log(`Toggle attendance for student ${studentId}`);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 high-contrast:bg-black">
        <Header />
        <main className="px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white high-contrast:text-white mb-2">Attendance Management</h1>
            <p className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Track and manage student attendance records</p>
          </div>

          <div className="mb-8">
            <Card>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">Class</label>
                    <select
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
                    >
                      {classes.map((className) => (
                        <option key={className} value={className}>{className}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <i className="ri-grid-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <i className="ri-list-unordered mr-2 w-4 h-4 flex items-center justify-center"></i>
                    List
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white">
                    {selectedClass} - {selectedDate}
                  </h3>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary">
                      <i className="ri-save-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Save
                    </Button>
                    <Button size="sm" variant="outline">
                      <i className="ri-download-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Export
                    </Button>
                  </div>
                </div>

                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {students.map((student) => (
                      <div
                        key={student.id}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          student.present
                            ? student.late
                              ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 high-contrast:bg-yellow-900/30'
                              : 'border-green-300 bg-green-50 dark:bg-green-900/20 high-contrast:bg-green-900/30'
                            : 'border-red-300 bg-red-50 dark:bg-red-900/20 high-contrast:bg-red-900/30'
                        }`}
                        onClick={() => toggleAttendance(student.id)}
                      >
                        <div className="text-center">
                          <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                            student.present
                              ? student.late
                                ? 'bg-yellow-200 dark:bg-yellow-700 high-contrast:bg-yellow-600'
                                : 'bg-green-200 dark:bg-green-700 high-contrast:bg-green-600'
                              : 'bg-red-200 dark:bg-red-700 high-contrast:bg-red-600'
                          }`}>
                            <i className={`text-lg w-5 h-5 flex items-center justify-center ${
                              student.present
                                ? student.late
                                  ? 'ri-time-line text-yellow-700 dark:text-yellow-200 high-contrast:text-yellow-100'
                                  : 'ri-check-line text-green-700 dark:text-green-200 high-contrast:text-green-100'
                                : 'ri-close-line text-red-700 dark:text-red-200 high-contrast:text-red-100'
                            }`}></i>
                          </div>
                          <h4 className="font-medium text-sm text-gray-900 dark:text-white high-contrast:text-white">{student.name}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 high-contrast:text-gray-300">Roll: {student.rollNo}</p>
                          <p className={`text-xs font-medium mt-1 ${
                            student.present
                              ? student.late
                                ? 'text-yellow-700 dark:text-yellow-300 high-contrast:text-yellow-200'
                                : 'text-green-700 dark:text-green-300 high-contrast:text-green-200'
                              : 'text-red-700 dark:text-red-300 high-contrast:text-red-200'
                          }`}>
                            {student.present ? (student.late ? 'Late' : 'Present') : 'Absent'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700 high-contrast:border-gray-400">
                          <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Roll No</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Name</th>
                          <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Status</th>
                          <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student) => (
                          <tr key={student.id} className="border-b border-gray-100 dark:border-gray-800 high-contrast:border-gray-600">
                            <td className="py-3 px-4 text-gray-900 dark:text-white high-contrast:text-white">{student.rollNo}</td>
                            <td className="py-3 px-4 text-gray-900 dark:text-white high-contrast:text-white">{student.name}</td>
                            <td className="py-3 px-4 text-center">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                student.present
                                  ? student.late
                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                                    : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                              }`}>
                                {student.present ? (student.late ? 'Late' : 'Present') : 'Absent'}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <div className="flex justify-center space-x-2">
                                <Button size="sm" variant="ghost">
                                  <i className="ri-check-line w-4 h-4 flex items-center justify-center"></i>
                                </Button>
                                <Button size="sm" variant="ghost">
                                  <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                                </Button>
                                <Button size="sm" variant="ghost">
                                  <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            </div>

            <div>
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-4">Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Total Students</span>
                    <span className="font-semibold text-gray-900 dark:text-white high-contrast:text-white">{students.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Present</span>
                    <span className="font-semibold text-green-600">{students.filter(s => s.present).length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Absent</span>
                    <span className="font-semibold text-red-600">{students.filter(s => !s.present).length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Late</span>
                    <span className="font-semibold text-yellow-600">{students.filter(s => s.late).length}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700 high-contrast:border-gray-400">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Attendance Rate</span>
                      <span className="font-semibold text-blue-600">{Math.round((students.filter(s => s.present).length / students.length) * 100)}%</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full justify-start" variant="ghost" size="sm">
                    <i className="ri-check-double-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Mark All Present
                  </Button>
                  <Button className="w-full justify-start" variant="ghost" size="sm">
                    <i className="ri-close-circle-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Mark All Absent
                  </Button>
                  <Button className="w-full justify-start" variant="ghost" size="sm">
                    <i className="ri-history-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    View History
                  </Button>
                  <Button className="w-full justify-start" variant="ghost" size="sm">
                    <i className="ri-file-chart-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Generate Report
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}