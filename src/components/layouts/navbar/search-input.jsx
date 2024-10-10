"use client";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { shopFilters } from "@/lib/data/data";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput({ className }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const inputRef = useRef(null);
    const suggestionsRef = useRef(null);
    const router = useRouter();
    const searchParams = useSearchParams();


    // Handle search term clearance
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (params.has("search")) {
            return setSearchTerm(params.get("search"))
        } else {
            setSearchTerm("")
        }
    }, [searchParams]);

    useEffect(() => {
        const searchLists = shopFilters.map(item => item.options).flat();
        if (searchTerm) {
            const filteredSuggestions = searchLists.filter(item =>
                item.label.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);

    // Close suggestions when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                suggestionsRef.current &&
                !suggestionsRef.current.contains(event.target) &&
                inputRef.current &&
                !inputRef.current.contains(event.target)
            ) {
                setIsFocused(false);
                setHighlightedIndex(-1);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            setHighlightedIndex(prevIndex => (prevIndex + 1) % suggestions.length);
        } else if (e.key === "ArrowUp") {
            setHighlightedIndex(prevIndex => (prevIndex - 1 + suggestions.length) % suggestions.length);
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
                const selectedItem = suggestions[highlightedIndex];
                navigateToSearch(selectedItem.value);
            } else if (searchTerm) {
                navigateToSearch(searchTerm);
            }
        }
    };

    const navigateToSearch = (searchValue) => {
        const formattedValue = searchValue.toLowerCase().replace(/\s+/g, "-");
        router.push(`/shop?search=${formattedValue}`);

        // Reset search term and suggestions
        setSuggestions([]);
        setIsFocused(false);
        setHighlightedIndex(-1);
    };

    return (
        <div className={cn("relative", className)} ref={suggestionsRef}>
            <Input
                ref={inputRef}
                className="hover:text-foreground"
                placeholder="Search Here..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onKeyDown={handleKeyDown}
            />

            {/* Suggestion Lists */}
            {isFocused && suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 top-[110%] bg-background z-[9999] rounded-md border">
                    {suggestions.slice(0,10).map((item, index) => (
                        <li key={item.label + "Search"}>
                            <button
                                onClick={() => {navigateToSearch(item.value);setSearchTerm(item.value)}} // Handle button click
                                className={cn(
                                    "block w-full text-left px-base py-xs cursor-pointer",
                                    highlightedIndex === index ? "bg-secondary" : "hover:bg-secondary"
                                )}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
