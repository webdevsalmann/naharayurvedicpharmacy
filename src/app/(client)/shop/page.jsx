// src/app/(client)/shop/page.jsx
import Display from "@/components/layouts/shop/display";
import Sidebar from "@/components/layouts/shop/sidebar";
import { products } from "@/lib/data/database";
import { Suspense } from "react";

// Generate static parameters if you have dynamic routes (e.g., sub-pages or filtering)
export async function generateStaticParams() {
    // If your shop page needs to generate based on categories or specific filters
    // return categories.map((category) => ({ category })); // Example for categories
    return []; // Return an empty array if no params needed for this page
}

// The page component
export default function ShopPage({ searchParams }) {
    // Get search parameters
    const categories = Array.isArray(searchParams.category) ? searchParams.category : searchParams.category ? [searchParams.category] : [];
    const indications = Array.isArray(searchParams.indication) ? searchParams.indication : searchParams.indication ? [searchParams.indication] : [];
    const ingredientList = Array.isArray(searchParams.ingredients) ? searchParams.ingredients : searchParams.ingredients ? [searchParams.ingredients] : [];
    const search = searchParams.search || "";

    // Normalize the search term for filtering
    const normalizedSearchTerm = search.replace(/[\s-]/g, "").toLowerCase();

    // Filter products based on selected criteria
    const filteredData = products.filter((product) => {
        const categoryMatch = categories.length > 0 ? categories.includes(product.category) : true; // Default to true if no categories

        const indicationMatch = indications.length === 0 || indications.some((ind) =>
            product.indication.replace(/[\s-]/g, "").toLowerCase().includes(ind.replace(/[\s-]/g, "").toLowerCase())
        );

        const ingredientsMatch = ingredientList.length === 0 || ingredientList.some((ing) =>
            product.ingredients.replace(/[\s-]/g, "").toLowerCase().includes(ing.replace(/[\s-]/g, "").toLowerCase())
        );

        const searchMatch = !normalizedSearchTerm || (
            product.name.replace(/[\s-]/g, "").toLowerCase().includes(normalizedSearchTerm) ||
            product.indication.replace(/[\s-]/g, "").toLowerCase().includes(normalizedSearchTerm) ||
            product.description.replace(/[\s-]/g, "").toLowerCase().includes(normalizedSearchTerm) ||
            product.ingredients.replace(/[\s-]/g, "").toLowerCase().includes(normalizedSearchTerm)
        );

        return categoryMatch && indicationMatch && ingredientsMatch && searchMatch;
    });

    return (
        <main className="size-full">
            <div className='relative p-base container size-full min-h-40 flex gap-base'>
                <Suspense fallback={<div>Loading sidebar...</div>}>
                    <Sidebar />
                </Suspense>
                <Display filteredData={filteredData} />
            </div>
        </main>
    );
}
