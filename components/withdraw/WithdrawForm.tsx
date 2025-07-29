"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, ChevronDown, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { Position } from "./types"

interface WithdrawFormProps {
    selectedPosition: string
    setSelectedPosition: (position: string) => void
    amount: string
    setAmount: (amount: string) => void
    positions: Position[]
    isLoaded: boolean
}

export default function WithdrawForm({
    selectedPosition,
    setSelectedPosition,
    amount,
    setAmount,
    positions,
    isLoaded,
}: WithdrawFormProps) {
    const { isDarkMode } = useTheme()

    const selectedPositionData = positions.find((position) => position.id === selectedPosition)

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
    )
} 