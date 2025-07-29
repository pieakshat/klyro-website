"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PositionNotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-light mb-4">Position not found</h1>
                <Link href="/dashboard">
                    <Button>Return to Dashboard</Button>
                </Link>
            </div>
        </div>
    )
} 