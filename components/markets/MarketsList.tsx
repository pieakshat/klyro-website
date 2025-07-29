"use client"

import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import MarketCard from "./MarketCard"
import { Market } from "./types"

interface MarketsListProps {
    markets: Market[]
    isLoaded: boolean
}

export default function MarketsList({ markets, isLoaded }: MarketsListProps) {
    const { isDarkMode } = useTheme()

    return (
        <section>
            <div
                className={cn(
                    "transition-all duration-1000 ease-out delay-400",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
            >
                <div className="grid gap-6">
                    {markets.map((market, index) => (
                        <MarketCard
                            key={market.id}
                            market={market}
                            index={index}
                            isLoaded={isLoaded}
                        />
                    ))}
                </div>

                {markets.length === 0 && (
                    <div className="text-center py-12">
                        <div
                            className={cn(
                                "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300",
                                isDarkMode ? "bg-gray-800" : "bg-gray-100",
                            )}
                        >
                            <Search className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">No markets found</h3>
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
            </div>
        </section>
    )
} 