import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/main';
import Topbar from '../../components/topbar/main';
import styles from './style.module.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

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
                        <div key={index} className={styles.book}>
                            <div className={styles.bookImage}>
                                <img src="/bookcover.svg" alt={category.author_id} />
                            </div>
                            <div className={styles.bookInfo}>
                                <div className={styles.bookTitle}>{book.title}</div>
                                <div className={styles.bookAuthor}>Author: {book.author_id}</div>
                                <div className={styles.bookDate}>Release Date: {book.release_date}</div>
                                <div className={styles.bookUploaded}>Uploaded on: {book.upload_date}</div>
                                <div className={styles.bookTags}>
                                    Tags: {Array.isArray(book.tags) ? book.tags.join(', ') : 'No tags'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BookList;
