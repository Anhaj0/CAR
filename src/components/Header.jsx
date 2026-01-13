import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Car } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    <Car className="logo-icon" size={32} />
                    <div className="logo-text">
                        <span className="brand-name">LankaRental</span>
                        <span className="brand-tag">Premium Car Hire</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/listings" className={`nav-link ${isActive('/listings')}`}>Vehicles</Link>
                    <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                </nav>

                <div className="header-actions">
                    <a href="tel:+94771234567" className="btn btn-secondary contact-btn">
                        <Phone size={18} />
                        <span>+94 77 123 4567</span>
                    </a>
                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <nav className="mobile-nav-links">
                    <Link to="/" onClick={toggleMenu} className={isActive('/')}>Home</Link>
                    <Link to="/listings" onClick={toggleMenu} className={isActive('/listings')}>Vehicles</Link>
                    <Link to="/services" onClick={toggleMenu} className={isActive('/services')}>Services</Link>
                    <Link to="/about" onClick={toggleMenu} className={isActive('/about')}>About</Link>
                    <Link to="/contact" onClick={toggleMenu} className={isActive('/contact')}>Contact</Link>
                    <a href="https://wa.me/94771234567" className="btn btn-whatsapp w-full" onClick={toggleMenu}>
                        WhatsApp Us
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
