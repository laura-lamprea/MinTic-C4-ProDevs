const { Schema, model } = require('mongoose');

const AvancesSchema = Schema({

    // id_Avance: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    
    // id_project: {
    //     type: String,
    //     //required: true,
    // },

    // date_progress: {
    //     type: String,
    //     required: true,
    // },

    descript: {
        type: String,
        required: true
    },

    obsers: {
        type: String,
        required: false,
        default: 'Pendiente'
    }
},);

module.exports = model('Avance', AvancesSchema)