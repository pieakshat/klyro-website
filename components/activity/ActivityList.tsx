"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import { Activity } from "./types"
import { getActivityIcon, getActivityColor } from "./utils"

interface ActivityListProps {
    activities: Activity[]
    isLoaded: boolean
}

export default function ActivityList({ activities, isLoaded }: ActivityListProps) {
    const { isDarkMode } = useTheme()

    return (
        <section>
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
                        <CardTitle className="text-lg font-medium">Transaction History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {activities.map((activity, index) => (
                                <div
                                    key={activity.id}
                                    className={cn(
                                        "group relative rounded-lg p-4 transition-all duration-300",
                                        "hover:bg-gray-100/50 dark:hover:bg-gray-700/30",
                                    )}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        opacity: isLoaded ? 1 : 0,
                                        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                                        transition: "all 0.6s ease-out",
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div
                                                className={cn(
                                                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300",
                                                    isDarkMode ? "bg-gray-700" : "bg-gray-200",
                                                )}
                                            >
                                                <div className={cn(getActivityColor(activity.type))}>{getActivityIcon(activity.type)}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm mb-1">{activity.action}</div>
                                                <div className="text-xs text-gray-500 mb-1">{activity.protocol}</div>
                                                <div className="text-xs text-gray-400">{activity.time}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="text-right">
                                                <div
                                                    className={cn(
                                                        "font-medium text-sm",
                                                        activity.type === "optimization" || activity.type === "earning"
                                                            ? "text-green-500"
                                                            : activity.type === "withdraw"
                                                                ? "text-orange-500"
                                                                : "text-gray-500",
                                                    )}
                                                >
                                                    {activity.amount}
                                                </div>
                                                <div className="text-xs text-gray-400">
                                                    {activity.status === "completed" ? "Completed" : "Pending"}
                                                </div>
                                            </div>

                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className={cn(
                                                    "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                    isDarkMode
                                                        ? "text-gray-400 hover:text-white hover:bg-gray-700"
                                                        : "text-gray-600 hover:text-black hover:bg-gray-100",
                                                )}
                                            >
                                                <ExternalLink className="h-3 w-3" />
                                            </Button>
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
                                                        : activity.type === "withdraw"
                                                            ? "bg-orange-500"
                                                            : "bg-yellow-500",
                                        )}
                                    />
                                </div>
                            ))}
                        </div>

                        {activities.length === 0 && (
                            <div className="text-center py-12">
                                <div
                                    className={cn(
                                        "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300",
                                        isDarkMode ? "bg-gray-800" : "bg-gray-100",
                                    )}
                                >
                                    <Search className="h-8 w-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium mb-2">No activities found</h3>
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
                    </CardContent>
                </Card>
            </div>
        </section>
    )
} 