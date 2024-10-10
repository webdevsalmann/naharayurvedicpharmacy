import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function stringToArray(string) {
  return string
    .toLowerCase() // Convert entire string to lowercase
    .split(',')
    .flatMap(word => word.trim().split(/\s+/)) // Split each comma-separated word by spaces
    .filter(word => word.length > 0); // Remove any empty strings
}
