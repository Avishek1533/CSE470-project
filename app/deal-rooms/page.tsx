"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
	Calendar,
	DollarSign,
	Filter,
	Gavel,
	Percent,
	Plus,
	Search,
	TrendingUp,
} from "lucide-react";
import MainNavbar from "@/components/main-navbar";
import { ResponsiveContainer } from "@/components/responsive-container";
import { motion } from "framer-motion";
import { getAllFundingRequests, getStartupById } from "@/lib/db";

export default function DealRoomsPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeTab, setActiveTab] = useState("all");

	// Get all funding requests from our mock database
	const allFundingRequests = getAllFundingRequests();

	// Filter funding requests based on search query and active tab
	const filteredRequests = allFundingRequests.filter((request) => {
		const startup = getStartupById(request.startupId);
		const matchesSearch =
			searchQuery === "" ||
			startup?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			startup?.industry.some((ind) =>
				ind.toLowerCase().includes(searchQuery.toLowerCase())
			);

		const matchesTab =
			activeTab === "all" ||
			request.stage.toLowerCase() === activeTab.toLowerCase();

		return matchesSearch && matchesTab;
	});

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
			<MainNavbar />

			<main className="flex-1 pt-16">
				<ResponsiveContainer className="py-6">
					<div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<h1 className="text-3xl font-bold">
								Funding Opportunities
							</h1>
							<p className="text-slate-500 dark:text-slate-400">
								Discover and invest in promising startups
							</p>
						</div>
						<div className="flex items-center gap-2">
							<Button asChild>
								<Link href="/deal-rooms/create">
									<Plus className="mr-2 h-4 w-4" />
									Create Funding Request
								</Link>
							</Button>
						</div>
					</div>

					<div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
							<Input
								placeholder="Search by startup name, industry, or keywords..."
								className="pl-9"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</div>
						<Button variant="outline" className="gap-2">
							<Filter className="h-4 w-4" />
							Filters
						</Button>
					</div>

					<Tabs
						defaultValue="all"
						value={activeTab}
						onValueChange={setActiveTab}
					>
						<TabsList className="mb-6 w-full overflow-x-auto flex-nowrap">
							<TabsTrigger value="all">
								All Opportunities
							</TabsTrigger>
							<TabsTrigger value="seed">Seed</TabsTrigger>
							<TabsTrigger value="series a">Series A</TabsTrigger>
							<TabsTrigger value="series b">Series B</TabsTrigger>
							<TabsTrigger value="series c+">
								Series C+
							</TabsTrigger>
						</TabsList>

						<TabsContent value="all" className="space-y-6">
							<motion.div
								className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
								variants={container}
								initial="hidden"
								animate="show"
							>
								{filteredRequests.length > 0 ? (
									filteredRequests.map((request) => {
										const startup = getStartupById(
											request.startupId
										);
										if (!startup) return null;

										return (
											<motion.div
												key={request.id}
												variants={item}
											>
												<Link
													href={`/deal-rooms/${request.id}`}
												>
													<Card className="h-full overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]">
														<CardContent className="p-6">
															<div className="flex items-center gap-4 mb-4">
																<div className="h-16 w-16 overflow-hidden rounded-lg flex-shrink-0">
																	<img
																		src={
																			startup.logo ||
																			"/placeholder.svg"
																		}
																		alt={
																			startup.name
																		}
																		className="h-full w-full object-cover"
																	/>
																</div>
																<div className="min-w-0">
																	<h2 className="text-xl font-bold truncate">
																		{
																			startup.name
																		}
																	</h2>
																	<div className="flex items-center gap-2 flex-wrap">
																		<Badge>
																			{
																				request.stage
																			}
																		</Badge>
																		<span className="text-sm text-slate-500 dark:text-slate-400 truncate">
																			{startup.industry.join(
																				", "
																			)}
																		</span>
																	</div>
																</div>
															</div>

															<h3 className="font-medium mb-2 truncate-2-lines">
																{request.title}
															</h3>
															<p className="text-sm text-slate-600 dark:text-slate-300 truncate-3-lines mb-4">
																{
																	request.description.split(
																		"\n"
																	)[0]
																}
															</p>

															<div className="grid grid-cols-3 gap-2 mb-4">
																<div className="flex flex-col items-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
																	<DollarSign className="h-4 w-4 text-primary mb-1" />
																	<span className="text-sm font-semibold">
																		{
																			request.amountRequested
																		}
																	</span>
																	<span className="text-xs text-slate-500 dark:text-slate-400">
																		Seeking
																	</span>
																</div>
																<div className="flex flex-col items-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
																	<Percent className="h-4 w-4 text-primary mb-1" />
																	<span className="text-sm font-semibold">
																		{
																			request.equityOffered
																		}
																	</span>
																	<span className="text-xs text-slate-500 dark:text-slate-400">
																		Equity
																	</span>
																</div>
																<div className="flex flex-col items-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
																	<TrendingUp className="h-4 w-4 text-primary mb-1" />
																	<span className="text-sm font-semibold">
																		{
																			request.valuation
																		}
																	</span>
																	<span className="text-xs text-slate-500 dark:text-slate-400">
																		Valuation
																	</span>
																</div>
															</div>

															<div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
																<div className="flex items-center gap-1">
																	<Calendar className="h-3 w-3" />
																	<span>
																		Created:{" "}
																		{
																			request.createdAt
																		}
																	</span>
																</div>
																<div className="flex items-center gap-1">
																	<Gavel className="h-3 w-3" />
																	<span>
																		{
																			request
																				.bids
																				.length
																		}{" "}
																		offers
																	</span>
																</div>
															</div>
														</CardContent>
														<CardFooter>
															<Button
																asChild
																className="w-full"
															>
																<span>
																	View
																	Opportunity
																</span>
															</Button>
														</CardFooter>
													</Card>
												</Link>
											</motion.div>
										);
									})
								) : (
									<motion.div
										className="col-span-full"
										variants={item}
									>
										<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
											<CardHeader>
												<CardTitle className="text-center">
													No matching opportunities
													found
												</CardTitle>
											</CardHeader>
											<CardContent>
												<p className="text-center text-slate-500 dark:text-slate-400 mb-4">
													{searchQuery
														? "No opportunities match your search criteria. Try a different search term."
														: "There are no active funding opportunities at the moment."}
												</p>
												<div className="flex justify-center">
													<Button
														onClick={() => {
															setSearchQuery("");
															setActiveTab("all");
														}}
													>
														Clear Filters
													</Button>
												</div>
											</CardContent>
										</Card>
									</motion.div>
								)}
							</motion.div>
						</TabsContent>

						{/* Other tab contents will be identical but with filtered data */}
						<TabsContent value="seed" className="space-y-6">
							{/* Same structure as "all" tab but filtered for seed stage */}
						</TabsContent>
						<TabsContent value="series a" className="space-y-6">
							{/* Same structure as "all" tab but filtered for Series A */}
						</TabsContent>
						<TabsContent value="series b" className="space-y-6">
							{/* Same structure as "all" tab but filtered for Series B */}
						</TabsContent>
						<TabsContent value="series c+" className="space-y-6">
							{/* Same structure as "all" tab but filtered for Series C+ */}
						</TabsContent>
					</Tabs>
				</ResponsiveContainer>
			</main>
		</div>
	);
}
