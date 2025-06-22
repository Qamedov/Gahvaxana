// src/components/HeroSection.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Для перехода по кнопке
import "./HeroSection.css"; // Стили для этой секции

const HeroSection = () => {
  const heroTitleRef = useRef(null); // Ссылка на элемент заголовка для эффекта печатания
  const heroImageRef = useRef(null); // Ссылка на изображение для параллакса
  const navigate = useNavigate(); // Хук для навигации

  // Эффект печатания текста
  useEffect(() => {
    const text = "Welcome to Gahvaxana";
    let i = 0;
    let typingInterval;

    const typeWriter = () => {
      if (heroTitleRef.current && i < text.length) {
        heroTitleRef.current.innerHTML += text.charAt(i);
        i++;
        typingInterval = setTimeout(typeWriter, 80); // Скорость печатания
      }
    };

    // Начинаем печатание через короткую задержку после загрузки компонента
    const initialDelay = setTimeout(() => {
      if (heroTitleRef.current) {
        heroTitleRef.current.innerHTML = ""; // Очищаем текст перед началом печатания
        typeWriter();
      }
    }, 500); // Задержка перед началом печатания

    return () => {
      clearTimeout(typingInterval);
      clearTimeout(initialDelay);
    }; // Очистка интервала при размонтировании компонента
  }, []); // Зависимости: пустой массив, чтобы эффект выполнялся один раз

  // Эффект параллакса для изображения
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (heroImageRef.current) {
        // Изменяем translateY в зависимости от скролла
        heroImageRef.current.style.transform = `translateY(${
          scrolled * 0.3
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Обработчик для кнопки "Explore Our Menu" (теперь "Explore Our Merch")
  const handleCtaClick = () => {
    navigate("/merch"); // Переход на страницу Merch
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Заголовок с эффектом печатания */}
        <h1 className="hero-title" ref={heroTitleRef}>
          Welcome to Noid
        </h1>
        <p className="hero-subtitle">
          Where every cup tells a story of passion, quality, and tradition
        </p>
        <button className="cta-button" onClick={handleCtaClick}>
          Explore Our Merch
        </button>
      </div>
      <div className="hero-image">
        {/* Изображение для параллакса */}
        <img
          src="https://i.pinimg.com/736x/cd/01/45/cd0145a508ac14a46ee7528ce580995b.jpg" // Измененный путь
          alt="Premium Coffee"
          className="hero-img"
          ref={heroImageRef}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
