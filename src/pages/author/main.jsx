import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const defaultAuthorImage = "/author.svg";
const defaultBookImage = "/bookcover.svg";

function Author() {
    const query = useQuery();
    const authorName = query.get('name');
    const [author, setAuthor] = useState(null);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAuthorDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch author details
                const authorResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/authors/search?name=${encodeURIComponent(authorName)}`, {
                    headers: {
                        'Cache-Control': 'no-cache',
                    }
                });
                console.log("Author API data: ", authorResponse.data);
                const fetchedAuthor = authorResponse.data[0];

                // Fetch books by author
                const booksResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/authors/${fetchedAuthor._id}/books`, {
                    headers: {
                        'Cache-Control': 'no-cache',
                    }
                });
                const fetchedBooks = booksResponse.data;

                setAuthor(fetchedAuthor);
                setBooks(fetchedBooks);
                setLoading(false);
            } catch (error) {
                console.error('API error:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchAuthorDetails();
    }, [authorName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!author) {
        return <div>No author found.</div>;
    }

    return (
        <>
            <Helmet>
                <title>{author.author_name}</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.author}>
                    <div className={styles.nameImg}>
                        <div className={styles.authorImg}>
                            <img src={author.author_image || defaultAuthorImage}
                                onError={(e) => { e.target.onerror = null; e.target.src = defaultAuthorImage; }}
                                alt="Author"
                            />
                        </div>
                        <div className={styles.authorName}>
                            {author.author_name}
                        </div>
                    </div>
                    <div className={styles.authorAbout}>
                        {author.author_desc}
                    </div>
                </div>

                <div className={styles.booksByAuthor}>
                    Books By {author.author_name}
                </div>

                <div className={styles.booklist}>
                    {books.map((book, index) => (
                        <Link key={index}
                            to={`/books/search?name=${encodeURIComponent(book.book_name)}`}
                            className={styles.book}
                        >
                            <div className={styles.bookImage}>
                                <img src={book.book_image || defaultBookImage}
                                    onError={(e) => { e.target.onerror = null; e.target.src = defaultBookImage; }}
                                    alt={book.book_name}
                                />
                            </div>
                            <div className={styles.bookInfo}>
                                <div className={styles.bookTitle}>{book.book_name}</div>
                                <div className={styles.bookAuthor}>Author: {book.author_name}</div>
                                <div className={styles.bookDate}>Release Date: {new Date(book.release_date).toLocaleDateString()}</div>
                                <div className={styles.bookUploaded}>Uploaded on: {new Date(book.upload_date).toLocaleDateString()}</div>
                                {book.tags && (
                                    <div className={styles.bookTags}>{book.tags}</div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Author;
