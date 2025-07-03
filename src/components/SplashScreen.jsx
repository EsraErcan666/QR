import React, { useEffect, useState } from 'react';
import '../css/SplashScreen.css';
import logo from '../assets/logo.png';
import { QrCode } from 'lucide-react';

const SplashScreen = ({ onLoadingComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1.8 saniye tam opak kal, sonra fade başlat
    const showTimer = setTimeout(() => {
      setFadeOut(true);
      // Fade süresi kadar bekle, sonra kaldır
      setTimeout(() => {
        setLoading(false);
        onLoadingComplete();
      }, 1200); // CSS transition süresiyle uyumlu
    }, 1800);
    return () => {
      clearTimeout(showTimer);
    };
  }, [onLoadingComplete]);

  if (!loading) return null;

  return (
    <div className={`splash-screen${fadeOut ? ' fade-out' : ''}`}>
      <div className="splash-content">
        <img src={logo} alt="Logo" className="splash-logo animated-logo" />
        {/* <div className="loading-bar">
          <div className="loading-progress animated-progress"></div>
        </div> */}
      </div>
    </div>
  );
};

export default SplashScreen; 