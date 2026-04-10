"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Building2,
	EyeIcon,
	EyeOffIcon,
	LockKeyhole,
	Mail,
	User,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ClipLoader } from "react-spinners";
import MainNavbar from "@/components/main-navbar";

export default function RegisterPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [userType, setUserType] = useState("startup");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		companyName: "",
	});
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					password: formData.password,
					companyName: formData.companyName,
					roles: [userType],
				}),
			});

			const data = await res.json();

			if (!res.ok) {
				toast({
					title: "Signup Error",
					description: data.error || "Failed to create account.",
					variant: "destructive",
				});
			} else {
				toast({
					title: "Signup Successful",
					description:
						data.message || "Account created successfully.",
				});
				router.push("/auth/email-confirm");
			}
		} catch (error) {
			console.error("Signup error:", error);
			toast({
				title: "Signup Error",
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
						Create an account
					</CardTitle>
					<CardDescription className="text-center">
						Join our platform to connect with startups and investors
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label>I am a</Label>
							<RadioGroup
								value={userType}
								onValueChange={setUserType}
								className="grid grid-cols-2 gap-4"
							>
								<div>
									<RadioGroupItem
										value="startup"
										id="startup"
										className="peer sr-only"
									/>
									<Label
										htmlFor="startup"
										className="flex cursor-pointer items-center justify-center rounded-md border border-slate-200 bg-white p-4 hover:bg-slate-100 hover:text-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
									>
										<User className="mr-2 h-5 w-5" />
										Startup
									</Label>
								</div>
								<div>
									<RadioGroupItem
										value="investor"
										id="investor"
										className="peer sr-only"
									/>
									<Label
										htmlFor="investor"
										className="flex cursor-pointer items-center justify-center rounded-md border border-slate-200 bg-white p-4 hover:bg-slate-100 hover:text-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
									>
										<Building2 className="mr-2 h-5 w-5" />
										Investor
									</Label>
								</div>
							</RadioGroup>
						</div>
						<div className="space-y-2">
							<Label htmlFor="name">Full Name</Label>
							<div className="relative">
								<User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
								<Input
									id="name"
									name="name"
									placeholder="John Doe"
									className="pl-10"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="companyName">
								{userType === "startup"
									? "Startup Name"
									: "Firm Name"}
							</Label>
							<div className="relative">
								<Building2 className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
								<Input
									id="companyName"
									name="companyName"
									placeholder={
										userType === "startup"
											? "My Startup"
											: "VC Firm"
									}
									className="pl-10"
									value={formData.companyName}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<div className="relative">
								<Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="name@example.com"
									className="pl-10"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<div className="relative">
								<LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
								<Input
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
									className="pl-10 pr-10"
									value={formData.password}
									onChange={handleChange}
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
								Create account
							</Button>
						)}
					</form>
					<div className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link
							href="/auth/login"
							className="font-medium text-primary hover:underline"
						>
							Sign in
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
