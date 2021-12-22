"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const {
  Schema,
  model
} = require('mongoose');

const AvancesSchema = Schema({
  id_progress: {
    type: String,
    unique: true
  },
  n_project: {
    type: Schema.Types.ObjectId,
    ref: "Proyecto"
  },
  student_p: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  date_progress: {
    type: String
  },
  descript: {
    type: String
  },
  obsers: {
    type: String
  }
});

var _default = model('Avance', AvancesSchema, "Progress");

exports.default = _default;
//# sourceMappingURL=Avances.js.map