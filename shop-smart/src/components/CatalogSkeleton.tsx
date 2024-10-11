import React from 'react';
import styles from '@/styles/components/CatalogSkeleton.module.scss';

const CatalogSkeleton = () => {
    return (
        <div className={styles.catalogSkeletonContainer}>
            {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className={styles.cardSkeleton}>
                    <div className={styles.cardSkeletonImage}>&nbsp;</div>
                    <div className={styles.cardSkeletonInfo}>
                        <div className={styles.cardSkeletonTitle}>&nbsp;</div>
                        <div className={styles.cardSkeletonPrice}>&nbsp;</div>
                        <div className={styles.cardSkeletonDescription}>&nbsp;</div>
                        <div className={styles.cardSkeletonButton}>&nbsp;</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CatalogSkeleton;