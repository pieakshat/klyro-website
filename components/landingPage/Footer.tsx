"use client"

import { cn } from "@/lib/utils"

interface FooterProps {
    isDarkMode: boolean
}

export default function Footer({ isDarkMode }: FooterProps) {
    return (
        <footer
            className={cn(
                "border-t transition-colors duration-300",
                isDarkMode ? "border-gray-800 bg-gray-900/50" : "border-gray-100 bg-gray-50/50",
            )}
        >
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div
                        className={cn(
                            "text-sm mb-4 md:mb-0 transition-colors duration-300",
                            isDarkMode ? "text-gray-400" : "text-gray-600",
                        )}
                    >
                        © 2024 Klyro.
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Telegram */}
                        <a
                            href="#"
                            className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                                "hover:scale-110",
                                isDarkMode
                                    ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                                    : "bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-black",
                            )}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.268 8.368-1.268 8.368-.16.708-.534.708-.534.708s-2.803-.16-4.256-.16c-1.454 0-4.256.16-4.256.16s-.374 0-.534-.708c0 0-.372-1.64-1.268-8.368 0 0-.727-4.87-.896-6.728-.16-1.858.16-2.566.16-2.566s.374-.708 1.268-.708c.894 0 10.24 0 11.134 0 .894 0 1.268.708 1.268.708s.32.708.16 2.566z" />
                            </svg>
                        </a>

                        {/* Twitter */}
                        <a
                            href="#"
                            className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                                "hover:scale-110",
                                isDarkMode
                                    ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                                    : "bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-black",
                            )}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
} 