// src/lib/api.js
// import apiConfig from "@/config/apiConfig";
// import { useProductStore } from "@/lib/store";

// export const fetchProductData = async (slug) => {
//     // Get the current state from the product store
//     const { category } = useProductStore.getState(); // Use getState to access the store

//     const response = await fetch(`${apiConfig.baseUrl}/${category}/${slug}`);

//     console.log('respond dari fetchProduk data = ', response);
//     console.log('Response status:', response.status);
//     console.log('Response URL:', response.url);
//     if (!response.ok) {
//         throw new Error('Failed to fetch product data');
//     }
//     const data = await response.json(); // Assuming you want to return the JSON data
//     return data; // Return the data
// };
// src/lib/api.ts
import apiConfig from "@/config/apiConfig";
import { useProductStore } from "@/lib/store";
import { Product } from '@/lib/types'
// interface Product {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     imageUrl: string;
//     productAdj: string;
//     productMaterial: string;
//     images: string[];
//     category: string;
// }

// Mock data for build time testing
const mockProduct: Product = {
    id: '1',
    productDescription: 'This is a mock product description.',
    price: '100',
    images: 'https://example.com/image.jpg',
    productAdj: 'Mock Adjective',
    productMaterial: 'Mock Material',
    category: 'mock-category',
};

export const fetchProductData = async (slug: string): Promise<Product> => {
    try {
        const { category } = useProductStore.getState();
        const response = await fetch(`${apiConfig.baseUrl}/${category}/${slug}`);

        console.log('Response from fetchProductData:', response);
        console.log('Response status:', response.status);
        console.log('Response URL:', response.url);

        if (!response.ok) {
            console.error('Failed to fetch product data:', response.statusText);
            throw new Error('Failed to fetch product data');
        }

        const data: Product = await response.json();
        return data;
    } catch (error) {
        console.error('Error in fetchProductData:', error);
        // Return mock data during build time for testing
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
            return mockProduct;
        }
        throw error;
    }
};
