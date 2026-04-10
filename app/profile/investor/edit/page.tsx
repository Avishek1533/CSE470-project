"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building, Globe, Mail, MapPin, Save, Upload, Users, Plus } from "lucide-react"
import Link from "next/link"

export default function InvestorProfileEdit() {
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
              <p className="text-slate-600 dark:text-slate-400">Update your investor profile information</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link href="/profile/investor">Cancel</Link>
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
              <TabsTrigger value="thesis">Investment Thesis</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Update your firm's basic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-slate-300 p-6 dark:border-slate-700">
                      <div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-white bg-white shadow-md dark:border-slate-800 dark:bg-slate-800">
                        <img
                          src="/placeholder.svg?height=128&width=128&text=HV"
                          alt="Horizon Ventures Logo"
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
                        <Label htmlFor="firm-name">Firm Name</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="firm-name" className="pl-9" defaultValue="Horizon Ventures" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="founded">Founded</Label>
                        <Input id="founded" type="number" defaultValue="2015" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="website" className="pl-9" defaultValue="https://horizonvc.com" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Contact Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="email" className="pl-9" defaultValue="info@horizonvc.com" />
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
                          <Input id="team-size" className="pl-9" type="number" defaultValue="12" />
                        </div>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="aum">Assets Under Management</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-slate-400">$</span>
                          <Input id="aum" className="pl-7" defaultValue="180000000" />
                        </div>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="tagline">Tagline</Label>
                        <Input id="tagline" defaultValue="Early-stage venture capital firm focused on technology" />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="about">About</Label>
                        <Textarea
                          id="about"
                          rows={5}
                          defaultValue="Horizon Ventures is an early-stage venture capital firm that partners with exceptional founders building innovative technology companies. We focus on seed to Series A investments in software, AI, fintech, and healthcare technology."
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
                  <CardDescription>Add your investment team</CardDescription>
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
                                  index === 0 ? "Michael Chen" : index === 1 ? "Jennifer Williams" : "David Kim"
                                }
                              />
                              <Select
                                defaultValue={index === 0 ? "managing-partner" : index === 1 ? "partner" : "partner"}
                              >
                                <SelectTrigger className="border-none bg-transparent p-0 shadow-none focus:ring-0 [&>span]:text-primary [&>span]:p-0">
                                  <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="managing-partner">Managing Partner</SelectItem>
                                  <SelectItem value="partner">Partner</SelectItem>
                                  <SelectItem value="principal">Principal</SelectItem>
                                  <SelectItem value="associate">Associate</SelectItem>
                                  <SelectItem value="analyst">Analyst</SelectItem>
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
                                  ? "Former tech executive with 15+ years of experience at Google and Salesforce. Led investments in 20+ companies."
                                  : index === 1
                                    ? "Previously founded and sold a fintech startup. Focuses on fintech and enterprise software investments."
                                    : "PhD in Computer Science from Stanford. Expert in AI and machine learning technologies."
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

            <TabsContent value="thesis">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Thesis</CardTitle>
                  <CardDescription>Define your investment approach and criteria</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="thesis">Investment Philosophy</Label>
                      <Textarea
                        id="thesis"
                        rows={5}
                        defaultValue="At Horizon Ventures, we believe that transformative technology companies are built by exceptional founders who have unique insights into significant market opportunities. We partner with these founders at the earliest stages and support them throughout their journey."
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>What We Look For</Label>
                        <Textarea
                          rows={6}
                          defaultValue="• Exceptional founding teams with domain expertise and execution ability
• Innovative products addressing large and growing markets
• Defensible technology or business model with potential for network effects
• Early evidence of product-market fit or clear path to achieving it"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>How We Help</Label>
                        <Textarea
                          rows={6}
                          defaultValue="• Strategic guidance and operational support from experienced investors
