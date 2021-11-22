const { response } = require('express');
const Avance = require('../models/Avances');


const getAvances = async (req, resp = response) => {
    const Avances = await Avance.find().populate("id_Avance");
    resp.status(200).json({
        ok: true,
        msg: 'Lista de Avances',
        Avances
    })
}

const setAvance = async (req, resp = response) => {
    const Avance = new Avance(req.body);
    try {
        const av = await Avance.save();
        resp.status(201).json({
            ok: true,
            msg: 'Avance Creado',
            Avance: av
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
    const AvanceId = req.params.id;
    try {
        const AvanceActualizado = await Avance.findByIdAndUpdate(AvanceId, req.body, { new: true });
        console.log(AvanceActualizado);
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