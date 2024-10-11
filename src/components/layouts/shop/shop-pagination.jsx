"use client"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import useShop from '@/components/providers/shop-provider';

export default function ShopPagination() {
    const { currentData, currentPage, handlePageChange } = useShop();

    return (
        <Pagination>
            <PaginationContent>
                {/* Previous Button */}
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} />
                </PaginationItem>

                {/* First Page */}
                <PaginationItem>
                    <PaginationLink href="#" isActive={currentPage === 1} onClick={() => handlePageChange(1)}>1</PaginationLink>
                </PaginationItem>

                {/* Show first ellipsis if on early pages */}
                {currentPage > 3 && (
                    <PaginationItem>
                        <PaginationEllipsis onClick={() => handlePageChange(currentPage - 1)} />
                    </PaginationItem>
                )}

                {/* Middle Pages */}
                {currentPage === 1 && (
                    <>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => handlePageChange(2)}>2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => handlePageChange(3)}>3</PaginationLink>
                        </PaginationItem>
                    </>
                )}

                {/* When in the middle, show the current page and neighbors */}
                {currentPage > 1 && currentPage < totalPages - 2 && (
                    <>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => handlePageChange(currentPage)}>{currentPage}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => handlePageChange(currentPage + 1)}>{currentPage + 1}</PaginationLink>
                        </PaginationItem>
                    </>
                )}

                {/* Show ellipsis before last page if not on last few pages */}
                {currentPage < totalPages - 3 && (
                    <PaginationItem>
                        <PaginationEllipsis onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                )}

                {/* Last three pages */}
                {currentPage >= totalPages - 2 && (
                    <>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => handlePageChange(totalPages - 2)}>{totalPages - 2}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => handlePageChange(totalPages - 1)}>{totalPages - 1}</PaginationLink>
                        </PaginationItem>
                    </>
                )}

                {/* Last Page */}
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(totalPages)}
                    >
                        {totalPages}
                    </PaginationLink>
                </PaginationItem>

                {/* Next Button */}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
