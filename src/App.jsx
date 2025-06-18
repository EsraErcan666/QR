import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SplashScreen from './components/SplashScreen'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'

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
        <main>
          <HeroSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
