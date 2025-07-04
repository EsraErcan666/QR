import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SplashScreen from './components/SplashScreen'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import ServicesPage from './components/ServicesPage'
import ContactPage from './components/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import { Routes, Route } from 'react-router-dom';
import CursorTrail from './components/CursorTrail';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Modal açma fonksiyonu
  const openContactModal = () => setContactModalOpen(true);
  // Modal kapama fonksiyonu
  const closeContactModal = () => setContactModalOpen(false);

  return (
    <>
      {isLoading && <SplashScreen onLoadingComplete={handleLoadingComplete} />}
    <CursorTrail />
      <div className={`app${contactModalOpen ? ' blurred' : ''}`}>
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection onJoinClick={openContactModal} />
                <ServicesSection onJoinClick={openContactModal} />
              </>
            } />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer onContactClick={openContactModal} />
      </div>
      {contactModalOpen && (
        <div className="modal-overlay">
          <ContactPage onClose={closeContactModal} />
        </div>
      )}
    </>
  )
}

export default App