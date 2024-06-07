import mongoose from "mongoose";
import { ENV } from "./env.cofig";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};