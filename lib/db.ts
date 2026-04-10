// Mock database for the Shark Tank-style bidding platform

// Types
export type UserType = "startup" | "investor"

export type Startup = {
  id: string
  name: string
  logo: string
  tagline: string
  description: string
  industry: string[]
  location: string
  foundedYear: string
  teamSize: number
  website: string
  metrics: {
    arr?: string
    growth?: string
    customers?: string
    runway?: string
    cac?: string
    ltv?: string
  }
  team: {
    id: string
    name: string
    role: string
    image: string
    bio: string
  }[]
}

export type Investor = {
  id: string
  name: string
  logo: string
  description: string
  investmentFocus: string[]
  location: string
  portfolioSize: number
  website: string
  minInvestment: string
  maxInvestment: string
  stages: string[]
  team: {
    id: string
    name: string
    role: string
    image: string
    bio: string
  }[]
}

export type FundingRequest = {
  id: string
  startupId: string
  title: string
  description: string
  amountRequested: string
  equityOffered: string
  valuation: string
  stage: string
  createdAt: string
  expiresAt: string
  views: number
  pitchDeck?: string
  financials?: string
  marketAnalysis?: string
  documents: {
    id: string
    name: string
    type: string
    size: string
    uploadedBy: string
    uploadedAt: string
  }[]
  bids: Bid[]
}

export type Bid = {
  id: string
  investorId: string
  fundingRequestId: string
  amount: string
  equity: string
  valuation: string
  message: string
  terms: string[]
  status: "pending" | "accepted" | "rejected" | "withdrawn"
  createdAt: string
}

