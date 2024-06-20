import React, { useState } from 'react';
import styles from "./style.module.css";
import hamburgerIcon from './hamburger.svg';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={styles.openButton} onClick={toggleSidebar}>
                <img src={hamburgerIcon} alt="Hamburger Icon" />
            </button>
            <div className={`${styles.container} ${isOpen ? styles.open : ''}`}>
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
        </>
    );
};

export default SideBar;
