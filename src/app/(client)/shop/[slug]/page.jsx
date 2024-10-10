import { products } from "@/lib/data/database";
import ProductDetails from "./product-details";
import ProductCarousalSection from "@/components/section/product-carousal-section";
import { stringToArray } from "@/lib/utils";

export async function generateStaticParams() {
    return products.map(({ slug }) => slug)
}

export default async function page({ params }) {
    // Find the current product
    const item = await products.find(item => item.slug === params.slug);
    const { category, ingredients, indication } = item;

    // Convert the current product's ingredients and indication to keywords
    const currentKeywords = [
        ...stringToArray(ingredients),
        ...stringToArray(indication)
    ].map(keyword => keyword.toLowerCase());

    // Filter products with similar effects
    const similarEffectProducts = products.filter(product => {
        if (product.slug === params.slug) return false; // Exclude the current product itself

        const productKeywords = [
            ...stringToArray(product.ingredients),
            ...stringToArray(product.indication)
        ].map(keyword => keyword.toLowerCase());

        // Check if there is any overlap between currentKeywords and productKeywords
        return currentKeywords.some(keyword => productKeywords.includes(keyword));
    });

    return (
        <main>
            <ProductDetails data={item} />

            <ProductCarousalSection
                className="bg-secondary"
                h2="Similar Category Products"
                data={products.filter(product => product.category === category && product.slug !== params.slug)}
            />

            {similarEffectProducts.length > 0 && (
                <ProductCarousalSection
                    h2="Products with Similar Effects"
                    data={similarEffectProducts}
                />
            )}
        </main>
    );
}
