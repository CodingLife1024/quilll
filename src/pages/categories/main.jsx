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
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                    <div className={styles.category}>Poetry</div>
                </div>
            </div>
        </>
    );
}

export default Category;
