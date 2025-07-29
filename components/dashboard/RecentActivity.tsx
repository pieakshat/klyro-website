"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Activity {
    action: string
    protocol: string
    amount: string
    time: string
    type: string
}

interface RecentActivityProps {
    isLoaded: boolean
    isDarkMode: boolean
    showBalance: boolean
    recentActivity: Activity[]
}

export default function RecentActivity({ isLoaded, isDarkMode, showBalance, recentActivity }: RecentActivityProps) {
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
                    <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "group relative rounded-lg p-3 transition-all duration-300",
                                    "hover:bg-gray-100/50 dark:hover:bg-gray-700/30",
                                )}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="font-medium text-sm mb-1">{activity.action}</div>
                                        <div className="text-xs text-gray-500 mb-2">{activity.protocol}</div>
                                        <div className="text-xs text-gray-400">{activity.time}</div>
                                    </div>
                                    <div
                                        className={cn(
                                            "text-sm font-medium",
                                            activity.type === "optimization" || activity.type === "earning"
                                                ? "text-green-500"
                                                : "text-gray-500",
                                        )}
                                    >
                                        {showBalance ? activity.amount : "••••••"}
                                    </div>
                                </div>

                                <div
                                    className={cn(
                                        "absolute left-0 top-0 bottom-0 w-1 rounded-full transition-opacity duration-300",
                                        "opacity-0 group-hover:opacity-100",
                                        activity.type === "optimization"
                                            ? "bg-blue-500"
                                            : activity.type === "earning"
                                                ? "bg-green-500"
                                                : activity.type === "deposit"
                                                    ? "bg-purple-500"
                                                    : "bg-orange-500",
                                    )}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200/20">
                        <Link href="/activity">
                            <Button variant="ghost" className="w-full text-sm">
                                View All Activity
                                <ChevronRight className="ml-2 h-3 w-3" />
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 