"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Filter, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"

interface MarketsFiltersProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    filterBy: string
    setFilterBy: (filter: string) => void
    sortBy: string
    setSortBy: (sort: string) => void
    isLoaded: boolean
}

export default function MarketsFilters({
    searchQuery,
    setSearchQuery,
    filterBy,
    setFilterBy,
    sortBy,
    setSortBy,
    isLoaded,
}: MarketsFiltersProps) {
    const { isDarkMode } = useTheme()

    return (
        <section className="mb-8">
            <div
                className={cn(
                    "transition-all duration-1000 ease-out delay-200",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
            >
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <div className="flex flex-col sm:flex-row gap-4 flex-1">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search assets or protocols..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={cn(
                                    "pl-10 rounded-xl border transition-colors duration-300",
                                    isDarkMode
                                        ? "bg-gray-800/40 border-gray-700/50 text-white placeholder:text-gray-400"
                                        : "bg-gray-50/80 border-gray-200/60 text-black placeholder:text-gray-500",
                                )}
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "transition-colors duration-200 px-4 py-2 rounded-xl",
                                        isDarkMode
                                            ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                                            : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                                    )}
                                >
                                    <Filter className="w-4 h-4 mr-2" />
                                    Filter
                                    <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className={cn(
                                    "rounded-2xl shadow-2xl backdrop-blur-xl border",
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
                                    All Markets
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setFilterBy("featured")}
                                >
                                    Featured
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setFilterBy("high-apy")}
                                >
                                    High APY (&gt;8%)
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setFilterBy("low-risk")}
                                >
                                    Low Risk
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "transition-colors duration-200 px-4 py-2 rounded-xl",
                                    isDarkMode
                                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                                        : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                                )}
                            >
                                Sort by APY
                                <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className={cn(
                                "rounded-2xl shadow-2xl backdrop-blur-xl border",
                                isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200",
                            )}
                        >
                            <DropdownMenuItem
                                className={cn(
                                    "cursor-pointer font-medium transition-colors",
                                    isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                )}
                                onClick={() => setSortBy("apy")}
                            >
                                APY (High to Low)
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className={cn(
                                    "cursor-pointer font-medium transition-colors",
                                    isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                )}
                                onClick={() => setSortBy("tvl")}
                            >
                                TVL (High to Low)
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className={cn(
                                    "cursor-pointer font-medium transition-colors",
                                    isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                )}
                                onClick={() => setSortBy("asset")}
                            >
                                Asset (A-Z)
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </section>
    )
} 