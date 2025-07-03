import React, { useState } from 'react';
import "../css/Contact.css";
import { Mail, Phone, MessageCircle, MapPin, AtSign, Smartphone, User } from 'lucide-react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 900);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

const ContactPage = ({ onClose }) => {
  // Form state'leri
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    telefon: "",
    mail: "",
    mesaj: ""
  });
  const [status, setStatus] = useState("");
  const isMobile = useIsMobile();

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
      <div className="contact-container" style={{position:'relative'}}>
        <button className="close-modal-btn" onClick={onClose} style={{position:'absolute',top:12,right:12,fontSize:22,background:'transparent',border:'none',borderRadius:'50%',width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',zIndex:1001,transition:'background 0.2s'}} aria-label="Kapat">&times;</button>
        <div className="main-container">
          <div className="form-side" {...(isMobile ? {style:{width:'100%'}} : {})}>
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
          {/* Mobilde baloncukları DOM'dan tamamen kaldırıyoruz */}
          {!isMobile && (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage; 