import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-title">LankaRental</h3>
                        <p className="footer-desc">
                            Your trusted partner for self-drive and chauffeur-driven car rentals in Sri Lanka.
                            Safe, reliable, and affordable.
                        </p>
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/listings">Our Fleet</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-subtitle">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services">Self-Drive Rental</Link></li>
                            <li><Link to="/services">Car with Driver</Link></li>
                            <li><Link to="/services">Airport Transfer</Link></li>
                            <li><Link to="/services">Long Term Rental</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-subtitle">Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <MapPin size={18} />
                                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>+94 77 123 4567</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>info@lankarental.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} LankaRental. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
