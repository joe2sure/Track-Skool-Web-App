"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ThemeProvider } from "@/components/ThemeProvider"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url('/modern-school-campus-with-students-and-technology.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70"></div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce [animation-delay:0s]"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce [animation-delay:1s]"></div>
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-400/20 rounded-full animate-bounce [animation-delay:2s]"></div>
            <div className="absolute bottom-20 right-10 w-18 h-18 bg-cyan-400/20 rounded-full animate-bounce [animation-delay:0.5s]"></div>
          </div>

          <div
            className={`relative z-10 text-center px-6 py-12 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                  <i className="ri-graduation-cap-line text-white text-4xl"></i>
                </div>
              </div>

              <h1 className="text-6xl md:text-7xl font-['Pacifico'] text-white mb-6 animate-fade-in-up [animation-delay:0.2s]">
                TrackSkool
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-6 animate-fade-in-up [animation-delay:0.4s]">
                Best School Management Software
              </h2>
              <p className="text-xl md:text-2xl text-blue-50 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.6s]">
                AI-powered school management system with comprehensive dashboards for administrators, teachers, parents,
                students, librarians, and hostel managers. Transform your educational institution with intelligent
                automation and seamless communication.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up [animation-delay:0.8s]">
                <span className="inline-flex items-center bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 font-medium border border-blue-400/30 hover:bg-blue-500/40 transition-all duration-300 hover:scale-105">
                  <i className="ri-robot-line mr-2"></i>
                  AI Study Features
                </span>
                <span className="inline-flex items-center bg-emerald-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-emerald-100 font-medium border border-emerald-400/30 hover:bg-emerald-500/40 transition-all duration-300 hover:scale-105">
                  <i className="ri-parent-line mr-2"></i>
                  Parent Tracking
                </span>
                <span className="inline-flex items-center bg-purple-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-purple-100 font-medium border border-purple-400/30 hover:bg-purple-500/40 transition-all duration-300 hover:scale-105">
                  <i className="ri-dashboard-3-line mr-2"></i>
                  Multi-Role Dashboards
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up [animation-delay:1s]">
              <Link href="/auth/register">
                <Button
                  size="lg"
                  className="w-56 h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <i className="ri-dashboard-line mr-2 text-xl"></i>
                  Premium Portal
                </Button>
              </Link>
              <Link href="/auth/dashboard-login">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-56 h-14 text-lg font-semibold bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <i className="ri-user-add-line mr-2 text-xl"></i>
                  Access Dashboard
                </Button>
              </Link>
            </div>

            <section
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16"
              aria-label="TrackSkool Key Features"
            >
              {[
                {
                  icon: "ri-calendar-check-line",
                  title: "Smart Attendance Tracking",
                  description:
                    "AI-powered attendance system with visual grid interface and automated reporting for parents and administrators.",
                  color: "blue",
                  delay: "0s",
                },
                {
                  icon: "ri-file-text-line",
                  title: "Assignment Management",
                  description:
                    "Create, distribute, and grade assignments with AI-assisted tools and comprehensive progress tracking.",
                  color: "emerald",
                  delay: "0.2s",
                },
                {
                  icon: "ri-book-open-line",
                  title: "Digital Library System",
                  description:
                    "Complete library management with digital catalog, book tracking, and automated overdue notifications.",
                  color: "amber",
                  delay: "0.4s",
                },
                {
                  icon: "ri-chat-3-line",
                  title: "Communication Hub",
                  description:
                    "Seamless communication between teachers, parents, and students with announcements and event management.",
                  color: "purple",
                  delay: "0.6s",
                },
              ].map((feature, index) => (
                <article
                  key={index}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 hover:border-white/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up`}
                  style={{ animationDelay: feature.delay }}
                >
                  <div
                    className={`w-16 h-16 bg-${feature.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-${feature.color}-400/30`}
                  >
                    <i className={`${feature.icon} text-3xl text-${feature.color}-300`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                </article>
              ))}
            </section>

            <section className="max-w-6xl mx-auto animate-fade-in-up [animation-delay:1.2s]">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                Comprehensive School Management Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                      <i className="ri-admin-line text-2xl text-blue-300"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">For Administrators</h3>
                  </div>
                  <ul className="text-blue-100 space-y-3">
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Complete school oversight and reporting
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Staff and student management
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Financial tracking and fee management
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Academic performance analytics
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                      <i className="ri-parent-line text-2xl text-purple-300"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">For Parents</h3>
                  </div>
                  <ul className="text-blue-100 space-y-3">
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Real-time ward progress tracking
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Attendance and grade monitoring
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Direct teacher communication
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Event and announcement updates
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
                      <i className="ri-user-line text-2xl text-emerald-300"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">For Teachers</h3>
                  </div>
                  <ul className="text-blue-100 space-y-3">
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Class management and attendance
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Assignment creation and grading
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Student progress monitoring
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Parent communication tools
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mr-4">
                      <i className="ri-graduation-cap-line text-2xl text-amber-300"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">For Students</h3>
                  </div>
                  <ul className="text-blue-100 space-y-3">
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Personal dashboard and grades
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Assignment submission portal
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Timetable and schedule access
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Library and resource access
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                      <i className="ri-book-2-line text-2xl text-cyan-300"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">For Librarians</h3>
                  </div>
                  <ul className="text-blue-100 space-y-3">
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Digital catalog management
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Book issue and return tracking
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Overdue notifications system
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Reading analytics and reports
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center mr-4">
                      <i className="ri-hotel-bed-line text-2xl text-rose-300"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">For Hostel Managers</h3>
                  </div>
                  <ul className="text-blue-100 space-y-3">
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Room allocation and management
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Student check-in/out tracking
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Maintenance request handling
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-emerald-400 mr-3"></i>
                      Meal planning and inventory
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="max-w-6xl mx-auto mt-20 animate-fade-in-up [animation-delay:1.4s]">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Why Choose TrackSkool?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-shield-check-line text-2xl text-blue-300"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Secure & Reliable</h3>
                      <p className="text-blue-100">
                        Enterprise-grade security with 99.9% uptime guarantee and regular data backups.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-smartphone-line text-2xl text-emerald-300"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Mobile Responsive</h3>
                      <p className="text-blue-100">
                        Access your dashboard from any device with our fully responsive design and mobile apps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-customer-service-2-line text-2xl text-purple-300"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                      <p className="text-blue-100">
                        Round-the-clock customer support with dedicated account managers for premium users.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300 mb-2">500+</div>
                      <div className="text-blue-100">Schools Using</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300 mb-2">50K+</div>
                      <div className="text-blue-100">Active Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300 mb-2">99.9%</div>
                      <div className="text-blue-100">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300 mb-2">4.9/5</div>
                      <div className="text-blue-100">User Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-6xl mx-auto mt-20 animate-fade-in-up [animation-delay:1.6s]">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Get in Touch</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-blue-100 mb-2 font-medium">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-blue-100 mb-2 font-medium">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-blue-100 mb-2 font-medium">School/Organization</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your school name"
                      />
                    </div>
                    <div>
                      <label className="block text-blue-100 mb-2 font-medium">Subject</label>
                      <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300">
                        <option value="">Select a subject</option>
                        <option value="demo">Request Demo</option>
                        <option value="pricing">Pricing Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-blue-100 mb-2 font-medium">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <i className="ri-send-plane-line mr-2"></i>
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                          <i className="ri-mail-line text-2xl text-blue-300"></i>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Email</h4>
                          <p className="text-blue-100">admin@trackskool.co.uk</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                          <i className="ri-phone-line text-2xl text-emerald-300"></i>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Phone</h4>
                          <p className="text-blue-100">+44 20 7946 0958</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                          <i className="ri-map-pin-line text-2xl text-purple-300"></i>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Address</h4>
                          <p className="text-blue-100">
                            123 Education Street
                            <br />
                            London, UK EC1A 1BB
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                          <i className="ri-time-line text-2xl text-amber-300"></i>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Business Hours</h4>
                          <p className="text-blue-100">
                            Mon - Fri: 9:00 AM - 6:00 PM
                            <br />
                            Sat: 10:00 AM - 4:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="https://facebook.com/trackskool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-blue-600/20 rounded-xl border border-blue-500/30 hover:bg-blue-600/30 transition-all duration-300 group"
                      >
                        <i className="ri-facebook-fill text-2xl text-blue-300 group-hover:text-blue-200"></i>
                        <span className="text-white font-medium">Facebook</span>
                      </a>
                      <a
                        href="https://twitter.com/trackskool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-sky-600/20 rounded-xl border border-sky-500/30 hover:bg-sky-600/30 transition-all duration-300 group"
                      >
                        <i className="ri-twitter-x-fill text-2xl text-sky-300 group-hover:text-sky-200"></i>
                        <span className="text-white font-medium">Twitter</span>
                      </a>
                      <a
                        href="https://linkedin.com/company/trackskool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-blue-700/20 rounded-xl border border-blue-600/30 hover:bg-blue-700/30 transition-all duration-300 group"
                      >
                        <i className="ri-linkedin-fill text-2xl text-blue-300 group-hover:text-blue-200"></i>
                        <span className="text-white font-medium">LinkedIn</span>
                      </a>
                      <a
                        href="https://instagram.com/trackskool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-pink-600/20 rounded-xl border border-pink-500/30 hover:bg-pink-600/30 transition-all duration-300 group"
                      >
                        <i className="ri-instagram-fill text-2xl text-pink-300 group-hover:text-pink-200"></i>
                        <span className="text-white font-medium">Instagram</span>
                      </a>
                    </div>
                  </div>

                  {/* Quick Support */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">Quick Support</h3>
                    <div className="space-y-4">
                      <a
                        href="https://wa.me/442079460958"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-green-600/20 rounded-xl border border-green-500/30 hover:bg-green-600/30 transition-all duration-300 group w-full"
                      >
                        <i className="ri-whatsapp-fill text-2xl text-green-300 group-hover:text-green-200"></i>
                        <div>
                          <span className="text-white font-medium block">WhatsApp Support</span>
                          <span className="text-green-200 text-sm">Chat with us instantly</span>
                        </div>
                      </a>
                      <a
                        href="https://t.me/trackskool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-blue-500/20 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 group w-full"
                      >
                        <i className="ri-telegram-fill text-2xl text-blue-300 group-hover:text-blue-200"></i>
                        <div>
                          <span className="text-white font-medium block">Telegram</span>
                          <span className="text-blue-200 text-sm">Join our community</span>
                        </div>
                      </a>
                      <a
                        href="mailto:admin@trackskool.co.uk"
                        className="flex items-center space-x-3 p-4 bg-purple-600/20 rounded-xl border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300 group w-full"
                      >
                        <i className="ri-mail-fill text-2xl text-purple-300 group-hover:text-purple-200"></i>
                        <div>
                          <span className="text-white font-medium block">Direct Email</span>
                          <span className="text-purple-200 text-sm">Get detailed support</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-6xl mx-auto mt-20 animate-fade-in-up [animation-delay:1.8s]">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">How do I get started with TrackSkool?</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Simply contact our admin team through any of the platforms above. We'll schedule a demo, discuss
                    your requirements, and set up your school's customized dashboard within 24-48 hours.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Is there a free trial available?</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Yes! We offer a 14-day free trial with full access to all features. No credit card required. Contact
                    us to activate your trial account.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Can I migrate data from my current system?</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Our technical team provides free data migration services from most popular school management
                    systems. We ensure zero data loss during the transition.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">What kind of support do you provide?</h3>
                  <p className="text-blue-100 leading-relaxed">
                    We provide 24/7 technical support via WhatsApp, Telegram, email, and phone. Premium users get
                    dedicated account managers and priority support.
                  </p>
                </div>
              </div>
            </section>

            <section className="max-w-4xl mx-auto mt-20 text-center animate-fade-in-up [animation-delay:2s]">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your School?</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Join 500+ schools already using TrackSkool to streamline their operations and improve educational
                  outcomes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:admin@trackskool.co.uk?subject=Demo Request&body=Hi, I would like to schedule a demo of TrackSkool for my school."
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <i className="ri-calendar-line mr-2 text-xl"></i>
                    Schedule Demo
                  </a>
                  <a
                    href="https://wa.me/442079460958?text=Hi, I'm interested in TrackSkool for my school. Can you provide more information?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <i className="ri-whatsapp-line mr-2 text-xl"></i>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "TrackSkool - Best School Management Software",
              description:
                "AI-powered school management system with comprehensive dashboards for administrators, teachers, parents, students, librarians, and hostel managers.",
              url: "https://trackskool.co.uk",
              mainEntity: {
                "@type": "SoftwareApplication",
                name: "TrackSkool",
                applicationCategory: "EducationalApplication",
                description: "Comprehensive school management software with AI study features and parent tracking.",
                featureList: [
                  "AI Study Features",
                  "Smart Attendance Tracking",
                  "Assignment Management",
                  "Digital Library System",
                  "Communication Hub",
                  "Parent Progress Tracking",
                ],
              },
            }),
          }}
        />
      </div>
    </ThemeProvider>
  )
}





