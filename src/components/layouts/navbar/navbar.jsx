import Link from 'next/link';
import { LogoHorizontal, LogoSquare } from '@/components/ui/svgs';
import NavigationLinks from './navigation-links';
import MobileNavbar from './mobile-navbar';
import { cn } from '@/lib/utils';
import SearchInput from './search-input';
import { Suspense } from 'react';

export default function Navbar() {
  return (
    <>
      <div className={cn("p-base md:px-block container w-full bg-background md:border-0")}>
        <nav className="w-full flex gap-base items-center justify-between">

          <Link className="w-fit flex-center" href="/">
            <LogoHorizontal className="hidden sm:block h-10 w-fit text-primary" />
            <LogoSquare className="block sm:hidden h-10 w-fit text-primary" />
            <span className='sr-only'>webdevsalmann</span>
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
