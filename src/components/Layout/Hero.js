// components/Hero.js
import React from 'react';
import '../../styles/Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to Pawsitively Yours</h1>
                <p>A pawsitive solution for loving, educated pet care</p>
                <button className="cta-button">Get Started</button>
            </div>
        </section>
    );
}

export default Hero;
