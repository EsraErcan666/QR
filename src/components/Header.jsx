import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";
import logoImage from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
      document.documentElement.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Aktif sayfa kontrolü
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  console.log('isMenuOpen:', isMenuOpen);

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
          {/* Overlay */}
          {isMenuOpen && (
            <div className="menu-overlay active" onClick={closeMenu}></div>
          )}
          <nav id="nav-menu" className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
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
          {/* Hamburger butonunu sadece menü kapalıyken göster */}
          {!isMenuOpen && (
            <button
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
              onTouchStart={toggleMenu}
              aria-label="Menüyü Aç / Kapat"
              aria-expanded={isMenuOpen}
              aria-controls="nav-menu"
              type="button"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
