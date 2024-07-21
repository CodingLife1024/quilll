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
const defaultAuthorImage = "/author.svg";

function Book() {
    const query = useQuery();
    const bookName = query.get('name');
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                setBook(null); // Clear previous book data
                setLoading(true); // Set loading state to true
                const response = await axios.get(`/api/books/search?name=${encodeURIComponent(bookName)}`, {
                    headers: {
                        'Cache-Control': 'no-cache',
                    }
                });
                console.log('API response:', response.data); // Debugging log
                const books = response.data;
                setBook(Array.isArray(books) ? books[0] : books); // Set the first book if multiple are returned
                setLoading(false);
            } catch (err) {
                console.error('API error:', err); // Debugging log
                setError(err);
                setLoading(false);
            }
        };

        fetchBook();
    }, [bookName]); // Add bookName as a dependency to re-fetch when it changes

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
                                <img
                                    src={book.book_image || defaultImage}
                                    onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }}
                                    alt={book.book_name}
                                />
                            </div>
                            <div className={styles.desc}>
                                {book.book_desc}
                            </div>
                        </div>

                        <div className={styles.bookInfo}>
                            <div className={styles.bookTitle}>{book.book_name}</div>
                            <div className={styles.bookDate}>Release Date: {new Date(book.release_date).toLocaleDateString()}</div>
                            <div className={styles.bookUploaded}>Uploaded on: {new Date(book.upload_date).toLocaleDateString()}</div>
                            <div className={styles.bookTags}>Tags: {Array.isArray(book.tags) ? book.tags.join(', ') : book.tags}</div>
                            <div className={styles.bookLink}>
                                <a href={book.link} target="_blank" rel="noopener noreferrer">amazon</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.author}>
                        <div className={styles.nameImg}>
                            <div className={styles.authorImg}>
                                <img
                                    src={book.author_image || defaultAuthorImage}
                                    onError={(e) => { e.target.onerror = null; e.target.src = defaultAuthorImage; }}
                                    alt={book.author_name}
                                />
                            </div>
                            <div className={styles.authorName}>
                                {book.author_id}
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
