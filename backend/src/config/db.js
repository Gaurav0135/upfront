import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is missing in environment variables");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully (Atlas)");
  } catch (error) {
    console.error("Atlas connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
