import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css'; // Importa los estilos globales
import './initMap.js'; // Importa el archivo que configura Google Maps, si es necesario

// Encuentra el elemento con el ID 'root' en el HTML
const rootElement = document.getElementById('root');

// Crear una raíz React y renderizar el componente App en el DOM
const root = createRoot(rootElement);

// Renderizar el componente App dentro de React.StrictMode
root.render(
  <React.StrictMode>
    <App.js />
  </React.StrictMode>
);
