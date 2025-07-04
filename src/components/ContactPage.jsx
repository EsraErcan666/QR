import React, { useState } from 'react';
import "../css/Contact.css";
import { Mail, Phone, MessageCircle, MapPin, AtSign, Smartphone, User } from 'lucide-react';

const ContactPage = () => {
  // Form state'leri
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    telefon: "",
    mail: "",
    mesaj: ""
  });
  const [status, setStatus] = useState("");

  // Input değişikliklerini yakala
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Form submit işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Gönderiliyor...");

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("Mesajınız başarıyla gönderildi!");
        setForm({ ad: "", soyad: "", telefon: "", mail: "", mesaj: "" });
      } else {
        setStatus("Gönderilemedi: " + (data.message || "Bir hata oluştu."));
      }
    } catch (err) {
      setStatus("Gönderilemedi: Sunucuya ulaşılamıyor.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="main-container">
          <div className="contact-comm-visual contact-comm-visual-bubble mobile-bg-bubbles">
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
          <div className="form-side">
            <form onSubmit={handleSubmit}>
              <h1>İşletmeniz İçin İletişime Geçin</h1>
              <div className="form-inputs">
                <div className="contact-left">
                  <label>Ad</label>
                  <input
                    type="text"
                    name="ad"
                    value={form.ad}
                    onChange={handleChange}
                    placeholder="Adınızı giriniz..."
                    required
                  />
                  <label>Telefon Numarası</label>
                  <input
                    type="tel"
                    name="telefon"
                    maxLength="11"
                    value={form.telefon}
                    onChange={handleChange}
                    placeholder="Telefon numaranızı giriniz..."
                    required
                  />
                </div>
                <div className="contact-right">
                  <label>Soyad</label>
                  <input
                    type="text"
                    name="soyad"
                    value={form.soyad}
                    onChange={handleChange}
                    placeholder="Soyadınızı giriniz..."
                    required
                  />
                  <label>Mail</label>
                  <input
                    type="email"
                    name="mail"
                    value={form.mail}
                    onChange={handleChange}
                    placeholder="E-mail adresinizi giriniz..."
                    required
                  />
                </div>
              </div>
              <div className="message">
                <textarea
                  name="mesaj"
                  value={form.mesaj}
                  onChange={handleChange}
                  cols="42"
                  rows="5"
                  placeholder=" Mesajınızı belirtiniz..."
                  required
                ></textarea>
                <button type="submit">İlet</button>
              </div>
              {status && <div style={{ marginTop: 10, color: "#671ef8" }}>{status}</div>}
            </form>
          </div>
          <div className="icon-side desktop-bubbles">
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