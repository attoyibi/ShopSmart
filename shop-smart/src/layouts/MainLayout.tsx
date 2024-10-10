// src/layouts/MainLayout.js
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar'; // Komponen Navbar
import Footer from '../components/Footer'; // Komponen Footer
interface MainLayoutProps {
    children: ReactNode; // Define the type for children
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
