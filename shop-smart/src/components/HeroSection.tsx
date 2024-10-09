// /components/HeroSection.js
import React from 'react';
import styles from '@/styles/components/HeroSection.module.scss';
import Image from 'next/image';
import Link from 'next/link'; // Import Link dari Next.js

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Selamat Datang di ShopSmart</h1>
                <p>Temukan produk terbaik untuk kebutuhan Anda dengan harga yang bersaing.</p>
                <Link href="/catalog" passHref> {/* Gunakan Link untuk navigasi */}
                    <span className={styles.ctaButton}>Jelajahi Produk</span> {/* Link menjadi tombol */}
                </Link>
            </div>
            <div className={styles.heroImage}>
                <Image
                    src="/assets/images/hero-image.png" // Ganti dengan path gambar yang sesuai
                    alt="ShopSmart Hero Image"
                    layout="responsive"
                    width={700} // Sesuaikan dengan ukuran gambar
                    height={400} // Sesuaikan dengan ukuran gambar
                />
            </div>
        </section>
    );
};

export default HeroSection;
