import React, { useEffect, useState } from 'react';
import '../css/SplashScreen.css';
import logo from '../assets/logo.png';

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
      <div className="splash-content">
        <img src={logo} alt="Logo" className="splash-logo" />
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen; 