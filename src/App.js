import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityFeatures from './components/AccessibilityFeatures';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <h1>Bienvenidos a Turismo Accesible</h1>
                <AccessibilityFeatures />
                {/* Otros componentes y contenido principal */}
            </main>
            <Footer />
        </div>
    );
};

export default App;
