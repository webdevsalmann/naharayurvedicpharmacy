import ProductCard from '@/components/card/product-card'
import Section, { SectionProductGrid, SectionHeading } from '@/components/section/section'
import { products } from '@/lib/data/product'
import React from 'react'

export default function Bestseller() {
    return (
        <Section>
            <SectionHeading>
                <h2>Our Bestsellers</h2>
            </SectionHeading>

            <SectionProductGrid>
                {products.slice(0, 8).map(item => (
                    <ProductCard data={item} key={item.id} />
                ))}
            </SectionProductGrid>
        </Section>
    )
}
