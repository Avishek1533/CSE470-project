import type React from "react"
import MainNavbar from "@/components/main-navbar"

export default function InvestorDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNavbar/>
      <div className="flex-1 pt-16">{children}</div>
    </>
  )
}

