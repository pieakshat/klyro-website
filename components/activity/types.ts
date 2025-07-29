export interface Activity {
    id: string
    action: string
    protocol: string
    amount: string
    time: string
    type: "optimization" | "deposit" | "withdraw" | "earning" | "rebalance"
    txHash: string
    status: "completed" | "pending" | "failed"
} 