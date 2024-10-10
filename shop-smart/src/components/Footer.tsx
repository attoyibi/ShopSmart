// /components/Footer.js
import React from 'react';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.about}>
                    <h4>About Us</h4>
                    <p>We are dedicated to providing the best products to our customers.</p>
                </div>
                {/* <div className={styles.links}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/catalog">Catalo</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div> */}
                <div className={styles.contact}>
                    <h4>Contact Us</h4>
                    <p>Email: support@shopsmart.com</p>
                    <p>Phone: +62 123 456 789</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} ShopSmart. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
