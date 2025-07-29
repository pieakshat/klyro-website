"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isCardsMerged, setIsCardsMerged] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      console.log("scrollY", scrollY)
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const stats = [
    { value: "15.00%", label: "Current APR" },
    { value: "$539M", label: "Capital Optimized" },
    { value: "30,000+", label: "Active Agents" },
    { value: "230K+", label: "Autonomous Transactions" },
  ]

  return (
    <div
      className={cn(
        "min-h-screen text-black relative transition-colors duration-300",
        isDarkMode ? "dark text-white" : "bg-white",
      )}
      style={{ backgroundColor: isDarkMode ? "#0d0c1d" : undefined }}
    >
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300",
          isDarkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-100",
        )}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">

          </div>

          <div className="flex items-center space-x-4">
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
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Combined Visual and Hero Section - side by side */}
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

        {/* Stats Section */}
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

        {/* Integrated Markets Section */}
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
                  {[
                    { name: "USDT", protocol: "AAVE", apy: "3.57%", selected: false, trend: "up" },
                    { name: "DAI", protocol: "EULER", apy: "6.39%", selected: false, trend: "down" },
                    { name: "USDC", protocol: "MORPHO", apy: "7.67%", selected: true, trend: "up" },
                    { name: "USDC", protocol: "MOONWELL", apy: "7.48%", selected: false, trend: "up" },
                    { name: "ETH", protocol: "SEAMLESS", apy: "9.13%", selected: false, trend: "stable" },
                  ].map((asset, index) => (
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

        {/* Features Section */}
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
              <div className="text-center p-6">
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
                <h3 className="text-lg font-medium mb-2">Scan</h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-400" : "text-gray-600",
                  )}
                >
                  Scans all integrated lending markets in real time. Tracks APR shifts, incentives, and gas costs to surface the best yield opportunities.


                </p>
              </div>

              <div className="text-center p-6">
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
                <h3 className="text-lg font-medium mb-2">Score</h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-400" : "text-gray-600",
                  )}
                >
                  Scores post-fee returns using custom logic. Moves capital only when the upside clearly outweighs total costs.

                </p>
              </div>

              <div className="text-center p-6">
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
                <h3 className="text-lg font-medium mb-2">Execution</h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-400" : "text-gray-600",
                  )}
                >
                  Atomically reallocates funds inside self-custodial accounts. Converts rewards and reinvests automatically for continuous compounding.

                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>

      {/* Footer */}
      <footer
        className={cn(
          "border-t transition-colors duration-300",
          isDarkMode ? "border-gray-800 bg-gray-900/50" : "border-gray-100 bg-gray-50/50",
        )}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              className={cn(
                "text-sm mb-4 md:mb-0 transition-colors duration-300",
                isDarkMode ? "text-gray-400" : "text-gray-600",
              )}
            >
              © 2024 Klyro.
            </div>
            <div className="flex items-center space-x-4">
              {/* Telegram */}
              <a
                href="#"
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  "hover:scale-110",
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-black",
                )}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.268 8.368-1.268 8.368-.16.708-.534.708-.534.708s-2.803-.16-4.256-.16c-1.454 0-4.256.16-4.256.16s-.374 0-.534-.708c0 0-.372-1.64-1.268-8.368 0 0-.727-4.87-.896-6.728-.16-1.858.16-2.566.16-2.566s.374-.708 1.268-.708c.894 0 10.24 0 11.134 0 .894 0 1.268.708 1.268.708s.32.708.16 2.566z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  "hover:scale-110",
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-black",
                )}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}