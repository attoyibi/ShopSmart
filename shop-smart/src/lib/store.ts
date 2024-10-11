import { create } from 'zustand';
import apiConfig from '@/config/apiConfig';
import { Product } from '@/lib/types'

interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
    category: string;
    setProducts: (products: Product[]) => void;
    setCategory: (category: string) => void;
    fetchProducts: () => Promise<void>;
    fetchProductSpecific: (slug: string) => Promise<Product | null>;
}

export const useProductStore = create<ProductState>((set, get) => ({
    products: [],
    isLoading: false,
    error: null,
    category: 'product',
    setProducts: (products) => set({ products }),
    setCategory: (category) => set({ category }), // Method to set selected category
    fetchProducts: async () => {
        set({ isLoading: true });
        const category = get().category; // Get category from store state
        try {
            const response = await fetch(`${apiConfig.baseUrl}/${category}`);
            const data = await response.json();
            set({ products: data, isLoading: false });
        } catch (error) {
            console.error(error);
            set({ error: 'Failed to fetch products', isLoading: false });
        }
    },
    fetchProductSpecific: async (slug: string) => {
        set({ isLoading: true });
        try {
            const response = await fetch(`${apiConfig.baseUrl}/${slug}`);
            const data = await response.json();
            set({ products: [data], isLoading: false });
            return data;
        } catch (error) {
            console.error(error);
            set({ error: 'Failed to fetch product', isLoading: false });
            return null;
        }
    },
}));
