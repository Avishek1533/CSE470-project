"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Building2,
	Filter,
	MapPin,
	SearchIcon,
	Tag,
	X,
	DollarSign,
} from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import MainNavbar from "@/components/main-navbar";

// Mock data for startups
const startups = Array.from({ length: 12 }, (_, i) => ({
	id: `startup-${i + 1}`,
	name: `TechNova ${i + 1}`,
	logo: `/placeholder.svg?height=80&width=80&text=TN${i + 1}`,
	description: "AI-powered data analytics platform for enterprise customers",
	industry: ["AI", "Data Analytics", "SaaS"][i % 3],
	stage: ["Seed", "Series A", "Series B"][i % 3],
	location: ["San Francisco, CA", "New York, NY", "Austin, TX"][i % 3],
	fundingRaised: ["$1.2M", "$4.5M", "$12M"][i % 3],
	founded: [2020, 2021, 2022][i % 3],
	employees: [5, 24, 50][i % 3],
}));

// Mock data for investors
const investors = Array.from({ length: 12 }, (_, i) => ({
	id: `investor-${i + 1}`,
	name: `Horizon Ventures ${i + 1}`,
	logo: `/placeholder.svg?height=80&width=80&text=HV${i + 1}`,
	description:
		"Early-stage venture capital firm focused on technology startups",
	investmentFocus: ["AI/ML", "Fintech", "Healthcare"][i % 3],
	stage: ["Seed", "Series A", "Series B"][i % 3],
	location: ["San Francisco, CA", "New York, NY", "London, UK"][i % 3],
	aum: ["$50M", "$180M", "$500M"][i % 3],
	portfolioSize: [20, 42, 75][i % 3],
	checkSize: ["$250K-$1M", "$500K-$3M", "$1M-$5M"][i % 3],
}));

