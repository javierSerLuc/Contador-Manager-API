const express = require('express');
const router = express.Router();

const ControladorContador = require('../controladores/contador');

router.get('/prueba', ControladorContador.prueba);
router.post('/crear', ControladorContador.crearContador);

module.exports = router;