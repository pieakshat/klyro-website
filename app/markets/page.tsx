"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import {
  MarketsHeader,
  MarketsFilters,
  MarketsList,
  marketsData,
  Market,
} from "@/components/markets"

export default function Markets() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("apy")
  const [filterBy, setFilterBy] = useState("all")
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const markets = marketsData

  const filteredMarkets = markets.filter((market) => {
    const matchesSearch =
      market.asset.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.protocol.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter =
      filterBy === "all" ||
      (filterBy === "featured" && market.featured) ||
      (filterBy === "high-apy" && Number.parseFloat(market.apy) > 8) ||
      (filterBy === "low-risk" && market.risk === "Low")
    return matchesSearch && matchesFilter
  })

  const sortedMarkets = [...filteredMarkets].sort((a, b) => {
    switch (sortBy) {
      case "apy":
        return Number.parseFloat(b.apy) - Number.parseFloat(a.apy)
      case "tvl":
        return Number.parseFloat(b.tvl.replace(/[$B]/g, "")) - Number.parseFloat(a.tvl.replace(/[$B]/g, ""))
      case "asset":
        return a.asset.localeCompare(b.asset)
      default:
        return 0
    }
  })

  return (
    <div
      className={cn(
        "min-h-screen text-black relative transition-colors duration-300",
        isDarkMode ? "dark text-white" : "bg-white",
      )}
      style={{ backgroundColor: isDarkMode ? "#0d0c1d" : undefined }}
    >
      <MarketsHeader selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <section className="mb-8">
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Active Markets</h1>
            <p
              className={cn(
                "text-lg font-light leading-relaxed max-w-2xl transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600",
              )}
            >
              Compare yield opportunities across DeFi protocols. Our engine automatically allocates according to risk profile and yield.
            </p>
          </div>
        </section>

        <MarketsFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          sortBy={sortBy}
          setSortBy={setSortBy}
          isLoaded={isLoaded}
        />

        <MarketsList markets={sortedMarkets} isLoaded={isLoaded} />
      </main>
    </div>
  )
}
