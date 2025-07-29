"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  ArrowLeft,
  Moon,
  Sun,
  Search,
  Filter,
  ChevronDown,
  ExternalLink,
  LogOut,
  TrendingUp,
  Upload,
  Download,
  RefreshCw,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Activity() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterBy, setFilterBy] = useState("all")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const activities = [
    {
      id: "1",
      action: "Yield Optimized",
      protocol: "MORPHO → SEAMLESS",
      amount: "+$234.50",
      time: "2 minutes ago",
      type: "optimization",
      txHash: "0x1234...5678",
      status: "completed",
    },
    {
      id: "2",
      action: "Deposit",
      protocol: "USDC",
      amount: "$5,000.00",
      time: "1 hour ago",
      type: "deposit",
      txHash: "0x2345...6789",
      status: "completed",
    },
    {
      id: "3",
      action: "Yield Earned",
      protocol: "SEAMLESS",
      amount: "+$89.23",
      time: "3 hours ago",
      type: "earning",
      txHash: "0x3456...7890",
      status: "completed",
    },
    {
      id: "4",
      action: "Rebalanced",
      protocol: "Portfolio",
      amount: "$12,450.00",
      time: "6 hours ago",
      type: "rebalance",
      txHash: "0x4567...8901",
      status: "completed",
    },
    {
      id: "5",
      action: "Withdraw",
      protocol: "AAVE",
      amount: "$2,500.00",
      time: "12 hours ago",
      type: "withdraw",
      txHash: "0x5678...9012",
      status: "completed",
    },
    {
      id: "6",
      action: "Yield Optimized",
      protocol: "EULER → MORPHO",
      amount: "+$156.78",
      time: "1 day ago",
      type: "optimization",
      txHash: "0x6789...0123",
      status: "completed",
    },
    {
      id: "7",
      action: "Deposit",
      protocol: "ETH",
      amount: "$8,750.00",
      time: "2 days ago",
      type: "deposit",
      txHash: "0x7890...1234",
      status: "completed",
    },
    {
      id: "8",
      action: "Yield Earned",
      protocol: "COMPOUND",
      amount: "+$67.45",
      time: "2 days ago",
      type: "earning",
      txHash: "0x8901...2345",
      status: "completed",
    },
    {
      id: "9",
      action: "Rebalanced",
      protocol: "Portfolio",
      amount: "$18,900.00",
      time: "3 days ago",
      type: "rebalance",
      txHash: "0x9012...3456",
      status: "completed",
    },
    {
      id: "10",
      action: "Yield Optimized",
      protocol: "VENUS → MOONWELL",
      amount: "+$298.34",
      time: "4 days ago",
      type: "optimization",
      txHash: "0x0123...4567",
      status: "completed",
    },
  ]

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.protocol.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterBy === "all" || activity.type === filterBy
    return matchesSearch && matchesFilter
  })

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "optimization":
        return <Zap className="h-4 w-4" />
      case "deposit":
        return <Upload className="h-4 w-4" />
      case "withdraw":
        return <Download className="h-4 w-4" />
      case "earning":
        return <TrendingUp className="h-4 w-4" />
      case "rebalance":
        return <RefreshCw className="h-4 w-4" />
      default:
        return <TrendingUp className="h-4 w-4" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "optimization":
        return "text-blue-500"
      case "deposit":
        return "text-purple-500"
      case "withdraw":
        return "text-orange-500"
      case "earning":
        return "text-green-500"
      case "rebalance":
        return "text-yellow-500"
      default:
        return "text-gray-500"
    }
  }

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
        {/* Header */}
        <section className="mb-8">
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Activity</h1>
            <p
              className={cn(
                "text-lg font-light leading-relaxed max-w-2xl transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600",
              )}
            >
              Track all your DeFi transactions, yield optimizations, and portfolio activities in one place.
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
                    placeholder="Search activities..."
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
                      All Activities
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        "cursor-pointer font-medium transition-colors",
                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                      )}
                      onClick={() => setFilterBy("optimization")}
                    >
                      Optimizations
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        "cursor-pointer font-medium transition-colors",
                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                      )}
                      onClick={() => setFilterBy("deposit")}
                    >
                      Deposits
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        "cursor-pointer font-medium transition-colors",
                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                      )}
                      onClick={() => setFilterBy("withdraw")}
                    >
                      Withdrawals
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={cn(
                        "cursor-pointer font-medium transition-colors",
                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                      )}
                      onClick={() => setFilterBy("earning")}
                    >
                      Earnings
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </section>

        {/* Activity List */}
        <section>
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
                <CardTitle className="text-lg font-medium">Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredActivities.map((activity, index) => (
                    <div
                      key={activity.id}
                      className={cn(
                        "group relative rounded-lg p-4 transition-all duration-300",
                        "hover:bg-gray-100/50 dark:hover:bg-gray-700/30",
                      )}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.6s ease-out",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={cn(
                              "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300",
                              isDarkMode ? "bg-gray-700" : "bg-gray-200",
                            )}
                          >
                            <div className={cn(getActivityColor(activity.type))}>{getActivityIcon(activity.type)}</div>
                          </div>
                          <div>
                            <div className="font-medium text-sm mb-1">{activity.action}</div>
                            <div className="text-xs text-gray-500 mb-1">{activity.protocol}</div>
                            <div className="text-xs text-gray-400">{activity.time}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div
                              className={cn(
                                "font-medium text-sm",
                                activity.type === "optimization" || activity.type === "earning"
                                  ? "text-green-500"
                                  : activity.type === "withdraw"
                                    ? "text-orange-500"
                                    : "text-gray-500",
                              )}
                            >
                              {activity.amount}
                            </div>
                            <div className="text-xs text-gray-400">
                              {activity.status === "completed" ? "Completed" : "Pending"}
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                              isDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-700"
                                : "text-gray-600 hover:text-black hover:bg-gray-100",
                            )}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
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
                                : activity.type === "withdraw"
                                  ? "bg-orange-500"
                                  : "bg-yellow-500",
                        )}
                      />
                    </div>
                  ))}
                </div>

                {filteredActivities.length === 0 && (
                  <div className="text-center py-12">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300",
                        isDarkMode ? "bg-gray-800" : "bg-gray-100",
                      )}
                    >
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No activities found</h3>
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
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
