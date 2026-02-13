import React from "react";
import HeroSection from "./pages/HeroSection";
import HeroSectionMobile from "./pages/HeroSectionMobile";
import Navbar from "./components/Navbar"
import { useState, useEffect } from "react";

const App = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);


  return (
    <div>
      <Navbar />
      <main>
        {isTablet ? (
          <HeroSectionMobile />
        ) : isMobile ? (
          <HeroSectionMobile />
        ) : (
          <HeroSection />
        )}
      </main>
    </div>
  );
};

export default App;