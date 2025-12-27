const mongoose = require("mongoose");

const EquipmentSchema = new mongoose.Schema({
  name: String,
  serialNo: String,
  department: String,
  location: String,
  assignedTeam: String,
  isScrapped: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Equipment", EquipmentSchema);
