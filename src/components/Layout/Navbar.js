// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            {/* Navbar content */}
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
}

export default Navbar;
