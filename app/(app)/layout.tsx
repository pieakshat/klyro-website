import { GlobalHeader } from "@/components/dashboard"

export default function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <GlobalHeader />
            {children}
        </>
    )
} 