// src/components/GallerySection.jsx
import React, { useState, useEffect, useRef } from "react";
import "./GallerySection.css"; // Стили для этой секции

// Данные об изображениях галереи
const galleryImages = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/c1/cc/cc/c1ccccc9ac5c252ee69f3cbb9d9f33d1.jpg",
    alt: "Coffee art with latte",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/64/bb/c9/64bbc9be11333e2bc06c4b7b7ba80274.jpg",
    alt: "Close-up of roasted coffee beans",
  },
  { id: 3, src: "https://i.pinimg.com/736x/06/d5/38/06d538126042c1db6a9efacc3f4dbe12.jpg",
     alt: "Coffee brewing process" },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/bf/93/04/bf930488234c075a85c3b5e38146fdc2.jpg",
    alt: "Cozy coffee shop interior",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/a4/23/4b/a4234b0f8634e4996754ee6f09e4c75a.jpg",
    alt: "Delicious macchiato with foam",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/1d/b2/80/1db28003546d95061eb9b2b5ded692f4.jpg",
    alt: "Modern coffee equipment",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Состояние для открытого изображения в модале
  const galleryGridRef = useRef(null); // Ссылка на сетку для анимации

  // Анимация появления элементов при скролле
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(entry.target.children).forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("fade-in-up");
            }, index * 100); // Задержка для каждого изображения
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (galleryGridRef.current) {
      observer.observe(galleryGridRef.current);
    }

    return () => {
      if (galleryGridRef.current) {
        observer.unobserve(galleryGridRef.current);
      }
    };
  }, []);

  // Открытие модального окна
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden"; // Запрещаем прокрутку фона
  };

  // Закрытие модального окна
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Разрешаем прокрутку фона
  };

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">Coffee Gallery</h2>
        <div className="gallery-grid" ref={galleryGridRef}>
          {galleryImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="gallery-img"
              onClick={() => openModal(image.src)}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged view" className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
