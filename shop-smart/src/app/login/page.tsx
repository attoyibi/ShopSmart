// src/pages/login/index.tsx
"use client"
import React, { useState } from 'react';
import styles from '@/styles/components/Login.module.scss';
import MainLayout from '@/layouts/MainLayout'; // Menggunakan layout yang sudah dibuat sebelumnya

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Logika login bisa ditambahkan di sini
        console.log({ email, password });
    };

    return (
        <MainLayout>
            <div className={styles.loginContainer}>
                <div className={styles.loginBox}>
                    <h1 className={styles.title}>Login</h1>
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default LoginPage;
