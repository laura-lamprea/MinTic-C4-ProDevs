const { Schema, model } = require('mongoose');

const AvancesSchema = Schema({

    id_progress: {
        type: String,
        required: true,
        unique: true
    },
    
    id_project: {
        type: Schema.Types.ObjectId,
        ref: "Proyecto",
        required: true,
    },

    date_progress: {
        type: String,
        required: true,
    },

    descript: {
        type: String,
        required: true
    },

    obsers: [{
        item: String
    }]
},);

export default model('Avance', AvancesSchema,"Progress")