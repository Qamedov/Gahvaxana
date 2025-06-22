// src/components/MerchSection.jsx
import React, { useEffect, useRef } from "react";
import "./MerchSection.css"; // Стили для этой секции

// Данные о товарах (можно вынести в отдельный файл, например, data/merchItems.js)
const merchItems = [
  {
    id: 1,
    name: "Premium Roasted Beans",
    description:
      "Finest selection of Arabica beans, roasted to perfection for a rich aroma.",
    price: "$18.00",
    image: "https://i.pinimg.com/736x/0c/7d/8d/0c7d8d0885cf477afaab125dca62c896.jpg",
  },
  {
    id: 2,
    name: "Gahvaxana Mug",
    description: "Elegant ceramic mug, perfect for your daily coffee ritual.",
    price: "$12.50",
    image: "https://i.pinimg.com/736x/97/38/4e/97384ecd78fbf41c73d3ce3112ee05db.jpg",
  },
  {
    id: 3,
    name: "Coffee Grinder",
    description:
      "Manual burr grinder for a consistent and fresh grind every time.",
    price: "$45.00",
    image: "https://i.pinimg.com/736x/4e/eb/42/4eeb4202f30dd81e059e69c962e3ceb2.jpg",
  },
  {
    id: 4,
    name: "Gift Set",
    description:
      "A perfect gift for coffee lovers, includes beans, mug, and accessories.",
    price: "$60.00",
    image: "https://i.pinimg.com/736x/75/75/e3/7575e3c3ba604b0159a2dc487510af40.jpg",
  },
  {
    id: 5,
    name: "Cold Brew Maker",
    description:
      "Simple and effective system for making smooth cold brew at home.",
    price: "$35.00",
    image: "https://i.pinimg.com/736x/bb/55/d7/bb55d7dba6a86558906245f0175b8bcf.jpg",
  },
  {
    id: 6,
    name: "Espresso Tamper",
    description:
      "Professional-grade tamper for perfectly leveled espresso shots.",
    price: "$25.00",
    image: "https://i.pinimg.com/736x/a1/13/1e/a1131e634a8bca173afe616b757a2f54.jpg",
  },
];

const MerchSection = () => {
  const merchGridRef = useRef(null); // Ссылка на контейнер сетки для Intersection Observer

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Анимируем каждый элемент по очереди
            Array.from(entry.target.children).forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("fade-in-up");
              }, index * 100); // Задержка для каждого элемента
            });
            observer.unobserve(entry.target); // Прекращаем наблюдение
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (merchGridRef.current) {
      observer.observe(merchGridRef.current);
    }

    return () => {
      if (merchGridRef.current) {
        observer.unobserve(merchGridRef.current);
      }
    };
  }, []);

  return (
    <section id="merch" className="merch">
      <div className="container">
        <h2 className="section-title">Our Premium Merch</h2>
        <div className="merch-grid" ref={merchGridRef}>
          {merchItems.map((item) => (
            <div className="merch-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="merch-img"
                loading="lazy"
              />
              <div className="merch-content">
                <h3 className="merch-title">{item.name}</h3>
                <p className="merch-description">{item.description}</p>
                <span className="merch-price">{item.price}</span>
                <button className="add-to-cart-button">Add to Cart</button>{" "}
                {/* Кнопка действия */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
