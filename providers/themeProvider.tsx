"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextType {
    isDarkMode: boolean
    toggleDarkMode: () => void
    setDarkMode: (dark: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        console.log("prefersDark: ", prefersDark)

        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark")
        } else {
            setIsDarkMode(prefersDark)
        }

        setIsLoaded(true)
    }, [])

    useEffect(() => {
        // Save theme to localStorage whenever it changes
        if (isLoaded) {
            localStorage.setItem("theme", isDarkMode ? "dark" : "light")

            // Apply theme to document
            if (isDarkMode) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    }, [isDarkMode, isLoaded])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const setDarkMode = (dark: boolean) => {
        setIsDarkMode(dark)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
} 