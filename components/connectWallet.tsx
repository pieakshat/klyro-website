import { ConnectButton } from '@rainbow-me/rainbowkit';
import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/themeProvider';

export const ConnectWalletButton = () => {
    const { isDarkMode } = useTheme();

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