// Mock data
const startups: Startup[] = [
  {
    id: "1",
    name: "TechNova",
    logo: "/placeholder.svg?height=80&width=80&text=TN",
    tagline: "AI-powered supply chain optimization",
    description:
      "TechNova is revolutionizing supply chain management with our AI-powered platform that reduces costs by 30% and improves delivery times by 40%. Our solution integrates with existing ERP systems and provides real-time insights and optimization recommendations.",
    industry: ["Artificial Intelligence", "Supply Chain", "Enterprise Software"],
    location: "San Francisco, CA",
    foundedYear: "2020",
    teamSize: 18,
    website: "https://technova.example.com",
    metrics: {
      arr: "$2.4M",
      growth: "215% YoY",
      customers: "24 enterprise clients",
      runway: "18 months",
      cac: "$12,500",
      ltv: "$125,000",
    },
    team: [
      {
        id: "1",
        name: "Sarah Johnson",
        role: "CEO & Co-founder",
        image: "/placeholder.svg?height=100&width=100&text=SJ",
        bio: "Former VP of Operations at Amazon. 15+ years in supply chain management.",
      },
      {
        id: "2",
        name: "David Chen",
        role: "CTO & Co-founder",
        image: "/placeholder.svg?height=100&width=100&text=DC",
        bio: "PhD in Machine Learning from Stanford. Previously led AI teams at Google.",
      },
      {
        id: "3",
        name: "Maria Rodriguez",
        role: "Head of Product",
        image: "/placeholder.svg?height=100&width=100&text=MR",
        bio: "10+ years in product management at enterprise SaaS companies.",
      },
    ],
  },
  {
    id: "2",
    name: "HealthPulse",
    logo: "/placeholder.svg?height=80&width=80&text=HP",
    tagline: "Remote patient monitoring platform",
    description:
      "HealthPulse is a comprehensive remote patient monitoring platform that connects patients with healthcare providers through IoT medical devices and a user-friendly mobile app. Our solution reduces hospital readmissions by 45% and improves patient outcomes.",
    industry: ["Healthcare", "IoT", "Mobile"],
    location: "Boston, MA",
    foundedYear: "2019",
    teamSize: 22,
    website: "https://healthpulse.example.com",
    metrics: {
      arr: "$3.2M",
      growth: "180% YoY",
      customers: "18 hospital networks",
      runway: "14 months",
      cac: "$18,000",
      ltv: "$250,000",
    },
    team: [
      {
        id: "1",
        name: "James Wilson",
        role: "CEO & Co-founder",
        image: "/placeholder.svg?height=100&width=100&text=JW",
        bio: "MD from Johns Hopkins. Previously founded a healthcare analytics company (acquired).",
      },
      {
        id: "2",
        name: "Emily Chang",
        role: "CTO & Co-founder",
        image: "/placeholder.svg?height=100&width=100&text=EC",
        bio: "Former engineering lead at Apple Health. Expert in IoT and secure medical devices.",
      },
      {
        id: "3",
        name: "Robert Kim",
        role: "Chief Medical Officer",
        image: "/placeholder.svg?height=100&width=100&text=RK",
        bio: "Practicing cardiologist with 15+ years of clinical experience.",
      },
    ],
  },
  {
    id: "3",
    name: "GreenCommute",
    logo: "/placeholder.svg?height=80&width=80&text=GC",
    tagline: "Sustainable corporate transportation",
    description:
      "GreenCommute helps companies reduce their carbon footprint by providing a sustainable transportation platform for employees. Our solution includes carpooling, electric vehicle sharing, and public transit incentives, all managed through a single dashboard.",
    industry: ["Transportation", "Sustainability", "B2B"],
    location: "Austin, TX",
    foundedYear: "2021",
    teamSize: 12,
    website: "https://greencommute.example.com",
    metrics: {
      arr: "$1.1M",
      growth: "250% YoY",
      customers: "32 corporate clients",
      runway: "10 months",
      cac: "$8,000",
      ltv: "$96,000",
    },
    team: [
      {
        id: "1",
        name: "Alex Rivera",
        role: "CEO & Founder",
        image: "/placeholder.svg?height=100&width=100&text=AR",
        bio: "Former sustainability director at Uber. Passionate about reducing carbon emissions.",
      },
      {
        id: "2",
        name: "Priya Patel",
        role: "COO",
        image: "/placeholder.svg?height=100&width=100&text=PP",
        bio: "10+ years in operations at transportation and logistics companies.",
      },
      {
        id: "3",
        name: "Thomas Green",
        role: "Head of Engineering",
        image: "/placeholder.svg?height=100&width=100&text=TG",
        bio: "Full-stack developer with experience building transportation platforms.",
      },
    ],
  },
]

