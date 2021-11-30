const { Router } = require('express')
const router = Router();

const { getInscripcion, setInscripcion, actualizarInscripcion, eliminarInscripcion } = require('../controllers/Inscripciones');

router.get('/listar', getInscripcion);

router.post('/crear', setInscripcion); 

router.put('/actualizar/:id', actualizarInscripcion);

router.delete('/eliminar/:id', eliminarInscripcion);

module.exports = router;