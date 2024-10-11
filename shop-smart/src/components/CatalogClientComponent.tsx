"use client";

import { useEffect } from 'react';
import { useProductStore } from '@/lib/store';
import CatalogCard from '@/components/CatalogCard';
import styles from '@/styles/components/Catalog.module.scss';
import CatalogSkeleton from './CatalogSkeleton';
const CatalogClientComponent = () => {
    const { products, setProducts, fetchProducts, isLoading, error, category } = useProductStore();
    useEffect(() => {
        // if (initialProducts.length > 0) {
        //     setProducts(initialProducts);
        // } else {
        fetchProducts();
        // }
    }, [setProducts, fetchProducts]);

    if (isLoading) return <p><CatalogSkeleton /></p>;
    if (error) return <p>{error}</p>;
    if (!products || products.length === 0) return <p>No products available</p>;

    return (
        <div >
            <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', paddingLeft: '20px' }}>
                    List Catalog
                </h2>
            </div>
            <div className={styles.productGrid}>
                {products.map((product, index) => (
                    <CatalogCard
                        key={index}
                        title={product.Product}
                        description={product.productDescription}
                        href={`${category}/${product.id}`}
                        imageCatalog={product.images}
                        price={`$ ${product.price}`}
                    // You can also set the inline styles directly here if needed
                    />
                ))}
            </div>
        </div >
    );
};

export default CatalogClientComponent;
