"use client"

import type React from "react"

import { useState } from "react"
// import Card from "./card"
// import Button from "./button"
import Input from "./Input"
import { Button } from "./Button"
import { Card } from "./Card"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: string
}

interface AIAssistantProps {
  onSendMessage: (message: string) => Promise<string>
}

export default function AIAssistant({ onSendMessage }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hello! I'm your AI study assistant. I can help you with assignments, explain concepts, and answer academic questions. What would you like to learn about today?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const aiResponse = await onSendMessage(inputMessage)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "I'm sorry, I encountered an error. Please try again.",
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Card className="h-96 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
            <i className="ri-robot-line text-purple-600 dark:text-purple-400"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Study Assistant</h3>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs text-green-600 dark:text-green-400">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p
                className={`text-xs mt-1 ${
                  message.type === "user" ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex space-x-2">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything about your studies..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()}>
          <i className="ri-send-plane-line"></i>
        </Button>
      </div>
    </Card>
  )
}



// "use client"

// import type React from "react"

// import { useState } from "react"
// import Card from "./Card"
// import Button from "./Button"
// import Input from "./Input"

// interface Message {
//   id: string
//   type: "user" | "ai"
//   content: string
//   timestamp: string
// }

// interface AIAssistantProps {
//   onSendMessage: (message: string) => Promise<string>
// }

// export default function AIAssistant({ onSendMessage }: AIAssistantProps) {
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       type: "ai",
//       content:
//         "Hello! I'm your AI study assistant. I can help you with assignments, explain concepts, and answer academic questions. What would you like to learn about today?",
//       timestamp: new Date().toLocaleTimeString(),
//     },
//   ])
//   const [inputMessage, setInputMessage] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       type: "user",
//       content: inputMessage,
//       timestamp: new Date().toLocaleTimeString(),
//     }

//     setMessages((prev) => [...prev, userMessage])
//     setInputMessage("")
//     setIsLoading(true)

//     try {
//       const aiResponse = await onSendMessage(inputMessage)
//       const aiMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         type: "ai",
//         content: aiResponse,
//         timestamp: new Date().toLocaleTimeString(),
//       }
//       setMessages((prev) => [...prev, aiMessage])
//     } catch (error) {
//       const errorMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         type: "ai",
//         content: "I'm sorry, I encountered an error. Please try again.",
//         timestamp: new Date().toLocaleTimeString(),
//       }
//       setMessages((prev) => [...prev, errorMessage])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault()
//       handleSendMessage()
//     }
//   }

//   return (
//     <Card className="h-96 flex flex-col">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center">
//           <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
//             <i className="ri-robot-line text-purple-600 dark:text-purple-400"></i>
//           </div>
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Study Assistant</h3>
//         </div>
//         <div className="flex items-center space-x-1">
//           <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//           <span className="text-xs text-green-600 dark:text-green-400">Online</span>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto space-y-4 mb-4">
//         {messages.map((message) => (
//           <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
//             <div
//               className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
//                 message.type === "user"
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
//               }`}
//             >
//               <p className="text-sm">{message.content}</p>
//               <p
//                 className={`text-xs mt-1 ${
//                   message.type === "user" ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
//                 }`}
//               >
//                 {message.timestamp}
//               </p>
//             </div>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="flex justify-start">
//             <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
//               <div className="flex space-x-1">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div
//                   className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                   style={{ animationDelay: "0.1s" }}
//                 ></div>
//                 <div
//                   className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                   style={{ animationDelay: "0.2s" }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input */}
//       <div className="flex space-x-2">
//         <Input
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Ask me anything about your studies..."
//           className="flex-1"
//           disabled={isLoading}
//         />
//         <Button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()}>
//           <i className="ri-send-plane-line"></i>
//         </Button>
//       </div>
//     </Card>
//   )
// }