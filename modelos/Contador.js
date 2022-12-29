const {Schema, model} = require('mongoose');

const ContadorSchema = Schema({
    valor : {
        type: Number,
        default: 0
    },
    nombre: {
        type: String,
        required: true
    },
    emoji: {
        type: String,
        default: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/2b50.png'
    },
    fechas : [{
        type: Date,
        default: Date.now
    }]


});

module.exports = model('Contador', ContadorSchema);

