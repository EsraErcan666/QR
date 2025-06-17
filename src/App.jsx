import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SplashScreen from './components/SplashScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <SplashScreen onLoadingComplete={handleLoadingComplete} />}
      <Header />
    </>
  )
}

export default App
