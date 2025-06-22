// src/components/VlogSection.jsx
import React, { useEffect, useRef } from 'react';
import './VlogSection.css'; // Стили для этой секции

// Пример данных для влога (можно заменить на реальные видео/статьи)
const vlogItems = [
    {
        id: 1,
        title: "Hansı Sifarişi Hazırlayarkən Özünüzü Barista kimi hiss etmirsiz ?",
        description: "Master the delicate process of pour-over for a clean, nuanced cup.",
        thumbnail: "https://i.pinimg.com/736x/9b/21/e3/9b21e39e6bc222f22efde1e439c859a6.jpg",
        link: "https://www.instagram.com/reel/DK_qwYLI__m/?utm_source=ig_web_copy_link&igsh=MWp3Mjg4dHE3ZnFzMg==" // Пример ссылки на YouTube
    },
    {
        id: 2,
        title: "SualCavab Day#1",
        description: "Journey with us to discover where our premium beans come from.",
        thumbnail: "https://i.pinimg.com/736x/79/6c/0c/796c0cbcec82f4a0578a70fd5f4377bd.jpg",
        link: "https://www.instagram.com/reel/DKtoy94o31A/?utm_source=ig_web_copy_link&igsh=NTRjMm1ybmkwNm4="
    },
    {
        id: 3,
        title: "3 ayda çox şey oldu! ☕️🏠",
        description: "Yolun başlanğıcındayıq və birlikdə daha çox şey paylaşacağımıza inanırıq. Gəlin Azərbaycan qəhvə sektorunu birlikdə inkişaf etdirək!",
        thumbnail: "https://i.pinimg.com/736x/c3/08/3f/c3083f19382f9853b01595c0cf73adae.jpg",
        link: "https://www.youtube.com/watch?v=your-video-id-3"
    },
    {
        id: 4,
        title: "Coffee & Wellness: A Balanced Lifestyle",
        description: "Exploring the health benefits and mindful aspects of daily coffee.",
        thumbnail: "/images/vlog-wellness.webp",
        link: "https://www.youtube.com/watch?v=your-video-id-4"
    }
];

const VlogSection = () => {
    const vlogGridRef = useRef(null); // Ссылка на сетку для анимации

    // Анимация появления элементов при скролле
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(entry.target.children).forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('fade-in-up');
                        }, index * 120); // Задержка для каждого элемента
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (vlogGridRef.current) {
            observer.observe(vlogGridRef.current);
        }

        return () => {
            if (vlogGridRef.current) {
                observer.unobserve(vlogGridRef.current);
            }
        };
    }, []);

    return (
        <section id="vlog" className="vlog">
            <div className="container">
                <h2 className="section-title">Our Coffee Stories</h2>
                <p className="vlog-intro-text">Dive deeper into the world of coffee with our insightful videos and articles. Learn about brewing techniques, bean origins, and the culture of coffee.</p>
                <div className="vlog-grid" ref={vlogGridRef}>
                    {vlogItems.map(item => (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="vlog-item" key={item.id}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="vlog-thumbnail"
                                loading="lazy"
                            />
                            <div className="vlog-content">
                                <h3 className="vlog-title">{item.title}</h3>
                                <p className="vlog-description">{item.description}</p>
                                <span className="read-more">Watch/Read More <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VlogSection;