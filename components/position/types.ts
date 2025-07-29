export interface Position {
    protocol: string
    asset: string
    balance: string
    apy: string
    earned: string
    value: string
    depositDate: string
    totalDeposited: string
    performance: string
    risk: string
    chain: string
}

export interface Activity {
    action: string
    amount: string
    time: string
    type: "earning" | "compound"
} 