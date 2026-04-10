import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageSquare, Share2 } from "lucide-react"
import Link from "next/link"

interface PostProps {
  post: {
    title: string
    content: string
    time: string
    likes: number
    comments: number
  }
  userType: "startup" | "investor"
}

export default function PostCard({ post, userType }: PostProps) {
  return (
    <Card className="overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
            <img
              src={`/placeholder.svg?height=40&width=40&text=${userType === "startup" ? "TN" : "HV"}`}
              alt={userType === "startup" ? "TechNova" : "Horizon Ventures"}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{userType === "startup" ? "TechNova" : "Horizon Ventures"}</h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">{post.time}</span>
            </div>
            <h4 className="mt-1 font-medium">{post.title}</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.content}</p>
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
                <Link href={`/posts/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>View</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

