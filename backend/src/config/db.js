import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  const fallbackUri = process.env.MONGO_FALLBACK_URI || "mongodb://127.0.0.1:27017/upfront_local";

  if (!mongoUri) {
    throw new Error("MONGO_URI is missing in environment variables");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully (Atlas)");
  } catch (error) {
    console.warn("Atlas connection failed, falling back to local MongoDB:", error.message);
    try {
      await mongoose.connect(fallbackUri);
      console.log("MongoDB connected successfully (local fallback)");
    } catch (fallbackError) {
      console.error("Both Atlas and local MongoDB connections failed:", fallbackError.message);
      throw new Error("Failed to connect to any MongoDB instance");
    }
  }
};

export default connectDB;
