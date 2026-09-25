const express = require("express");

const router = express.Router();

const {
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
  deleteAllTransactions,
} = require("../controllers/transactionController");

const protect = require("../middleware/authMiddleware");

router.get("/", protect, getTransactions);

router.post("/", protect, createTransaction);

router.delete("/all", protect, deleteAllTransactions);

router.delete("/:id", protect, deleteTransaction);

router.put("/:id", protect, updateTransaction);

module.exports = router;