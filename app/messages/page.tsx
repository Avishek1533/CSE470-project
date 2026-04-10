"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	ArrowLeft,
	Edit,
	File,
	Image,
	Info,
	MoreHorizontal,
	Paperclip,
	Search,
	Send,
	Smile,
	Star,
	Users,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MainNavbar from "@/components/main-navbar";

// Mock data for conversations
const conversations = [
	{
		id: 1,
		name: "Michael Chen",
		avatar: "/placeholder.svg?height=40&width=40&text=MC",
		role: "Partner, Horizon Ventures",
		lastMessage:
			"I was impressed by your pitch deck. Would love to schedule a call to discuss further.",
		time: "2h ago",
		unread: true,
	},
	{
		id: 2,
		name: "Sarah Johnson",
		avatar: "/placeholder.svg?height=40&width=40&text=SJ",
		role: "CEO, DataSync",
		lastMessage:
			"Thanks for the intro! Let's connect next week to explore potential synergies.",
		time: "5h ago",
		unread: false,
	},
	{
		id: 3,
		name: "David Kim",
		avatar: "/placeholder.svg?height=40&width=40&text=DK",
		role: "Partner, Alpha Capital",
		lastMessage:
			"We're finalizing the term sheet and will send it over by tomorrow.",
		time: "Yesterday",
		unread: false,
	},
	{
		id: 4,
		name: "Jennifer Williams",
		avatar: "/placeholder.svg?height=40&width=40&text=JW",
		role: "COO, QuantumHealth",
		lastMessage:
			"Looking forward to our partnership! Let's set up a kickoff meeting.",
		time: "2 days ago",
		unread: false,
	},
	{
		id: 5,
		name: "Robert Garcia",
		avatar: "/placeholder.svg?height=40&width=40&text=RG",
		role: "Investor Relations, Sequoia Capital",
		lastMessage:
			"I've shared your deck with our investment committee. They have a few questions.",
		time: "3 days ago",
		unread: false,
	},
];

// Mock data for messages in a conversation
const messages = [
	{
		id: 1,
		sender: "Michael Chen",
		avatar: "/placeholder.svg?height=40&width=40&text=MC",
		content:
			"Hi there! I came across your startup on the platform and was really impressed by what you're building.",
		time: "10:30 AM",
		isMe: false,
	},
	{
		id: 2,
		sender: "Me",
		content:
			"Thanks Michael! We're excited about our progress so far. We've been working on this for about 18 months now.",
		time: "10:32 AM",
		isMe: true,
	},
	{
		id: 3,
		sender: "Michael Chen",
		avatar: "/placeholder.svg?height=40&width=40&text=MC",
		content:
			"That's great to hear. I was particularly interested in your AI approach to data analytics. How are you differentiating from existing solutions?",
		time: "10:35 AM",
		isMe: false,
	},
	{
		id: 4,
		sender: "Me",
		content:
			"Our key differentiator is our proprietary algorithm that can analyze unstructured data with 85% higher accuracy than leading competitors. We're also focused specifically on enterprise use cases, which has allowed us to build features tailored to those needs.",
		time: "10:40 AM",
		isMe: true,
	},
	{
		id: 5,
		sender: "Michael Chen",
		avatar: "/placeholder.svg?height=40&width=40&text=MC",
		content:
			"That sounds compelling. Do you have a pitch deck you could share? I'd like to learn more about your team, traction, and funding needs.",
		time: "10:42 AM",
		isMe: false,
	},
	{
		id: 6,
		sender: "Me",
		content:
			"I've just uploaded our latest deck to the platform. You should be able to access it from our profile. It includes details on our team backgrounds, current traction (52 enterprise customers), and our Series A fundraising plans.",
		time: "10:45 AM",
		isMe: true,
	},
	{
		id: 7,
		sender: "Michael Chen",
		avatar: "/placeholder.svg?height=40&width=40&text=MC",
		content:
			"Perfect, I'll take a look. 52 enterprise customers is impressive at this stage. I was impressed by your pitch deck. Would love to schedule a call to discuss further. How does next Tuesday at 2pm PT work for you?",
		time: "10:50 AM",
		isMe: false,
	},
];

