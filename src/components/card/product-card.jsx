import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import SaveProductButton from '../other/save-product-button'

export default function ProductCard({ data: { id, name, slug, indication, category } }) {

  return (
    <div className="relative group">
      <Link className='relative block rounded border transition-all overflow-hidden hover:shadow-lg group' href={`/shop/${slug}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            className='size-full object-cover group-hover:scale-110 transition-all'
            src={category === "pill" ? "/images/product/1.jpg" : category === "oil" ? "/images/product/2.jpg" : category === "tablet" ? "/images/product/1.jpg" :"/images/product/3.jpg"}
            width={300}
            height={300}
            alt='Product Image'
          />
        </div>

        <div className="p-2">
          <div className="line-clamp-2 font-medium text-manage group-hover:underline">
            {name ? name : "Name"}
          </div>

          <div className="my-1 text-xs leading-4 text-muted-foreground line-clamp-2">
            {indication ? indication : "Indication"}
          </div>

          <Badge className="capitalize" variant="outline">{category}</Badge>
        </div>

      </Link>
      
      <SaveProductButton id={id} />
    </div>
  )
}
