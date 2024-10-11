// src/lib/api.js
import apiConfig from "@/config/apiConfig";
import { useProductStore } from "@/lib/store";

export const fetchProductData = async (slug) => {
    // Get the current state from the product store
    const { category } = useProductStore.getState(); // Use getState to access the store

    const response = await fetch(`${apiConfig.baseUrl}/${category}/${slug}`);

    console.log('respond dari fetchProduk data = ', response);
    console.log('Response status:', response.status);
    console.log('Response URL:', response.url);
    if (!response.ok) {
        throw new Error('Failed to fetch product data');
    }
    const data = await response.json(); // Assuming you want to return the JSON data
    return data; // Return the data
};
