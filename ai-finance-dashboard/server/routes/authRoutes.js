const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  getProfile,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
console.log("protect:", protect);
console.log("getProfile:", getProfile);

router.get("/profile", protect, getProfile);

module.exports = router;