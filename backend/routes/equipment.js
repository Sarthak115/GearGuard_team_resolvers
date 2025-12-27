const express = require("express");
const router = express.Router();
const Equipment = require("../models/Equipment");

// GET all equipment
router.get("/", async (req, res) => {
  const data = await Equipment.find();
  res.json(data);
});

// ADD equipment
router.post("/", async (req, res) => {
  const eq = new Equipment(req.body);
  await eq.save();
  res.json(eq);
});

module.exports = router;
