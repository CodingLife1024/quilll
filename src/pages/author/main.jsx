import React from 'react';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function Author() {
    return (
        <>
            <Helmet>
                <title>Author</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                
            </div>
        </>
    );
}

export default Author;