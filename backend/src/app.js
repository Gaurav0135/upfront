import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import contactRoutes from "./routes/contactRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';

const allowedOrigins = isDevelopment 
  ? ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176', process.env.FRONTEND_URL, process.env.ADMIN_URL]
  : [process.env.FRONTEND_URL, process.env.ADMIN_URL].filter(Boolean);

app.use(
  cors({
    credentials: true,
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Origin not allowed by CORS"));
    }
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, message: "Upfront API is running" });
});

app.use("/api/contacts", contactRoutes);
app.use("/api/portfolio", portfolioRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
