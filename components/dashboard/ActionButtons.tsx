"use client"

import { Button } from "@/components/ui/button"
import { Download, Upload } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ActionButtonsProps {
    isDarkMode: boolean
}

export default function ActionButtons({ isDarkMode }: ActionButtonsProps) {
    return (
        <section className="mb-6">
            <div className="flex justify-end space-x-4">
                <Link href="/deposit">
                    <Button
                        className={cn(
                            "transition-all duration-300 px-8 py-3 rounded-full font-medium",
                            "hover:scale-[1.02] shadow-lg hover:shadow-xl",
                            isDarkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900",
                        )}
                    >
                        <Upload className="mr-2 h-4 w-4" />
                        Deposit
                    </Button>
                </Link>
                <Link href="/withdraw">
                    <Button
                        variant="ghost"
                        className={cn(
                            "transition-colors duration-200 px-8 py-3 rounded-full font-medium",
                            isDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                                : "text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200",
                        )}
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Withdraw
                    </Button>
                </Link>
            </div>
        </section>
    )
} 