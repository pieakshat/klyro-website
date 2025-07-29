"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import {
  Header,
  ActionButtons,
  PortfolioOverview,
  PositionsList,
  RecentActivity,
} from "@/components/dashboard"

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showBalance, setShowBalance] = useState(true)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const portfolioData = {
    totalValue: "$127,543.82",
    totalChange: "+$8,234.12",
    totalChangePercent: "+6.89%",
    isPositive: true,
  }

  const positions = [
    {
      id: "morpho-usdc",
      protocol: "MORPHO",
      asset: "USDC",
      amount: "$45,230.50",
      apy: "7.67%",
      earned: "+$2,341.20",
      isActive: true,
      trend: "up",
    },
    {
      id: "seamless-eth",
      protocol: "SEAMLESS",
      asset: "ETH",
      amount: "$32,100.75",
      apy: "9.13%",
      earned: "+$1,892.45",
      isActive: true,
      trend: "up",
    },
    {
      id: "aave-usdt",
      protocol: "AAVE",
      asset: "USDT",
      amount: "$28,450.30",
      apy: "3.57%",
      earned: "+$987.65",
      isActive: false,
      trend: "down",
    },
    {
      id: "euler-dai",
      protocol: "EULER",
      asset: "DAI",
      amount: "$21,762.27",
      apy: "6.39%",
      earned: "+$1,234.56",
      isActive: true,
      trend: "up",
    },
    {
      id: "compound-wbtc",
      protocol: "COMPOUND",
      asset: "WBTC",
      amount: "$18,950.40",
      apy: "4.82%",
      earned: "+$756.30",
      isActive: true,
      trend: "up",
    },
    {
      id: "moonwell-usdc",
      protocol: "MOONWELL",
      asset: "USDC",
      amount: "$15,670.85",
      apy: "8.24%",
      earned: "+$1,145.67",
      isActive: true,
      trend: "up",
    },
    {
      id: "radiant-arb",
      protocol: "RADIANT",
      asset: "ARB",
      amount: "$12,340.60",
      apy: "11.45%",
      earned: "+$1,567.89",
      isActive: false,
      trend: "down",
    },
    {
      id: "venus-bnb",
      protocol: "VENUS",
      asset: "BNB",
      amount: "$9,876.25",
      apy: "5.67%",
      earned: "+$432.10",
      isActive: true,
      trend: "up",
    },
  ]

  const recentActivity = [
    {
      action: "Yield Optimized",
      protocol: "MORPHO → SEAMLESS",
      amount: "+$234.50",
      time: "2 minutes ago",
      type: "optimization",
    },
    {
      action: "Deposit",
      protocol: "USDC",
      amount: "$5,000.00",
      time: "1 hour ago",
      type: "deposit",
    },
    {
      action: "Yield Earned",
      protocol: "SEAMLESS",
      amount: "+$89.23",
      time: "3 hours ago",
      type: "earning",
    },
    {
      action: "Rebalanced",
      protocol: "Portfolio",
      amount: "$12,450.00",
      time: "6 hours ago",
      type: "rebalance",
    },
  ]

  return (
    <div
      className={cn(
        "min-h-screen text-black relative transition-colors duration-300",
        isDarkMode ? "dark text-white" : "bg-white",
      )}
      style={{ backgroundColor: isDarkMode ? "#0d0c1d" : undefined }}
    >
      {/* Header */}
      <Header
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
        isPopoverOpen={isPopoverOpen}
        setIsPopoverOpen={setIsPopoverOpen}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Action Buttons */}
        <ActionButtons isDarkMode={isDarkMode} />

        {/* Portfolio Overview */}
        <PortfolioOverview
          isLoaded={isLoaded}
          isDarkMode={isDarkMode}
          showBalance={showBalance}
          setShowBalance={setShowBalance}
          portfolioData={portfolioData}
          positions={positions}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Positions */}
          <div className="lg:col-span-2">
            <PositionsList
              isLoaded={isLoaded}
              isDarkMode={isDarkMode}
              showBalance={showBalance}
              positions={positions}
            />
          </div>

          {/* Recent Activity */}
          <div>
            <RecentActivity
              isLoaded={isLoaded}
              isDarkMode={isDarkMode}
              showBalance={showBalance}
              recentActivity={recentActivity}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
