import React from 'react';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

const defaultAuthorImage = "/author.svg";
const defaultBookImage = "/bookcover.svg";

function About() {
    return (
        <>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.title}>About Us</div>
                <div className={styles.descBox}>
                    <div className={styles.desc}>

                        <p>Welcome to our Queer Indian Books Library, a dedicated platform developed by a student from IIT Delhi. Our mission is to curate and provide access to a comprehensive collection of literature that explores and celebrates queer experiences in India.</p>

                        <p>This project aims to be an invaluable resource for readers seeking to discover and engage with books that represent the diverse voices and stories within the Indian queer community. Our library includes a wide range of genres, from fiction and poetry to memoirs and academic works, all authored by or about queer individuals in India.</p>

                        <p>Built using React, React Router, and Axios, and styled with modern CSS practices, our application ensures a seamless and user-friendly experience. We have integrated various features to enhance your browsing experience, including search functionality, book and author profiles, and categorized listings.</p>

                        <p>As we continue to grow, we are committed to expanding our collection and fostering an inclusive environment where everyone can find representation and support through literature. Our platform is not only a library but also a celebration of queer Indian voices.</p>

                        <p>Thank you for visiting, and we hope you find our library enriching and inspiring.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
