import { Router } from "express";
import multer from "multer";
import {
  createPortfolioItem,
  getPortfolioItems,
  updatePortfolioItem,
  deletePortfolioItem
} from "../controllers/portfolioController.js";

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  }
});

const router = Router();

router.route("/").get(getPortfolioItems).post(upload.single("image"), createPortfolioItem);

router.route("/:id").put(upload.single("image"), updatePortfolioItem).delete(deletePortfolioItem);

export default router;
