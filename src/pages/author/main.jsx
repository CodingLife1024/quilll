import React from 'react';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';
import BookList from '../booklist/main';

function Author() {
    return (
        <>
            <Helmet>
                <title>Author</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
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

                <div className={styles.booksByAuthor}>
                    Books By author
                </div>

                <div className={styles.booklist}>
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

export default Author;