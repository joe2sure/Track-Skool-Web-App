'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import {Card} from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { ThemeProvider } from '../../components/ThemeProvider';
import Modal from '../../components/ui/Modal';

export default function Communication() {
  const [activeTab, setActiveTab] = useState('announcements');
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  
  const announcements = [
    {
      id: 1,
      title: 'Science Fair Registration Open',
      content: 'The annual science fair registration is now open for all grade 9-12 students. Projects must be submitted by March 30th.',
      author: 'Dr. Sarah Johnson',
      department: 'Science Department',
      priority: 'high',
      publishedAt: '2024-03-15T09:00:00Z',
      audience: ['students', 'parents']
    },
    {
      id: 2,
      title: 'Library Hours Extended',
      content: 'Starting next week, the library will remain open until 8 PM on weekdays to accommodate student study needs.',
      author: 'Michael Chen',
      department: 'Library Services',
      priority: 'medium',
      publishedAt: '2024-03-14T14:30:00Z',
      audience: ['students', 'faculty']
    },
    {
      id: 3,
      title: 'Parent-Teacher Conference Schedule',
      content: 'Parent-teacher conferences will be held on March 25-26. Please schedule your appointments through the parent portal.',
      author: 'Emily Davis',
      department: 'Administration',
      priority: 'high',
      publishedAt: '2024-03-13T11:15:00Z',
      audience: ['parents']
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Mathematics Competition',
      description: 'Inter-school mathematics competition for grades 10-12',
      date: '2024-03-22',
      time: '10:00 AM',
      location: 'School Auditorium',
      organizer: 'Math Department',
      type: 'academic',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Spring Break',
      description: 'No classes scheduled during spring break week',
      date: '2024-03-25',
      time: 'All Day',
      location: 'N/A',
      organizer: 'Administration',
      type: 'holiday',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Career Day',
      description: 'Professional speakers from various industries',
      date: '2024-04-05',
      time: '1:00 PM',
      location: 'Gymnasium',
      organizer: 'Guidance Department',
      type: 'career',
      status: 'upcoming'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const AnnouncementForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      content: '',
      priority: 'medium',
      audience: ['students'],
      publishDate: '',
      expiryDate: ''
    });

    const handleAudienceChange = (audience: string) => {
      const newAudience = formData.audience.includes(audience)
        ? formData.audience.filter(a => a !== audience)
        : [...formData.audience, audience];
      setFormData({ ...formData, audience: newAudience });
    };

    return (
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Announcement Title
          </label>
          <Input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter announcement title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Content
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Write your announcement content..."
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm resize-none"
            maxLength={500}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              Priority
            </label>
            <select
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              Publish Date
            </label>
            <Input
              type="date"
              value={formData.publishDate}
              onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Audience
          </label>
          <div className="flex flex-wrap gap-2">
            {['students', 'parents', 'faculty', 'staff'].map((audience) => (
              <label key={audience} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.audience.includes(audience)}
                  onChange={() => handleAudienceChange(audience)}
                  className="mr-2 cursor-pointer"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 high-contrast:text-white capitalize">
                  {audience}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={() => setShowAnnouncementModal(false)}>
            Cancel
          </Button>
          <Button onClick={() => setShowAnnouncementModal(false)}>
            Publish Announcement
          </Button>
        </div>
      </div>
    );
  };

  const EventForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      type: 'academic',
      organizer: ''
    });

    return (
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Event Title
          </label>
          <Input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter event title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe the event..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm resize-none"
            maxLength={500}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              Date
            </label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              Time
            </label>
            <Input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              Location
            </label>
            <Input
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Event location"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
              Event Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
            >
              <option value="academic">Academic</option>
              <option value="sports">Sports</option>
              <option value="cultural">Cultural</option>
              <option value="career">Career</option>
              <option value="holiday">Holiday</option>
              <option value="meeting">Meeting</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Organizer
          </label>
          <Input
            value={formData.organizer}
            onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
            placeholder="Event organizer/department"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={() => setShowEventModal(false)}>
            Cancel
          </Button>
          <Button onClick={() => setShowEventModal(false)}>
            Create Event
          </Button>
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white high-contrast:text-white mb-2">Communication Center</h1>
            <p className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">Manage announcements, events, and school communications</p>
          </div>

          <div className="mb-6">
            <Card>
              <div className="flex items-center justify-between">
                <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 high-contrast:bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('announcements')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      activeTab === 'announcements' 
                        ? 'bg-white dark:bg-gray-600 high-contrast:bg-gray-700 text-gray-900 dark:text-white high-contrast:text-white shadow-sm' 
                        : 'text-gray-600 dark:text-gray-300 high-contrast:text-white hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <i className="ri-megaphone-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
                    Announcements
                  </button>
                  <button
                    onClick={() => setActiveTab('events')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      activeTab === 'events' 
                        ? 'bg-white dark:bg-gray-600 high-contrast:bg-gray-700 text-gray-900 dark:text-white high-contrast:text-white shadow-sm' 
                        : 'text-gray-600 dark:text-gray-300 high-contrast:text-white hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <i className="ri-calendar-event-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
                    Events
                  </button>
                </div>

                <div className="flex space-x-2">
                  {activeTab === 'announcements' && (
                    <Button onClick={() => setShowAnnouncementModal(true)}>
                      <i className="ri-add-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      New Announcement
                    </Button>
                  )}
                  {activeTab === 'events' && (
                    <Button onClick={() => setShowEventModal(true)}>
                      <i className="ri-add-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      New Event
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {activeTab === 'announcements' && (
            <div className="space-y-6">
              {announcements.map((announcement) => (
                <Card key={announcement.id}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white">
                          {announcement.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          announcement.priority === 'urgent' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                          announcement.priority === 'high' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
                          announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {announcement.priority}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 high-contrast:text-gray-200 mb-4">
                        {announcement.content}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 high-contrast:text-gray-300">
                        <div className="flex items-center space-x-4">
                          <span>By {announcement.author}</span>
                          <span>•</span>
                          <span>{announcement.department}</span>
                          <span>•</span>
                          <span>{formatDate(announcement.publishedAt)} at {formatTime(announcement.publishedAt)}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {announcement.audience.map((audience) => (
                            <span
                              key={audience}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 high-contrast:bg-blue-900/50 text-blue-800 dark:text-blue-300 high-contrast:text-blue-200 rounded-full text-xs font-medium capitalize"
                            >
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <Button size="sm" variant="ghost">
                        <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                      </Button>
                      <Button size="sm" variant="ghost">
                        <i className="ri-more-line w-4 h-4 flex items-center justify-center"></i>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-3 h-3 rounded-full ${
                      event.type === 'academic' ? 'bg-blue-500' :
                      event.type === 'sports' ? 'bg-green-500' :
                      event.type === 'cultural' ? 'bg-purple-500' :
                      event.type === 'career' ? 'bg-orange-500' :
                      event.type === 'holiday' ? 'bg-red-500' :
                      'bg-gray-500'
                    }`}></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 high-contrast:text-gray-300 capitalize">
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200 mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                      <i className="ri-calendar-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                      <i className="ri-time-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                      <i className="ri-map-pin-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                      <i className="ri-user-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {event.organizer}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 high-contrast:bg-green-900/50 text-green-800 dark:text-green-300 high-contrast:text-green-200 rounded-full text-xs font-medium">
                      {event.status}
                    </span>
                    
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost">
                        <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                      </Button>
                      <Button size="sm" variant="ghost">
                        <i className="ri-more-line w-4 h-4 flex items-center justify-center"></i>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <Modal
            isOpen={showAnnouncementModal}
            onClose={() => setShowAnnouncementModal(false)}
            title="Create New Announcement"
            size="lg"
          >
            <AnnouncementForm />
          </Modal>

          <Modal
            isOpen={showEventModal}
            onClose={() => setShowEventModal(false)}
            title="Create New Event"
            size="lg"
          >
            <EventForm />
          </Modal>
        </main>
      </div>
    </ThemeProvider>
  );
}