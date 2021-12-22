"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _config = require("./database/config");

var _validarJwt = require("./middleware/validar-jwt");

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
(0, _config.dbConnection)();
app.use((0, _cors.default)());
app.use(_validarJwt.validarJwt);
app.use("/graphql", (0, _expressGraphql.graphqlHTTP)(req => ({
  graphiql: true,
  schema: _schema.default,
  context: {
    user: req.user
  }
})));
app.listen(process.env.PORT || 4000, () => {
  console.log(`Servidor conectado en el puerto ${process.env.PORT || 4000}`);
});
//# sourceMappingURL=index.js.map