
import mongoose from "mongoose";

(async () => {
   try {
    mongoose.connect(`${process.env}`)
   } catch (error) {
    console.log(error)
   }

})()