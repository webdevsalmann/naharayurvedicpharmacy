"use client"
import { useSiteState } from '@/components/providers/site-state-provider';
import { Button } from '@/components/ui/button'
import { Filter } from 'lucide-react'

export default function SidebarToggleButton() {
    const { sidebarOpen, setSidebarOpen } = useSiteState();

    return (
        <Button className="w-fit flex items-center text-xs hover:border-black" size="sm" variant="outline" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Filter className='mr-1 size-base shrink-0' strokeWidth={2.5} />
            Filter {sidebarOpen && "close"}
        </Button>
    )
}
