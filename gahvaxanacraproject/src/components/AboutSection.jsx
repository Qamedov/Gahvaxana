// src/components/AboutSection.jsx
import React, { useEffect, useRef } from "react";
import "./AboutSection.css"; // Стили для этой секции

const AboutSection = () => {
  const sectionRef = useRef(null); // Ссылка для Intersection Observer

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up"); // Добавляем класс для анимации
            observer.unobserve(entry.target); // Прекращаем наблюдение после анимации
          }
        });
      },
      {
        threshold: 0.1, // Начинаем анимацию, когда 10% элемента видно
        rootMargin: "0px 0px -50px 0px", // Немного раньше, чем по умолчанию
      }
    );

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
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p className="about-description">
              At Gahvaxana, we believe that coffee is more than just a
              beverage—it's a ritual, a moment of connection, and a gateway to
              extraordinary experiences. Founded with a passion for exceptional
              coffee, we source the finest beans from around the world and craft
              each cup with meticulous attention to detail.
            </p>
            <p className="about-description">
              Our skilled baristas combine traditional brewing methods with
              modern techniques to create the perfect balance of flavor, aroma,
              and presentation in every cup we serve.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://i.pinimg.com/736x/19/ab/56/19ab56e840cf091607a1668c2ce2a0b6.jpg" // Качественное изображение
              alt="Coffee beans"
              className="about-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
