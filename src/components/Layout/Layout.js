// Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Hero />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
