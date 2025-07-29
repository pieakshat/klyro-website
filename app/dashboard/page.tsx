"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  ArrowLeft,
  Moon,
  Sun,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  Eye,
  EyeOff,
  ChevronDown,
  ExternalLink,
  LogOut,
  Download,
  Upload,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showBalance, setShowBalance] = useState(true)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

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
      <header
        className={cn(
          "sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300",
          isDarkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-100",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
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
              <Link href="/markets">
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
              </Link>
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
        {/* Action Buttons */}
        <section className="mb-6">
          <div className="flex justify-end space-x-4">
            <Link href="/deposit">
              <Button
                className={cn(
                  "transition-all duration-300 px-8 py-3 rounded-full font-medium",
                  "hover:scale-[1.02] shadow-lg hover:shadow-xl",
                  isDarkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900",
                )}
              >
                <Upload className="mr-2 h-4 w-4" />
                Deposit
              </Button>
            </Link>
            <Link href="/withdraw">
              <Button
                variant="ghost"
                className={cn(
                  "transition-colors duration-200 px-8 py-3 rounded-full font-medium",
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                    : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                )}
              >
                <Download className="mr-2 h-4 w-4" />
                Withdraw
              </Button>
            </Link>
          </div>
        </section>

        {/* Portfolio Overview */}
        <section className="mb-8">
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <Card
              className={cn(
                "transition-colors duration-300",
                isDarkMode ? "bg-gray-800/40 border-gray-700/50" : "bg-gray-50/80 border-gray-200/60",
              )}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Portfolio Overview</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowBalance(!showBalance)} className="p-2">
                    {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-sm font-medium mb-2 text-gray-500">Total Value</div>
                    <div className="text-3xl font-light tracking-tight mb-1">
                      {showBalance ? portfolioData.totalValue : "••••••••"}
                    </div>
                    <div
                      className={cn(
                        "text-sm font-medium flex items-center gap-1",
                        portfolioData.isPositive ? "text-green-500" : "text-red-500",
                      )}
                    >
                      {portfolioData.isPositive ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {showBalance ? `${portfolioData.totalChange} (${portfolioData.totalChangePercent})` : "••••••"}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2 text-gray-500">Active Positions</div>
                    <div className="text-3xl font-light tracking-tight mb-1">
                      {positions.filter((p) => p.isActive).length}
                    </div>
                    <div className="text-sm text-gray-500">of {positions.length} protocols</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2 text-gray-500">Average APY</div>
                    <div className="text-3xl font-light tracking-tight mb-1">7.24%</div>
                    <div className="text-sm text-gray-500">Weighted average</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Positions */}
          <div className="lg:col-span-2">
            <div
              className={cn(
                "transition-all duration-1000 ease-out delay-200",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <Card
                className={cn(
                  "transition-colors duration-300",
                  isDarkMode ? "bg-gray-800/40 border-gray-700/50" : "bg-gray-50/80 border-gray-200/60",
                )}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Active Positions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {positions.map((position) => (
                      <Link key={position.id} href={`/position/${position.id}`}>
                        <div
                          className={cn(
                            "group relative rounded-xl p-4 transition-all duration-300 cursor-pointer",
                            "hover:scale-[1.01] hover:shadow-lg",
                            position.isActive
                              ? isDarkMode
                                ? "bg-white/5 border border-gray-600/30 hover:bg-white/10"
                                : "bg-white border border-gray-200 hover:bg-gray-50"
                              : isDarkMode
                                ? "bg-gray-700/20 border border-gray-700/30 opacity-60"
                                : "bg-gray-100/50 border border-gray-200/50 opacity-60",
                          )}
                        >
                          <div className="grid grid-cols-4 gap-4 items-center">
                            <div className="flex items-center space-x-4">
                              <div
                                className={cn(
                                  "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300",
                                  position.isActive
                                    ? isDarkMode
                                      ? "bg-gray-700"
                                      : "bg-gray-200"
                                    : isDarkMode
                                      ? "bg-gray-800"
                                      : "bg-gray-300",
                                )}
                              >
                                <div
                                  className={cn(
                                    "w-5 h-5 rounded transition-colors duration-300",
                                    position.isActive
                                      ? isDarkMode
                                        ? "bg-gray-400"
                                        : "bg-gray-500"
                                      : isDarkMode
                                        ? "bg-gray-600"
                                        : "bg-gray-400",
                                  )}
                                />
                              </div>
                              <div>
                                <div className="font-medium text-sm uppercase tracking-wider">{position.protocol}</div>
                                <div className="text-sm text-gray-500">{position.asset}</div>
                              </div>
                            </div>

                            <div className="text-center">
                              <div className="font-medium">{showBalance ? position.amount : "••••••••"}</div>
                              <div className="text-sm text-gray-500">{position.apy} APY</div>
                            </div>

                            <div className="text-center">
                              <div
                                className={cn(
                                  "font-medium text-sm",
                                  position.trend === "up" ? "text-green-500" : "text-red-500",
                                )}
                              >
                                {showBalance ? position.earned : "••••••"}
                              </div>
                              <div className="text-xs text-gray-500">24h earnings</div>
                            </div>

                            <div className="flex justify-end">
                              <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>

                          {position.isActive && (
                            <div
                              className={cn(
                                "absolute top-2 right-2 w-2 h-2 rounded-full",
                                "bg-green-500 animate-pulse",
                              )}
                            />
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div
              className={cn(
                "transition-all duration-1000 ease-out delay-400",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <Card
                className={cn(
                  "transition-colors duration-300",
                  isDarkMode ? "bg-gray-800/40 border-gray-700/50" : "bg-gray-50/80 border-gray-200/60",
                )}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div
                        key={index}
                        className={cn(
                          "group relative rounded-lg p-3 transition-all duration-300",
                          "hover:bg-gray-100/50 dark:hover:bg-gray-700/30",
                        )}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-medium text-sm mb-1">{activity.action}</div>
                            <div className="text-xs text-gray-500 mb-2">{activity.protocol}</div>
                            <div className="text-xs text-gray-400">{activity.time}</div>
                          </div>
                          <div
                            className={cn(
                              "text-sm font-medium",
                              activity.type === "optimization" || activity.type === "earning"
                                ? "text-green-500"
                                : "text-gray-500",
                            )}
                          >
                            {showBalance ? activity.amount : "••••••"}
                          </div>
                        </div>

                        <div
                          className={cn(
                            "absolute left-0 top-0 bottom-0 w-1 rounded-full transition-opacity duration-300",
                            "opacity-0 group-hover:opacity-100",
                            activity.type === "optimization"
                              ? "bg-blue-500"
                              : activity.type === "earning"
                                ? "bg-green-500"
                                : activity.type === "deposit"
                                  ? "bg-purple-500"
                                  : "bg-orange-500",
                          )}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200/20">
                    <Link href="/activity">
                      <Button variant="ghost" className="w-full text-sm">
                        View All Activity
                        <ChevronRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
