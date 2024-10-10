import Image from 'next/image';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/components/ProductDetail.module.scss';
// https://pagedone.io/blocks/e-commerce/product-overview
// Membuat fungsi untuk fetch data produk
async function getProduct(id: string) {
    // Contoh fetch ke API, ganti dengan API yang sebenarnya
    const product = {
        id: id,
        title: `Product ${id}`,
        description: `This is the detailed description for product ${id}.`,
        price: 49.99,
        imageSrc: '/assets/images/hero-image.png', // Replace with actual image path
        variants: ['Variant 1', 'Variant 2', 'Variant 3'],
    };
    return product;
}

interface ProductDetailProps {
    params: { id: string };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
    const product = await getProduct(params.id);

    return (
        <MainLayout>
            <div className={styles.productDetailContainer}>
                {/* Section Gambar Produk */}
                <div className={styles.imageWrapper}>
                    <Image
                        src={product.imageSrc}
                        alt={product.title}
                        layout="responsive"
                        width={600}
                        height={400}
                        objectFit="cover"
                    />
                </div>

                {/* Informasi Detail Produk */}
                <div className={styles.productInfo}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    <p className={styles.description}>{product.description}</p>

                    {/* Variants Section */}
                    <div className={styles.variants}>
                        <h4>Available Variants:</h4>
                        <ul>
                            {product.variants.map((variant, index) => (
                                <li key={index}>{variant}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Tombol Aksi */}
                    <div className={styles.actions}>
                        <button className={styles.buyButton}>Buy Now</button>
                        <button className={styles.addToCartButton}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
