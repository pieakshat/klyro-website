"use client"

import { cn } from "@/lib/utils"

interface StatsSectionProps {
    isLoaded: boolean
    isDarkMode: boolean
}

export default function StatsSection({ isLoaded, isDarkMode }: StatsSectionProps) {
    const stats = [
        { value: "15.00%", label: "Current APR" },
        { value: "$539M", label: "Capital Optimized" },
        { value: "30,000+", label: "Active Agents" },
        { value: "230K+", label: "Autonomous Transactions" },
    ]

    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            <div
                className={cn(
                    "transition-all duration-1000 ease-out delay-600",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center group"
                            style={{
                                animationDelay: `${800 + index * 100}ms`,
                                opacity: isLoaded ? 1 : 0,
                                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                                transition: "all 0.6s ease-out",
                            }}
                        >
                            <div className="text-3xl md:text-4xl font-light mb-2 tracking-tight">{stat.value}</div>
                            <div
                                className={cn(
                                    "text-sm font-medium uppercase tracking-wide transition-colors duration-300",
                                    isDarkMode ? "text-gray-400" : "text-gray-600",
                                )}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 