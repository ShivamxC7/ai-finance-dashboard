const cors = require("cors");
const express = require("express");
const path = require("path");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const aiRoutes = require("./routes/aiRoutes");
const connectDB = require("./config/database");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/ai", aiRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running!");
});


app.use("/transactions", transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});