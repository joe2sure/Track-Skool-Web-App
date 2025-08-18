'use client';

import { useState } from 'react';
import Header from '../../components/Header';
// import Card from '../../components/ui/card';
// import Button from '../../components/ui/button';
import Input from '../../components/ui/Input';
import { ThemeProvider } from '../../components/ThemeProvider';
import Modal from '../../components/ui/Modal';
import  Button2  from '@/components/ui/Button2';
import  Card2  from '@/components/ui/Card2';

export default function Assignments() {
  const [view, setView] = useState('list');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showGradingModal, setShowGradingModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);

  const assignments = [
    {
      id: 1,
      title: 'Algebra Problem Set 5',
      subject: 'Mathematics',
      dueDate: '2024-03-18',
      totalPoints: 100,
      submissions: 24,
      totalStudents: 28,
      status: 'active',
      description: 'Complete exercises 1-15 from Chapter 8',
      createdAt: '2024-03-10'
    },
    {
      id: 2,
      title: 'Physics Lab Report - Motion',
      subject: 'Physics',
      dueDate: '2024-03-20',
      totalPoints: 150,
      submissions: 18,
      totalStudents: 25,
      status: 'active',
      description: 'Analyze motion data from pendulum experiment',
      createdAt: '2024-03-08'
    },
    {
      id: 3,
      title: 'Shakespeare Essay',
      subject: 'English Literature',
      dueDate: '2024-03-25',
      totalPoints: 200,
      submissions: 12,
      totalStudents: 30,
      status: 'active',
      description: 'Write a 1000-word essay on Hamlet themes',
      createdAt: '2024-03-05'
    },
    {
      id: 4,
      title: 'Chemical Bonding Quiz',
      subject: 'Chemistry',
      dueDate: '2024-03-12',
      totalPoints: 50,
      submissions: 22,
      totalStudents: 22,
      status: 'completed',
      description: 'Multiple choice quiz on ionic and covalent bonds',
      createdAt: '2024-03-01'
    }
  ];

  const filteredAssignments = assignments.filter(assignment => {
    if (filterStatus === 'all') return true;
    return assignment.status === filterStatus;
  });

  const CreateAssignmentForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      subject: 'Mathematics',
      description: '',
      dueDate: '',
      totalPoints: 100,
      instructions: '',
      attachments: []
    });

    return (
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Assignment Title
          </label>
          <Input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter assignment title"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              Subject
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
            >
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>English Literature</option>
              <option>History</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              Total Points
            </label>
            <Input
              type="number"
              value={formData.totalPoints.toString()}
              onChange={(e) => setFormData({ ...formData, totalPoints: parseInt(e.target.value) })}
              placeholder="100"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Due Date
          </label>
          <Input
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Brief description of the assignment"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm resize-none"
            maxLength={500}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Detailed Instructions
          </label>
          <textarea
            value={formData.instructions}
            onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
            placeholder="Detailed instructions for students..."
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm resize-none"
            maxLength={500}
          />
        </div>

        <div className="flex justify-end space-x-3">
          <Button2 variant="outline" onClick={() => setShowCreateModal(false)}>
            Cancel
          </Button2>
          <Button2 onClick={() => setShowCreateModal(false)}>
            Create Assignment
          </Button2>
        </div>
      </div>
    );
  };

  const GradingInterface = () => {
    const students = [
      { id: 1, name: 'Alice Johnson', submitted: true, grade: 85, submittedAt: '2024-03-15' },
      { id: 2, name: 'Bob Smith', submitted: true, grade: null, submittedAt: '2024-03-14' },
      { id: 3, name: 'Carol Davis', submitted: false, grade: null, submittedAt: null },
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white">
            {selectedAssignment?.title} - Grading
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
            {selectedAssignment?.submissions}/{selectedAssignment?.totalStudents} submitted
          </div>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {students.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 high-contrast:bg-gray-900 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white high-contrast:text-white">{student.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                  {student.submitted ? `Submitted: ${student.submittedAt}` : 'Not submitted'}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                {student.submitted && (
                  <>
                    <Button2 size="sm" variant="outline">
                      <i className="ri-eye-line mr-1 w-3 h-3 flex items-center justify-center"></i>
                      View
                    </Button2>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Grade"
                        value={student.grade !== null && student.grade !== undefined ? student.grade.toString() : ''}
                        className="w-20 text-center"
                        onChange={() => {}}
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400 high-contrast:text-gray-300">
                        /{selectedAssignment?.totalPoints}
                      </span>
                    </div>
                  </>
                )}
                
                {!student.submitted && (
                  <span className="text-sm text-red-600 dark:text-red-400 high-contrast:text-red-300">
                    Missing
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-3">
          <Button2 variant="outline" onClick={() => setShowGradingModal(false)}>
            Close
          </Button2>
          <Button2>
            Save Grades
          </Button2>
        </div>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 high-contrast:bg-black">
        <Header />
        <main className="px-6 py-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white high-contrast:text-white mb-2">Assignment Management</h1>
                <p className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Create, manage and grade student assignments</p>
              </div>
              <Button2 onClick={() => setShowCreateModal(true)}>
                <i className="ri-add-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                Create Assignment
              </Button2>
            </div>
          </div>

          <div className="mb-6">
            <Card2>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 high-contrast:bg-gray-800 rounded-lg p-1">
                    <button
                      onClick={() => setView('list')}
                      className={`px-3 py-1 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        view === 'list' ? 'bg-white dark:bg-gray-600 high-contrast:bg-gray-700 text-gray-900 dark:text-white high-contrast:text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 high-contrast:text-white'
                      }`}
                    >
                      List View
                    </button>
                    <button
                      onClick={() => setView('grid')}
                      className={`px-3 py-1 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        view === 'grid' ? 'bg-white dark:bg-gray-600 high-contrast:bg-gray-700 text-gray-900 dark:text-white high-contrast:text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 high-contrast:text-white'
                      }`}
                    >
                      Grid View
                    </button>
                  </div>

                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
                  >
                    <option value="all">All Assignments</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <Button2 size="sm" variant="outline">
                    <i className="ri-download-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Export
                  </Button2>
                  <Button2 size="sm" variant="outline">
                    <i className="ri-filter-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Filter
                  </Button2>
                </div>
              </div>
            </Card2>
          </div>

          {view === 'list' ? (
            <Card2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 high-contrast:border-gray-400">
                      <th className="text-left py-4 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Assignment</th>
                      <th className="text-left py-4 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Subject</th>
                      <th className="text-left py-4 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Due Date</th>
                      <th className="text-left py-4 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Submissions</th>
                      <th className="text-left py-4 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Status</th>
                      <th className="text-right py-4 px-4 font-medium text-gray-900 dark:text-white high-contrast:text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAssignments.map((assignment) => (
                      <tr key={assignment.id} className="border-b border-gray-100 dark:border-gray-800 high-contrast:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 high-contrast:hover:bg-gray-900">
                        <td className="py-4 px-4">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white high-contrast:text-white">{assignment.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">{assignment.description}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-900 dark:text-white high-contrast:text-white">{assignment.subject}</td>
                        <td className="py-4 px-4 text-gray-900 dark:text-white high-contrast:text-white">{assignment.dueDate}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <span className="text-gray-900 dark:text-white high-contrast:text-white">{assignment.submissions}/{assignment.totalStudents}</span>
                            <div className="w-16 bg-gray-200 dark:bg-gray-700 high-contrast:bg-gray-600 rounded-full h-2 ml-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            assignment.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                            assignment.status === 'completed' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' :
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                          }`}>
                            {assignment.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button2
                              size="sm"
                              variant="ghost"
                              onClick={() => {
                                setSelectedAssignment(assignment);
                                setShowGradingModal(true);
                              }}
                            >
                              <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                            </Button2>
                            <Button2 size="sm" variant="ghost">
                              <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                            </Button2>
                            <Button2 size="sm" variant="ghost">
                              <i className="ri-more-line w-4 h-4 flex items-center justify-center"></i>
                            </Button2>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card2>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssignments.map((assignment) => (
                <Card2 key={assignment.id}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-1">{assignment.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">{assignment.subject}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      assignment.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                      assignment.status === 'completed' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200 mb-4">{assignment.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Due Date</span>
                      <span className="text-gray-900 dark:text-white high-contrast:text-white font-medium">{assignment.dueDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Points</span>
                      <span className="text-gray-900 dark:text-white high-contrast:text-white font-medium">{assignment.totalPoints}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Submissions</span>
                      <span className="text-gray-900 dark:text-white high-contrast:text-white font-medium">{assignment.submissions}/{assignment.totalStudents}</span>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 high-contrast:bg-gray-600 rounded-full h-2 mb-4">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex space-x-2">
                    <Button2
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setSelectedAssignment(assignment);
                        setShowGradingModal(true);
                      }}
                    >
                      Grade
                    </Button2>
                    <Button2 size="sm" variant="ghost">
                      <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                    </Button2>
                    <Button2 size="sm" variant="ghost">
                      <i className="ri-more-line w-4 h-4 flex items-center justify-center"></i>
                    </Button2>
                  </div>
                </Card2>
              ))}
            </div>
          )}

          <Modal
            isOpen={showCreateModal}
            onClose={() => setShowCreateModal(false)}
            title="Create New Assignment"
            size="lg"
          >
            <CreateAssignmentForm />
          </Modal>

          <Modal
            isOpen={showGradingModal}
            onClose={() => setShowGradingModal(false)}
            title="Grade Assignment"
            size="lg"
          >
            <GradingInterface />
          </Modal>
        </main>
      </div>
    </ThemeProvider>
  );
}