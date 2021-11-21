const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:Admin.1234@ventas-c3.afuch.mongodb.net/DB_Prodevs';
//await mongoose.connect("mongodb+srv://admin:admin1234@ventas-c3.afuch.mongodb.net/servidor_tnt");

const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log('DB online');
        
    } catch (error) {
        console.log(error);
        console.log("sin errores")
        throw new Error('Error al inicializar DB');
    }
};

module.exports = {
    dbConnection
}