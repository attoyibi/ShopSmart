import MainLayout from '@/layouts/MainLayout';
import { fetchProductData } from '@/lib/api';
import ProductDetailClient from '@/components/ProductDetailClient';
import apiConfig from '@/config/apiConfig';



// Definisi tipe untuk params
interface Params {
    slug: string;
}
// Tipe produk yang digunakan di halaman ProductDetail
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    productAdj: string;
    productMaterial: string;
    images: string[];
}
// Komponen server untuk mengambil produk berdasarkan slug
const fetchProduct = async (slug: string): Promise<Product | null> => {
    console.log('slug =', slug);
    try {
        const product = await fetchProductData(slug);
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

    // Sesuaikan produk agar memenuhi tipe yang diharapkan oleh ProductDetailClient
    const formattedProduct = {
        name: product.name,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl,
        productAdj: "Soft, Comfortable", // Dummy data
        productMaterial: "Cotton", // Dummy data
        images: [product.imageUrl], // Menggunakan imageUrl dari API
    };

    return (
        <MainLayout>
            <ProductDetailClient initialProduct={formattedProduct} />
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
