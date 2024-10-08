import React, { useState, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles.css';
import UserReviews from './components/UserReviews.js';
import Page from './pages/Page.js';
import TouristPlace from './pages/TouristPlace.js';

// Carga dinámica del MapComponent
const LazyMapComponent = lazy(() => import('./components/MapComponent.js'));

function App() {
  const [showMap, setShowMap] = useState(false); // Estado para mostrar/ocultar el mapa
  const [highContrast, setHighContrast] = useState(false);
  
  const toggleContrast = () => setHighContrast(!highContrast);
  const toggleMap = () => setShowMap(!showMap);

  const samplePlaceId = '12345'; // ID de ejemplo

  return (
    <Page>
      <div className={highContrast ? 'high-contrast' : ''}>
        <header>
          <h1>Tourism Accessibility MVP</h1>
          <nav aria-label="Menú principal">
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#features">Características</a></li>
              <li><a href="#reviews">Opiniones</a></li>
              <li><a href="#map" onClick={toggleMap}>{showMap ? 'Ocultar Mapa' : 'Mostrar Mapa'}</a></li>
              <li><a href="#contact">Contacto</a></li>
              <li><button onClick={toggleContrast}>Alto Contraste</button></li>
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

          <section id="reviews" className="container">
            <h2>Opiniones de Usuarios</h2>
            <Suspense fallback={<div>Cargando reseñas...</div>}>
              <UserReviews placeId={samplePlaceId} />
            </Suspense>
          </section>

          {/* Sección de Mapa */}
          <section id="map" className="container">
            <h2>Ubicación en el Mapa</h2>
            {showMap && (
              <Suspense fallback={<div>Cargando mapa...</div>}>
                <LazyMapComponent />
              </Suspense>
            )}
          </section>

          <section id="contact" className="container">
            <h2>Contacto</h2>
            <p>Si tienes alguna pregunta o sugerencia, no dudes en contactarnos:</p>
            <address>
              <p>Email: <a href="mailto:info@tourismaccessibility.com">info@tourismaccessibility.com</a></p>
            </address>
          </section>

          <TouristPlace placeId={samplePlaceId} />
        </main>

        <footer>
          <p>&copy; 2024 Tourism Accessibility MVP. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Page>
  );
}
ReactDOM(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
export default App;
