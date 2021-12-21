const { Schema, model } = require('mongoose');

const InscripcionSchema = Schema({  

    id_inscription:{
        type: String,

    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    },

    id_Dproject: {
        type: Schema.Types.ObjectId,
        ref: "Proyecto"
    },

    state_inscription: {
        type: String,
        enum:['Accepted', 'Rejected'],
        default: "Rejected"       
    },

    date_admission: {
        type: Date,
        default: Date.now
        
    },

    egress_date: {
        type: Date,
        default: Date.now
    },

},);

module.exports = model('Inscripcion', InscripcionSchema,"Inscriptions")