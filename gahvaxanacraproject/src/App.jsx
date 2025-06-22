import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import MerchSection from "./components/MerchSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import VlogSection from "./components/VlogSection.jsx";
import Footer from "./components/Footer.jsx";

// НОВЫЕ ИМПОРТЫ ДЛЯ МЕНЮ И РЕЗЕРВАЦИИ

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Главная страница */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <MerchSection />
              <GallerySection />
              <ContactSection />
              {/* VlogSection можно включить сюда или сделать отдельной страницей */}
              {/* <VlogSection /> */}
            </>
          }
        />

        {/* Отдельные маршруты для навигации */}
        <Route path="/about" element={<AboutSection />} />
        <Route path="/merch" element={<MerchSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/vlog" element={<VlogSection />} />

        {/* НОВЫЕ МАРШРУТЫ */}

        {/* Можно добавить 404 страницу, если необходимо */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
