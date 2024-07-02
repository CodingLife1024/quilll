import React from 'react';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function Category() {
    return (
        <>
            <Helmet>
                <title>Categories</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\poetry.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Poetry</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\romance.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Romance</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\fiction.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Fiction</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\nonfiction.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Non-fiction</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\memoirs.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Memoirs</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\shortstories.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Short Stories</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\historical.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Historical</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\drama.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Drama</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\graphicnovels.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Graphic Novels</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>

                    <div className={styles.category}>
                        <div className={styles.categoryImage}>
                            <img src="src\pages\categories\essays.jpeg" alt="Category" />
                        </div>
                        <div className={styles.categoryTitle}>Essays</div>
                        <div className={styles.categoryNumber}>564 Items</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
