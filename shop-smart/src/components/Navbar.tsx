'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/Navbar.module.scss';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <nav className={styles.backgroundNavbar}>
            <div className={styles.navbar}>
                {/* Left - Logo */}
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/assets/images/icon.png" alt="ShopSmart Logo" width={50} height={50} />
                        ShopSmart
                    </Link>
                </div>

                {/* Center - Navigation Links */}
                <ul className={`${styles.navLinks} ${menuActive ? styles.active : ''}`}>
                    <li><Link href="/catalog">Catalog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Right - Search Form, Cart, Account Icons */}
                <div className={styles.navRight}>
                    {/* Search Form */}
                    <form className={styles.searchForm}>
                        <input type="text" placeholder="Search products..." />
                        <button type="submit">
                            <Image src="/assets/icons/search-icon.png" alt="Search" width={20} height={20} />
                        </button>
                    </form>

                    {/* Cart Icon */}
                    {/* <div className={styles.icon}>
                        <Link href="/cart">
                            <Image src="/assets/icons/cart-icon.png" alt="Cart" width={30} height={30} />
                        </Link>
                    </div> */}

                    {/* Account Icon */}
                    <div className={styles.icon}>
                        <Link href="/login">
                            <Image src="/assets/icons/account-icon.png" alt="Account" width={30} height={30} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle - Hamburger Menu */}
                <div className={styles.menuToggle} onClick={() => setMenuActive(!menuActive)}>
                    <div className={styles.burgerIcon}>&#9776;</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
