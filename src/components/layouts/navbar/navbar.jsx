import Link from 'next/link';
import { LogoHorizontal } from '@/components/ui/svgs';
import NavigationLinks from './navigation-links';
import MobileNavbar from './mobile-navbar';
import { cn } from '@/lib/utils';
import SearchInput from './search-input';
import { Suspense } from 'react';

export default function Navbar() {
  return (
    <>
      <div className={cn("p-base md:px-block container w-full bg-background shadow-md md:border-0")}>
        <nav className="w-full flex gap-base items-center justify-between">

          <Link className="w-fit block flex-center flex-grow-0" href="/">
            <LogoHorizontal className="block h-6 md:h-10 w-28 md:w-40 text-primary" />
            <span className='sr-only'>Nahar Ayurvedic Pharmacy</span>
          </Link>

          <div className="flex items-center gap-base flex-1 lg:flex-grow-0">
            <Suspense>
              <SearchInput className="w-full lg:w-80" />
            </Suspense>

            <div className="hidden md:block">
              <ul className="relative flex-center flex-col gap-xs md:flex-row md:flex">
                <NavigationLinks />
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <MobileNavbar />
    </>
  )
}