// "use client"

// import Link from "next/link"
// import { ThemeProvider } from "../components/ThemeProvider"
// import Button2 from "@/components/ui/Button2"
// import { useEffect, useState } from "react"

// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [scrollY, setScrollY] = useState(0)

//   useEffect(() => {
//     setIsVisible(true)
    
//     const handleScroll = () => setScrollY(window.scrollY)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <ThemeProvider>
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//         {/* Hero Section with Parallax */}
//         <div
//           className="relative min-h-screen flex items-center justify-center overflow-hidden"
//           style={{
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed",
//             transform: `translateY(${scrollY * 0.5}px)`,
//           }}
//         >
//           {/* Animated Background Elements */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
          
//           {/* Floating Elements */}
//           <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
//           <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce delay-2000"></div>
//           <div className="absolute bottom-32 left-20 w-12 h-12 bg-teal-500/10 rounded-full animate-bounce delay-3000"></div>

//           <div className={`relative z-10 text-center px-6 py-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             {/* Logo with Animation */}
//             <div className="mb-8 animate-fade-in-up">
//               <div className="flex justify-center mb-6">
//                 <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 animate-pulse">
//                   <i className="ri-graduation-cap-line text-white text-4xl w-12 h-12 flex items-center justify-center"></i>
//                 </div>
//               </div>
              
