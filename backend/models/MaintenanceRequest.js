const mongoose = require("mongoose");

const MaintenanceRequestSchema = new mongoose.Schema({
  equipmentName: String,
  type: String, // Corrective / Preventive
  status: {
    type: String,
    default: "New"
  },
  scheduledDate: Date,
  duration: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model(
  "MaintenanceRequest",
  MaintenanceRequestSchema
);
