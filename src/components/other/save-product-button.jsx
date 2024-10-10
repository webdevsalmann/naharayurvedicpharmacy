"use client"
import { Heart } from "lucide-react";
import { useSiteState } from "../providers/site-state-provider";
import { cn } from "@/lib/utils";

export default function SaveProductButton({ className, id }) {
    const { savedProductsIds, toggleSavedProductById } = useSiteState();

    return (
        <div className={cn("absolute top-xs right-xs p-xs cursor-pointer bg-background rounded-full border shadow-inner md:hidden md:group-hover:block", savedProductsIds.includes(id) && "block md:block")} onClick={() => toggleSavedProductById(id)}>
            <Heart className={cn("size-base", savedProductsIds.includes(id) && "fill-destructive text-destructive")} />
        </div>
    )
}
