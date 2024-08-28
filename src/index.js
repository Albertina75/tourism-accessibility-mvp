// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './styles.css';

// Definición de la función initMap globalmente
window.initMap = () => {
  new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
