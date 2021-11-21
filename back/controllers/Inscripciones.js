const { response } = require('express');
const Inscripcion = require('../models/Inscripciones');

const getInscripcion = async (req, resp = response) => {
    const inscripcion = await Inscripcion.find().populate("id_Inscription");
    resp.status(200).json({
        ok: true,
        msg: 'Lista de solicitud de inscripciones',
        inscripcion
    })
}

const setInscripcion = async (req, resp = response) => {
    const Inscripcion = new Inscripcion(req.body);
    try {
        const us = await Inscripcion.save();
        resp.status(201).json({
            ok: true,
            msg: 'Solicitud de inscripcion al proyecto creada',
            Inscripcion: us
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error en la solicitud de inscrición al proyecto',
        })
    }

    resp.json({
        ok: true,
        msg: 'Solicitud de inscripcion creada'
    })
}

const actualizarInscripcion = async (req, resp = response) => {
    const inscripcionId = req.params.id;
    try {
        const inscripcionActualizada = await inscripcion.findByIdAndUpdate(inscripcionId, req.body, { new: true });
        console.log(inscripcionActualizada);
        resp.json({
            ok: true,
            msg: 'Inscripción actualizada exitosamente!! ',
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error en la actualizacion de la inscripción',
        });
    }
}

const eliminarInscripcion = async (req, resp = response) => {
    const inscripcionId = req.params.id;
    try {
        // const usuario = await Usuario.findById(usuarioId); 
        await Usuario.findByIdAndDelete(inscripcionId);
        resp.json({
            ok: true,
            msg: 'Inscripción eliminada exitosamente!! ',
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error en la eliminacion de la inscripcioón',
        });
    }
}

module.exports = {
    getInscripcion,
    setInscripcion,
    actualizarInscripcion,
    eliminarInscripcion
};