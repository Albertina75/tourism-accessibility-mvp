// src/App.js
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Explora el Mundo sin Barreras</h1>
        <p>Tu guía accesible para experiencias turísticas inolvidables.</p>
      </header>

      <main>
        <section id="intro">
          <h2>Bienvenido a Tourism Accessibility MVP</h2>
          <p>La plataforma diseñada para hacer que el turismo sea inclusivo y accesible para todos. Aquí encontrarás destinos, alojamientos, y servicios que han sido seleccionados y evaluados específicamente para personas con deficiencias sensoriales.</p>
        </section>

        <section id="features">
          <h2>¿Qué Puedes Hacer Aquí?</h2>
          <ul>
            <li><strong>Buscar Destinos Accesibles:</strong> Descubre lugares adaptados a tus necesidades.</li>
            <li><strong>Alojamientos Inclusivos:</strong> Encuentra alojamientos que ofrecen las comodidades necesarias para una estancia confortable.</li>
            <li><strong>Guías y Recursos:</strong> Accede a guías detalladas y recursos que te ayudarán a planificar tu viaje.</li>
          </ul>
        </section>

        <section id="testimonials">
          <h2>Escucha lo que nuestros usuarios tienen que decir:</h2>
          <blockquote>“Gracias a Tourism Accessibility MVP, pude disfrutar de unas vacaciones sin preocupaciones. Los recursos eran exactos y extremadamente útiles.” — Ana P.</blockquote>
          <blockquote>“Finalmente encontré una plataforma que entiende mis necesidades. ¡Altamente recomendada!” — Carlos M.</blockquote>
        </section>

        <section id="cta">
          <h2>Comienza tu Aventura</h2>
          <button onclick="window.location.href='search.html'">Explora destinos accesibles ahora</button>
        </section>

        <section id="contact">
          <h2>¿Tienes Preguntas o Necesitas Ayuda?</h2>
          <p>Nuestro equipo está aquí para ayudarte en cada paso de tu viaje. Contáctanos para más información.</p>
          <button onclick="window.location.href='contact.html'">Contactar Soporte</button>
        </section>
      </main>

      <footer>
        <p>© 2024 Tourism Accessibility MVP. Todos los derechos reservados.</p>
        <nav>
          <a href="privacy.html">Políticas de Privacidad</a> |
          <a href="terms.html">Términos de Servicio</a> |
          <a href="accessibility.html">Accesibilidad</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;

