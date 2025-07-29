"use client"

import { useState, useEffect } from "react"
import { unstable_noStore as noStore } from 'next/cache'
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/themeProvider"
import {
  DepositInfo,
  DepositForm,
  TransactionSummary,
  assetsData,
  protocolsData,
} from "@/components/deposit"
import { GlobalHeader } from "@/components/dashboard"

export default function Deposit() {
  noStore()

  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState("USDC")
  const [amount, setAmount] = useState("")
  const [selectedProtocol, setSelectedProtocol] = useState("Auto-Optimize")
  const { isDarkMode } = useTheme()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const assets = assetsData
  const protocols = protocolsData

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
      <main className="max-w-4xl mx-auto px-6 py-8">
        <DepositInfo isLoaded={isLoaded} />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DepositForm
              selectedAsset={selectedAsset}
              setSelectedAsset={setSelectedAsset}
              amount={amount}
              setAmount={setAmount}
              selectedProtocol={selectedProtocol}
              setSelectedProtocol={setSelectedProtocol}
              assets={assets}
              protocols={protocols}
              isLoaded={isLoaded}
            />
          </div>

          <TransactionSummary
            selectedAsset={selectedAsset}
            amount={amount}
            selectedProtocol={selectedProtocol}
            assets={assets}
            protocols={protocols}
            isLoaded={isLoaded}
          />
        </div>
      </main>
    </div>
  )
}
