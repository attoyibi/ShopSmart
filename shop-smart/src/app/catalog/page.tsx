import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/components/Catalog.module.scss';

import CatalogClientComponent from '@/components/CatalogClientComponent';

import CategorySection from '@/components/CategorySection';


const Catalog = async () => {

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
