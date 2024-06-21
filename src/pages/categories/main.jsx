import React from 'react';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function Category() {
    return (
        <>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\category.svg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\category.svg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\category.svg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\category.svg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\category.svg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\category.svg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\category.svg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\category.svg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\category.svg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
