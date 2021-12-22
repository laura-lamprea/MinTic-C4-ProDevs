"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generarJwt = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const secret = "@mi_llave";

const generarJwt = (uid, role) => {
  return new Promise((resolve, reject) => {
    const payload = {
      uid,
      role
    };

    _jsonwebtoken.default.sign(payload, secret, {
      expiresIn: "2h"
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject("No se pudo generar el Token");
      }

      resolve(token);
    });
  });
};

exports.generarJwt = generarJwt;
//# sourceMappingURL=jwt.js.map