"use strict";

var _graphql = require("graphql");

var _schema = require("@graphql-tools/schema");

var _config = require("../../database/config");

var _resolvers = require("../../graphql/resolvers");

var _schema2 = require("../../graphql/schema");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const getUsuarios = {
  id: 'Consultar todos los usuarios de la db',
  query: `
        {
            Usuarios{
            id
            id_user
            name_user
            last_name_user
            email
            password
            role
            state_user
            }
        } 
    `,
  variables: {},
  context: {
    user: {
      auth: true
    }
  },
  esperado: {
    data: {
      Usuarios: [{
        id: "61c10e211123f8c2d1be0b3c",
        email: "laura.lampream@gmail.com",
        id_user: "U001",
        name_user: "Laura ",
        last_name_user: "Lamprea",
        role: "Leader",
        state_user: "Authorized"
      }]
    }
  }
};
const schema = (0, _schema.makeExecutableSchema)({
  typeDefs: _schema2.typeDefs,
  resolvers: _resolvers.resolvers
});
const {
  id,
  query,
  variables,
  context,
  esperado
} = getUsuarios;
test('consultar usuarios ', async () => {
  await (0, _config.dbConnection)();
  const result = await (0, _graphql.graphql)(id, schema, query, null, context, variables);
  expect(result).toEqual(esperado);
});
//# sourceMappingURL=resolvers.test.js.map