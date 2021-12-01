import bcryp from "bcrypt";
//import Curso from "../models/Curso";
import Proyectos from "../models/Proyectos";
//import Usuarios from "../models/Usuarios";
//import Avances from "../models/Avances";
//import Inscripciones from "../models/Inscripciones";


export const resolvers = {
    Query : {
        Proyectos() {
            return Proyecto.find();
        },
        // async Login(_, {email, password}) {
            
        //     const usuario = await Usuario.findOne({
        //         email
        //     })
        //     if (!usuario){
        //         return "Usuario o contraseña incorrecto";
        //     }
            
        //     const validarPassword = bcryp.compareSync(password, usuario.password)
        //     if (validarPassword){
        //         return "Exitoso";
        //     }
        //     else {
        //         return "Usuario o contraseña incorrecto";
        //     }
        // }
    },
    Mutation : {
        async agregarProyecto(_, {proyecto}){
            const unProyecto = new Proyectos(proyecto);
            return await unProyecto.save();
        },

        // async AgregarUsuario(_, { usuario }) {            
        //     const salt = bcryp.genSaltSync();
        //     let nUsuario = new Usuario(usuario);
        //     nUsuario.password = bcryp.hashSync(usuario.password, salt);
        //     return await nUsuario.save();
        // }
    }
}