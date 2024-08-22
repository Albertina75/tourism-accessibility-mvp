// src/initMap.js

export function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  
  // Asegúrate de que `initMap` esté disponible globalmente para Google Maps
  window.initMap = initMap;
  