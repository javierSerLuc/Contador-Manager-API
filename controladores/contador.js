const Contador = require("../modelos/contador");


const prueba = (req, res) => {
    res.status(200).send("Hola Mundo");
}

const crearContador = (req, res) => {
    let parametros = req.body;
    let contador = new Contador(parametros);

    contador.save((err, contadorGuardado) => {
        if (err || !contadorGuardado) {
            res.status(500).json({
                status: "error",
                mensaje: "Error al guardar el contador"
            });
        } else {
            res.status(200).json({
                status: "success",
                mensaje: "Contador creado correctamente",
                contador: contadorGuardado
                
            });
        }
    });

}

module.exports = {
    prueba,
    crearContador
}