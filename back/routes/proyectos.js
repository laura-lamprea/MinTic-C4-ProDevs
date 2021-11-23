const { Router } = require('express')
const router = Router();

const { getProyectos, setProyecto, actualizarProyecto, eliminarProyecto } = require('../controllers/Proyectos');

router.get('/listar', getProyectos);

router.post('/crear', setProyecto);

router.put('/actualizar/:id', actualizarProyecto);

router.delete('/eliminar/:id', eliminarProyecto);

module.exports = router;