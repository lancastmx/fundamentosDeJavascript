const express = require('express');
const config = require('../config');

const user = require('./components/user/network');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola! El servidor de Fundamentos está vivo.');
});

app.listen(config.api.port, () => {
  console.log(
    `Servidor de Fundamentos escuchando en el puerto ${config.api.port}`
  );
});
