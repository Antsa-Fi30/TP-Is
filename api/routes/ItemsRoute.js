const express = require("express");
const router = express.Router();
const itemsController = require("../controller/ItemsController");

router.get("/items", itemsController.getAllItems);
router.get("/item/:id", itemsController.getOneItem);
router.post("/item", itemsController.createItem);
router.put("/item/:id", itemsController.updateItem);
router.delete("/item/:id", itemsController.deleteItem);

module.exports = router;
