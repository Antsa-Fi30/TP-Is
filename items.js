const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.post("/", async (req, res) => {
  const { name, description, quantity } = req.body;
  try {
    const newItem = new Item({ name, description, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, description, quantity } = req.body;
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { name, description, quantity },
      { new: true }
    );
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
