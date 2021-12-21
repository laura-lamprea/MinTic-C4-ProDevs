import mongoose, { connection} from 'mongoose';
//const url = 'mongodb+srv://admin:Admin.1234@ventas-c3.afuch.mongodb.net/DB_Prodevs';

export const dbConnection = async () => {

    const { MONGO_DB_PROD, MONGO_DB_TEST, NODE_ENV } = process.env;

    const connectionString = NODE_ENV === "test" ? MONGO_DB_TEST : MONGO_DB_PROD;

    console.log(connectionString);

    try {
        await mongoose.connect(connectionString);
        console.log('DB online');
        
    } catch (error) {
        console.log(error);
    }
};
