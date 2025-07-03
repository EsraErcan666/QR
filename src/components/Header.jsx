import React from "react";
import "../css/Header.css";
import logoImage from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-center">
        <img
          src={logoImage}
          alt="Site Logosu"
          className="logo-image"
          height="60"
          style={{ marginRight: 16 }}
        />
        <span className="header-title">QREATIONE</span>
      </div>
    </header>
  );
};

export default Header;
