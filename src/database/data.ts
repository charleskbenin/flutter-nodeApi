// import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv';

// dotenv.config()
// export const connectDB = async () =>
//     MongoClient.connect(
//     "mongodb+srv://test:xkB4IKXhjtPfIqex@cluster0.omc7c.mongodb.net/Todo?retryWrites=true&w=majority",
//     // process.env.MONGOOSEDB_URL as string,
//     {
//         useUnifiedTopology:true,
//     },

//     async (error, client) => {
//         if (error) throw error;
//         console.log("Db connected...")

//         const database = client.db();
//         const data = database.collection("todo");

//         let databaseConnection = await data.deleteOne({
//             "title": "Hello World",
//             "description": "Welcome to Ghana"
//         })
//         console.log(databaseConnection);
//     }
// )