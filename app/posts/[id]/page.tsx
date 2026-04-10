"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Heart, MessageSquare, MoreHorizontal, Share2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import MainNavbar from "@/components/main-navbar"
import Link from "next/link"

// Mock data for posts
const posts = [
  {
    id: "1",
    userType: "startup" as const,
    userName: "TechNova",
    userImage: "/placeholder.svg?height=48&width=48&text=TN",
    title: "We're hiring senior engineers!",
    content:
      "TechNova is expanding our engineering team. Looking for experienced engineers with expertise in AI and data analytics. Competitive salary and benefits. Remote-friendly. DM for details or visit our website.\n\nWe're particularly looking for:\n- Backend engineers with experience in Python and distributed systems\n- ML engineers with experience in building production-ready models\n- Frontend engineers with React and TypeScript experience\n\nIf you're passionate about using AI to solve real business problems, we'd love to hear from you!",
    image: "/placeholder.svg?height=400&width=800&text=Join+Our+Team",
    time: "3 hours ago",
    likes: 24,
    comments: [
      {
        id: 1,
        userName: "Michael Chen",
        userImage: "/placeholder.svg?height=40&width=40&text=MC",
        content: "Sounds exciting! Are you open to remote candidates?",
        time: "2 hours ago",
        likes: 3,
      },
      {
        id: 2,
        userName: "Sarah Johnson",
        userImage: "/placeholder.svg?height=40&width=40&text=SJ",
        content: "I know someone who would be perfect for this. Will share with them!",
        time: "1 hour ago",
        likes: 2,
      },
    ],
  },
  {
    id: "2",
    userType: "investor" as const,
    userName: "Horizon Ventures",
    userImage: "/placeholder.svg?height=48&width=48&text=HV",
    title: "Looking for AI startups in healthcare",
    content:
      "We're expanding our portfolio in the healthcare AI space. If you're building innovative solutions in this area, we'd love to connect. Particularly interested in diagnostic tools, patient monitoring, and operational efficiency.\n\nOur investment thesis for healthcare AI focuses on:\n1. Solutions that improve clinical outcomes\n2. Technologies that reduce healthcare costs\n3. Platforms that enhance patient experience\n\nIdeal companies are at seed to Series A stage with early traction and a strong technical team.",
    image: null,
    time: "5 hours ago",
    likes: 36,
    comments: [
      {
        id: 1,
        userName: "QuantumHealth",
        userImage: "/placeholder.svg?height=40&width=40&text=QH",
        content: "We're building an AI-powered health monitoring platform. Would love to connect!",
        time: "4 hours ago",
        likes: 5,
      },
    ],
  },
  {
    id: "3",
    userType: "startup" as const,
    userName: "DataSync",
    userImage: "/placeholder.svg?height=48&width=48&text=DS",
    title: "Just closed our Seed round!",
    content:
      "Excited to announce that we've successfully raised $2.5M in our Seed round led by Accel Partners with participation from Y Combinator. Looking forward to accelerating our product development and expanding our team!\n\nThis funding will help us:\n- Scale our engineering team\n- Expand our go-to-market strategy\n- Accelerate product development\n\nWe're incredibly grateful to our investors for believing in our vision to revolutionize data synchronization for enterprises.",
    image: "/placeholder.svg?height=400&width=800&text=Funding+Announcement",
    time: "8 hours ago",
    likes: 87,
    comments: [
      {
        id: 1,
        userName: "Horizon Ventures",
        userImage: "/placeholder.svg?height=40&width=40&text=HV",
        content: "Congratulations! Looking forward to seeing your growth.",
        time: "7 hours ago",
        likes: 4,
      },
      {
        id: 2,
        userName: "TechNova",
        userImage: "/placeholder.svg?height=40&width=40&text=TN",
        content: "Amazing news! Let's catch up soon.",
        time: "6 hours ago",
        likes: 2,
      },
    ],
  },
]

export default function PostDetailPage() {
  const params = useParams()
  const postId = params.id as string

  const post = posts.find((p) => p.id === postId) || posts[0]

  const [commentText, setCommentText] = useState("")
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1)
    } else {
      setLikesCount(likesCount + 1)
    }
    setLiked(!liked)
  }

  const handleComment = () => {
    if (commentText.trim()) {
      // In a real app, this would send the comment to the API
      console.log("Posting comment:", commentText)
      setCommentText("")
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <MainNavbar />

      <main className="flex-1 pt-16 p-4 md:p-6">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-6 flex items-center">
            <Button variant="ghost" size="sm" className="mr-2" asChild>
              <Link href="/feed">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Feed
              </Link>
            </Button>
          </div>

          <Card className="overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.userImage} alt={post.userName} />
                  <AvatarFallback>
                    {post.userName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold">{post.userName}</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{post.time}</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Save post</DropdownMenuItem>
                        <DropdownMenuItem>Report post</DropdownMenuItem>
                        <DropdownMenuItem>Copy link</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <h1 className="text-2xl font-bold mt-2">{post.title}</h1>

                  <div className="mt-4 text-slate-700 dark:text-slate-300 whitespace-pre-line">{post.content}</div>

                  {post.image && (
                    <div className="mt-4 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                      <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto" />
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between border-t border-b border-slate-200 dark:border-slate-700 py-3">
                    <div className="flex items-center gap-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`gap-2 ${liked ? "text-red-500" : ""}`}
                        onClick={handleLike}
                      >
                        <Heart className="h-5 w-5" fill={liked ? "currentColor" : "none"} />
                        <span>{likesCount}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageSquare className="h-5 w-5" />
                        <span>{post.comments.length}</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Comments</h2>

            {/* Add comment */}
            <div className="flex gap-4">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage src="/placeholder.svg?height=40&width=40&text=TN" alt="Your Profile" />
                <AvatarFallback>TN</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <Textarea
                  placeholder="Add a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="resize-none"
                  rows={3}
                />
                <div className="flex justify-end">
                  <Button onClick={handleComment} disabled={!commentText.trim()}>
                    Post
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments list */}
            <div className="space-y-4">
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src={comment.userImage} alt={comment.userName} />
                    <AvatarFallback>
                      {comment.userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{comment.userName}</h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{comment.time}</span>
                      </div>
                      <p className="mt-1 text-slate-700 dark:text-slate-300">{comment.content}</p>
                    </div>
                    <div className="mt-1 flex items-center gap-4 pl-2">
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                        Like ({comment.likes})
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