export default function SearchPage() {
	const [searchType, setSearchType] = useState<"startups" | "investors">(
		"startups"
	);
	const [searchQuery, setSearchQuery] = useState("");
	const [filtersVisible, setFiltersVisible] = useState(false);
	const [activeFilters, setActiveFilters] = useState<string[]>([]);

	// Filter states for startups
	const [startupIndustries, setStartupIndustries] = useState<string[]>([]);
	const [startupStages, setStartupStages] = useState<string[]>([]);
	const [startupLocations, setStartupLocations] = useState<string[]>([]);
	const [startupFundingRange, setStartupFundingRange] = useState([0, 20]);

	// Filter states for investors
	const [investorFocus, setInvestorFocus] = useState<string[]>([]);
	const [investorStages, setInvestorStages] = useState<string[]>([]);
	const [investorLocations, setInvestorLocations] = useState<string[]>([]);
	const [investorCheckSizeRange, setInvestorCheckSizeRange] = useState([
		0, 5,
	]);

	const toggleFilter = (
		filter: string,
		type: "industry" | "stage" | "location" | "focus"
	) => {
		let currentFilters: string[] = [];
		let setFilters: React.Dispatch<
			React.SetStateAction<string[]>
		> = () => {};

		switch (type) {
			case "industry":
				currentFilters = [...startupIndustries];
				setFilters = setStartupIndustries;
				break;
			case "stage":
				currentFilters =
					searchType === "startups"
						? [...startupStages]
						: [...investorStages];
				setFilters =
					searchType === "startups"
						? setStartupStages
						: setInvestorStages;
				break;
			case "location":
				currentFilters =
					searchType === "startups"
						? [...startupLocations]
						: [...investorLocations];
				setFilters =
					searchType === "startups"
						? setStartupLocations
						: setInvestorLocations;
				break;
			case "focus":
				currentFilters = [...investorFocus];
				setFilters = setInvestorFocus;
				break;
		}

		if (currentFilters.includes(filter)) {
			setFilters(currentFilters.filter((f) => f !== filter));
			setActiveFilters(activeFilters.filter((f) => f !== filter));
		} else {
			setFilters([...currentFilters, filter]);
			setActiveFilters([...activeFilters, filter]);
		}
	};

	const clearFilter = (filter: string) => {
		setActiveFilters(activeFilters.filter((f) => f !== filter));

		// Clear from specific filter arrays
		if (startupIndustries.includes(filter)) {
			setStartupIndustries(startupIndustries.filter((f) => f !== filter));
		}
		if (startupStages.includes(filter) || investorStages.includes(filter)) {
			setStartupStages(startupStages.filter((f) => f !== filter));
			setInvestorStages(investorStages.filter((f) => f !== filter));
		}
		if (
			startupLocations.includes(filter) ||
			investorLocations.includes(filter)
		) {
			setStartupLocations(startupLocations.filter((f) => f !== filter));
			setInvestorLocations(investorLocations.filter((f) => f !== filter));
		}
		if (investorFocus.includes(filter)) {
			setInvestorFocus(investorFocus.filter((f) => f !== filter));
		}
	};

	const clearAllFilters = () => {
		setActiveFilters([]);
		setStartupIndustries([]);
		setStartupStages([]);
		setStartupLocations([]);
		setStartupFundingRange([0, 20]);
		setInvestorFocus([]);
		setInvestorStages([]);
		setInvestorLocations([]);
		setInvestorCheckSizeRange([0, 5]);
	};

	return (
		<div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
			<MainNavbar/>

			<main className="flex-1 pt-16">
				<div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
					<div className="mb-8">
						<h1 className="text-3xl font-bold tracking-tight">
							Search
						</h1>
						<p className="text-slate-600 dark:text-slate-400">
							Find the perfect{" "}
							{searchType === "startups"
								? "startup to invest in"
								: "investor for your startup"}
						</p>
					</div>

					<div className="mb-6">
						<Tabs
							defaultValue="startups"
							onValueChange={(value) =>
								setSearchType(value as "startups" | "investors")
							}
							className="w-full"
						>
							<TabsList className="grid w-full grid-cols-2 mb-6">
								<TabsTrigger
									value="startups"
									className="text-sm"
								>
									Startups
								</TabsTrigger>
								<TabsTrigger
									value="investors"
									className="text-sm"
								>
									Investors
								</TabsTrigger>
							</TabsList>

							<div className="flex flex-col md:flex-row gap-4 mb-6">
								<div className="relative flex-1">
									<SearchIcon className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
									<Input
										placeholder={`Search ${searchType}...`}
										className="pl-9"
										value={searchQuery}
										onChange={(e) =>
											setSearchQuery(e.target.value)
										}
									/>
								</div>
								<Button
									variant="outline"
									className="gap-2 md:w-auto"
									onClick={() =>
										setFiltersVisible(!filtersVisible)
									}
								>
									<Filter className="h-4 w-4" />
									Filters
									<Badge className="ml-1 h-5 w-5 rounded-full p-0 text-xs">
										{activeFilters.length}
									</Badge>
								</Button>
								<Select defaultValue="relevance">
									<SelectTrigger className="w-full md:w-[180px]">
										<SelectValue placeholder="Sort by" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="relevance">
											Relevance
										</SelectItem>
										<SelectItem value="newest">
											Newest
										</SelectItem>
										<SelectItem value="oldest">
											Oldest
										</SelectItem>
										{searchType === "startups" ? (
											<>
												<SelectItem value="funding-high">
													Funding: High to Low
												</SelectItem>
												<SelectItem value="funding-low">
													Funding: Low to High
												</SelectItem>
											</>
										) : (
											<>
												<SelectItem value="portfolio-large">
													Portfolio: Large to Small
												</SelectItem>
												<SelectItem value="portfolio-small">
													Portfolio: Small to Large
												</SelectItem>
											</>
										)}
									</SelectContent>
								</Select>
							</div>

							{activeFilters.length > 0 && (
								<div className="mb-6 flex flex-wrap gap-2">
									{activeFilters.map((filter) => (
										<Badge
											key={filter}
											variant="secondary"
											className="gap-1 px-2 py-1"
										>
											{filter}
											<button
												onClick={() =>
													clearFilter(filter)
												}
												title="Remove filter"
											>
												<X className="h-3 w-3" />
											</button>
										</Badge>
									))}
									<Button
										variant="ghost"
										size="sm"
										onClick={clearAllFilters}
										className="h-7 text-xs"
									>
										Clear all
									</Button>
								</div>
							)}

							{filtersVisible && (
								<div className="mb-6 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
									<div className="mb-4 flex items-center justify-between">
										<h3 className="font-semibold">
											Filters
										</h3>
										<Button
											variant="ghost"
											size="sm"
											onClick={() =>
												setFiltersVisible(false)
											}
										>
											<X className="h-4 w-4" />
										</Button>
									</div>

									<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
										<Accordion
											type="multiple"
											className="w-full"
										>
											{searchType === "startups" ? (
												<>
													<AccordionItem value="industry">
														<AccordionTrigger className="text-sm font-medium">
															Industry
														</AccordionTrigger>
														<AccordionContent>
															<div className="space-y-2">
																{[
																	"AI",
																	"Data Analytics",
																	"SaaS",
																	"Fintech",
																	"Healthcare",
																	"E-commerce",
																].map(
																	(
																		industry
																	) => (
																		<div
																			key={
																				industry
																			}
																			className="flex items-center space-x-2"
																		>
																			<Checkbox
																				id={`industry-${industry}`}
																				checked={startupIndustries.includes(
																					industry
																				)}
																				onCheckedChange={() =>
																					toggleFilter(
																						industry,
																						"industry"
																					)
																				}
																			/>
																			<label
																				htmlFor={`industry-${industry}`}
																				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
																			>
																				{
																					industry
																				}
																			</label>
																		</div>
																	)
																)}
															</div>
														</AccordionContent>
													</AccordionItem>
													<AccordionItem value="funding">
														<AccordionTrigger className="text-sm font-medium">
															Funding Range
														</AccordionTrigger>
														<AccordionContent>
															<div className="space-y-4">
																<Slider
																	value={
																		startupFundingRange
																	}
																	min={0}
																	max={20}
																	step={1}
																	onValueChange={
																		setStartupFundingRange
																	}
																/>
																<div className="flex items-center justify-between">
																	<span className="text-sm">
																		$
																		{
																			startupFundingRange[0]
																		}
																		M
																	</span>
																	<span className="text-sm">
																		$
																		{
																			startupFundingRange[1]
																		}
																		M+
																	</span>
																</div>
															</div>
														</AccordionContent>
													</AccordionItem>
												</>
											) : (
												<>
													<AccordionItem value="focus">
														<AccordionTrigger className="text-sm font-medium">
															Investment Focus
														</AccordionTrigger>
														<AccordionContent>
															<div className="space-y-2">
																{[
																	"AI/ML",
																	"Fintech",
																	"Healthcare",
																	"SaaS",
																	"Consumer",
																	"Enterprise",
																].map(
																	(focus) => (
																		<div
																			key={
																				focus
																			}
																			className="flex items-center space-x-2"
																		>
																			<Checkbox
																				id={`focus-${focus}`}
																				checked={investorFocus.includes(
																					focus
																				)}
																				onCheckedChange={() =>
																					toggleFilter(
																						focus,
																						"focus"
																					)
																				}
																			/>
																			<label
																				htmlFor={`focus-${focus}`}
																				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
																			>
																				{
																					focus
																				}
																			</label>
																		</div>
																	)
																)}
															</div>
														</AccordionContent>
													</AccordionItem>
													<AccordionItem value="check-size">
														<AccordionTrigger className="text-sm font-medium">
															Check Size
														</AccordionTrigger>
														<AccordionContent>
															<div className="space-y-4">
																<Slider
																	value={
																		investorCheckSizeRange
																	}
																	min={0}
																	max={5}
																	step={0.5}
																	onValueChange={
																		setInvestorCheckSizeRange
																	}
																/>
																<div className="flex items-center justify-between">
																	<span className="text-sm">
																		$
																		{
																			investorCheckSizeRange[0]
																		}
																		M
																	</span>
																	<span className="text-sm">
																		$
																		{
																			investorCheckSizeRange[1]
																		}
																		M+
																	</span>
																</div>
															</div>
														</AccordionContent>
													</AccordionItem>
												</>
											)}

											<AccordionItem value="stage">
												<AccordionTrigger className="text-sm font-medium">
													Stage
												</AccordionTrigger>
												<AccordionContent>
													<div className="space-y-2">
														{[
															"Pre-seed",
															"Seed",
															"Series A",
															"Series B",
															"Series C+",
														].map((stage) => (
															<div
																key={stage}
																className="flex items-center space-x-2"
															>
																<Checkbox
																	id={`stage-${stage}`}
																	checked={
																		searchType ===
																		"startups"
																			? startupStages.includes(
																					stage
																			  )
																			: investorStages.includes(
																					stage
																			  )
																	}
																	onCheckedChange={() =>
																		toggleFilter(
																			stage,
																			"stage"
																		)
																	}
																/>
																<label
																	htmlFor={`stage-${stage}`}
																	className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
																>
																	{stage}
																</label>
															</div>
														))}
													</div>
												</AccordionContent>
											</AccordionItem>

											<AccordionItem value="location">
												<AccordionTrigger className="text-sm font-medium">
													Location
												</AccordionTrigger>
												<AccordionContent>
													<div className="space-y-2">
														{[
															"San Francisco, CA",
															"New York, NY",
															"Austin, TX",
															"Boston, MA",
															"London, UK",
															"Remote",
														].map((location) => (
															<div
																key={location}
																className="flex items-center space-x-2"
															>
																<Checkbox
																	id={`location-${location}`}
																	checked={
																		searchType ===
																		"startups"
																			? startupLocations.includes(
																					location
																			  )
																			: investorLocations.includes(
																					location
																			  )
																	}
																	onCheckedChange={() =>
																		toggleFilter(
																			location,
																			"location"
																		)
																	}
																/>
																<label
																	htmlFor={`location-${location}`}
																	className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
																>
																	{location}
																</label>
															</div>
														))}
													</div>
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</div>
								</div>
							)}

							<TabsContent value="startups" className="mt-0">
								<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{startups.map((startup) => (
										<Link
											href={`/profile/startup?id=${startup.id}`}
											key={startup.id}
										>
											<Card className="h-full overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md hover:translate-y-[-4px]">
												<CardContent className="p-0">
													<div className="relative h-32 bg-slate-100 dark:bg-slate-800">
														<div className="absolute inset-0 flex items-center justify-center">
															<img
																src={
																	startup.logo ||
																	"/placeholder.svg"
																}
																alt={
																	startup.name
																}
																className="h-16 w-16 rounded-lg object-cover"
															/>
														</div>
														<div className="absolute top-2 right-2">
															<Badge className="bg-primary/90">
																{startup.stage}
															</Badge>
														</div>
													</div>
													<div className="p-4">
														<h3 className="font-semibold">
															{startup.name}
														</h3>
														<p className="mb-2 text-sm text-primary">
															{startup.industry}
														</p>
														<p className="mb-4 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
															{
																startup.description
															}
														</p>
														<div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
															<div className="flex items-center gap-1">
																<MapPin className="h-3 w-3" />
																<span>
																	{
																		startup.location
																	}
																</span>
															</div>
															<div className="flex items-center gap-1">
																<DollarSign className="h-3 w-3" />
																<span>
																	{
																		startup.fundingRaised
																	}
																</span>
															</div>
														</div>
													</div>
												</CardContent>
											</Card>
										</Link>
									))}
								</div>
							</TabsContent>

							<TabsContent value="investors" className="mt-0">
								<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{investors.map((investor) => (
										<Link
											href={`/profile/investor?id=${investor.id}`}
											key={investor.id}
										>
											<Card className="h-full overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md hover:translate-y-[-4px]">
												<CardContent className="p-0">
													<div className="relative h-32 bg-slate-100 dark:bg-slate-800">
														<div className="absolute inset-0 flex items-center justify-center">
															<img
																src={
																	investor.logo ||
																	"/placeholder.svg"
																}
																alt={
																	investor.name
																}
																className="h-16 w-16 rounded-lg object-cover"
															/>
														</div>
													</div>
													<div className="p-4">
														<h3 className="font-semibold">
															{investor.name}
														</h3>
														<p className="mb-2 text-sm text-primary">
															{
																investor.investmentFocus
															}
														</p>
														<p className="mb-4 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
															{
																investor.description
															}
														</p>
														<div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
															<div className="flex items-center gap-1">
																<MapPin className="h-3 w-3" />
																<span>
																	{
																		investor.location
																	}
																</span>
															</div>
															<div className="flex items-center gap-1">
																<Tag className="h-3 w-3" />
																<span>
																	{
																		investor.stage
																	}
																</span>
															</div>
															<div className="flex items-center gap-1">
																<Building2 className="h-3 w-3" />
																<span>
																	{
																		investor.portfolioSize
																	}{" "}
																	companies
																</span>
															</div>
														</div>
													</div>
												</CardContent>
											</Card>
										</Link>
									))}
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</main>
		</div>
	);
}
