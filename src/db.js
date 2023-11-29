import mongoose from 'mongoose';

export const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://usrpell:p8dZLEWfXU3ppdKe@myatlasclusteredu.s824y7f.mongodb.net/gymg50?retryWrites=true&w=majority");
        console.log(">>> DB está conectada.")
    } catch(error) {
        console.log(error);
    }

};

// const mongoose = require('mongoose');

//async function connectDB() {
//  try {
//    await mongoose.connect("mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority", {
//      useNewUrlParser: true,
//      useUnifiedTopology: true
//    });
//    console.log('Conexión exitosa a la base de datos');
//  } catch (error) {
//    console.error('Error de conexión a la base de datos:', error.message);
    // Puedes manejar el error de otra manera si lo prefieres
//  }
//}
