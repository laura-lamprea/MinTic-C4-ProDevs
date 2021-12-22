"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConnection = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbConnection = async () => {
  const {
    MONGO_DB,
    MONGO_DB_TEST,
    NODE_ENV
  } = process.env;
  const connectionString = NODE_ENV === 'test' ? MONGO_DB_TEST : MONGO_DB;
  console.log(connectionString);

  try {
    await _mongoose.default.connect('mongodb+srv://admin:Admin.1234@ventas-c3.afuch.mongodb.net/DB_Prodevs');
    console.log("base conectada");
  } catch (error) {
    console.log(error);
  }
};

exports.dbConnection = dbConnection;
//# sourceMappingURL=config.js.map