const investors: Investor[] = [
  {
    id: "1",
    name: "Horizon Ventures",
    logo: "/placeholder.svg?height=80&width=80&text=HV",
    description:
      "Horizon Ventures is an early-stage venture capital firm focused on technology startups that are solving meaningful problems. We partner with founders who have deep domain expertise and a clear vision for the future.",
    investmentFocus: ["Enterprise SaaS", "AI/ML", "FinTech", "HealthTech"],
    location: "San Francisco, CA",
    portfolioSize: 42,
    website: "https://horizonvc.example.com",
    minInvestment: "$1M",
    maxInvestment: "$5M",
    stages: ["Seed", "Series A"],
    team: [
      {
        id: "1",
        name: "Michael Chen",
        role: "Managing Partner",
        image: "/placeholder.svg?height=100&width=100&text=MC",
        bio: "20+ years in venture capital. Previously founded and sold a SaaS company.",
      },
      {
        id: "2",
        name: "Jennifer Lee",
        role: "Partner",
        image: "/placeholder.svg?height=100&width=100&text=JL",
        bio: "Former CTO with expertise in AI and enterprise software.",
      },
      {
        id: "3",
        name: "Brian Taylor",
        role: "Principal",
        image: "/placeholder.svg?height=100&width=100&text=BT",
        bio: "Background in investment banking and growth equity.",
      },
    ],
  },
  {
    id: "2",
    name: "Impact Capital",
    logo: "/placeholder.svg?height=80&width=80&text=IC",
    description:
      "Impact Capital invests in startups that are creating positive social and environmental impact alongside financial returns. We believe that the most successful companies of the future will be those that address global challenges.",
    investmentFocus: ["CleanTech", "HealthTech", "EdTech", "Sustainability"],
    location: "New York, NY",
    portfolioSize: 28,
    website: "https://impactcapital.example.com",
    minInvestment: "$500K",
    maxInvestment: "$3M",
    stages: ["Pre-seed", "Seed", "Series A"],
    team: [
      {
        id: "1",
        name: "Sophia Rodriguez",
        role: "Founding Partner",
        image: "/placeholder.svg?height=100&width=100&text=SR",
        bio: "Former impact investor at a global foundation. Passionate about sustainable development.",
      },
      {
        id: "2",
        name: "Daniel Kim",
        role: "Partner",
        image: "/placeholder.svg?height=100&width=100&text=DK",
        bio: "Background in renewable energy and sustainable infrastructure.",
      },
      {
        id: "3",
        name: "Rachel Green",
        role: "Principal",
        image: "/placeholder.svg?height=100&width=100&text=RG",
        bio: "Experience in healthcare startups and impact measurement.",
      },
    ],
  },
  {
    id: "3",
    name: "TechFund Partners",
    logo: "/placeholder.svg?height=80&width=80&text=TF",
    description:
      "TechFund Partners is a venture capital firm that invests in early-stage technology startups with disruptive potential. We provide not just capital, but also strategic guidance, operational support, and access to our extensive network.",
    investmentFocus: ["B2B SaaS", "Cybersecurity", "Data Infrastructure", "Developer Tools"],
    location: "Boston, MA",
    portfolioSize: 35,
    website: "https://techfund.example.com",
    minInvestment: "$750K",
    maxInvestment: "$4M",
    stages: ["Seed", "Series A"],
    team: [
      {
        id: "1",
        name: "Robert Johnson",
        role: "Managing Partner",
        image: "/placeholder.svg?height=100&width=100&text=RJ",
        bio: "Serial entrepreneur with 3 successful exits. Angel investor in 20+ startups.",
      },
      {
        id: "2",
        name: "Lisa Wang",
        role: "Partner",
        image: "/placeholder.svg?height=100&width=100&text=LW",
        bio: "Former VP of Product at a unicorn SaaS company. Deep expertise in B2B software.",
      },
      {
        id: "3",
        name: "Mark Davis",
        role: "Principal",
        image: "/placeholder.svg?height=100&width=100&text=MD",
        bio: "Background in software engineering and product management.",
      },
    ],
  },
]

