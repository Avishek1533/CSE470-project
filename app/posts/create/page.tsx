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
import {
	ArrowLeft,
	File,
	ImageIcon,
	Link2,
	Save,
	Smile,
	X,
} from "lucide-react";
import MainNavbar from "@/components/main-navbar";
import Link from "next/link";

export default function CreatePostPage() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [visibility, setVisibility] = useState("public");
	const [publishing, setPublishing] = useState(false);
	const [image, setImage] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handlePublish = () => {
		setPublishing(true);
		// Simulate API call
		setTimeout(() => {
			setPublishing(false);
			// Redirect to feed in a real app
			window.location.href = "/feed";
		}, 1000);
	};

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			// In a real app, you would upload the file to a server
			// For now, we'll just create a local URL
			const imageUrl = URL.createObjectURL(file);
			setImage(imageUrl);
		}
	};

	const removeImage = () => {
		setImage(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const isFormValid = title.trim() !== "" && content.trim() !== "";

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
							<Link href="/feed">
								<ArrowLeft className="h-4 w-4 mr-1" />
								Back
							</Link>
						</Button>
						<h1 className="text-2xl font-bold">Create Post</h1>
					</div>

					<Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
						<CardHeader>
							<CardTitle>Share an update</CardTitle>
							<CardDescription>
								Share news, announcements, or insights with your
								network
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-2">
								<Input
									placeholder="Post title"
									className="text-lg font-medium"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>

							<div className="space-y-2">
								<div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
									<div className="flex items-center px-3 py-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
										<input
											type="file"
											accept="image/*"
											className="hidden"
											ref={fileInputRef}
											onChange={handleImageUpload}
											title="file input"
										/>
										<Button
											variant="ghost"
											size="sm"
											className="h-8 w-8 p-0 text-slate-500"
											onClick={() =>
												fileInputRef.current?.click()
											}
										>
											<ImageIcon className="h-5 w-5" />
										</Button>
										<Button
											variant="ghost"
											size="sm"
											className="h-8 w-8 p-0 text-slate-500"
										>
											<Link2 className="h-5 w-5" />
										</Button>
										<Button
											variant="ghost"
											size="sm"
											className="h-8 w-8 p-0 text-slate-500"
										>
											<File className="h-5 w-5" />
										</Button>
										<Button
											variant="ghost"
											size="sm"
											className="h-8 w-8 p-0 text-slate-500 ml-auto"
										>
											<Smile className="h-5 w-5" />
										</Button>
									</div>
									<Textarea
										placeholder="What would you like to share?"
										className="border-0 focus-visible:ring-0 resize-none"
										rows={10}
										value={content}
										onChange={(e) =>
											setContent(e.target.value)
										}
									/>

									{image && (
										<div className="relative p-4 border-t border-slate-200 dark:border-slate-700">
											<div className="relative rounded-lg overflow-hidden">
												<img
													src={
														image ||
														"/placeholder.svg"
													}
													alt="Post image"
													className="w-full h-auto max-h-[300px] object-contain"
												/>
												<Button
													variant="destructive"
													size="icon"
													className="absolute top-2 right-2 h-8 w-8 rounded-full"
													onClick={removeImage}
												>
													<X className="h-4 w-4" />
												</Button>
											</div>
										</div>
									)}
								</div>
							</div>

							<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
								<div className="w-full sm:w-auto">
									<Select
										value={visibility}
										onValueChange={setVisibility}
									>
										<SelectTrigger className="w-full sm:w-[200px]">
											<SelectValue placeholder="Visibility" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="public">
												Public - Anyone on the platform
											</SelectItem>
											<SelectItem value="connections">
												Connections only
											</SelectItem>
											<SelectItem value="private">
												Private - Only me
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="flex gap-2 w-full sm:w-auto">
									<Button
										variant="outline"
										className="flex-1 sm:flex-initial"
										asChild
									>
										<Link href="/feed">Cancel</Link>
									</Button>
									<Button
										className="flex-1 sm:flex-initial"
										onClick={handlePublish}
										disabled={!isFormValid || publishing}
									>
										{publishing
											? "Publishing..."
											: "Publish"}
										{!publishing && (
											<Save className="ml-2 h-4 w-4" />
										)}
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
