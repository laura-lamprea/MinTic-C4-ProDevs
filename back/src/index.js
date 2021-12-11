import express from "express";
import { graphqlHTTP } from "express-graphql";
import  schema  from "./graphql/schema"; 
import { dbConnection } from "./database/config";
import { validarJwt } from "./middleware/validar-jwt";
//import cors from 'cors';

const app = express();
//require('dotenv').config();
dbConnection();


// app.use(express.static('public'));
// app.use(express.json());

app.use(validarJwt);

// app.use('/api/usuarios', require('./routes/usuarios'));
// app.use('/api/proyectos', require('./routes/proyectos'));
// app.use('/api/inscripciones', require('./routes/inscripciones'));
// app.use('/api/avances', require('./routes/avances'));

//const schema = {};
// app.use se utiliza para llamar middlewares lo cuales tienen el comando next() después de ejecutarse
app.use("/graphql", graphqlHTTP((req)=>({
    graphiql: true,
    schema: schema,
    context: {
        user: req.user
    }
})));

app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000')
});
