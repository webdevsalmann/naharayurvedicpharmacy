import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import { Cross, Sprout } from 'lucide-react'
import Link from 'next/link'

export default function FeatureCard({ data: { slug, category, name, indication, ingredients, pricing } }) {
    return (
        <div className='relative rounded-md hover:border-primary border hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group'>
            <Link className='relative grid sm:grid-cols-2' href={`/shop/${slug}`}>
                <div className="w-full overflow-hidden">
                    <Image
                        className='w-full aspect-[4/3] object-cover group-hover:scale-110 transition-all'
                        src="/images/product/1.jpg"
                        width={300}
                        height={300}
                        alt='Product Image'
                    />
                </div>

                <div className="p-2 bg-background size-full flex flex-col gap-1">
                    <div className="sm:flex-1">
                        <div className="leading-4 font-medium text-manage group-hover:underline">
                            {name ? name : "Name"}
                        </div>

                        <div className="mt-1 flex gap-xs text-muted-foreground">
                            <Cross className="size-base shrink-0" />
                            <div className="text-xs leading-4  line-clamp-2">
                                {indication ? indication : "Indication"}
                            </div>
                        </div>

                        <div className="mt-1 flex gap-xs text-muted-foreground">
                            <Sprout className="size-base shrink-0" />
                            <div className="text-xs leading-4 line-clamp-2">
                                {ingredients ? ingredients : "Ingredients"}
                            </div>
                        </div>
                    </div>
                    <div className="">

                        {pricing[1].quantity} - ₹{pricing[0].price}
                    </div>
                </div>

                <Badge className="absolute top-xs left-xs">
                    {category ? category : "Category"}
                </Badge>
            </Link>
        </div>
    )
}
