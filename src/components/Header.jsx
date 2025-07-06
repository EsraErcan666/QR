import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";
import logoImage from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Aktif sayfa kontrolü
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

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

        {/* Hamburger ve Menü - Sağ */}
        <div className="header-right">
          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Ana Sayfa  
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className={`nav-link ${isActive("/services") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  İş Birlikleri
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
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
