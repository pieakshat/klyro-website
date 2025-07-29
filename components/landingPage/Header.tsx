"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"

export default function Header() {
    const { isDarkMode, toggleDarkMode } = useTheme()

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300",
                isDarkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-100",
            )}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className={cn(
                        "text-xl font-light transition-colors duration-300",
                        isDarkMode ? "text-white" : "text-black"
                    )}>
                        Klyro
                    </h1>
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
    )
} 