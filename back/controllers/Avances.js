const { response } = require('express');
const Avance = require('../models/Avances');


const getAvances = async (req, resp = response) => {
    const avances = await Avance.find().populate("id_project");
    resp.status(200).json({
        ok: true,
        msg: 'Lista de Avances',
        avances
    })
}

const setAvance = async (req, resp = response) => {
    const avance = new Avance(req.body);
    try {
        const av = await avance.save();
        resp.status(201).json({
            ok: true,
            msg: 'Avance Creado',
            avance: av
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el avance',
        })
    }

    resp.json({
        ok: true,
        msg: 'Crear Avance'
    })
}

const actualizarAvance = async (req, resp = response) => {
    const avanceId = req.params.id;
    try {
        const avanceActualizado = await Avance.findByIdAndUpdate(avanceId, req.body, { new: true });
        console.log(avanceActualizado);
        resp.json({
            ok: true,
            msg: 'Avance actualizado exitosamente!! ',
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error en la actualizacion del Avance',
        });
    }
}

const eliminarAvance = async (req, resp = response) => {
    const avanceId = req.params.id;
    try {       
        await Avance.findByIdAndDelete(avanceId);
        resp.json({
            ok: true,
            msg: 'Avance eliminado exitosamente!! ',
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error en la eliminacion del Avance',
        });
    }
}

module.exports = {
    getAvances,
    setAvance,
    actualizarAvance,
    eliminarAvance
};