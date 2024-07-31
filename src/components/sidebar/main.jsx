import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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
                        <Link to="/" className={styles.link}>Home</Link>
                        {/* <Link to="/popular" className={styles.link}>Popular</Link> */}
                        <Link to="/recents" className={styles.link}>Recents</Link>
                        {/* <Link to="/popular-authors" className={styles.link}>Popular Authors</Link> */}
                        <Link to="/about" className={styles.link}>About Us</Link>
                        <Link to="/contact" className={styles.link}>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
