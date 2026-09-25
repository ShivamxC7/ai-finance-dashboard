const Transaction = require("../models/Transaction");

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.userId });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({
      ...req.body,
      user: req.userId,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    res.json({
      message: "Transaction deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.userId,
      },
      req.body,
      {
        new: true,
      }
    );

    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteAllTransactions = async (req, res) => {
  try {
    await Transaction.deleteMany({
      user: req.userId,
    });

    res.json({
      message: "All transactions deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};