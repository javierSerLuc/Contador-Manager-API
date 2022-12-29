const express = require('express');
const router = express.Router();

const ControladorContador = require('../controladores/contador');

router.get('/prueba', ControladorContador.prueba);

module.exports = router;