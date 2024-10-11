import React from 'react';
import styles from '@/styles/components/AboutUs.module.scss';
import MainLayout from '@/layouts/MainLayout';

const AboutUs = () => {
    return (
        <MainLayout>
            <div className={styles.aboutUsContainer}>
                <div className={styles.hightConten}>
                    <h1 className={styles.title}>About Us</h1>
                    <p className={styles.description}>
                        Welcome to our company! We are dedicated to providing the best services
                        to our customers. Our team consists of experienced professionals who are
                        passionate about their work. We believe in innovation, quality, and
                        integrity.
                    </p>
                    <h2 className={styles.subTitle}>Our Mission</h2>
                    <p className={styles.description}>
                        Our mission is to deliver high-quality products that meet the needs of
                        our clients and exceed their expectations.
                    </p>
                    <h2 className={styles.subTitle}>Our Values</h2>
                    <ul className={styles.valuesList}>
                        <li>Customer Satisfaction</li>
                        <li>Innovation</li>
                        <li>Integrity</li>
                        <li>Teamwork</li>
                        <li>Sustainability</li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
};

export default AboutUs;
