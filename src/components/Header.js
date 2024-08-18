import React from 'react';

const Header = () => {
    return (
        <header>
            <nav aria-label="Navegación principal">
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Acerca de</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
