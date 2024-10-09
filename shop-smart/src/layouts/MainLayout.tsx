// src/layouts/MainLayout.js
import React from 'react';
import Navbar from '../components/Navbar'; // Komponen Navbar
import Footer from '../components/Footer'; // Komponen Footer

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
