const { response } = require('express');
const Proyecto = require('../models/Proyectos');

const getProyectos = async (req, resp = response) => {
    const proyectos = await Proyecto.find().populate("id_project");
    resp.status(200).json({
        ok: true,
        msg: 'Lista de proyectos',
        proyectos
    })
}

const setProyecto = async (req, resp = response) => {
    const proyecto = new Proyecto(req.body);
    try {
        const pr = await proyecto.save();
        resp.status(201).json({
            ok: true,
            msg: 'Proyecto Creado',
            proyecto: pr
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el proyecto',
        })
    }

    resp.json({
        ok: true,
        msg: 'Crear Proyecto'
    })
}

const actualizarProyecto = async (req, resp = response) => {
    const proyectoId = req.params.id;
    try {
        const proyectoActualizado = await Proyecto.findByIdAndUpdate(proyectoId, req.body, { new: true });
        console.log(proyectoActualizado);
        resp.json({
            ok: true,
            msg: 'Proyectos actualizado exitosamente!! ',
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error en la actualizacion del proyecto',
        });
    }
}

const eliminarProyecto = async (req, resp = response) => {
    const proyectoId = req.params.id;
    try {
        await Proyecto.findByIdAndDelete(proyectoId);
        resp.json({
            ok: true,
            msg: 'Proyecto eliminado exitosamente!! ',
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error en la eliminacion del proyecto',
        });
    }
}

module.exports = {
    getProyectos,
    setProyecto,
    actualizarProyecto,
    eliminarProyecto 
};