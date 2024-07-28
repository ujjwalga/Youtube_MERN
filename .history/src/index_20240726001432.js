import mongoose from "mongoose";

(async () => {
   try {
    mongoose.connect(`${}`)
   } catch (error) {
    console.log(error)
   }

})()