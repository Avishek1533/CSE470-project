"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
	ArrowLeft,
	Calendar,
	DollarSign,
	FileText,
	Save,
	Upload,
} from "lucide-react";
import MainNavbar from "@/components/main-navbar";
import Link from "next/link";

export default function CreateFundingRequestPage() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [stage, setStage] = useState("seed");
	const [amountRequested, setAmountRequested] = useState("");
	const [equityOffered, setEquityOffered] = useState(15);
	const [valuation, setValuation] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [creating, setCreating] = useState(false);
	const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

	const pitchDeckRef = useRef<HTMLInputElement>(null);
	const financialsRef = useRef<HTMLInputElement>(null);
	const marketAnalysisRef = useRef<HTMLInputElement>(null);

	const handleFileUpload = (fileType: string) => {
		switch (fileType) {
			case "pitchDeck":
				pitchDeckRef.current?.click();
				break;
			case "financials":
				financialsRef.current?.click();
				break;
			case "marketAnalysis":
				marketAnalysisRef.current?.click();
				break;
		}
	};

	const handleFileChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		fileType: string
	) => {
		const file = e.target.files?.[0];
		if (file) {
			// In a real app, you would upload the file to a server
			// For now, we'll just add the file name to our list
			setUploadedFiles([...uploadedFiles, `${fileType}: ${file.name}`]);
		}
	};

	const handleCreate = () => {
		setCreating(true);
		// Simulate API call
		setTimeout(() => {
			setCreating(false);
			// Redirect to deal rooms in a real app
			window.location.href = "/deal-rooms";
		}, 1000);
	};

	const calculateValuation = () => {
		if (amountRequested && equityOffered) {
			const amount = Number.parseFloat(
				amountRequested.replace(/[^0-9.]/g, "")
			);
			if (!isNaN(amount)) {
				const calculatedValuation = (
					amount /
					(equityOffered / 100)
				).toFixed(1);
				return `$${calculatedValuation}M`;
			}
		}
		return "";
	};

	// Update valuation when amount or equity changes
	const updateValuation = () => {
		setValuation(calculateValuation());
	};

	const isFormValid =
		title.trim() !== "" &&
		description.trim() !== "" &&
		amountRequested.trim() !== "" &&
		expiryDate.trim() !== "" &&
		uploadedFiles.length > 0;

	return (
		<div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
			<MainNavbar />

			<main className="flex-1 pt-16 p-4 md:p-6">
				<div className="container mx-auto max-w-3xl">
					<div className="mb-6 flex items-center">
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
						<h1 className="text-2xl font-bold">
							Create Funding Request
						</h1>
					</div>

					<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 mb-6">
						<CardHeader>
							<CardTitle>Funding Details</CardTitle>
							<CardDescription>
								Provide information about your funding request
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-2">
								<Label htmlFor="title">Request Title</Label>
								<Input
									id="title"
									placeholder="e.g., TechNova Series A Funding Round"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="description">Description</Label>
								<Textarea
									id="description"
									placeholder="Describe your funding request, including how you plan to use the funds and why investors should be interested..."
									rows={5}
									value={description}
									onChange={(e) =>
										setDescription(e.target.value)
									}
								/>
							</div>

							<div className="grid gap-4 md:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="stage">Funding Stage</Label>
									<Select
										value={stage}
										onValueChange={setStage}
									>
										<SelectTrigger id="stage">
											<SelectValue placeholder="Select stage" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="pre-seed">
												Pre-Seed
											</SelectItem>
											<SelectItem value="seed">
												Seed
											</SelectItem>
											<SelectItem value="series-a">
												Series A
											</SelectItem>
											<SelectItem value="series-b">
												Series B
											</SelectItem>
											<SelectItem value="series-c">
												Series C+
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="expiry">Expiry Date</Label>
									<div className="relative">
										<Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
										<Input
											id="expiry"
											type="date"
											className="pl-9"
											value={expiryDate}
											onChange={(e) =>
												setExpiryDate(e.target.value)
											}
										/>
									</div>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="amount">Amount Requested</Label>
								<div className="relative">
									<DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
									<Input
										id="amount"
										placeholder="e.g., $5M"
										className="pl-9"
										value={amountRequested}
										onChange={(e) => {
											setAmountRequested(e.target.value);
											setTimeout(updateValuation, 0);
										}}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<Label htmlFor="equity">
										Equity Offered: {equityOffered}%
									</Label>
								</div>
								<Slider
									id="equity"
									min={1}
									max={49}
									step={0.5}
									value={[equityOffered]}
									onValueChange={(value) => {
										setEquityOffered(value[0]);
										setTimeout(updateValuation, 0);
									}}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="valuation">
									Implied Valuation (Post-Money)
								</Label>
								<div className="relative">
									<DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
									<Input
										id="valuation"
										placeholder="Calculated based on amount and equity"
										className="pl-9"
										value={valuation}
										readOnly
									/>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 mb-6">
						<CardHeader>
							<CardTitle>Supporting Documents</CardTitle>
							<CardDescription>
								Upload documents to support your funding request
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<input
									type="file"
									className="hidden"
									ref={pitchDeckRef}
									accept=".pdf,.pptx,.ppt"
									onChange={(e) =>
										handleFileChange(e, "Pitch Deck")
									}
									title="Pitch Deck"
								/>
								<div className="flex items-center justify-between rounded-lg border border-dashed border-slate-300 p-4 dark:border-slate-700">
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
											<FileText className="h-5 w-5 text-slate-500" />
										</div>
										<div>
											<h4 className="font-medium">
												Pitch Deck
											</h4>
											<p className="text-sm text-slate-500 dark:text-slate-400">
												Upload your pitch deck (PDF or
												PowerPoint)
											</p>
										</div>
									</div>
									<Button
										variant="outline"
										onClick={() =>
											handleFileUpload("pitchDeck")
										}
									>
										<Upload className="mr-2 h-4 w-4" />
										Upload
									</Button>
								</div>

								<input
									type="file"
									className="hidden"
									ref={financialsRef}
									accept=".xlsx,.xls,.csv,.pdf"
									onChange={(e) =>
										handleFileChange(e, "Financials")
									}
									title="Financials"
								/>
								<div className="flex items-center justify-between rounded-lg border border-dashed border-slate-300 p-4 dark:border-slate-700">
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
											<FileText className="h-5 w-5 text-slate-500" />
										</div>
										<div>
											<h4 className="font-medium">
												Financial Projections
											</h4>
											<p className="text-sm text-slate-500 dark:text-slate-400">
												Upload your financial model
												(Excel or PDF)
											</p>
										</div>
									</div>
									<Button
										variant="outline"
										onClick={() =>
											handleFileUpload("financials")
										}
									>
										<Upload className="mr-2 h-4 w-4" />
										Upload
									</Button>
								</div>

								<input
									type="file"
									className="hidden"
									ref={marketAnalysisRef}
									accept=".pdf,.docx,.doc"
									onChange={(e) =>
										handleFileChange(e, "Market Analysis")
									}
									title="Market Analysis"
								/>
								<div className="flex items-center justify-between rounded-lg border border-dashed border-slate-300 p-4 dark:border-slate-700">
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
											<FileText className="h-5 w-5 text-slate-500" />
										</div>
										<div>
											<h4 className="font-medium">
												Market Analysis
											</h4>
											<p className="text-sm text-slate-500 dark:text-slate-400">
												Upload market analysis or
												additional documents (PDF or
												Word)
											</p>
										</div>
									</div>
									<Button
										variant="outline"
										onClick={() =>
											handleFileUpload("marketAnalysis")
										}
									>
										<Upload className="mr-2 h-4 w-4" />
										Upload
									</Button>
								</div>
							</div>

							{uploadedFiles.length > 0 && (
								<div className="rounded-lg border border-slate-200 dark:border-slate-700 p-4">
									<h4 className="font-medium mb-2">
										Uploaded Files
									</h4>
									<ul className="space-y-1">
										{uploadedFiles.map((file, index) => (
											<li
												key={index}
												className="text-sm text-slate-600 dark:text-slate-300"
											>
												• {file}
											</li>
										))}
									</ul>
								</div>
							)}
						</CardContent>
					</Card>

					<div className="flex justify-end gap-4">
						<Button variant="outline" asChild>
							<Link href="/deal-rooms">Cancel</Link>
						</Button>
						<Button
							onClick={handleCreate}
							disabled={!isFormValid || creating}
						>
							{creating
								? "Creating..."
								: "Create Funding Request"}
							{!creating && <Save className="ml-2 h-4 w-4" />}
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
