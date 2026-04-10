"use client";

import MainNavbar from "@/components/main-navbar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";

const UnauthorizedPage = () => {
	const router = useRouter();

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-12 dark:from-slate-900 dark:to-slate-800 sm:px-6 lg:px-8">
            <MainNavbar/>
			<div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=500&width=1500')] bg-cover bg-center opacity-5"></div>
			<Card className="w-full max-w-md backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
				<CardHeader className="space-y-1">
					<CardTitle className="text-3xl font-semibold text-center text-primary dark:text-white">
						Unauthorized Access
					</CardTitle>
					<CardDescription className="text-center text-lg text-slate-600 dark:text-slate-400">
						You do not have permission to view this page or data.
						Please contact the administrator if you believe this is
						an error.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex justify-center flex-col items-center space-y-4">
					<Lock className="h-16 w-16 text-primary dark:text-white" />
					<Button
						variant="outline"
						className="w-full max-w-xs"
						onClick={() => router.push("/")}
					>
						Go Back to Home
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default UnauthorizedPage;
