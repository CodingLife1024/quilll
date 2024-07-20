import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const defaultImage = "/bookcover.svg";

function Book() {
    const query = useQuery();
    const bookName = query.get('name');
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`/api/books?name=${encodeURIComponent(bookName)}`);
                const books = response.data;
                setBook(Array.isArray(books) ? books[0] : books); // Set the first book if multiple are returned
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchBook();
    }, [bookName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!book) {
        return <div>No book found.</div>;
    }

    return (
        <>
            <Helmet>
                <title>{book.book_name}</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.book}>

                        <div className={styles.coverdesc}>
                            <div className={styles.cover}>
                                <img src={book.book_image ? book.book_image : defaultImage} alt="book" />
                            </div>
                            <div className={styles.desc}>
                                {book.description}
                            </div>
                        </div>

                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>{book.book_name}</div>
                            <div className={styles.bookDate}>Release Date: {new Date(book.release_date).toLocaleDateString()}</div>
                            <div className={styles.bookUploaded}>Uploaded on: {new Date(book.upload_date).toLocaleDateString()}</div>
                            <div className={styles.bookTags}>Tags: {Array.isArray(book.tags) ? book.tags.join(', ') : book.tags}</div>
                            <div className={styles.bookLink}><a href={book.link} target="_blank" rel="noopener noreferrer">amazon</a></div>
                        </div>
                    </div>

                    <div className={styles.author}>
                        <div className={styles.nameImg}>
                            <div className={styles.authorImg}>
                                <img src="src\pages\book\author.svg" alt="author" />
                            </div>
                            <div className={styles.authorName}>
                                {book.author_name}
                            </div>
                        </div>
                        <div className={styles.authorAbout}>
                            {book.author_bio}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Book;
