import mongoose from "mongoose";

export const dbConnection = async ()=>{
    try {
        const databaseInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log('MongoDB is connected')
    } catch (error) {
        console.log(`Connection is failed`);
        process.exit(1)
    }
}