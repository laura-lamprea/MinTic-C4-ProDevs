const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    rol: {
        // type: Schema.Types.ObjectId,
        // ref: 'Rol',
        type: String,
        required: true,
        //** ID del rol de "Indefinido" (sacado directamente de la base de datos) */
        default: 'Indefinido'
    },

    idToken: {
        type: String
    },
},);

module.exports = model('Usuario', UsuarioSchema)