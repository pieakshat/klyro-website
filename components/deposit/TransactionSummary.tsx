"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { Asset, Protocol } from "./types"

interface TransactionSummaryProps {
    selectedAsset: string
    amount: string
    selectedProtocol: string
    assets: Asset[]
    protocols: Protocol[]
    isLoaded: boolean
}

export default function TransactionSummary({
    selectedAsset,
    amount,
    selectedProtocol,
    assets,
    protocols,
    isLoaded,
}: TransactionSummaryProps) {
    const { isDarkMode } = useTheme()

    const selectedAssetData = assets.find((asset) => asset.symbol === selectedAsset)
    console.log(selectedAssetData);
    const selectedProtocolData = protocols.find((protocol) => protocol.name === selectedProtocol)

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
    )
} 