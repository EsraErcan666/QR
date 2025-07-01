import React from "react";
import { motion } from "framer-motion";
import {
  QrCode,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import "../css/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <QrCode size={40} />
              <h3>QR Hosting</h3>
            </div>
            <p className="footer-description">
              İşletmenizi dijital dünyaya taşıyan modern QR hosting çözümleri.
              Güvenli, hızlı ve profesyonel hizmet.
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/qreatione"
                className="social-link"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Hızlı Linkler</h4>
            <ul className="footer-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end
                >
                  Ana Sayfa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  İş Birlikleri
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  İletişim
                </NavLink>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Hizmetlerimiz</h4>
            <ul className="footer-links">
              <li>QR Kod Oluşturma</li>
              <li>Web Hosting</li>
              <li>Analitik</li>
              <li>Tasarım Hizmetleri</li>
              <li>Teknik Destek</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>İletişim</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={18} />
                <span>qreationel@qreatione.com</span>
              </div>
              {/*<div className="contact-item">
                <Phone size={18} />
                <span></span>
              </div>*/}
              <div className="contact-item">
                <MapPin size={18} />
                <span>Balıkesir, Türkiye</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} QR Hosting. Tüm hakları saklıdır.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;