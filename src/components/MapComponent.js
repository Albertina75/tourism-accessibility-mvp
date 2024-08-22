import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    // Agregar el script del mapa solo cuando el componente se monte
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD9YjKDDFMuUqjVV5jMi9Vy-H_zgFBSjDQ&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
