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
  ChevronDown,
  ExternalLink,
  LogOut,
  Download,
  TrendingUp,
  AlertTriangle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Withdraw() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState("morpho-usdc")
  const [amount, setAmount] = useState("")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const positions = [
    {
      id: "morpho-usdc",
      protocol: "MORPHO",
      asset: "USDC",
      balance: "45,230.50",
      apy: "7.67%",
      earned: "+$2,341.20",
      value: "$45,230.50",
    },
    {
      id: "seamless-eth",
      protocol: "SEAMLESS",
      asset: "ETH",
      balance: "13.75",
      apy: "9.13%",
      earned: "+$1,892.45",
      value: "$32,100.75",
    },
    {
      id: "euler-dai",
      protocol: "EULER",
      asset: "DAI",
      balance: "21,762.27",
      apy: "6.39%",
      earned: "+$1,234.56",
      value: "$21,762.27",
    },
    {
      id: "compound-wbtc",
      protocol: "COMPOUND",
      asset: "WBTC",
      balance: "0.438",
      apy: "4.82%",
      earned: "+$756.30",
      value: "$18,950.40",
    },
    {
      id: "moonwell-usdc",
      protocol: "MOONWELL",
      asset: "USDC",
      balance: "15,670.85",
      apy: "8.24%",
      earned: "+$1,145.67",
      value: "$15,670.85",
    },
    {
      id: "venus-bnb",
      protocol: "VENUS",
      asset: "BNB",
      balance: "32.45",
      apy: "5.67%",
      earned: "+$432.10",
      value: "$9,876.25",
    },
  ]

  const selectedPositionData = positions.find((position) => position.id === selectedPosition)

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
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <section className="mb-8">
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Withdraw</h1>
            <p
              className={cn(
                "text-lg font-light leading-relaxed max-w-2xl transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600",
              )}
            >
              Withdraw your assets from active positions. Your earned yields will be included.
            </p>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Withdraw Form */}
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
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Withdraw Assets
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Position Selection */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Select Position</label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-between p-4 h-auto rounded-xl transition-colors duration-200",
                            isDarkMode
                              ? "bg-gray-700/30 border border-gray-600/50 hover:bg-gray-700/50"
                              : "bg-white border border-gray-200 hover:bg-gray-50",
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center",
                                isDarkMode ? "bg-gray-600" : "bg-gray-300",
                              )}
                            >
                              <div className={cn("w-4 h-4 rounded", isDarkMode ? "bg-gray-400" : "bg-gray-500")} />
                            </div>
                            <div className="text-left">
                              <div className="font-medium">
                                {selectedPositionData?.protocol} • {selectedPositionData?.asset}
                              </div>
                              <div className="text-sm text-gray-500">
                                Balance: {selectedPositionData?.balance} {selectedPositionData?.asset}
                              </div>
                            </div>
                          </div>
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className={cn(
                          "w-96 rounded-2xl shadow-2xl backdrop-blur-xl border",
                          isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200",
                        )}
                      >
                        {positions.map((position) => (
                          <DropdownMenuItem
                            key={position.id}
                            className={cn(
                              "cursor-pointer p-4 transition-colors",
                              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100",
                            )}
                            onClick={() => setSelectedPosition(position.id)}
                          >
                            <div className="flex items-center space-x-3 w-full">
                              <div
                                className={cn(
                                  "w-8 h-8 rounded-lg flex items-center justify-center",
                                  isDarkMode ? "bg-gray-600" : "bg-gray-300",
                                )}
                              >
                                <div className={cn("w-4 h-4 rounded", isDarkMode ? "bg-gray-400" : "bg-gray-500")} />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">
                                  {position.protocol} • {position.asset}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {position.balance} {position.asset} • {position.apy} APY
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">{position.value}</div>
                                <div className="text-sm text-green-500">{position.earned}</div>
                              </div>
                            </div>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Amount Input */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Amount</label>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className={cn(
                          "text-2xl font-light h-16 pr-20 rounded-xl border transition-colors duration-300",
                          isDarkMode
                            ? "bg-gray-700/30 border-gray-600/50 text-white placeholder:text-gray-400"
                            : "bg-white border-gray-200 text-black placeholder:text-gray-500",
                        )}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <span className="text-lg font-medium text-gray-500">{selectedPositionData?.asset}</span>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="flex space-x-2">
                        {["25%", "50%", "75%", "Max"].map((percentage) => (
                          <Button
                            key={percentage}
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              if (selectedPositionData) {
                                const balance = Number.parseFloat(selectedPositionData.balance.replace(/,/g, ""))
                                const percent = percentage === "Max" ? 1 : Number.parseInt(percentage) / 100
                                setAmount((balance * percent).toString())
                              }
                            }}
                            className={cn(
                              "text-xs px-3 py-1 rounded-lg transition-colors duration-200",
                              isDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-700"
                                : "text-gray-600 hover:text-black hover:bg-gray-100",
                            )}
                          >
                            {percentage}
                          </Button>
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">
                        Available: {selectedPositionData?.balance} {selectedPositionData?.asset}
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div
                    className={cn(
                      "rounded-lg p-3 flex items-start space-x-3",
                      isDarkMode
                        ? "bg-yellow-900/20 border border-yellow-800/30"
                        : "bg-yellow-50 border border-yellow-200",
                    )}
                  >
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-yellow-600 dark:text-yellow-400 mb-1">Yield Impact</div>
                      <div className={cn("text-xs", isDarkMode ? "text-yellow-300" : "text-yellow-600")}>
                        Withdrawing will stop earning yields on this position. Consider partial withdrawal to maintain
                        exposure.
                      </div>
                    </div>
                  </div>

                  {/* Withdraw Button */}
                  <Button
                    disabled={!amount || Number.parseFloat(amount) <= 0}
                    className={cn(
                      "w-full h-12 text-lg font-medium rounded-xl transition-all duration-300",
                      "hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:hover:scale-100",
                      isDarkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900",
                    )}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Withdraw {amount ? `${amount} ${selectedPositionData?.asset}` : ""}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Transaction Summary */}
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
                  <CardTitle className="text-lg font-medium">Withdrawal Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Position</span>
                      <span className="text-sm font-medium">{selectedPositionData?.protocol}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Asset</span>
                      <span className="text-sm font-medium">{selectedPositionData?.asset}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Amount</span>
                      <span className="text-sm font-medium">
                        {amount || "0"} {selectedPositionData?.asset}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Current APY</span>
                      <span className="text-sm font-medium text-green-500">{selectedPositionData?.apy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Total Earned</span>
                      <span className="text-sm font-medium text-green-500">{selectedPositionData?.earned}</span>
                    </div>
                  </div>

                  <div className={cn("border-t pt-4", isDarkMode ? "border-gray-700" : "border-gray-200")}>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Estimated Gas</span>
                      <span className="text-sm font-medium">~$8.50</span>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "rounded-lg p-3 flex items-start space-x-3",
                      isDarkMode ? "bg-green-900/20 border border-green-800/30" : "bg-green-50 border border-green-200",
                    )}
                  >
                    <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-green-600 dark:text-green-400 mb-1">Yield Earned</div>
                      <div className={cn("text-xs", isDarkMode ? "text-green-300" : "text-green-600")}>
                        You've earned {selectedPositionData?.earned} from this position. This will be included in your
                        withdrawal.
                      </div>
                    </div>
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
