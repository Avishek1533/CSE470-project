import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Award,
	BarChart3,
	Building,
	DollarSign,
	Edit,
	Globe,
	Mail,
	MapPin,
	PieChart,
	Share2,
	TrendingUp,
} from "lucide-react";
import Link from "next/link";
import MainNavbar from "@/components/main-navbar";

export default function InvestorProfile() {
	return (
		<div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
			<MainNavbar />

			<main className="flex-1 pt-16">
				<div className="relative h-48 w-full bg-gradient-to-r from-primary/20 to-primary/40 md:h-64">
					<div className="absolute -bottom-16 left-4 flex items-end md:left-6">
						<div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-white bg-white shadow-md dark:border-slate-800 dark:bg-slate-800 md:h-36 md:w-36">
							<img
								src="/placeholder.svg?height=144&width=144&text=HV"
								alt="Horizon Ventures Logo"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
				<div className="container mx-auto max-w-7xl px-4 pt-20 md:px-6 md:pt-24">
					<div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
						<div>
							<h1 className="text-3xl font-bold tracking-tight">
								Horizon Ventures
							</h1>
							<p className="text-slate-600 dark:text-slate-400">
								Early-stage venture capital firm focused on
								technology
							</p>
							<div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
								<div className="flex items-center gap-1">
									<Building className="h-4 w-4" />
									<span>VC • Early Stage • Technology</span>
								</div>
								<div className="flex items-center gap-1">
									<MapPin className="h-4 w-4" />
									<span>San Francisco, CA</span>
								</div>
								<div className="flex items-center gap-1">
									<Globe className="h-4 w-4" />
									<a
										href="#"
										className="text-primary hover:underline"
									>
										horizonvc.com
									</a>
								</div>
								<div className="flex items-center gap-1">
									<Mail className="h-4 w-4" />
									<a
										href="#"
										className="text-primary hover:underline"
									>
										info@horizonvc.com
									</a>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap gap-2">
							<Button
								variant="outline"
								size="sm"
								className="gap-2"
							>
								<Share2 className="h-4 w-4" />
								Share
							</Button>
							<Button size="sm" className="gap-2">
								<Edit className="h-4 w-4" />
								Edit Profile
							</Button>
						</div>
					</div>

					<Tabs defaultValue="overview" className="mt-8">
						<TabsList className="grid w-full grid-cols-5 md:w-auto">
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="portfolio">
								Portfolio
							</TabsTrigger>
							<TabsTrigger value="team">Team</TabsTrigger>
							<TabsTrigger value="investment-thesis">
								Investment Thesis
							</TabsTrigger>
							<TabsTrigger value="performance">
								Performance
							</TabsTrigger>
						</TabsList>
						<TabsContent value="overview" className="mt-6">
							<div className="grid gap-6 md:grid-cols-3">
								<div className="md:col-span-2">
									<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
										<CardHeader>
											<CardTitle>
												About Horizon Ventures
											</CardTitle>
										</CardHeader>
										<CardContent className="space-y-4">
											<p>
												Horizon Ventures is an
												early-stage venture capital firm
												that partners with exceptional
												founders building innovative
												technology companies. We focus
												on seed to Series A investments
												in software, AI, fintech, and
												healthcare technology.
											</p>
											<p>
												Founded in 2015, we've invested
												in over 60 companies and have
												had 12 successful exits. Our
												team brings operational
												experience from leading
												technology companies and a deep
												network across the industry to
												help our portfolio companies
												succeed.
											</p>
											<div className="mt-6 grid gap-4 md:grid-cols-2">
												<div>
													<h3 className="mb-2 font-semibold">
														Investment Focus
													</h3>
													<p className="text-sm text-slate-600 dark:text-slate-300">
														We invest in early-stage
														technology companies
														with strong founding
														teams, innovative
														products, and large
														market opportunities.
														Our typical check size
														ranges from $500K to $3M
														and large market
														opportunities. Our
														typical check size
														ranges from $500K to $3M
														for initial investments,
														with reserves for
														follow-on rounds.
													</p>
												</div>
												<div>
													<h3 className="mb-2 font-semibold">
														Value Add
													</h3>
													<p className="text-sm text-slate-600 dark:text-slate-300">
														Beyond capital, we
														provide strategic
														guidance, operational
														support, and access to
														our extensive network of
														industry experts,
														potential customers, and
														follow-on investors.
													</p>
												</div>
											</div>
										</CardContent>
									</Card>

									<Card className="mt-6 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
										<CardHeader>
											<CardTitle>
												Portfolio Highlights
											</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="grid gap-4 md:grid-cols-3">
												{[1, 2, 3, 4, 5, 6].map((i) => (
													<div
														key={i}
														className="group relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
													>
														<img
															src={`/placeholder.svg?height=120&width=200&text=Company+${i}`}
															alt={`Portfolio Company ${i}`}
															className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
														/>
														<div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
															<div>
																<h4 className="font-medium">
																	TechNova
																</h4>
																<p className="text-xs text-slate-300">
																	AI Analytics
																	• Series B
																</p>
															</div>
														</div>
													</div>
												))}
											</div>
											<div className="mt-4 text-center">
												<Button
													variant="outline"
													size="sm"
													asChild
												>
													<Link href="/portfolio">
														View All Portfolio
														Companies
													</Link>
												</Button>
											</div>
										</CardContent>
									</Card>
								</div>

								<div className="space-y-6">
									<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
										<CardHeader>
											<CardTitle>Firm Details</CardTitle>
										</CardHeader>
										<CardContent className="space-y-4">
											<div>
												<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
													Founded
												</h3>
												<p>2015</p>
											</div>
											<div>
												<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
													Assets Under Management
												</h3>
												<p>$180M</p>
											</div>
											<div>
												<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
													Team Size
												</h3>
												<p>12 professionals</p>
											</div>
											<div>
												<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
													Portfolio Companies
												</h3>
												<p>42 active investments</p>
											</div>
											<div>
												<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
													Exits
												</h3>
												<p>12 successful exits</p>
											</div>
										</CardContent>
									</Card>

									<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
										<CardHeader>
											<CardTitle>
												Investment Criteria
											</CardTitle>
										</CardHeader>
										<CardContent className="space-y-4">
											<div>
												<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
													Stage
												</h3>
												<p>Seed to Series A</p>
											</div>
											<div>
												<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
													Check Size
												</h3>
												<p>$500K - $3M initial</p>
											</div>
											<div>
												<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
													Industries
												</h3>
												<p>
													SaaS, AI/ML, Fintech,
													Healthcare
												</p>
											</div>
											<div>
												<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
													Geography
												</h3>
												<p>North America, Europe</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						</TabsContent>
						<TabsContent value="portfolio" className="mt-6">
							<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
								<CardHeader>
									<CardTitle>Portfolio Companies</CardTitle>
									<CardDescription>
										Our investments across different sectors
										and stages
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
										{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
											(i) => (
												<div
													key={i}
													className="group overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-200 hover:shadow-md"
												>
													<div className="relative h-40 overflow-hidden">
														<img
															src={`/placeholder.svg?height=160&width=320&text=Company+${i}`}
															alt={`Portfolio Company ${i}`}
															className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
														/>
														<div className="absolute top-2 right-2 rounded-full bg-primary/90 px-2 py-1 text-xs font-medium text-white">
															Series{" "}
															{
																[
																	"A",
																	"B",
																	"Seed",
																][i % 3]
															}
														</div>
													</div>
													<div className="p-4">
														<h3 className="font-semibold">
															TechNova
														</h3>
														<p className="mb-2 text-sm text-primary">
															AI-powered data
															analytics
														</p>
														<p className="text-sm text-slate-600 dark:text-slate-300">
															Enterprise AI
															platform for data
															analytics and
															insights.
														</p>
														<div className="mt-4 flex items-center justify-between">
															<span className="text-xs text-slate-500 dark:text-slate-400">
																Invested 2021
															</span>
															<Button
																variant="outline"
																size="sm"
															>
																View
															</Button>
														</div>
													</div>
												</div>
											)
										)}
									</div>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="team" className="mt-6">
							<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
								<CardHeader>
									<CardTitle>Investment Team</CardTitle>
									<CardDescription>
										Meet the people behind Horizon Ventures
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
										{[
											{
												name: "Michael Chen",
												role: "Managing Partner",
												bio: "Former tech executive with 15+ years of experience at Google and Salesforce. Led investments in 20+ companies.",
											},
											{
												name: "Jennifer Williams",
												role: "Partner",
												bio: "Previously founded and sold a fintech startup. Focuses on fintech and enterprise software investments.",
											},
											{
												name: "David Kim",
												role: "Partner",
												bio: "PhD in Computer Science from Stanford. Expert in AI and machine learning technologies.",
											},
											{
												name: "Sarah Johnson",
												role: "Principal",
												bio: "Former product leader at Amazon. Specializes in consumer technology and marketplaces.",
											},
											{
												name: "Robert Garcia",
												role: "Principal",
												bio: "Healthcare industry veteran with experience at top health systems and digital health startups.",
											},
											{
												name: "Emily Chen",
												role: "Associate",
												bio: "Background in investment banking. Supports deal sourcing and due diligence across sectors.",
											},
										].map((member, i) => (
											<div
												key={i}
												className="flex flex-col items-center rounded-lg border border-slate-200 p-4 text-center dark:border-slate-700 transition-all duration-200 hover:shadow-md"
											>
												<div className="mb-4 h-24 w-24 overflow-hidden rounded-full">
													<img
														src={`/placeholder.svg?height=96&width=96&text=${
															member.name.split(
																" "
															)[0][0]
														}${
															member.name.split(
																" "
															)[1][0]
														}`}
														alt={member.name}
														className="h-full w-full object-cover"
													/>
												</div>
												<h3 className="font-semibold">
													{member.name}
												</h3>
												<p className="mb-2 text-sm text-primary">
													{member.role}
												</p>
												<p className="text-sm text-slate-600 dark:text-slate-300">
													{member.bio}
												</p>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="investment-thesis" className="mt-6">
							<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
								<CardHeader>
									<CardTitle>Investment Thesis</CardTitle>
									<CardDescription>
										Our approach to identifying and
										supporting promising startups
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div>
										<h3 className="mb-2 text-xl font-semibold">
											Our Philosophy
										</h3>
										<p className="text-slate-600 dark:text-slate-300">
											At Horizon Ventures, we believe that
											transformative technology companies
											are built by exceptional founders
											who have unique insights into
											significant market opportunities. We
											partner with these founders at the
											earliest stages and support them
											throughout their journey.
										</p>
									</div>

									<div className="grid gap-6 md:grid-cols-2">
										<div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
											<h3 className="mb-2 font-semibold">
												What We Look For
											</h3>
											<ul className="space-y-2 text-slate-600 dark:text-slate-300">
												<li className="flex items-start">
													<span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
														•
													</span>
													<span>
														Exceptional founding
														teams with domain
														expertise and execution
														ability
													</span>
												</li>
												<li className="flex items-start">
													<span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
														•
													</span>
													<span>
														Innovative products
														addressing large and
														growing markets
													</span>
												</li>
												<li className="flex items-start">
													<span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
														•
													</span>
													<span>
														Defensible technology or
														business model with
														potential for network
														effects
													</span>
												</li>
												<li className="flex items-start">
													<span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
														•
													</span>
													<span>
														Early evidence of
														product-market fit or
														clear path to achieving
														it
													</span>
												</li>
											</ul>
										</div>

										<div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
											<h3 className="mb-2 font-semibold">
												How We Help
											</h3>
											<ul className="space-y-2 text-slate-600 dark:text-slate-300">
												<li className="flex items-start">
													<span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
														•
													</span>
													<span>
														Strategic guidance and
														operational support from
														experienced investors
													</span>
												</li>
												<li className="flex items-start">
													<span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
														•
													</span>
													<span>
														Access to our network of
														industry experts,
														potential customers, and
														partners
													</span>
												</li>
												<li className="flex items-start">
													<span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
														•
													</span>
													<span>
														Talent recruitment and
														organizational
														development assistance
													</span>
												</li>
												<li className="flex items-start">
													<span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
														•
													</span>
													<span>
														Fundraising support for
														future rounds with
														top-tier investors
													</span>
												</li>
											</ul>
										</div>
									</div>

									<div>
										<h3 className="mb-2 text-xl font-semibold">
											Focus Areas
										</h3>
										<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
											{[
												{
													title: "Enterprise SaaS",
													description:
														"Software solutions that improve business operations and productivity",
												},
												{
													title: "AI & Machine Learning",
													description:
														"Applications of AI that solve real-world problems across industries",
												},
												{
													title: "Fintech",
													description:
														"Technologies that improve financial services and access",
												},
												{
													title: "Digital Health",
													description:
														"Innovations that enhance healthcare delivery and patient outcomes",
												},
											].map((area, i) => (
												<div
													key={i}
													className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
												>
													<h4 className="mb-2 font-medium">
														{area.title}
													</h4>
													<p className="text-sm text-slate-600 dark:text-slate-300">
														{area.description}
													</p>
												</div>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="performance" className="mt-6">
							<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
								<CardHeader>
									<CardTitle>Fund Performance</CardTitle>
									<CardDescription>
										Track record and key performance metrics
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="mb-6 grid gap-6 md:grid-cols-3">
										<div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700 text-center">
											<DollarSign className="mx-auto mb-2 h-8 w-8 text-primary" />
											<h3 className="text-2xl font-bold">
												3.2x
											</h3>
											<p className="text-sm text-slate-500 dark:text-slate-400">
												Average MOIC
											</p>
										</div>
										<div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700 text-center">
											<TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
											<h3 className="text-2xl font-bold">
												28%
											</h3>
											<p className="text-sm text-slate-500 dark:text-slate-400">
												IRR
											</p>
										</div>
										<div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700 text-center">
											<Award className="mx-auto mb-2 h-8 w-8 text-primary" />
											<h3 className="text-2xl font-bold">
												12
											</h3>
											<p className="text-sm text-slate-500 dark:text-slate-400">
												Successful Exits
											</p>
										</div>
									</div>

									<div className="space-y-6">
										<div>
											<h3 className="mb-4 text-lg font-semibold">
												Performance by Fund
											</h3>
											<div className="overflow-x-auto">
												<table className="w-full border-collapse">
													<thead>
														<tr className="border-b border-slate-200 dark:border-slate-700">
															<th className="px-4 py-2 text-left font-medium">
																Fund
															</th>
															<th className="px-4 py-2 text-left font-medium">
																Vintage
															</th>
															<th className="px-4 py-2 text-left font-medium">
																Size
															</th>
															<th className="px-4 py-2 text-left font-medium">
																MOIC
															</th>
															<th className="px-4 py-2 text-left font-medium">
																IRR
															</th>
															<th className="px-4 py-2 text-left font-medium">
																Status
															</th>
														</tr>
													</thead>
													<tbody>
														{[
															{
																fund: "Fund I",
																vintage: "2015",
																size: "$40M",
																moic: "4.2x",
																irr: "38%",
																status: "Fully Realized",
															},
															{
																fund: "Fund II",
																vintage: "2018",
																size: "$75M",
																moic: "2.8x",
																irr: "26%",
																status: "Partially Realized",
															},
															{
																fund: "Fund III",
																vintage: "2021",
																size: "$120M",
																moic: "1.4x",
																irr: "18%",
																status: "Investing",
															},
														].map((fund, i) => (
															<tr
																key={i}
																className="border-b border-slate-200 dark:border-slate-700"
															>
																<td className="px-4 py-3 font-medium">
																	{fund.fund}
																</td>
																<td className="px-4 py-3">
																	{
																		fund.vintage
																	}
																</td>
																<td className="px-4 py-3">
																	{fund.size}
																</td>
																<td className="px-4 py-3">
																	{fund.moic}
																</td>
																<td className="px-4 py-3">
																	{fund.irr}
																</td>
																<td className="px-4 py-3">
																	<span
																		className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
																			fund.status ===
																			"Fully Realized"
																				? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
																				: fund.status ===
																				  "Partially Realized"
																				? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
																				: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
																		}`}
																	>
																		{
																			fund.status
																		}
																	</span>
																</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										</div>

										<div>
											<h3 className="mb-4 text-lg font-semibold">
												Performance Visualization
											</h3>
											<div className="grid gap-6 md:grid-cols-2">
												<div className="h-[300px] rounded-lg border border-slate-200 dark:border-slate-700 p-4">
													<div className="flex h-full items-center justify-center">
														<div className="flex flex-col items-center text-center">
															<BarChart3 className="mb-2 h-10 w-10 text-slate-400" />
															<p className="text-sm text-slate-500 dark:text-slate-400">
																Fund performance
																comparison chart
															</p>
														</div>
													</div>
												</div>
												<div className="h-[300px] rounded-lg border border-slate-200 dark:border-slate-700 p-4">
													<div className="flex h-full items-center justify-center">
														<div className="flex flex-col items-center text-center">
															<PieChart className="mb-2 h-10 w-10 text-slate-400" />
															<p className="text-sm text-slate-500 dark:text-slate-400">
																Sector
																distribution
																chart
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</main>
		</div>
	);
}
