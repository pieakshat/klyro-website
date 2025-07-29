"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"

interface WithdrawInfoProps {
    isLoaded: boolean
}

export default function WithdrawInfo({ isLoaded }: WithdrawInfoProps) {
    const { isDarkMode } = useTheme()

    return (
        <section className="mb-8">
            <div
                className={cn(
                    "transition-all duration-1000 ease-out",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
            >
                <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Withdraw</h1>
                <p
                    className={cn(
                        "text-lg font-light leading-relaxed max-w-2xl transition-colors duration-300",
                        isDarkMode ? "text-gray-300" : "text-gray-600",
                    )}
                >
                    Withdraw your assets from active positions. Your earned yields will be included.
                </p>
            </div>
        </section>
    )
} 