"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Bell,
	ChevronDown,
	Home,
	Layers,
	LogOut,
	Menu,
	MessageSquare,
	Moon,
	SearchIcon,
	Settings,
	Sun,
	User,
	X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

interface NavItem {
	label: string;
	href: string;
	icon: React.ReactNode;
	active?: boolean;
	mobileOnly?: boolean;
}

export default function MainNavbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const { setTheme, theme } = useTheme();
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const { data: session, status } = useSession();

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target as Node)
			) {
				setMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Close mobile menu when route changes
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	// Define navigation items based on user type
	const getNavItems = (): NavItem[] => {
		const baseItems = [
			{ label: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
			{
				label: "Search",
				href: "/search",
				icon: <SearchIcon className="h-4 w-4" />,
			},
		];

		if (status !== "authenticated") return baseItems;

		const userSpecificItems = session?.user?.roles?.includes("startup")
			? [
					{
						label: "Dashboard",
						href: "/dashboard/startup",
						icon: <Layers className="h-4 w-4" />,
					},
					{
						label: "Profile",
						href: "/profile/startup",
						icon: <User className="h-4 w-4" />,
					},
					{
						label: "Messages",
						href: "/messages",
						icon: <MessageSquare className="h-4 w-4" />,
					},
					{
						label: "Deal Rooms",
						href: "/deal-rooms",
						icon: <Layers className="h-4 w-4" />,
					},
					{
						label: "Settings",
						href: "/settings",
						icon: <Settings className="h-4 w-4" />,
						mobileOnly: true,
					},
					{
						label: "Sign Out",
						href: "/auth/login",
						icon: <LogOut className="h-4 w-4" />,
						mobileOnly: true,
					},
			  ]
			: [
					{
						label: "Dashboard",
						href: "/dashboard/investor",
						icon: <Layers className="h-4 w-4" />,
					},
					{
						label: "Profile",
						href: "/profile/investor",
						icon: <User className="h-4 w-4" />,
					},
					{
						label: "Portfolio",
						href: "/portfolio",
						icon: <Layers className="h-4 w-4" />,
					},
					{
						label: "Messages",
						href: "/messages",
						icon: <MessageSquare className="h-4 w-4" />,
					},
					{
						label: "Deal Rooms",
						href: "/deal-rooms",
						icon: <Layers className="h-4 w-4" />,
					},
					{
						label: "Settings",
						href: "/settings",
						icon: <Settings className="h-4 w-4" />,
						mobileOnly: true,
					},
					{
						label: "Sign Out",
						href: "/auth/login",
						icon: <LogOut className="h-4 w-4" />,
						mobileOnly: true,
					},
			  ];

		return [...baseItems, ...userSpecificItems];
	};

	const navItems = getNavItems().map((item) => ({
		...item,
		active: pathname === item.href || pathname.startsWith(item.href + "/"),
	}));

	const desktopNavItems = navItems.filter((item) => !item.mobileOnly);
	const mobileNavItems = navItems;

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
				scrolled
					? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
					: "bg-white dark:bg-slate-950"
			)}
		>
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Link
							href="/"
							className="flex items-center gap-2 font-semibold transition-transform duration-300 hover:scale-105"
						>
							<motion.div
								initial={{ rotate: 0 }}
								animate={{ rotate: scrolled ? 12 : 0 }}
								transition={{ duration: 0.3 }}
								className="text-primary"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-5 w-5"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
								</svg>
							</motion.div>
							<motion.span
								initial={{ color: "inherit" }}
								animate={{
									color: scrolled
										? "var(--primary)"
										: "inherit",
								}}
								transition={{ duration: 0.3 }}
								className="text-lg font-bold hidden sm:inline-block"
							>
								VentureConnect
							</motion.span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex md:gap-1">
						{desktopNavItems.map((item, index) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-2",
									item.active
										? "text-primary bg-primary/5"
										: "text-slate-600 hover:text-primary hover:bg-slate-100 dark:text-slate-400 dark:hover:text-primary dark:hover:bg-slate-800/50"
								)}
								style={{
									transitionDelay: `${index * 50}ms`,
								}}
							>
								{item.icon}
								<span>{item.label}</span>
								{item.active && (
									<motion.span
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
										layoutId="navbar-indicator"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
									/>
								)}
							</Link>
						))}
					</nav>

					{/* Right side actions */}
					<div className="flex items-center gap-1 sm:gap-2">
						{status === "authenticated" && (
							<>
								<Button
									variant="ghost"
									size="icon"
									className="relative"
									asChild
								>
									<Link href="/notifications">
										<Bell className="h-5 w-5" />
										<motion.span
											initial={{ scale: 0.5, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white"
										>
											5
										</motion.span>
									</Link>
								</Button>
							</>
						)}

						<Button
							variant="ghost"
							size="icon"
							className="h-9 w-9"
							onClick={() =>
								setTheme(theme === "dark" ? "light" : "dark")
							}
							aria-label="Toggle dark mode"
						>
							{theme === "dark" ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
							<span className="sr-only">Toggle theme</span>
						</Button>

						{status === "authenticated" && session?.user?.roles ? (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										className="flex items-center gap-2 px-2 h-9"
									>
										<div className="overflow-hidden rounded-full border border-slate-200 dark:border-slate-700">
											<img
												src={
													session?.user?.image ||
													"/placeholder.svg?height=32&width=32"
												}
												alt="Avatar"
												className="h-7 w-7 rounded-full transition-transform duration-300 hover:scale-110"
											/>
										</div>
										<span className="hidden sm:inline-block text-sm font-medium">
											Account
										</span>
										<ChevronDown className="h-4 w-4 opacity-50" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align="end"
									className="w-56"
								>
									<DropdownMenuLabel>
										My Account
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem asChild>
										<Link
											href={`/profile/${session?.user?.roles[0]}`}
											className="flex items-center gap-2 cursor-pointer"
										>
											<User className="h-4 w-4" />
											<span>Profile</span>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link
											href="/settings"
											className="flex items-center gap-2 cursor-pointer"
										>
											<Settings className="h-4 w-4" />
											<span>Settings</span>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem asChild>
										<button
											onClick={() => signOut()}
											className="flex items-center gap-2 cursor-pointer"
										>
											<LogOut className="h-4 w-4" />
											<span>Sign Out</span>
										</button>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<div className="flex gap-2">
								<Button variant="outline" size="sm" asChild>
									<Link href="/auth/login">Sign In</Link>
								</Button>
								<Button size="sm" asChild>
									<Link href="/auth/register">Sign Up</Link>
								</Button>
							</div>
						)}

						{/* Mobile menu button */}
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						ref={mobileMenuRef}
						className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white dark:bg-slate-950 z-40 overflow-y-auto"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						<div className="container mx-auto px-4 py-4">
							<div className="space-y-1">
								{mobileNavItems.map((item, index) => (
									<motion.div
										key={item.href}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											delay: index * 0.05,
											duration: 0.2,
										}}
									>
										<Link
											href={item.href}
											className={cn(
												"flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium transition-all duration-200",
												item.active
													? "bg-primary/10 text-primary"
													: "text-slate-600 hover:bg-slate-100 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-primary"
											)}
										>
											{item.icon}
											<span>{item.label}</span>
										</Link>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
