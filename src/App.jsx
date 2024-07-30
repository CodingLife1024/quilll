import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './pages/categories/main'; // Importing Category component
import BookList from './pages/booklist/main';
import Book from './pages/book/main';
import Author from './pages/author/main';
import About from './pages/about/main';
import Contact from './pages/contact/main';
import BookListNew from './pages/booklistnew/main';
import Topbar from './components/topbar/main';
import SideBar from './components/sidebar/main';
import './App.css';

function App() {
    return (
        <Router>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Topbar />
                <SideBar />
                <Routes>
                    <Route path="/" element={<Category />} />
                    <Route
                        path="/books"
                        element={<BookList apiPath="/api/books" toPath="/books/search" additionalQuery="&sort_by=upload_date" />}
                    />
                    <Route path="/books/search" element={<Book />} />
                    <Route path="/authors/search" element={<Author />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/recents" element={<BookListNew apiPath="/api/books?sort_by=upload_date" toPath="/books/search"/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
