"use client"
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "./tailwind-indicator"
import { SiteStateProvider } from "./site-state-provider"

export default function Providers({ children }) {
    return (
        <>
            <SiteStateProvider>
                {children}
                <Toaster />
                {/* <TailwindIndicator /> */}
            </SiteStateProvider>
        </>
    )
}