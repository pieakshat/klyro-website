"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, BarChart3, Clock, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { Position } from "./types"

interface PositionStatsProps {
    position: Position
    isLoaded: boolean
}

export default function PositionStats({ position, isLoaded }: PositionStatsProps) {
    const { isDarkMode } = useTheme()

    return (
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
    )
} 