import React from "react";
import { useState, useEffect } from "react";
import HeroSection from "./pages/HeroSection";
import HeroSectionMobile from "./pages/HeroSectionMobile";
import Navbar from "./components/Navbar";
import AboutSection from "./pages/AboutSection";
import AcademicsSection from "./pages/AcademicsSection";
import AchievementsSection from "./pages/AchievementsSection";
import PublicationSection from "./pages/PublicationSection";
import GallerySection from "./pages/GallerySection";
import Footer from "./components/Footer";


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

  console.log(isMobile, isTablet);


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
        <AboutSection />
        <AcademicsSection />
        <AchievementsSection />
        <PublicationSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;