import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = (async () => {
    try {
     const  connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`MongoDB connected ! DB HOST : ${connectionInstance.c}`);
     app.on("error", (error) => {
         console.log("Err : ", error);
         throw error
     })
 
     app.listen(process.env.PORT, ()=> {
         console.log(`App is listening on port ${process.env.PORT}`);
     })
    } catch (error) {
     console.log(error)
    }
 })