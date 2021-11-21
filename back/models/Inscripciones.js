const { Schema, model } = require('mongoose');

const InscripcionSchema = Schema({
   
    id_inscription: {
        type: String,
        required: true,
        unique: true
    },
    
    id_user: {
        type: String,
        required: true
    },

    id_project: {
        type: String,
        required: true
    },

    state_inscription: {
        type: String,
        required: true,
        enum:['Aceptada', 'Rechazada']        
    },

    date_admission: {
        type: Date,
        
    },

    egress_date: {
        type: Date,
    },

},);

module.exports = model('Inscripcion', InscripcionSchema)