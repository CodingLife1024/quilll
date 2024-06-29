import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Category from './pages/categories/main'; // Importing Category component
import BookList from './pages/booklist/main';
import Book from './pages/book/main';
import Author from './pages/author/main';
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
                    <Route path="/" element={<Author />} />
                    <Route path="/booklist" element={<BookList />} />
                    <Route path="/category" element={<Category />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
