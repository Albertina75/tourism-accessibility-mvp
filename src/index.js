import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <h1>Tourism Accessibility MVP</h1>
        <nav aria-label="Menú principal">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#features">Características</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="container">
          <h2>Bienvenido</h2>
          <p>Explora cómo mejorar la accesibilidad en el turismo con nuestras herramientas y técnicas innovadoras.</p>
        </section>
        <section id="features" className="container">
          <h2>Características</h2>
          <ul>
            <li>Evaluación de accesibilidad</li>
            <li>Recomendaciones personalizadas</li>
            <li>Reseñas y calificaciones</li>
          </ul>
        </section>
        <section id="contact" className="container">
          <h2>Contacto</h2>
          <p>Si tienes alguna pregunta o sugerencia, no dudes en contactarnos:</p>
          <address>
            <p>Email: <a href="mailto:info@tourismaccessibility.com">info@tourismaccessibility.com</a></p>
          </address>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Tourism Accessibility MVP. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

// Selecciona el elemento con el ID "root" y renderiza la aplicación
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
