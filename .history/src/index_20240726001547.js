import mongoose from "mongoose";
import { DB_NAME } from "./constants";
(async () => {
   try {
    mongoose.connect(`${process.env.M}`)
   } catch (error) {
    console.log(error)
   }
})()