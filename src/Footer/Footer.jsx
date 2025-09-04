import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#info">Info</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#bookings">Bookings</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-middle">
                    <ul>
                        <li><a href="#style-guide">Style Guide</a></li>
                        <li><a href="#licenses">Licenses</a></li>
                        <li><a href="#instructions">Instructions</a></li>
                        <li><a href="#changelog">Changelog</a></li>
                        <li><a href="#password">Password</a></li>
                        <li><a href="#404">404</a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <ul>
                        <li>© Latte Cafe 2022.</li>
                        <li>Built by Nikolai Bain.</li>
                        <li>Powered by Webflow.</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;