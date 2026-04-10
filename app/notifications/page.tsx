"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, Check, FileText, MessageSquare, MoreHorizontal, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import MainNavbar from "@/components/main-navbar"
import Link from "next/link"

// Mock data for notifications
const notifications = [
  {
    id: "1",
    type: "message",
    title: "New message from Michael Chen",
    description: "I was impressed by your pitch deck. Would love to schedule a call to discuss further.",
    time: "2 hours ago",
    read: false,
    sender: {
      name: "Michael Chen",
      image: "/placeholder.svg?height=40&width=40&text=MC",
    },
    link: "/messages",
  },
  {
    id: "2",
    type: "connection",
    title: "New connection request",
    description: "Sarah Johnson from DataSync wants to connect with you.",
    time: "5 hours ago",
    read: false,
    sender: {
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=40&width=40&text=SJ",
    },
    link: "/profile/startup?id=datasync",
  },
  {
    id: "3",
    type: "deal_room",
    title: "New document in Deal Room",
    description: "Horizon Ventures uploaded 'Term_Sheet_Draft.docx' to 'TechNova Series A' deal room.",
    time: "Yesterday",
    read: true,
    sender: {
      name: "Horizon Ventures",
      image: "/placeholder.svg?height=40&width=40&text=HV",
    },
    link: "/deal-rooms/1",
  },
  {
    id: "4",
    type: "meeting",
    title: "Meeting reminder",
    description: "Your meeting with Alpha Capital is scheduled for tomorrow at 2:00 PM.",
    time: "Yesterday",
    read: true,
    sender: {
      name: "Alpha Capital",
      image: "/placeholder.svg?height=40&width=40&text=AC",
    },
    link: "/deal-rooms/2",
  },
  {
    id: "5",
    type: "message",
    title: "New message from Jennifer Williams",
    description:
      "Thanks for sharing your financial projections. I have a few questions about your customer acquisition strategy.",
    time: "2 days ago",
    read: true,
    sender: {
      name: "Jennifer Williams",
      image: "/placeholder.svg?height=40&width=40&text=JW",
    },
    link: "/messages",
  },
  {
    id: "6",
    type: "system",
    title: "Profile view milestone",
    description: "Your profile has reached 1,000 views! Update your profile to attract more investors.",
    time: "3 days ago",
    read: true,
    sender: {
      name: "System",
      image: "/placeholder.svg?height=40&width=40&text=SYS",
    },
    link: "/profile/startup",
  },
]

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [notificationState, setNotificationState] = useState(notifications)

  // Filter notifications based on active tab
  const filteredNotifications = notificationState.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.read
    return notification.type === activeTab
  })

  const unreadCount = notificationState.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotificationState((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotificationState((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-5 w-5 text-blue-500" />
      case "connection":
        return <User className="h-5 w-5 text-green-500" />
      case "deal_room":
        return <FileText className="h-5 w-5 text-purple-500" />
      case "meeting":
        return <Calendar className="h-5 w-5 text-orange-500" />
      case "system":
        return <Bell className="h-5 w-5 text-slate-500" />
      default:
        return <Bell className="h-5 w-5 text-slate-500" />
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <MainNavbar/>

      <main className="flex-1 pt-16 p-4 md:p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
              <p className="text-slate-600 dark:text-slate-400">Stay updated with your latest activities</p>
            </div>
            {unreadCount > 0 && (
              <Button variant="outline" onClick={markAllAsRead}>
                Mark all as read
              </Button>
            )}
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="all" className="relative">
                  All
                  {unreadCount > 0 && <Badge className="ml-1 h-5 w-5 rounded-full p-0 text-xs">{unreadCount}</Badge>}
                </TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="message">Messages</TabsTrigger>
                <TabsTrigger value="connection">Connections</TabsTrigger>
                <TabsTrigger value="deal_room">Deal Rooms</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                {filteredNotifications.length > 0 ? (
                  <CardContent className="p-0">
                    <div className="divide-y divide-slate-200 dark:divide-slate-700">
                      {filteredNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`flex items-start gap-4 p-4 transition-colors ${
                            !notification.read ? "bg-slate-50 dark:bg-slate-800/50" : ""
                          }`}
                        >
                          <Avatar className="h-10 w-10 flex-shrink-0">
                            <AvatarImage src={notification.sender.image} alt={notification.sender.name} />
                            <AvatarFallback>
                              {notification.sender.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className={`font-semibold ${!notification.read ? "text-primary" : ""}`}>
                                  {notification.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                  {notification.description}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                  <div className="flex items-center gap-1">
                                    {getNotificationIcon(notification.type)}
                                    <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                                      {notification.type.replace("_", " ")}
                                    </span>
                                  </div>
                                  <span className="text-xs text-slate-500 dark:text-slate-400">•</span>
                                  <span className="text-xs text-slate-500 dark:text-slate-400">
                                    {notification.time}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {!notification.read && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 rounded-full"
                                    onClick={() => markAsRead(notification.id)}
                                  >
                                    <Check className="h-4 w-4" />
                                  </Button>
                                )}
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem asChild>
                                      <Link href={notification.link}>View</Link>
                                    </DropdownMenuItem>
                                    {!notification.read && (
                                      <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                        Mark as read
                                      </DropdownMenuItem>
                                    )}
                                    <DropdownMenuItem>Disable notifications like this</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                ) : (
                  <CardHeader>
                    <CardTitle className="text-center">No notifications</CardTitle>
                    <p className="text-center text-slate-500 dark:text-slate-400 mt-2">
                      {activeTab === "unread"
                        ? "You've read all your notifications."
                        : "You don't have any notifications yet."}
                    </p>
                  </CardHeader>
                )}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

