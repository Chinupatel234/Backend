// require('dotenv').config();
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env',
})
connectDB();



















// IIFE
// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("Application not able to talk to the database.")
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     }
//     catch(error){
//         console.error("Error: ", error);
//         throw error;
//     }
// })();
