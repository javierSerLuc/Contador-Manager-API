const {conexion} = require('./basedatos/conexion');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');


dotenv.config();


//conectar a la DB
conexion();

//Crear el servidor de node
const app = express();

//configurar cors
app.use(cors());

//Convertir body a json
app.use(express.json());

//crear rutas

//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});