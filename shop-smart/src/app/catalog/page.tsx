import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/components/Catalog.module.scss';
// import Link from 'next/link';
import CatalogClientComponent from '@/components/CatalogClientComponent';
// import apiConfig from '@/config/apiConfig';
import CategorySection from '@/components/CategorySection';
// Fetch data directly in the server component
// const fetchProducts = async () => {
//     const response = await fetch(apiConfig.baseUrl);
//     console.log(`ini dalam fetch product = ${response}`);
//     if (!response.ok) throw new Error('Failed to fetch products');
//     return response.json();
// };

const Catalog = async () => {
    // const initialProducts = await fetchProducts();
    // console.log('catalog sebelum di kirim' + initialProducts);
    return (
        <MainLayout>
            <div className={styles.catalogContainer}>
                {/* make icon with text in here */}
                <div className={styles.catalogLayout}>
                    <CategorySection />
                    <CatalogClientComponent />
                </div>
            </div>
        </MainLayout>
    );
};

export default Catalog;
