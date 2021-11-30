import mongoose from 'mongoose';
const url = 'mongodb+srv://admin:Admin.1234@ventas-c3.afuch.mongodb.net/DB_Prodevs';

export const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log('DB online');
        
    } catch (error) {
        console.log(error);
    }
};
