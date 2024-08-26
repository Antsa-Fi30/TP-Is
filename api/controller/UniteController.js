const Unite = require("../model/Unite");

exports.createUnite = async (req, res) => {
  try {
    const newUnite = new Unite(req.body);
    await newUnite.save();
    res.status(201).json(newUnite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllUnites = async (req, res) => {
  try {
    const Unites = await Unite.find();
    res.json(Unites);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getOneUnite = async (req, res) => {
  try {
    const uniteId = await Unite.findById(req.params.id);
    if (!uniteId) return res.status(404).json({ message: "Unite not found" });
    res.json(uniteId);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateUnite = async (req, res) => {
  try {
    const updatedUnite = await Unite.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedUnite)
      return res.status(404).json({ message: "Unite not found" });
    res.json(updatedUnite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUnite = async (req, res) => {
  try {
    const deletedUnite = await Unite.findByIdAndDelete(req.params.id);
    if (!deletedUnite)
      return res.status(404).json({ message: "Unite not found" });
    res.json({ message: "Unite deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
