"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { EyeIcon, EyeOffIcon, LockKeyhole, Mail } from "lucide-react";
import { ClipLoader } from "react-spinners";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import MainNavbar from "@/components/main-navbar";

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await signIn("credentials", {
				redirect: false,
				email,
				password,
			});
			if (res?.error) {
				if (res.error.includes("Email not verified")) {
					toast({
						title: "Email not verified",
						description:
							"A verification email has been sent. Please verify your email before signing in.",
						variant: "destructive",
					});
					router.push("/auth/email-confirm");
				} else {
					toast({
						title: "Login Error",
						description: res.error || "Failed to log in.",
						variant: "destructive",
					});
				}
			} else {
				toast({
					title: "Login Successful",
					description: "Welcome back!",
				});
				router.push("/");
			}
		} catch (error) {
			console.error("Login error:", error);
			toast({
				title: "Login Error",
				description: "Something went wrong. Please try again later.",
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-12 dark:from-slate-900 dark:to-slate-800 sm:px-6 lg:px-8">
			<MainNavbar />
			<div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=500&width=1500')] bg-cover bg-center opacity-5"></div>
			<Card className="w-full max-w-md backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">
						Welcome back
					</CardTitle>
					<CardDescription className="text-center">
						Enter your credentials to access your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<div className="relative">
								<Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
								<Input
									id="email"
									type="email"
									placeholder="name@example.com"
									className="pl-10"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="password">Password</Label>
								<Link
									href="/auth/forgot-password"
									className="text-sm font-medium text-primary hover:underline"
								>
									Forgot password?
								</Link>
							</div>
							<div className="relative">
								<LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
								<Input
									id="password"
									type={showPassword ? "text" : "password"}
									className="pl-10 pr-10"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									required
								/>
								<Button
									type="button"
									variant="ghost"
									size="sm"
									className="absolute right-1 top-1 h-8 w-8 rounded-full p-0"
									onClick={() =>
										setShowPassword(!showPassword)
									}
								>
									{showPassword ? (
										<EyeOffIcon className="h-5 w-5 text-slate-400" />
									) : (
										<EyeIcon className="h-5 w-5 text-slate-400" />
									)}
									<span className="sr-only">
										{showPassword
											? "Hide password"
											: "Show password"}
									</span>
								</Button>
							</div>
						</div>
						{loading ? (
							<div className="flex justify-center items-center">
								<ClipLoader size={30} color="#4caf50" />
							</div>
						) : (
							<Button type="submit" className="w-full">
								Sign in
							</Button>
						)}
					</form>
					<div className="mt-4 text-center text-sm">
						Don&apos;t have an account?{" "}
						<Link
							href="/auth/register"
							className="font-medium text-primary hover:underline"
						>
							Sign up
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
