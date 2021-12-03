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
    
    general_objectives:{
        type: String,
    },

    specific_objectives: [{
        item:String
    }],

    budget: {
        type: String,
        //required: true,
    },

    date_start: {
        type: String,
       // required: true,
    },

    date_finish: {
        type: String,
        //required: true,
    },

    id_user: {
        type: String,
       //required: true,
        unique: true
    },
    
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


},);

export default model('Proyecto', ProyectoSchema)