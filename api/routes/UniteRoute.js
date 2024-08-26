const express = require("express");
const router = express.Router();
const UniteController = require("../controller/UniteController");

router.get("/unites", UniteController.getAllUnites);
router.get("/unite/:id", UniteController.getOneUnite);
router.post("/unite", UniteController.createUnite);
router.put("/unite/:id", UniteController.updateUnite);
router.delete("/unite/:id", UniteController.deleteUnite);

module.exports = router;
