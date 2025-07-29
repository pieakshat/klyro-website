"use client";
import React from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia, polygon, optimism, arbitrum, mantle } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, lightTheme, darkTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const config = createConfig({
    chains: [mainnet, sepolia, polygon, optimism, arbitrum, mantle],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [polygon.id]: http(),
        [optimism.id]: http(),
        [arbitrum.id]: http(),
        [mantle.id]: http(),
    },
    ssr: true,
    // multiInjectedProviderDiscovery: false, // This prevents duplicate wallet detection
});

// Custom light theme
const customLightTheme = lightTheme({
    accentColor: '#000000',
    accentColorForeground: '#ffffff',
    borderRadius: 'large',
    fontStack: 'system',
    overlayBlur: 'small',
});

// Custom dark theme
const customDarkTheme = darkTheme({
    accentColor: '#ffffff',
    accentColorForeground: '#000000',
    borderRadius: 'large',
    fontStack: 'system',
    overlayBlur: 'small',
});

export function WagmiProviderWrapper({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient());
    const [mounted, setMounted] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        } else {
            setIsDarkMode(prefersDark);
        }
    }, []);

    // Listen for theme changes
    React.useEffect(() => {
        const handleStorageChange = () => {
            const savedTheme = localStorage.getItem("theme");
            setIsDarkMode(savedTheme === "dark");
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    locale="en-US"
                    showRecentTransactions={true}
                    theme={isDarkMode ? customDarkTheme : customLightTheme}
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}