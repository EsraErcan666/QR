import React from 'react';
import "../css/Contact.css";
import logo from "../assets/logo2.jpeg";

const ContactPage = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <form action="">
          <h1>İşletmeniz İçin İletişime Geçin</h1>
          <div className="main-container">
            <div className="contact-left">
              <label>Ad</label>
              <input
                type="text"
                className="text-left"
                placeholder="Adınızı giriniz..."
              />
              <label>Telefon Numarası</label>
              <input
                type="number"
                className="number-left"
                placeholder="Telefon numaranızı giriniz..."
              />
            </div>
            <div className="contact-right">
              <label>Soyad</label>
              <input
                type="text"
                className="text-right"
                placeholder="Soyadınızı giriniz..."
              />
              <label>Mail</label>
              <input
                type="email"
                className="mail-right"
                placeholder="E-mail adresinizi giriniz..."
              />
            </div>
          </div>
          <div className="message">
            <textarea
              className="contact"
              cols="42"
              rows="5"
              placeholder="Mesajınızı belirtiniz..."
            ></textarea>
            <button type="button">İlet</button>
          </div>
        </form>
        <div className="image-container">
            <img src={logo} alt="İşletme Logosu" />
          </div>
      </div>
    </div>
  );
}

export default ContactPage; 