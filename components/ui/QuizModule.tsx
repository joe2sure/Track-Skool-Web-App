"use client"

import { useState } from "react"
import Card from "./Card"
import Button from "./Button"

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface QuizModuleProps {
  subject: string
  questions: QuizQuestion[]
  onComplete: (score: number, answers: number[]) => void
}

export default function QuizModule({ subject, questions, onComplete }: QuizModuleProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes in seconds

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0)
    }, 0)
    setShowResults(true)
    onComplete(score, selectedAnswers)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0)
    }, 0)
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <Card className="max-w-2xl mx-auto">
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-trophy-line text-green-600 dark:text-green-400 text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz Completed!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You scored {score} out of {questions.length} questions
          </p>
          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-6">{percentage}%</div>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => window.location.reload()}>Retake Quiz</Button>
            <Button variant="outline">View Answers</Button>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{subject} Quiz</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-red-600 dark:text-red-400">{formatTime(timeLeft)}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Time remaining</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          {questions[currentQuestion].question}
        </h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedAnswers[currentQuestion] === index
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={index}
                checked={selectedAnswers[currentQuestion] === index}
                onChange={() => handleAnswerSelect(index)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === index
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                {selectedAnswers[currentQuestion] === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <span className="text-gray-900 dark:text-white">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
          <i className="ri-arrow-left-line mr-2"></i>
          Previous
        </Button>

        <div className="flex space-x-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                index === currentQuestion
                  ? "bg-blue-600 text-white"
                  : selectedAnswers[index] !== -1
                    ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentQuestion === questions.length - 1 ? (
          <Button onClick={handleSubmit} disabled={selectedAnswers[currentQuestion] === -1}>
            Submit Quiz
          </Button>
        ) : (
          <Button onClick={handleNext} disabled={selectedAnswers[currentQuestion] === -1}>
            Next
            <i className="ri-arrow-right-line ml-2"></i>
          </Button>
        )}
      </div>
    </Card>
  )
}
