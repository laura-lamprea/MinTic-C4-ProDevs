const { Schema, model } = require('mongoose');

const AvancesSchema = Schema({

    id_Avance: {
        type: String,
        required: true,
        unique: true
    },
    
    Avanceident: {
        type: Date,
        required: true
    },

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