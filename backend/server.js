const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); // JSON data ko accept karne ke liye
app.use(cors()); // Frontend-Backend connection allow karega

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🔥 MongoDB Connected..."))
  .catch((err) => console.error("MongoDB Error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Backend is Running...");
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
