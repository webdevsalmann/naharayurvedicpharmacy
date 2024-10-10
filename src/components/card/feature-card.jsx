import Image from 'next/image'
import React from 'react'

export default function FeatureCard({ data: { name, indication, price } }) {
    return (
        <div className='relative rounded-md border hover:border-primary transition-all overflow-hidden hover:shadow-lg hover:-translate-y-1 group grid sm:grid-cols-2'>
            <div className="w-full">
                <Image
                    className='w-full aspect-[4/3] object-cover'
                    src="/images/product/1.jpg"
                    width={300}
                    height={300}
                    alt='Product Image'
                />
            </div>

            <div className="p-2 bg-background">
                <div className="size-full flex gap-2 justify-between sm:flex-col">
                    <div className="sm:flex-1">
                        <div className="leading-4 font-medium text-manage group-hover:underline">
                            {name ? name : "Name"}
                        </div>

                        <div className="mt-1 text-xs leading-4 text-muted-foreground line-clamp-2">
                            {indication ? indication : "Indication"}
                        </div>

                    </div>
                    <div className="font-bold text-primary">
                        ₹{price ? price : "20"}
                    </div>
                </div>
            </div>
        </div>
    )
}
