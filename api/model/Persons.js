const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Quality: { type: String, required: true },
  birthDate: { type: Date, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  Units: { type: mongoose.Schema.Types.ObjectId, ref: "Unite" },
});

module.exports = mongoose.model("Persons", PersonSchema);
