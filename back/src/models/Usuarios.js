const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    email: {
        type: String,
        unique: true
    },

    id_user: {
        type: String,
        //required: true,
        unique: true
    },
    
    name_user: {
        type: String,
        //required: true
    },

    password: {
        type: String,
        //required: true
    },

    role: {
        type: String,
        default: 'Pending'
    },

    state_user: {
        type: String,
        default: 'Pending'
    },

},);

export default model('Usuario', UsuarioSchema,"Users")