"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface HeroSectionProps {
    isLoaded: boolean
    isDarkMode: boolean
}

export default function HeroSection({ isLoaded, isDarkMode }: HeroSectionProps) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Interactive Sphere */}
                <div
                    className={cn(
                        "transition-all duration-1200 ease-out delay-300",
                        isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
                    )}
                >
                    <div className="relative w-80 h-80 mx-auto group cursor-pointer">
                        {/* Main sphere */}
                        <div
                            className={cn(
                                "absolute inset-0 rounded-full shadow-2xl transition-all duration-700 ease-out",
                                "group-hover:scale-105 group-hover:shadow-3xl",
                                isDarkMode
                                    ? "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 group-hover:from-gray-500 group-hover:via-gray-600 group-hover:to-gray-800"
                                    : "bg-gradient-to-br from-gray-50 via-gray-200 to-gray-400 group-hover:from-gray-100 group-hover:via-gray-300 group-hover:to-gray-500",
                            )}
                        >
                            {/* Subtle highlight */}
                            <div
                                className={cn(
                                    "absolute inset-0 rounded-full transition-all duration-700",
                                    "group-hover:opacity-80",
                                    isDarkMode
                                        ? "bg-gradient-to-t from-transparent via-gray-600/10 to-gray-400/30 group-hover:to-gray-300/40"
                                        : "bg-gradient-to-t from-transparent via-white/10 to-white/40 group-hover:to-white/60",
                                )}
                            />

                            {/* Shimmer effect */}
                            <div
                                className={cn(
                                    "absolute inset-0 rounded-full opacity-0 group-hover:opacity-30",
                                    "bg-gradient-to-r from-transparent via-white/20 to-transparent",
                                    "transform -translate-x-full group-hover:translate-x-full",
                                    "transition-all duration-1500 ease-out",
                                )}
                            />
                        </div>

                        {/* Enhanced orbital rings */}
                        <div className="absolute inset-0 animate-spin-slow group-hover:animate-spin-medium transition-all duration-700">
                            <div
                                className={cn(
                                    "absolute inset-0 rounded-full border transition-all duration-700",
                                    "group-hover:border-opacity-60 group-hover:scale-105",
                                    isDarkMode
                                        ? "border-gray-600/40 group-hover:border-gray-500/50"
                                        : "border-gray-300/40 group-hover:border-gray-400/50",
                                )}
                                style={{ transform: "rotateX(70deg) scale(1.3)" }}
                            />
                        </div>

                        <div className="absolute inset-0 animate-spin-reverse group-hover:animate-spin-reverse-fast transition-all duration-700">
                            <div
                                className={cn(
                                    "absolute inset-0 rounded-full border transition-all duration-700",
                                    "group-hover:border-opacity-50 group-hover:scale-110",
                                    isDarkMode
                                        ? "border-gray-500/30 group-hover:border-gray-400/40"
                                        : "border-gray-400/30 group-hover:border-gray-500/40",
                                )}
                                style={{ transform: "rotateX(110deg) scale(1.5)" }}
                            />
                        </div>

                        {/* Enhanced orbital elements */}
                        <div className="absolute inset-0 animate-spin-very-slow group-hover:animate-spin-slow transition-all duration-700">
                            <div
                                className={cn(
                                    "absolute -top-6 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 transition-all duration-500",
                                    "group-hover:scale-125 group-hover:shadow-lg",
                                    isDarkMode ? "bg-gray-500 group-hover:bg-gray-400" : "bg-gray-400 group-hover:bg-gray-500",
                                )}
                            />
                            <div
                                className={cn(
                                    "absolute top-1/2 -right-6 w-1.5 h-1.5 rounded-full transform -translate-y-1/2 transition-all duration-500",
                                    "group-hover:scale-125 group-hover:shadow-lg",
                                    isDarkMode ? "bg-gray-400 group-hover:bg-gray-300" : "bg-gray-500 group-hover:bg-gray-600",
                                )}
                            />
                            <div
                                className={cn(
                                    "absolute -bottom-6 left-1/2 w-2.5 h-2.5 rounded-full transform -translate-x-1/2 transition-all duration-500",
                                    "group-hover:scale-125 group-hover:shadow-lg",
                                    isDarkMode ? "bg-gray-600 group-hover:bg-gray-500" : "bg-gray-300 group-hover:bg-gray-400",
                                )}
                            />
                            <div
                                className={cn(
                                    "absolute top-1/2 -left-6 w-1.5 h-1.5 rounded-full transform -translate-y-1/2 transition-all duration-500",
                                    "group-hover:scale-125 group-hover:shadow-lg",
                                    isDarkMode ? "bg-gray-500 group-hover:bg-gray-400" : "bg-gray-400 group-hover:bg-gray-500",
                                )}
                            />
                        </div>

                        {/* Subtle glow effect */}
                        <div
                            className={cn(
                                "absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700",
                                "blur-xl",
                                isDarkMode ? "bg-gray-400" : "bg-gray-600",
                            )}
                        />
                    </div>
                </div>

                {/* Right side - Hero Text */}
                <div
                    className={cn(
                        "transition-all duration-1000 ease-out text-left",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    )}
                >
                    <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-none mb-8">
                        Automated Yields
                        <br />
                        <span className="font-medium text-5xl">Across Multiple Chains</span>
                    </h1>

                    <p
                        className={cn(
                            "text-lg md:text-xl font-light leading-relaxed mb-12 transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600",
                        )}
                    >
                        Automated yield optimization that continuously finds the highest returns across DeFi protocols.
                    </p>

                    <div className="flex justify-start">
                        <Link href="/dashboard">
                            <Button
                                size="lg"
                                className={cn(
                                    "transition-all duration-300 px-12 text-lg font-medium rounded-full py-7",
                                    "hover:scale-[1.02] shadow-lg hover:shadow-xl",
                                    isDarkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900",
                                )}
                            >
                                Launch App
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
} 