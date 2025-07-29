"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"

interface ActivityFiltersProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    filterBy: string
    setFilterBy: (filter: string) => void
    isLoaded: boolean
}

export default function ActivityFilters({
    searchQuery,
    setSearchQuery,
    filterBy,
    setFilterBy,
    isLoaded,
}: ActivityFiltersProps) {
    const { isDarkMode } = useTheme()

    return (
        <section className="mb-8">
            <div
                className={cn(
                    "transition-all duration-1000 ease-out delay-300",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search Input */}
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search activities..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={cn(
                                    "pl-10 transition-colors duration-300",
                                    isDarkMode
                                        ? "bg-gray-700/30 border-gray-600/50 text-white placeholder:text-gray-400"
                                        : "bg-white border-gray-200 text-black placeholder:text-gray-500",
                                )}
                            />
                        </div>
                    </div>

                    {/* Filter Dropdown */}
                    <div className="sm:w-48">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-between transition-colors duration-200",
                                        isDarkMode
                                            ? "bg-gray-700/30 border border-gray-600/50 hover:bg-gray-700/50"
                                            : "bg-white border border-gray-200 hover:bg-gray-50",
                                    )}
                                >
                                    <span className="text-sm font-medium">
                                        {filterBy === "all" ? "All Activities" : filterBy.charAt(0).toUpperCase() + filterBy.slice(1)}
                                    </span>
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className={cn(
                                    "w-48 rounded-2xl shadow-2xl backdrop-blur-xl border",
                                    isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200",
                                )}
                            >
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setFilterBy("all")}
                                >
                                    All Activities
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setFilterBy("optimization")}
                                >
                                    Optimization
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setFilterBy("deposit")}
                                >
                                    Deposit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setFilterBy("withdraw")}
                                >
                                    Withdraw
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setFilterBy("earning")}
                                >
                                    Earning
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setFilterBy("rebalance")}
                                >
                                    Rebalance
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </section>
    )
} 