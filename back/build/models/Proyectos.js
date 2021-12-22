"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const {
  Schema,
  model
} = require('mongoose');

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
    type: String
  },
  specific_objectives: [{
    item: String
  }],
  budget: {
    type: String //type: Number,
    //required: true,

  },
  date_start: {
    type: String,
    default: "Null"
  },
  date_finish: {
    type: String,
    default: "Null"
  },
  leader: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  state_project: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Inactive'
  },
  phase: {
    type: String,
    enum: ['Initiated', 'Developing', 'Completed', 'Null'],
    default: 'Null'
  } // progress:[
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "Avance",
  //     },
  //   ],

});

var _default = model('Proyecto', ProyectoSchema, "Projects");

exports.default = _default;
//# sourceMappingURL=Proyectos.js.map