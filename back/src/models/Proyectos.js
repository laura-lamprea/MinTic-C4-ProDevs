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
    },

    leader: {
        Usuario: String,
    },

    // leader: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Usuarios"
    // },
    
    state_project: {
        type: String,
        default: 'Inactivo'
    },

    phase: {
        type: String,
        default: 'Nula'
    },


});

export default model('Proyecto', ProyectoSchema,"Projects")