// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import styled from 'styled-components'; // Если используем Styled Components

// Если не используем Styled Components, стили будут в Navbar.css
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Эффект для изменения фона навбара при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container container">
        <div className="nav-logo">
          <h1>Gahvaxana</h1> {/* <-- Вот эту строку нужно изменить */}
        </div>
        {/* Кнопка гамбургер для мобильных устройств */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className={`nav-links ${mobileMenuOpen ? "mobile-active" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/merch"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Merch
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/vlog"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Vlog
          </Link>{" "}
          {/* Новый раздел */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
