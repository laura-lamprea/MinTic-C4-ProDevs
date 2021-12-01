import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
      Proyectos : [Proyecto]
    }
    type Mutation {
      agregarProyecto(proyecto : proyectoInput): Proyecto
    }
    type Proyecto {
      id_project: ID,
      project: String,
      general_objectives: String,
      specific_objectives: String,
      budget: String,
      date_start: String,
      date_finish: String,
      id_user: String,
      user: String,
      state_project: String,
      phase: String,
    }
    input proyectoInput {
      id_project: ID,
      project: String,
      general_objectives: String,
      specific_objectives: String,
      budget: String,
      date_start: String,
      date_finish: String,
      id_user: String,
      user: String,
      state_project: String,
      phase: String,
    }
   
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})