"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useTheme } from "@/providers/themeProvider"
import { ConnectWalletButton } from "@/components/connectWallet"

export default function GlobalHeader() {
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
                        <Link href="/">
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
                        <ConnectWalletButton />
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