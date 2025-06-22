// src/components/Footer.jsx
import React from "react";
import "./Footer.css"; // Стили для футера
import { Link } from "react-router-dom"; // Для навигации по сайту

const Footer = () => {
  // Получаем текущий год
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-title">Gahvaxana</h3>
            <p className="footer-description">
              Crafting exceptional coffee experiences since day one.
            </p>
            <div className="social-links">
              {/* Используем Font Awesome иконки */}
              <a
                href="https://www.instagram.com/gahvaxana/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              {/* Можно добавить другие соцсети */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a> */}
            </div>
          </div>
          <div className="footer-section footer-links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul>
              <li>
                <Link to="/" className="footer-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/merch" className="footer-nav-link">
                  Merch
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/vlog" className="footer-nav-link">
                  Vlog
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section footer-contact-info">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="footer-contact">
              <a href="mailto:hello@gahvaxana.az" className="footer-link">
                <i className="fas fa-envelope"></i>
                hello@gahvaxana.az
              </a>
              <a href="tel:+994500000000" className="footer-link">
                <i className="fas fa-phone"></i>
                +994 50 000 00 00
              </a>
              <address className="footer-link">
                <i className="fas fa-map-marker-alt"></i>
                123 Coffee Street, Baku, Azerbaijan
              </address>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Gahvaxana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
