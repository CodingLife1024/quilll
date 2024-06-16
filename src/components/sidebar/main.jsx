import React from 'react';
import styles from "./style.module.css";

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.full}>
                <div className={styles.drop}>
                    <div className={styles.welcome}>Welcome!</div>
                    <option value="Home">Home</option>
                    <option value="Popular">Popular</option>
                    <option value="Recents">Recents</option>
                    <option value="Popular Authors">Popular Authors</option>
                    <option value="About Us">About Us</option>
                    <option value="Contact">Contact</option>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
