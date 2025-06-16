import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from './assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <div className="header-container">
                
                {/* Logo - Sol */}
                <div className="header-left">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <img
                            src={logoImage}
                            alt="Site Logosu"
                            className="logo-image"
                            height="80"
                        />
                    </Link>
                </div>

                {/* Menü - Orta */}
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={closeMenu}>
                                Ana Sayfa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link" onClick={closeMenu}>
                                İş Birlikleri
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={closeMenu}>
                                İletişim
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger - Sağ */}
                <div className="header-right">
                    <button
                        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Menüyü Aç / Kapat"
                    >
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