export default function MessagesPage() {
	const [activeConversation, setActiveConversation] = useState<number | null>(
		1
	);
	const [searchQuery, setSearchQuery] = useState("");
	const [messageText, setMessageText] = useState("");
	const [showMobileConversation, setShowMobileConversation] = useState(false);

	const filteredConversations = conversations.filter((convo) =>
		convo.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleSendMessage = () => {
		if (messageText.trim()) {
			// In a real app, this would send the message to the API
			console.log("Sending message:", messageText);
			setMessageText("");
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	const openConversation = (id: number) => {
		setActiveConversation(id);
		setShowMobileConversation(true);
	};

	return (
		<div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
			<MainNavbar />

			<main className="flex-1 pt-16">
				<div className="h-[calc(100vh-4rem)] flex flex-col md:flex-row">
					{/* Conversation List - Hidden on mobile when a conversation is open */}
					<div
						className={`w-full md:w-80 md:flex-shrink-0 border-r border-slate-200 dark:border-slate-700 ${
							showMobileConversation ? "hidden md:block" : "block"
						}`}
					>
						<div className="h-full flex flex-col">
							<div className="p-4 border-b border-slate-200 dark:border-slate-700">
								<div className="flex items-center justify-between mb-4">
									<h1 className="text-xl font-bold">
										Messages
									</h1>
									<Button variant="ghost" size="icon">
										<Edit className="h-5 w-5" />
									</Button>
								</div>
								<div className="relative">
									<Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
									<Input
										placeholder="Search messages..."
										className="pl-9"
										value={searchQuery}
										onChange={(e) =>
											setSearchQuery(e.target.value)
										}
									/>
								</div>
							</div>

							<Tabs defaultValue="all" className="flex-1">
								<div className="px-4 pt-2">
									<TabsList className="w-full">
										<TabsTrigger
											value="all"
											className="flex-1"
										>
											All
										</TabsTrigger>
										<TabsTrigger
											value="unread"
											className="flex-1"
										>
											Unread
										</TabsTrigger>
										<TabsTrigger
											value="starred"
											className="flex-1"
										>
											Starred
										</TabsTrigger>
									</TabsList>
								</div>

								<TabsContent
									value="all"
									className="flex-1 overflow-auto"
								>
									<div className="divide-y divide-slate-200 dark:divide-slate-700">
										{filteredConversations.map((convo) => (
											<div
												key={convo.id}
												className={`p-4 cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${
													activeConversation ===
													convo.id
														? "bg-slate-100 dark:bg-slate-800"
														: ""
												}`}
												onClick={() =>
													openConversation(convo.id)
												}
											>
												<div className="flex items-start gap-3">
													<Avatar className="h-10 w-10">
														<AvatarImage
															src={convo.avatar}
															alt={convo.name}
														/>
														<AvatarFallback>
															{convo.name
																.split(" ")
																.map(
																	(n) => n[0]
																)
																.join("")}
														</AvatarFallback>
													</Avatar>
													<div className="flex-1 min-w-0">
														<div className="flex items-center justify-between">
															<h3
																className={`font-medium truncate ${
																	convo.unread
																		? "font-semibold"
																		: ""
																}`}
															>
																{convo.name}
															</h3>
															<span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
																{convo.time}
															</span>
														</div>
														<p className="text-xs text-slate-500 dark:text-slate-400 truncate">
															{convo.role}
														</p>
														<p
															className={`text-sm truncate mt-1 ${
																convo.unread
																	? "font-medium text-slate-900 dark:text-slate-100"
																	: "text-slate-600 dark:text-slate-300"
															}`}
														>
															{convo.lastMessage}
														</p>
													</div>
												</div>
											</div>
										))}
									</div>
								</TabsContent>

								<TabsContent
									value="unread"
									className="flex-1 overflow-auto"
								>
									<div className="divide-y divide-slate-200 dark:divide-slate-700">
										{filteredConversations
											.filter((c) => c.unread)
											.map((convo) => (
												<div
													key={convo.id}
													className={`p-4 cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${
														activeConversation ===
														convo.id
															? "bg-slate-100 dark:bg-slate-800"
															: ""
													}`}
													onClick={() =>
														openConversation(
															convo.id
														)
													}
												>
													<div className="flex items-start gap-3">
														<Avatar className="h-10 w-10">
															<AvatarImage
																src={
																	convo.avatar
																}
																alt={convo.name}
															/>
															<AvatarFallback>
																{convo.name
																	.split(" ")
																	.map(
																		(n) =>
																			n[0]
																	)
																	.join("")}
															</AvatarFallback>
														</Avatar>
														<div className="flex-1 min-w-0">
															<div className="flex items-center justify-between">
																<h3 className="font-semibold truncate">
																	{convo.name}
																</h3>
																<span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
																	{convo.time}
																</span>
															</div>
															<p className="text-xs text-slate-500 dark:text-slate-400 truncate">
																{convo.role}
															</p>
															<p className="text-sm font-medium truncate mt-1 text-slate-900 dark:text-slate-100">
																{
																	convo.lastMessage
																}
															</p>
														</div>
													</div>
												</div>
											))}
									</div>
								</TabsContent>

								<TabsContent
									value="starred"
									className="flex-1 overflow-auto"
								>
									<div className="p-8 text-center">
										<Star className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
										<h3 className="font-medium text-slate-900 dark:text-slate-100 mb-1">
											No starred conversations
										</h3>
										<p className="text-sm text-slate-500 dark:text-slate-400">
											Star important conversations to find
											them quickly
										</p>
									</div>
								</TabsContent>
							</Tabs>
						</div>
					</div>

					{/* Conversation Detail - Shown on mobile only when a conversation is open */}
					<div
						className={`flex-1 flex flex-col ${
							!showMobileConversation && !activeConversation
								? "hidden md:flex"
								: "flex"
						}`}
					>
						{activeConversation ? (
							<>
								{/* Conversation Header */}
								<div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
									<div className="flex items-center gap-3">
										<Button
											variant="ghost"
											size="icon"
											className="md:hidden"
											onClick={() =>
												setShowMobileConversation(false)
											}
										>
											<ArrowLeft className="h-5 w-5" />
										</Button>
										<Avatar className="h-10 w-10">
											<AvatarImage
												src={
													conversations.find(
														(c) =>
															c.id ===
															activeConversation
													)?.avatar
												}
												alt={
													conversations.find(
														(c) =>
															c.id ===
															activeConversation
													)?.name
												}
											/>
											<AvatarFallback>
												{conversations
													.find(
														(c) =>
															c.id ===
															activeConversation
													)
													?.name.split(" ")
													.map((n) => n[0])
													.join("")}
											</AvatarFallback>
										</Avatar>
										<div>
											<h2 className="font-semibold">
												{
													conversations.find(
														(c) =>
															c.id ===
															activeConversation
													)?.name
												}
											</h2>
											<p className="text-xs text-slate-500 dark:text-slate-400">
												{
													conversations.find(
														(c) =>
															c.id ===
															activeConversation
													)?.role
												}
											</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<Button variant="ghost" size="icon">
											<Star className="h-5 w-5" />
										</Button>
										<Button variant="ghost" size="icon">
											<Info className="h-5 w-5" />
										</Button>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
												>
													<MoreHorizontal className="h-5 w-5" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuItem>
													View profile
												</DropdownMenuItem>
												<DropdownMenuItem>
													Create deal room
												</DropdownMenuItem>
												<DropdownMenuItem>
													Mark as unread
												</DropdownMenuItem>
												<DropdownMenuItem className="text-destructive">
													Block contact
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</div>
								</div>

								{/* Messages */}
								<div className="flex-1 overflow-auto p-4 space-y-4">
									{messages.map((message) => (
										<div
											key={message.id}
											className={`flex ${
												message.isMe
													? "justify-end"
													: "justify-start"
											}`}
										>
											<div
												className={`flex max-w-[80%] ${
													message.isMe
														? "flex-row-reverse"
														: "flex-row"
												}`}
											>
												{!message.isMe && (
													<Avatar className="h-8 w-8 mr-2 mt-1">
														<AvatarImage
															src={message.avatar}
															alt={message.sender}
														/>
														<AvatarFallback>
															{message.sender
																.split(" ")
																.map(
																	(n) => n[0]
																)
																.join("")}
														</AvatarFallback>
													</Avatar>
												)}
												<div>
													<div
														className={`rounded-lg p-3 ${
															message.isMe
																? "bg-primary text-primary-foreground"
																: "bg-slate-100 dark:bg-slate-800"
														}`}
													>
														<p className="text-sm">
															{message.content}
														</p>
													</div>
													<p
														className={`text-xs mt-1 text-slate-500 dark:text-slate-400 ${
															message.isMe
																? "text-right"
																: "text-left"
														}`}
													>
														{message.time}
													</p>
												</div>
											</div>
										</div>
									))}
								</div>

								{/* Message Input */}
								<div className="p-4 border-t border-slate-200 dark:border-slate-700">
									<div className="flex items-end gap-2">
										<div className="flex-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 overflow-hidden">
											<div className="flex items-center px-3 py-2 border-b border-slate-200 dark:border-slate-700">
												<Button
													variant="ghost"
													size="sm"
													className="h-8 w-8 p-0 text-slate-500"
												>
													<Paperclip className="h-5 w-5" />
												</Button>
												<Button
													variant="ghost"
													size="sm"
													className="h-8 w-8 p-0 text-slate-500"
												>
													<Image className="h-5 w-5" />
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
											<textarea
												className="w-full px-3 py-2 focus:outline-none bg-transparent resize-none"
												placeholder="Type a message..."
												rows={3}
												value={messageText}
												onChange={(e) =>
													setMessageText(
														e.target.value
													)
												}
												onKeyDown={handleKeyDown}
											/>
										</div>
										<Button
											className="h-10 w-10 rounded-full p-0 flex-shrink-0"
											onClick={handleSendMessage}
											disabled={!messageText.trim()}
										>
											<Send className="h-5 w-5" />
										</Button>
									</div>
								</div>
							</>
						) : (
							<div className="flex-1 flex flex-col items-center justify-center p-8">
								<div className="max-w-md text-center">
									<Users className="mx-auto h-16 w-16 text-slate-300 dark:text-slate-600 mb-4" />
									<h2 className="text-2xl font-bold mb-2">
										Your Messages
									</h2>
									<p className="text-slate-500 dark:text-slate-400 mb-6">
										Connect with startups and investors
										through private messages. Select a
										conversation to get started.
									</p>
									<Button>
										<Edit className="mr-2 h-4 w-4" />
										New Message
									</Button>
								</div>
							</div>
						)}
					</div>
				</div>
			</main>
		</div>
	);
}
