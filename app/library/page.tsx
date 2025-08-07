"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { ThemeProvider } from "../../components/ThemeProvider";
import Modal from "../../components/ui/Modal";

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterAvailability, setFilterAvailability] = useState("all");
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0-06-112008-4",
      category: "Fiction",
      available: 3,
      total: 5,
      location: "Section A, Shelf 12",
      description:
        "A classic novel about racial injustice and childhood innocence in the American South.",
      publishedYear: 1960,
      pages: 376,
      language: "English",
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "978-0-7432-7356-5",
      category: "Fiction",
      available: 0,
      total: 4,
      location: "Section A, Shelf 8",
      description:
        "The story of Jay Gatsby and his pursuit of the American Dream in the Jazz Age.",
      publishedYear: 1925,
      pages: 180,
      language: "English",
    },
    {
      id: 3,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      isbn: "978-0-262-03384-8",
      category: "Computer Science",
      available: 2,
      total: 3,
      location: "Section C, Shelf 5",
      description: "Comprehensive guide to algorithms and data structures.",
      publishedYear: 2009,
      pages: 1312,
      language: "English",
    },
    {
      id: 4,
      title: "Physics: Principles and Problems",
      author: "Paul W. Zitzewitz",
      isbn: "978-0-07-874524-1",
      category: "Science",
      available: 5,
      total: 8,
      location: "Section B, Shelf 15",
      description:
        "High school physics textbook covering fundamental principles.",
      publishedYear: 2012,
      pages: 912,
      language: "English",
    },
    {
      id: 5,
      title: "World History: Patterns of Interaction",
      author: "Roger B. Beck",
      isbn: "978-0-547-49115-6",
      category: "History",
      available: 1,
      total: 6,
      location: "Section D, Shelf 3",
      description:
        "Comprehensive world history from ancient times to modern era.",
      publishedYear: 2012,
      pages: 1088,
      language: "English",
    },
    {
      id: 6,
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      isbn: "978-1-285-74155-0",
      category: "Mathematics",
      available: 4,
      total: 6,
      location: "Section C, Shelf 10",
      description: "Advanced calculus textbook for college-level mathematics.",
      publishedYear: 2015,
      pages: 1368,
      language: "English",
    },
  ];

  const categories = [
    "all",
    "Fiction",
    "Science",
    "Mathematics",
    "History",
    "Computer Science",
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || book.category === filterCategory;
    const matchesAvailability =
      filterAvailability === "all" ||
      (filterAvailability === "available" && book.available > 0) ||
      (filterAvailability === "unavailable" && book.available === 0);

    return matchesSearch && matchesCategory && matchesAvailability;
  });

  const CheckoutModal = () => {
    const [formData, setFormData] = useState({
      studentId: "",
      dueDate: "",
      notes: "",
    });

    return (
      <div className="space-y-6">
        <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 high-contrast:bg-gray-900 rounded-lg">
          <img
            src={`https://readdy.ai/api/search-image?query=Book%20cover%20design%20for%20$%7BselectedBook%3F.title%7D%2C%20professional%20academic%20book%20cover%2C%20clean%20modern%20design%20with%20title%20and%20author%20visible&width=80&height=120&seq=book-${selectedBook?.id}&orientation=portrait`}
            alt={selectedBook?.title}
            className="w-16 h-24 object-top rounded"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 dark:text-white high-contrast:text-white">
              {selectedBook?.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
              by {selectedBook?.author}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
              ISBN: {selectedBook?.isbn}
            </p>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 high-contrast:text-emerald-300 mt-1">
              {selectedBook?.available} copies available
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Student ID
          </label>
          <Input
            value={formData.studentId}
            onChange={(e) =>
              setFormData({ ...formData, studentId: e.target.value })
            }
            placeholder="Enter student ID"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Due Date
          </label>
          <Input
            type="date"
            value={formData.dueDate}
            onChange={(e) =>
              setFormData({ ...formData, dueDate: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 high-contrast:text-white mb-2">
            Notes (Optional)
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            placeholder="Additional notes..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm resize-none"
            maxLength={500}
          />
        </div>

        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={() => setShowCheckoutModal(false)}>
            Cancel
          </Button>
          <Button onClick={() => setShowCheckoutModal(false)}>
            Check Out Book
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white high-contrast:text-white mb-2">
              Library Management
            </h1>
            <p className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
              Search, browse and manage library books and resources
            </p>
          </div>

          <div className="mb-8">
            <Card>
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <i className="ri-search-line text-gray-400 text-sm w-4 h-4 flex items-center justify-center"></i>
                    </div>
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search books by title, author, or ISBN..."
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>

                  <select
                    value={filterAvailability}
                    onChange={(e) => setFilterAvailability(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm pr-8"
                  >
                    <option value="all">All Books</option>
                    <option value="available">Available</option>
                    <option value="unavailable">Checked Out</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBooks.map((book) => (
                  <Card key={book.id}>
                    <div className="flex space-x-4">
                      <img
                        src={`https://readdy.ai/api/search-image?query=Book%20cover%20design%20for%20$%7Bbook.title%7D%2C%20professional%20academic%20book%20cover%2C%20clean%20modern%20design%20with%20title%20and%20author%20visible%2C%20educational%20textbook%20style&width=80&height=120&seq=book-cover-${book.id}&orientation=portrait`}
                        alt={book.title}
                        className="w-16 h-24 object-top rounded flex-shrink-0"
                      />

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white high-contrast:text-white text-sm">
                              {book.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                              by {book.author}
                            </p>
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              book.available > 0
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            }`}
                          >
                            {book.available > 0 ? "Available" : "Checked Out"}
                          </span>
                        </div>

                        <div className="space-y-1 mb-3">
                          <p className="text-xs text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                            <span className="font-medium">Category:</span>{" "}
                            {book.category}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                            <span className="font-medium">Location:</span>{" "}
                            {book.location}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                            <span className="font-medium">Available:</span>{" "}
                            {book.available}/{book.total} copies
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                            <span className="font-medium">ISBN:</span>{" "}
                            {book.isbn}
                          </p>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant={book.available > 0 ? "primary" : "outline"}
                            disabled={book.available === 0}
                            className="flex-1"
                            onClick={() => {
                              if (book.available > 0) {
                                setSelectedBook(book);
                                setShowCheckoutModal(true);
                              }
                            }}
                          >
                            {book.available > 0 ? "Check Out" : "Unavailable"}
                          </Button>
                          <Button size="sm" variant="ghost">
                            <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredBooks.length === 0 && (
                <Card>
                  <div className="text-center py-8">
                    <i className="ri-book-line text-4xl text-gray-400 dark:text-gray-500 high-contrast:text-gray-400 mb-4 w-10 h-10 flex items-center justify-center mx-auto"></i>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white high-contrast:text-white mb-2">
                      No books found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                      Try adjusting your search criteria or filters.
                    </p>
                  </div>
                </Card>
              )}
            </div>

            <div>
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-4">
                  Library Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                      Total Books
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white high-contrast:text-white">
                      {books.reduce((sum, book) => sum + book.total, 0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                      Available
                    </span>
                    <span className="font-semibold text-emerald-600">
                      {books.reduce((sum, book) => sum + book.available, 0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                      Checked Out
                    </span>
                    <span className="font-semibold text-red-600">
                      {books.reduce(
                        (sum, book) => sum + (book.total - book.available),
                        0
                      )}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700 high-contrast:border-gray-400">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300 high-contrast:text-gray-200">
                        Categories
                      </span>
                      <span className="font-semibold text-blue-600">
                        {categories.length - 1}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-4">
                  Popular Books
                </h3>
                <div className="space-y-3">
                  {books.slice(0, 3).map((book) => (
                    <div key={book.id} className="flex items-center space-x-3">
                      <img
                        src={`https://readdy.ai/api/search-image?query=Book%20cover%20thumbnail%20for%20$%7Bbook.title%7D%2C%20small%20book%20cover%20design%2C%20academic%20textbook%20style&width=40&height=60&seq=popular-${book.id}&orientation=portrait`}
                        alt={book.title}
                        className="w-8 h-12 object-top rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white high-contrast:text-white truncate">
                          {book.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300 high-contrast:text-gray-200 truncate">
                          {book.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white high-contrast:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Button
                    className="w-full justify-start"
                    variant="ghost"
                    size="sm"
                  >
                    <i className="ri-book-add-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Add New Book
                  </Button>
                  <Button
                    className="w-full justify-start"
                    variant="ghost"
                    size="sm"
                  >
                    <i className="ri-file-list-3-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    View All Checkouts
                  </Button>
                  <Button
                    className="w-full justify-start"
                    variant="ghost"
                    size="sm"
                  >
                    <i className="ri-time-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Overdue Books
                  </Button>
                  <Button
                    className="w-full justify-start"
                    variant="ghost"
                    size="sm"
                  >
                    <i className="ri-file-chart-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Generate Report
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          <Modal
            isOpen={showCheckoutModal}
            onClose={() => setShowCheckoutModal(false)}
            title="Check Out Book"
          >
            <CheckoutModal />
          </Modal>
        </main>
      </div>
    </ThemeProvider>
  );
}
