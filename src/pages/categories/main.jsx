import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function Category() {
    const categories = [
        { name: 'Poetry', image: 'poetry.jpeg', category: 'poetry' },
        { name: 'Romance', image: 'romance.jpeg', category: 'romance' },
        { name: 'Fiction', image: 'fiction.jpeg', category: 'fiction' },
        { name: 'Non-fiction', image: 'nonfiction.jpeg', category: 'nonfiction' },
        { name: 'Memoirs', image: 'memoirs.jpeg', category: 'memoirs' },
        { name: 'Short Stories', image: 'shortstories.jpeg', category: 'shortstories' },
        { name: 'Historical', image: 'historical.jpeg', category: 'historical' },
        { name: 'Drama', image: 'drama.jpeg', category: 'drama' },
        { name: 'Graphic Novels', image: 'graphicnovels.jpeg', category: 'graphicnovels' },
        { name: 'Essays', image: 'essays.jpeg', category: 'essays' }
    ];

    return (
        <>
            <Helmet>
                <title>Categories</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.main}>
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            to={`/books?category=${category.category}`}
                            className={styles.category}
                        >
                            <div className={styles.categoryImage}>
                                <img
                                    src={`src/pages/categories/${category.image}`}
                                    alt={category.name}
                                />
                            </div>
                            <div className={styles.categoryTitle}>{category.name}</div>
                            <div className={styles.categoryNumber}>564 Items</div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Category;
