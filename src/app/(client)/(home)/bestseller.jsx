import { products } from '@/lib/data/database'
import ProductCard from '@/components/card/product-card'
import Section, { SectionProductGrid, SectionHeading } from '@/components/section/section'

export default function Bestseller() {
    return (
        <Section className="bg-secondary">
            <SectionHeading>
                <h2>Customer Favorites: Our Bestsellers</h2>
                <p>Explore our top-selling Ayurvedic products, trusted by thousands for their quality and effectiveness in promoting holistic health.</p>
            </SectionHeading>

            <SectionProductGrid>
                {products.slice(0, 8).map(item => (
                    <ProductCard data={item} key={item.id} />
                ))}
            </SectionProductGrid>
        </Section>
    )
}
