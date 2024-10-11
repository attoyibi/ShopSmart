'use client';
import { useEffect } from 'react';
import styles from '@/styles/components/CategorySection.module.scss';
import Image from 'next/image';
import { useProductStore } from '@/lib/store';

const CategorySection = () => {
    const { setCategory, fetchProducts } = useProductStore();

    // Set default category when the component mounts
    useEffect(() => {
        setCategory('product');
        fetchProducts(); // Fetch products for the default category
    }, [setCategory, fetchProducts]);

    // Handle category click
    const handleCategoryClick = (category: string) => {
        setCategory(category);
        fetchProducts(); // Fetch products for the selected category
    };

    return (
        <div className={styles.categoryContainer}>
            <h2 className={styles.categoryTitle}>Category</h2>
            <div className={styles.categoryIcons}>
                {/* Kategori Makanan */}
                <div className={styles.categoryIcon} onClick={() => handleCategoryClick('product')}>
                    <Image src="/assets/icons/fashion.png" alt="Fashion" width={40} height={40} />
                    <p>fashion</p>
                </div>

                {/* Kategori Fashion */}
                <div className={styles.categoryIcon} onClick={() => handleCategoryClick('Food')}>
                    <Image src="/assets/icons/food.png" alt="Food" width={40} height={40} />
                    <p>food</p>
                </div>

                {/* Kategori Elektronik */}
                <div className={styles.categoryIcon} >
                    <Image src="/assets/icons/electronics.svg" alt="Electronics" width={40} height={40} />
                    <p>Electronics</p>
                </div>

                {/* Kategori Semua */}
                <div className={styles.categoryIcon} >
                    <Image src="/assets/icons/all.png" alt="All Products" width={40} height={40} />
                    <p>All</p>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;
