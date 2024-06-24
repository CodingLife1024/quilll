import React from 'react';
import Category from './pages/categories/main'; // Importing Category component
import BookList from './pages/booklist/main';
import Topbar from './components/topbar/main';
import SideBar from './components/sidebar/main';
import './App.css';

function App() {
    return (
        <>
            <BookList />
        </>
    );
}

export default App;
