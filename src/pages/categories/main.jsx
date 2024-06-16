import React from 'react';
import Topbar from '../../components/topbar/main';
import styles from './style.module.css';

function Category() {
    return (
        <>
            <Topbar />
            <div className={styles.category}>category</div>
        </>
    );
}

export default Category;
