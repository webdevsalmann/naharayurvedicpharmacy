import ProductCard from "@/components/card/product-card";
import { Button } from "@/components/ui/button";
import Section, { SectionHeading, SectionProductGrid } from "@/components/section/section";
import { products } from "@/lib/data/product";

export default function Category() {
    return (
        <Section >
            <SectionHeading>
                <h2>Search By Category</h2>
            </SectionHeading>

            <div className="mx-auto w-full md:w-1/2 lg:w-1/3 flex md:justify-between flex-wrap gap-base">
                <Button variant="secondary">Pills</Button>
                <Button variant="secondary">Oil</Button>
                <Button variant="secondary">Powder</Button>
            </div>

            <SectionProductGrid>
                {products.slice(0, 12).map(item => (
                    <ProductCard data={item} key={item.id} />
                ))}
            </SectionProductGrid>
        </Section>
    )
}
