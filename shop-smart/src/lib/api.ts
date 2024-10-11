
import apiConfig from "@/config/apiConfig";
import { useProductStore } from "@/lib/store";
import { Product } from '@/lib/types'
const mockProduct: Product = {
    id: '1',
    productDescription: 'This is a mock product description.',
    price: '100',
    images: 'https://example.com/image.jpg',
    productAdj: 'Mock Adjective',
    productMaterial: 'Mock Material',
    category: 'mock-category',
    Product: 'product name 1'
};

export const fetchProductData = async (slug: string): Promise<Product> => {
    try {
        const { category } = useProductStore.getState();
        const response = await fetch(`${apiConfig.baseUrl}/${category}/${slug}`);
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
