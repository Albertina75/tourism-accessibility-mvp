import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    // Definir la función initMap
    window.initMap = function () {
      // eslint-disable-next-line no-undef
      new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: { lat: -34.397, lng: 150.644 },
      });
    };

    // Agregar el script del mapa solo cuando el componente se monte
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD9YjKDDFMuUqjVV5jMi9Vy-H_zgFBSjDQ&callback=initMap`;
    script.async = true;
    script.defer = false;
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
