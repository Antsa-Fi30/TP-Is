const Persons = require("../model/Persons");

// Fonction pour obtenir toutes les personnes (Read)
exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Persons.find();
    res.json(persons);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Fonction pour obtenir une personne pour modifier (Read)
exports.getOnePerson = async (req, res) => {
  try {
    const person = await Persons.findById(req.params.id);
    res.json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Create
exports.createPerson = async (req, res) => {
  try {
    const newPerson = new Persons(req.body);
    await newPerson.save();
    res.json(newPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// update
exports.updatePerson = async (req, res) => {
  // Correction de EditPerson à updatePerson
  try {
    const updatedPerson = await Persons.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ); // Ajout de await
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deletePerson = async (req, res) => {
  try {
    await Persons.findByIdAndDelete(req.params.id); // Ajout de await
    res.json({ message: "Person deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
