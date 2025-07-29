"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"

interface PerformanceChartProps {
    isLoaded: boolean
}

export default function PerformanceChart({ isLoaded }: PerformanceChartProps) {
    const { isDarkMode } = useTheme()

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
                    <CardTitle className="text-lg font-medium">Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 flex items-center justify-center">
                        <div
                            className={cn(
                                "text-center transition-colors duration-300",
                                isDarkMode ? "text-gray-400" : "text-gray-600",
                            )}
                        >
                            <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <div className="text-lg font-medium mb-2">Performance Chart</div>
                            <div className="text-sm">
                                Interactive chart showing position value over time would be displayed here
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 