// src/App.tsx
import React from 'react';
import HeroSection from '@/components/HeroSection'
import MainLayout from '@/layouts/MainLayout';
const App = () => {
    return (
        <>
            <MainLayout>
                <HeroSection />
            </MainLayout>
        </>
    );
};

export default App;
