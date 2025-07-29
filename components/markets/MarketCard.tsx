"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import Link from "next/link"
import { Market } from "./types"

interface MarketCardProps {
    market: Market
    index: number
    isLoaded: boolean
}

export default function MarketCard({ market, index, isLoaded }: MarketCardProps) {
    const { isDarkMode } = useTheme()

    return (
        <Card
            className={cn(
                "group transition-all duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-lg",
                isDarkMode ? "bg-gray-800/40 border-gray-700/50" : "bg-gray-50/80 border-gray-200/60",
            )}
            style={{
                animationDelay: `${index * 50}ms`,
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out",
            }}
        >
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div
                            className={cn(
                                "w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300",
                                isDarkMode ? "bg-gray-700" : "bg-gray-200",
                            )}
                        >
                            <div
                                className={cn(
                                    "w-6 h-6 rounded transition-colors duration-300",
                                    isDarkMode ? "bg-gray-400" : "bg-gray-500",
                                )}
                            />
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <h3 className="font-medium text-lg uppercase tracking-wider">{market.asset}</h3>
                                {market.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                            </div>
                            <div className="text-sm text-gray-500">
                                via {market.protocol} • {market.chain}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-8">
                        <div className="text-center">
                            <div className="text-sm font-medium mb-1 text-gray-500">APY</div>
                            <div className="text-2xl font-light">{market.apy}</div>
                            <div
                                className={cn(
                                    "text-xs flex items-center justify-center gap-1",
                                    market.trend === "up" ? "text-green-500" : "text-red-500",
                                )}
                            >
                                {market.trend === "up" ? (
                                    <TrendingUp className="h-3 w-3" />
                                ) : (
                                    <TrendingDown className="h-3 w-3" />
                                )}
                                {market.change24h}
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-sm font-medium mb-1 text-gray-500">TVL</div>
                            <div className="text-lg font-light">{market.tvl}</div>
                            <div className="text-xs text-gray-400">Total Value</div>
                        </div>

                        <div className="text-center">
                            <div className="text-sm font-medium mb-1 text-gray-500">Liquidity</div>
                            <div className="text-lg font-light">{market.liquidity}</div>
                            <div className="text-xs text-gray-400">Available</div>
                        </div>

                        <div className="text-center">
                            <div className="text-sm font-medium mb-1 text-gray-500">Risk</div>
                            <div
                                className={cn(
                                    "text-sm font-medium px-2 py-1 rounded-full",
                                    market.risk === "Low"
                                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                        : market.risk === "Medium"
                                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                                )}
                            >
                                {market.risk}
                            </div>
                        </div>

                        <Link href={`/deposit?asset=${market.asset}&protocol=${market.protocol}`}>
                            <Button
                                className={cn(
                                    "transition-all duration-300 px-6 py-2 rounded-full font-medium",
                                    "hover:scale-[1.02] shadow-lg hover:shadow-xl",
                                    isDarkMode
                                        ? "bg-white text-black hover:bg-gray-100"
                                        : "bg-black text-white hover:bg-gray-900",
                                )}
                            >
                                Supply
                            </Button>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
} 