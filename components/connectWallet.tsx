"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/themeProvider';
import { useEffect, useState } from 'react';

export const ConnectWalletButton = () => {
    const { isDarkMode } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className={cn(
                "w-32 h-10 rounded-lg animate-pulse",
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
            )} />
        );
    }

    return (
        <div className={cn(
            "transition-colors duration-200",
            isDarkMode ? "text-gray-400" : "text-gray-600"
        )}>
            <ConnectButton
                accountStatus="avatar"
                showBalance={false}
                chainStatus="icon"
            />
        </div>
    );
};