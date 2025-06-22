// src/components/ContactSection.jsx
import React, { useEffect, useRef } from "react";
import "./ContactSection.css"; // Стили для этой секции

const ContactSection = () => {
  const sectionRef = useRef(null); // Ссылка на секцию для Intersection Observer

  // Анимация появления элементов при скролле
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Анимируем элементы внутри блока contact-content
          const animatedElements = entry.target.querySelectorAll(
            ".contact-item, .contact-image"
          );
          animatedElements.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("fade-in-up");
            }, index * 150); // Небольшая задержка между элементами
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Visit Us Today</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>123 Coffee Street, Baku, Azerbaijan</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Hours</h3>
                <p>
                  Mon-Fri: 7:00 AM - 9:00 PM
                  <br />
                  Sat-Sun: 8:00 AM - 10:00 PM
                </p>
              </div>
            </div>
            {/* Можно добавить телефон и email, если нужно */}
            {/* <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p>+994 50 000 00 00</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>hello@gahvaxana.az</p>
                            </div>
                        </div> */}
          </div>
          <div className="contact-image">
            <img
              src="https://i.pinimg.com/736x/66/35/fb/6635fbda5ae37d4425a11911c2a5f75e.jpg" // Качественное изображение
              alt="Coffee shop interior"
              className="contact-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

