import React from "react"
import {
    TrendingUp,
    Upload,
    Download,
    RefreshCw,
    Zap,
} from "lucide-react"

export const getActivityIcon = (type: string): React.ReactElement => {
    switch (type) {
        case "optimization":
            return <Zap className="h-4 w-4" />
        case "deposit":
            return <Upload className="h-4 w-4" />
        case "withdraw":
            return <Download className="h-4 w-4" />
        case "earning":
            return <TrendingUp className="h-4 w-4" />
        case "rebalance":
            return <RefreshCw className="h-4 w-4" />
        default:
            return <TrendingUp className="h-4 w-4" />
    }
}

export const getActivityColor = (type: string): string => {
    switch (type) {
        case "optimization":
            return "text-blue-500"
        case "deposit":
            return "text-purple-500"
        case "withdraw":
            return "text-orange-500"
        case "earning":
            return "text-green-500"
        case "rebalance":
            return "text-yellow-500"
        default:
            return "text-gray-500"
    }
} 