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
        <div className='md:hidden fixed bottom-0 left-0 right-0 h-20 p-xs bg-secondary z-[99999] shadow-[0_10px_15px_0_#202020]'>
            <div className="grid gap-base items-center grid-cols-4">
                {navigationLinks.map(item => (
                    <Link className={cn("relative block p-xs", path === item.href && "text-primary bg-background rounded-md")} key={item.title + "MobileNav"} href={item.href}>
                        {item.lists && savedProductsIds.length > 0 && (
                            <div className="absolute top-0 right-0 p-1 size-lg bg-primary text-primary-foreground rounded-full flex-center text-xs">{savedProductsIds.length}</div>
                        )}
                        <div className="flex flex-col items-center">
                            <div>{item.icon}</div>
                            <div className="mt-1 text-xs">{item.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
