import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Building2, Calendar, ChevronRight, Edit, Eye, Plus, Users } from "lucide-react"
import Link from "next/link"
import PostCard from "@/components/post-card"

export default function StartupDashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <main className="flex-1 pt-16 p-4 md:p-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-slate-600 dark:text-slate-400">
                Welcome back, TechNova! Here's what's happening with your startup.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/profile/startup/edit">
                  <Edit className="mr-2 h-4 w-4" />
                  Complete Profile
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/posts/create">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Post
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                <Eye className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">+21% from last month</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Connections</CardTitle>
                <Users className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">56</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">+8 new this month</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Deal Rooms</CardTitle>
                <Building2 className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">1 new negotiation started</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Pitch Deck Views</CardTitle>
                <BarChart3 className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Average view time: 4m 12s</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 md:col-span-2">
              <CardHeader>
                <CardTitle>Suggested Investors</CardTitle>
                <CardDescription>Investors that match your industry and funding stage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={`/placeholder.svg?height=48&width=48&text=VC${i}`}
                          alt={`Investor ${i}`}
                          className="h-12 w-12 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold">Horizon Ventures</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Seed to Series A • SaaS, AI, Fintech
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your scheduled meetings and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex gap-4 rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Investor Meeting</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Tomorrow, 2:00 PM</p>
                        <p className="text-sm">Meeting with Alpha Capital Partners</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Your latest conversations</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link href="/messages">
                    View all <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                    >
                      <img
                        src={`/placeholder.svg?height=40&width=40&text=U${i}`}
                        alt={`User ${i}`}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Michael Chen</h3>
                          <span className="text-xs text-slate-500 dark:text-slate-400">2h ago</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          I was impressed by your pitch deck. Would love to schedule a call to discuss further.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Your Posts</CardTitle>
                  <CardDescription>Recent updates you've shared</CardDescription>
                </div>
                <Button size="sm" className="gap-1" asChild>
                  <Link href="/posts/create">
                    <Plus className="h-4 w-4" /> Create Post
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "We're hiring senior engineers!",
                      content:
                        "TechNova is expanding our engineering team. Looking for experienced engineers with expertise in AI and data analytics.",
                      time: "3 days ago",
                      likes: 18,
                      comments: 5,
                    },
                    {
                      title: "Just closed our Series A round",
                      content:
                        "Excited to announce that we've successfully raised $4.5M in our Series A round led by Horizon Ventures.",
                      time: "2 weeks ago",
                      likes: 42,
                      comments: 15,
                    },
                  ].map((post, i) => (
                    <PostCard key={i} post={post} userType="startup" />
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm">
                    View All Posts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Profile Completion</CardTitle>
                  <CardDescription>Complete your profile to attract more investors</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">75% Complete</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">3 items remaining</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Add team members", completed: false },
                    { title: "Upload pitch deck", completed: false },
                    { title: "Add financial projections", completed: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                    >
                      <span className="font-medium">{item.title}</span>
                      <Button size="sm" asChild>
                        <Link href="/profile/startup/edit">Complete</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

