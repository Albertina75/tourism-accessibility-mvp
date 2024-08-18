import React, { useState } from 'react';

const AccessibilityFeatures = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState('100%');

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    const increaseFontSize = () => {
        setFontSize(prevSize => (parseFloat(prevSize) + 10) + '%');
        document.body.style.fontSize = fontSize;
    };

    return (
        <div>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
            <button onClick={increaseFontSize}>
                Aumentar Tamaño de Texto
            </button>
        </div>
    );
};

export default AccessibilityFeatures;
