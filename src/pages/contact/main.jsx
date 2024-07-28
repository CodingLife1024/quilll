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
                <title>About</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.title}>About</div>
                <div className={styles.desc}>
                    This is a simple React application that uses the Google Books API to search for books.
                    The application is built using React, React Router, Axios, and Tailwind CSS.
                    The application is deployed on Netlify.
                </div>
            </div>
        </>
    );
}

export default About;
