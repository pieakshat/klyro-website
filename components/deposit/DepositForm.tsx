"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Upload, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { Asset, Protocol } from "./types"

interface DepositFormProps {
    selectedAsset: string
    setSelectedAsset: (asset: string) => void
    amount: string
    setAmount: (amount: string) => void
    selectedProtocol: string
    setSelectedProtocol: (protocol: string) => void
    assets: Asset[]
    protocols: Protocol[]
    isLoaded: boolean
}

export default function DepositForm({
    selectedAsset,
    setSelectedAsset,
    amount,
    setAmount,
    selectedProtocol,
    setSelectedProtocol,
    assets,
    protocols,
    isLoaded,
}: DepositFormProps) {
    const { isDarkMode } = useTheme()

    const selectedAssetData = assets.find((asset) => asset.symbol === selectedAsset)
    const selectedProtocolData = protocols.find((protocol) => protocol.name === selectedProtocol)

    return (
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
    )
} 