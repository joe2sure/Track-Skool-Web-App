// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Play,
  Plus,
  BarChart3,
  Settings,
  Clock,
  Trophy,
  TrendingUp,
  BookOpen,
  FlaskConical,
  Scroll,
  Calculator,
  Download,
  RefreshCw,
} from "lucide-react"

const quizCategories = [
  {
    subject: "Mathematics",
    icon: Calculator,
    quizzes: 12,
    avgScore: 89,
    completion: 85,
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    subject: "Science",
    icon: FlaskConical,
    quizzes: 15,
    avgScore: 82,
    completion: 78,
    color: "bg-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    subject: "History",
    icon: Scroll,
    quizzes: 8,
    avgScore: 91,
    completion: 92,
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    subject: "Literature",
    icon: BookOpen,
    quizzes: 10,
    avgScore: 86,
    completion: 80,
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
]

const upcomingQuizzes = [
  {
    title: "Shakespeare Analysis",
    date: "2024-01-22",
    time: "10:00 AM",
    duration: "5min",
    subject: "Literature",
  },
  {
    title: "Physics Mechanics",
    date: "2024-01-25",
    time: "2:00 PM",
    duration: "5min",
    subject: "Physics",
  },
]

const achievements = [
  {
    title: "Perfect Score!",
    description: "College Algebra Basics - 100%",
    icon: Trophy,
    color: "bg-yellow-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-800",
  },
  {
    title: "Quiz Streak",
    description: "5 quizzes completed this week",
    icon: TrendingUp,
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
  },
  {
    title: "Score Improvement",
    description: "+15% average this month",
    icon: BarChart3,
    color: "bg-green-500",
    bgColor: "bg-green-50",
    textColor: "text-green-800",
  },
]

const quickActions = [
  {
    title: "Start Quiz",
    icon: Play,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Create Quiz",
    icon: Plus,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "View Results",
    icon: BarChart3,
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    title: "Settings",
    icon: Settings,
    color: "bg-gray-500 hover:bg-gray-600",
  },
]

export default function QuizzesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-6 md:p-8 relative overflow-hidden">
        {/* Decorative question marks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 right-8 text-6xl opacity-10 rotate-12">?</div>
          <div className="absolute top-16 right-32 text-4xl opacity-10 -rotate-12">?</div>
          <div className="absolute bottom-8 left-16 text-5xl opacity-10 rotate-45">?</div>
          <div className="absolute top-8 left-1/3 text-3xl opacity-10 -rotate-45">?</div>
          <div className="absolute bottom-16 right-16 text-4xl opacity-10 rotate-12">?</div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Quiz Management Center</h1>
              <p className="text-blue-100">Test your knowledge and track your academic progress</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <div className="text-3xl md:text-4xl font-bold">87.5%</div>
              <div className="text-blue-200">Average Score</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">43</div>
              <div className="text-blue-200 text-sm">Total Quizzes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">32</div>
              <div className="text-blue-200 text-sm">Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">8</div>
              <div className="text-blue-200 text-sm">Upcoming</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">87.5%</div>
              <div className="text-blue-200 text-sm">Avg Score</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold">3</div>
              <div className="text-blue-200 text-sm">Pending Review</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Quiz Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <TabsList className="grid w-full sm:w-auto grid-cols-4">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="available" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Available Quizzes
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="completed" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Completed
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Results
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon
                    return (
                      <Button key={index} className={`h-20 flex-col gap-2 ${action.color} text-white`}>
                        <IconComponent className="w-6 h-6" />
                        <span className="text-sm">{action.title}</span>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quiz Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Quiz Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {quizCategories.map((category, index) => {
                    const IconComponent = category.icon
                    return (
                      <Card
                        key={index}
                        className={`${category.bgColor} ${category.borderColor} border-2 hover:shadow-md transition-shadow`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{category.subject}</h3>
                              <p className="text-sm text-gray-600">{category.quizzes} Quizzes</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Avg Score</span>
                                <span className="font-medium">{category.avgScore}%</span>
                              </div>
                              <Progress value={category.avgScore} className="h-2" />
                            </div>

                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Completion</span>
                                <span className="font-medium">{category.completion}%</span>
                              </div>
                              <Progress value={category.completion} className="h-2" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Quizzes */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    Upcoming Quizzes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingQuizzes.map((quiz, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{quiz.title}</h3>
                        <p className="text-sm text-gray-600">
                          {quiz.date} at {quiz.time}
                        </p>
                      </div>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                        {quiz.duration}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon
                    return (
                      <div key={index} className={`flex items-center gap-3 p-4 ${achievement.bgColor} rounded-lg`}>
                        <div className={`w-10 h-10 ${achievement.color} rounded-full flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-medium ${achievement.textColor}`}>{achievement.title}</h3>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="available">
            <Card>
              <CardContent className="p-8 text-center">
                <Play className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Available Quizzes</h3>
                <p className="text-gray-600 mb-4">Browse and start available quizzes across all subjects</p>
                <Button>Browse Quizzes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming">
            <Card>
              <CardContent className="p-8 text-center">
                <Clock className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Upcoming Quizzes</h3>
                <p className="text-gray-600 mb-4">View all scheduled quizzes and their deadlines</p>
                <Button>View Schedule</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed">
            <Card>
              <CardContent className="p-8 text-center">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Completed Quizzes</h3>
                <p className="text-gray-600 mb-4">Review your completed quizzes and performance history</p>
                <Button>View Results</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 mt-8 border-t">
          <div>
            <h3 className="font-semibold mb-3">Quiz Information</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Auto-save every 30 seconds</p>
              <p>Multiple attempts allowed</p>
              <p>Instant feedback available</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quiz Features</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Timed Assessments</p>
              <p>Progress Tracking</p>
              <p>Performance Analytics</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Help & Support</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Quiz Guidelines</p>
              <p>Technical Issues</p>
              <p>Grade Appeals</p>
              <p>Contact Support</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Academic Office</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>(555) 123-4567</p>
              <p>quizzes@eduportal.edu</p>
              <p>24/7 Online Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}