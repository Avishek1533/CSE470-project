"use client";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatisticCard from "@/components/statistic-card";
import TestimonialCarousel from "@/components/testimonial-carousel";
import FeatureCard from "@/components/feature-card";
import MainNavbar from "@/components/main-navbar";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<MainNavbar />

			{/* Hero Section */}
			<section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-24 text-center dark:from-slate-900 dark:to-slate-800 md:px-6 lg:px-8 lg:py-32 mt-16">
				<div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=500&width=1500')] bg-cover bg-center opacity-5"></div>
				<div className="mx-auto max-w-4xl">
					<h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
						Connecting{" "}
						<span className="text-primary">Startups</span> with{" "}
						<span className="text-primary">Investors</span>
					</h1>
					<p className="mb-10 text-xl text-slate-600 dark:text-slate-300">
						Our platform helps innovative startups find the right
						investors and helps VCs discover their next unicorn
						investment opportunity.
					</p>
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button size="lg" className="px-8">
							Join as Startup
						</Button>
						<Button size="lg" variant="outline" className="px-8">
							Join as Investor
						</Button>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-slate-950 dark:to-transparent"></div>
			</section>

			{/* Statistics Section */}
			<section className="bg-white px-4 py-16 dark:bg-slate-950 md:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
						Platform Metrics
					</h2>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<StatisticCard
							icon={<Users className="h-8 w-8 text-primary" />}
							value="2,500+"
							label="Startups"
						/>
						<StatisticCard
							icon={
								<BarChart3 className="h-8 w-8 text-primary" />
							}
							value="850+"
							label="Investors"
						/>
						<StatisticCard
							icon={<Globe className="h-8 w-8 text-primary" />}
							value="$1.2B+"
							label="Funding Raised"
						/>
						<StatisticCard
							icon={
								<ArrowRight className="h-8 w-8 text-primary" />
							}
							value="450+"
							label="Successful Matches"
						/>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-slate-50 px-4 py-16 dark:bg-slate-900 md:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
						Key Features
					</h2>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<FeatureCard
							title="Smart Matching"
							description="Our AI-powered algorithm connects startups with the most relevant investors based on industry, stage, and investment criteria."
							icon="Zap"
						/>
						<FeatureCard
							title="Secure Deal Rooms"
							description="Negotiate terms, share documents, and close deals in a secure, private environment designed for confidential discussions."
							icon="Shield"
						/>
						<FeatureCard
							title="Comprehensive Profiles"
							description="Create detailed profiles that showcase your startup's strengths or highlight your investment portfolio and preferences."
							icon="UserCircle"
						/>
						<FeatureCard
							title="Real-time Messaging"
							description="Communicate directly with potential partners through our integrated messaging system with attachment support."
							icon="MessageSquare"
						/>
						<FeatureCard
							title="Analytics Dashboard"
							description="Track profile views, connection statistics, and engagement metrics to optimize your presence on the platform."
							icon="LineChart"
						/>
						<FeatureCard
							title="Pitch Deck Management"
							description="Upload, manage, and share your pitch decks with version control and viewer analytics."
							icon="FilePresentation"
						/>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-white px-4 py-16 dark:bg-slate-950 md:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
						Success Stories
					</h2>
					<TestimonialCarousel />
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative bg-primary px-4 py-16 text-white md:px-6 lg:px-8">
				<div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=500&width=1500')] bg-cover bg-center opacity-10"></div>
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
						Ready to find your perfect match?
					</h2>
					<p className="mb-8 text-lg text-primary-foreground/90">
						Join thousands of startups and investors already using
						our platform to make meaningful connections.
					</p>
					<Button size="lg" variant="secondary" className="px-8">
						Get Started Now
					</Button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 px-4 py-12 text-slate-300 md:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div>
							<h3 className="mb-4 text-lg font-semibold text-white">
								Platform
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										How it Works
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Pricing
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										FAQ
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Success Stories
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 text-lg font-semibold text-white">
								For Startups
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Find Investors
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Pitch Deck Tips
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Fundraising Guide
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Startup Resources
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 text-lg font-semibold text-white">
								For Investors
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Discover Startups
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Investment Strategies
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Due Diligence Tools
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Investor Resources
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 text-lg font-semibold text-white">
								Company
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-primary"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-12 border-t border-slate-800 pt-8 text-center">
						<p>
							&copy; {new Date().getFullYear()} Startup-VC
							Matching Platform. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
