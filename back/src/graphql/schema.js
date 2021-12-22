import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

export const typeDefs = `
    type Query {
      Login(email : String!, password : String!): Auth
      Usuarios : [Usuario]
      UsuarioByID(id:ID!): Usuario
      Proyectos : [Proyecto]
      proyectoById(id: ID!) : Proyecto
      Inscripciones : [Inscripcion]
      Avances: [Avance]
    }

    type Mutation {
      addUser(user: usuarioInput): Usuario
      updateStateUser(user: usuarioInput): Usuario
      updateProfileUser(user: usuarioInput): Usuario
      deleteUser(id:ID!): Usuario

    
      addProject(project: proyectoInput): Proyecto
      updateProject(project: proyectoInput): Proyecto
      deleteProject(id:ID!): Proyecto

      addInscription(inscription: inscripcionInput): Inscripcion
      updateStateInscriptions(inscription: inscripcionInput): Inscripcion
      deleteIncriptions(id:ID!): Inscripcion

      addProgress(progress: avanceInput): Avance
    }

    type Auth {
      token: String,
      usuario: String,
      id:String
      role: String
  }

    type Usuario {
      id: ID,
      id_user: String,       
      name_user: String,
      last_name_user: String,
      email: String,
      password: String,
      role: String,
      state_user: String,
    }
    input usuarioInput {
      id: ID,
      id_user: String,  
      name_user: String,
      last_name_user: String,
      email: String,
      password: String,
      role: String,
      state_user: String,
    }
        
    type Proyecto {
      id: ID,
      id_project: String,
      project: String,
      general_objectives: String,
      specific_objectives: [Item],
      budget: String,
      date_start: String,
      date_finish: String,
      leader: Usuario,
      state_project: String,
      phase: String,
    }
    input proyectoInput {
      id: ID,
      id_project: String,
      project: String,
      general_objectives: String,
      specific_objectives: [ItemInput],
      budget: String,
      date_start: String,
      date_finish: String,
      leader: ID,
      state_project: String,
      phase: String,
    }

    type Inscripcion {
      id: ID,
      id_inscription: String,
      id_Dproject: Proyecto,
      student: Usuario,
      state_inscription: String,
      date_admission: String,
      egress_date: String,
    }
    input inscripcionInput {
      id: ID,
      id_inscription: String,
      id_Dproject: ID,
      student: ID,
      state_inscription: String,
      date_admission: String,
      egress_date: String,
    }

    type Avance {
      id: ID
      n_project: Proyecto,
      student_p:Usuario,
      date_progress: String,
      descript: String,
      obsers: String,
    }
    input avanceInput {
      id: ID
      n_project: ID,
      student_p:ID,
      date_progress: String,
      descript: String,
      obsers: String,
    }

    type Item {
      item: String
    }
    input ItemInput {
      item: String
    }
   
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})