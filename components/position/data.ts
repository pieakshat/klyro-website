import { Position, Activity } from "./types"

export const positionData: Record<string, Position> = {
    "morpho-usdc": {
        protocol: "MORPHO",
        asset: "USDC",
        balance: "45,230.50",
        apy: "7.67%",
        earned: "+$2,341.20",
        value: "$45,230.50",
        depositDate: "2024-01-15",
        totalDeposited: "$42,889.30",
        performance: "+5.46%",
        risk: "Low",
        chain: "Ethereum",
    },
    "seamless-eth": {
        protocol: "SEAMLESS",
        asset: "ETH",
        balance: "13.75",
        apy: "9.13%",
        earned: "+$1,892.45",
        value: "$32,100.75",
        depositDate: "2024-01-20",
        totalDeposited: "$30,208.30",
        performance: "+6.26%",
        risk: "Medium",
        chain: "Base",
    },
    "euler-dai": {
        protocol: "EULER",
        asset: "DAI",
        balance: "21,762.27",
        apy: "6.39%",
        earned: "+$1,234.56",
        value: "$21,762.27",
        depositDate: "2024-01-25",
        totalDeposited: "$20,527.71",
        performance: "+6.01%",
        risk: "Medium",
        chain: "Ethereum",
    },
}

export const recentActivityData: Activity[] = [
    {
        action: "Yield Earned",
        amount: "+$89.23",
        time: "2 hours ago",
        type: "earning",
    },
    {
        action: "Auto-Compound",
        amount: "$89.23",
        time: "2 hours ago",
        type: "compound",
    },
    {
        action: "Yield Earned",
        amount: "+$87.45",
        time: "1 day ago",
        type: "earning",
    },
    {
        action: "Auto-Compound",
        amount: "$87.45",
        time: "1 day ago",
        type: "compound",
    },
] 