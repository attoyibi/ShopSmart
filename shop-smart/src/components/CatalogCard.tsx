// src/components/CatalogCard.js
import React from 'react';
import styles from '@/styles/components/CatalogCard.module.scss';
import Link from 'next/link';
import Image from 'next/image'; // Import Image dari Next.js
import imageCatalog from "@/../../public/assets/images/hero-image.png"
interface CatalogCardProps {
    title: string;
    description: string;
    href: string;
}
const CatalogCard: React.FC<CatalogCardProps> = ({ title, description, href }) => {
    return (
        <div className={styles.card}>
            <Link href={href} className={styles.imageWrapper}>
                <Image
                    className={styles.image}
                    src={imageCatalog}
                    alt={title}
                    layout="responsive"
                    width={500}
                    height={300}
                    objectFit="cover"
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
