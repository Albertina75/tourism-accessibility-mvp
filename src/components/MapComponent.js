import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    // Esta función será llamada cuando el componente se monte
    const initMap = () => {
      new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    if (window.google) {
      initMap();
    } else {
      window.initMap = initMap;
    }
  }, []);

  return <div id="map" style={{ height: '100%', width: '100%' }} />;
};

export default MapComponent;
