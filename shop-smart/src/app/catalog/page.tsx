// pages/catalog/index.tsx
'use client'
import { useEffect } from 'react';
import { useProductStore } from '@/lib/store';
import MainLayout from '@/layouts/MainLayout';
import CatalogCard from '@/components/CatalogCard';
import styles from '@/styles/components/Catalog.module.scss'; // Import SCSS untuk tata letak
import Link from 'next/link';
const Catalog = () => {
    // const products = [
    //     {
    //         title: 'Product 1',
    //         description: 'This is the description for product 1.',
    //         href: '/product/1'
    //     },
    //     // Duplicate product entries for demonstration
    //     {
    //         title: 'Product 2',
    //         description: 'This is the description for product 2.',

    //         href: '/product/2'
    //     },
    //     {
    //         title: 'Product 3',
    //         description: 'This is the description for product 3.',

    //         href: '/product/3'
    //     },
    //     {
    //         title: 'Product 1',
    //         description: 'This is the description for product 1.',

    //         href: '/product/1'
    //     },
    //     // Duplicate product entries for demonstration
    //     {
    //         title: 'Product 2',
    //         description: 'This is the description for product 2.',

    //         href: '/product/2'
    //     },
    //     {
    //         title: 'Product 3',
    //         description: 'This is the description for product 3.',

    //         href: '/product/3'
    //     },
    //     {
    //         title: 'Product 2',
    //         description: 'This is the description for product 2.',

    //         href: '/product/2'
    //     },
    //     {
    //         title: 'Product 3',
    //         description: 'This is the description for product 3.',

    //         href: '/product/3'
    //     },
    //     // Add more products as needed
    // ];

    const { products, fetchProducts, isLoading, error } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <MainLayout>
            <div className={styles.catalogLayout}>
                <div className={styles.menu}>
                    {/* Menu content goes here */}
                    <h2>Menu</h2>
                    <ul>
                        <li><Link href="/catalog">Catalog</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className={styles.catalogContainer}>
                    <div style={{ width: '1000px' }}>
                        <h1 className={styles.title}>NameCatalog</h1>
                    </div>
                    <div className={styles.productGrid}>
                        {products.map((product, index) => (
                            <CatalogCard
                                key={index}
                                title={product.Product}
                                description={product.productDescription}
                                href={`product/${product.id}`}
                                imageCatalog={product.images}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Catalog;
