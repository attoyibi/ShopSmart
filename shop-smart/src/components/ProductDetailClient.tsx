"use client";

import { useEffect } from 'react';
import { useProductStore } from '@/lib/store';
import Image from 'next/image';
import styles from '@/styles/components/ProductDetail.module.scss';

import Link from 'next/link';
import useImageSwitcher from '@/hooks/useImageSwitcher'; // Import custom hook
// Definisikan tipe untuk produk
interface Product {
    Product: string;
    price: string;
    productDescription: string;
    productAdj: string;
    productMaterial: string;
    images: string[]; // Asumsi bahwa produk memiliki array URL gambar
}
// Definisikan tipe untuk props komponen
interface ProductDetailClientProps {
    initialProduct: Product;
}
const ProductDetailClient = ({ initialProduct }: ProductDetailClientProps) => {
    const { products, setProducts } = useProductStore();

    useEffect(() => {
        if (initialProduct) {
            setProducts([initialProduct]);
        }
    }, [initialProduct, setProducts]);

    const product = products.length > 0 ? products[0] : null;

    // Custom hook to handle image switching
    const { currentImage, handleImageClick } = useImageSwitcher(product?.images);

    if (!product) return <div>Product not found</div>;

    return (
        <div className={styles.productDetailContainer}>
            {/* Section Gambar Produk */}
            <div className={styles.backButtonWrapper}>
                <div className={styles.backButton}>
                    <Link href='/catalog' className={styles.backLink}>
                        <span className={styles.backIcon}>
                            {/* Ikon Panah Kiri (SVG) */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </span>
                        Back to catalog
                    </Link>
                </div>

                <div className={styles.imageWrapper}>
                    {/* image utama yang berubah */}
                    <div className={styles.mainImage}>
                        <Image
                            src={currentImage} // Menggunakan currentImage dari custom hook
                            alt={product.Product}
                            layout="responsive"
                            width={600}
                            height={400}
                            objectFit="cover"
                        />
                    </div>
                </div>

                <div>
                    {/* image variant */}
                    <div className={styles.imageVariant}>
                        {/* Varian gambar pertama */}
                        <Image
                            src={product.images} // Ganti dengan URL gambar yang sesuai
                            alt={product.Product}
                            width={100}
                            height={80}
                            className={styles.imgHover}
                            onClick={() => handleImageClick(product.images)} // Saat gambar diklik
                        />

                        {/* Varian gambar kedua */}
                        <Image
                            src={'https://loremflickr.com/cache/resized/65535_53538657121_96031e3285_320_240_nofilter.jpg'} // URL varian gambar kedua
                            alt={product.Product}
                            width={100}
                            height={80}
                            className={styles.imgHover}
                            onClick={() => handleImageClick('https://loremflickr.com/cache/resized/65535_53538657121_96031e3285_320_240_nofilter.jpg')} // Saat gambar diklik
                        />

                        {/* Varian gambar ketiga */}
                        <Image
                            src={'https://loremflickr.com/cache/resized/6134_5940078239_49dc72dcab_320_240_nofilter.jpg'} // URL varian gambar ketiga
                            alt={product.Product}
                            width={100}
                            height={80}
                            className={styles.imgHover}
                            onClick={() => handleImageClick('https://loremflickr.com/cache/resized/6134_5940078239_49dc72dcab_320_240_nofilter.jpg')} // Saat gambar diklik
                        />
                    </div>
                </div>
            </div>

            {/* Informasi Detail Produk */}
            <div className={styles.productInfo}>
                <h1 className={styles.title}>{product.Product}</h1>
                <p className={styles.price}>${parseFloat(product.price).toFixed(2)}</p>
                <p className={styles.description}>{product.productDescription}</p>

                {/* Variants Section (jika ada) */}
                <div className={styles.variants}>
                    <h4>Available Variants:</h4>
                    <ul>
                        <li>{product.productAdj}</li>
                        <li>{product.productAdj}</li>
                        <li>{product.productAdj}</li>
                    </ul>
                </div>

                <div className={styles.variants}>
                    <h4>Specifications:</h4>
                    <ul>
                        <li>Material: {product.productMaterial}</li>
                        <li>Color: {product.productAdj}</li>
                        <li>Size: Medium</li>
                        <li>Weight: 1.2 kg</li>
                    </ul>
                </div>

                {/* Tombol Aksi */}
                <div className={styles.actions}>
                    <button className={styles.buyButton}>Buy Now</button>
                    <button className={styles.addToCartButton}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailClient;
