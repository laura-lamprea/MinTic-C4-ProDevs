"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const {
  Schema,
  model
} = require('mongoose');

const UsuarioSchema = Schema({
  email: {
    type: String,
    unique: true
  },
  id_user: {
    type: String
  },
  name_user: {
    type: String //required: true

  },
  last_name_user: {
    type: String //required: true

  },
  password: {
    type: String //required: true

  },
  role: {
    type: String,
    default: 'Pending',
    enum: ['Admin', 'Leader', 'Student']
  },
  state_user: {
    type: String,
    default: 'Pending'
  }
});

var _default = model('Usuario', UsuarioSchema, "Users");

exports.default = _default;
//# sourceMappingURL=Usuarios.js.map