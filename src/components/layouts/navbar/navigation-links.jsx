"use client"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/data/data";
import { useSiteState } from "@/components/providers/site-state-provider";

export default function NavigationLinks() {
    const path = usePathname();
    const { savedProductsIds } = useSiteState();

    return navigationLinks.map((item) => (
        <li key={item.title}>
            <Link
                className={cn(
                    "relative block capitalize",
                    (path === item.href && "bg-accent"),
                    buttonVariants({ variant: item.varient, size: 'sm' }),
                )}
                href={item.href}
            >
                {item.lists && savedProductsIds.length > 0 && (
                    <div className="absolute top-1 right-1 p-px size-[18px] bg-primary text-primary-foreground rounded-full flex-center text-xs">{savedProductsIds.length}</div>
                )}

                {item.title}
            </Link>
        </li>
    ))
}
