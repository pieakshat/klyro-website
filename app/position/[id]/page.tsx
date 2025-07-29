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
  ChevronDown,
  ExternalLink,
  LogOut,
  TrendingUp,
  Download,
  Upload,
  BarChart3,
  Clock,
  DollarSign,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Position() {
  const params = useParams()
  const positionId = params.id as string

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Mock position data - in real app this would come from API
  const positionData = {
    "morpho-usdc": {
      protocol: "MORPHO",
      asset: "USDC",
      balance: "45,230.50",
      apy: "7.67%",
      earned: "+$2,341.20",
      value: "$45,230.50",
      depositDate: "2024-01-15",
      totalDeposited: "$42,889.30",
      performance: "+5.46%",
      risk: "Low",
      chain: "Ethereum",
    },
    "seamless-eth": {
      protocol: "SEAMLESS",
      asset: "ETH",
      balance: "13.75",
      apy: "9.13%",
      earned: "+$1,892.45",
      value: "$32,100.75",
      depositDate: "2024-01-20",
      totalDeposited: "$30,208.30",
      performance: "+6.26%",
      risk: "Medium",
      chain: "Base",
    },
    "euler-dai": {
      protocol: "EULER",
      asset: "DAI",
      balance: "21,762.27",
      apy: "6.39%",
      earned: "+$1,234.56",
      value: "$21,762.27",
      depositDate: "2024-01-25",
      totalDeposited: "$20,527.71",
      performance: "+6.01%",
      risk: "Medium",
      chain: "Ethereum",
    },
  }

  const position = positionData[positionId as keyof typeof positionData]

  if (!position) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Position not found</h1>
          <Link href="/dashboard">
            <Button>Return to Dashboard</Button>
          </Link>
        </div>
      </div>
    )
  }

  const recentActivity = [
    {
      action: "Yield Earned",
      amount: "+$89.23",
      time: "2 hours ago",
      type: "earning",
    },
    {
      action: "Auto-Compound",
      amount: "$89.23",
      time: "2 hours ago",
      type: "compound",
    },
    {
      action: "Yield Earned",
      amount: "+$87.45",
      time: "1 day ago",
      type: "earning",
    },
    {
      action: "Auto-Compound",
      amount: "$87.45",
      time: "1 day ago",
      type: "compound",
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
                  {position.protocol} • {position.asset}
                </h1>
                <p
                  className={cn(
                    "text-lg font-light leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600",
                  )}
                >
                  {position.chain} • {position.risk} Risk • Active since {position.depositDate}
                </p>
              </div>
              <div className="flex space-x-4">
                <Link href="/deposit">
                  <Button
                    className={cn(
                      "transition-all duration-300 px-6 py-3 rounded-full font-medium",
                      "hover:scale-[1.02] shadow-lg hover:shadow-xl",
                      isDarkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900",
                    )}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Add More
                  </Button>
                </Link>
                <Link href="/withdraw">
                  <Button
                    variant="ghost"
                    className={cn(
                      "transition-colors duration-200 px-6 py-3 rounded-full font-medium",
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
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="mb-8">
          <div
            className={cn(
              "transition-all duration-1000 ease-out delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="grid md:grid-cols-4 gap-6">
              <Card
                className={cn(
                  "transition-colors duration-300",
                  isDarkMode ? "bg-gray-800/40 border-gray-700/50" : "bg-gray-50/80 border-gray-200/60",
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        isDarkMode ? "bg-gray-700" : "bg-gray-200",
                      )}
                    >
                      <DollarSign className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Current Value</div>
                    </div>
                  </div>
                  <div className="text-2xl font-light mb-1">{position.value}</div>
                  <div className="text-sm text-green-500 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {position.performance}
                  </div>
                </CardContent>
              </Card>

              <Card
                className={cn(
                  "transition-colors duration-300",
                  isDarkMode ? "bg-gray-800/40 border-gray-700/50" : "bg-gray-50/80 border-gray-200/60",
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        isDarkMode ? "bg-gray-700" : "bg-gray-200",
                      )}
                    >
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Current APY</div>
                    </div>
                  </div>
                  <div className="text-2xl font-light mb-1">{position.apy}</div>
                  <div className="text-sm text-gray-500">Annualized</div>
                </CardContent>
              </Card>

              <Card
                className={cn(
                  "transition-colors duration-300",
                  isDarkMode ? "bg-gray-800/40 border-gray-700/50" : "bg-gray-50/80 border-gray-200/60",
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        isDarkMode ? "bg-gray-700" : "bg-gray-200",
                      )}
                    >
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Total Earned</div>
                    </div>
                  </div>
                  <div className="text-2xl font-light mb-1">{position.earned}</div>
                  <div className="text-sm text-gray-500">All time</div>
                </CardContent>
              </Card>

              <Card
                className={cn(
                  "transition-colors duration-300",
                  isDarkMode ? "bg-gray-800/40 border-gray-700/50" : "bg-gray-50/80 border-gray-200/60",
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        isDarkMode ? "bg-gray-700" : "bg-gray-200",
                      )}
                    >
                      <Clock className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Balance</div>
                    </div>
                  </div>
                  <div className="text-2xl font-light mb-1">{position.balance}</div>
                  <div className="text-sm text-gray-500">{position.asset}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
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
                  <CardTitle className="text-lg font-medium">Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center">
                    <div
                      className={cn(
                        "text-center transition-colors duration-300",
                        isDarkMode ? "text-gray-400" : "text-gray-600",
                      )}
                    >
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <div className="text-lg font-medium mb-2">Performance Chart</div>
                      <div className="text-sm">
                        Interactive chart showing position value over time would be displayed here
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div
              className={cn(
                "transition-all duration-1000 ease-out delay-600",
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
                            <div className="text-xs text-gray-400">{activity.time}</div>
                          </div>
                          <div
                            className={cn(
                              "text-sm font-medium",
                              activity.type === "earning" ? "text-green-500" : "text-gray-500",
                            )}
                          >
                            {activity.amount}
                          </div>
                        </div>

                        <div
                          className={cn(
                            "absolute left-0 top-0 bottom-0 w-1 rounded-full transition-opacity duration-300",
                            "opacity-0 group-hover:opacity-100",
                            activity.type === "earning" ? "bg-green-500" : "bg-blue-500",
                          )}
                        />
                      </div>
                    ))}
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
