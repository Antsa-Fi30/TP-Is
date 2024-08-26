const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  codeType: { type: String, required: true },
  adressePostal: { type: Number, required: true },
  email: { type: String, required: true },
  tel: { type: Number, required: true },
  organisme: { type: String, required: true },
  delegationRegionale: { type: String, required: true },
});

module.exports = mongoose.model("Item", ItemSchema);
