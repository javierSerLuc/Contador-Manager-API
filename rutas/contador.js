const express = require('express');
const router = express.Router();

const ControladorContador = require('../controladores/contador');

router.get('/prueba', ControladorContador.prueba);
router.post('/crear', ControladorContador.crearContador);
router.put('/incrementar/:id', ControladorContador.incrementarContador);
router.put('/decrementar/:id', ControladorContador.decrementarContador);
router.delete('/eliminar/:id', ControladorContador.eliminarContador);
router.get('/get/:id', ControladorContador.getContador);
router.get('/listaContadores', ControladorContador.getContadores);

module.exports = router;