//               <h1 className="text-6xl md:text-7xl font-['Pacifico'] text-white mb-4 animate-fade-in-up delay-300">
//                 TrackSkool
//               </h1>
              
//               <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 animate-fade-in-up delay-500"></div>
              
//               <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 animate-fade-in-up delay-700">
//                 Revolutionary School Management
//               </h2>
              
//               <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-1000">
//                 Transform education with AI-powered school management. Seamlessly connect administrators, teachers, parents, students, librarians, and hostel managers in one intelligent ecosystem.
//               </p>
              
//               {/* Feature Tags with Animation */}
//               <div className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-1200">
//                 <span className="inline-block bg-gradient-to-r from-blue-500/30 to-blue-600/30 backdrop-blur-sm px-4 py-2 rounded-full mr-3 mb-3 border border-blue-400/20 hover:scale-105 transition-transform duration-300">
//                   🤖 AI Study Features
//                 </span>
//                 <span className="inline-block bg-gradient-to-r from-green-500/30 to-green-600/30 backdrop-blur-sm px-4 py-2 rounded-full mr-3 mb-3 border border-green-400/20 hover:scale-105 transition-transform duration-300">
//                   📊 Real-time Analytics
//                 </span>
//                 <span className="inline-block bg-gradient-to-r from-purple-500/30 to-purple-600/30 backdrop-blur-sm px-4 py-2 rounded-full mr-3 mb-3 border border-purple-400/20 hover:scale-105 transition-transform duration-300">
//                   👨‍👩‍👧‍👦 Parent Tracking
//                 </span>
//                 <span className="inline-block bg-gradient-to-r from-orange-500/30 to-orange-600/30 backdrop-blur-sm px-4 py-2 rounded-full mr-3 mb-3 border border-orange-400/20 hover:scale-105 transition-transform duration-300">
//                   🏫 Multi-Role Dashboards
//                 </span>
//               </div>
//             </div>

