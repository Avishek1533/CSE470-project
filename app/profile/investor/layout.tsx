import type React from "react";
import MainNavbar from "@/components/main-navbar";

export default function InvestorProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <MainNavbar userType="investor" /> */}
      <div className="flex-1">{children}</div>
    </>
  );
}
