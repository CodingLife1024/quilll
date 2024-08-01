import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, Link } from 'react-router-dom';
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
    const [author, setAuthor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                setBook(null);
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/books/search?name=${encodeURIComponent(bookName)}`, {
                    headers: {
                        'Cache-Control': 'no-cache',
                    }
                });
                console.log('Books API response:', response.data);
                const books = response.data;
                const bookData = Array.isArray(books) ? books[0] : books;
                setBook(bookData);

                if (bookData && bookData.author_name) {
                    const authorResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/authors/search?name=${encodeURIComponent(bookData.author_name)}`);
                    console.log('Author API response:', authorResponse.data);
                    const authors = authorResponse.data;
                    const authorData = Array.isArray(authors) ? authors[0] : authors;
                    setAuthor(authorData);
                }

                setLoading(false);
            } catch (err) {
                console.error('API error:', err);
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

                    <div className={styles.authorr}>
                        <div className={styles.nameImg}>
                            <div className={styles.authorImg}>
                                <img
                                    src={author?.author_image || defaultAuthorImage}
                                    onError={(e) => { e.target.onerror = null; e.target.src = defaultAuthorImage; }}
                                    alt={author?.author_name}
                                />
                            </div>
                            <div className={styles.authorName}>
                                <Link to={`/authors/search?name=${encodeURIComponent(book.author_name)}`}>
                                    {author?.author_name}
                                </Link>
                            </div>
                        </div>
                        <div className={styles.authorAbout}>
                            {author?.author_desc}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Book;
