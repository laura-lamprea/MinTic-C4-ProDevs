const { Schema, model } = require('mongoose');

const InscripcionSchema = Schema({
   
  
    student: {
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    },

    idproject: {
        type: Schema.Types.ObjectId,
        ref: "Proyecto"
    },

    state_inscription: {
        type: String,
        enum:['Accepted', 'Rejected'],
        default: "Rejected"       
    },

    date_admission: {
        type: String,
        default: "Null"
        
    },

    egress_date: {
        type: String,
        default: "Null"
    },

},);

module.exports = model('Inscripcion', InscripcionSchema,"Inscriptions")