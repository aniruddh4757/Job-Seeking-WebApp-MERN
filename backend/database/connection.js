import mongoose from "mongoose";

export const connectdb = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "MERN_JOB",
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};