//             {/* CTA Buttons with Enhanced Animation */}
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16 animate-fade-in-up delay-1400">
//               <Link href="/auth/register">
//                 <Button2 
//                   size="lg" 
//                   className="w-56 h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
//                 >
//                   <i className="ri-dashboard-line mr-3 w-6 h-6 flex items-center justify-center"></i>
//                   Start Free Trial
//                 </Button2>
//               </Link>
//               <Link href="/auth/dashboard-login">
//                 <Button2
//                   size="lg"
//                   variant="outline"
//                   className="w-56 h-14 text-lg font-semibold bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-2xl"
//                 >
//                   <i className="ri-login-box-line mr-3 w-6 h-6 flex items-center justify-center"></i>                  
//                   Access Dashboard
//                 </Button2>
//               </Link>
//             </div>

//             {/* Enhanced Feature Grid */}
//             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto animate-fade-in-up delay-1600" aria-label="TrackSkool Key Features">
//               {[
//                 {
//                   icon: "ri-calendar-check-line",
//                   title: "Smart Attendance",
//                   description: "AI-powered attendance tracking with facial recognition and automated reporting for seamless monitoring.",
//                   color: "blue",
//                   delay: "delay-100"
//                 },
//                 {
//                   icon: "ri-file-text-line", 
//                   title: "Assignment Hub",
//                   description: "Create, distribute, and grade assignments with AI assistance and comprehensive progress analytics.",
//                   color: "green",
//                   delay: "delay-200"
//                 },
//                 {
//                   icon: "ri-book-open-line",
//                   title: "Digital Library",
//                   description: "Complete library ecosystem with digital catalog, smart recommendations, and automated management.",
//                   color: "purple",
//                   delay: "delay-300"
//                 },
//                 {
//                   icon: "ri-chat-3-line",
//                   title: "Communication Center",
//                   description: "Unified communication platform connecting teachers, parents, and students with real-time updates.",
//                   color: "orange",
//                   delay: "delay-400"
//                 }
//               ].map((feature, index) => (
//                 <article 
//                   key={index}
//                   className={`group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${feature.delay} animate-fade-in-up`}
//                 >
//                   <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-2xl flex items-center justify-center group-hover:animate-bounce`}>
//                     <i className={`${feature.icon} text-2xl text-white`}></i>
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">{feature.title}</h3>
//                   <p className="text-gray-200 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{feature.description}</p>
//                 </article>
//               ))}
//             </section>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Sections with Scroll Animations */}
//         <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-20 animate-fade-in-up">
//               <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
//                 Comprehensive Role-Based Management
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
//               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//                 Tailored dashboards and features for every stakeholder in your educational institution
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//               {[
//                 {
//                   role: "Administrators",
//                   icon: "ri-admin-line",
//                   features: ["Complete school oversight", "Staff management", "Financial tracking", "Performance analytics", "Policy management"],
//                   color: "red"
//                 },
//                 {
//                   role: "Teachers",
//                   icon: "ri-user-3-line",
//                   features: ["Class management", "Assignment creation", "Grade tracking", "Student progress", "Parent communication"],
//                   color: "blue"
//                 },
//                 {
//                   role: "Parents",
//                   icon: "ri-parent-line",
//                   features: ["Child progress tracking", "Attendance monitoring", "Teacher communication", "Event notifications", "Fee management"],
//                   color: "green"
//                 },
//                 {
//                   role: "Students",
//                   icon: "ri-user-star-line",
//                   features: ["Personal dashboard", "Assignment tracking", "Grade viewing", "Schedule access", "Resource library"],
//                   color: "purple"
//                 },
//                 {
//                   role: "Librarians", 
//                   icon: "ri-book-3-line",
//                   features: ["Catalog management", "Book tracking", "Digital resources", "Student records", "Overdue notifications"],
//                   color: "orange"
//                 },
//                 {
//                   role: "Hostel Managers",
//                   icon: "ri-building-line",
//                   features: ["Room allocation", "Student welfare", "Attendance tracking", "Meal management", "Safety protocols"],
//                   color: "teal"
//                 }
//               ].map((role, index) => (
//                 <div 
//                   key={index}
//                   className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
//                   style={{animationDelay: `${index * 100}ms`}}
//                 >
//                   <div className={`w-16 h-16 bg-gradient-to-br from-${role.color}-400 to-${role.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse`}>
//                     <i className={`${role.icon} text-2xl text-white`}></i>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">For {role.role}</h3>
//                   <ul className="space-y-3">
//                     {role.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
//                         <i className="ri-check-line text-green-500 mr-3 text-lg"></i>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               {[
//                 { number: "10,000+", label: "Students Managed" },
//                 { number: "500+", label: "Schools Trust Us" },
//                 { number: "50,000+", label: "Parents Connected" },
//                 { number: "99.9%", label: "Uptime Guarantee" }
//               ].map((stat, index) => (
//                 <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
//                   <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
//                   <div className="text-blue-100 text-lg">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white text-center">
//           <div className="max-w-4xl mx-auto px-6 animate-fade-in-up">
//             <h2 className="text-5xl font-bold mb-8">Ready to Transform Your School?</h2>
//             <p className="text-xl mb-12 text-gray-200">
//               Join thousands of educational institutions already using TrackSkool to revolutionize their management systems.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//               <Link href="/auth/register">
//                 <Button2 
//                   size="lg" 
//                   className="w-64 h-16 text-xl font-bold bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
//                 >
//                   Get Started Today
//                 </Button2>
//               </Link>
//               <Link href="/contact">
//                 <Button2
//                   size="lg"
//                   variant="outline"
//                   className="w-64 h-16 text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
//                 >
//                   Schedule Demo
//                 </Button2>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               "name": "TrackSkool - Best School Management Software",
//               "description": "AI-powered school management system with comprehensive dashboards for administrators, teachers, parents, students, librarians, and hostel managers.",
//               "url": "https://trackskool.co.uk",
//               "mainEntity": {
//                 "@type": "SoftwareApplication",
//                 "name": "TrackSkool",
//                 "applicationCategory": "EducationalApplication",
//                 "description": "Comprehensive school management software with AI study features and parent tracking.",
//                 "featureList": [
//                   "AI Study Features",
//                   "Smart Attendance Tracking", 
//                   "Assignment Management",
//                   "Digital Library System",
//                   "Communication Hub",
//                   "Parent Progress Tracking"
//                 ]
//               }
//             })
//           }}
//         />

//         {/* Custom CSS for animations */}
//         <style jsx>{`
//           @keyframes fade-in-up {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
          
//           .animate-fade-in-up {
//             animation: fade-in-up 0.8s ease-out forwards;
//           }
          
//           .delay-100 { animation-delay: 0.1s; }
//           .delay-200 { animation-delay: 0.2s; }
//           .delay-300 { animation-delay: 0.3s; }
//           .delay-400 { animation-delay: 0.4s; }
//           .delay-500 { animation-delay: 0.5s; }
//           .delay-700 { animation-delay: 0.7s; }
//           .delay-1000 { animation-delay: 1s; }
//           .delay-1200 { animation-delay: 1.2s; }
//           .delay-1400 { animation-delay: 1.4s; }
//           .delay-1600 { animation-delay: 1.6s; }
//         `}</style>
//       </div>
//     </ThemeProvider>
//   )
// }