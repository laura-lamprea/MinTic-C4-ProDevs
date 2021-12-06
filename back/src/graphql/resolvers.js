import bcryp from "bcrypt";
import Proyectos from "../models/Proyectos";
import Usuarios from "../models/Usuarios";
//import Avances from "../models/Avances";
import Inscripciones from "../models/Inscripciones";
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query: {

        Proyectos(_, args, context) {
            //true o false la autenticacion, obliga usar un jwt activo
            // if (context.user.auth) {
            //     const test  = Proyectos.find().populate()

            //     return Proyectos.find();
            // } else {
            //     return null
            // }
            return Proyectos.find();
        },

        Inscripciones() {
            return Inscripciones.find();
        },

        Usuarios() {
            return Usuarios.find();
        },


        async Login(_, { email, password }) {
            const usuario = await Usuarios.findOne({
                email
            })
            if (!usuario) {
                return "Usuario o contraseña incorrecto";
            }
            const validarPassword = bcryp.compareSync(password, usuario.password)
            if (validarPassword) {
                const token = await generarJwt(usuario.id, usuario.nombre)
                //console.log("Login exitoso")
                return token;
            }
            else {
                return "Usuario o contraseña incorrecto";
            }
        }

      

     },
    


    Mutation: {

        /*Mutation Users */
        async addUser(_, { user }) {
            const salt = bcryp.genSaltSync();
            let unUsuario = new Usuarios(user);
            unUsuario.password = bcryp.hashSync(user.password, salt);
            return await unUsuario.save();
        },
        async updateProfileUser(_, { user }) {
            return await Usuarios.findByIdAndUpdate(user.id, {
            },
                { new: true });
        },
        async updateStateUser(_, { user }) {
            return await Usuarios.findByIdAndUpdate(user.id, {
                role: user.role,
                state_user: user.state_user
            },
                { new: true });
        },
        async deleteUser(_, args) {
            return await Usuarios.findByIdAndDelete(args.id)
        },

        /*Mutation Project */
        async addProject(_, { project }) {
            const unProyecto = new Proyectos(project);
            return await unProyecto.save();
        },
        async updateProject(_, { project }) {
            return await Proyectos.findByIdAndUpdate(project.id, 
                {
                project: project.project,
                general_objectives: project.general_objectives,
                specific_objectives: project.specific_objectives,
                budget: project.budget,
            },
                { new: true });
        },
        async deleteProject(_, args) {
            return await Proyectos.findByIdAndDelete(args.id)
        },

        /*Mutation Inscripciones */
        async addInscription(_, { inscription }) {
        const unaInscripcion = new Inscripciones(inscription);
            return await unaInscripcion.save();
        },

        async updateStateInscriptions(_, { inscription }) {
            return await Inscripciones.findByIdAndUpdate(inscription.id, 
                {
                state_inscription: inscription.state_inscription
            },
                { new: true });
        },

        async deleteIncriptions(_, args) {
            return await Inscripciones.findByIdAndDelete(args.id)
        },

    }
}



