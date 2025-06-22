import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ваш глобальный CSS
import App from './App.jsx'; // Импортируем ВАШ главный компонент App.jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Удалили импорт и вызов reportWebVitals