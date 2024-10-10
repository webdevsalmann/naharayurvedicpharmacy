"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { X } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";

export default function ClearFilterButton() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const searchValues = Array.from(searchParams.entries());

    const isFilterApplied = searchValues.some(([key]) =>
        ["category", "indication", "ingredients"].includes(key)
    );

    const handleClearFilter = () => {
        router.replace("/shop");
    };

    return (
        <Button className={cn("w-fit flex items-center text-xs hover:bg-destructive hover:text-destructive-foreground", !isFilterApplied && "hidden")} size="sm" variant="outline" onClick={() => handleClearFilter()}>
            <X className='mr-1 size-base shrink-0' strokeWidth={2.5} />
            Clear Filter
        </Button>
    )
}
