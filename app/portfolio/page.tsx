"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart3, ChevronRight, Filter, LineChart, PieChart, Plus, Search, TrendingUp } from "lucide-react"
import MainNavbar from "@/components/main-navbar"
import Link from "next/link"

// Mock data for portfolio companies
const portfolioCompanies = [
  {
    id: "1",
    name: "TechNova",
    logo: "/placeholder.svg?height=80&width=80&text=TN",
    industry: "AI & Data Analytics",
    stage: "Series A",
    investmentDate: "June 2023",
    investmentAmount: "$2.5M",
    equity: "15%",
    valuation: "$22M",
    performance: "growing",
    metrics: {
      arr: "$2.4M",
      growth: "187%",
      runway: "18 months",
    },
  },
  {
    id: "2",
    name: "DataSync",
    logo: "/placeholder.svg?height=80&width=80&text=DS",
    industry: "SaaS",
    stage: "Seed",
    investmentDate: "March 2023",
    investmentAmount: "$1.2M",
    equity: "12%",
    valuation: "$10M",
    performance: "growing",
    metrics: {
      arr: "$800K",
      growth: "210%",
      runway: "14 months",
    },
  },
  {
    id: "3",
    name: "QuantumHealth",
    logo: "/placeholder.svg?height=80&width=80&text=QH",
    industry: "Healthcare",
    stage: "Seed",
    investmentDate: "January 2023",
    investmentAmount: "$800K",
    equity: "10%",
    valuation: "$8M",
    performance: "stable",
    metrics: {
      arr: "$500K",
      growth: "150%",
      runway: "12 months",
    },
  },
  {
    id: "4",
    name: "PayFlow",
    logo: "/placeholder.svg?height=80&width=80&text=PF",
    industry: "Fintech",
    stage: "Series B",
    investmentDate: "November 2022",
    investmentAmount: "$4M",
    equity: "8%",
    valuation: "$50M",
    performance: "excelling",
    metrics: {
      arr: "$5.2M",
      growth: "220%",
      runway: "24 months",
    },
  },
  {
    id: "5",
    name: "EcoTech",
    logo: "/placeholder.svg?height=80&width=80&text=ET",
    industry: "CleanTech",
    stage: "Series A",
    investmentDate: "August 2022",
    investmentAmount: "$3M",
    equity: "12%",
    valuation: "$25M",
    performance: "growing",
    metrics: {
      arr: "$1.8M",
      growth: "160%",
      runway: "16 months",
    },
  },
  {
    id: "6",
    name: "CyberShield",
    logo: "/placeholder.svg?height=80&width=80&text=CS",
    industry: "Cybersecurity",
    stage: "Seed",
    investmentDate: "May 2022",
    investmentAmount: "$1.5M",
    equity: "15%",
    valuation: "$10M",
    performance: "struggling",
    metrics: {
      arr: "$600K",
      growth: "80%",
      runway: "8 months",
    },
  },
]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter companies based on active tab and search query
  const filteredCompanies = portfolioCompanies.filter((company) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "growing" && company.performance === "growing") ||
      (activeTab === "excelling" && company.performance === "excelling") ||
      (activeTab === "struggling" && company.performance === "struggling") ||
      (activeTab === "stable" && company.performance === "stable")

    const matchesSearch =
      searchQuery === "" ||
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesTab && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <MainNavbar/>

      <main className="flex-1 pt-16 p-4 md:p-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
              <p className="text-slate-600 dark:text-slate-400">Manage and track your investments</p>
            </div>
            <Button asChild>
              <Link href="/portfolio/add">
                <Plus className="mr-2 h-4 w-4" />
                Add Investment
              </Link>
            </Button>
          </div>

          {/* Portfolio Overview */}
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Investments</CardTitle>
                <TrendingUp className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$13M</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Across 6 companies</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                <BarChart3 className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$42.5M</div>
                <p className="text-xs text-green-500 dark:text-green-400">+32% from initial investment</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Average MOIC</CardTitle>
                <LineChart className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2x</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Unrealized</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Portfolio Distribution</CardTitle>
                <PieChart className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Industries represented</p>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Companies */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="excelling">Excelling</TabsTrigger>
                <TabsTrigger value="growing">Growing</TabsTrigger>
                <TabsTrigger value="stable">Stable</TabsTrigger>
                <TabsTrigger value="struggling">Struggling</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search companies..."
                  className="pl-9 w-full sm:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <Link key={company.id} href={`/portfolio/${company.id}`}>
                  <Card className="h-full overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-16 w-16 overflow-hidden rounded-lg">
                          <img
                            src={company.logo || "/placeholder.svg"}
                            alt={company.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">{company.name}</h2>
                          <div className="flex items-center gap-2">
                            <Badge>{company.stage}</Badge>
                            <span className="text-sm text-slate-500 dark:text-slate-400">{company.industry}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-slate-500 dark:text-slate-400">Investment</p>
                            <p className="font-medium">{company.investmentAmount}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 dark:text-slate-400">Equity</p>
                            <p className="font-medium">{company.equity}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 dark:text-slate-400">Valuation</p>
                            <p className="font-medium">{company.valuation}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 dark:text-slate-400">Invested</p>
                            <p className="font-medium">{company.investmentDate}</p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div>
                              <p className="text-slate-500 dark:text-slate-400">ARR</p>
                              <p className="font-medium">{company.metrics.arr}</p>
                            </div>
                            <div>
                              <p className="text-slate-500 dark:text-slate-400">Growth</p>
                              <p className="font-medium">{company.metrics.growth}</p>
                            </div>
                            <div>
                              <p className="text-slate-500 dark:text-slate-400">Runway</p>
                              <p className="font-medium">{company.metrics.runway}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
                          <Badge
                            variant="outline"
                            className={`
                              ${company.performance === "excelling" ? "border-green-500 text-green-500" : ""}
                              ${company.performance === "growing" ? "border-blue-500 text-blue-500" : ""}
                              ${company.performance === "stable" ? "border-yellow-500 text-yellow-500" : ""}
                              ${company.performance === "struggling" ? "border-red-500 text-red-500" : ""}
                            `}
                          >
                            {company.performance.charAt(0).toUpperCase() + company.performance.slice(1)}
                          </Badge>
                          <Button variant="ghost" size="sm" className="gap-1">
                            Details <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full">
                <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-center">No companies found</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-slate-500 dark:text-slate-400">
                      {searchQuery
                        ? "No companies match your search criteria. Try a different search term."
                        : "You don't have any portfolio companies yet."}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

