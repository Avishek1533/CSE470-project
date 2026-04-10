"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import MainNavbar from "@/components/main-navbar";
import { Mail, LogIn } from "lucide-react";

export default function EmailConfirmPage() {
	const [secondsLeft, setSecondsLeft] = useState(15);
	const router = useRouter();

	useEffect(() => {
		const interval = setInterval(() => {
			setSecondsLeft((prev) => prev - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (secondsLeft <= 0) {
			router.push("/auth/login");
		}
	}, [secondsLeft, router]);

	const openEmail = () => {
		window.open("https://mail.google.com", "_blank");
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-12 dark:from-slate-900 dark:to-slate-800 sm:px-6 lg:px-8">
			<MainNavbar />
			<div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=500&width=1500')] bg-cover bg-center opacity-5"></div>
			<Card className="w-full max-w-md backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">
						Confirm Your Email
					</CardTitle>
					<CardDescription className="text-center">
						Thank you for registering with VentureConnect!
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6 text-center">
					<p className="text-base text-slate-700 dark:text-slate-300">
						A verification email has been sent to your inbox. Please
						click the link in the email to activate your account.
					</p>
					<div className="flex flex-col items-center gap-4">
						<div className="relative flex items-center justify-center">
							<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary animate-pulse"></div>
							<div className="absolute text-2xl md:text-3xl font-bold text-primary">
								{secondsLeft}
							</div>
						</div>
						<div className="flex flex-col gap-4 w-full">
							<Button
								onClick={openEmail}
								className="w-full flex items-center justify-center gap-2"
							>
								<Mail className="h-5 w-5" />
								Open Email
							</Button>
							<Link href="/auth/login">
								<Button
									variant="outline"
									className="w-full flex items-center justify-center gap-2"
								>
									<LogIn className="h-5 w-5" />
									Go to Login
								</Button>
							</Link>
						</div>
					</div>
					<p className="text-sm text-slate-500 dark:text-slate-400">
						You will be automatically redirected to the login page
						in {secondsLeft} second{secondsLeft !== 1 ? "s" : ""}.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