export const fundingRequests: FundingRequest[] = [
  {
    id: "1",
    startupId: "1",
    title: "Series A Funding for TechNova's AI Supply Chain Platform",
    description:
      "TechNova is seeking $5M in Series A funding to accelerate our growth and expand our AI-powered supply chain optimization platform. The funds will be used to:\n\n1. Expand our engineering team to enhance our product capabilities\n2. Scale our sales and marketing efforts to reach new enterprise customers\n3. Develop new features focused on sustainability and carbon footprint reduction\n4. Expand into European markets\n\nOur platform has demonstrated strong product-market fit with 24 enterprise customers, $2.4M in ARR, and 215% YoY growth. We're on track to reach $5M ARR by the end of the year with our current burn rate.",
    amountRequested: "$5M",
    equityOffered: "15%",
    valuation: "$33.3M",
    stage: "Series A",
    createdAt: "June 10, 2023",
    expiresAt: "August 10, 2023",
    views: 245,
    pitchDeck: "TechNova_Pitch_Deck.pdf",
    financials: "TechNova_Financial_Projections.xlsx",
    marketAnalysis: "TechNova_Market_Analysis.pdf",
    documents: [
      {
        id: "1",
        name: "TechNova_Pitch_Deck.pdf",
        type: "pdf",
        size: "4.2 MB",
        uploadedBy: "Sarah Johnson",
        uploadedAt: "June 10, 2023",
      },
      {
        id: "2",
        name: "TechNova_Financial_Projections.xlsx",
        type: "excel",
        size: "1.8 MB",
        uploadedBy: "Sarah Johnson",
        uploadedAt: "June 11, 2023",
      },
      {
        id: "3",
        name: "TechNova_Market_Analysis.pdf",
        type: "pdf",
        size: "3.1 MB",
        uploadedBy: "Sarah Johnson",
        uploadedAt: "June 12, 2023",
      },
      {
        id: "4",
        name: "TechNova_Customer_Case_Studies.pdf",
        type: "pdf",
        size: "2.5 MB",
        uploadedBy: "Maria Rodriguez",
        uploadedAt: "June 15, 2023",
      },
    ],
    bids: [
      {
        id: "1",
        investorId: "1",
        fundingRequestId: "1",
        amount: "$4M",
        equity: "12%",
        valuation: "$33.3M",
        message:
          "We're impressed with your traction and team. We believe TechNova has the potential to transform supply chain management for enterprise customers. Our offer reflects our confidence in your ability to execute and the strong product-market fit you've demonstrated.",
        terms: [
          "Board seat",
          "Pro-rata rights",
          "Information rights",
          "Vesting schedule for founders: 4 years with 1 year cliff",
        ],
        status: "pending",
        createdAt: "June 20, 2023",
      },
      {
        id: "2",
        investorId: "3",
        fundingRequestId: "1",
        amount: "$5M",
        equity: "15%",
        valuation: "$33.3M",
        message:
          "TechFund Partners is excited about TechNova's vision and execution. Your AI-powered approach to supply chain optimization addresses a critical need in the market. We'd like to lead your Series A round and help you scale to the next level.",
        terms: [
          "Board seat",
          "Pro-rata rights",
          "Information rights",
          "Strategic introductions to potential enterprise customers in our network",
        ],
        status: "pending",
        createdAt: "June 25, 2023",
      },
    ],
  },
  {
    id: "2",
    startupId: "2",
    title: "Series A Funding for HealthPulse's Remote Patient Monitoring Platform",
    description:
      "HealthPulse is raising $7M in Series A funding to scale our remote patient monitoring platform that's already deployed across 18 hospital networks. The funding will be used to:\n\n1. Expand our engineering team to develop new features and integrations\n2. Accelerate our sales efforts targeting large healthcare systems\n3. Obtain additional FDA clearances for new monitoring capabilities\n4. Build out our data science team to enhance our predictive analytics\n\nOur platform has demonstrated strong clinical outcomes, reducing hospital readmissions by 45% and generating $3.2M in ARR with 180% YoY growth.",
    amountRequested: "$7M",
    equityOffered: "18%",
    valuation: "$38.9M",
    stage: "Series A",
    createdAt: "June 5, 2023",
    expiresAt: "August 5, 2023",
    views: 198,
    pitchDeck: "HealthPulse_Pitch_Deck.pdf",
    financials: "HealthPulse_Financial_Projections.xlsx",
    marketAnalysis: "HealthPulse_Market_Analysis.pdf",
    documents: [
      {
        id: "1",
        name: "HealthPulse_Pitch_Deck.pdf",
        type: "pdf",
        size: "5.1 MB",
        uploadedBy: "James Wilson",
        uploadedAt: "June 5, 2023",
      },
      {
        id: "2",
        name: "HealthPulse_Financial_Projections.xlsx",
        type: "excel",
        size: "2.2 MB",
        uploadedBy: "James Wilson",
        uploadedAt: "June 6, 2023",
      },
      {
        id: "3",
        name: "HealthPulse_Clinical_Outcomes_Study.pdf",
        type: "pdf",
        size: "3.8 MB",
        uploadedBy: "Robert Kim",
        uploadedAt: "June 8, 2023",
      },
    ],
    bids: [
      {
        id: "3",
        investorId: "2",
        fundingRequestId: "2",
        amount: "$7M",
        equity: "18%",
        valuation: "$38.9M",
        message:
          "Impact Capital is impressed with HealthPulse's mission and execution. Your platform is making a meaningful difference in patient outcomes while building a sustainable business. We'd like to lead your Series A round and support your growth.",
        terms: ["Board seat", "Pro-rata rights", "Information rights", "ESG reporting requirements"],
        status: "pending",
        createdAt: "June 15, 2023",
      },
    ],
  },
  {
    id: "3",
    startupId: "3",
    title: "Seed Round for GreenCommute's Sustainable Transportation Platform",
    description:
      "GreenCommute is raising $2.5M in seed funding to scale our sustainable corporate transportation platform. The funds will be used to:\n\n1. Expand our engineering team to enhance our platform capabilities\n2. Grow our sales team to accelerate customer acquisition\n3. Develop new features including carbon offset integration\n4. Expand from our current markets (Austin, Denver) to 3 additional cities\n\nOur platform has shown strong early traction with 32 corporate clients, $1.1M in ARR, and 250% YoY growth. We're helping companies reduce their transportation-related carbon emissions by an average of 35%.",
    amountRequested: "$2.5M",
    equityOffered: "20%",
    valuation: "$12.5M",
    stage: "Seed",
    createdAt: "June 18, 2023",
    expiresAt: "August 18, 2023",
    views: 156,
    pitchDeck: "GreenCommute_Pitch_Deck.pdf",
    financials: "GreenCommute_Financial_Projections.xlsx",
    documents: [
      {
        id: "1",
        name: "GreenCommute_Pitch_Deck.pdf",
        type: "pdf",
        size: "3.5 MB",
        uploadedBy: "Alex Rivera",
        uploadedAt: "June 18, 2023",
      },
      {
        id: "2",
        name: "GreenCommute_Financial_Projections.xlsx",
        type: "excel",
        size: "1.5 MB",
        uploadedBy: "Alex Rivera",
        uploadedAt: "June 19, 2023",
      },
      {
        id: "3",
        name: "GreenCommute_Impact_Report.pdf",
        type: "pdf",
        size: "2.8 MB",
        uploadedBy: "Alex Rivera",
        uploadedAt: "June 20, 2023",
      },
    ],
    bids: [
      {
        id: "4",
        investorId: "2",
        fundingRequestId: "3",
        amount: "$2M",
        equity: "18%",
        valuation: "$11.1M",
        message:
          "Impact Capital is excited about GreenCommute's mission to reduce corporate carbon footprints through sustainable transportation. We believe your solution addresses a growing need as companies focus more on sustainability. We'd like to lead your seed round with a $2M investment.",
        terms: ["Board observer seat", "Pro-rata rights", "Information rights", "Sustainability metrics reporting"],
        status: "pending",
        createdAt: "June 25, 2023",
      },
    ],
  },
]

// Helper functions
export function getStartupById(id: string): Startup | undefined {
  return startups.find((startup) => startup.id === id)
}

export function getInvestorById(id: string): Investor | undefined {
  return investors.find((investor) => investor.id === id)
}

export function getFundingRequestById(id: string): FundingRequest | undefined {
  return fundingRequests.find((request) => request.id === id)
}

export function updateBidStatus(bidId: string, status: "accepted" | "rejected" | "withdrawn"): void {
  // In a real app, this would update the database
  // For our mock, we'll just log it
  console.log(`Updating bid ${bidId} status to ${status}`)
}

export function getAllFundingRequests(): FundingRequest[] {
  return fundingRequests
}

export function getFundingRequestsByStage(stage: string): FundingRequest[] {
  return fundingRequests.filter((request) => request.stage === stage)
}

export function getFundingRequestsByStartupId(startupId: string): FundingRequest[] {
  return fundingRequests.filter((request) => request.startupId === startupId)
}

export function getBidsByInvestorId(investorId: string): Bid[] {
  return fundingRequests.flatMap((request) => request.bids.filter((bid) => bid.investorId === investorId))
}

