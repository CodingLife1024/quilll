import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/topbar/main';
import Sidebar from '../../components/sidebar/main';
import styles from './style.module.css';

function BookList() {
    const { category } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`https://quilll-backend-api.vercel.app/books?category=${category}`);
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
                <title>Book List</title>
            </Helmet>
            <Topbar />
            <Sidebar />
            <div className={styles.container}>
                <div className={styles.main}>
                    {books.map((book, index) => (
                        <div key={index} className={styles.book}>
                            <div className={styles.bookImage}>
                                <img src="src/pages/booklist/bookcover.svg" alt="book" />
                            </div>
                            <div className={styles.bookInfo}>
                                <div className={styles.bookTitle}>{book.title}</div>
                                <div className={styles.bookAuthor}>Author: {book.author}</div>
                                <div className={styles.bookDate}>Release Date: {book.release_date}</div>
                                <div className={styles.bookUploaded}>Uploaded on: {book.upload_date}</div>
                                <div className={styles.bookTags}>Tags: {book.tags.join(', ')}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BookList;
