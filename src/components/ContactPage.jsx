import React from 'react';
import "../css/Contact.css";
import { Mail, Phone, MessageCircle, MapPin, AtSign, Smartphone, User } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="main-container">
          <div className="form-side">
            <form action="">
              <h1>İşletmeniz İçin İletişime Geçin</h1>
              <div className="form-inputs">
                <div className="contact-left">
                  <label>Ad</label>
                  <input
                    type="text"
                    className="text-left"
                    placeholder="Adınızı giriniz..."
                  />
                  <label>Telefon Numarası</label>
                  <input
                    type="tel"
                    maxLength="11"
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
                  placeholder=" Mesajınızı belirtiniz..."
                ></textarea>
                <button type="button">İlet</button>
              </div>
            </form>
          </div>
          <div className="icon-side">
            <div className="contact-comm-visual contact-comm-visual-bubble">
              <div className="comm-bubble comm-bubble-1"><Mail className="comm-icon-glow" size={80} /></div>
              <div className="comm-bubble comm-bubble-2"><Phone className="comm-icon-glow" size={64} /></div>
              <div className="comm-bubble comm-bubble-3"><MessageCircle className="comm-icon-glow" size={72} /></div>
              <div className="comm-bubble comm-bubble-4"><MapPin className="comm-icon-glow" size={54} /></div>
              <div className="comm-bubble comm-bubble-5"><AtSign className="comm-icon-glow" size={38} /></div>
              <div className="comm-bubble comm-bubble-6"><Smartphone className="comm-icon-glow" size={48} /></div>
              <div className="comm-bubble comm-bubble-7"><User className="comm-icon-glow" size={32} /></div>
              <div className="comm-bubble comm-bubble-8"><Mail className="comm-icon-glow" size={44} /></div>
              <div className="comm-bubble comm-bubble-9"><Phone className="comm-icon-glow" size={38} /></div>
              <div className="comm-bubble comm-bubble-10"><MessageCircle className="comm-icon-glow" size={54} /></div>
              <div className="comm-bubble comm-bubble-11"><MapPin className="comm-icon-glow" size={40} /></div>
              <div className="comm-bubble comm-bubble-12"><Mail className="comm-icon-glow" size={36} /></div>
              <div className="comm-bubble comm-bubble-13"><Phone className="comm-icon-glow" size={30} /></div>
              <div className="comm-bubble comm-bubble-14"><User className="comm-icon-glow" size={28} /></div>
              <div className="comm-bubble comm-bubble-15"><Smartphone className="comm-icon-glow" size={34} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage; 