• Access to our network of industry experts, potential customers, and partners
• Talent recruitment and organizational development assistance
• Fundraising support for future rounds with top-tier investors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Investment Focus Areas</Label>
                      <div className="space-y-3">
                        {["Enterprise SaaS", "AI & Machine Learning", "Fintech", "Digital Health"].map((area, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Input defaultValue={area} />
                            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-destructive">
                              Remove
                            </Button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm">
                          Add Focus Area
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="stage">Investment Stage</Label>
                        <Select defaultValue="seed-series-a">
                          <SelectTrigger>
                            <SelectValue placeholder="Select stage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pre-seed">Pre-seed only</SelectItem>
                            <SelectItem value="seed">Seed only</SelectItem>
                            <SelectItem value="seed-series-a">Seed to Series A</SelectItem>
                            <SelectItem value="series-a">Series A only</SelectItem>
                            <SelectItem value="series-a-b">Series A to B</SelectItem>
                            <SelectItem value="growth">Growth stage</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="check-min">Minimum Check Size</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-slate-400">$</span>
                          <Input id="check-min" className="pl-7" defaultValue="500000" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="check-max">Maximum Check Size</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-slate-400">$</span>
                          <Input id="check-max" className="pl-7" defaultValue="3000000" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Geographic Focus</Label>
                      <div className="space-y-3">
                        {["North America", "Europe"].map((region, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Input defaultValue={region} />
                            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-destructive">
                              Remove
                            </Button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm">
                          Add Region
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="portfolio">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Companies</CardTitle>
                  <CardDescription>Add your portfolio companies and investments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="h-12 w-12 overflow-hidden rounded-lg">
                              <img
                                src={`/placeholder.svg?height=48&width=48&text=C${i}`}
                                alt={`Company ${i}`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-destructive">
                              Remove
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <Input
                              className="border-none bg-transparent p-0 text-base font-semibold shadow-none focus-visible:ring-0"
                              defaultValue={i === 1 ? "TechNova" : `Portfolio Company ${i}`}
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <Label className="text-xs">Stage</Label>
                                <Select defaultValue={i % 3 === 0 ? "seed" : i % 3 === 1 ? "series-a" : "series-b"}>
                                  <SelectTrigger className="h-8 text-xs">
                                    <SelectValue placeholder="Stage" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="seed">Seed</SelectItem>
                                    <SelectItem value="series-a">Series A</SelectItem>
                                    <SelectItem value="series-b">Series B</SelectItem>
                                    <SelectItem value="series-c">Series C+</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label className="text-xs">Year</Label>
                                <Input className="h-8 text-xs" defaultValue={2020 + (i % 3)} />
                              </div>
                            </div>
                            <div>
                              <Label className="text-xs">Industry</Label>
                              <Select defaultValue={i % 3 === 0 ? "ai" : i % 3 === 1 ? "saas" : "fintech"}>
                                <SelectTrigger className="h-8 text-xs">
                                  <SelectValue placeholder="Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ai">AI & ML</SelectItem>
                                  <SelectItem value="saas">SaaS</SelectItem>
                                  <SelectItem value="fintech">Fintech</SelectItem>
                                  <SelectItem value="healthcare">Healthcare</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Textarea
                              className="h-16 text-xs"
                              placeholder="Brief description"
                              defaultValue={
                                i === 1 ? "AI-powered data analytics platform for enterprise customers" : ""
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full gap-2">
                      <Plus className="h-4 w-4" />
                      Add Portfolio Company
                    </Button>

                    <div className="space-y-2">
                      <Label>Performance Metrics</Label>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="moic">Average MOIC</Label>
                          <Input id="moic" defaultValue="3.2" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="irr">IRR (%)</Label>
                          <div className="relative">
                            <Input id="irr" className="pr-7" defaultValue="28" />
                            <span className="absolute right-3 top-3 text-slate-400">%</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="exits">Successful Exits</Label>
                          <Input id="exits" type="number" defaultValue="12" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline" asChild>
              <Link href="/profile/investor">Cancel</Link>
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

