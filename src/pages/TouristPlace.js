import React from 'react';
import PropTypes from 'prop-types';

const TouristPlace = ({ placeId, children }) => {
  return (
    <div className="tourist-place">
      <h2>Tourist Place ID: {placeId}</h2>
      {children} {/* Esto renderiza cualquier contenido pasado como children */}
    </div>
  );
};

// Validación de las props
TouristPlace.propTypes = {
  placeId: PropTypes.string.isRequired,
  children: PropTypes.node, // Validación para `children`
};

export default TouristPlace;
