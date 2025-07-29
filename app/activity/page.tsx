"use client"

import { useState, useEffect } from "react"
import { unstable_noStore as noStore } from 'next/cache'
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import {
  ActivityInfo,
  ActivityFilters,
  ActivityList,
  activitiesData,
} from "@/components/activity"
import { GlobalHeader } from "@/components/dashboard"
import type { Activity } from "@/components/activity"

export default function Activity() {
  noStore()

  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterBy, setFilterBy] = useState("all")
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const activities = activitiesData

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.protocol.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterBy === "all" || activity.type === filterBy
    return matchesSearch && matchesFilter
  })



  return (
    <div
      className={cn(
        "min-h-screen text-black relative transition-colors duration-300",
        isDarkMode ? "dark text-white" : "bg-white",
      )}
      style={{ backgroundColor: isDarkMode ? "#0d0c1d" : undefined }}
    >
      <GlobalHeader />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <ActivityInfo isLoaded={isLoaded} />

        <ActivityFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          isLoaded={isLoaded}
        />

        <ActivityList activities={filteredActivities} isLoaded={isLoaded} />
      </main>
    </div>
  )
}
