"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Filter, Image, Link2, Plus, Search, Smile, Heart, MessageSquare, Share2 } from "lucide-react"
import MainNavbar from "@/components/main-navbar"
import Link from "next/link"

// Mock data for feed posts
const feedPosts = [
  {
    id: 1,
    userType: "startup" as const,
    userName: "TechNova",
    userImage: "/placeholder.svg?height=48&width=48&text=TN",
    title: "We're hiring senior engineers!",
    content:
      "TechNova is expanding our engineering team. Looking for experienced engineers with expertise in AI and data analytics. Competitive salary and benefits. Remote-friendly. DM for details or visit our website.",
    image: "/placeholder.svg?height=400&width=800&text=Join+Our+Team",
    time: "3 hours ago",
    likes: 24,
    comments: 7,
  },
  {
    id: 2,
    userType: "investor" as const,
    userName: "Horizon Ventures",
    userImage: "/placeholder.svg?height=48&width=48&text=HV",
    title: "Looking for AI startups in healthcare",
    content:
      "We're expanding our portfolio in the healthcare AI space. If you're building innovative solutions in this area, we'd love to connect. Particularly interested in diagnostic tools, patient monitoring, and operational efficiency.",
    image: null,
    time: "5 hours ago",
    likes: 36,
    comments: 12,
  },
  {
    id: 3,
    userType: "startup" as const,
    userName: "DataSync",
    userImage: "/placeholder.svg?height=48&width=48&text=DS",
    title: "Just closed our Seed round!",
    content:
      "Excited to announce that we've successfully raised $2.5M in our Seed round led by Accel Partners with participation from Y Combinator. Looking forward to accelerating our product development and expanding our team!",
    image: "/placeholder.svg?height=400&width=800&text=Funding+Announcement",
    time: "8 hours ago",
    likes: 87,
    comments: 23,
  },
  {
    id: 4,
    userType: "investor" as const,
    userName: "Alpha Capital",
    userImage: "/placeholder.svg?height=48&width=48&text=AC",
    title: "Our portfolio company TechNova just raised Series B",
    content:
      "Proud to announce that our portfolio company TechNova has successfully closed their $12M Series B round. Congratulations to the team on this milestone achievement! Looking forward to supporting your continued growth.",
    image: "/placeholder.svg?height=400&width=800&text=Series+B+Announcement",
    time: "1 day ago",
    likes: 56,
    comments: 14,
  },
  {
    id: 5,
    userType: "startup" as const,
    userName: "QuantumHealth",
    userImage: "/placeholder.svg?height=48&width=48&text=QH",
    title: "Launching our beta next month",
    content:
      "After 18 months of development, we're excited to announce that we'll be launching the beta version of our AI-powered health monitoring platform next month. Looking for beta testers - DM if interested!",
    image: null,
    time: "1 day ago",
    likes: 42,
    comments: 18,
  },
  {
    id: 6,
    userType: "investor" as const,
    userName: "Sequoia Capital",
    userImage: "/placeholder.svg?height=48&width=48&text=SC",
    title: "Fintech investment trends for 2023",
    content:
      "We've published our latest report on fintech investment trends for 2023. Key areas of focus include embedded finance, DeFi infrastructure, and financial inclusion. Check out the full report on our website.",
    image: "/placeholder.svg?height=400&width=800&text=Fintech+Trends+Report",
    time: "2 days ago",
    likes: 93,
    comments: 31,
  },
]

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter posts based on active tab and search query
  const filteredPosts = feedPosts.filter((post) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "startups" && post.userType === "startup") ||
      (activeTab === "investors" && post.userType === "investor")

    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.userName.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesTab && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <MainNavbar/>

      <main className="flex-1 pt-16 p-4 md:p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Feed</h1>
              <p className="text-slate-600 dark:text-slate-400">Stay updated with your network</p>
            </div>
            <Button asChild>
              <Link href="/posts/create">
                <Plus className="mr-2 h-4 w-4" />
                Create Post
              </Link>
            </Button>
          </div>

          {/* Create Post Card */}
          <Card className="mb-6 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=40&width=40&text=TN"
                    alt="Your Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <Input
                  placeholder="Share an update or announcement..."
                  className="flex-1 bg-slate-100 dark:bg-slate-800"
                  onClick={() => (window.location.href = "/posts/create")}
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                    <Image className="h-4 w-4" />
                    <span className="hidden sm:inline">Photo</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                    <Link2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Link</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                    <Smile className="h-4 w-4" />
                    <span className="hidden sm:inline">Emoji</span>
                  </Button>
                </div>
                <Button size="sm" asChild>
                  <Link href="/posts/create">Post</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Feed Filters */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="startups">Startups</TabsTrigger>
                <TabsTrigger value="investors">Investors</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search posts..."
                  className="pl-9 w-full sm:w-[200px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                        <img
                          src={post.userImage || "/placeholder.svg"}
                          alt={post.userName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{post.userName}</h3>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{post.time}</span>
                        </div>
                        <h4 className="mt-1 font-medium">{post.title}</h4>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.content}</p>

                        {post.image && (
                          <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}

                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                              <Heart className="h-4 w-4" />
                              <span className="text-xs">{post.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                              <MessageSquare className="h-4 w-4" />
                              <span className="text-xs">{post.comments}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/posts/${post.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-center">No posts found</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-slate-500 dark:text-slate-400">
                    {searchQuery
                      ? "No posts match your search criteria. Try a different search term."
                      : "No posts in your feed yet. Connect with more startups and investors to see their updates."}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

