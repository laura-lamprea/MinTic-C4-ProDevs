"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarJwt = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const secret = "@mi_llave";

const validarJwt = (req, res, next) => {
  let token = "";
  token = req.headers["x-access-token"] || req.headers["authorization"]; // console.log("entro")

  if (!token) {
    req.user = {
      auth: false
    };
    return next();
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  try {
    //const { uid, name_user, email } = jwt.verify(token, secret);
    console.log(_jsonwebtoken.default.verify(token, secret)); //req.user = { auth: true, id: uid, name_user,  email };
    //return next();
  } catch (error) {
    req.user = {
      auth: false
    };
    return next();
  }
};

exports.validarJwt = validarJwt;
//# sourceMappingURL=validar-jwt.js.map