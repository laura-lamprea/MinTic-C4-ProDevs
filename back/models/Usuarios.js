const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    id_user: {
        type: String,
        required: true,
        unique: true
    },
    
    user: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    rol: {
        type: String,
        required: true,
        default: 'Pendiente'
    },

    state_user: {
        type: String,
        required: true,
        default: 'Pendiente'
    },

    idToken: {
        type: String
    },

},);

module.exports = model('Usuario', UsuarioSchema)