import mongoose from "mongoose";
import{}
(async () => {
   try {
    mongoose.connect(`${process.env}`)
   } catch (error) {
    console.log(error)
   }
})()