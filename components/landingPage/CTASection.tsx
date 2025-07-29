"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface CTASectionProps {
    isLoaded: boolean
    isDarkMode: boolean
}

export default function CTASection({ isLoaded, isDarkMode }: CTASectionProps) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            <div
                className={cn(
                    "transition-all duration-1000 ease-out delay-1000",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12 leading-tight">
                        Ready to maximize your yield?
                    </h2>
                    <p
                        className={cn(
                            "text-lg md:text-xl font-light leading-relaxed mb-16 max-w-2xl mx-auto transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600",
                        )}
                    >
                        Start earning in 60 seconds or less.
                    </p>
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
        </section>
    )
} 