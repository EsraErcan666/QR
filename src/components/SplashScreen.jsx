import React, { useEffect, useState } from 'react';
import '../css/SplashScreen.css';
import logo from '../assets/logo.png';
import { QrCode } from 'lucide-react';

const SplashScreen = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 3 saniye sonra isExiting'i true yap
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setLoading(false);
        onLoadingComplete();
      }, 500); // Animasyon süresi kadar bekle
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!loading) return null;

  return (
    <div className={`splash-screen ${isExiting ? 'exit' : ''}`}>
      <div className="splash-qr-background">
        <div className="floating-qr floating-qr-topleft"><QrCode size={38} /></div>
        <div className="floating-qr floating-qr-topright"><QrCode size={32} /></div>
        <div className="floating-qr floating-qr-bottomleft"><QrCode size={28} /></div>
        <div className="floating-qr floating-qr-bottomright"><QrCode size={36} /></div>
        <div className="floating-qr floating-qr-sideleft"><QrCode size={24} /></div>
        <div className="floating-qr floating-qr-sideright"><QrCode size={24} /></div>
      </div>
      <div className="splash-content">
        <img src={logo} alt="Logo" className="splash-logo animated-logo" />
        <div className="loading-bar">
          <div className="loading-progress animated-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen; 