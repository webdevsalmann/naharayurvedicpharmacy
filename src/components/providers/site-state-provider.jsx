import { enums } from '@/lib/data/data';
import { products } from '@/lib/data/database';
import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const SiteStateContext = createContext();

export const SiteStateProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [savedProductsIds, setSavedProductsIds] = useState([]);
    const [savedProducts, setSavedProducts] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false); // To track initialization


    // Effect to handle sidebar visibility based on window size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSidebarOpen(true); // Open sidebar for medium and larger devices
            } else {
                setSidebarOpen(false); // Close sidebar for mobile devices
            }
        };

        // Set the initial state based on window size
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Only run on mount

    // Filter saved products based on savedProductsIds changes
    useEffect(() => {
        if (isInitialized) { // Only filter if savedProductsIds has been initialized
            setSavedProducts(products.filter((item) => savedProductsIds.includes(item.id)));
        }
    }, [savedProductsIds, isInitialized]);

    // Get saved products from local storage on component mount
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem(enums.localStorageSavedProductKey)) || [];
        setSavedProductsIds(storedProducts);
        setIsInitialized(true); // Set initialized to true after loading
    }, []);

    // Update local storage whenever savedProductsIds changes
    useEffect(() => {
        if (isInitialized) { // Avoid updating storage on initial load
            localStorage.setItem(enums.localStorageSavedProductKey, JSON.stringify(savedProductsIds));
        }
    }, [savedProductsIds, isInitialized]);

    // Function to toggle a product ID in the saved products array
    const toggleSavedProductById = (productId) => {
        setSavedProductsIds((prev) => {
            if (prev.includes(productId)) {
                return prev.filter((id) => id !== productId);
            } else {
                return [...prev, productId];
            }
        });
    };

    // Provide the sidebar state and savedProducts-related functions
    return (
        <SiteStateContext.Provider value={{
            sidebarOpen,
            setSidebarOpen,
            savedProducts,
            savedProductsIds,
            toggleSavedProductById,
        }}>
            {children}
        </SiteStateContext.Provider>
    );
};

// Custom hook to use the SiteState context
export const useSiteState = () => {
    const context = useContext(SiteStateContext);
    if (context === undefined) {
        throw new Error('useSiteState must be used within a SiteStateProvider');
    }
    return context;
};
