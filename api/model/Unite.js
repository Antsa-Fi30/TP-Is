const mongoose = require("mongoose");

const UniteSchema = new mongoose.Schema({
  numero: { type: Number, required: true },
  intitule: { type: String, required: true },
  propDate: { type: Date, required: true },
  createdDate: { type: Date, required: true },
  closeDate: { type: Date, required: true },
});

module.exports = mongoose.model("Unite", UniteSchema);
