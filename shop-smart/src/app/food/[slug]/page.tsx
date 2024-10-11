
import { useEffect, useRef } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { fetchProductData } from '@/lib/api';
import ProductDetailClient from '@/components/ProductDetailClient';
import apiConfig from '@/config/apiConfig';
import ImageZoom from '@/components/ImageZoom';
// Komponen server untuk mengambil produk berdasarkan slug
const fetchProduct = async (slug) => {
    console.log('slug =', slug);
    try {
        const product = await fetchProductData(slug);
        return product; // Return the product data directly
    } catch (error) {
        console.error(error); // Log any error that occurs
        throw new Error('Failed to fetch product');
    }
};

const ProductDetail = async ({ params }) => {
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
    const products = await res.json();

    return products.map((product) => ({
        slug: product.id.toString(),
    }));
}

export default ProductDetail;
