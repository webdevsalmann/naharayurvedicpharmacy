"use client"
import { products } from '@/lib/data/database';
import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Determine the products to display on the current page
    const currentData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Effect to handle sidebar visibility based on window size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSidebarOpen(true); // Open sidebar for medium and larger devices
            } else {
                setSidebarOpen(false); // Close sidebar for mobile devices
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ShopContext.Provider value={{
            sidebarOpen,
            setSidebarOpen,
            currentData,
            handlePageChange,
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export default function useShop() {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
};
