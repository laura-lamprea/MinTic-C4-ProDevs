import bcryp from "bcrypt";
//import Curso from "../models/Curso";
import Proyectos from "../models/Proyectos";
import Usuarios from "../models/Usuarios";
//import Avances from "../models/Avances";
//import Inscripciones from "../models/Inscripciones";
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query : {
        Proyectos() {
            return Proyectos.find();
        },
        Usuarios() {
            return Usuarios.find();
        },
        async Login(_, {email, password}) {
            const usuario = await Usuarios.findOne({
                email
            })
            if (!usuario){
                return "Usuario o contraseña incorrecto";
            }
            const validarPassword = bcryp.compareSync(password, usuario.password)
            if (validarPassword){
                const token = await generarJwt(usuario.id, usuario.nombre)
                //console.log("Login exitoso")
                return token;
            }
            else {
                return "Usuario o contraseña incorrecto";
            }
        }
    },


    Mutation : {
        async addProject(_, {project}){
            const unProyecto = new Proyectos(project);
            return await unProyecto.save();
        },

        async updateProject(_, {id}){
            return await Proyectos.findByIdAndUpdate(id);
        },
       
        async addUser(_, {user}) {            
            const salt = bcryp.genSaltSync();
            let unUsuario = new Usuarios(user);
            unUsuario.password = bcryp.hashSync(user.password, salt);
            return await unUsuario.save();
        }
    }
}