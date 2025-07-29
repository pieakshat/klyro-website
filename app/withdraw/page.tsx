"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import {
  WithdrawHeader,
  WithdrawInfo,
  WithdrawForm,
  WithdrawalSummary,
  positionsData,
} from "@/components/withdraw"

export default function Withdraw() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum")
  const [selectedPosition, setSelectedPosition] = useState("morpho-usdc")
  const [amount, setAmount] = useState("")
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const positions = positionsData

  const selectedPositionData = positions.find((position) => position.id === selectedPosition)

  return (
    <div
      className={cn(
        "min-h-screen text-black relative transition-colors duration-300",
        isDarkMode ? "dark text-white" : "bg-white",
      )}
      style={{ backgroundColor: isDarkMode ? "#0d0c1d" : undefined }}
    >
      <WithdrawHeader selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <WithdrawInfo isLoaded={isLoaded} />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <WithdrawForm
              selectedPosition={selectedPosition}
              setSelectedPosition={setSelectedPosition}
              amount={amount}
              setAmount={setAmount}
              positions={positions}
              isLoaded={isLoaded}
            />
          </div>

          <WithdrawalSummary
            selectedPosition={selectedPosition}
            amount={amount}
            positions={positions}
            isLoaded={isLoaded}
          />
        </div>
      </main>
    </div>
  )
}
