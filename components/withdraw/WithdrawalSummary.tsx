"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { Position } from "./types"

interface WithdrawalSummaryProps {
    selectedPosition: string
    amount: string
    positions: Position[]
    isLoaded: boolean
}

export default function WithdrawalSummary({
    selectedPosition,
    amount,
    positions,
    isLoaded,
}: WithdrawalSummaryProps) {
    const { isDarkMode } = useTheme()

    const selectedPositionData = positions.find((position) => position.id === selectedPosition)

    return (
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
                                You&apos;ve earned {selectedPositionData?.earned} from this position. This will be included in your
                                withdrawal.
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 