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
                <div className={styles.main}>
                    <div className={styles.book}>

                        <div className={styles.cover-and-desc}>
                            <div className={styles.cover}>
                                <img src="src\pages\booklist\bookcover.svg" alt="book" />
                            </div>
                            <div className={styles.desc}>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Book;