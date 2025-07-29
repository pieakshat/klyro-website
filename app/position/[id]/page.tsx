"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { useParams } from "next/navigation"
import {
  PositionHeader,
  PositionInfo,
  PositionStats,
  PerformanceChart,
  RecentActivity,
  PositionNotFound,
  positionData,
  recentActivityData,
} from "@/components/position"

export default function Position() {
  const params = useParams()
  const positionId = params.id as string

  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mock position data - in real app this would come from API

  const position = positionData[positionId as keyof typeof positionData]

  if (!position) {
    return <PositionNotFound />
  }

  const recentActivity = recentActivityData

  return (
    <div
      className={cn(
        "min-h-screen text-black relative transition-colors duration-300",
        isDarkMode ? "dark text-white" : "bg-white",
      )}
      style={{ backgroundColor: isDarkMode ? "#0d0c1d" : undefined }}
    >
      <PositionHeader selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <PositionInfo position={position} isLoaded={isLoaded} />

        <PositionStats position={position} isLoaded={isLoaded} />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <PerformanceChart isLoaded={isLoaded} />
          </div>

          {/* Recent Activity */}
          <div>
            <RecentActivity activities={recentActivity} isLoaded={isLoaded} />
          </div>
        </div>
      </main>
    </div>
  )
}
