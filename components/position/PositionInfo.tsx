"use client"

import { Button } from "@/components/ui/button"
import { Upload, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import Link from "next/link"
import { Position } from "./types"

interface PositionInfoProps {
    position: Position
    isLoaded: boolean
}

export default function PositionInfo({ position, isLoaded }: PositionInfoProps) {
    const { isDarkMode } = useTheme()

    return (
        <section className="mb-8">
            <div
                className={cn(
                    "transition-all duration-1000 ease-out",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
                            {position.protocol} • {position.asset}
                        </h1>
                        <p
                            className={cn(
                                "text-lg font-light leading-relaxed transition-colors duration-300",
                                isDarkMode ? "text-gray-300" : "text-gray-600",
                            )}
                        >
                            {position.chain} • {position.risk} Risk • Active since {position.depositDate}
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/deposit">
                            <Button
                                className={cn(
                                    "transition-all duration-300 px-6 py-3 rounded-full font-medium",
                                    "hover:scale-[1.02] shadow-lg hover:shadow-xl",
                                    isDarkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900",
                                )}
                            >
                                <Upload className="mr-2 h-4 w-4" />
                                Add More
                            </Button>
                        </Link>
                        <Link href="/withdraw">
                            <Button
                                variant="ghost"
                                className={cn(
                                    "transition-colors duration-200 px-6 py-3 rounded-full font-medium",
                                    isDarkMode
                                        ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                                        : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                                )}
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Withdraw
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
} 