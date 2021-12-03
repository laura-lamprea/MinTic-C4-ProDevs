import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
      Proyectos : [Proyecto]
      Login(email : String!, password : String!): String
      Usuarios : [Usuario]
    }

    type Mutation {
      addProject(project : proyectoInput): Proyecto
      updateProject(id : proyectoUpInput): ProyectoUp
      addUser(user : UsuarioInput): Usuario
    }

    type Usuario {
      id_user: ID,
      name_user: String,
      email: String,
      password: String,
      role: String,
      state_user: String,
    }
    input UsuarioInput {
      id_user: ID,
      name_user: String,
      email: String,
      password: String,
      role: String,
      state_user: String,
    }

    type Proyecto {
      id_project: ID,
      project: String,
      general_objectives: String,
      specific_objectives: [Item],
      budget: String,
      date_start: String,
      date_finish: String,
      id_user: String,
      name_user: String,
      state_project: String,
      phase: String,
    }
    type Item {
      item: String
    }
    input ItemInput {
      item: String
    }
    input proyectoInput {
      id_project: ID,
      project: String,
      general_objectives: String,
      specific_objectives: [ItemInput],
      budget: String,
      date_start: String,
      date_finish: String,
      id_user: String,
      name_user: String,
      state_project: String,
      phase: String,
    }
    type ProyectoUp {
      id_project: ID
    }
    input proyectoUpInput {
      id: ID
    }

    
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})