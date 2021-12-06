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
        required: true
    },

    // rol: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Rol',
    //     required: true,
    //     default: 'Pendiente'
    // },

    role: {
        type: String,
        //required: true,
        default: 'Pending'
    },

    state_user: {
        type: String,
        //required: true,
        default: 'Pending'
    },

    // idToken: {
    //     type: String
    // },
},);

export default model('Usuario', UsuarioSchema,"Users")