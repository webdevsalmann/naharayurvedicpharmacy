import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "@/components/card/product-card"

export default function ProductCarousal({ data }) {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
        >
            <CarouselContent>
                {data && data.map(item => (
                    <CarouselItem className="basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4" key={item.id + "CarouselItem"}>
                        <ProductCard data={item} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}
