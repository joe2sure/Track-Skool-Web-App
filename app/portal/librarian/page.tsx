"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../../../components/Header"
// import Card from "../../../components/ui/card"
// import Button from "../../../components/ui/button"
import Input from "../../../components/ui/Input"
import { ThemeProvider } from "../../../components/ThemeProvider"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LibrarianPortal() {
  const [userData, setUserData] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    copies: 1,
  })
  const router = useRouter()

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0-06-112008-4",
      category: "Fiction",
      available: 3,
      total: 5,
      location: "Section A, Shelf 12",
    },
    {
      id: 2,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      isbn: "978-0-262-03384-8",
      category: "Computer Science",
      available: 2,
      total: 3,
      location: "Section C, Shelf 5",
    },
  ])

  const [checkouts, setCheckouts] = useState([
    {
      id: 1,
      studentId: "STU001",
      studentName: "John Doe",
      bookTitle: "The Great Gatsby",
      checkoutDate: "2024-03-10",
      dueDate: "2024-03-24",
      status: "active",
    },
    {
      id: 2,
      studentId: "STU002",
      studentName: "Jane Smith",
      bookTitle: "Physics Principles",
      checkoutDate: "2024-03-05",
      dueDate: "2024-03-19",
      status: "overdue",
    },
  ])

  useEffect(() => {
    const userType = localStorage.getItem("portalUserType")
    const storedUserData = localStorage.getItem("portalUserData")

    if (userType !== "librarian" || !storedUserData) {
      router.push("/auth/portal")
      return
    }

    setUserData(JSON.parse(storedUserData))
  }, [router])

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.isbn) {
      const book = {
        id: books.length + 1,
        ...newBook,
        available: newBook.copies,
        total: newBook.copies,
        location: "To be assigned",
      }
      setBooks([...books, book])
      setNewBook({ title: "", author: "", isbn: "", category: "", copies: 1 })
      alert("Book added successfully!")
    }
  }

  const handleCheckout = (studentId: string, bookId: number) => {
    const book = books.find((b) => b.id === bookId)
    if (book && book.available > 0) {
      const checkout = {
        id: checkouts.length + 1,
        studentId,
        studentName: `Student ${studentId}`,
        bookTitle: book.title,
        checkoutDate: new Date().toISOString().split("T")[0],
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        status: "active" as const,
      }
      setCheckouts([...checkouts, checkout])
      setBooks(books.map((b) => (b.id === bookId ? { ...b, available: b.available - 1 } : b)))
      alert("Book checked out successfully!")
    }
  }

  const handleReturn = (checkoutId: number) => {
    const checkout = checkouts.find((c) => c.id === checkoutId)
    if (checkout) {
      const book = books.find((b) => b.title === checkout.bookTitle)
      if (book) {
        setBooks(books.map((b) => (b.title === checkout.bookTitle ? { ...b, available: b.available + 1 } : b)))
      }
      setCheckouts(checkouts.filter((c) => c.id !== checkoutId))
      alert("Book returned successfully!")
    }
  }

  if (!userData) {
    return <div>Loading...</div>
  }

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.isbn.includes(searchQuery),
  )

  const overdueBooks = checkouts.filter((checkout) => checkout.status === "overdue")
  const totalBooks = books.reduce((sum, book) => sum + book.total, 0)
  const availableBooks = books.reduce((sum, book) => sum + book.available, 0)
  const checkedOutBooks = totalBooks - availableBooks

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Librarian Portal</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Librarian ID: {userData.librarianId} | School: {userData.schoolId}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              {[
                { id: "dashboard", label: "Dashboard", icon: "ri-dashboard-line" },
                { id: "books", label: "Books", icon: "ri-book-line" },
                { id: "checkouts", label: "Checkouts", icon: "ri-bookmark-line" },
                { id: "overdue", label: "Overdue", icon: "ri-time-line" },
                { id: "analytics", label: "Analytics", icon: "ri-bar-chart-line" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <i className={`${tab.icon} mr-2 w-4 h-4 flex items-center justify-center`}></i>
                  {tab.label}
                  {tab.id === "overdue" && overdueBooks.length > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {overdueBooks.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">Total Books</p>
                      <p className="text-3xl font-bold">{totalBooks}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="ri-book-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-100 text-sm font-medium">Available</p>
                      <p className="text-3xl font-bold">{availableBooks}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="ri-book-open-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-amber-100 text-sm font-medium">Checked Out</p>
                      <p className="text-3xl font-bold">{checkedOutBooks}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="ri-bookmark-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm font-medium">Overdue</p>
                      <p className="text-3xl font-bold">{overdueBooks.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="ri-time-line text-2xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { action: "Book Checked Out", details: "STU001 - The Great Gatsby", time: "2 hours ago" },
                      { action: "Book Returned", details: "STU003 - Physics Principles", time: "4 hours ago" },
                      { action: "New Book Added", details: "Introduction to Chemistry", time: "1 day ago" },
                      { action: "Overdue Notice", details: "STU002 - Mathematics Handbook", time: "2 days ago" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                          <i className="ri-history-line text-blue-600 dark:text-blue-400"></i>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm">{activity.action}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-300">
                            {activity.details} • {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("books")}>
                      <i className="ri-book-add-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      Add Book
                    </Button>
                    <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("checkouts")}>
                      <i className="ri-bookmark-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      Checkout Book
                    </Button>
                    <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("overdue")}>
                      <i className="ri-time-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      View Overdue
                    </Button>
                    <Button className="justify-start" variant="ghost" onClick={() => setActiveTab("analytics")}>
                      <i className="ri-bar-chart-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      View Analytics
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Books Tab */}
          {activeTab === "books" && (
            <div className="space-y-6">
              {/* Add New Book */}
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Book</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Input
                    placeholder="Book Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                  />
                  <Input
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                  />
                  <Input
                    placeholder="ISBN"
                    value={newBook.isbn}
                    onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
                  />
                  <select
                    value={newBook.category}
                    onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
                  >
                    <option value="">Select Category</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Science">Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="History">History</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                  <Input
                    type="number"
                    placeholder="Number of Copies"
                    value={newBook.copies.toString()}
                    onChange={(e) => setNewBook({ ...newBook, copies: Number.parseInt(e.target.value) || 1 })}
                  />
                  <Button onClick={handleAddBook}>
                    <i className="ri-add-line mr-2"></i>
                    Add Book
                  </Button>
                </div>
              </Card>

              {/* Search Books */}
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Book Inventory</h3>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <i className="ri-search-line text-gray-400 text-sm w-4 h-4 flex items-center justify-center"></i>
                    </div>
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search books..."
                      className="pl-10 w-64"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Title</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Author</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Category</th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Available</th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Total</th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900 dark:text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBooks.map((book) => (
                        <tr key={book.id} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">{book.title}</td>
                          <td className="py-3 px-4 text-gray-900 dark:text-white">{book.author}</td>
                          <td className="py-3 px-4 text-gray-900 dark:text-white">{book.category}</td>
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                book.available > 0
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                              }`}
                            >
                              {book.available}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center text-gray-900 dark:text-white">{book.total}</td>
                          <td className="py-3 px-4 text-center">
                            <div className="flex justify-center space-x-2">
                              <Button size="sm" variant="ghost">
                                <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                              </Button>
                              <Button size="sm" variant="ghost">
                                <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Checkouts Tab */}
          {activeTab === "checkouts" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Active Checkouts</h3>
                <div className="space-y-3">
                  {checkouts
                    .filter((checkout) => checkout.status === "active")
                    .map((checkout) => (
                      <div
                        key={checkout.id}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{checkout.bookTitle}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {checkout.studentName} ({checkout.studentId}) • Due: {checkout.dueDate}
                          </p>
                        </div>
                        <Button size="sm" onClick={() => handleReturn(checkout.id)}>
                          Return Book
                        </Button>
                      </div>
                    ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Checkout New Book</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input placeholder="Student ID" />
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8">
                    <option value="">Select Book</option>
                    {books
                      .filter((book) => book.available > 0)
                      .map((book) => (
                        <option key={book.id} value={book.id}>
                          {book.title} ({book.available} available)
                        </option>
                      ))}
                  </select>
                  <Button>Checkout Book</Button>
                </div>
              </Card>
            </div>
          )}

          {/* Overdue Tab */}
          {activeTab === "overdue" && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Overdue Books</h3>
                {overdueBooks.length > 0 ? (
                  <div className="space-y-3">
                    {overdueBooks.map((checkout) => (
                      <div
                        key={checkout.id}
                        className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800"
                      >
                        <div>
                          <h4 className="font-medium text-red-900 dark:text-red-100">{checkout.bookTitle}</h4>
                          <p className="text-sm text-red-700 dark:text-red-300">
                            {checkout.studentName} ({checkout.studentId}) • Due: {checkout.dueDate}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Send Reminder
                          </Button>
                          <Button size="sm" onClick={() => handleReturn(checkout.id)}>
                            Return Book
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <i className="ri-check-line text-4xl text-green-500 mb-2"></i>
                    <p className="text-gray-500 dark:text-gray-400">No overdue books!</p>
                  </div>
                )}
              </Card>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Categories</h3>
                  <div className="space-y-3">
                    {[
                      { category: "Fiction", checkouts: 45, percentage: 35 },
                      { category: "Science", checkouts: 32, percentage: 25 },
                      { category: "Mathematics", checkouts: 28, percentage: 22 },
                      { category: "History", checkouts: 23, percentage: 18 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{item.category}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.checkouts} checkouts</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {item.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Monthly Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Books Added</span>
                      <span className="font-semibold text-gray-900 dark:text-white">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Total Checkouts</span>
                      <span className="font-semibold text-gray-900 dark:text-white">128</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Books Returned</span>
                      <span className="font-semibold text-gray-900 dark:text-white">115</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Average Days Out</span>
                      <span className="font-semibold text-gray-900 dark:text-white">8.5</span>
                    </div>
                  </div>
                </Card>
              </div>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Usage Trends</h3>
                <div className="text-center py-8">
                  <i className="ri-line-chart-line text-4xl text-gray-400 dark:text-gray-500 mb-2"></i>
                  <p className="text-gray-500 dark:text-gray-400">Chart visualization would be implemented here</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">Showing library usage over time</p>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  )
}
