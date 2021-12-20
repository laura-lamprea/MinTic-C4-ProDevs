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
        type: Date,
        default: Date.now
        
    },

    egress_date: {
        type: Date,
        default: Date.now
    },

},);

module.exports = model('Inscripcion', InscripcionSchema,"Inscriptions")