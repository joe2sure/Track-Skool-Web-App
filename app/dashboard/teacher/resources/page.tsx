"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/parent/input"
import { Label } from "@/components/ui/parent/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog/dialog"
import {
  BookOpen,
  Plus,
  Search,
  Download,
  Upload,
  Eye,
  Edit,
  Share,
  FolderIcon,
  FileText,
  ImageIcon,
  Video,
  Link,
  Star,
  Clock,
  Users,
} from "lucide-react"
import { TeacherSidebar } from "@/components/dashboard/teacher/teacher-sidebar"
import { TeacherHeader } from "@/components/dashboard/teacher/teacher-header"
import useLargeScreen from "@/hooks/useLargeScreen"

type Resource = {
  id: number
  title: string
  description: string
  type: "document" | "video" | "image" | "link" | "presentation"
  subject: string
  grade: string
  fileSize?: string
  uploadDate: string
  downloads: number
  rating: number
  tags: string[]
  isShared: boolean
  author: string
}

type FolderType = {
  id: number
  name: string
  resourceCount: number
  lastModified: string
  color: string
}

export default function TeacherResources() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedView, setSelectedView] = useState("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false)
  const isLargeScreen = useLargeScreen()

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const folders: FolderType[] = [
    {
      id: 1,
      name: "Mathematics Grade 10",
      resourceCount: 24,
      lastModified: "2 days ago",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      name: "Algebra Grade 11",
      resourceCount: 18,
      lastModified: "1 week ago",
      color: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      name: "Calculus Grade 12",
      resourceCount: 15,
      lastModified: "3 days ago",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 4,
      name: "Teaching Templates",
      resourceCount: 12,
      lastModified: "1 day ago",
      color: "bg-orange-100 text-orange-800",
    },
  ]

  const resources: Resource[] = [
    {
      id: 1,
      title: "Quadratic Equations Worksheet",
      description: "Comprehensive worksheet covering quadratic equations with solutions",
      type: "document",
      subject: "Mathematics",
      grade: "Grade 10",
      fileSize: "2.4 MB",
      uploadDate: "March 10, 2025",
      downloads: 45,
      rating: 4.8,
      tags: ["worksheet", "quadratic", "algebra"],
      isShared: true,
      author: "Sarah Mitchell",
    },
    {
      id: 2,
      title: "Introduction to Calculus Video",
      description: "Educational video explaining basic calculus concepts",
      type: "video",
      subject: "Mathematics",
      grade: "Grade 12",
      fileSize: "156 MB",
      uploadDate: "March 8, 2025",
      downloads: 32,
      rating: 4.9,
      tags: ["video", "calculus", "introduction"],
      isShared: true,
      author: "Sarah Mitchell",
    },
    {
      id: 3,
      title: "Algebra Formula Reference",
      description: "Quick reference sheet for common algebra formulas",
      type: "image",
      subject: "Mathematics",
      grade: "Grade 11",
      fileSize: "1.2 MB",
      uploadDate: "March 5, 2025",
      downloads: 67,
      rating: 4.7,
      tags: ["reference", "formulas", "algebra"],
      isShared: false,
      author: "Sarah Mitchell",
    },
    {
      id: 4,
      title: "Khan Academy Math Resources",
      description: "Link to comprehensive math resources on Khan Academy",
      type: "link",
      subject: "Mathematics",
      grade: "All Grades",
      uploadDate: "March 3, 2025",
      downloads: 89,
      rating: 4.9,
      tags: ["external", "comprehensive", "practice"],
      isShared: true,
      author: "Sarah Mitchell",
    },
    {
      id: 5,
      title: "Geometry Presentation",
      description: "Interactive presentation on geometric shapes and properties",
      type: "presentation",
      subject: "Mathematics",
      grade: "Grade 9",
      fileSize: "8.7 MB",
      uploadDate: "March 1, 2025",
      downloads: 23,
      rating: 4.6,
      tags: ["presentation", "geometry", "interactive"],
      isShared: true,
      author: "Sarah Mitchell",
    },
  ]

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="w-8 h-8 text-blue-600" />
      case "video":
        return <Video className="w-8 h-8 text-red-600" />
      case "image":
        return <ImageIcon className="w-8 h-8 text-green-600" />
      case "link":
        return <Link className="w-8 h-8 text-purple-600" />
      case "presentation":
        return <FileText className="w-8 h-8 text-orange-600" />
      default:
        return <FileText className="w-8 h-8 text-gray-600" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "document":
        return "bg-blue-100 text-blue-800"
      case "video":
        return "bg-red-100 text-red-800"
      case "image":
        return "bg-green-100 text-green-800"
      case "link":
        return "bg-purple-100 text-purple-800"
      case "presentation":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesFilter = selectedFilter === "all" || resource.type === selectedFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="flex h-screen bg-gray-50">
      {(isLargeScreen || isSidebarOpen) && (
        <TeacherSidebar isOpen={isLargeScreen || isSidebarOpen} onToggleSidebar={toggleSidebar} />
      )}

      {isSidebarOpen && <div className="fixed inset-0 top-0 bg-black/70 z-40 lg:hidden" onClick={toggleSidebar} />}

      <div className="flex-1 flex flex-col overflow-hidden">
        <TeacherHeader onMenuToggle={toggleSidebar} />

        <main className="flex-1 overflow-y-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Teaching Resources</h1>
                <p className="text-blue-100">Organize and share your teaching materials and resources</p>
              </div>
              <div className="hidden md:flex space-x-3">
                <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Resource
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Upload New Resource</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Resource Title</Label>
                        <Input placeholder="Enter resource title" />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Input placeholder="Brief description of the resource" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="science">Science</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="history">History</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="grade">Grade Level</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="grade9">Grade 9</SelectItem>
                              <SelectItem value="grade10">Grade 10</SelectItem>
                              <SelectItem value="grade11">Grade 11</SelectItem>
                              <SelectItem value="grade12">Grade 12</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="file">File Upload</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">Drag and drop your file here, or click to browse</p>
                          <p className="text-sm text-gray-500 mt-2">
                            Supports PDF, DOC, PPT, MP4, JPG, PNG (Max 100MB)
                          </p>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="tags">Tags (comma separated)</Label>
                        <Input placeholder="worksheet, algebra, practice" />
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setShowUploadModal(false)}>
                          Cancel
                        </Button>
                        <Button>
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Resource
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog open={showCreateFolderModal} onOpenChange={setShowCreateFolderModal}>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                      <FolderIcon className="w-4 h-4 mr-2" />
                      New Folder
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Folder</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="folderName">Folder Name</Label>
                        <Input placeholder="Enter folder name" />
                      </div>
                      <div>
                        <Label htmlFor="folderColor">Color</Label>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded cursor-pointer border-2 border-blue-300"></div>
                          <div className="w-8 h-8 bg-green-100 rounded cursor-pointer border-2 border-transparent"></div>
                          <div className="w-8 h-8 bg-purple-100 rounded cursor-pointer border-2 border-transparent"></div>
                          <div className="w-8 h-8 bg-orange-100 rounded cursor-pointer border-2 border-transparent"></div>
                          <div className="w-8 h-8 bg-red-100 rounded cursor-pointer border-2 border-transparent"></div>
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setShowCreateFolderModal(false)}>
                          Cancel
                        </Button>
                        <Button>
                          <FolderIcon className="w-4 h-4 mr-2" />
                          Create Folder
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="lg:p-6 p-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Resources</p>
                      <p className="text-2xl font-bold text-gray-900">127</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Shared Resources</p>
                      <p className="text-2xl font-bold text-gray-900">89</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Share className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Downloads</p>
                      <p className="text-2xl font-bold text-gray-900">1,234</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Download className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Storage Used</p>
                      <p className="text-2xl font-bold text-gray-900">2.4 GB</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FolderIcon className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <Progress value={48} className="mt-2" />
                  <p className="text-xs text-gray-500 mt-1">48% of 5 GB used</p>
                </CardContent>
              </Card>
            </div>

            {/* Folders Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Folders</span>
                  <Button size="sm" onClick={() => setShowCreateFolderModal(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    New Folder
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {folders.map((folder) => (
                    <div
                      key={folder.id}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedFolder(folder.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${folder.color}`}>
                          <FolderIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">{folder.name}</p>
                          <p className="text-sm text-gray-500">{folder.resourceCount} resources</p>
                          <p className="text-xs text-gray-400">{folder.lastModified}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="document">Documents</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                  <SelectItem value="image">Images</SelectItem>
                  <SelectItem value="link">Links</SelectItem>
                  <SelectItem value="presentation">Presentations</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex space-x-2">
                <Button
                  variant={selectedView === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedView("grid")}
                >
                  Grid
                </Button>
                <Button
                  variant={selectedView === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedView("list")}
                >
                  List
                </Button>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        {getResourceIcon(resource.type)}
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg truncate">{resource.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={`text-xs ${getTypeColor(resource.type)}`}>{resource.type}</Badge>
                            {resource.isShared && (
                              <Badge variant="outline" className="text-xs">
                                Shared
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm line-clamp-2">{resource.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">
                          {resource.subject} • {resource.grade}
                        </span>
                        {resource.fileSize && <span className="text-gray-500">{resource.fileSize}</span>}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{resource.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-4 h-4 text-gray-400" />
                          <span>{resource.downloads}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {resource.uploadDate}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button className="justify-start" onClick={() => setShowUploadModal(true)}>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Resource
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    <Share className="w-4 h-4 mr-2" />
                    Share Collection
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Bulk Download
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    <Users className="w-4 h-4 mr-2" />
                    Collaborate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
