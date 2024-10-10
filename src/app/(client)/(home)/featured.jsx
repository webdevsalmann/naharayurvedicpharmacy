import FeatureCard from "@/components/card/feature-card";
import ProductCard from "@/components/card/product-card";
import Section, { SectionHeading } from "@/components/section/section";
import { products } from "@/lib/data/product";
import Image from "next/image";

export default function Featured() {
    return (
        <div className="bg-secondary">
            <Section className="bg-[url('/featured.svg')] bg-center bg-no-repeat bg-cover">
                <SectionHeading>
                    <h2>Featured Products</h2>
                </SectionHeading>

                <div className="grid gap-base md:grid-cols-2">
                    {products.slice(0, 4).map(item => (
                        <FeatureCard data={item} key={item.id + "HomeFeatureCard"} />
                    ))}
                </div>
            </Section>
        </div>
    )
}
