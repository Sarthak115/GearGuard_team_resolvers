const express = require("express");
const router = express.Router();
const MaintenanceRequest = require("../models/MaintenanceRequest");

// GET all maintenance requests
router.get("/", async (req, res) => {
  const data = await MaintenanceRequest.find();
  res.json(data);
});

// CREATE a maintenance request
router.post("/", async (req, res) => {
  const request = new MaintenanceRequest(req.body);
  await request.save();
  res.json(request);
});

// UPDATE status
router.patch("/:id", async (req, res) => {
  const updated = await MaintenanceRequest.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(updated);
});

module.exports = router;