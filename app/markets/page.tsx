"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  ArrowLeft,
  Moon,
  Sun,
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  ExternalLink,
  LogOut,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Markets() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("apy")
  const [filterBy, setFilterBy] = useState("all")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const markets = [
    {
      id: "usdc-morpho",
      asset: "USDC",
      protocol: "MORPHO",
      apy: "7.67%",
      tvl: "$2.4B",
      liquidity: "$450M",
      trend: "up",
      change24h: "+0.23%",
      risk: "Low",
      category: "Lending",
      chain: "Ethereum",
      featured: true,
    },
    {
      id: "eth-seamless",
      asset: "ETH",
      protocol: "SEAMLESS",
      apy: "9.13%",
      tvl: "$1.8B",
      liquidity: "$320M",
      trend: "up",
      change24h: "+0.45%",
      risk: "Medium",
      category: "Lending",
      chain: "Base",
      featured: false,
    },
    {
      id: "usdt-aave",
      asset: "USDT",
      protocol: "AAVE",
      apy: "3.57%",
      tvl: "$5.2B",
      liquidity: "$890M",
      trend: "down",
      change24h: "-0.12%",
      risk: "Low",
      category: "Lending",
      chain: "Ethereum",
      featured: true,
    },
    {
      id: "dai-euler",
      asset: "DAI",
      protocol: "EULER",
      apy: "6.39%",
      tvl: "$980M",
      liquidity: "$180M",
      trend: "up",
      change24h: "+0.18%",
      risk: "Medium",
      category: "Lending",
      chain: "Ethereum",
      featured: false,
    },
    {
      id: "wbtc-compound",
      asset: "WBTC",
      protocol: "COMPOUND",
      apy: "4.82%",
      tvl: "$3.1B",
      liquidity: "$520M",
      trend: "up",
      change24h: "+0.08%",
      risk: "Low",
      category: "Lending",
      chain: "Ethereum",
      featured: false,
    },
    {
      id: "usdc-moonwell",
      asset: "USDC",
      protocol: "MOONWELL",
      apy: "8.24%",
      tvl: "$650M",
      liquidity: "$120M",
      trend: "up",
      change24h: "+0.31%",
      risk: "Medium",
      category: "Lending",
      chain: "Base",
      featured: false,
    },
    {
      id: "arb-radiant",
      asset: "ARB",
      protocol: "RADIANT",
      apy: "11.45%",
      tvl: "$420M",
      liquidity: "$85M",
      trend: "down",
      change24h: "-0.67%",
      risk: "High",
      category: "Lending",
      chain: "Arbitrum",
      featured: false,
    },
    {
      id: "bnb-venus",
      asset: "BNB",
      protocol: "VENUS",
      apy: "5.67%",
      tvl: "$1.2B",
      liquidity: "$240M",
      trend: "up",
      change24h: "+0.15%",
      risk: "Medium",
      category: "Lending",
      chain: "BSC",
      featured: false,
    },
  ]

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
      {/* Header */}
      <header
        className={cn(
          "sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300",
          isDarkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-100",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className={cn(
                    "transition-colors duration-200 p-3 h-auto rounded-xl",
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                      : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                  )}
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className={cn(
                    "transition-colors duration-200 px-6 py-3 h-auto rounded-xl",
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                      : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                  )}
                >
                  <span className="text-sm font-medium">Dashboard</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                className={cn(
                  "transition-colors duration-200 px-6 py-3 h-auto rounded-xl",
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                    : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                )}
              >
                <span className="text-sm font-medium">Markets</span>
              </Button>
            </div>
            <div className="flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "transition-colors duration-200 px-6 py-3 h-auto rounded-xl",
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                        : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                    )}
                  >
                    <span className="text-sm font-medium">{selectedNetwork}</span>
                    <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={cn(
                    "rounded-2xl shadow-2xl backdrop-blur-xl border",
                    isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200",
                  )}
                >
                  <DropdownMenuItem
                    className={cn(
                      "cursor-pointer font-medium transition-colors",
                      isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                    )}
                    onClick={() => setSelectedNetwork("Ethereum")}
                  >
                    Ethereum
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "cursor-pointer font-medium transition-colors",
                      isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                    )}
                    onClick={() => setSelectedNetwork("Starknet")}
                  >
                    Starknet
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "cursor-pointer font-medium transition-colors",
                      isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                    )}
                    onClick={() => setSelectedNetwork("Base")}
                  >
                    Base
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "cursor-pointer font-medium transition-colors",
                      isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                    )}
                    onClick={() => setSelectedNetwork("Mantle")}
                  >
                    Mantle
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "transition-colors duration-200 px-6 py-3 h-auto rounded-xl",
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                        : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={cn("w-2 h-2 rounded-full", isDarkMode ? "bg-white" : "bg-black")} />
                      <span className="text-sm font-medium">0xABF2...E65D</span>
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className={cn(
                    "w-80 rounded-2xl shadow-2xl p-8 backdrop-blur-xl border",
                    isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200",
                  )}
                >
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <span className={cn("text-sm font-medium", isDarkMode ? "text-gray-400" : "text-gray-600")}>
                        Status
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className={cn("w-2 h-2 rounded-full", isDarkMode ? "bg-white" : "bg-black")} />
                        <span className="text-sm font-medium">Connected</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={cn("text-sm font-medium", isDarkMode ? "text-gray-400" : "text-gray-600")}>
                          Address
                        </span>
                        <span className="text-sm font-medium">0xABF2...E65D</span>
                      </div>
                    </div>
                    <div className={cn("pt-6 border-t space-y-3", isDarkMode ? "border-gray-700" : "border-gray-200")}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start font-medium transition-colors",
                          isDarkMode
                            ? "text-gray-400 hover:text-white hover:bg-gray-800"
                            : "text-gray-600 hover:text-black hover:bg-gray-100",
                        )}
                      >
                        <ExternalLink className="w-4 h-4 mr-3" />
                        View on Explorer
                      </Button>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start font-medium transition-colors",
                          isDarkMode
                            ? "text-gray-400 hover:text-white hover:bg-gray-800"
                            : "text-gray-600 hover:text-black hover:bg-gray-100",
                        )}
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Disconnect
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className={cn(
                  "p-2 transition-colors duration-200",
                  isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-50",
                )}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

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

        {/* Filters and Search */}
        <section className="mb-8">
          <div
            className={cn(
              "transition-all duration-1000 ease-out delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search assets or protocols..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={cn(
                      "pl-10 rounded-xl border transition-colors duration-300",
                      isDarkMode
                        ? "bg-gray-800/40 border-gray-700/50 text-white placeholder:text-gray-400"
                        : "bg-gray-50/80 border-gray-200/60 text-black placeholder:text-gray-500",
                    )}
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "transition-colors duration-200 px-4 py-2 rounded-xl",
                        isDarkMode
                          ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                          : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                      )}
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                      <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className={cn(
                      "rounded-2xl shadow-2xl backdrop-blur-xl border",
                      isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200",
                    )}
                  >
                    <DropdownMenuItem
                      className={cn(
                        "cursor-pointer font-medium transition-colors",
                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                      )}
                      onClick={() => setFilterBy("all")}
                    >
                      All Markets
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        "cursor-pointer font-medium transition-colors",
                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                      )}
                      onClick={() => setFilterBy("featured")}
                    >
                      Featured
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        "cursor-pointer font-medium transition-colors",
                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                      )}
                      onClick={() => setFilterBy("high-apy")}
                    >
                      High APY (&gt;8%)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        "cursor-pointer font-medium transition-colors",
                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                      )}
                      onClick={() => setFilterBy("low-risk")}
                    >
                      Low Risk
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "transition-colors duration-200 px-4 py-2 rounded-xl",
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                        : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                    )}
                  >
                    Sort by APY
                    <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={cn(
                    "rounded-2xl shadow-2xl backdrop-blur-xl border",
                    isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200",
                  )}
                >
                  <DropdownMenuItem
                    className={cn(
                      "cursor-pointer font-medium transition-colors",
                      isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                    )}
                    onClick={() => setSortBy("apy")}
                  >
                    APY (High to Low)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "cursor-pointer font-medium transition-colors",
                      isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                    )}
                    onClick={() => setSortBy("tvl")}
                  >
                    TVL (High to Low)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "cursor-pointer font-medium transition-colors",
                      isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                    )}
                    onClick={() => setSortBy("asset")}
                  >
                    Asset (A-Z)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>

        {/* Markets Grid */}
        <section>
          <div
            className={cn(
              "transition-all duration-1000 ease-out delay-400",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="grid gap-6">
              {sortedMarkets.map((market, index) => (
                <Card
                  key={market.id}
                  className={cn(
                    "group transition-all duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-lg",
                    isDarkMode ? "bg-gray-800/40 border-gray-700/50" : "bg-gray-50/80 border-gray-200/60",
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s ease-out",
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300",
                            isDarkMode ? "bg-gray-700" : "bg-gray-200",
                          )}
                        >
                          <div
                            className={cn(
                              "w-6 h-6 rounded transition-colors duration-300",
                              isDarkMode ? "bg-gray-400" : "bg-gray-500",
                            )}
                          />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-lg uppercase tracking-wider">{market.asset}</h3>
                            {market.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                          </div>
                          <div className="text-sm text-gray-500">
                            via {market.protocol} • {market.chain}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <div className="text-sm font-medium mb-1 text-gray-500">APY</div>
                          <div className="text-2xl font-light">{market.apy}</div>
                          <div
                            className={cn(
                              "text-xs flex items-center justify-center gap-1",
                              market.trend === "up" ? "text-green-500" : "text-red-500",
                            )}
                          >
                            {market.trend === "up" ? (
                              <TrendingUp className="h-3 w-3" />
                            ) : (
                              <TrendingDown className="h-3 w-3" />
                            )}
                            {market.change24h}
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-sm font-medium mb-1 text-gray-500">TVL</div>
                          <div className="text-lg font-light">{market.tvl}</div>
                          <div className="text-xs text-gray-400">Total Value</div>
                        </div>

                        <div className="text-center">
                          <div className="text-sm font-medium mb-1 text-gray-500">Liquidity</div>
                          <div className="text-lg font-light">{market.liquidity}</div>
                          <div className="text-xs text-gray-400">Available</div>
                        </div>

                        <div className="text-center">
                          <div className="text-sm font-medium mb-1 text-gray-500">Risk</div>
                          <div
                            className={cn(
                              "text-sm font-medium px-2 py-1 rounded-full",
                              market.risk === "Low"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : market.risk === "Medium"
                                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                            )}
                          >
                            {market.risk}
                          </div>
                        </div>

                        <Link href={`/deposit?asset=${market.asset}&protocol=${market.protocol}`}>
                          <Button
                            className={cn(
                              "transition-all duration-300 px-6 py-2 rounded-full font-medium",
                              "hover:scale-[1.02] shadow-lg hover:shadow-xl",
                              isDarkMode
                                ? "bg-white text-black hover:bg-gray-100"
                                : "bg-black text-white hover:bg-gray-900",
                            )}
                          >
                            Supply
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedMarkets.length === 0 && (
              <div className="text-center py-12">
                <div
                  className={cn(
                    "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300",
                    isDarkMode ? "bg-gray-800" : "bg-gray-100",
                  )}
                >
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No markets found</h3>
                <p
                  className={cn(
                    "text-sm transition-colors duration-300",
                    isDarkMode ? "text-gray-400" : "text-gray-600",
                  )}
                >
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
