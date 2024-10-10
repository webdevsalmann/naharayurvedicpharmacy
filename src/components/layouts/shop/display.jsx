import ProductCard from '@/components/card/product-card'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import SidebarToggleButton from './sidebar-toggle-button';
import ClearFilterButton from './clear-filter-button';
import { Suspense } from 'react';

export default function Display({ filteredData }) {

  return (
    <div className='relative w-full flex-1'>

      <div className="sticky top-base p-xs md:px-base w-full bg-secondary rounded-md flex gap-base items-center z-[999] shadow-sm">
        {/* Product count */}
        <div className="md:text-lg font-semibold flex-1 text-nowrap">
          {filteredData.length === 0 ? "No product found" : filteredData.length + " " + "products found"}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-col items-end md:flex-row gap-xs w-fit">
          <SidebarToggleButton />

          <Suspense>
            <ClearFilterButton />
          </Suspense>
        </div>
      </div>

      <div className="mt-base grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-base">
        {filteredData.slice(0,12).map(item => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
