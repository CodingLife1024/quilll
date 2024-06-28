import React from 'react';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function Book() {
    return (
        <>
            <Helmet>
                <title>Book</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.book}>

                        <div className={styles.coverdesc}>
                            <div className={styles.cover}>
                                <img src="src\pages\book\bookcover.svg" alt="book" />
                            </div>
                            <div className={styles.desc}>
                                The story begins with a young orphan named Harry Potter, who leads a miserable life with his cruel aunt, uncle, and cousin. Little does he know that he is not just an ordinary boy; he is a wizard, and his destiny is intertwined with the magical realm. When Harry receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry, his life takes an exhilarating turn.
                            </div>
                        </div>

                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>Harry Potter and the Philosopher's Stone</div>
                            <div className={styles.bookDate}>Release Date: 01-01-1999</div>
                            <div className={styles.bookUploaded}>Uploaded on: 01-01-2024</div>
                            <div className={styles.bookTags}>Tags: young adult, fantasy</div>
                            <div className={styles.bookLink}>amazon</div>
                        </div>
                    </div>

                    <div className={styles.author}>
                        <div className={styles.nameImg}>
                            <div className={styles.authorImg}>
                                <img src="src\pages\book\author.svg" alt="author" />
                            </div>
                            <div className={styles.authorName}>
                                J.K. Rowling
                            </div>
                        </div>
                        <div className={styles.authorAbout}>
                            The seven-book series, chronicling the adventures of a young wizard, Harry Potter, and his friends at Hogwarts School of Witchcraft and Wizardry, became a cultural phenomenon. The books have been translated into over 80 languages, sold more than 500 million copies worldwide, and spawned a successful film franchise, making Rowling one of the best-selling authors in history.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Book;