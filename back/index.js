const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config');
const app = express();

dbConnection();

app.use(express.static('public'));
app.use(express.json());

app.use('/api/usuarios',require('./routes/usuarios'));
// app.use('/api/proyectos',require('./routes/proyectos'));
// app.use('/api/inscripciones',require('./routes/inscripciones'));
// app.use('/api/avances',require('./routes/avances'));

app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000')
});
