"use client";

import { useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ResponsiveContainer } from "@/components/responsive-container";
import {
	ArrowLeft,
	Calendar,
	Check,
	Clock,
	DollarSign,
	Download,
	Eye,
	FileText,
	Gavel,
	Info,
	MessageSquare,
	Percent,
	Send,
	ThumbsDown,
	ThumbsUp,
	TrendingUp,
	Upload,
	X,
} from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import MainNavbar from "@/components/main-navbar";
import Link from "next/link";
import {
	getFundingRequestById,
	getStartupById,
	getInvestorById,
	updateBidStatus,
	fundingRequests,
	type Bid,
} from "@/lib/db";
import { useSession } from "next-auth/react";

export default function FundingRequestDetailPage() {
	const params = useParams();
	const router = useRouter();
	const requestId = params.id as string;

	// Get funding request data from our mock database
	const fundingRequest = getFundingRequestById(requestId);
	const startup = fundingRequest
		? getStartupById(fundingRequest.startupId)
		: null;

	const [activeTab, setActiveTab] = useState("overview");
	const [messageText, setMessageText] = useState("");
	const [bidAmount, setBidAmount] = useState("");
	const [bidEquity, setBidEquity] = useState(15);
	const [bidMessage, setBidMessage] = useState("");
	const [bidTerms, setBidTerms] = useState("");
	const [showBidForm, setShowBidForm] = useState(false);
	const [submittingBid, setSubmittingBid] = useState(false);
	const [selectedBid, setSelectedBid] = useState<Bid | null>(null);
	const [showBidResponseDialog, setShowBidResponseDialog] = useState(false);

	const fileInputRef = useRef<HTMLInputElement>(null);
	const { data: session, status } = useSession();

	if (!fundingRequest || !startup) {
		return (
			<div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
				<MainNavbar />
				<main className="flex-1 pt-16 p-4 md:p-6">
					<ResponsiveContainer>
						<div className="flex items-center mb-6">
							<Button
								variant="ghost"
								size="sm"
								className="mr-2"
								asChild
							>
								<Link href="/deal-rooms">
									<ArrowLeft className="h-4 w-4 mr-1" />
									Back
								</Link>
							</Button>
						</div>
						<Card>
							<CardContent className="flex flex-col items-center justify-center p-12">
								<Info className="h-12 w-12 text-slate-400 mb-4" />
								<h2 className="text-2xl font-bold mb-2">
									Funding Request Not Found
								</h2>
								<p className="text-slate-500 dark:text-slate-400 mb-6">
									The funding request you're looking for
									doesn't exist or has been removed.
								</p>
								<Button asChild>
									<Link href="/deal-rooms">
										View All Opportunities
									</Link>
								</Button>
							</CardContent>
						</Card>
					</ResponsiveContainer>
				</main>
			</div>
		);
	}

	const handleSendMessage = () => {
		if (messageText.trim()) {
			// In a real app, this would send the message to the API
			console.log("Sending message:", messageText);
			setMessageText("");
		}
	};

	const handleFileUpload = () => {
		fileInputRef.current?.click();
	};

	const handleSubmitBid = () => {
		setSubmittingBid(true);
		// Simulate API call
		setTimeout(() => {
			setSubmittingBid(false);
			setShowBidForm(false);
			// In a real app, this would submit the bid to the API
			console.log("Submitting bid:", {
				bidAmount,
				bidEquity,
				bidMessage,
				bidTerms,
			});
			// Refresh the page to show the new bid
			window.location.reload();
		}, 1000);
	};

	const calculateValuation = () => {
		if (bidAmount && bidEquity) {
			const amount = Number.parseFloat(bidAmount.replace(/[^0-9.]/g, ""));
			if (!isNaN(amount)) {
				const calculatedValuation = (
					amount /
					(bidEquity / 100)
				).toFixed(1);
				return `$${calculatedValuation}M`;
			}
		}
		return "";
	};

	const handleBidResponse = (action: "accept" | "reject") => {
		if (!selectedBid) return;

		// Update bid status in our mock database
		updateBidStatus(
			selectedBid.id,
			action === "accept" ? "accepted" : "rejected"
		);

		// Close dialog and refresh page
		setShowBidResponseDialog(false);
		window.location.reload();
	};

	const userType = session?.user?.roles?.[0] ?? null;
	const isStartup = userType === "startup";
	const isInvestor = userType === "investor";

	return (
		<div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
			<MainNavbar />

			<main className="flex-1 pt-16">
				<ResponsiveContainer className="py-6">
					<div className="flex items-center mb-6">
						<Button
							variant="ghost"
							size="sm"
							className="mr-2"
							asChild
						>
							<Link href="/deal-rooms">
								<ArrowLeft className="h-4 w-4 mr-1" />
								Back
							</Link>
						</Button>
						<h1 className="text-2xl font-bold truncate">
							{fundingRequest.title}
						</h1>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						{/* Main Content */}
						<div className="md:col-span-2 space-y-6">
							<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
								<CardHeader className="pb-0">
									<div className="flex items-center gap-4">
										<Avatar className="h-16 w-16 flex-shrink-0">
											<AvatarImage
												src={startup.logo}
												alt={startup.name}
											/>
											<AvatarFallback>
												{startup.name.substring(0, 2)}
											</AvatarFallback>
										</Avatar>
										<div className="min-w-0">
											<div className="flex items-center gap-2 flex-wrap">
												<h2 className="text-xl font-bold">
													{startup.name}
												</h2>
												<Badge>
													{fundingRequest.stage}
												</Badge>
											</div>
											<p className="text-slate-600 dark:text-slate-400 truncate">
												{startup.tagline}
											</p>
											<div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
												<Calendar className="h-3 w-3 flex-shrink-0" />
												<span>
													Created:{" "}
													{fundingRequest.createdAt}
												</span>
												<span className="hidden sm:inline">
													•
												</span>
												<Clock className="h-3 w-3 flex-shrink-0" />
												<span>
													Expires:{" "}
													{fundingRequest.expiresAt}
												</span>
												<span className="hidden sm:inline">
													•
												</span>
												<Eye className="h-3 w-3 flex-shrink-0" />
												<span>
													{fundingRequest.views} views
												</span>
											</div>
										</div>
									</div>
								</CardHeader>

								<CardContent className="pt-6">
									<Tabs
										defaultValue="overview"
										value={activeTab}
										onValueChange={setActiveTab}
									>
										<div className="overflow-x-auto">
											<TabsList className="mb-6 w-full flex-nowrap">
												<TabsTrigger value="overview">
													Overview
												</TabsTrigger>
												<TabsTrigger value="documents">
													Documents
												</TabsTrigger>
												<TabsTrigger value="bids">
													Bids (
													{fundingRequest.bids.length}
													)
												</TabsTrigger>
												<TabsTrigger value="discussion">
													Discussion
												</TabsTrigger>
											</TabsList>
										</div>

										<TabsContent
											value="overview"
											className="space-y-6"
										>
											<div>
												<h3 className="text-lg font-semibold mb-2">
													Funding Request
												</h3>
												<p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">
													{fundingRequest.description}
												</p>
											</div>

											<div className="grid gap-4 md:grid-cols-2">
												<Card>
													<CardHeader className="pb-2">
														<CardTitle className="text-base">
															Company Overview
														</CardTitle>
													</CardHeader>
													<CardContent className="space-y-2 pt-0">
														<div className="flex justify-between">
															<span className="text-sm text-slate-500 dark:text-slate-400">
																Industry
															</span>
															<span className="text-sm font-medium">
																{startup.industry.join(
																	", "
																)}
															</span>
														</div>
														<div className="flex justify-between">
															<span className="text-sm text-slate-500 dark:text-slate-400">
																Location
															</span>
															<span className="text-sm font-medium">
																{
																	startup.location
																}
															</span>
														</div>
														<div className="flex justify-between">
															<span className="text-sm text-slate-500 dark:text-slate-400">
																Founded
															</span>
															<span className="text-sm font-medium">
																{
																	startup.foundedYear
																}
															</span>
														</div>
														<div className="flex justify-between">
															<span className="text-sm text-slate-500 dark:text-slate-400">
																Team Size
															</span>
															<span className="text-sm font-medium">
																{
																	startup.teamSize
																}{" "}
																employees
															</span>
														</div>
														<div className="flex justify-between">
															<span className="text-sm text-slate-500 dark:text-slate-400">
																Website
															</span>
															<a
																href={
																	startup.website
																}
																target="_blank"
																rel="noopener noreferrer"
																className="text-sm font-medium text-primary hover:underline"
															>
																{startup.website.replace(
																	/^https?:\/\//,
																	""
																)}
															</a>
														</div>
													</CardContent>
												</Card>

												<Card>
													<CardHeader className="pb-2">
														<CardTitle className="text-base">
															Key Metrics
														</CardTitle>
													</CardHeader>
													<CardContent className="space-y-2 pt-0">
														{startup.metrics
															.arr && (
															<div className="flex justify-between">
																<span className="text-sm text-slate-500 dark:text-slate-400">
																	ARR
																</span>
																<span className="text-sm font-medium">
																	{
																		startup
																			.metrics
																			.arr
																	}
																</span>
															</div>
														)}
														{startup.metrics
															.growth && (
															<div className="flex justify-between">
																<span className="text-sm text-slate-500 dark:text-slate-400">
																	YoY Growth
																</span>
																<span className="text-sm font-medium">
																	{
																		startup
																			.metrics
																			.growth
																	}
																</span>
															</div>
														)}
														{startup.metrics
															.customers && (
															<div className="flex justify-between">
																<span className="text-sm text-slate-500 dark:text-slate-400">
																	Customers
																</span>
																<span className="text-sm font-medium">
																	{
																		startup
																			.metrics
																			.customers
																	}
																</span>
															</div>
														)}
														{startup.metrics
															.runway && (
															<div className="flex justify-between">
																<span className="text-sm text-slate-500 dark:text-slate-400">
																	Runway
																</span>
																<span className="text-sm font-medium">
																	{
																		startup
																			.metrics
																			.runway
																	}
																</span>
															</div>
														)}
														{startup.metrics
															.cac && (
															<div className="flex justify-between">
																<span className="text-sm text-slate-500 dark:text-slate-400">
																	CAC
																</span>
																<span className="text-sm font-medium">
																	{
																		startup
																			.metrics
																			.cac
																	}
																</span>
															</div>
														)}
														{startup.metrics
															.ltv && (
															<div className="flex justify-between">
																<span className="text-sm text-slate-500 dark:text-slate-400">
																	LTV
																</span>
																<span className="text-sm font-medium">
																	{
																		startup
																			.metrics
																			.ltv
																	}
																</span>
															</div>
														)}
													</CardContent>
												</Card>
											</div>

											<div>
												<h3 className="text-lg font-semibold mb-4">
													Team
												</h3>
												<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
													{startup.team.map(
														(member) => (
															<div
																key={member.id}
																className="flex flex-col items-center text-center p-4 rounded-lg border border-slate-200 dark:border-slate-700"
															>
																<Avatar className="h-16 w-16 mb-2">
																	<AvatarImage
																		src={
																			member.image
																		}
																		alt={
																			member.name
																		}
																	/>
																	<AvatarFallback>
																		{member.name.substring(
																			0,
																			2
																		)}
																	</AvatarFallback>
																</Avatar>
																<h4 className="font-semibold">
																	{
																		member.name
																	}
																</h4>
																<p className="text-sm text-primary mb-2">
																	{
																		member.role
																	}
																</p>
																<p className="text-xs text-slate-600 dark:text-slate-300">
																	{member.bio}
																</p>
															</div>
														)
													)}
												</div>
											</div>

											{isInvestor && (
												<div className="flex justify-center">
													<Button
														size="lg"
														className="gap-2"
														onClick={() =>
															setShowBidForm(true)
														}
													>
														<Gavel className="h-5 w-5" />
														Make an Offer
													</Button>
												</div>
											)}
										</TabsContent>

										<TabsContent
											value="documents"
											className="space-y-6"
										>
											<div className="flex justify-between items-center mb-4">
												<h3 className="text-lg font-semibold">
													Supporting Documents
												</h3>
												{isStartup && (
													<Button
														size="sm"
														onClick={
															handleFileUpload
														}
													>
														<Upload className="mr-2 h-4 w-4" />
														Upload Document
													</Button>
												)}
												<input
													type="file"
													className="hidden"
													ref={fileInputRef}
													title="Upload Document"
												/>
											</div>

											<div className="space-y-3">
												{fundingRequest.documents.map(
													(doc) => (
														<div
															key={doc.id}
															className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex-wrap gap-3"
														>
															<div className="flex items-center gap-3 min-w-0">
																<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
																	<FileText className="h-5 w-5 text-slate-500" />
																</div>
																<div className="min-w-0">
																	<h4 className="font-medium truncate">
																		{
																			doc.name
																		}
																	</h4>
																	<div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
																		<span>
																			{
																				doc.size
																			}
																		</span>
																		<span className="hidden sm:inline">
																			•
																		</span>
																		<span>
																			Uploaded
																			by{" "}
																			{
																				doc.uploadedBy
																			}
																		</span>
																		<span className="hidden sm:inline">
																			•
																		</span>
																		<span>
																			{
																				doc.uploadedAt
																			}
																		</span>
																	</div>
																</div>
															</div>
															<Button
																variant="outline"
																size="sm"
																className="gap-1 flex-shrink-0"
															>
																<Download className="h-4 w-4" />
																<span className="hidden sm:inline">
																	Download
																</span>
															</Button>
														</div>
													)
												)}
											</div>

											{fundingRequest.documents.length ===
												0 && (
												<div className="flex flex-col items-center justify-center p-8 text-center">
													<FileText className="h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
													<h3 className="text-lg font-semibold mb-2">
														No Documents Yet
													</h3>
													<p className="text-slate-500 dark:text-slate-400 mb-4">
														No documents have been
														uploaded for this
														funding request.
													</p>
													{isStartup && (
														<Button
															onClick={
																handleFileUpload
															}
														>
															<Upload className="mr-2 h-4 w-4" />
															Upload Document
														</Button>
													)}
												</div>
											)}
										</TabsContent>

										<TabsContent
											value="bids"
											className="space-y-6"
										>
											<div className="flex justify-between items-center mb-4 flex-wrap gap-3">
												<h3 className="text-lg font-semibold">
													Investor Offers
												</h3>
												{isInvestor && (
													<Button
														onClick={() =>
															setShowBidForm(true)
														}
														className="gap-2"
													>
														<Gavel className="h-4 w-4" />
														Make an Offer
													</Button>
												)}
											</div>

											<div className="space-y-4">
												{fundingRequest.bids.map(
													(bid) => {
														const investor =
															getInvestorById(
																bid.investorId
															);

														return (
															<Card
																key={bid.id}
																className={`
                              ${
									bid.status === "accepted"
										? "border-green-500 dark:border-green-500"
										: ""
								}
                              ${
									bid.status === "rejected"
										? "border-red-500 dark:border-red-500"
										: ""
								}
                            `}
															>
																<CardHeader className="pb-2">
																	<div className="flex justify-between items-center flex-wrap gap-3">
																		<div className="flex items-center gap-3 min-w-0">
																			<Avatar className="h-10 w-10 flex-shrink-0">
																				<AvatarImage
																					src={
																						investor?.logo
																					}
																					alt={
																						investor?.name
																					}
																				/>
																				<AvatarFallback>
																					{investor?.name.substring(
																						0,
																						2
																					)}
																				</AvatarFallback>
																			</Avatar>
																			<div className="min-w-0">
																				<h4 className="font-semibold truncate">
																					{
																						investor?.name
																					}
																				</h4>
																				<p className="text-xs text-slate-500 dark:text-slate-400 truncate">
																					Offered
																					on{" "}
																					{
																						bid.createdAt
																					}
																				</p>
																			</div>
																		</div>
																		{bid.status !==
																			"pending" && (
																			<Badge
																				className={`
                                      ${
											bid.status === "accepted"
												? "bg-green-500"
												: ""
										}
                                      ${
											bid.status === "rejected"
												? "bg-red-500"
												: ""
										}
                                      ${
											bid.status === "withdrawn"
												? "bg-slate-500"
												: ""
										}
                                    `}
																			>
																				{bid.status
																					.charAt(
																						0
																					)
																					.toUpperCase() +
																					bid.status.slice(
																						1
																					)}
																			</Badge>
																		)}
																	</div>
																</CardHeader>
																<CardContent className="pt-2">
																	<div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-4">
																		<div className="flex flex-col items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
																			<DollarSign className="h-5 w-5 text-primary mb-1" />
																			<span className="text-lg font-bold">
																				{
																					bid.amount
																				}
																			</span>
																			<span className="text-xs text-slate-500 dark:text-slate-400">
																				Investment
																			</span>
																		</div>
																		<div className="flex flex-col items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
																			<Percent className="h-5 w-5 text-primary mb-1" />
																			<span className="text-lg font-bold">
																				{
																					bid.equity
																				}
																			</span>
																			<span className="text-xs text-slate-500 dark:text-slate-400">
																				Equity
																			</span>
																		</div>
																		<div className="flex flex-col items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
																			<TrendingUp className="h-5 w-5 text-primary mb-1" />
																			<span className="text-lg font-bold">
																				{
																					bid.valuation
																				}
																			</span>
																			<span className="text-xs text-slate-500 dark:text-slate-400">
																				Valuation
																			</span>
																		</div>
																	</div>

																	<div className="mb-4">
																		<h5 className="text-sm font-medium mb-2">
																			Message
																		</h5>
																		<p className="text-sm text-slate-600 dark:text-slate-300 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
																			{
																				bid.message
																			}
																		</p>
																	</div>

																	{bid.terms
																		.length >
																		0 && (
																		<div>
																			<h5 className="text-sm font-medium mb-2">
																				Terms
																			</h5>
																			<ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
																				{bid.terms.map(
																					(
																						term,
																						index
																					) => (
																						<li
																							key={
																								index
																							}
																							className="flex items-start gap-2"
																						>
																							<Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
																							<span>
																								{
																									term
																								}
																							</span>
																						</li>
																					)
																				)}
																			</ul>
																		</div>
																	)}

																	{isStartup &&
																		bid.status ===
																			"pending" && (
																			<CardFooter className="px-0 pt-4">
																				<div className="flex gap-2 w-full flex-wrap">
																					<Button
																						variant="outline"
																						className="flex-1 gap-2 min-w-[120px]"
																						onClick={() => {
																							setSelectedBid(
																								bid
																							);
																							setShowBidResponseDialog(
																								true
																							);
																						}}
																					>
																						<MessageSquare className="h-4 w-4" />
																						Respond
																					</Button>
																					<Button
																						variant="default"
																						className="flex-1 gap-2 min-w-[120px]"
																						onClick={() =>
																							handleBidResponse(
																								"accept"
																							)
																						}
																					>
																						<ThumbsUp className="h-4 w-4" />
																						Accept
																					</Button>
																					<Button
																						variant="destructive"
																						className="flex-1 gap-2 min-w-[120px]"
																						onClick={() =>
																							handleBidResponse(
																								"reject"
																							)
																						}
																					>
																						<ThumbsDown className="h-4 w-4" />
																						Decline
																					</Button>
																				</div>
																			</CardFooter>
																		)}

																	{isInvestor &&
																		bid.investorId ===
																			"1" &&
																		bid.status ===
																			"pending" && (
																			<CardFooter className="px-0 pt-4">
																				<Button
																					variant="destructive"
																					className="gap-2"
																				>
																					<X className="h-4 w-4" />
																					Withdraw
																					Offer
																				</Button>
																			</CardFooter>
																		)}
																</CardContent>
															</Card>
														);
													}
												)}
											</div>

											{fundingRequest.bids.length ===
												0 && (
												<div className="flex flex-col items-center justify-center p-8 text-center">
													<Gavel className="h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
													<h3 className="text-lg font-semibold mb-2">
														No Offers Yet
													</h3>
													<p className="text-slate-500 dark:text-slate-400 mb-4">
														No investors have made
														offers on this funding
														request yet.
													</p>
													{isInvestor && (
														<Button
															onClick={() =>
																setShowBidForm(
																	true
																)
															}
															className="gap-2"
														>
															<Gavel className="h-4 w-4" />
															Be the First to Make
															an Offer
														</Button>
													)}
												</div>
											)}

											{showBidForm && (
												<Card>
													<CardHeader>
														<CardTitle>
															Make an Offer
														</CardTitle>
														<CardDescription>
															Submit your
															investment offer for{" "}
															{startup.name}
														</CardDescription>
													</CardHeader>
													<CardContent className="space-y-4">
														<div className="space-y-2">
															<Label htmlFor="bid-amount">
																Investment
																Amount
															</Label>
															<div className="relative">
																<DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
																<Input
																	id="bid-amount"
																	placeholder="e.g., $5M"
																	className="pl-9"
																	value={
																		bidAmount
																	}
																	onChange={(
																		e
																	) =>
																		setBidAmount(
																			e
																				.target
																				.value
																		)
																	}
																/>
															</div>
														</div>

														<div className="space-y-2">
															<div className="flex items-center justify-between">
																<Label htmlFor="bid-equity">
																	Equity
																	Requested:{" "}
																	{bidEquity}%
																</Label>
															</div>
															<Slider
																id="bid-equity"
																min={1}
																max={49}
																step={0.5}
																value={[
																	bidEquity,
																]}
																onValueChange={(
																	value
																) =>
																	setBidEquity(
																		value[0]
																	)
																}
															/>
														</div>

														<div className="space-y-2">
															<Label htmlFor="bid-valuation">
																Implied
																Valuation
																(Post-Money)
															</Label>
															<div className="relative">
																<DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
																<Input
																	id="bid-valuation"
																	placeholder="Calculated based on amount and equity"
																	className="pl-9"
																	value={calculateValuation()}
																	readOnly
																/>
															</div>
														</div>

														<div className="space-y-2">
															<Label htmlFor="bid-message">
																Message to
																Startup
															</Label>
															<Textarea
																id="bid-message"
																placeholder="Explain why you're interested in investing and how you can add value beyond capital..."
																rows={4}
																value={
																	bidMessage
																}
																onChange={(e) =>
																	setBidMessage(
																		e.target
																			.value
																	)
																}
															/>
														</div>

														<div className="space-y-2">
															<Label htmlFor="bid-terms">
																Additional Terms
															</Label>
															<Textarea
																id="bid-terms"
																placeholder="List any additional terms (e.g., board seat, pro-rata rights, etc.). Each term on a new line."
																rows={3}
																value={bidTerms}
																onChange={(e) =>
																	setBidTerms(
																		e.target
																			.value
																	)
																}
															/>
															<p className="text-xs text-slate-500 dark:text-slate-400">
																Enter each term
																on a new line.
																These will be
																formatted as a
																list.
															</p>
														</div>
													</CardContent>
													<CardFooter className="flex justify-end gap-3 flex-wrap">
														<Button
															variant="outline"
															onClick={() =>
																setShowBidForm(
																	false
																)
															}
														>
															Cancel
														</Button>
														<Button
															onClick={
																handleSubmitBid
															}
															disabled={
																!bidAmount ||
																!bidMessage ||
																submittingBid
															}
														>
															{submittingBid
																? "Submitting..."
																: "Submit Offer"}
														</Button>
													</CardFooter>
												</Card>
											)}
										</TabsContent>

										<TabsContent
											value="discussion"
											className="space-y-6"
										>
											<div className="flex flex-col h-[500px]">
												<div className="flex-1 overflow-y-auto p-4 space-y-4 border rounded-lg border-slate-200 dark:border-slate-700 mb-4">
													<div className="flex justify-center">
														<Badge
															variant="outline"
															className="mb-4"
														>
															Discussion started
															on{" "}
															{
																fundingRequest.createdAt
															}
														</Badge>
													</div>

													<div className="flex gap-3">
														<Avatar className="h-10 w-10 flex-shrink-0">
															<AvatarImage
																src={
																	startup.logo
																}
																alt={
																	startup.name
																}
															/>
															<AvatarFallback>
																{startup.name.substring(
																	0,
																	2
																)}
															</AvatarFallback>
														</Avatar>
														<div className="flex-1">
															<div className="flex items-center gap-2">
																<span className="font-semibold">
																	{
																		startup
																			.team[0]
																			.name
																	}
																</span>
																<span className="text-xs text-slate-500 dark:text-slate-400">
																	{
																		startup.name
																	}
																</span>
															</div>
															<p className="mt-1 text-slate-700 dark:text-slate-300">
																Welcome to our
																funding request
																discussion! Feel
																free to ask any
																questions about
																our business,
																team, or plans.
															</p>
															<p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
																{
																	fundingRequest.createdAt
																}
																, 10:00 AM
															</p>
														</div>
													</div>

													<div className="flex justify-center">
														<Badge
															variant="outline"
															className="my-4"
														>
															Today
														</Badge>
													</div>

													<div className="flex gap-3">
														<Avatar className="h-10 w-10 flex-shrink-0">
															<AvatarImage
																src="/placeholder.svg?height=40&width=40&text=HV"
																alt="Horizon Ventures"
															/>
															<AvatarFallback>
																HV
															</AvatarFallback>
														</Avatar>
														<div className="flex-1">
															<div className="flex items-center gap-2">
																<span className="font-semibold">
																	Michael Chen
																</span>
																<span className="text-xs text-slate-500 dark:text-slate-400">
																	Horizon
																	Ventures
																</span>
															</div>
															<p className="mt-1 text-slate-700 dark:text-slate-300">
																Thanks for
																sharing your
																funding request.
																I'm impressed
																with your
																traction so far.
																Could you
																provide more
																details about
																your customer
																acquisition
																strategy and
																unit economics?
															</p>
															<p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
																Today, 11:30 AM
															</p>
														</div>
													</div>

													<div className="flex gap-3">
														<Avatar className="h-10 w-10 flex-shrink-0">
															<AvatarImage
																src={
																	startup.logo
																}
																alt={
																	startup.name
																}
															/>
															<AvatarFallback>
																{startup.name.substring(
																	0,
																	2
																)}
															</AvatarFallback>
														</Avatar>
														<div className="flex-1">
															<div className="flex items-center gap-2">
																<span className="font-semibold">
																	{
																		startup
																			.team[0]
																			.name
																	}
																</span>
																<span className="text-xs text-slate-500 dark:text-slate-400">
																	{
																		startup.name
																	}
																</span>
															</div>
															<p className="mt-1 text-slate-700 dark:text-slate-300">
																Hi Michael,
																thanks for your
																interest! Our
																CAC is currently
																$12,500 with an
																LTV of $125,000,
																giving us a 10:1
																LTV:CAC ratio.
																We acquire
																customers
																primarily
																through targeted
																outbound sales
																and industry
																partnerships.
																Our sales cycle
																is typically
																45-60 days, and
																we're seeing
																strong expansion
																revenue from
																existing
																customers (130%
																net revenue
																retention).
															</p>
															<p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
																Today, 12:15 PM
															</p>
														</div>
													</div>
												</div>

												<div className="flex items-end gap-2">
													<Textarea
														placeholder="Type a message..."
														className="resize-none"
														rows={3}
														value={messageText}
														onChange={(e) =>
															setMessageText(
																e.target.value
															)
														}
													/>
													<Button
														className="h-10 w-10 rounded-full p-0 flex-shrink-0"
														onClick={
															handleSendMessage
														}
														disabled={
															!messageText.trim()
														}
													>
														<Send className="h-5 w-5" />
													</Button>
												</div>
											</div>
										</TabsContent>
									</Tabs>
								</CardContent>
							</Card>
						</div>

						{/* Sidebar */}
						<div className="space-y-6">
							<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
								<CardHeader>
									<CardTitle>Funding Details</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div className="flex flex-col items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
											<DollarSign className="h-5 w-5 text-primary mb-1" />
											<span className="text-lg font-bold">
												{fundingRequest.amountRequested}
											</span>
											<span className="text-xs text-slate-500 dark:text-slate-400">
												Seeking
											</span>
										</div>
										<div className="flex flex-col items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
											<Percent className="h-5 w-5 text-primary mb-1" />
											<span className="text-lg font-bold">
												{fundingRequest.equityOffered}
											</span>
											<span className="text-xs text-slate-500 dark:text-slate-400">
												Equity
											</span>
										</div>
									</div>

									<div className="flex flex-col items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
										<TrendingUp className="h-5 w-5 text-primary mb-1" />
										<span className="text-lg font-bold">
											{fundingRequest.valuation}
										</span>
										<span className="text-xs text-slate-500 dark:text-slate-400">
											Valuation (Post-Money)
										</span>
									</div>

									<div className="pt-2 border-t border-slate-200 dark:border-slate-700">
										<h4 className="text-sm font-medium mb-2">
											Key Documents
										</h4>
										<div className="space-y-2">
											{fundingRequest.pitchDeck && (
												<div className="flex items-center justify-between">
													<div className="flex items-center gap-2">
														<FileText className="h-4 w-4 text-slate-500" />
														<span className="text-sm">
															Pitch Deck
														</span>
													</div>
													<Button
														variant="ghost"
														size="sm"
														className="h-8 w-8 p-0"
													>
														<Download className="h-4 w-4" />
													</Button>
												</div>
											)}
											{fundingRequest.financials && (
												<div className="flex items-center justify-between">
													<div className="flex items-center gap-2">
														<FileText className="h-4 w-4 text-slate-500" />
														<span className="text-sm">
															Financial
															Projections
														</span>
													</div>
													<Button
														variant="ghost"
														size="sm"
														className="h-8 w-8 p-0"
													>
														<Download className="h-4 w-4" />
													</Button>
												</div>
											)}
											{fundingRequest.marketAnalysis && (
												<div className="flex items-center justify-between">
													<div className="flex items-center gap-2">
														<FileText className="h-4 w-4 text-slate-500" />
														<span className="text-sm">
															Market Analysis
														</span>
													</div>
													<Button
														variant="ghost"
														size="sm"
														className="h-8 w-8 p-0"
													>
														<Download className="h-4 w-4" />
													</Button>
												</div>
											)}
										</div>
									</div>

									<div className="pt-2 border-t border-slate-200 dark:border-slate-700">
										<h4 className="text-sm font-medium mb-2">
											Timeline
										</h4>
										<div className="space-y-2">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2">
													<Calendar className="h-4 w-4 text-slate-500" />
													<span className="text-sm">
														Created
													</span>
												</div>
												<span className="text-sm">
													{fundingRequest.createdAt}
												</span>
											</div>
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2">
													<Calendar className="h-4 w-4 text-slate-500" />
													<span className="text-sm">
														Expires
													</span>
												</div>
												<span className="text-sm">
													{fundingRequest.expiresAt}
												</span>
											</div>
										</div>
									</div>
								</CardContent>
								<CardFooter>
									{isInvestor && (
										<Button
											className="w-full gap-2"
											onClick={() => setShowBidForm(true)}
										>
											<Gavel className="h-4 w-4" />
											Make an Offer
										</Button>
									)}
									{isStartup && (
										<Button
											variant="outline"
											className="w-full gap-2"
											asChild
										>
											<Link
												href={`/profile/startup?id=${startup.id}`}
											>
												<Info className="h-4 w-4" />
												View Company Profile
											</Link>
										</Button>
									)}
								</CardFooter>
							</Card>

							<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
								<CardHeader>
									<CardTitle>Bid Summary</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex items-center justify-between">
										<span className="text-sm">
											Total Bids
										</span>
										<span className="font-medium">
											{fundingRequest.bids.length}
										</span>
									</div>

									<div className="flex items-center justify-between">
										<span className="text-sm">
											Highest Offer
										</span>
										<span className="font-medium">
											{fundingRequest.bids.length > 0
												? fundingRequest.bids.reduce(
														(max, bid) => {
															const amount =
																Number.parseFloat(
																	bid.amount.replace(
																		/[^0-9.]/g,
																		""
																	)
																);
															const maxAmount =
																Number.parseFloat(
																	max.replace(
																		/[^0-9.]/g,
																		""
																	)
																);
															return amount >
																maxAmount
																? bid.amount
																: max;
														},
														"$0M"
												  )
												: "N/A"}
										</span>
									</div>

									<div className="flex items-center justify-between">
										<span className="text-sm">
											Lowest Equity
										</span>
										<span className="font-medium">
											{fundingRequest.bids.length > 0
												? fundingRequest.bids.reduce(
														(min, bid) => {
															const equity =
																Number.parseFloat(
																	bid.equity.replace(
																		/[^0-9.]/g,
																		""
																	)
																);
															const minEquity =
																Number.parseFloat(
																	min.replace(
																		/[^0-9.]/g,
																		""
																	)
																);
															return equity <
																minEquity
																? bid.equity
																: min;
														},
														"100%"
												  )
												: "N/A"}
										</span>
									</div>

									<div className="flex items-center justify-between">
										<span className="text-sm">
											Highest Valuation
										</span>
										<span className="font-medium">
											{fundingRequest.bids.length > 0
												? fundingRequest.bids.reduce(
														(max, bid) => {
															const valuation =
																Number.parseFloat(
																	bid.valuation.replace(
																		/[^0-9.]/g,
																		""
																	)
																);
															const maxValuation =
																Number.parseFloat(
																	max.replace(
																		/[^0-9.]/g,
																		""
																	)
																);
															return valuation >
																maxValuation
																? bid.valuation
																: max;
														},
														"$0M"
												  )
												: "N/A"}
										</span>
									</div>

									<div className="pt-2 border-t border-slate-200 dark:border-slate-700">
										<h4 className="text-sm font-medium mb-2">
											Recent Activity
										</h4>
										<div className="space-y-2 text-sm">
											{fundingRequest.bids.length > 0 ? (
												fundingRequest.bids
													.slice(0, 3)
													.map((bid, index) => {
														const investor =
															getInvestorById(
																bid.investorId
															);
														return (
															<div
																key={index}
																className="flex items-center gap-2"
															>
																<Gavel className="h-4 w-4 text-slate-500" />
																<span className="truncate">
																	{
																		investor?.name
																	}{" "}
																	made an
																	offer of{" "}
																	{bid.amount}
																</span>
															</div>
														);
													})
											) : (
												<div className="text-slate-500 dark:text-slate-400">
													No recent activity
												</div>
											)}
										</div>
									</div>
								</CardContent>
								<CardFooter>
									<Button
										variant="outline"
										className="w-full"
										onClick={() => setActiveTab("bids")}
									>
										View All Bids
									</Button>
								</CardFooter>
							</Card>

							<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
								<CardHeader>
									<CardTitle>Similar Opportunities</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									{fundingRequests
										.filter(
											(req) =>
												req.id !== fundingRequest.id &&
												req.stage ===
													fundingRequest.stage
										)
										.slice(0, 2)
										.map((req) => {
											const reqStartup = getStartupById(
												req.startupId
											);
											return (
												<div
													key={req.id}
													className="flex items-start gap-3"
												>
													<Avatar className="h-10 w-10 flex-shrink-0">
														<AvatarImage
															src={
																reqStartup?.logo
															}
															alt={
																reqStartup?.name
															}
														/>
														<AvatarFallback>
															{reqStartup?.name.substring(
																0,
																2
															)}
														</AvatarFallback>
													</Avatar>
													<div className="flex-1 min-w-0">
														<h4 className="font-medium truncate">
															{reqStartup?.name}
														</h4>
														<p className="text-xs text-slate-500 dark:text-slate-400 truncate">
															{
																req.amountRequested
															}{" "}
															•{" "}
															{req.equityOffered}{" "}
															equity
														</p>
														<p className="text-sm truncate-2-lines mt-1">
															{req.title}
														</p>
													</div>
												</div>
											);
										})}
								</CardContent>
								<CardFooter>
									<Button
										variant="outline"
										className="w-full"
										asChild
									>
										<Link href="/deal-rooms">
											View All Opportunities
										</Link>
									</Button>
								</CardFooter>
							</Card>
						</div>
					</div>
				</ResponsiveContainer>
			</main>

			{/* Bid Response Dialog */}
			<Dialog
				open={showBidResponseDialog}
				onOpenChange={setShowBidResponseDialog}
			>
				<DialogContent className="max-w-md">
					<DialogHeader>
						<DialogTitle>Respond to Offer</DialogTitle>
						<DialogDescription>
							Respond to the investment offer from{" "}
							{
								getInvestorById(selectedBid?.investorId || "")
									?.name
							}
						</DialogDescription>
					</DialogHeader>

					<div className="space-y-4">
						<div className="grid grid-cols-3 gap-2 text-center">
							<div className="rounded-lg border border-slate-200 dark:border-slate-700 p-2">
								<p className="text-xs text-slate-500 dark:text-slate-400">
									Amount
								</p>
								<p className="font-semibold">
									{selectedBid?.amount}
								</p>
							</div>
							<div className="rounded-lg border border-slate-200 dark:border-slate-700 p-2">
								<p className="text-xs text-slate-500 dark:text-slate-400">
									Equity
								</p>
								<p className="font-semibold">
									{selectedBid?.equity}
								</p>
							</div>
							<div className="rounded-lg border border-slate-200 dark:border-slate-700 p-2">
								<p className="text-xs text-slate-500 dark:text-slate-400">
									Valuation
								</p>
								<p className="font-semibold">
									{selectedBid?.valuation}
								</p>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="response-message">
								Your Response
							</Label>
							<Textarea
								id="response-message"
								placeholder="Thank you for your offer. We appreciate your interest in our company..."
								rows={4}
							/>
						</div>
					</div>

					<DialogFooter className="flex justify-end gap-3 flex-wrap">
						<Button
							variant="outline"
							onClick={() => setShowBidResponseDialog(false)}
						>
							Cancel
						</Button>
						<Button
							variant="destructive"
							onClick={() => handleBidResponse("reject")}
						>
							Decline Offer
						</Button>
						<Button onClick={() => handleBidResponse("accept")}>
							Accept Offer
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
