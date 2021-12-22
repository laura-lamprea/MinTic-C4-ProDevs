import bcryp from "bcrypt";
import Proyectos from "../models/Proyectos";
import Usuarios from "../models/Usuarios";
import Avances from "../models/Avances";
import Inscripciones from "../models/Inscripciones";
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query: {
        async Login(_, { email, password }) {
            const usuario = await Usuarios.findOne({
                email
                
            })
            console.log(usuario)
            if (!usuario) {
                return "Usuario o contraseña incorrecto";
            }
            const validarPassword = bcryp.compareSync(password, usuario.password)
            if (validarPassword) {
                const token = await generarJwt(usuario.id, usuario.role)
                console.log("Login exitoso")
                return {token,
                    usuario: usuario.name_user,
                    id: usuario.id,
                    role: usuario.role};
            }
            else {
                
                return "Usuario o contraseña incorrecto";
            }
        },

        Usuarios() {
            
            return Usuarios.find();
            
            },

        async UsuarioByID(_,{id}){
            return await Usuarios.findById(id);
        },

        // async Usuarios(_, args, {user}) {
        //     console.log("Usuarios", user)
        //     if (user.auth) {
        //         return await Usuarios.find().populate("leader");
        //     } else {
        //         throw new Error ("Not authenticate");
        //     }
        // },

        Proyectos() {
        return Proyectos.find().populate('leader')
        },

        async proyectoById(_, {id}) {
            return await Proyectos.findById(id).populate('leader');
        },

    

        // async Proyectos(_, args, context) {
        //     const test =await Proyectos.find().populate('leader');
        //     console.log('test', test);
        //     return await Proyectos.find().populate("leader");
        // },

        // async Proyectos(_, args, context) {
        //     if (context.user.auth) {
        //         return await Proyectos.find().populate("leader");
        //     } else {
        //         return null;
        //     }

        //     // if (context.user.auth && (context.user.role === "Admin")) {
        //     //     return await Proyectos.find().populate("leader");
        //     // } else if (context.user.auth && (context.user.role === "Leader")) {
        //     //     return await Proyectos.find({ leader: context.user.id }).populate("leader");
        //     // } else if (context.user.auth && (context.user.role === "Student")) {
        //     //     return await Proyectos.find({ state_user: true }).populate("leader");
        //     // } else {
        //     //     return null;
        //     // }
        // },

        Inscripciones() {
            return Inscripciones.find().populate('id_Dproject')
            },

        // async Inscripciones(_, args, context) {
        //     if (context.user.auth) {
        //         return await Inscripciones.find().populate('idproject').populate('student');
        //     } else {
        //         return null;
        //     }
        // },

        //listar
        Avances() {
            return Avances.find().populate('n_project') 
            },

        // async Avances(_, args, context) {
        //     if (context.user.auth) {
        //         return await Avances.find().populate("leader");
        //     } else {
        //         return null;
        //     }
        // },
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
                id_user: user.id_user,
                name_user: user.name_user,
                email: user.email,
                password: user.password,
                role: user.role,
                state_user: user.state_user
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
                    state_project:project.state_project,
                    phase:project.phase
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
                    state_inscription: inscription.state_inscription,
                },
                { new: true });
        },

        async deleteIncriptions(_, args) {
            return await Inscripciones.findByIdAndDelete(args.id)
        },

        /*Mutation Avances */
        async addProgress(_, { progress }) {
            const unAvance = new Avances(progress);
            return await unAvance.save();
        },
    }
}



