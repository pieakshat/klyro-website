import { Asset, Protocol } from "./types"

export const assetsData: Asset[] = [
    { symbol: "USDC", name: "USD Coin", balance: "12,450.50", price: "$1.00" },
    { symbol: "ETH", name: "Ethereum", balance: "8.25", price: "$2,340.50" },
    { symbol: "USDT", name: "Tether", balance: "5,670.80", price: "$1.00" },
    { symbol: "DAI", name: "Dai Stablecoin", balance: "3,240.90", price: "$1.00" },
    { symbol: "WBTC", name: "Wrapped Bitcoin", balance: "0.45", price: "$43,250.00" },
]

export const protocolsData: Protocol[] = [
    { name: "Auto-Optimize", apy: "Best Rate", description: "Automatically find the highest yield" },
    { name: "MORPHO", apy: "7.67%", description: "Lending protocol with competitive rates" },
    { name: "SEAMLESS", apy: "9.13%", description: "High-yield lending on Base" },
    { name: "AAVE", apy: "3.57%", description: "Established DeFi lending protocol" },
    { name: "EULER", apy: "6.39%", description: "Permissionless lending protocol" },
] 