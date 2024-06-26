import React from 'react';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function Book() {
    return (
        <>
            <Helmet>
                <title>Book</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.book}>
                    <div className={styles.cover-and-desc}>
                        <div className={styles.cover}></div>
                        <div className={styles.desc}></div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.title}></div>
                        <div className={styles.author}></div>
                        <div className={styles.rating}></div>
                        <div className={styles.price}></div>
                        <div className={styles.buy}></div>
                    </div>
                </div>
                <div className={styles.author}>
                    <div className={styles.avatar}></div>
                    <div className={styles.name}></div>
                    <div className={styles.bio}></div>
                </div>
            </div>
        </>
    )
}

export default Book;