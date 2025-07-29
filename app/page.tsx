"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import {
  Header,
  HeroSection,
  StatsSection,
  IntegratedMarketsSection,
  FeaturesSection,
  CTASection,
  Footer,
} from "@/components/landingPage"

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      console.log("scrollY", scrollY)
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "min-h-screen text-black relative transition-colors duration-300",
        isDarkMode ? "dark text-white" : "bg-white",
      )}
      style={{ backgroundColor: isDarkMode ? "#0d0c1d" : undefined }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection isLoaded={isLoaded} isDarkMode={isDarkMode} />

        {/* Stats Section */}
        <StatsSection isLoaded={isLoaded} isDarkMode={isDarkMode} />

        {/* Integrated Markets Section */}
        <IntegratedMarketsSection isLoaded={isLoaded} isDarkMode={isDarkMode} />

        {/* Features Section */}
        <FeaturesSection isLoaded={isLoaded} isDarkMode={isDarkMode} />

        {/* CTA Section */}
        <CTASection isLoaded={isLoaded} isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}