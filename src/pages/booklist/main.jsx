import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/main';
import Topbar from '../../components/topbar/main';
import styles from './style.module.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const defaultImage = "/bookcover.svg";

function BookList() {
    const query = useQuery();
    const category = query.get('category');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`/api/books?category=${category}`);
                setBooks(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchBooks();
    }, [category]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Helmet>
                <title>{`${category.charAt(0).toUpperCase() + category.slice(1)}`}</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.main}>
                    {books.map((book, index) => (
                        <Link
                            key={index}
                            to={`/books/search?name=${encodeURIComponent(book.book_name)}`}
                            className={styles.book}
                        >
                            <div className={styles.bookImage}>
                                <img
                                    src={book.book_image || defaultImage}
                                    onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }}
                                    alt={book.book_name}
                                />
                            </div>
                            <div className={styles.bookInfo}>
                                <div className={styles.bookTitle}>{book.book_name}</div>
                                <div className={styles.bookAuthor}>Author: {book.author_name}</div>
                                <div className={styles.bookDate}>Release Date: {new Date(book.release_date).toLocaleDateString()}</div>
                                <div className={styles.bookUploaded}>Uploaded on: {new Date(book.upload_date).toLocaleDateString()}</div>
                                <div className={styles.bookTags}>
                                    Tags: {Array.isArray(book.tags) ? book.tags.join(', ') : book.tags}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BookList;
