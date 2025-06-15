import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from './assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo - Sol Tarafta */}
                <Link to="/" className="logo">
                    <img
                        src={logoImage}
                        alt="Site Logosu"
                        className="logo-image"
                        width="auto"
                        height="90"  // Logo boyutunu büyüttük
                    />
                </Link>

                {/* Merkez Menü */}
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="link-text">Ana Sayfa</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="link-text">İş Birlikleri</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                <span className="link-text">İletişim</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Boş div ile denge sağlıyoruz (flex space-between için) */}
                <div className="header-spacer"></div>

                {/* Hamburger - Sağ Tarafta */}
                <button
                    className="hamburger"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
                    <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
                    <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
                </button>
            </div>
        </header>
    );
};

export default Header;