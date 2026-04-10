import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	BarChart3,
	Building2,
	Calendar,
	ChevronRight,
	DollarSign,
	Edit,
	LineChart,
	PieChart,
	Plus,
	Rocket,
} from "lucide-react";
import Link from "next/link";
import PostCard from "@/components/post-card";

export default function InvestorDashboard() {
	return (
		<div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
			<main className="flex-1 pt-16 p-4 md:p-6">
				<div className="container mx-auto max-w-7xl">
					<div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
						<div>
							<h1 className="text-3xl font-bold tracking-tight">
								Investor Dashboard
							</h1>
							<p className="text-slate-600 dark:text-slate-400">
								Welcome back, Horizon Ventures! Here's an
								overview of your portfolio and opportunities.
							</p>
						</div>
						<div className="flex gap-4">
							<Button className="gap-2">
								<Plus className="h-4 w-4" />
								Add Investment
							</Button>
							<Button variant="outline">View Portfolio</Button>
						</div>
					</div>

					{/* Portfolio Overview */}
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md">
							<CardHeader className="flex flex-row items-center justify-between pb-2">
								<CardTitle className="text-sm font-medium">
									Portfolio Value
								</CardTitle>
								<DollarSign className="h-4 w-4 text-slate-500 dark:text-slate-400" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">$42.5M</div>
								<p className="text-xs text-green-500 dark:text-green-400">
									+8.3% from last quarter
								</p>
							</CardContent>
						</Card>
						<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md">
							<CardHeader className="flex flex-row items-center justify-between pb-2">
								<CardTitle className="text-sm font-medium">
									Active Investments
								</CardTitle>
								<Building2 className="h-4 w-4 text-slate-500 dark:text-slate-400" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">18</div>
								<p className="text-xs text-slate-500 dark:text-slate-400">
									Across 5 industries
								</p>
							</CardContent>
						</Card>
						<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md">
							<CardHeader className="flex flex-row items-center justify-between pb-2">
								<CardTitle className="text-sm font-medium">
									Deal Flow
								</CardTitle>
								<Rocket className="h-4 w-4 text-slate-500 dark:text-slate-400" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">47</div>
								<p className="text-xs text-slate-500 dark:text-slate-400">
									12 new this month
								</p>
							</CardContent>
						</Card>
						<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md">
							<CardHeader className="flex flex-row items-center justify-between pb-2">
								<CardTitle className="text-sm font-medium">
									ROI
								</CardTitle>
								<LineChart className="h-4 w-4 text-slate-500 dark:text-slate-400" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">3.2x</div>
								<p className="text-xs text-slate-500 dark:text-slate-400">
									Average across portfolio
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Main Dashboard Content */}
					<div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{/* Portfolio Performance */}
						<Card className="col-span-1 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 lg:col-span-2">
							<CardHeader>
								<CardTitle>Portfolio Performance</CardTitle>
								<CardDescription>
									Performance metrics across your investments
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Tabs defaultValue="value">
									<TabsList className="mb-4">
										<TabsTrigger value="value">
											Value
										</TabsTrigger>
										<TabsTrigger value="growth">
											Growth
										</TabsTrigger>
										<TabsTrigger value="distribution">
											Distribution
										</TabsTrigger>
									</TabsList>
									<TabsContent
										value="value"
										className="h-[300px] w-full"
									>
										<div className="flex h-full items-center justify-center rounded-md border border-dashed border-slate-200 dark:border-slate-700">
											<div className="flex flex-col items-center text-center">
												<BarChart3 className="mb-2 h-10 w-10 text-slate-400" />
												<p className="text-sm text-slate-500 dark:text-slate-400">
													Portfolio value chart would
													appear here
												</p>
											</div>
										</div>
									</TabsContent>
									<TabsContent
										value="growth"
										className="h-[300px] w-full"
									>
										<div className="flex h-full items-center justify-center rounded-md border border-dashed border-slate-200 dark:border-slate-700">
											<div className="flex flex-col items-center text-center">
												<LineChart className="mb-2 h-10 w-10 text-slate-400" />
												<p className="text-sm text-slate-500 dark:text-slate-400">
													Growth metrics chart would
													appear here
												</p>
											</div>
										</div>
									</TabsContent>
									<TabsContent
										value="distribution"
										className="h-[300px] w-full"
									>
										<div className="flex h-full items-center justify-center rounded-md border border-dashed border-slate-200 dark:border-slate-700">
											<div className="flex flex-col items-center text-center">
												<PieChart className="mb-2 h-10 w-10 text-slate-400" />
												<p className="text-sm text-slate-500 dark:text-slate-400">
													Portfolio distribution chart
													would appear here
												</p>
											</div>
										</div>
									</TabsContent>
								</Tabs>
							</CardContent>
						</Card>

						{/* Upcoming Events */}
						<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
							<CardHeader>
								<CardTitle>Upcoming Events</CardTitle>
								<CardDescription>
									Your scheduled meetings and events
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{[1, 2, 3].map((i) => (
										<div
											key={i}
											className="flex gap-4 rounded-lg border border-slate-200 p-4 dark:border-slate-700 transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
										>
											<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
												<Calendar className="h-6 w-6" />
											</div>
											<div className="space-y-1">
												<h3 className="font-semibold">
													Pitch Meeting
												</h3>
												<p className="text-sm text-slate-500 dark:text-slate-400">
													Tomorrow, 2:00 PM
												</p>
												<p className="text-sm">
													TechNova AI Analytics
													Platform
												</p>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="mt-6 grid gap-6 md:grid-cols-2">
						{/* Promising Startups */}
						<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
							<CardHeader className="flex flex-row items-center justify-between">
								<div>
									<CardTitle>Promising Startups</CardTitle>
									<CardDescription>
										Startups that match your investment
										criteria
									</CardDescription>
								</div>
								<Button
									variant="ghost"
									size="sm"
									className="gap-1"
									asChild
								>
									<Link href="/search">
										View all{" "}
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{[1, 2, 3].map((i) => (
										<div
											key={i}
											className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700 transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
										>
											<div className="flex items-center gap-4">
												<img
													src={`/placeholder.svg?height=48&width=48&text=S${i}`}
													alt={`Startup ${i}`}
													className="h-12 w-12 rounded-full"
												/>
												<div>
													<h3 className="font-semibold">
														DataSync AI
													</h3>
													<p className="text-sm text-slate-500 dark:text-slate-400">
														AI • Data Analytics •
														Series A
													</p>
												</div>
											</div>
											<Button variant="outline" size="sm">
												View
											</Button>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Your Posts */}
						<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
							<CardHeader className="flex flex-row items-center justify-between">
								<div>
									<CardTitle>Your Posts</CardTitle>
									<CardDescription>
										Recent updates you've shared
									</CardDescription>
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
											title: "Looking for AI startups in healthcare",
											content:
												"We're expanding our portfolio in the healthcare AI space. If you're building innovative solutions in this area, we'd love to connect.",
											time: "2 days ago",
											likes: 24,
											comments: 8,
										},
										{
											title: "Our portfolio company TechNova just raised Series B",
											content:
												"Proud to announce that our portfolio company TechNova has successfully closed their $12M Series B round. Congratulations to the team!",
											time: "1 week ago",
											likes: 56,
											comments: 12,
										},
									].map((post, i) => (
										<PostCard
											key={i}
											post={post}
											userType="investor"
										/>
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

					{/* Profile Completion */}
					<div className="mt-6">
						<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
							<CardHeader className="flex flex-row items-center justify-between">
								<div>
									<CardTitle>Profile Completion</CardTitle>
									<CardDescription>
										Complete your profile to attract more
										startups
									</CardDescription>
								</div>
								<div className="flex gap-2">
									<Button asChild>
										<Link href="/profile/investor/edit">
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
							</CardHeader>
							<CardContent>
								<div className="mb-4 space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium">
											85% Complete
										</span>
										<span className="text-sm text-slate-500 dark:text-slate-400">
											2 items remaining
										</span>
									</div>
									<div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
										<div
											className="h-2 rounded-full bg-primary"
											style={{ width: "85%" }}
										></div>
									</div>
								</div>
								<div className="space-y-4">
									{[
										{
											title: "Add investment thesis",
											completed: false,
										},
										{
											title: "Upload firm logo",
											completed: false,
										},
									].map((item, i) => (
										<div
											key={i}
											className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700"
										>
											<span className="font-medium">
												{item.title}
											</span>
											<Button size="sm" asChild>
												<Link href="/profile/investor/edit">
													Complete
												</Link>
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
	);
}
