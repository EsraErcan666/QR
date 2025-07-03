import React from "react";
import { motion } from "framer-motion";
import { QrCode, Globe, Zap, Shield } from "lucide-react";
import "../css/HeroSection.css";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";

const HeroSection = ({ onJoinClick }) => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/contact");
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Background Elements */}
        <div className="hero-background">
          <div className="floating-qr floating-qr-1">
            <QrCode size={60} />
          </div>
          <div className="floating-qr floating-qr-2">
            <QrCode size={40} />
          </div>
          <div className="floating-qr floating-qr-3">
            <QrCode size={50} />
          </div>
          <div className="floating-qr floating-qr-4">
            <QrCode size={65} />
          </div>
          <div className="floating-qr floating-qr-5">
            <QrCode size={45} />
          </div>
          <div className="floating-qr floating-qr-6">
            <QrCode size={30} />
          </div>
          <div className="floating-qr floating-qr-7">
            <QrCode size={55} />
          </div>
          <div className="floating-qr floating-qr-8">
            <QrCode size={38} />
          </div>
          <div className="floating-qr floating-qr-9">
            <QrCode size={38} />
          </div>
          <div className="floating-qr floating-qr-10">
            <QrCode size={38} />
          </div>
        </div>

        {/* Main Content */}
        <div
          className="hero-content"
          style={{ position: "relative", zIndex: 2 }}
        >
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              <span className="gradient-text" style={{ color: "white" }}>
                QR ile
              </span>{" "}
              İşletmenizi
              <br />
              <span className="highlight">Dijital Dünyaya</span> Taşıyın
            </h1>

            <p className="hero-description">
              Modern QR kod teknolojisi ile işletmenizin dijital varlığını
              güçlendirin. Hızlı, güvenli ve profesyonel hosting çözümleri.
            </p>

            <div className="hero-features">
              <div className="feature-item">
                <Zap className="feature-icon" />
                <span>Hızlı Kurulum</span>
              </div>
              <div className="feature-item">
                <Shield className="feature-icon" />
                <span>Güvenli Hosting</span>
              </div>
              <div className="feature-item">
                <Globe className="feature-icon" />
                <span>7/24 Erişim</span>
              </div>
            </div>

            <div
              className="hero-buttons"
              style={{ position: "relative", zIndex: 2 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onJoinClick}
              >
                Hemen Başlayın
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="qr-showcase">
              <div className="qr-card">
              <QrCode size={120} className="qr-icon" />
                <div className="qr-info">
                  <h3>Restoran QR</h3>
                  <p>Menü & Sipariş</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
