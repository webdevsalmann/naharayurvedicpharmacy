"use client"
import { enums } from '@/lib/data/data';
import { products } from '@/lib/data/database';
import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const SiteStateContext = createContext();

export const SiteStateProvider = ({ children }) => {
    const [savedProductsIds, setSavedProductsIds] = useState([]);
    const [savedProducts, setSavedProducts] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false); // To track initialization

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
