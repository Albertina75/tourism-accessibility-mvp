import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div>
    <h1>Tourism Accessibility MVP</h1>
    <p>Bienvenido a la aplicación de accesibilidad en turismo</p>
  </div>
);

// Usando React 18 y 'createRoot'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
