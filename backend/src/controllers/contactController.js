import Contact from "../models/Contact.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required"
    });
  }

  const contact = await Contact.create({ name, email, message });

  return res.status(201).json({
    success: true,
    data: contact,
    message: "Thanks for reaching out. We will contact you soon."
  });
});

export const getContacts = asyncHandler(async (_req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts
  });
});
