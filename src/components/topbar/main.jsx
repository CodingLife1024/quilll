import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./style.module.css";
import searchIcon from './search.svg';
import SideBar from '../sidebar/main';

const Topbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        let newApiPath = "/api/books?sort_by=upload_date";

        switch (selectedValue) {
            case 'category':
                newApiPath = "/api/books?sort_by=category";
                break;
            case 'name':
                newApiPath = "/api/books?sort_by=name";
                break;
            case 'upload_date':
                newApiPath = "/api/books?sort_by=upload_date";
                break;
            case 'release_date':
                newApiPath = "/api/books?sort_by=release_date";
                break;
            default:
                break;
        }

        navigate("/", { state: { apiPath: newApiPath, toPath: "/books/search" } });
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                Quilll
            </div>
            <div className={styles.mid}>
                <div className={styles.left} onClick={toggleSidebar}>
                </div>
                <div className={styles.right}>
                    <div className={styles.sort}>
                        <select className={styles.dropdown} defaultValue="category" onChange={handleDropdownChange}>
                            <option value="category">Category</option>
                            <option value="name">Name</option>
                            <option value="upload_date">Upload Date</option>
                            <option value="release_date">Release Date</option>
                        </select>
                    </div>
                    <div className={styles.search}>
                        <img src={searchIcon} alt="Search" />
                        <input className={styles.searchbar} type="text" placeholder="Search..." />
                    </div>
                </div>
            </div>
            <div className={styles.bot}>
                {sidebarOpen && <SideBar />}
            </div>
        </div>
    );
};

export default Topbar;
