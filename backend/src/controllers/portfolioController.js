import Portfolio from "../models/Portfolio.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getPortfolioItems = asyncHandler(async (_req, res) => {
  const items = await Portfolio.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    count: items.length,
    data: items
  });
});

export const createPortfolioItem = asyncHandler(async (req, res) => {
  const { title, category, description, projectUrl } = req.body;
  let imageUrl = req.body.imageUrl;

  // Handle file upload - convert to base64 if file is provided
  if (req.file) {
    const base64Image = req.file.buffer.toString('base64');
    imageUrl = `data:${req.file.mimetype};base64,${base64Image}`;
  }

  if (!title || !category || !description || !imageUrl) {
    return res.status(400).json({
      success: false,
      message: "title, category, description and image are required"
    });
  }

  const item = await Portfolio.create({
    title,
    category,
    description,
    imageUrl,
    projectUrl
  });

  return res.status(201).json({
    success: true,
    data: item,
    message: "Portfolio item created successfully"
  });
});

export const updatePortfolioItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, category, description, projectUrl } = req.body;

  const item = await Portfolio.findById(id);
  if (!item) {
    return res.status(404).json({ success: false, message: "Portfolio item not found" });
  }

  // If a new image file is provided, convert to base64 and update
  if (req.file) {
    const base64Image = req.file.buffer.toString('base64');
    item.imageUrl = `data:${req.file.mimetype};base64,${base64Image}`;
  }

  if (title) item.title = title;
  if (category) item.category = category;
  if (description) item.description = description;
  // Always update projectUrl if provided (including empty string to clear)
  if (projectUrl !== undefined) item.projectUrl = projectUrl || null;

  await item.save();

  return res.status(200).json({ success: true, data: item, message: "Portfolio item updated" });
});

export const deletePortfolioItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleted = await Portfolio.findByIdAndDelete(id);
  if (!deleted) {
    return res.status(404).json({ success: false, message: "Portfolio item not found" });
  }

  return res.status(200).json({ success: true, message: "Portfolio item deleted" });
});
