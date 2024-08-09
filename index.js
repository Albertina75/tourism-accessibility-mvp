// index.js

// Importa el módulo de Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Puedes usar el puerto 3000 por defecto

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
