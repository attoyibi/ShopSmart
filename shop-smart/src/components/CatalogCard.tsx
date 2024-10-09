// src/components/CatalogCard.js
import React from 'react';
import styles from '@/styles/components/CatalogCard.module.scss';
import Link from 'next/link';
import Image from 'next/image'; // Import Image dari Next.js
import imageCatalog from "@/../../public/assets/images/hero-image.png"
const CatalogCard = ({ title, description, imageSrc, href }) => {
    return (
        <div className={styles.card}>
            <Link href={href} className={styles.imageWrapper}>
                <Image
                    className={styles.image}
                    src={imageCatalog} // Use the imageSrc prop here
                    alt={title}
                    layout="responsive"
                    width={500} // Atur width sesuai dengan proporsi
                    height={300} // Atur height sesuai dengan proporsi
                    objectFit="cover" // Agar gambar menutupi seluruh area tanpa distorsi
                />
            </Link>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <Link href={href}>
                    <button className={styles.detailButton}>Lihat Detail</button>
                </Link>
            </div>
        </div>
    );
};

export default CatalogCard;
