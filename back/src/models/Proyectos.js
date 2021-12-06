const { Schema, model } = require('mongoose');


const ProyectoSchema = Schema({
    id_project: {
        type: String,
        //required: true,
        unique: true
    },

    project: {
        type: String,
        //required: true,
        unique: true
    },

    general_objectives: {
        type: String,
    },

    specific_objectives: [{
        item: String
    }],

    budget: {
        type: Number,
        //required: true,
    },

    date_start: {
        type: String,
        // type: Date, 
        // default: Date.now
        // required: true,
    },

    date_finish: {
        type: String,
        // type: Date, 
        // default: Date.now
        //required: true,
    },

    id_user: {
        type: String,
    },

    // id_user: [{
    //     id_user:Schema.Types.ObjectId,
    //     ref: 'Usuarios',
    // }],

    // id_user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Usuarios',
    // },

    user: {
        type: String,
        //required: true
    },

    state_project: {
        type: String,
        default: 'Inactivo'
    },

    phase: {
        type: String,
        default: 'Nula'
    },


});

export default model('Proyecto', ProyectoSchema)