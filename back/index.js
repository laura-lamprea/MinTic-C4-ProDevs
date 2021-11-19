const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config');
const app = express();

dbConnection();

app.use(express.static('public'));
app.use(express.json());

app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/proyectos',require('./routes/proyectos'));
app.use('/api/inscripciones',require('./routes/inscripciones'));
app.use('/api/avances',require('./routes/avances'));

app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000')
});






// app.get('/api/usuarios', (req, res) => {
//     res.json({
//         ok: true,
//         msg: 'listar todos los usuarios'
//     });
// });

// app.get('/api/usuarios/:id', (req, res) => {
//     res.json({
//         ok: true,
//         msg: 'listar usuario por id'
//     });
// });

// app.post('/api/usuarios/', (req, res) => {
//     res.json({
//         ok: true,
//         msg: 'crear usuario'
//     });
// });

// app.put('/api/usuarios/:id', (req, res) => {
//     res.json({
//         ok: true,
//         msg: 'actualizar usuario'
//     });
// });

// app.delete('/api/usuarios/:id', (req, res) => {
//     res.json({
//         ok: true,
//         msg: 'eliminar usuario'
//     });
// });
