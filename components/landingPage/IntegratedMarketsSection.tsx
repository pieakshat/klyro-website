"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface IntegratedMarketsSectionProps {
    isLoaded: boolean
    isDarkMode: boolean
}

export default function IntegratedMarketsSection({ isLoaded, isDarkMode }: IntegratedMarketsSectionProps) {
    const [isCardsMerged, setIsCardsMerged] = useState(false)

    const marketAssets = [
        { name: "USDT", protocol: "AAVE", apy: "3.57%", selected: false, trend: "up" },
        { name: "DAI", protocol: "EULER", apy: "6.39%", selected: false, trend: "down" },
        { name: "USDC", protocol: "MORPHO", apy: "7.67%", selected: true, trend: "up" },
        { name: "USDC", protocol: "MOONWELL", apy: "7.48%", selected: false, trend: "up" },
        { name: "ETH", protocol: "SEAMLESS", apy: "9.13%", selected: false, trend: "stable" },
    ]

    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            <div
                className={cn(
                    "transition-all duration-1000 ease-out delay-1200",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Integrated Markets</h2>
                    <p
                        className={cn(
                            "text-lg font-light max-w-2xl mx-auto transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600",
                        )}
                    >
                        Continuously monitoring rates across protocols and adjust positions in real-time. New integrations added automatically upon approval.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Individual Cards */}
                        <div
                            className={cn(
                                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 transition-all duration-1000 ease-in-out",
                                isCardsMerged ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100",
                            )}
                        >
                            {marketAssets.map((asset, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "group relative rounded-2xl px-6 py-8 transition-all duration-500 cursor-pointer",
                                        "transform-gpu will-change-transform",
                                        asset.selected
                                            ? isDarkMode
                                                ? "bg-white text-black scale-105 shadow-2xl shadow-white/10"
                                                : "bg-black text-white scale-105 shadow-2xl shadow-black/20"
                                            : isDarkMode
                                                ? "bg-gray-800/40 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600/60"
                                                : "bg-gray-50/80 border border-gray-200/60 hover:bg-gray-100/90 hover:border-gray-300/70",
                                        "hover:scale-102 hover:shadow-lg hover:z-10",
                                        asset.selected ? "animate-pulse-subtle" : "",
                                    )}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                >
                                    {/* Subtle background gradient */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                                            isDarkMode
                                                ? "bg-gradient-to-br from-gray-600/10 via-transparent to-gray-800/10"
                                                : "bg-gradient-to-br from-gray-100/30 via-transparent to-gray-200/30",
                                        )}
                                    />

                                    <div className="relative z-10 text-center">
                                        <div
                                            className={cn(
                                                "w-12 h-12 mx-auto mb-6 rounded-xl flex items-center justify-center transition-all duration-300",
                                                "group-hover:scale-105",
                                                asset.selected
                                                    ? isDarkMode
                                                        ? "bg-gray-200 group-hover:bg-gray-100"
                                                        : "bg-gray-800 group-hover:bg-gray-700"
                                                    : isDarkMode
                                                        ? "bg-gray-700/50 group-hover:bg-gray-600/60"
                                                        : "bg-gray-200 group-hover:bg-gray-300",
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "w-6 h-6 rounded transition-all duration-300",
                                                    "group-hover:scale-110",
                                                    asset.selected
                                                        ? isDarkMode
                                                            ? "bg-black"
                                                            : "bg-white"
                                                        : isDarkMode
                                                            ? "bg-gray-500 group-hover:bg-gray-400"
                                                            : "bg-gray-400 group-hover:bg-gray-500",
                                                )}
                                            />
                                        </div>

                                        <h3
                                            className={cn(
                                                "text-sm font-medium uppercase mb-2 tracking-wider transition-all duration-300",
                                                "group-hover:tracking-widest",
                                                asset.selected
                                                    ? isDarkMode
                                                        ? "text-black"
                                                        : "text-white"
                                                    : isDarkMode
                                                        ? "text-white group-hover:text-gray-100"
                                                        : "text-black group-hover:text-gray-900",
                                            )}
                                        >
                                            {asset.name}
                                        </h3>

                                        <div
                                            className={cn(
                                                "text-xs mb-4 transition-all duration-300",
                                                asset.selected
                                                    ? isDarkMode
                                                        ? "text-black/70"
                                                        : "text-white/70"
                                                    : isDarkMode
                                                        ? "text-gray-400"
                                                        : "text-gray-500",
                                            )}
                                        >
                                            via {asset.protocol}
                                        </div>

                                        <div className="relative">
                                            <div
                                                className={cn(
                                                    "text-lg font-light transition-all duration-300 relative",
                                                    "group-hover:font-medium",
                                                    asset.selected
                                                        ? isDarkMode
                                                            ? "text-black/90"
                                                            : "text-white/90"
                                                        : isDarkMode
                                                            ? "text-gray-300 group-hover:text-white"
                                                            : "text-gray-600 group-hover:text-black",
                                                )}
                                            >
                                                {asset.apy}
                                            </div>
                                        </div>

                                        {/* Status indicator */}
                                        <div
                                            className={cn(
                                                "absolute top-2 right-2 w-2 h-2 rounded-full transition-all duration-300",
                                                "opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100",
                                                asset.selected ? "bg-green-500 animate-pulse" : isDarkMode ? "bg-gray-500" : "bg-gray-400",
                                            )}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Merged Vault Card */}
                        <div
                            className={cn(
                                "absolute inset-0 transition-all duration-1000 ease-in-out",
                                isCardsMerged ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none",
                            )}
                        >
                            <div className="flex justify-center">
                                <div
                                    className={cn(
                                        "group relative rounded-2xl px-12 py-16 transition-all duration-700 cursor-pointer",
                                        "transform-gpu will-change-transform w-full max-w-md",
                                        "hover:scale-105 hover:shadow-3xl",
                                        isDarkMode
                                            ? "bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black shadow-2xl shadow-white/20"
                                            : "bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white shadow-2xl shadow-black/30",
                                    )}
                                >
                                    {/* Magic sparkle effects */}
                                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                        {[...Array(6)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={cn(
                                                    "absolute w-1 h-1 rounded-full animate-pulse",
                                                    isDarkMode ? "bg-gray-400" : "bg-gray-300",
                                                )}
                                                style={{
                                                    left: `${20 + i * 15}%`,
                                                    top: `${10 + (i % 3) * 30}%`,
                                                    animationDelay: `${i * 200}ms`,
                                                    animationDuration: "2s",
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Magical glow effect */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700",
                                            "bg-gradient-to-r from-transparent via-white/10 to-transparent",
                                            "animate-pulse",
                                        )}
                                    />

                                    <div className="relative z-10 text-center">
                                        <div
                                            className={cn(
                                                "w-16 h-16 mx-auto mb-8 rounded-2xl flex items-center justify-center transition-all duration-500",
                                                "group-hover:scale-110 group-hover:rotate-12",
                                                isDarkMode ? "bg-black/10 group-hover:bg-black/20" : "bg-white/10 group-hover:bg-white/20",
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "w-8 h-8 rounded-xl transition-all duration-500",
                                                    "group-hover:scale-125 group-hover:rotate-45",
                                                    isDarkMode ? "bg-black" : "bg-white",
                                                )}
                                            />
                                        </div>

                                        <h3
                                            className={cn(
                                                "text-xl font-medium mb-6 tracking-wide transition-all duration-500 flex items-center justify-center gap-2",
                                                "group-hover:tracking-wider",
                                                isDarkMode ? "text-black" : "text-white",
                                            )}
                                        >
                                            Klyro Vault
                                            <span
                                                className={cn(
                                                    "inline-block transition-all duration-1000 ease-in-out",
                                                    "animate-pulse group-hover:scale-110 group-hover:rotate-12",
                                                    isDarkMode ? "text-black" : "text-white",
                                                )}
                                                style={{
                                                    filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))",
                                                    animation: "sparkle 3s ease-in-out infinite",
                                                }}
                                            >
                                                ✦
                                            </span>
                                        </h3>

                                        <div className="space-y-3 mb-6">
                                            <div
                                                className={cn(
                                                    "text-3xl font-light transition-all duration-500",
                                                    "group-hover:font-medium group-hover:scale-105",
                                                    isDarkMode ? "text-black/90" : "text-white/90",
                                                )}
                                            >
                                                12.85%
                                            </div>
                                        </div>

                                        {/* Magic indicator */}
                                        <div
                                            className={cn(
                                                "absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-500",
                                                "animate-pulse group-hover:scale-125",
                                                "bg-gradient-to-r from-yellow-400 to-orange-500",
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="flex justify-center mt-16">
                        <Button
                            onClick={() => setIsCardsMerged(!isCardsMerged)}
                            variant="ghost"
                            className={cn(
                                "group relative px-8 py-3 rounded-full transition-all duration-500",
                                "hover:scale-105 active:scale-95",
                                isCardsMerged
                                    ? // When showing "Show Individual Markets" (merged state)
                                    isDarkMode
                                        ? "bg-black border border-gray-800 hover:bg-white hover:border-white text-white hover:text-black"
                                        : "bg-black border border-gray-800 hover:bg-white hover:border-white text-white hover:text-black"
                                    : // When showing "Merge into Vault" (individual state)
                                    isDarkMode
                                        ? "bg-gray-800/40 border border-gray-700/50 hover:bg-white hover:border-white text-white hover:text-black"
                                        : "bg-gray-50/80 border border-gray-200/60 hover:bg-black hover:border-black text-black hover:text-white",
                            )}
                        >
                            {/* Magic sparkle on button */}
                            <div
                                className={cn(
                                    "absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                                    "bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent",
                                )}
                            />

                            <span className="relative z-10 font-medium transition-all duration-300 group-hover:tracking-wider flex items-center gap-2">
                                {isCardsMerged ? (
                                    "Show Individual Markets"
                                ) : (
                                    <>
                                        Show Magic
                                        <span
                                            className={cn(
                                                "inline-block transition-all duration-1000 ease-in-out",
                                                "animate-pulse hover:scale-110 hover:rotate-12",
                                            )}
                                            style={{
                                                filter: "drop-shadow(0 0 1px rgba(255, 255, 255, 0.2))",
                                                animation: "sparkle 3s ease-in-out infinite",
                                            }}
                                        >
                                            ✦
                                        </span>
                                    </>
                                )}
                            </span>

                            {/* Button glow effect */}
                            <div
                                className={cn(
                                    "absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                                    isCardsMerged ? (isDarkMode ? "bg-white" : "bg-white") : isDarkMode ? "bg-white" : "bg-black",
                                )}
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 