const express = require("express");
const router = express.Router();
const personController = require("../controller/PersonsController");

router.get("/persons", personController.getAllPersons);
router.get("/person/:id", personController.getOnePerson);
router.post("/persons", personController.createPerson);
router.put("/persons/:id", personController.updatePerson);
router.delete("/persons/:id", personController.deletePerson);

module.exports = router;
