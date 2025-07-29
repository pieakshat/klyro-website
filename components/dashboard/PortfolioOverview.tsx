"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface PortfolioOverviewProps {
    isLoaded: boolean
    isDarkMode: boolean
    showBalance: boolean
    setShowBalance: (show: boolean) => void
    portfolioData: {
        totalValue: string
        totalChange: string
        totalChangePercent: string
        isPositive: boolean
    }
    positions: Array<{
        isActive: boolean
    }>
}

export default function PortfolioOverview({
    isLoaded,
    isDarkMode,
    showBalance,
    setShowBalance,
    portfolioData,
    positions,
}: PortfolioOverviewProps) {
    return (
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
    )
} 