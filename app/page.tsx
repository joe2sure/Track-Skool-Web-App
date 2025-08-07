'use client';

import Link from 'next/link';
import Button from '../components/ui/Button';
import { ThemeProvider } from '../components/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light dark:bg-dark high-contrast:bg-dark">
        <div 
          className="relative min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20educational%20institution%20exterior%20view%20with%20students%20walking%2C%20bright%20sunny%20day%2C%20contemporary%20school%20building%20architecture%20with%20large%20windows%2C%20welcoming%20campus%20environment%20with%20trees%20and%20pathways%2C%20professional%20educational%20facility%20design&width=1920&height=1080&seq=homepage-hero&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-dark bg-opacity-40"></div>
          
          <div className="relative z-10 text-center px-6 py-12">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-hover rounded-3xl flex items-center justify-center">
                  <i className="ri-graduation-cap-line text-light text-3xl w-10 h-10 flex items-center justify-center"></i>
                </div>
              </div>
              <h1 className="text-5xl font-['Pacifico'] text-light mb-4">SkoolBridge</h1>
              <p className="text-xl text-light mb-8 max-w-2xl mx-auto">
                {/* Complete school management system with modern UI, role-based dashboards, and comprehensive features for students, teachers, parents, and administrators. */}

                If all that matters is the future of tomorrow, then we must give our kids all it takes, With SkoolBridge, Everything has now been made easy for students, teachers, parents, and administrators.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link href="/auth/login">
                <Button size="lg" className="w-48">
                  <i className="ri-login-circle-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="w-48 bg-light/10 border-light text-light hover:bg-light/20">
                  <i className="ri-dashboard-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                  View Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-light/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <i className="ri-calendar-check-line text-3xl text-hover/60 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
                <h3 className="text-lg font-semibold text-light mb-2">Attendance</h3>
                <p className="text-light text-sm">Track student attendance with visual grid interface</p>
              </div>
              
              <div className="bg-light/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <i className="ri-file-text-line text-3xl text-emerald-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
                <h3 className="text-lg font-semibold text-light mb-2">Assignments</h3>
                <p className="text-light text-sm">Create and manage assignments with grading tools</p>
              </div>
              
              <div className="bg-light/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <i className="ri-book-open-line text-3xl text-amber-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
                <h3 className="text-lg font-semibold text-light mb-2">Library</h3>
                <p className="text-light text-sm">Browse and check out books from digital catalog</p>
              </div>
              
              <div className="bg-light/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <i className="ri-chat-3-line text-3xl text-purple-400 mb-3 w-8 h-8 flex items-center justify-center mx-auto"></i>
                <h3 className="text-lg font-semibold text-light mb-2">Communication</h3>
                <p className="text-light text-sm">Announcements and event management system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}