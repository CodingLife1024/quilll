import React from 'react';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function BookList() {
    return (
        <>
            <Helmet>
                <title>Book List</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.book}>
                        <div className={styles.bookImage}>
                            <img src="src\pages\booklist\bookcover.svg" alt="book" />
                        </div>
                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>Harry Potter and the Philosopher's Stone</div>
                            <div className={styles.bookAuthor}>Author: J.K. Rowling</div>
                            <div className={styles.bookDate}>Release Date: 01-01-1999</div>
                            <div className={styles.bookUploaded}>Uploaded on: 01-01-2024</div>
                            <div className={styles.bookTags}>Tags: young adult, fantasy</div>
                        </div>
                    </div>

                    <div className={styles.book}>
                        <div className={styles.bookImage}>
                            <img src="src\pages\booklist\bookcover.svg" alt="book" />
                        </div>
                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>Harry Potter and the Philosopher's Stone</div>
                            <div className={styles.bookAuthor}>Author: J.K. Rowling</div>
                            <div className={styles.bookDate}>Release Date: 01-01-1999</div>
                            <div className={styles.bookUploaded}>Uploaded on: 01-01-2024</div>
                            <div className={styles.bookTags}>Tags: young adult, fantasy</div>
                        </div>
                    </div>

                    <div className={styles.book}>
                        <div className={styles.bookImage}>
                            <img src="src\pages\booklist\bookcover.svg" alt="book" />
                        </div>
                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>Harry Potter and the Philosopher's Stone</div>
                            <div className={styles.bookAuthor}>Author: J.K. Rowling</div>
                            <div className={styles.bookDate}>Release Date: 01-01-1999</div>
                            <div className={styles.bookUploaded}>Uploaded on: 01-01-2024</div>
                            <div className={styles.bookTags}>Tags: young adult, fantasy</div>
                        </div>
                    </div>

                    <div className={styles.book}>
                        <div className={styles.bookImage}>
                            <img src="src\pages\booklist\bookcover.svg" alt="book" />
                        </div>
                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>Harry Potter and the Philosopher's Stone</div>
                            <div className={styles.bookAuthor}>Author: J.K. Rowling</div>
                            <div className={styles.bookDate}>Release Date: 01-01-1999</div>
                            <div className={styles.bookUploaded}>Uploaded on: 01-01-2024</div>
                            <div className={styles.bookTags}>Tags: young adult, fantasy</div>
                        </div>
                    </div>

                    <div className={styles.book}>
                        <div className={styles.bookImage}>
                            <img src="src\pages\booklist\bookcover.svg" alt="book" />
                        </div>
                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>Harry Potter and the Philosopher's Stone</div>
                            <div className={styles.bookAuthor}>Author: J.K. Rowling</div>
                            <div className={styles.bookDate}>Release Date: 01-01-1999</div>
                            <div className={styles.bookUploaded}>Uploaded on: 01-01-2024</div>
                            <div className={styles.bookTags}>Tags: young adult, fantasy</div>
                        </div>
                    </div>

                    <div className={styles.book}>
                        <div className={styles.bookImage}>
                            <img src="src\pages\booklist\bookcover.svg" alt="book" />
                        </div>
                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>Harry Potter and the Philosopher's Stone</div>
                            <div className={styles.bookAuthor}>Author: J.K. Rowling</div>
                            <div className={styles.bookDate}>Release Date: 01-01-1999</div>
                            <div className={styles.bookUploaded}>Uploaded on: 01-01-2024</div>
                            <div className={styles.bookTags}>Tags: young adult, fantasy</div>
                        </div>
                    </div>

                    <div className={styles.book}>
                        <div className={styles.bookImage}>
                            <img src="src\pages\booklist\bookcover.svg" alt="book" />
                        </div>
                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>Harry Potter and the Philosopher's Stone</div>
                            <div className={styles.bookAuthor}>Author: J.K. Rowling</div>
                            <div className={styles.bookDate}>Release Date: 01-01-1999</div>
                            <div className={styles.bookUploaded}>Uploaded on: 01-01-2024</div>
                            <div className={styles.bookTags}>Tags: young adult, fantasy</div>
                        </div>
                    </div>

                    <div className={styles.book}>
                        <div className={styles.bookImage}>
                            <img src="src\pages\booklist\bookcover.svg" alt="book" />
                        </div>
                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>Harry Potter and the Philosopher's Stone</div>
                            <div className={styles.bookAuthor}>Author: J.K. Rowling</div>
                            <div className={styles.bookDate}>Release Date: 01-01-1999</div>
                            <div className={styles.bookUploaded}>Uploaded on: 01-01-2024</div>
                            <div className={styles.bookTags}>Tags: young adult, fantasy</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default BookList;
