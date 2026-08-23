const cors = require("cors");

const express = require("express");
require("dotenv").config();



const connectDB = require("./config/database");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running!");
});


app.use("/transactions", transactionRoutes);

app.listen(5000, () => {
  console.log("Express server running on port 5000");
});