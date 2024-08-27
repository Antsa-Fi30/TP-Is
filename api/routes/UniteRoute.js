const express = require("express");
const router = express.Router();
const UniteController = require("../controller/UniteController");

router.get("/unites", UniteController.getAllUnites);
router.get("/unite/:id", UniteController.getOneUnite);
router.get("/unite/:id/persons", UniteController.getUnitePersons);
router.post("/unite", UniteController.createUnite);
router.put("/updateunite/:id", UniteController.updateUnite);
router.delete("/deleteunite/:id", UniteController.deleteUnite);

module.exports = router;
