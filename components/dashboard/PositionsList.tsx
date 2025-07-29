"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Position {
    id: string
    protocol: string
    asset: string
    amount: string
    apy: string
    earned: string
    isActive: boolean
    trend: string
}

interface PositionsListProps {
    isLoaded: boolean
    isDarkMode: boolean
    showBalance: boolean
    positions: Position[]
}

export default function PositionsList({ isLoaded, isDarkMode, showBalance, positions }: PositionsListProps) {
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
                    <CardTitle className="text-lg font-medium">Active Positions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        {positions.map((position) => (
                            <Link key={position.id} href={`/position/${position.id}`}>
                                <div
                                    className={cn(
                                        "group relative rounded-xl p-4 transition-all duration-300 cursor-pointer",
                                        "hover:scale-[1.01] hover:shadow-lg",
                                        position.isActive
                                            ? isDarkMode
                                                ? "bg-white/5 border border-gray-600/30 hover:bg-white/10"
                                                : "bg-white border border-gray-200 hover:bg-gray-50"
                                            : isDarkMode
                                                ? "bg-gray-700/20 border border-gray-700/30 opacity-60"
                                                : "bg-gray-100/50 border border-gray-200/50 opacity-60",
                                    )}
                                >
                                    <div className="grid grid-cols-4 gap-4 items-center">
                                        <div className="flex items-center space-x-4">
                                            <div
                                                className={cn(
                                                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300",
                                                    position.isActive
                                                        ? isDarkMode
                                                            ? "bg-gray-700"
                                                            : "bg-gray-200"
                                                        : isDarkMode
                                                            ? "bg-gray-800"
                                                            : "bg-gray-300",
                                                )}
                                            >
                                                <div
                                                    className={cn(
                                                        "w-5 h-5 rounded transition-colors duration-300",
                                                        position.isActive
                                                            ? isDarkMode
                                                                ? "bg-gray-400"
                                                                : "bg-gray-500"
                                                            : isDarkMode
                                                                ? "bg-gray-600"
                                                                : "bg-gray-400",
                                                    )}
                                                />
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm uppercase tracking-wider">{position.protocol}</div>
                                                <div className="text-sm text-gray-500">{position.asset}</div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <div className="font-medium">{showBalance ? position.amount : "••••••••"}</div>
                                            <div className="text-sm text-gray-500">{position.apy} APY</div>
                                        </div>

                                        <div className="text-center">
                                            <div
                                                className={cn(
                                                    "font-medium text-sm",
                                                    position.trend === "up" ? "text-green-500" : "text-red-500",
                                                )}
                                            >
                                                {showBalance ? position.earned : "••••••"}
                                            </div>
                                            <div className="text-xs text-gray-500">24h earnings</div>
                                        </div>

                                        <div className="flex justify-end">
                                            <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>

                                    {position.isActive && (
                                        <div
                                            className={cn(
                                                "absolute top-2 right-2 w-2 h-2 rounded-full",
                                                "bg-green-500 animate-pulse",
                                            )}
                                        />
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 