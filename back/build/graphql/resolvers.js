"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _Proyectos = _interopRequireDefault(require("../models/Proyectos"));

var _Usuarios = _interopRequireDefault(require("../models/Usuarios"));

var _Avances = _interopRequireDefault(require("../models/Avances"));

var _Inscripciones = _interopRequireDefault(require("../models/Inscripciones"));

var _jwt = require("../helpers/jwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = {
  Query: {
    async Login(_, {
      email,
      password
    }) {
      const usuario = await _Usuarios.default.findOne({
        email
      });
      console.log(usuario);

      if (!usuario) {
        return "Usuario o contraseña incorrecto";
      }

      const validarPassword = _bcrypt.default.compareSync(password, usuario.password);

      if (validarPassword) {
        const token = await (0, _jwt.generarJwt)(usuario.id, usuario.role);
        console.log("Login exitoso");
        return token;
      } else {
        console.log("Usuario o contraseña incorrecto"); //return "Usuario o contraseña incorrecto";
      }
    },

    Usuarios() {
      return _Usuarios.default.find();
    },

    async UsuarioByID(_, {
      id
    }) {
      return await _Usuarios.default.findById(id);
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
      return _Proyectos.default.find().populate('leader');
    },

    async proyectoById(_, {
      id
    }) {
      return await _Proyectos.default.findById(id).populate('leader');
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
      return _Inscripciones.default.find().populate('id_Dproject');
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
      return _Avances.default.find().populate('n_project');
    } // async Avances(_, args, context) {
    //     if (context.user.auth) {
    //         return await Avances.find().populate("leader");
    //     } else {
    //         return null;
    //     }
    // },


  },
  Mutation: {
    /*Mutation Users */
    async addUser(_, {
      user
    }) {
      const salt = _bcrypt.default.genSaltSync();

      let unUsuario = new _Usuarios.default(user);
      unUsuario.password = _bcrypt.default.hashSync(user.password, salt);
      return await unUsuario.save();
    },

    async updateProfileUser(_, {
      user
    }) {
      return await _Usuarios.default.findByIdAndUpdate(user.id, {
        id_user: user.id_user,
        name_user: user.name_user,
        email: user.email,
        password: user.password,
        role: user.role,
        state_user: user.state_user
      }, {
        new: true
      });
    },

    async updateStateUser(_, {
      user
    }) {
      return await _Usuarios.default.findByIdAndUpdate(user.id, {
        role: user.role,
        state_user: user.state_user
      }, {
        new: true
      });
    },

    async deleteUser(_, args) {
      return await _Usuarios.default.findByIdAndDelete(args.id);
    },

    /*Mutation Project */
    async addProject(_, {
      project
    }) {
      const unProyecto = new _Proyectos.default(project);
      return await unProyecto.save();
    },

    async updateProject(_, {
      project
    }) {
      return await _Proyectos.default.findByIdAndUpdate(project.id, {
        project: project.project,
        general_objectives: project.general_objectives,
        specific_objectives: project.specific_objectives,
        budget: project.budget,
        state_project: project.state_project,
        phase: project.phase
      }, {
        new: true
      });
    },

    async deleteProject(_, args) {
      return await _Proyectos.default.findByIdAndDelete(args.id);
    },

    /*Mutation Inscripciones */
    async addInscription(_, {
      inscription
    }) {
      const unaInscripcion = new _Inscripciones.default(inscription);
      return await unaInscripcion.save();
    },

    async updateStateInscriptions(_, {
      inscription
    }) {
      return await _Inscripciones.default.findByIdAndUpdate(inscription.id, {
        state_inscription: inscription.state_inscription
      }, {
        new: true
      });
    },

    async deleteIncriptions(_, args) {
      return await _Inscripciones.default.findByIdAndDelete(args.id);
    },

    /*Mutation Avances */
    async addProgress(_, {
      progress
    }) {
      const unAvance = new _Avances.default(progress);
      return await unAvance.save();
    }

  }
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map