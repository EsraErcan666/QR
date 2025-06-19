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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <SplashScreen onLoadingComplete={handleLoadingComplete} />}
      <div className="app">
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ServicesSection />
              </>
            } />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
