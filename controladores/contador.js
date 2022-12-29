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

const incrementarContador = (req, res) => {
    let id = req.params.id;
    Contador.findByIdAndUpdate(id, {$inc: {valor: 1},$push : {fechas : Date.now()}}, { lean: true, new: true }, (err, contadorActualizado) => {
        if(err || !contadorActualizado){
            res.status(500).json({
                status: "error",
                mensaje: "Error al incrementar el contador"
            });
        }else{
            res.status(200).json({
                status: "success",
                mensaje: "Contador incrementado correctamente",
                contador: contadorActualizado
            });
        }
    });
    
}

const decrementarContador = (req, res) => {
    let id = req.params.id;
    Contador.findByIdAndUpdate(id, {$inc: {valor: -1},$pop : {fechas : -1}}, { lean: true, new: true }, (err, contadorActualizado) => {
        if(err || !contadorActualizado){
            res.status(500).json({
                status: "error",
                mensaje: "Error al decrementar el contador"
            });
        }else{
            res.status(200).json({
                status: "success",
                mensaje: "Contador decrementado correctamente",
                contador: contadorActualizado
            });
        }
    });
}

const eliminarContador = (req, res) => {
    let id = req.params.id;
    Contador.findByIdAndDelete(id, (err, contadorEliminado) => {
        if(err || !contadorEliminado){
            res.status(500).json({
                status: "error",
                mensaje: "Error al eliminar el contador"
            });
        }else{
            res.status(200).json({
                status: "success",
                mensaje: "Contador eliminado correctamente",
                contador: contadorEliminado
            });
        }
    });
}

const getContador = (req, res) => {
    let id = req.params.id;
    Contador.findById(id, (err, contador) => {
        if(err || !contador){
            res.status(500).json({
                status: "error",
                mensaje: "Error al obtener el contador"
            });
        }else{
            res.status(200).json({
                status: "success",
                mensaje: "Contador obtenido correctamente",
                contador: contador
            });
        }
    });
}

const getContadores = (req, res) => {
    Contador.find({}, (err, contadores) => {
        if(err || !contadores){
            res.status(500).json({
                status: "error",
                mensaje: "Error al obtener los contadores"
            });
        }else{
            res.status(200).json({
                status: "success",
                mensaje: "Contadores obtenidos correctamente",
                contadores: contadores
            });
        }
    });
}

module.exports = {
    prueba,
    crearContador,
    incrementarContador,
    decrementarContador,
    eliminarContador,
    getContador,
    getContadores
}