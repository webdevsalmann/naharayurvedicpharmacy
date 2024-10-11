import ProductCard from '@/components/card/product-card';
import SidebarToggleButton from './sidebar-toggle-button';
import ClearFilterButton from './clear-filter-button';
import { Suspense } from 'react';
import ShopPagination from './shop-pagination';

export default function Display({ filteredData }) {

  return (
    <div className='relative w-full flex-1'>
      <div className="sticky top-base p-xs md:px-base w-full bg-secondary rounded-md flex gap-base items-center z-[999] shadow-sm">
        {/* Product count */}
        <div className="md:text-lg font-semibold flex-1 text-nowrap">
          {filteredData.length === 0 ? "No product found" : `${filteredData.length} products found`}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-col items-end md:flex-row gap-xs w-fit">
          <SidebarToggleButton />

          <Suspense>
            <ClearFilterButton />
          </Suspense>
        </div>
      </div>


      <div className="mt-base grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-base">
        {filteredData.map(item => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>

      <div className="mt-block">
        {/* <ShopPagination /> */}
      </div>

    </div>
  );
}
