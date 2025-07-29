export interface Market {
    id: string
    asset: string
    protocol: string
    apy: string
    tvl: string
    liquidity: string
    trend: "up" | "down"
    change24h: string
    risk: "Low" | "Medium" | "High"
    category: string
    chain: string
    featured: boolean
} 