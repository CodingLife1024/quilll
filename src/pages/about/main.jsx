import React from 'react';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

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

                    <p>Welcome to our Queer Indian Books Library, a unique and much-needed platform that aims to bring together and celebrate queer literature in India. Our mission is to provide a space where readers can find books that reflect the diverse and rich experiences of the Indian queer community.</p>

                    <p>Queer literature in India often struggles to find mainstream visibility, yet it plays a crucial role in offering representation, fostering understanding, and building a sense of community. This library is dedicated to ensuring that these important voices and stories are accessible to everyone, helping to challenge stereotypes and promote inclusivity through the power of literature.</p>

                    <p>The Queer Indian Books Library was developed by a passionate student from IIT Delhi. Motivated by a deep commitment to social justice and an avid love for literature, the developer envisioned this platform as a bridge to connect readers with the works of queer authors and stories from India. The library encompasses a wide range of genres, from fiction and poetry to memoirs and academic works, showcasing the vibrant and multifaceted nature of queer narratives.</p>

                    <p>We hope this library not only serves as a valuable resource for readers but also as a celebration of the resilience, creativity, and diversity of the Indian queer community. Thank you for visiting, and we hope you find our collection enriching and inspiring.</p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
