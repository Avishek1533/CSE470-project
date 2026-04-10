import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import SessionProvider from "@/components/SessionProvider";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata = {
	title: "VentureConnect",
	description: "Connect innovative startups with the right investors",
	generator: "v0.dev",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={montserrat.variable}
		>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
			</head>
			<body>
				<SessionProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem={false}
					>
						{children}
						<Toaster />
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
