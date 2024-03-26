// src/components/Navbar.js
import React from 'react';
import '../../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Pawsitively Yours</div>
            <ul className="navbar-links">
                <li><a href="/" className="navbar-link">Home</a></li>
                <li><a href="/about" className="navbar-link">About</a></li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
}

export default Navbar;
