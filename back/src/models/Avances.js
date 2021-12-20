const { Schema, model } = require('mongoose');

const AvancesSchema = Schema({

    id_progress: {
        type: String,
        unique: true
    },
    
    n_project: {
        type: Schema.Types.ObjectId,
        ref: "Proyecto",
    },
    
    student_p: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
    },


    date_progress: {
        type: String,
    },

    descript: {
        type: String,
    },

    obsers: {
        type: String
    },
},);

export default model('Avance', AvancesSchema,"Progress")