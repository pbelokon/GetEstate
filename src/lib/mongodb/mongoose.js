import mongoose from "mongoose";

let initialized = false; 


export const connect = async () => {
  mongoose.set("strictQuery", true); 

  if (initialized) {
    console.log("MB connected!");
    return;
  }

  try { 
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "getestate-data",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    initialized=true;
  } catch (error) { 
    console.log(error);
  }
}
