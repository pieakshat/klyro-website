"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
    ArrowLeft,
    Moon,
    Sun,
    ChevronDown,
    ExternalLink,
    LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import Link from "next/link"

interface PositionHeaderProps {
    selectedNetwork: string
    setSelectedNetwork: (network: string) => void
}

export default function PositionHeader({ selectedNetwork, setSelectedNetwork }: PositionHeaderProps) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const { isDarkMode, toggleDarkMode } = useTheme()

    return (
        <header
            className={cn(
                "sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300",
                isDarkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-100",
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <Link href="/dashboard">
                            <Button
                                variant="ghost"
                                className={cn(
                                    "transition-colors duration-200 p-3 h-auto rounded-xl",
                                    isDarkMode
                                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                                        : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                                )}
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button
                                variant="ghost"
                                className={cn(
                                    "transition-colors duration-200 px-6 py-3 h-auto rounded-xl",
                                    isDarkMode
                                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                                        : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                                )}
                            >
                                <span className="text-sm font-medium">Dashboard</span>
                            </Button>
                        </Link>
                        <Link href="/markets">
                            <Button
                                variant="ghost"
                                className={cn(
                                    "transition-colors duration-200 px-6 py-3 h-auto rounded-xl",
                                    isDarkMode
                                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                                        : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                                )}
                            >
                                <span className="text-sm font-medium">Markets</span>
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "transition-colors duration-200 px-6 py-3 h-auto rounded-xl",
                                        isDarkMode
                                            ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                                            : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                                    )}
                                >
                                    <span className="text-sm font-medium">{selectedNetwork}</span>
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
                                    onClick={() => setSelectedNetwork("Ethereum")}
                                >
                                    Ethereum
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setSelectedNetwork("Starknet")}
                                >
                                    Starknet
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setSelectedNetwork("Base")}
                                >
                                    Base
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        "cursor-pointer font-medium transition-colors",
                                        isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-700",
                                    )}
                                    onClick={() => setSelectedNetwork("Mantle")}
                                >
                                    Mantle
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "transition-colors duration-200 px-6 py-3 h-auto rounded-xl",
                                        isDarkMode
                                            ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                                            : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                                    )}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={cn("w-2 h-2 rounded-full", isDarkMode ? "bg-white" : "bg-black")} />
                                        <span className="text-sm font-medium">0xABF2...E65D</span>
                                        <ChevronDown className="w-4 h-4 opacity-50" />
                                    </div>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className={cn(
                                    "w-80 rounded-2xl shadow-2xl p-8 backdrop-blur-xl border",
                                    isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200",
                                )}
                            >
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <span className={cn("text-sm font-medium", isDarkMode ? "text-gray-400" : "text-gray-600")}>
                                            Status
                                        </span>
                                        <div className="flex items-center space-x-2">
                                            <div className={cn("w-2 h-2 rounded-full", isDarkMode ? "bg-white" : "bg-black")} />
                                            <span className="text-sm font-medium">Connected</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className={cn("text-sm font-medium", isDarkMode ? "text-gray-400" : "text-gray-600")}>
                                                Address
                                            </span>
                                            <span className="text-sm font-medium">0xABF2...E65D</span>
                                        </div>
                                    </div>
                                    <div className={cn("pt-6 border-t space-y-3", isDarkMode ? "border-gray-700" : "border-gray-200")}>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "w-full justify-start font-medium transition-colors",
                                                isDarkMode
                                                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                                    : "text-gray-600 hover:text-black hover:bg-gray-100",
                                            )}
                                        >
                                            <ExternalLink className="w-4 h-4 mr-3" />
                                            View on Explorer
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "w-full justify-start font-medium transition-colors",
                                                isDarkMode
                                                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                                    : "text-gray-600 hover:text-black hover:bg-gray-100",
                                            )}
                                        >
                                            <LogOut className="w-4 h-4 mr-3" />
                                            Disconnect
                                        </Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleDarkMode}
                            className={cn(
                                "p-2 transition-colors duration-200",
                                isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-50",
                            )}
                        >
                            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
} 