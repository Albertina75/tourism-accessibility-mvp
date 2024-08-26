function initMap() {
  // Crea un nuevo mapa y lo asocia al elemento con ID "map"
  new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -34.397, lng: 150.644 },
  });
}
// Asegúrate de que la función `initMap` esté disponible globalmente
window.initMap = initMap;