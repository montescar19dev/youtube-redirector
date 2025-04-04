const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const youtubeLink = 'https://www.youtube.com/watch?v=BMvTjYL3Y_s'; // Cambia esto si quieres
  res.redirect(302, youtubeLink);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
