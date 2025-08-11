"use client"

import { useState } from "react"
import Card from "./card"
import Button from "./button"

interface Notification {
  id: string
  type: "assignment" | "announcement" | "payment" | "report"
  title: string
  message: string
  timestamp: string
  read: boolean
  priority: "low" | "medium" | "high"
  attachments?: {
    type: "image" | "document" | "voice"
    url: string
    name: string
  }[]
}

interface NotificationPanelProps {
  notifications: Notification[]
  onMarkAsRead: (id: string) => void
  onMarkAllAsRead: () => void
}

export default function NotificationPanel({ notifications, onMarkAsRead, onMarkAllAsRead }: NotificationPanelProps) {
  const [filter, setFilter] = useState<"all" | "unread" | "assignment" | "announcement">("all")

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "all") return true
    if (filter === "unread") return !notification.read
    return notification.type === filter
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return "ri-file-text-line"
      case "announcement":
        return "ri-megaphone-line"
      case "payment":
        return "ri-money-dollar-circle-line"
      case "report":
        return "ri-feedback-line"
      default:
        return "ri-notification-line"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 dark:text-red-400"
      case "medium":
        return "text-yellow-600 dark:text-yellow-400"
      default:
        return "text-green-600 dark:text-green-400"
    }
  }

  return (
    <Card className="max-h-96 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
          {unreadCount > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{unreadCount}</span>
          )}
        </div>
        <Button size="sm" variant="ghost" onClick={onMarkAllAsRead}>
          Mark all read
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 mb-4">
        {["all", "unread", "assignment", "announcement"].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType as any)}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              filter === filterType
                ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 rounded-lg border cursor-pointer transition-colors ${
              notification.read
                ? "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
            }`}
            onClick={() => onMarkAsRead(notification.id)}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  notification.read ? "bg-gray-200 dark:bg-gray-700" : "bg-blue-100 dark:bg-blue-900/30"
                }`}
              >
                <i
                  className={`${getNotificationIcon(notification.type)} ${
                    notification.read ? "text-gray-500" : "text-blue-600 dark:text-blue-400"
                  }`}
                ></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4
                    className={`font-medium text-sm ${
                      notification.read ? "text-gray-700 dark:text-gray-300" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {notification.title}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <i className={`ri-circle-fill text-xs ${getPriorityColor(notification.priority)}`}></i>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{notification.timestamp}</span>
                  </div>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    notification.read ? "text-gray-600 dark:text-gray-400" : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {notification.message}
                </p>
                {notification.attachments && notification.attachments.length > 0 && (
                  <div className="flex items-center mt-2 space-x-2">
                    {notification.attachments.map((attachment, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs"
                      >
                        <i
                          className={`${
                            attachment.type === "image"
                              ? "ri-image-line"
                              : attachment.type === "document"
                                ? "ri-file-line"
                                : "ri-mic-line"
                          } text-gray-500`}
                        ></i>
                        <span className="text-gray-600 dark:text-gray-300">{attachment.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="text-center py-8">
          <i className="ri-notification-off-line text-4xl text-gray-400 dark:text-gray-500 mb-2"></i>
          <p className="text-gray-500 dark:text-gray-400">No notifications found</p>
        </div>
      )}
    </Card>
  )
}
