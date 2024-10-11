"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/data/data";
import { useSiteState } from "@/components/providers/site-state-provider";

export default function MobileNavbar() {
    const path = usePathname();
    const { savedProductsIds } = useSiteState();

    return (
        <div className='md:hidden fixed bottom-0 left-0 right-0 h-20 p-base bg-background z-[99999] shadow-[0_10px_15px_0_#202020] border-t'>
            <div className="flex items-center justify-between">
                {navigationLinks.map(item => (
                    <Link className={cn("relative p-1 size-12 aspect-square flex-center rounded-md border border-transparent", path === item.href && "text-primary bg-secondary  border-primary")} key={item.title + "MobileNav"} href={item.href}>
                        {item.lists && savedProductsIds.length > 0 && (
                            <div className="absolute top-px right-px p-1 size-lg bg-primary text-primary-foreground rounded-full flex-center text-xs">{savedProductsIds.length}</div>
                        )}
                        <div className="size-xl">{item.icon}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
