import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Building, Edit, Globe, Mail, MapPin, Share2 } from "lucide-react"

export default function StartupProfile() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <main className="flex-1">
        <div className="relative h-48 w-full bg-gradient-to-r from-primary/20 to-primary/40 md:h-64">
          <div className="absolute -bottom-16 left-4 flex items-end md:left-6">
            <div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-white bg-white shadow-md dark:border-slate-800 dark:bg-slate-800 md:h-36 md:w-36">
              <img
                src="/placeholder.svg?height=144&width=144&text=TN"
                alt="TechNova Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl px-4 pt-20 md:px-6 md:pt-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">TechNova</h1>
              <p className="text-slate-600 dark:text-slate-400">AI-powered data analytics for enterprise</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  <span>SaaS • AI • Data Analytics</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <a href="#" className="text-primary hover:underline">
                    technova.ai
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <a href="#" className="text-primary hover:underline">
                    contact@technova.ai
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button size="sm" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                    <CardHeader>
                      <CardTitle>About TechNova</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        TechNova is revolutionizing how enterprises analyze and leverage their data through our
                        AI-powered analytics platform. Our solution combines advanced machine learning algorithms with
                        intuitive visualization tools to help businesses extract actionable insights from complex
                        datasets.
                      </p>
                      <p>
                        Founded in 2021, we've already helped over 50 enterprise clients improve their decision-making
                        processes and achieve measurable business outcomes. Our team of data scientists and engineers
                        are passionate about making advanced analytics accessible to organizations of all sizes.
                      </p>
                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="mb-2 font-semibold">Problem</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            Enterprises struggle to extract meaningful insights from their vast amounts of data, leading
                            to missed opportunities and inefficient decision-making processes.
                          </p>
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold">Solution</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            Our AI-powered platform automates data analysis and presents insights in an intuitive
                            interface, enabling faster and more informed business decisions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                    <CardHeader>
                      <CardTitle>Product Showcase</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                        <img
                          src="/placeholder.svg?height=400&width=800&text=Product+Screenshot"
                          alt="TechNova Platform"
                          className="w-full object-cover"
                        />
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-3">
                        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                          <img
                            src="/placeholder.svg?height=200&width=300&text=Feature+1"
                            alt="Feature 1"
                            className="w-full object-cover"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                          <img
                            src="/placeholder.svg?height=200&width=300&text=Feature+2"
                            alt="Feature 2"
                            className="w-full object-cover"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                          <img
                            src="/placeholder.svg?height=200&width=300&text=Feature+3"
                            alt="Feature 3"
                            className="w-full object-cover"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                    <CardHeader>
                      <CardTitle>Company Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Founded</h3>
                        <p>2021</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Company Stage</h3>
                        <p>Series A</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Team Size</h3>
                        <p>24 employees</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Funding Raised</h3>
                        <p>$4.5M</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Current Raise</h3>
                        <p>Seeking $10M Series B</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                    <CardHeader>
                      <CardTitle>Key Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">ARR</h3>
                        <p>$2.4M</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">YoY Growth</h3>
                        <p>187%</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Customers</h3>
                        <p>52 enterprise clients</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">CAC</h3>
                        <p>$12,500</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">LTV</h3>
                        <p>$125,000</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="team" className="mt-6">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Leadership Team</CardTitle>
                  <CardDescription>Meet the people behind TechNova</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {[
                      {
                        name: "Sarah Johnson",
                        role: "CEO & Co-Founder",
                        bio: "Former Data Science Lead at Google with 10+ years of experience in AI and machine learning.",
                      },
                      {
                        name: "David Chen",
                        role: "CTO & Co-Founder",
                        bio: "PhD in Computer Science from MIT, specialized in distributed systems and data processing.",
                      },
                      {
                        name: "Maria Rodriguez",
                        role: "Chief Data Scientist",
                        bio: "Previously led the analytics team at Salesforce, expert in predictive modeling.",
                      },
                      {
                        name: "James Wilson",
                        role: "VP of Engineering",
                        bio: "Scaled engineering teams at two previous startups, both acquired for $100M+.",
                      },
                      {
                        name: "Aisha Patel",
                        role: "VP of Product",
                        bio: "Product leader with experience at Tableau and Microsoft, focused on data visualization.",
                      },
                      {
                        name: "Robert Kim",
                        role: "VP of Sales",
                        bio: "Enterprise sales expert who previously built the sales team at a B2B SaaS unicorn.",
                      },
                    ].map((member, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center rounded-lg border border-slate-200 p-4 text-center dark:border-slate-700"
                      >
                        <div className="mb-4 h-24 w-24 overflow-hidden rounded-full">
                          <img
                            src={`/placeholder.svg?height=96&width=96&text=${member.name.split(" ")[0][0]}${member.name.split(" ")[1][0]}`}
                            alt={member.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="mb-2 text-sm text-primary">{member.role}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{member.bio}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="product" className="mt-6">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Product Features</CardTitle>
                  <CardDescription>Explore the key features of our AI-powered analytics platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Automated Data Analysis",
                        description:
                          "Our AI engine automatically analyzes your data to identify patterns, anomalies, and insights without manual intervention.",
                        image: "/placeholder.svg?height=300&width=600&text=Automated+Analysis",
                      },
                      {
                        title: "Interactive Dashboards",
                        description:
                          "Create custom dashboards with drag-and-drop simplicity, allowing stakeholders to explore data visually and intuitively.",
                        image: "/placeholder.svg?height=300&width=600&text=Interactive+Dashboards",
                      },
                      {
                        title: "Predictive Analytics",
                        description:
                          "Leverage machine learning to forecast trends, predict outcomes, and make data-driven decisions with confidence.",
                        image: "/placeholder.svg?height=300&width=600&text=Predictive+Analytics",
                      },
                    ].map((feature, i) => (
                      <div key={i} className="grid gap-6 md:grid-cols-2">
                        <div className={`${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                          <h3 className="text-xl font-semibold">{feature.title}</h3>
                          <p className="mt-2 text-slate-600 dark:text-slate-300">{feature.description}</p>
                        </div>
                        <div className={`${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                          <img
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.title}
                            className="w-full rounded-lg border border-slate-200 object-cover dark:border-slate-700"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="achievements" className="mt-6">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Milestones & Achievements</CardTitle>
                  <CardDescription>Our journey and key accomplishments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative border-l border-slate-200 pl-6 dark:border-slate-700">
                    {[
                      {
                        date: "June 2023",
                        title: "Series A Funding",
                        description:
                          "Raised $4.5M in Series A funding led by Accel Partners with participation from Sequoia Capital.",
                      },
                      {
                        date: "March 2023",
                        title: "Enterprise Customer Milestone",
                        description: "Reached 50 enterprise customers, including two Fortune 500 companies.",
                      },
                      {
                        date: "November 2022",
                        title: "Product Launch",
                        description:
                          "Officially launched our enterprise analytics platform after successful beta with 10 customers.",
                      },
                      {
                        date: "May 2022",
                        title: "Seed Funding",
                        description: "Secured $1.2M in seed funding from leading angel investors and Y Combinator.",
                      },
                      {
                        date: "January 2021",
                        title: "Company Founded",
                        description: "TechNova was founded by Sarah Johnson and David Chen in San Francisco.",
                      },
                    ].map((milestone, i) => (
                      <div key={i} className="mb-10 relative">
                        <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-white bg-primary dark:border-slate-900"></div>
                        <div className="mb-1 text-sm text-slate-500 dark:text-slate-400">{milestone.date}</div>
                        <h3 className="flex items-center text-lg font-semibold">
                          {milestone.title}
                          {i === 0 && (
                            <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                              Latest
                            </span>
                          )}
                        </h3>
                        <p className="mt-1 text-slate-600 dark:text-slate-300">{milestone.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle>Awards & Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[
                      {
                        title: "Best AI Startup 2023",
                        organization: "TechCrunch Disrupt",
                        icon: <Award className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "Top 10 Enterprise AI Solutions",
                        organization: "Forbes",
                        icon: <Award className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "Innovation Award",
                        organization: "AI Summit 2022",
                        icon: <Award className="h-8 w-8 text-primary" />,
                      },
                    ].map((award, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center rounded-lg border border-slate-200 p-4 text-center dark:border-slate-700"
                      >
                        <div className="mb-2">{award.icon}</div>
                        <h3 className="font-semibold">{award.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{award.organization}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

