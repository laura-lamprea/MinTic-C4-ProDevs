import { makeExecutableSchema } from '@graphql-tools/schema';
import { dbConnection } from "../../database/config";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import dotenv from "dotenv";
import { graphql } from 'graphql';
dotenv.config();


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
            Usuarios: [
                {   
                    id: "61c10e211123f8c2d1be0b3c",
                    email: "laura.lampream@gmail.com",
                    id_user: "U001",
                    name_user: "Laura ",
                    last_name_user: "Lamprea",
                    role: "Leader",
                    state_user: "Authorized",
                }
            ]
        }
    }
};

const schema = makeExecutableSchema({typeDefs, resolvers });

const { id, query, variables, context, esperado } = getUsuarios;

test('consultar usuarios ', async () => {

    await dbConnection();

    const result = graphql(id, schema, query, null, context, variables);

    expect(result).toEqual(esperado);

})
