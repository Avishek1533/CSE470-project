"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MainNavbar from "@/components/main-navbar";
import { ClipLoader } from "react-spinners";
import { LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function VerifyEmailPage() {
	const { id } = useParams();
	const router = useRouter();
	const { toast } = useToast();

	const [status, setStatus] = useState("verifying");
	const [message, setMessage] = useState("");
	const [countdown, setCountdown] = useState(5);

	useEffect(() => {
		if (id) {
			fetch(`/api/auth/verify-email/${id}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.message) {
						setStatus("verified");
						setMessage(data.message);
					} else if (data.error) {
						setStatus("error");
						setMessage(data.error);
						toast({
							title: "Verification Error",
							description: data.error,
							variant: "destructive",
						});
					}
				})
				.catch((error) => {
					console.error("Verification error:", error);
					setStatus("error");
					setMessage(
						"An unexpected error occurred during verification."
					);
					toast({
						title: "Verification Error",
						description: "An unexpected error occurred.",
						variant: "destructive",
					});
				});
		}
	}, [id, toast]);

	useEffect(() => {
		if (status === "verified") {
			const interval = setInterval(() => {
				setCountdown((prev) => prev - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [status]);

	useEffect(() => {
		if (status === "verified" && countdown <= 0) {
			router.push("/auth/login");
		}
	}, [status, countdown, router]);

	const handleGoToLogin = () => {
		router.push("/auth/login");
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-12 dark:from-slate-900 dark:to-slate-800 sm:px-6 lg:px-8">
			<MainNavbar />
			<div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=500&width=1500')] bg-cover bg-center opacity-5"></div>
			<Card className="w-full max-w-md backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
				<CardHeader className="space-y-1">
					{status === "verified" ? (
						<CardTitle className="text-2xl font-bold text-center text-green-600">
							Email Verified!
						</CardTitle>
					) : status === "error" ? (
						<CardTitle className="text-2xl font-bold text-center text-red-600">
							Verification Failed
						</CardTitle>
					) : (
						<CardTitle className="text-2xl font-bold text-center">
							Verifying Your Email...
						</CardTitle>
					)}
				</CardHeader>
				<CardContent className="space-y-6 text-center">
					{status === "verifying" && (
						<div className="flex justify-center items-center">
							<ClipLoader size={40} color="#00a8e6" />
						</div>
					)}
					{status === "verified" && (
						<div className="flex flex-col items-center gap-4">
							<div className="relative flex items-center justify-center">
								<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary animate-pulse"></div>
								<div className="absolute text-2xl md:text-3xl font-bold text-primary">
									{countdown}
								</div>
							</div>
							<p className="text-base text-slate-700 dark:text-slate-300">
								Your email is verified. Redirecting to the login
								page in {countdown} second
								{countdown !== 1 ? "s" : ""}.
							</p>
							<Button
								onClick={handleGoToLogin}
								className="w-full flex items-center justify-center gap-2"
							>
								<LogIn className="h-5 w-5" />
								Go to Login
							</Button>
						</div>
					)}
					{status === "error" && (
						<div className="flex flex-col items-center gap-4">
							<p className="text-base text-red-600">{message}</p>
							<p className="text-sm text-slate-500 dark:text-slate-400">
								Please try verifying again or contact support.
							</p>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
