import React, { useState } from 'react';
import styles from "./style.module.css";
import hamburgerIcon from './hamburger.svg';
import searchIcon from './search.svg';
import SideBar from '../sidebar/main';

const Topbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                Quilll
            </div>
            <div className={styles.mid}>
                <div className={styles.left} onClick={toggleSidebar}>
                    <img src={hamburgerIcon} alt="Hamburger Icon" />
                </div>
                <div className={styles.right}>
                    <div className={styles.sort}>
                        {/* <div className={styles.sortby}>Sort By</div> */}
                        <select className={styles.dropdown} defaultValue="category">
                            <option value="category">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Default Option</option>
                        </select>
                    </div>
                    <div className={styles.search}>
                        <img src={searchIcon} alt="Search"/>
                        <input className={styles.searchbar} type="text" placeholder="Search..." />
                    </div>
                </div>
            </div>
            <div className={styles.bot}>
                {sidebarOpen && <SideBar />}
            </div>
        </div>
    );
}

export default Topbar;
