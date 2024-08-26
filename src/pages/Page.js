import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header.js'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer.js'; // Asegúrate de que la ruta sea correcta

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// Validación de las props
Page.propTypes = {
  children: PropTypes.node, // Validación para `children`
};

export default Page.js;
