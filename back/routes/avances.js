const { Router } = require('express')
const router = Router();

const { getAvances, setAvance, actualizarAvance, eliminarAvance } = require('../controllers/Avances');

router.get('/listar', getAvances);

router.post('/crear', setAvance);

router.put('/actualizar/:id', actualizarAvance);

router.delete('/eliminar/:id', eliminarAvance);

module.exports = router;