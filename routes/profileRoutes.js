// routes/profileRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const protect = require("../middleware/authMiddleware");
const {
  registerProfile,
  loginProfile,
  resetPassword,
  getProfile,
  updateProfile,
  sendResetLink,
    getAllProfiles,
} = require("../controllers/profileController");

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename(req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// Routes
router.post("/register", upload.single("image"), registerProfile);
router.post("/login", loginProfile);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", sendResetLink);
router.get("/:id", protect, getProfile);
router.put("/:id", protect, upload.single("image"), updateProfile);
router.get("/", protect, getAllProfiles); // Optionally add admin check


module.exports = router;
