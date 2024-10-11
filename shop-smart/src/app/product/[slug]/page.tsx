// import { useEffect, useRef } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { fetchProductData } from '@/lib/api';
import ProductDetailClient from '@/components/ProductDetailClient';
import apiConfig from '@/config/apiConfig';
// import ImageZoom from '@/components/ImageZoom';

// Definisi tipe untuk produk
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    // Tambahkan properti lain sesuai dengan data produk
}

// Definisi tipe untuk params
interface Params {
    slug: string;
}

// Komponen server untuk mengambil produk berdasarkan slug
const fetchProduct = async (slug: string): Promise<Product | null> => {
    console.log('slug =', slug);
    try {
        const product: Product = await fetchProductData(slug);
        return product; // Mengembalikan data produk langsung
    } catch (error) {
        console.error(error); // Mencetak log kesalahan
        throw new Error('Failed to fetch product');
    }
};

// Komponen server-side untuk detail produk
const ProductDetail = async ({ params }: { params: Params }) => {
    const product = await fetchProduct(params.slug);

    if (!product) return <div>Product not found</div>;

    return (
        <MainLayout>
            <ProductDetailClient initialProduct={product} />
        </MainLayout>
    );
};

// Fungsi untuk mengonfigurasi ulang di build time dengan ISR
export async function generateStaticParams() {
    const res = await fetch(`${apiConfig.baseUrl}/product`);
    const products: Product[] = await res.json();

    return products.map((product) => ({
        slug: product.id.toString(),
    }));
}

export default ProductDetail;
