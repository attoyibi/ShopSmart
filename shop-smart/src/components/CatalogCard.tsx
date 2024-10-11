// src/components/CatalogCard.js
import React from 'react';
import styles from '@/styles/components/CatalogCard.module.scss';
import Link from 'next/link';
import Image from 'next/image'; // Import Image dari Next.js
// import imageCatalog from "@/../../public/assets/images/hero-image.png"
interface CatalogCardProps {
    title: string;
    description: string;
    href: string;
    imageCatalog: string;
    price: string;
}
const CatalogCard: React.FC<CatalogCardProps> = ({ title, description, href, imageCatalog, price }) => {

    console.log('title catalog =', imageCatalog);

    return (
        <div className={styles.card}>
            <Link style={{ textDecoration: "none", color: "inherit" }} href={href}>
                <div className={styles.imageWrapper}>

                    <Image
                        className={styles.image}
                        src={imageCatalog}
                        alt={title}
                        layout="responsive"
                        width={500}
                        height={300}
                        objectFit="cover"
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.price}>{price}</p>
                    <p className={styles.description}>{description}</p>
                    <Link href={href}>
                        <button className={styles.detailButton}>Lihat Detail</button>
                    </Link>
                </div>
            </Link>
        </div >
    );
};

export default CatalogCard;
