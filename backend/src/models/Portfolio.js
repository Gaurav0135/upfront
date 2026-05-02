import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true
    },
    projectUrl: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
