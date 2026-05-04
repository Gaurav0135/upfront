import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";
import seedPortfolioIfEmpty from "./config/seedPortfolio.js";

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    await seedPortfolioIfEmpty();

    const server = app.listen(PORT, () => {
      console.log(`Backend server running on http://localhost:${PORT}`);
    });

    server.on("error", (error) => {
      if (error?.code === "EADDRINUSE") {
        console.error(`Failed to start server: port ${PORT} is already in use.`);
        console.error("Stop the existing backend process on this port, then restart.");
        process.exit(1);
      }

      console.error("Failed to start server", error);
      process.exit(1);
    });

    server.on("close", () => {
      console.log("Server closed");
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

startServer();
