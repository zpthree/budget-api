require("dotenv").config();
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

export default function connectDB() {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
}
