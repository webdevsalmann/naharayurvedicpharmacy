"use client"
import ProductCard from "@/components/card/product-card";
import { useSiteState } from "@/components/providers/site-state-provider";
import Section, { SectionHeading, SectionProductGrid } from "@/components/section/section";
import { buttonVariants } from "@/components/ui/button";
import { Info } from "lucide-react";
import Link from "next/link";

export default function SavedProducts() {
    const { savedProducts } = useSiteState();

    return (
        <Section>
            {savedProducts.length > 0
                ? (<>
                    <SectionHeading>
                        <h1>Saved products to your liking</h1>
                    </SectionHeading>

                    <SectionProductGrid>
                        {savedProducts.map(item => (
                            <ProductCard data={item} key={item.id} />
                        ))}
                    </SectionProductGrid>
                </>)
                : (
                    <div className="px-base py-block bg-secondary flex-center rounded-md">
                        <div className="flex flex-col items-center text-center">
                            <Info className="size-xl" />
                            <div className="my-xs text-xl font-medium">No saved items found!</div>
                            <Link className={buttonVariants()} href="/shop">Browse Products</Link>
                        </div>

                    </div>
                )}
        </Section>
    )
}
