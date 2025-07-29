"use client"

import { cn } from "@/lib/utils"

interface FeaturesSectionProps {
    isLoaded: boolean
    isDarkMode: boolean
}

export default function FeaturesSection({ isLoaded, isDarkMode }: FeaturesSectionProps) {
    const features = [
        {
            title: "Scan",
            description: "Scans all integrated lending markets in real time. Tracks APR shifts, incentives, and gas costs to surface the best yield opportunities.",
        },
        {
            title: "Score",
            description: "Scores post-fee returns using custom logic. Moves capital only when the upside clearly outweighs total costs.",
        },
        {
            title: "Execution",
            description: "Atomically reallocates funds inside self-custodial accounts. Converts rewards and reinvests automatically for continuous compounding.",
        },
    ]

    return (
        <section className="max-w-4xl mx-auto px-6 py-20">
            <div
                className={cn(
                    "transition-all duration-1000 ease-out delay-900",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Intelligent by Design</h2>
                    <p
                        className={cn(
                            "text-lg font-light max-w-2xl mx-auto transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600",
                        )}
                    >
                        Our logic continuously optimize your capital allocation across DeFi protocols, maximizing returns while minimizing risk.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="text-center p-6">
                            <div
                                className={cn(
                                    "w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300",
                                    isDarkMode ? "bg-gray-800" : "bg-gray-100",
                                )}
                            >
                                <div
                                    className={cn(
                                        "w-6 h-6 rounded-full transition-colors duration-300",
                                        isDarkMode ? "bg-gray-600" : "bg-gray-400",
                                    )}
                                />
                            </div>
                            <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                            <p
                                className={cn(
                                    "text-sm leading-relaxed transition-colors duration-300",
                                    isDarkMode ? "text-gray-400" : "text-gray-600",
                                )}
                            >
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 