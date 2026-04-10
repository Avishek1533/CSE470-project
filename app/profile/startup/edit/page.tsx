"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building, Globe, Mail, MapPin, Save, Upload, Users } from "lucide-react"
import Link from "next/link"

export default function StartupProfileEdit() {
  const [saving, setSaving] = useState(false)

  const handleSave = () => {
    setSaving(true)
    // Simulate API call
    setTimeout(() => {
      setSaving(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <main className="flex-1 pt-16 p-4 md:p-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Edit Profile</h1>
              <p className="text-slate-600 dark:text-slate-400">Update your startup profile information</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link href="/profile/startup">Cancel</Link>
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
                {!saving && <Save className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </div>

          <Tabs defaultValue="basic" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Update your startup's basic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-slate-300 p-6 dark:border-slate-700">
                      <div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-white bg-white shadow-md dark:border-slate-800 dark:bg-slate-800">
                        <img
                          src="/placeholder.svg?height=128&width=128&text=TN"
                          alt="TechNova Logo"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <Button variant="outline" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload Logo
                      </Button>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Recommended: Square image, at least 300x300px
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="company-name" className="pl-9" defaultValue="TechNova" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="founded">Founded</Label>
                        <Input id="founded" type="number" defaultValue="2021" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="website" className="pl-9" defaultValue="https://technova.ai" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Contact Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="email" className="pl-9" defaultValue="contact@technova.ai" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="location" className="pl-9" defaultValue="San Francisco, CA" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="team-size">Team Size</Label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="team-size" className="pl-9" type="number" defaultValue="24" />
                        </div>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select defaultValue="ai">
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai">AI & Machine Learning</SelectItem>
                            <SelectItem value="saas">SaaS</SelectItem>
                            <SelectItem value="fintech">Fintech</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="stage">Funding Stage</Label>
                        <Select defaultValue="series-a">
                          <SelectTrigger>
                            <SelectValue placeholder="Select funding stage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pre-seed">Pre-seed</SelectItem>
                            <SelectItem value="seed">Seed</SelectItem>
                            <SelectItem value="series-a">Series A</SelectItem>
                            <SelectItem value="series-b">Series B</SelectItem>
                            <SelectItem value="series-c">Series C+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="tagline">Tagline</Label>
                        <Input id="tagline" defaultValue="AI-powered data analytics for enterprise" />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="about">About</Label>
                        <Textarea
                          id="about"
                          rows={5}
                          defaultValue="TechNova is revolutionizing how enterprises analyze and leverage their data through our AI-powered analytics platform. Our solution combines advanced machine learning algorithms with intuitive visualization tools to help businesses extract actionable insights from complex datasets."
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team">
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>Add your leadership team and key personnel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[0, 1, 2].map((index) => (
                      <div key={index} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center">
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 overflow-hidden rounded-full">
                              <img
                                src={`/placeholder.svg?height=64&width=64&text=TM${index + 1}`}
                                alt={`Team Member ${index + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <Input
                                className="mb-1 border-none bg-transparent p-0 text-lg font-semibold shadow-none focus-visible:ring-0"
                                defaultValue={
                                  index === 0 ? "Sarah Johnson" : index === 1 ? "David Chen" : "Maria Rodriguez"
                                }
                              />
                              <Select defaultValue={index === 0 ? "ceo" : index === 1 ? "cto" : "data-scientist"}>
                                <SelectTrigger className="border-none bg-transparent p-0 shadow-none focus:ring-0 [&>span]:text-primary [&>span]:p-0">
                                  <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ceo">CEO & Co-Founder</SelectItem>
                                  <SelectItem value="cto">CTO & Co-Founder</SelectItem>
                                  <SelectItem value="coo">COO</SelectItem>
                                  <SelectItem value="data-scientist">Chief Data Scientist</SelectItem>
                                  <SelectItem value="vp-eng">VP of Engineering</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex-1 md:ml-4">
                            <Textarea
                              className="min-h-[80px] resize-none"
                              placeholder="Team member bio"
                              defaultValue={
                                index === 0
                                  ? "Former Data Science Lead at Google with 10+ years of experience in AI and machine learning."
                                  : index === 1
                                    ? "PhD in Computer Science from MIT, specialized in distributed systems and data processing."
                                    : "Previously led the analytics team at Salesforce, expert in predictive modeling."
                              }
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="self-start text-slate-500 hover:text-destructive"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Button variant="outline" className="w-full gap-2">
                      <Users className="h-4 w-4" />
                      Add Team Member
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="product">
              <Card>
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                  <CardDescription>Showcase your product or service</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="product-name">Product Name</Label>
                      <Input id="product-name" defaultValue="TechNova Analytics Platform" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product-description">Product Description</Label>
                      <Textarea
                        id="product-description"
                        rows={4}
                        defaultValue="Our AI-powered analytics platform automates data analysis and presents insights in an intuitive interface, enabling faster and more informed business decisions."
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Problem</Label>
                        <Textarea
                          rows={3}
                          defaultValue="Enterprises struggle to extract meaningful insights from their vast amounts of data, leading to missed opportunities and inefficient decision-making processes."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Solution</Label>
                        <Textarea
                          rows={3}
                          defaultValue="Our AI-powered platform automates data analysis and presents insights in an intuitive interface, enabling faster and more informed business decisions."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Product Screenshots</Label>
                      <div className="grid gap-4 md:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
                          >
                            <img
                              src={`/placeholder.svg?height=200&width=300&text=Screenshot+${i}`}
                              alt={`Screenshot ${i}`}
                              className="h-full w-full object-cover"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm dark:bg-slate-900/80"
                            >
                              Replace
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Key Features</Label>
                      <div className="space-y-3">
                        {["Automated Data Analysis", "Interactive Dashboards", "Predictive Analytics"].map(
                          (feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Input defaultValue={feature} />
                              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-destructive">
                                Remove
                              </Button>
                            </div>
                          ),
                        )}
                        <Button variant="outline" size="sm">
                          Add Feature
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="financials">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Information</CardTitle>
                  <CardDescription>Add details about your funding and financial metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="funding-raised">Total Funding Raised</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-slate-400">$</span>
                          <Input id="funding-raised" className="pl-7" defaultValue="4500000" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="current-raise">Current Raise Target</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-slate-400">$</span>
                          <Input id="current-raise" className="pl-7" defaultValue="10000000" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="arr">Annual Recurring Revenue (ARR)</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-slate-400">$</span>
                          <Input id="arr" className="pl-7" defaultValue="2400000" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="growth">YoY Growth (%)</Label>
                        <div className="relative">
                          <Input id="growth" className="pr-7" defaultValue="187" />
                          <span className="absolute right-3 top-3 text-slate-400">%</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="customers">Number of Customers</Label>
                        <Input id="customers" type="number" defaultValue="52" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="burn-rate">Monthly Burn Rate</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-slate-400">$</span>
                          <Input id="burn-rate" className="pl-7" defaultValue="180000" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="runway">Runway (months)</Label>
                        <Input id="runway" type="number" defaultValue="18" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="valuation">Last Valuation</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-slate-400">$</span>
                          <Input id="valuation" className="pl-7" defaultValue="22000000" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Funding Rounds</Label>
                      <div className="space-y-3">
                        {[
                          {
                            round: "Seed",
                            amount: "$1.2M",
                            date: "May 2022",
                            investors: "Y Combinator, Angel Investors",
                          },
                          {
                            round: "Series A",
                            amount: "$4.5M",
                            date: "June 2023",
                            investors: "Accel Partners, Sequoia Capital",
                          },
                        ].map((round, i) => (
                          <div key={i} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                            <div className="grid gap-3 md:grid-cols-4">
                              <div>
                                <Label>Round</Label>
                                <Input defaultValue={round.round} />
                              </div>
                              <div>
                                <Label>Amount</Label>
                                <Input defaultValue={round.amount} />
                              </div>
                              <div>
                                <Label>Date</Label>
                                <Input defaultValue={round.date} />
                              </div>
                              <div>
                                <Label>Investors</Label>
                                <Input defaultValue={round.investors} />
                              </div>
                            </div>
                          </div>
                        ))}
                        <Button variant="outline" size="sm">
                          Add Funding Round
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pitch-deck">Pitch Deck</Label>
                      <div className="flex items-center gap-4 rounded-lg border border-dashed border-slate-300 p-4 dark:border-slate-700">
                        <div className="flex h-12 w-12 items-center justify-center rounded bg-slate-100 dark:bg-slate-800">
                          <Upload className="h-6 w-6 text-slate-500" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">Upload your pitch deck</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">PDF or PowerPoint, max 20MB</p>
                        </div>
                        <Button variant="outline">Upload</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline" asChild>
              <Link href="/profile/startup">Cancel</Link>
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
              {!saving && <Save className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

