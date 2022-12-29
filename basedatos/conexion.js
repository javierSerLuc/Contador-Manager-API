const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const conexion = async () => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_CNN,{dbName: process.env.DB_NAME});
        console.log('Exito al conectar con la base de datos');
    }
    catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ');
    }


};

module.exports = {
    conexion
}