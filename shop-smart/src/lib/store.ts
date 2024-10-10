import { create } from 'zustand';

interface Product {
    id: string;
    productDescription: string;
    price: string;
    Product: string;
    productAdj: string;
    productMaterial: string;
    images: string;
}

interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    isLoading: false,
    error: null,

    // Fetch function to get products
    fetchProducts: async () => {
        set({ isLoading: true });
        try {
            const response = await fetch('https://631d6133789612cd07a9ce1d.mockapi.io/product');
            const data = await response.json();
            set({ products: data, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch products', isLoading: false });
        }
    },
}));
