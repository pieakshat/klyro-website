"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ArrowLeft, Moon, Sun, ChevronDown, ExternalLink, LogOut, Upload, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Deposit() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState("USDC")
  const [amount, setAmount] = useState("")
  const [selectedProtocol, setSelectedProtocol] = useState("Auto-Optimize")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const assets = [
    { symbol: "USDC", name: "USD Coin", balance: "12,450.50", price: "$1.00" },
    { symbol: "ETH", name: "Ethereum", balance: "8.25", price: "$2,340.50" },
    { symbol: "USDT", name: "Tether", balance: "5,670.80", price: "$1.00" },
    { symbol: "DAI", name: "Dai Stablecoin", balance: "3,240.90", price: "$1.00" },
    { symbol: "WBTC", name: "Wrapped Bitcoin", balance: "0.45", price: "$43,250.00" },
  ]

  const protocols = [
    { name: "Auto-Optimize", apy: "Best Rate", description: "Automatically find the highest yield" },
    { name: "MORPHO", apy: "7.67%", description: "Lending protocol with competitive rates" },
    { name: "SEAMLESS", apy: "9.13%", description: "High-yield lending on Base" },
    { name: "AAVE", apy: "3.57%", description: "Established DeFi lending protocol" },
    { name: "EULER", apy: "6.39%", description: "Permissionless lending protocol" },
  ]

  const selectedAssetData = assets.find((asset) => asset.symbol === selectedAsset)
  const selectedProtocolData = protocols.find((protocol) => protocol.name === selectedProtocol)

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
            <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Deposit</h1>
            <p
              className={cn(
                "text-lg font-light leading-relaxed max-w-2xl transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600",
              )}
            >
              Deposit your assets to start earning optimized yields across DeFi protocols.
            </p>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Deposit Form */}
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
                    <Upload className="h-5 w-5" />
                    Deposit Assets
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Asset Selection */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Select Asset</label>
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
                                "w-8 h-8 rounded-full flex items-center justify-center",
                                isDarkMode ? "bg-gray-600" : "bg-gray-300",
                              )}
                            >
                              <div className={cn("w-4 h-4 rounded-full", isDarkMode ? "bg-gray-400" : "bg-gray-500")} />
                            </div>
                            <div className="text-left">
                              <div className="font-medium">{selectedAsset}</div>
                              <div className="text-sm text-gray-500">
                                Balance: {selectedAssetData?.balance} {selectedAsset}
                              </div>
                            </div>
                          </div>
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className={cn(
                          "w-80 rounded-2xl shadow-2xl backdrop-blur-xl border",
                          isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200",
                        )}
                      >
                        {assets.map((asset) => (
                          <DropdownMenuItem
                            key={asset.symbol}
                            className={cn(
                              "cursor-pointer p-4 transition-colors",
                              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100",
                            )}
                            onClick={() => setSelectedAsset(asset.symbol)}
                          >
                            <div className="flex items-center space-x-3 w-full">
                              <div
                                className={cn(
                                  "w-8 h-8 rounded-full flex items-center justify-center",
                                  isDarkMode ? "bg-gray-600" : "bg-gray-300",
                                )}
                              >
                                <div
                                  className={cn("w-4 h-4 rounded-full", isDarkMode ? "bg-gray-400" : "bg-gray-500")}
                                />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">{asset.symbol}</div>
                                <div className="text-sm text-gray-500">{asset.name}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">{asset.balance}</div>
                                <div className="text-sm text-gray-500">{asset.price}</div>
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
                        <span className="text-lg font-medium text-gray-500">{selectedAsset}</span>
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
                              if (selectedAssetData) {
                                const balance = Number.parseFloat(selectedAssetData.balance.replace(/,/g, ""))
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
                        Balance: {selectedAssetData?.balance} {selectedAsset}
                      </div>
                    </div>
                  </div>

                  {/* Protocol Selection */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Deposit To</label>
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
                          <div className="text-left">
                            <div className="font-medium">{selectedProtocol}</div>
                            <div className="text-sm text-gray-500">
                              {selectedProtocolData?.apy} • {selectedProtocolData?.description}
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
                        {protocols.map((protocol) => (
                          <DropdownMenuItem
                            key={protocol.name}
                            className={cn(
                              "cursor-pointer p-4 transition-colors",
                              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100",
                            )}
                            onClick={() => setSelectedProtocol(protocol.name)}
                          >
                            <div className="w-full">
                              <div className="flex items-center justify-between mb-1">
                                <div className="font-medium">{protocol.name}</div>
                                <div className="text-sm font-medium text-green-500">{protocol.apy}</div>
                              </div>
                              <div className="text-sm text-gray-500">{protocol.description}</div>
                            </div>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Deposit Button */}
                  <Button
                    disabled={!amount || Number.parseFloat(amount) <= 0}
                    className={cn(
                      "w-full h-12 text-lg font-medium rounded-xl transition-all duration-300",
                      "hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:hover:scale-100",
                      isDarkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900",
                    )}
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    Deposit {amount ? `${amount} ${selectedAsset}` : ""}
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
                  <CardTitle className="text-lg font-medium">Transaction Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Asset</span>
                      <span className="text-sm font-medium">{selectedAsset}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Amount</span>
                      <span className="text-sm font-medium">
                        {amount || "0"} {selectedAsset}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Protocol</span>
                      <span className="text-sm font-medium">{selectedProtocol}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Expected APY</span>
                      <span className="text-sm font-medium text-green-500">{selectedProtocolData?.apy}</span>
                    </div>
                  </div>

                  <div className={cn("border-t pt-4", isDarkMode ? "border-gray-700" : "border-gray-200")}>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Estimated Gas</span>
                      <span className="text-sm font-medium">~$12.50</span>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "rounded-lg p-3 flex items-start space-x-3",
                      isDarkMode ? "bg-blue-900/20 border border-blue-800/30" : "bg-blue-50 border border-blue-200",
                    )}
                  >
                    <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-blue-600 dark:text-blue-400 mb-1">Auto-Optimization</div>
                      <div className={cn("text-xs", isDarkMode ? "text-blue-300" : "text-blue-600")}>
                        Your funds will be automatically moved to the highest yielding protocol when better
                        opportunities arise.
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
