const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection (LOCAL)
mongoose.connect("mongodb://localhost:27017/gearguard")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/equipment", require("./routes/equipment"));
app.use("/api/request", require("./routes/request"));

// Health check route
app.get("/", (req, res) => {
  res.send("GearGuard backend running");
});

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
